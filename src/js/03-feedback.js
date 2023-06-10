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
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Рабочие

// import throttle from "lodash.throttle";

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
//   emailInput: document.querySelector('.js-feedback-form input[type="email"]'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.emailInput.addEventListener('input', throttle(onEmailInput, 500));

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...formData, message }));
// }

// function onEmailInput(evt) {
//   const email = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...formData, email }));
// }

// function populateForm() {
//   const savedData = localStorage.getItem(STORAGE_KEY);
  
//   if (savedData) {
//     const { message, email } = JSON.parse(savedData);
//     console.log(message);
//     console.log(email);
//     refs.textarea.value = message || '';
//     refs.emailInput.value = email || '';
//   }
// }

// populateForm();

//!!!!!!!!!!!!!!!Практика
import throttle from "lodash.throttle";

const form = document.querySelector('.js-feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');
console.log(email,form,message)
const localKey = 'feedback-form-state';

form.addEventListener('input',throttle(storageFormData,500) );
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
  event.preventDefault();
//1 метод витяга з форми
  // const { email, message } = event.currentTarget.elements;
  // console.dir({ email: email.value, message: message.value })
  //Конец 1 метода
  //Clear localStorage
//2 метод альтернативний 1
  const savedData = JSON.parse(localStorage.getItem(localKey));
  console.dir(savedData)
///конец 2 метода

  localStorage.removeItem(localKey);

  event.currentTarget.reset();

}

function storageFormData(event) {
  const formValue = { email: '', message: '' };
  
    if (localStorage.getItem(localKey)) {
      Object.assign(formValue, JSON.parse(localStorage.getItem(localKey)))
      //Проверить метод Object.assign
}
  formValue[event.target.name] = event.target.value;
  console.log(formValue);
  //Добавляем в Локал стор
  localStorage.setItem(localKey, JSON.stringify(formValue));

}

