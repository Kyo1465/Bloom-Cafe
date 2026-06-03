const menuBtn = document.querySelector('.header__nav-btn');
const menu = document.querySelector('.header__nav ul');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
} );