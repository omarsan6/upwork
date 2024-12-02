const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')


window.addEventListener('scroll', () => {
    if(this.scrollY >= 100){
        navbar.classList.add('scrolled')
    } else{
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

// Typed JS
var typed = new Typed('#hero-titles', {
    strings: [
        'Creative Agency', 
        'SEO',
        'Marketing Digital',
    ],
    typeSpeed: 40,
    loop:false,
    loopCount: Infinity,
    // startDelay: 50,
    backSpeed:10,

  });