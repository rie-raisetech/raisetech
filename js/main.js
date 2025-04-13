const hamburger = document.querySelector('.js-hamburger');
const sidebar = document.querySelector('.js-sidebar');
const closeBtn = document.querySelector('.js-close');
const overlay = document.querySelector('.js-overlay');

hamburger.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
    sidebar.classList.add('is-active');
    overlay.classList.add('is-active');
    }
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('is-active');
    overlay.classList.remove('is-active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('is-active');
    overlay.classsList.remove('is-active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        sidebar.classList.remove('is-active');
        overlay.classList.remove('is-active');
    }
});