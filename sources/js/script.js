const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

// Affiche ou cache le menu
btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnMenu.classList.toggle('active');
  btnMenu.src = menu.classList.contains('active')
    ? './sources/assets/svg/close.svg'
    : './sources/assets/svg/menu.svg';
});

const allLinks = document.querySelectorAll('.item-nav');

// Cache le menu lorsqu'on clique sur un lien et change l'icône du menu
allLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    btnMenu.classList.remove('active');
    btnMenu.src = './sources/assets/svg/menu.svg';
  });
});

// Ajoute l'année en cours dans le footer
const year = new Date().getFullYear();
document.querySelector('.year').textContent = year;
