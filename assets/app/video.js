'use strict';

var video = document.getElementById('video');
var videoWrapper = document.getElementById('videoWrapper');
var clsVideo = document.getElementById('clsVideo');
var videoPoster = document.getElementById('videoPoster');
var videoToolbar = document.getElementById('videoToolbar');
var videoPlayer = document.getElementById('videoPlayer');
var videoProgress = document.getElementById('videoProgress');
var timePassed = document.getElementById('timePassed');
var timeTotal = document.getElementById('timeTotal');
var prevBtn = document.getElementById('prevBtn');
var backwardBtn = document.getElementById('backwardBtn');
var playPauseBtn = document.getElementById('playPauseBtn');
var stopBtn = document.getElementById('stopBtn');
var forwardBtn = document.getElementById('forwardBtn');
var nextBtn = document.getElementById('nextBtn');
var fullScreenBtn = document.getElementById('fullScreenBtn');
//const videoTrack = document.getElementById('videoTrack')
var videoContent = document.getElementById('videoContent');
var currentTime = 0;
var duration = void 0,
    noActiveDelay = 5,
    nowNoActiv = void 0,
    updateInterval = void 0,
    delayInterval = void 0,
    updateDelay = void 0,
    delay = void 0,
    update = void 0,
    addNull = void 0,
    value = void 0;

videoPlayer.volume = 0;
var addZero = function addZero(addNull) {
  return addNull < 10 ? '0' + addNull : addNull;
};

videoPlayer.addEventListener('play', function () {
  return playPauseBtn.classList.add('pause');
});
videoPlayer.addEventListener('pause', function () {
  return playPauseBtn.classList.remove('pause');
});

/* Hide Tools */
hideTools();
function hideTools() {
  nowNoActiv = 0;
  delay = setInterval('nowNoActiv++', 1000);
  update = setInterval('updateDelay()', 1000);

  function resetnowNoActiv() {
    clsVideo.style.opacity = 1;

    videoToolbar.classList.remove('hide__toolbar');
    //  videoToolbar.addEventListener('transitionend', () => {
    nowNoActiv = 0;
    //  })
  }
  updateDelay = function updateDelay() {
    if (nowNoActiv >= noActiveDelay) {
      nowNoActiv = 0;
      clsVideo.style.opacity = 0;

      videoToolbar.classList.add('hide__toolbar');
      return;
    }
  };
  window.onclick = resetnowNoActiv;
  window.onmousemove = resetnowNoActiv;
  window.ontouchstart = resetnowNoActiv;
  window.ontouchmove = resetnowNoActiv;
}
/*=================================*/

playPauseBtn.addEventListener('click', function () {
  playVideo();
});
stopBtn.addEventListener('click', function () {
  stopVideo();
});

var playVideo = function playVideo() {
  videoPoster.style.opacity = 0;
  stopBtn.disabled = false;
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
};

var stopVideo = function stopVideo() {
  videoPoster.style.opacity = 1;
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  stopBtn.disabled = true;
};

prevBtn.addEventListener('click', function () {
  videoPoster.src = 'assets/img/gallery/crazyFrog.jpg';
  videoPlayer.src = 'assets/video/crazyFrog.mp4';
  playVideo();
});

nextBtn.addEventListener('click', function () {
  videoPoster.src = 'assets/img/gallery/Iliketomoveit.jpg';
  videoPlayer.src = 'assets/video/ILikeToMoveIt.mp4';
  playVideo();
});

forwardBtn.addEventListener('click', function () {
  videoPoster.style.opacity = 0;
  videoPlayer.currentTime += 10;
});
backwardBtn.addEventListener('click', function () {
  if (currentTime > 10) {
    videoPoster.style.opacity = 0;
    videoPlayer.currentTime -= 10;
  } else {
    stopVideo();
  }
});

fullScreenBtn.addEventListener('click', toogleFullsreen);
function toogleFullsreen() {
  videoWrapper.removeAttribute("controls");
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (videoWrapper.requestFullscreen) {
      videoWrapper.requestFullscreen();
    } else if (videoWrapper.msRequestFullscreen) {
      videoWrapper.msRequestFullscreen();
    } else if (videoWrapper.mozRequestFullScreen) {
      videoWrapper.mozRequestFullScreen();
    } else if (videoWrapper.webkitRequestFullscreen) {
      videoWrapper.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (videoWrapper.webkitEnterFullscreen) {
       videoWrapper.webkitEnterFullscreen(); //for iphone this code worked
    }
    fullScreenBtn.classList.add('exit__fullscreen');
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    fullScreenBtn.classList.remove('exit__fullscreen');
  }
}

videoPlayer.addEventListener('timeupdate', function () {
  duration = videoPlayer.duration;
  currentTime = videoPlayer.currentTime;
  videoProgress.value = currentTime / duration * 100;
  var minutePasset = Math.floor(currentTime / 60);
  var secondPasset = Math.floor(currentTime % 60);
  var minuteTotal = Math.floor(duration / 60);
  var secondTotal = Math.floor(duration % 60);
  timePassed.textContent = addZero(minutePasset) + ':' + addZero(secondPasset);
  timeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal);
  if (currentTime >= duration) {
    stopVideo();
    toogleFullsreen();
    clsVideo.style.opacity = 1;
    videoToolbar.classList.remove('hide__toolbar');
  }
});

videoProgress.addEventListener('input', function () {
  duration = videoPlayer.duration;
  value = videoProgress.value;
  if (value > 0) {
    videoPoster.style.opacity = 0;
  } else {
    videoPoster.style.opacity = 1;
  }
  videoPlayer.currentTime = value * duration / 100;
});
