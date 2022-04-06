// hamburger animation

const hamburgerWrapper = document.querySelector('.movie-hunt-navbar__burger-wrapper');
let hamburgerOpened = false;

hamburgerWrapper.addEventListener('click', () => {
    if(!hamburgerOpened) {
        hamburgerWrapper.classList.add('navbar__burger--open');
        navbar.classList.add('movie-hunt-navbar--black');
        hamburgerOpened = true;
    } else {
        hamburgerWrapper.classList.remove('navbar__burger--open');
        navbar.classList.remove('movie-hunt-navbar--black');
        hamburgerOpened = false;
    }
})

// navbar overlay background-color change on scroll

const navbar = document.querySelector('.movie-hunt-navbar');

window.addEventListener('scroll', e => {
    const scroll = this.scrollY;
    if(scroll > 0 ) {
        navbar.classList.add('movie-hunt-navbar--black');
    } else {
        navbar.classList.remove('movie-hunt-navbar--black');
    }
})

// on hover autoplay
const hoverAutoplay = (hovering, element) => {
    const video = element.getElementsByTagName("video")[0];
    const cardBody = element.getElementsByClassName("index-carousel-card__body")[0];
    if(hovering) {
        video.play();
        element.classList.add("index__video-card--bigger")
        cardBody.classList.add("index-carousel-card__body--show");
    } else {
        video.pause();
        element.classList.remove("index__video-card--bigger")
        cardBody.classList.remove("index-carousel-card__body--show");
    }
}