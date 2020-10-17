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
const radioTrack = document.getElementById('radio_track');
const radioStantion = document.getElementById('radio_stantion');
const radioNav = document.getElementById('radio_navigation');
const trackAction = document.getElementById('track_action');
const radioVolume = document.getElementById('radio_volume');
const radioSelect = document.getElementById('radio_select');
const radioSelector = document.getElementById('radio_selector');
const trackContainer = document.getElementById('track_container');
const rangeContainer = document.getElementById('range_container');
const volumeOnOff = document.getElementById('volume_on_off');
const volumeRange = document.getElementById('volume_range');
const volumeValue = document.getElementById('volume_value');
const radioListItems = document.querySelectorAll('.radio__stantion');
const section = document.querySelectorAll('section');
const sectionAnchors = document.querySelectorAll('a[href^="#"]');

let jsonUrl, currentTrack, radioName, radioFunc, currentFunction, checkList, radioUrl, speedTrack, vol, counter, target, activStantion, headerHeight, sectionID, sectionPosition, scrollPosition, scrollValue, current;
let speedTrackValue = 5;
let speedScroll = 30;
let activeSection = 0;




