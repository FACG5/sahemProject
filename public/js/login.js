/* eslint-env browser */

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailErr = document.querySelector('#emailErr');
const passErr = document.querySelector('#passErr');
const login = document.querySelector('#login');

const displayErr = (errElem, errMsg) => {
  errElem.innerText = errMsg;
};

const checkEmail = () => {
  if (email.validity.typeMismatch) {
    displayErr(emailErr, 'Please enter a valid email address');
  } else if (email.validity.valueMissing) {
    displayErr(emailErr, 'Please enter an email address');
  } else {
    displayErr(emailErr, '');
    return true;
  }
};

const checkPw = () => {
  if (password.validity.valueMissing) {
    displayErr(passErr, 'Please enter a password');
  } else {
    displayErr(passErr, '');
    return true;
  }
};

email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPw);

login.addEventListener('submit', (e) => {
  if (!checkEmail() || !checkPw()) {
    e.preventDefault();
  }
});
