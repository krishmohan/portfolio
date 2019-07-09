//Select DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menuItems = menuNav.querySelectorAll('.nav-item');

let showMenu =false;

menuBtn.addEventListener('click', () => {
    if(showMenu) {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach((i) => i.classList.remove('show'));
    } else {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach((i) => i.classList.add('show'));
    }
    showMenu = !showMenu;
});