const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
