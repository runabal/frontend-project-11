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
  const feedLinks = feeds.map((feed) => feed.link);
  const schema = yup.string().required().url().notOneOf(feedLinks);
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

const loadData = (validUrl, watcherState) => {
  watcherState.process.conditions = 'loading';
  watcherState.process.errors = null;

  return axios.get(getProxyUrl(validUrl))
    .then((response) => {
      const { feed, posts } = parser(response.data.contents);

      const feedId = _.uniqueId('feed_');
      watcherState.feeds.push({ ...feed, id: feedId, link: validUrl });

      posts.forEach((post) => {
        const uniquePostId = _.uniqueId('post_');
        watcherState.posts.push({ ...post, id: uniquePostId });
      });
      watcherState.process.conditions = 'success';
    })
    .catch((err) => {
      watcherState.process.conditions = 'failed';
      watcherState.process.errors = err.name;
    });
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

      const watcherState = watcher(elements, i18n, state);

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
              watcherState.posts.push(newPostWithId);
            });
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

        validate(url, watcherState.feeds)
          .then((error) => {
            if (error) {
              watcherState.form.conditions = 'failed';
              watcherState.form.errors = error;
            } else {
              watcherState.form.conditions = 'valid';
              watcherState.form.errors = null;
              setTimeout(() => {
                loadData(url, watcherState);
              }, 1000);
            }
          });
      });

      elements.posts.addEventListener('click', (e) => {
        const postId = e.target.dataset.id;
        if (!postId) {
          return;
        }

        const post = state.posts.find((p) => p.id === postId);
        if (!post) {
          return;
        }
        watcherState.currentPost = post;
        watcherState.alreadyReadPosts.add(postId);
      });
      updatePosts(watcherState);
    });
};
