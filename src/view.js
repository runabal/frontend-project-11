import _  from 'lodash';
import * as yup from 'yup';
import axios from 'axios';
import {routes, schema, errorMessages, validate, validateDuplicates, handleProcessState, handleProcessError, renderError, renderErrors, render, existingWebsites } from './application.js';
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

  const errors = validate(state.form.fields);
  state.form.errors = errors;
  state.form.valid = _.isEmpty(errors);
  });
});

elements.form.addEventListener('submit', (e) => {
e.preventDefault();

state.form.processState = 'sending';
state.form.processError = null;

const data ={
website: state.form.fields.website,
};
const duplicateErrors = validateDuplicates(data);
if (duplicateErrors) {
state.form.errors = duplicateErrors;
state.form.valid = false;
return Promise.reject(new Error('Duplicate errors'));;
}
return axios
  .post(routes.userPath(), data)
  .then(() => {
    state.form.processState = 'sent';
    state.form.fields.website = '';
    state.form.valid = true;
    elements.fields.website.focus();
})
  .catch ((err) => {
    state.form.processState = 'error';
    state.form.processError = errorMessages.network.error;
    throw err;
})
})
};

//   render(elements, initialState, existingWebsites)(path, value, prevValue);
//});

//const handleFormSubmit = async(e) => {
//  e.preventDefault();
 // state.form.processState = 'sending';
 // state.form.processError = null;

//try {
 // const data = { website: state.form.fields.website };

 // const errors = validate(state.form.fields);
 // const duplicatesErrors = validateDuplicates(state.form.fields, existingWebsites);

//if (errors || duplicatesErrors) {
//  state.form.errors = {...errors, ...duplicatesErrors };
 // state.form.valid = false;
//  return;
//}
 // await axios.post(routes.usersPath(), data);
 // state.form.processState = 'sent';
//} // catch (err) {
 // state.form.processStare = 'error';
 // state.form.processError = errorMessages.network.error;
 // throw err;
//}
//};

//const handleFieldInput = async (e) => {
 // const {value } = e.target;
 // state.form.fields.website = value;
  //state.form.fieldsUi.touched.website = true;
  //try {
  //const data = { website: value };
  //const response = await axios.post(routes.usersPath(), data, {
  //website: value,
  //});
  //if (response.data.exist) {
 // state.form.errors = { website: 'This URL already exist'};
 // state.form.valid = false;
//} else {
 // state.form.errors = {};
 // state.form.valid = true;
//}
//} catch (error) {
//state.form.errors = { website: 'An error occured while  checking the URL'};
//state.form.valid = false;
//throw error
//}

 // const errors = validate(state.form.fields);
 // const duplicatesErrors = validateDuplicates(state.form.fields);
 // state.form.errors = { ...errors, ...duplicatesErrors };
  //state.form.valid = _.isEmpty(errors) && !duplicatesErrors;
//};
 // elements.form.addEventListener('submit', handleFormSubmit);
 // elements.fields.website.addEventListener('input', handleFieldInput);


//};
