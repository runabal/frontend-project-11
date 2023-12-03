import _ from 'lodash';
import * as yup from 'yup';
import axios from 'axios';
import i18next from 'i18next';
import parser from './parser.js';
import watched from './view.js';
import languages from './translate/languages.js';
import customMessages from './translate/customMessages.js';

const proxy = 'https://allorigins.hexlet.app';
const defaultLanguage = 'ru';
const delay = 5000;

const getErrorCode = (err) => {
  if (!err) {
    return 'errors.somethingWrong';
  }

  if (err.isAxiosError) {
    return 'errors.networkError';
  }

  if (err.message === customMessages.mixed.notOneOf) {
    return 'errors.alreadyExist';
  }
  if (err.message === customMessages.string.url) {
    return 'errors.urlError';
  }
  if (err.message === 'rssError') {
    return 'errors.rssError';
  }
  return 'errors.somethingWrong';
};

const validate = (url, urls) => {
  const schema = yup.string().required().url().notOneOf(urls);
  return schema.validate(url, { abortEarly: false })
    .then(() => null)
    .catch((err) => err.errors.join());
};

const getProxyUrl = (url) => {
  const params = { disableCache: true, url };
  const proxyUrl = new URL('/get', proxy);
  proxyUrl.search = new URLSearchParams(params);
  return proxyUrl.toString();
};

const loadData = (validUrl, watchedState) => {
  watchedState.process.conditions = 'loading';
  watchedState.process.errors = null;

  return axios.get(getProxyUrl(validUrl))
    .then((response) => {
      const { feed, posts } = parser(response.data.contents);

      const feedId = _.uniqueId('feed_');
      watchedState.feeds.push({ ...feed, id: feedId, link: validUrl });

      posts.forEach((post) => {
        const uniquePostId = _.uniqueId('post_');
        watchedState.posts.push({ ...post, id: uniquePostId });
      });
      watchedState.process.conditions = 'success';
    })
    .catch((err) => {
      watchedState.process.conditions = 'failed';
      watchedState.process.errors = getErrorCode(err);
    });
};

export default () => {
  const elements = {
    form: document.querySelector('.rss-form'),
    input: document.querySelector('#url-input'),
    button: document.querySelector('#rss-button'),
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

      const state = {
        form: {
          conditions: '',
          errors: '',
        },
        process: {
          conditions: '',
          errors: '',
        },
        feeds: [],
        posts: [],
        currentPost: {},
        alreadyReadPosts: new Set(),
      };

      const watchedState = watched(elements, i18n, state);

      const updatePosts = () => {
        const { feeds, posts } = state;

        const promises = feeds.map((feed) => {
          const url = getProxyUrl(feed.link);
          return axios.get(url).then((response) => {
            const { posts: newPosts } = parser(response.data.contents);

            const existingLinks = new Set(posts.map((post) => post.link));
            const newUniquePosts = newPosts.filter((newPost) => !existingLinks.has(newPost.link));

            newUniquePosts.forEach((newPost) => {
              const newPostWithId = { ...newPost, id: _.uniqueId('post_') };
              watchedState.posts.push(newPostWithId);
            });
          });
        });

        Promise.all(promises)
          .catch((err) => {
            watchedState.process.conditions = 'failed';
            watchedState.process.errors = getErrorCode(err);
          })
          .finally(() => {
            setTimeout(updatePosts, delay);
          });
      };

      elements.form.addEventListener('submit', (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const url = form.get('url');
        const feedUrls = watchedState.feeds.map((feed) => feed.link);

        validate(url, feedUrls)
          .then((error) => {
            if (error) {
              watchedState.form.conditions = 'failed';
              watchedState.form.errors = getErrorCode(new Error(error));
            } else {
              watchedState.form.conditions = 'valid';
              watchedState.form.errors = null;
              loadData(url, watchedState);
            }
          });
      });

      elements.posts.addEventListener('click', (e) => {
        const postId = e.target.dataset.id;
        if (!postId) {
          return;
        }

        const selectedPost = state.posts.find((post) => post.id === postId);
        if (!selectedPost) {
          return;
        }
        watchedState.currentPost = selectedPost;
        watchedState.alreadyReadPosts.add(postId);
      });
      updatePosts(watchedState);
    });
};
