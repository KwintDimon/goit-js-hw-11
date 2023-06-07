// import throttle from "lodash.throttle";
// const STORAGE_KEY = 'feedback-form-state';

// const formData={}

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//  // console.log(e.target.name);
//  // console.log(e.target.value);
//   formData[e.target.name] = e.target.value;
//   console.log(formData)
// })

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem('STORAGE_KEY')
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem('STORAGE_KEY', message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem('STORAGE_KEY');
  
//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }

// populateTextarea()
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
  emailInput: document.querySelector('.js-feedback-form input[type="email"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.emailInput.addEventListener('input', throttle(onEmailInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...formData, message }));
}

function onEmailInput(evt) {
  const email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...formData, email }));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    const { message, email } = JSON.parse(savedData);
    console.log(message);
    console.log(email);
    refs.textarea.value = message || '';
    refs.emailInput.value = email || '';
  }
}

populateForm();

