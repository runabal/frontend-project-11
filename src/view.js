import _  from 'lodash';
import * as yup from 'yup';
import axios from 'axios';
import {validate, validateDuplicates, handleProcessState,handleProcessError, handleProcessStateDuplicate, handleProcessStateSuccess, renderError, renderErrors, render, urls, updateUrls} from './application.js';
import onChange from 'on-change';


export default () => {

  const elements = {
    container: document.getElementsByClassName('row')[0],
    form: document.getElementsByClassName('form-floating')[0],
    fields: {
    website: document.getElementById('url-input'),
  },
  submitButton: document.querySelector('button[type="submit"]'),
  };
  const initialState = {
    form: {
      valid: true,
      processState: 'filling',
      processError: null,
      errors: {},
      fields: {
      website: '',
   },
    fieldsUi: {
      touched: {
        website: false,
      },
    },
  },
};


const state = onChange(initialState, (path, value, prevValue) => {
  render(elements, initialState)(path, value, prevValue);
});
  const fields = Object.entries(elements.fields);
  
  fields.forEach(([fieldName, fieldElement]) => {
  fieldElement.addEventListener('input', (e) => {
  const {value} = e.target;
  state.form.fields[fieldName] = value;
  state.form.fieldsUi.touched[fieldName] = true;


  validate(state.form.fields.website)
  .then(() => {
     state.form.errors = {};
    state.form.valid = true;
  })
  .catch((error) => {
   state.form.errors = {website: error.message };
   state.form.valid = false;
    });
  });
});

elements.form.addEventListener('submit', (e) => {
e.preventDefault();

state.form.processState = 'sending';
state.form.processError = null;

const data ={
  website: state.form.fields.website,
};

const duplicateErrors = validateDuplicates(data, urls);
if (duplicateErrors) {
state.form.errors = duplicateErrors;
state.form.valid = false;
handleProcessStateDuplicate(elements);
return;
}


axios
  .post(routes.userPath(), data)
  .then(() => {
    state.form.processState = 'sent';
    state.form.valid = true;
    elements.fields.website.focus()
    handleProcessStateSuccess(elements);
})
  .catch ((err) => {
    state.form.processState = 'error';
    state.form.processError = errorMessages.network.error;
    throw err;
})
})
};
