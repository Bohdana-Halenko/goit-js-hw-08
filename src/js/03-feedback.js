import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

//обновление хранилища каждые 500 миллисекунд
form.addEventListener('input', throttle(localStorageFn, 500));

const dataObj = {};

function localStorageFn(evt) {
  dataObj[emailInput.name] = emailInput.value;
  dataObj[messageInput.name] = messageInput.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));
}

const savedData = localStorage.getItem(STORAGE_KEY);
const parsedData = JSON.parse(savedData);

form.addEventListener('submit', onFormClear);

function onFormClear(evt) {
  evt.preventDefault();
  console.log(`${emailInput.name}:`, emailInput.value);
  console.log(`${messageInput.name}:`, messageInput.value);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function localStorageCheck() {
  if (localStorage.getItem(STORAGE_KEY)) {
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
  return;
}
localStorageCheck();