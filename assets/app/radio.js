'use strict';
let jsonUrl, currentTrack, radioName, currentFunction, checkList, radioUrl, speedTrack, vol;
let speed = 5;
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

const audio = new Audio();
volumeRange.value = 0.25;
audio.type = 'audio/aac';
audio.volume = volumeRange.value;
volumeValue.textContent = volumeRange.value * 100;

radioNav.onclick = function() {
  this.classList.remove('list__show');
//  radioSelector.classList.remove('select');
//  navItems.classList.remove('list__show');
//  navBurger.classList.remove('nav__burger_cls');
  
}

radioVolume.onclick = function() {
  rangeContainer.classList.toggle('list__show');
  radioSelector.classList.remove('select');
//  radioNav.classList.remove('list__show');
//  navItems.classList.remove('list__show');
//  navBurger.classList.remove('nav__burger_cls');
}

volumeOnOff.onclick = function() {
  this.classList.toggle('volume__activ');
  if (audio.volume > 0) {
    volumeRange.disabled = true;
    volumeRange.classList.add('volume__disable')
    audio.volume = 0;
  } else {
    volumeRange.disabled = false;
    volumeRange.classList.remove('volume__disable')
    audio.volume = volumeRange.value;
  }
}

volumeRange.addEventListener('input', () => {
  audio.volume = volumeRange.value;
  volumeValue.textContent = Math.floor(volumeRange.value * 100);
  
})



radioSelect.onclick = function() {
  radioSelector.classList.toggle('select');
  radioNav.classList.toggle('list__show');
  rangeContainer.classList.remove('list__show');
//  navItems.classList.remove('list__show');
//  navBurger.classList.remove('nav__burger_cls');
}

radioNav.addEventListener('change', function(event) {
  trackAction.disabled = false;
  trackAction.classList.add('play__activ');
  trackAction.classList.add('stop');
  radioSelector.classList.remove('select');
  radioListItems.forEach(item => item.classList.remove('radio__active'));
  const target = event.target;
  const activ = target.parentElement.querySelector('.radio__stantion');
  activ.classList.add('radio__active');
  const radioFunc = target.dataset.functionName;
  radioUrl = target.dataset.stantionUrl;
  radioName = target.dataset.stantionName;
  audio.src = radioUrl;
  audio.play();
  clearList();
  currentFunction = radioFunc;
  setTimeout(() => { startList() }, 100);
})

trackAction.onclick = function() {
  this.classList.toggle('stop');
  if (audio.paused) {
  let timestamp = Math.floor((new Date().getTime())/1000);
    audio.src = radioUrl;
    audio.play()
  } else {
    audio.pause()
  }
}

function kidHit() {
  fetch('https://scraper2.onlineradiobox.com/ru.deti')
    .then(response => response.json())
    .then(data => {
      currentTrack = data.title;
      if (!currentTrack) {
          currentTrack = 'Вы слушаете - ' + radioName;
      }
      trackList();
    })
    .catch(e => {
      currentTrack = 'Вы слушаете - ' + radioName;
      trackList();
    })
}

function radioDisney() {
  let timestamp = Math.floor((new Date().getTime()) / 1000);
  fetch('https://metaserver.hostingradio.ru/disney.json?' + timestamp)
    .then(response => response.json())
    .then(data => {
      currentTrack = data.metadata;
      if (!currentTrack) {
        currentTrack = 'Вы слушаете - ' + radioName;
      }
      trackList();
    })
    .catch(e => {
      currentTrack = 'Вы слушаете - ' + radioName;
      trackList();
    })
}

function detiFM() {
  let timestamp = Math.floor((new Date().getTime()) / 1000);
  fetch('https://101.ru/api/channel/getTrackOnAir/199/channel/download.json' + timestamp)
    .then(response => response.json())
    .then(data => {
      data.result.short.title !== 'Реклама' ? currentTrack = data.result.short.title : currentTrack = 'Вы слушаете - ' + radioName;
      if (!currentTrack) {
        currentTrack = 'Вы слушаете - ' + radioName;
      }
      trackList();
    })
    .catch(e => {
      currentTrack = 'Вы слушаете - ' + radioName;
      trackList();
    })
}

function trackList() {
  if (radioTrack.textContent != currentTrack) {
    radioStantion.style.top = '-5%';
    radioStantion.textContent = radioName;
    radioTrack.textContent = currentTrack;
    let trackWidth = radioTrack.clientWidth;
    let trackContainerWidth = trackContainer.clientWidth;
    if (trackWidth > trackContainerWidth) {
      speedTrack = speed * ((trackContainerWidth+(trackWidth-trackContainerWidth))/trackContainerWidth)
    } else {speedTrack = speed}
    radioTrack.style.animation = `radiotrack ${speedTrack}s linear infinite`;
  }
}

function startList(){ checkList = setInterval((currentFunction), 5000); }
function clearList(){ clearInterval(checkList); }




















