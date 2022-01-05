// DOM Selectors

const openBtn = document.getElementById('add');
const closeBtn = document.querySelector('.fa-times');

openBtn.addEventListener('click', () => {
  document.querySelector('.form-container').classList.add('show');
});

closeBtn.addEventListener('click', () => {
  document.querySelector('.form-container').classList.remove('show');
});
