import _ from 'lodash';
import * as yup from 'yup';
import axios from 'axios';


export let existingWebsites = [];

export const validateDuplicates = (fields) => {
const { website } = fields;
const isDuplicate = existingWebsites.includes(website);
if(isDuplicate) {
return {website: 'This URL already exists' };
}
existingWebsites.push(website);
return null;
};
console.log(existingWebsites);


export const updateExistingWebsites = (newwebsites) => {
existingWebsites = [...existingWebsites, ...newWebsites];
};

export const schema = yup.object().shape({
   website: yup
  .string()
  .required("URL field is required")
  .url('Invalid URL')
  .notOneOf(existingWebsites, 'This url already exists'),
});

export const errorMessages = {
  network: {
 error: 'Network Problems. Try again',
    },
};

export const handleProcessStateSuccess = () => {
  elements.container.innerHTML = 'RSS added successfully!';
  elements.fields.website.value = '';
};

export const handleProcessStateDuplicate = () => {
element.container.innerHTML = 'This URL already exists';
};

export const validate = (fields) => {
try {
 const { website } = fields;

 const schemaErrors = schema.validateSync(fields, { abortEarly: false });
  return { ..._.keyBy(schemaErrors.inner, 'path') };
} catch (e) {
  return _.keyBy(e.inner, 'path');
}
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
