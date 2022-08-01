//change BG header
let header = document.querySelector('header');
let heightHeader = header.clientHeight;
function changeBgHeader() {
    let scrollY = window.pageYOffset;
    if(scrollY > heightHeader) {
        header.classList.add('active')
    }else {
        header.classList.remove('active')
    }
}

//Scrollup
let scrollUp = document.querySelector('.scrollup');
let getHeightWindow = window.innerHeight;
console.log(getHeightWindow);
function showScrollUp() {
    let scrollY = window.pageYOffset;
    if(scrollY > getHeightWindow) {
        scrollUp.classList.add('show')
    }else {
        scrollUp.classList.remove('show')
    }
}

scrollUp.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: `smooth`,
    })
});

document.addEventListener('scroll', function() {
    changeBgHeader();
    showScrollUp();
});
// Menu mobile
const navMenu = document.querySelector('.nav__menu'),
      navToggle = document.querySelector('.nav__toggle'),
      navClose = document.querySelector('.nav__close'),
      navLink = document.querySelectorAll('.nav__link')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

function linkAction() {
    const navMenu = document.querySelector('.nav__menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

let $carousel = $('.main-carousel');
$carousel.flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  wrapAround: true
});

let $carouselBottom = $('.new__list');
$carouselBottom.flickity({
  // options
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  pageDots: false,
  lazyLoad: false
});

//Scroll to section
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.main-carousel, .new__list, .newsletter__container')
sr.reveal('.category__data, .trick__content, .footer__content', {interval: 100})
sr.reveal('.about__data, .discount__img', {origin: 'left'})
sr.reveal('.about__img, .discount__data', {origin: 'right'})


Splitting();
let cursor = document.querySelector('.cursor'),
    cursorText = document.querySelectorAll('.char');

    let radius = 40

    function init() {
        rounded(radius);
        window.addEventListener('mousemove', cursorMove);
    }

    window.addEventListener('load', function() {
        init();
    })

    function rounded(radius) {
        for (let i = 0; i< cursorText.length; i ++) {
            let rotation = i * ( 360 / cursorText.length);
            gsap.set(cursorText[i], {
                transformOrigin: `0px ${radius}px`,
                x: radius,
                rotate:rotation
            });
            gsap.set(cursor, {transformOrigin: "center center", rotation: 0, width: radius * 2, height: radius * 2})

        }
        let rotate = gsap.timeline({repeat: -1})
        rotate.to(cursor, {rotation: 360, duration: 3, ease: "none"})
    }

    function cursorMove(e) {
        var mouseX = e.pageX,
            mouseY = e.pageY
            console.log(mouseY, mouseX);

        t1 = gsap.timeline();
        t1.to(cursor, {
            duration: .1,
            x: mouseX - radius,
            y: mouseY - radius,
            ease: Expo.ease
        })
    }
