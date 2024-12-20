const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')

// Cuando el scroll baje determinada cantidad de pixeles cambia de color el navbar
window.addEventListener('scroll', () => {
    if (this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

// Activar el menu movil
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

// Mostrar en que parte del menu nos encontramos
navLinksLi.forEach(li => li.addEventListener('click', () =>{
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')
}))


// Typed JS
var typed = new Typed('#hero-titles', {
    strings: [
        'Creative Agency',
        'SEO',
        'Marketing Digital',
    ],
    typeSpeed: 40,
    loop: false,
    loopCount: Infinity,
    // startDelay: 50,
    backSpeed: 10,

});

// AOS
AOS.init();
