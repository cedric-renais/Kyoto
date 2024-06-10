//*************//
// MENU BURGER //
//*************//
// Selectionne les éléments de la barre de navigation
const navbarIcon = document.querySelector('.navbar__icon');
const navbarMenu = document.querySelector('.navbar__menu');
// Ajoute un écouteur d'événements pour le clic sur l'icône de la barre de navigation pour activer le menu
navbarIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
// Sélectionne les liens de la barre de navigation
const navbarLinks = document.querySelectorAll('.navbar__link');
// Ajoute un écouteur d'événements pour le clic sur les liens de la barre de navigation pour masquer le menu
navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  });
});
//********//
// FOOTER //
//********//
// Sélectionne l'élément du footer qui contient l'année
const footerYear = document.querySelector('.footer__year');
// Obtient l'année en cours
const currentYear = new Date().getFullYear();
// Il met à jour le texte de l'élément du footer avec l'année en cours.
footerYear.textContent = currentYear;
