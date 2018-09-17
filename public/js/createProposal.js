/* eslint-env browser */

const startCamp = document.getElementById('startCamp');
const endCamp = document.getElementById('endCamp');

function afterMonth(date) {
  const now = new Date(date);
  const day = (`0${now.getDate()}`).slice(-2);
  const month = (`0${now.getMonth() + 2}`).slice(-2);
  const today = `${now.getFullYear()}-${month}-${day}`;
  return today;
}

startCamp.addEventListener('focusout', () => {
  const res = afterMonth(startCamp.value);
  endCamp.min = res;
  endCamp.value = res;
});

function processForm(e) {
  const imageURL = document.getElementById('imageURL');
  const errImageURL = document.getElementsByClassName('err-img')[0];

  const name = document.getElementById('name').value;
  const errName = document.getElementsByClassName('err-name')[0];

  const fund = document.getElementById('fund').value;
  const errFund = document.getElementsByClassName('err-fund')[0];

  const abstract = document.getElementById('abstract').value;
  const errAbstract = document.getElementsByClassName('err-abstract')[0];

  document.querySelectorAll('.err-msg').forEach((x) => {
    x.classList.add('err-msg-none');
  });

  if (typeof imageURL.files[0] !== 'undefined') {
    const maxSize = 1048576;
    const { size } = imageURL.files[0];
    if (maxSize < size) {
      errImageURL.classList.remove('err-msg-none');
      e.preventDefault();
      return false;
    }
  }

  if (name === '') {
    e.preventDefault();
    errName.classList.remove('err-msg-none');
    return false;
  }

  if (fund === '' || Number.isNaN(+fund)) {
    errFund.textContent = 'Please Enter a Number';
    errFund.classList.remove('err-msg-none');
    e.preventDefault();
    return false;
  }
  if (+fund < 500) {
    errFund.textContent = 'minimum fund is 500$';
    errFund.classList.remove('err-msg-none');
    e.preventDefault();
    return false;
  }

  if (abstract === '') {
    errAbstract.classList.remove('err-msg-none');
    e.preventDefault();
    return false;
  }
  return true;
}

const form = document.getElementById('createproposal');
form.addEventListener('submit', processForm);
