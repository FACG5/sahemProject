
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementsByClassName('donateBtn')[0];
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const donateInput = document.getElementsByClassName('donateInput')[0];
const amount = document.getElementById('amount');

modalBtn.addEventListener('click', () => {
  amount.value = donateInput.value;
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
