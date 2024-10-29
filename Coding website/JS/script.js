hamburger = document.querySelector ('.hamburger');
navbar = document.querySelector ('.navbar');
navList = document.querySelector ('.nav-list');
rightNav = document.querySelector ('.rightNav');


hamburger.addEventListener ('click', () => {
    rightNav.classList.toggle('visibal-resp');
    navList.classList.toggle('visibal-resp');
    navbar.classList.toggle('h-nav-resp');
});