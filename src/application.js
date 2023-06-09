import _ from 'lodash';
import * as yup from 'yup';
import axios from 'axios';


export let urls = [];


export const updateUrls = (newUrls) => {
urls = newUrls;
};


export const validateDuplicates = (fields, urls) => {
const {website} = fields;
const isDuplicate = urls.includes(website);
if (isDuplicate) {
  return Promise.reject({website: 'This URL already exists'});
 }
urls.push(website);
console.log(urls);
return validate(website, urls)
  .then((error) => {
    if (error) {
     state.form.errors = { website: error };
     state.form.valid = false;
   } else {
     state.form.errors = {};
    state.form.valid = true;
   }
   })
  .catch ((error) => {
   console.log(error);
  });
};

export const errorMessages = {
  network: {
    error: 'Network Problems. Try again',
    },
};

export const handleProcessStateSuccess = (elements) => {
  elements.container.innerHTML = 'RSS added successfully!';
  elements.fields.website.value = '';
};

export const handleProcessStateDuplicate = (elements) => {
element.container.innerHTML = 'This URL already exists';
};

export const validate = (url, urls) => {

 const schema = yup
  .string()
  .url('Invalid URL')
  .required('URL field is required')
   return schema
  .notOneOf(urls)
  .then(() => null)
  .catch((error) => error.message);
};

export const handleProcessState = (elements, processState) => {
  switch (processState) {
    case 'sent':
      elements.container.innerHTML = 'RSS added succesfully!';
      break;
    case 'error':
      elements.submitButton.disabled = false;
      break;
    case 'sending':
      elements.submitButton.disabled = true;
      break;
    case 'filling':
      elements.submitButton.disabled = false;
      break;
    default:
      throw new Error('Unknown process state!');
  }
};

export const handleProcessError = () => {};

export const renderError = (fieldElement, error) => {
  const feedbackElement = fieldElement.nextElementSibling;
  if (feedbackElement) {
    feedbackElement.textContent = error.message;
    return;
}

fieldElement.classList.add('is-invalid');
fieldElement.classList.remove('is-valid');

const newFeedbackElement = document.createElement('div');
newFeedbackElement.classList.add('invalid-feedback');
newFeedbackElement.textContent = error.message;
fieldElement.after(newFeedbackElement);
};

export const clearErrors = (elements) => {
   Object.values(elements.fields).forEach((fieldElement) => {
      fieldElement.classList.remove('is-valid');
      fieldElement.classList.remove('is-invalid');

      const feedbackElement = fieldElement.nextElementSibling;
      if (feedbackElement) {
        feedbackElement.remove();
}
})
};

export const renderErrors = (elements, errors, prevErrors, state) => {
  Object.entries(elements.fields).forEach(([fieldName, fieldElement]) => {
    const error = errors[fieldName];
    const fieldHadError = _.has(prevErrors, fieldName);
    const fieldHasError = _.has(errors, fieldName);
    if (!fieldHadError && !fieldHasError) {
      return;
  }

  if (fieldHadError && !fieldHasError) {
    fieldElement.classList.add('is-valid');
    fieldElement.classList.remove('is-invalid');
   const feedbackElement = fieldElement.nextElementSibling;
   if (feedbackElement) {
     feedbackElement.remove();
   }
    return;
  }
  if (state.form.fieldsUi.touched[fieldName] && fieldHasError) {
    renderError(fieldElement, error);
  }
  });
};

export const render = (elements, initialState) => (path, value, prevValue) => {
  clearErrors(elements); 
  switch (path) {
    case 'form.processState':
      handleProcessState(elements, value);
      break;
    case 'form.processError':
      handleProcessError();
      break;
    case 'form.valid':
      elements.submitButton.disabled = !value;
      break;
    case 'form.errors':
      renderErrors(elements, value, prevValue, initialState);
      break;
    default:
      break;
  }
};
