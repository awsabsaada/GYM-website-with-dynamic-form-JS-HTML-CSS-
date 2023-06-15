//let askemail = prompt("enter your email");
//let email = ("aws@gmail.com");
//let askpassword = prompt("enter your password");
//let password = ("321");

//if(askemail.trim().toLowerCase() == email && askpassword.trim().toUpperCase() != password){
  //prompt("you have problem in your password")
//}else if(askemail.trim().toLowerCase() != email && askpassword.trim().toUpperCase() ==password){
  //prompt("you have problem in your email")
//}else if(askemail.trim().toLowerCase() == email && askpassword.trim().toUpperCase()==password){
  //prompt("hello poss")
//}else prompt("you are not allowed to open my side");

// show menu Bar
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = () =>{
    nav.classList.toggle('show-menu')
}

//remove menu Bar

const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.querySelector('.nav');
    nav.classList.remove('.show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// change color link
//const linkcolor = document.querySelectorAll('.nav-link');
//function colorlink(){
    //if(colorlink){
      //  linkcolor.forEach(1 => 1.classList.remove('active'));
    //    this.classList.add('active')
  //  }
//}
//linkcolor.forEach(1 => 1.addEventListener('click', colorlink))

//swiper home section
var swiper = new Swiper(".home-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper schedule section 
var swiper = new Swiper(".time-imgs", {
  loop: true,
  spaceBetween: 0,
  grapcursor: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    0 : {
      slidespreview : 1,
    },
    640 : {
      slidespreview : 3,
    },
    768 : {
      slidespreview : 4,
    },
    1024 : {
      slidespreview : 5,
    },
  }

});
//change header bacground when scroll
const header = document.querySelector('.header')
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 70){
    header.classList.add('header-shadow')
  }
  else header.classList.remove('header-shadow')
})
//scroll top button
const up = document.querySelector('.up')
window.onscroll = () =>{
  up.classList.toggle('show', window.scrollY >= 560)
}
up.onclick = () =>{
  window.scrollTo({behavior:'smooth', top: '0'})
}