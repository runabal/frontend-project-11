import _ from 'lodash';
import * as yup from 'yup';
import axios from 'axios';
import i18next from 'i18next';
import parser from './parser.js';
import watcher from './view.js';
import languages from './translate/languages.js';
import customMessages from './translate/customMessages.js';

const proxy = 'https://allorigins.hexlet.app';
const defaultLanguage = 'ru';
const delay = 5000;

const validate = (url, feeds) => {
  const schema = yup.string().required().url().notOneOf(feeds);
  return schema.validate(url, { abortEarly: false });
};

const getProxyUrl = (url) => {
  const params = { disableCache: true, url };
  const proxyUrl = new URL('/get', proxy);
  proxyUrl.search = new URLSearchParams(params);
  return proxyUrl.toString();
};

export default () => {
  const elements = {
    form: document.querySelector('.rss-form'),
    input: document.querySelector('#url-input'),
    button: document.querySelector('.h-100'),
    feedback: document.querySelector('.feedback'),
    feeds: document.querySelector('.feeds'),
    posts: document.querySelector('.posts'),
    modalFade: document.querySelector('#modal'),
    modalTitle: document.querySelector('#modal .modal-title'),
    body: document.querySelector('#modal .modal-body'),
    redirect: document.querySelector('#modal a'),
  };

  const i18n = i18next.createInstance();

  i18n
    .init({
      lng: defaultLanguage,
      debug: true,
      resources: languages,
    })
    .then(() => {
      yup.setLocale(customMessages);
    });

  const state = {
    form: {
      conditions: '',
      errors: '',
    },
    process: {
      conditions: '',
      errors: '',
    },
    links: [],
    feeds: [],
    posts: [],
    currentPost: {},
    alreadyReadPosts: [],
  };

  const watcherState = watcher(elements, i18n, state);

  const updatePosts = () => {
    const { feeds, posts } = state;

    const promises = feeds.map((feed) => {
      const url = getProxyUrl(feed.link);
      return axios.get(url).then((response) => {
        const data = parser(response.data.contents);
        const currentPost = data.posts.map((post) => ({
          ...post,
          id: feed.id,
        }));
        const oldPosts = posts.filter((post) => post.id === feed.id);
        const newPosts = _.differenceWith(
          currentPost,
          oldPosts,
          _.isEqual,
        );

        if (newPosts.length > 0) {
          newPosts.forEach((post) => {
            watcherState.posts.push(post);
          });
        }
      });
    });
    Promise.all(promises)
      .catch((err) => {
        watcherState.process.conditions = 'failed';
        watcherState.process.errors = err.name;
      })
      .finally(() => {
        setTimeout(updatePosts, delay);
      });
  };

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const url = form.get('url');

    validate(url, watcherState.links)
      .then((validUrl) => {
        watcherState.process.conditions = 'loading';
        watcherState.process.errors = null;
        axios
          .get(getProxyUrl(validUrl))
          .then((response) => {
            const { feed, posts } = parser(response.data.contents);

            watcherState.links.push(validUrl);
            watcherState.process.conditions = 'success';
            watcherState.form.conditions = '';
            watcherState.form.errors = null;

            const id = _.uniqueId();
            watcherState.feeds.push({ ...feed, id, link: validUrl });
            posts.forEach((post) => watcherState.posts.push({ ...post, id }));
          })
          .catch((err) => {
            watcherState.process.conditions = 'failed';
            watcherState.form.errors = err.name;
            watcherState.form.conditions = '';
            watcherState.process.errors = null;
          });
      })
      .catch((err) => {
        watcherState.form.conditions = 'failed';
        watcherState.form.errors = err.errors.join();
        watcherState.process.conditions = '';
        watcherState.process.errors = null;
      });
  });

  elements.posts.addEventListener('click', (e) => {
    const currentLink = e.target.href ?? e.target.previousElementSibling.href;
    const presentPost = state.posts.find(
      (item) => item.link === currentLink,
    );
    // watchedState.alreadyReadPosts.add(presentPost.link);
    watcherState.currentPost = presentPost;
  });
  updatePosts();
};
