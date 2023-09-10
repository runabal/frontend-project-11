import _ from 'lodash';
import * as yup from 'yup';
import axios from 'axios';
import i18next from 'i18next';
import parser from './parser.js';
import watcher from './view.js';
import languages from './translate/languages.js';
import customMessages from './translate/customMessages.js';

const validate = (url, feeds) => {
  const schema = yup.string().required().url().notOneOf(feeds);
  return schema.validate(url, { abortEarly: false });
};

const getProxyUrl = (url) => {
  const proxy = 'https://allorigins.hexlet.app';
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

  const defaultLanguage = 'ru';
  const delay = 5000;
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
    currentPosts: {},
    alreadyReadPosts: [],
  };

  const watchedState = watcher(elements, i18n, state);

  const updatePosts = () => {
    const { feeds, posts } = state;

    const promises = feeds.map((feed) => {
      const url = getProxyUrl(feed.link);
      return axios.get(url).then((response) => {
        const data = parser(response.data.contents);
        const currentPosts = data.posts.map((post) => ({
          ...post,
          id: feed.id,
        }));
        const oldPosts = posts.filter((post) => post.id === feed.id);
        const newPosts = _.differenceWith(
          currentPosts,
          oldPosts,
          _.isEqual,
        );

        if (newPosts.length > 0) {
          newPosts.forEach((post) => {
            watchedState.posts.push(post);
          });
        }
      });
    });
    Promise.all(promises)
      .catch((err) => {
        watchedState.process.conditions = 'failed';
        watchedState.process.errors = err.name;
      })
      .finally(() => {
        setTimeout(updatePosts, delay);
      });
  };

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const url = form.get('url');

    validate(url, watchedState.links)
      .then((validUrl) => {
        watchedState.process.conditions = 'loading';
        watchedState.process.errors = null;
        axios
          .get(getProxyUrl(validUrl))
          .then((response) => {
            const { feed, posts } = parser(response.data.contents);

            watchedState.links.push(validUrl);
            watchedState.process.conditions = 'success';
            watchedState.form.conditions = '';
            watchedState.form.errors = null;

            const id = _.uniqueId();
            watchedState.feeds.push({ ...feed, id, link: validUrl });
            posts.forEach((post) => watchedState.posts.push({ ...post, id }));
          })
          .catch((err) => {
            watchedState.process.conditions = 'failed';
            watchedState.form.errors = err.name;
            watchedState.form.conditions = '';
            watchedState.process.errors = null;
          });
      })
      .catch((err) => {
        watchedState.form.conditions = 'failed';
        watchedState.form.errors = err.errors.join();
        watchedState.process.conditions = '';
        watchedState.process.errors = null;
      });
  });

  elements.posts.addEventListener('click', (e) => {
    const currentLink = e.target.href ?? e.target.previousElementSibling.href;
    const currentPost = state.posts.find(
      (item) => item.link === currentLink,
    );
    watchedState.currentPosts = currentPost;
  });
  updatePosts();
};
