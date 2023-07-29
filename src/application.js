import _ from "lodash";
import * as yup from "yup";
import axios from "axios";
import onChange from "on-change";
import parser from "./parser.js";
import watcher from "./view.js";
import i18next from "i18next";
import languages from "./translate/languages.js";

const validate = (url, feeds) => {
  const schema = yup.string().required().url().notOneOf(feeds);
  return schema.validate(url, { abortEarly: false });
};

const getProxyedUrl = (url) => {
  const proxy = "https://allorigins.hexlet.app";
  const params = { disableCache: true, url };

  const proxyUrl = new URL("/get", proxy);
  proxyUrl.search = new URLSearchParams(params);
  return proxyUrl.toString();
};

export default () => {
  const elements = {
    form: document.querySelector(".rss-form"),
    input: document.querySelector("#url-input"),
    button: document.querySelector(".btn-primary.px-sm-5"),
    feedback: document.querySelector("#error-message"),
    feeds: document.querySelector(".feeds"),
    posts: document.querySelector(".posts"),
    modalFade: document.querySelector("#modal"),
    modalTitle: document.querySelector(".modal-title"),
    body: document.querySelector(".modal-body"),
    redirect: document.querySelector(".full-article"),
  };

  const defaultLanguage = "ru";
  const delay = 5000;
  const i18n = i18next.createInstance();

  i18n
    .init({
      lng: defaultLanguage,
      debug: true,
      resources: languages,
    })
    .then(() => {
      yup.setLocale({
        string: {
          url: "errors.urlError",
        },
        mixed: {
          notOneof: "errors.alreadyExist",
        },
      });
    });

  const processStateHandler = (state) => {
    if (state.processState === "loading") {
      return "loading";
    }
    if (state.processState === "finished") {
      return "finished";
    }
    return "failed";
  };

  const formStateHandler = (state) => {
    if (state.formState === "filling") {
      return "filling";
    }
    if (state.formState === "sending") {
      return "sending";
    }
    return "failed";
  };

  const state = {
    form: {
      conditions: "",
      errors: "",
    },
    process: {
      conditions: "",
      errors: "",
    },
    links: [],
    feeds: [],
    posts: [],
    currentPosts: {},
    alreadyReadPosts: [],
  };

  const watchedState = watcher(elements, i18n, state);

  const updatePosts = () => {
    const { feeds, posts } = state;

    const promises = feeds.map((feed) => {
      const url = getProxyedUrl(feed.link);
      return axios.get(url).then((response) => {
        const data = parser(response.data.contents);
        const currentPosts = data.posts.map((post) => ({
          ...post,
          id: feed.id,
        }));
        const oldPosts = posts.filter((post) => post.id === feed.id);
        const newPosts = _.differenceWith(currentPosts, oldPosts, _.isEqual);

        if (newPosts.length > 0) {
          newPosts.forEach((post) => {
            watchedState.posts.push(post);
          });
        }
      });
    });
    return Promise.all(promises)
      .catch((err) => {
        watchedState.process.conditions = "failed";
        watchedState.process.errors = err.name;
      })
      .finally(() => {
        setTimeout(updatePosts, delay);
      });
  };

  elements.form.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const url = form.get("url");

    validate(url, watchedState.links)
      .then((validUrl) => {
        watchedState.process.conditions = "loading";
        watchedState.process.errors = null;
        axios
          .get(getProxyedUrl(validUrl))
          .then((response) => {
            const { feed, posts } = parser(response.data.contents);

            watchedState.links.push(validUrl);
            watchedState.process.conditions = "success";
            watchedState.form.conditions = "";
            watchedState.form.errors = null;

            const id = _.uniqueId();
            watchedState.feeds.push({ ...feed, id, link: validUrl });
            posts.forEach((post) => watchedState.posts.push({ ...post, id }));
          })
          .catch((err) => {
            watchedState.process.conditions = "failed";
            watchedState.process.errors = err.name;
            watchedState.form.conditions = "";
            watchedState.form.errors = "";
          });
      })
      .catch((err) => {
        watchedState.form.conditions = "failed";
        watchedState.form.errors = err.errors ? err.errors.join() : "Ошибка";
        watchedState.process.conditions = "";
        watchedState.process.errors = null;
      });
  });

  elements.posts.addEventListener("click", (e) => {
    const currentLink = e.target.href ?? e.target.previousElementSibling.href;
    const currentPost = state.posts.find((item) => item.link === currentLink);
    watchedState.currentPosts = currentPost;

    if (!state.alreadyReadPosts.includes(currentPost)) {
      state.alreadyReadPosts.push(currentPost);
    }
  });
  updatePosts();
};
