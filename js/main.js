const nav = document.getElementById('menu');

const closeButton = document.getElementById('x-menu');
const openButton = document.getElementById('burger-menu-container');

closeButton.addEventListener('click', () => {
  nav.classList.remove('active');
});


openButton.addEventListener('click', () => {
  nav.classList.add('active');
});
