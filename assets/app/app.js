// Detect Device
let body = document.querySelector('body');
let isMobile = {
  Android: function () {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function () {return navigator.userAgent.match(/IEMobile/i);},
  any: function () {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());},
  appleOS: function () {return (isMobile.iOS());}
};
if (isMobile.any()){
  body.classList.add('mobile');
  if (isMobile.appleOS()) {
    body.classList.add('ios');
  } else {
    body.classList.add('all');
  }
} else {
  body.classList.add('desktop');
}

// Variables
const navBurger = document.getElementById('nav_burger');
const navItems = document.getElementById('nav_items');
const programmTitle = document.querySelectorAll('.programm__items_title');
const programmDiscript = document.querySelectorAll('.programm__content_disc');
let counter;

window.addEventListener('click', (event) => {
  let target = event.target;
  if (target !== navBurger) {
  navBurger.classList.remove('nav__burger_cls')
  navItems.classList.remove('list__show')
  }
  if (target !== radioNav && target !== radioSelector && target !== radioStantion && target !== trackContainer) {
  radioNav.classList.remove('list__show');
  radioSelector.classList.remove('select');
    
    
  }
  
  if (target !== rangeContainer && target !== radioVolume && target !== volumeOnOff && target !== volumeValue) {
  rangeContainer.classList.remove('list__show')
  }
})

// Show/Hide Programm Discription
programmTitle.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    if (document.documentElement.clientWidth <= 414) {
      for (counter = 0; counter < programmTitle.length; counter++) {
        if (counter !== index) {
          programmTitle[counter].classList.remove('select');
          programmDiscript[counter].classList.remove('show__item');
        }
      }
      item.classList.toggle('select');
      programmDiscript[index].classList.toggle('show__item');
    }
  })
})

// Burger Menu
navBurger.addEventListener('click', function(){
  this.classList.toggle('nav__burger_cls')
  navItems.classList.toggle('list__show')
  radioNav.classList.remove('list__show')
  rangeContainer.classList.remove('list__show');
  radioSelector.classList.remove('select');
})





















//var fontSize = window.getComputedStyle(navText, null).getPropertyValue("font-size");
//