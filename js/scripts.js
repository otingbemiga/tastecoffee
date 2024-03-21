// ==============Show Menu ===============================
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    //   validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ================Menu Hidden =================
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// =================Remove Menu Mobile======================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    // when we click on each nav__link, we remove the show-menu

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ==============Change Background header
function scrollHeader(){
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height,
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ===================MIXITUP FILTER PRODUCTS =======================================
let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

/* =============Default products========= */
mixerProducts.filter('.delicacies')

// ====link Active Products ========
const linkProducts = document.querySelectorAll('products__item')

function activeProducts(){
    linkProducts.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkProducts.forEach(l=> l.addEventListener('click', activeProducts))


// ====================SHOW SCROLL UP ================================ //
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher 350 viewport height, add the show-scroll class to the a tag with scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// =====================SCROLL SECTION ACTIVE LINK =====================//
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelectorAll('nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelectorAll('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })

}
window.addEventListener('scroll', scrollActive)