'use strict';

var video = document.getElementById('video');
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

//ILikeToMoveIt.mp4

//videoPlayer.src = 'assets/video/crazyFrog.mp4'
videoPlayer.volume = 0;

playPauseBtn.addEventListener('click', function () {
  playVideo();
  playPauseBtn.classList.toggle('pause');
});
stopBtn.addEventListener('click', function () {
  stopVideo();
});

prevBtn.addEventListener('click', function () {
  //  videoTrack.textContent = 'Crazy Frog – Alex F'
  videoPlayer.src = 'assets/video/crazyFrog.mp4';
  playVideo();
});

nextBtn.addEventListener('click', function () {

  //  videoTrack.textContent = 'Madagascar – I Like To Move It'
  videoPlayer.src = 'assets/video/ILikeToMoveIt.mp4';
  playVideo();
});

videoPlayer.addEventListener('click', function () {
  //  if (!document.fullscreenElement) {
  playVideo();
  //  }
});

forwardBtn.addEventListener('click', function () {
  videoPlayer.currentTime += 10;
});
backwardBtn.addEventListener('click', function () {
  videoPlayer.currentTime -= 10;
});

fullScreenBtn.addEventListener('click', function () {

  video.requestFullscreen();
  video.removeAttribute("controls");
});

videoPlayer.addEventListener('timeupdate', function () {
  var currentTime = videoPlayer.currentTime;
  var duration = videoPlayer.duration;
  videoProgress.value = currentTime / duration * 100;
  var minutePasset = Math.floor(currentTime / 60);
  var secondPasset = Math.floor(currentTime % 60);
  var minuteTotal = Math.floor(duration / 60);
  var secondTotal = Math.floor(duration % 60);
  timePassed.textContent = addZero(minutePasset) + ':' + addZero(secondPasset);
  timeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal);
});
videoProgress.addEventListener('input', function () {
  var duration = videoPlayer.duration;
  var value = videoProgress.value;

  videoPlayer.currentTime = value * duration / 100;
});

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : n;
};
var playVideo = function playVideo() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
};

var stopVideo = function stopVideo() {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
};