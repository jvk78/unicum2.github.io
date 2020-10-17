let imgURL= 'assets/img/gallery/'
const GALLARY = [
  {imgName: '012.jpg', id: 01},
  {imgName: '002.jpg', id: 02},
  {imgName: '003.jpg', id: 03},
  {imgName: '004.jpg', id: 04},
  {imgName: '005.jpg', id: 05},
  {imgName: '006.jpg', id: 06},
  {imgName: '007.jpg', id: 07},
  {imgName: '008.jpg', id: 08},
  {imgName: '009.jpg', id: 09},
  {imgName: '010.jpg', id: 10},
];

let gallaryHTML = '';
let sliderHTML = '';
let slideLenght = GALLARY.length;
let lastSlide


const clsSlider = document.getElementById('cls_slider');
const prevSlideBtn = document.getElementById('prev_slide');
const playSlideBtn = document.getElementById('play_slide');
const nextSlideBtn = document.getElementById('next_slide');
const slider = document.getElementById('slider');
const gallaryWrapper = document.getElementById('gallary_wrapper');
const sliderWrapper = document.getElementById('sliders_wrapper');
//const slidesContainer = document.getElementById('slides_container');
//const sliderContainer = document.getElementById('slides_container');

let slideStep = 0,
    slideOffset = 0,
    slidesize;
let cloneSlide
let offset
let play = false



GALLARY.forEach((item) => {
  gallaryHTML += `
  <div class="gallary__images">
    <img class="gallary__image" src="${imgURL + item.imgName}" alt="${item.imgName}">
  </div>
`
})
clsSlider.addEventListener('click', () => {
  slider.style.display = 'none'
  let removeSlades = document.querySelectorAll('.silde__img')
  removeSlades.forEach((item)=>{
    item.remove()
  })
  slidesContainer.remove()
  slideOffset = 0
  offset = 0
stopPlaing()
})
gallaryWrapper.innerHTML = gallaryHTML;

const gallaryImages = document.querySelectorAll('.gallary__images')

let slidesContainer = document.createElement('div');
slidesContainer.classList.add('slides__container');

let slideCount
gallaryImages.forEach((item, index) => {
  item.addEventListener('click', () => {
    sliderWrapper.append(slidesContainer)
    slider.style.display = 'flex'
    slideCount = index
    createSlide(slideCount, slideOffset)
  slidesContainer.append(slide)
  })
})


const createSlide = (slideCount, slideOffset) => {
  slidesize = sliderWrapper.getBoundingClientRect().width
  slide = document.createElement('img');
  slide.classList.add('silde__img');
  slide.style.left = slidesize*slideOffset + 'px';
  slide.src = imgURL + GALLARY[slideCount].imgName
  slidesContainer.append(slide)
  

}
const next = () => {
  if (slideCount >= GALLARY.length-1) {
  slideCount = 0
} else {
  slideCount++
}
  offset = 0;
  createSlide(slideCount, 1)
  
  cloneSlide = document.querySelectorAll('.silde__img')
  setTimeout(() => {
  for (let i=0; i<=cloneSlide.length-1; i++){
//  console.log('i = ' + i)
    cloneSlide[i].style.left = slidesize*offset - slidesize +'px'
     offset++
    
  }
cloneSlide[0].addEventListener('transitionend',() => {cloneSlide[0].remove()})
    
  },0)
}

const prev = () => {
  if (slideCount <= 0) {
    slideCount = GALLARY.length - 1
  } else {
    slideCount--
  }
  offset = 1;
  createSlide(slideCount, -1)

  cloneSlide = document.querySelectorAll('.silde__img')
  setTimeout(() => {
    for (let i = 0; i <= cloneSlide.length - 1; i++) {
      cloneSlide[i].style.left = slidesize * offset + 'px'
      offset--
    }
    cloneSlide[0].addEventListener('transitionend', () => {
      cloneSlide[0].remove()
    })

  }, 0)
}




let autoPlay

playSlideBtn.addEventListener('click', () => {
  if(!play){
  startPlaing()
  } else {
  stopPlaing()
    
  }
  
  })
  
  

let startPlaing = () => {
  playSlideBtn.classList.add('stop')
    next()
    autoPlay = setInterval((next), 2000)
    play = true
    nextSlideBtn.disabled = true
    prevSlideBtn.disabled = true
    
}

let stopPlaing = () =>{
  clearInterval(autoPlay)
    play = false
    nextSlideBtn.disabled = false
    prevSlideBtn.disabled = false
  playSlideBtn.classList.remove('stop')
}


nextSlideBtn.addEventListener('click', next)
prevSlideBtn.addEventListener('click', prev)













