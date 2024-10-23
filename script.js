//hamburger menu
const navEl = document.querySelector('.nav-list');
const menuEl = document.querySelector('.menu');
menuEl.addEventListener('click', () => {
    navEl.classList.toggle("nav--open");
    menuEl.classList.toggle("menu--open");
})

//close hamburger menu when clicking on nav links
const listitemEl = document.querySelector('.list-item');
listitemEl.addEventListener('click', () => {
    navEl.classList.remove("nav--open");
    menuEl.classList.remove("menu--open");
})

//randomizing stars
var stars = document.querySelectorAll(".star");
stars.forEach(star=>{
    star.style.top = Math.floor(Math.random()*innerHeight/2) + 'px';
    star.style.left = Math.floor(Math.random()*innerWidth) + 'px';
})

//email contact
function sendEmail() {
    window.location.href = "mailto:naik.srushti@gmail.com";
}
