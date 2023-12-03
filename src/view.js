import onChange from 'on-change';

const renderFeeds = (elements, i18n, value) => {
  const { feeds } = elements;
  const header = document.createElement('h2');
  header.textContent = i18n.t('feeds');

  const feedList = document.createElement('ul');
  feedList.classList.add('list-group', 'mb-5');

  value.forEach((postItem) => {
    const feed = document.createElement('li');
    feed.classList.add('list-group-item');

    const feedHeader = document.createElement('h3');
    feedHeader.textContent = postItem.title;

    const feedDescription = document.createElement('p');
    feedDescription.textContent = postItem.description;

    feed.append(feedHeader, feedDescription);
    feedList.prepend(feed);
  });

  feeds.innerHTML = '';
  feeds.append(header, feedList);
};

const renderModalWindow = (elements, presentPost) => {
  const { modalTitle, body, redirect } = elements;
  modalTitle.textContent = presentPost.title;
  body.textContent = presentPost.description;
  redirect.href = presentPost.link;
};
const renderPosts = (elements, i18n, value, state) => {
  const { posts } = elements;
  const header = document.createElement('h2');
  header.textContent = i18n.t('posts');

  const fragment = document.createDocumentFragment();

  const postsList = document.createElement('ul');
  postsList.classList.add('list-group');

  value.forEach((postItem) => {
    const { title, link, id } = postItem;

    const post = document.createElement('li');
    post.classList.add('list-group-item', 'd-flex');
    post.classList.add('justify-content-between', 'align-items-start');

    const titleLink = document.createElement('a');
    titleLink.dataset.id = id;
    titleLink.textContent = title;
    const textClass = state.alreadyReadPosts.has(id) ? 'fw-normal' : 'fw-bold';
    titleLink.classList.add(textClass);
    titleLink.setAttribute('href', link);
    titleLink.setAttribute('target', '_blank');
    titleLink.setAttribute('rel', 'noopener noreferrer');

    const watchButton = document.createElement('button');
    watchButton.textContent = i18n.t('inspect');
    watchButton.classList.add('btn', 'btn-primary', 'btn-sm');
    watchButton.setAttribute('type', 'button');

    watchButton.dataset.id = id;
    watchButton.dataset.bsToggle = 'modal';
    watchButton.dataset.bsTarget = '#modal';

    post.append(titleLink, watchButton);
    fragment.prepend(post);
  });
  posts.innerHTML = '';
  postsList.append(fragment);
  posts.append(header, postsList);
};

const renderErrors = (elements, i18n, errorCode) => {
  if (!errorCode) {
    return;
  }
  const { feedback } = elements;
  feedback.textContent = i18n.t(errorCode);
};

const renderStatus = (elements, i18n, value) => {
  const { input, feedback, button } = elements;

  switch (value) {
    case null:
      break;

    case 'valid':
      input.classList.remove('is-invalid');
      feedback.classList.remove('text-danger', 'text-secondary');
      feedback.classList.add('text-success');
      feedback.textContent = i18n.t('successValid');
      button.disabled = false;
      break;

    case 'loading':
      input.disabled = true;
      button.disabled = true;
      feedback.classList.remove('text-danger');
      feedback.classList.remove('text-success');
      feedback.classList.add('text-secondary');
      feedback.textContent = i18n.t(value);
      break;

    case 'success':
      elements.form.reset();
      input.disabled = false;
      button.disabled = false;
      input.focus();
      input.classList.remove('is-invalid');
      feedback.classList.replace('text-secondary', 'text-success');
      feedback.textContent = i18n.t(value);
      break;

    case 'failed':
      input.classList.add('is-invalid');
      feedback.classList.remove('text-success');
      feedback.classList.remove('text-secondary');
      feedback.classList.add('text-danger');
      input.disabled = false;
      button.disabled = false;
      break;

    default:
      break;
  }
};

export default (elements, i18n, state) => {
  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'process.conditions':
        renderStatus(elements, i18n, value);
        break;
      case 'form.conditions':
        renderStatus(elements, i18n, value);
        break;
      case 'process.errors':
        renderErrors(elements, i18n, value);
        break;
      case 'form.errors':
        renderErrors(elements, i18n, value);
        break;
      case 'feeds':
        renderFeeds(elements, i18n, value);
        break;
      case 'posts':
        renderPosts(elements, i18n, value, state);
        break;
      case 'currentPost':
        renderModalWindow(elements, value);
        break;
      case 'alreadyReadPosts':
        renderPosts(elements, i18n, state.posts, state);
        break;
      default:
        break;
    }
  });
  return watchedState;
};
