const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close")
const navItem = document.querySelectorAll(".nav__item")


navOpen.addEventListener('click', () => {
    navMenu.classList.add("nav__menu--open")
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove("nav__menu--open")
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove("nav__menu--open")
    })
})



















