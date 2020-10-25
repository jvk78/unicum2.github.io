const videoPlayer = document.getElementById('videoPlayer')
const videoProgress = document.getElementById('videoProgress')
const timePassed = document.getElementById('timePassed')
const timeTotal = document.getElementById('timeTotal')
const prevBtn = document.getElementById('prevBtn')
const backwardBtn = document.getElementById('backwardBtn')
const playPauseBtn = document.getElementById('playPauseBtn')
const stopBtn = document.getElementById('stopBtn')
const forwardBtn = document.getElementById('forwardBtn')
const nextBtn = document.getElementById('nextBtn')
const fullScreenBtn = document.getElementById('fullScreenBtn')
const videoTrack = document.getElementById('videoTrack')



//ILikeToMoveIt.mp4

//videoPlayer.src = 'assets/video/crazyFrog.mp4'
videoPlayer.volume = 0


playPauseBtn.addEventListener('click', () => { playVideo() })
stopBtn.addEventListener('click', () => { stopVideo() })

prevBtn.addEventListener('click', () => { 
  videoTrack.textContent = 'Crazy Frog – Alex F'
  videoPlayer.src = 'assets/video/crazyFrog.mp4'
  playVideo() })
nextBtn.addEventListener('click', () => { 
  
  videoTrack.textContent = 'Madagascar – I Like To Move It'
  videoPlayer.src = 'assets/video/ILikeToMoveIt.mp4'
  playVideo() })
videoPlayer.addEventListener('click', () => { 
//  if (videoPlayer.requestFullscreen){
  
  
  
  playVideo()
//  }
})



forwardBtn.addEventListener('click', () => { 
videoPlayer.currentTime += 10
})
backwardBtn.addEventListener('click', () => { 
videoPlayer.currentTime -= 10
})

fullScreenBtn.addEventListener('click', () => {
  
videoPlayer.requestFullscreen()
})

videoPlayer.addEventListener('timeupdate', () => {
  const currentTime = videoPlayer.currentTime
  const duration = videoPlayer.duration
  videoProgress.value = (currentTime/duration)*100
  let minutePasset = Math.floor(currentTime / 60)
  let secondPasset = Math.floor(currentTime % 60)
  let minuteTotal = Math.floor(duration / 60)
  let secondTotal = Math.floor(duration % 60)
  timePassed.textContent = addZero(minutePasset) + ':' + addZero(secondPasset)
  timeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal)
  
})
videoProgress.addEventListener('input', () => {
  const duration = videoPlayer.duration
  const value = videoProgress.value
  
videoPlayer.currentTime = (value * duration) / 100
  
})


const addZero = n => n < 10 ? '0' + n : n;
const playVideo = () => {
  if (videoPlayer.paused) {
  videoPlayer.play()
  } else {
    videoPlayer.pause()
  }
  
}

const stopVideo = () =>{
  videoPlayer.pause()
  videoPlayer.currentTime = 0;
}