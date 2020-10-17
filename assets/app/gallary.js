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
const prevSlide = document.getElementById('prev_slide');
const nextSlide = document.getElementById('next_slide');
const slider = document.getElementById('slider');
const gallaryWrapper = document.getElementById('gallary_wrapper');
const sliderWrapper = document.getElementById('sliders_wrapper');
//const slidesContainer = document.getElementById('slides_container');
//const sliderContainer = document.getElementById('slides_container');

let slideStep = 0,
    slideOffset = 0,
    slidesize;
let cloneSlide



GALLARY.forEach((item) => {
  gallaryHTML += `
  <div class="gallary__images">
    <img class="gallary__image" src="${imgURL + item.imgName}" alt="${item.imgName}">
  </div>
`
})
clsSlider.addEventListener('click', () => {
  slider.style.display = 'none'
  slide.remove()
  slidesContainer.remove()
  slideOffset = 0
  
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
    console.log(slideCount)
    
  slidesContainer.append(slide)
  })
})


const createSlide = (slideCount, slideOffset) => {
  slidesize = sliderWrapper.getBoundingClientRect().width
  slide = document.createElement('img');
  slide.classList.add('silde__img');
  slide.style.left = slidesize*slideOffset + 'px';
  slide.src = imgURL + GALLARY[slideCount].imgName
  
  console.log(slide.src)

}
//const playSlide()



const next = () => {
if (slideCount >= GALLARY.length-1) {
  slideCount = 0
} else {
  slideCount++
}
  slideOffset = 1
  createSlide(slideCount, slideOffset)
  slidesContainer.append(slide)
  
  cloneSlide = document.querySelectorAll('.silde__img')
   setTimeout(() => {
     
  for (i=0; i<cloneSlide.length; i++){
    cloneSlide[i].style.left = -slidesize*slideOffset +'px'
     slideOffset--
//  console.log(slideOffset)
  }
       cloneSlide[0].addEventListener('transitionend',() => {cloneSlide[0].remove()})
   }, 1)

}

const prev = () => {
  if (slideCount <= 0) {
  slideCount = GALLARY.length-1
} else {
  slideCount--
}
  
  slideOffset = -1
  
  createSlide(slideCount, slideOffset)
  slidesContainer.append(slide)
  
  cloneSlide = document.querySelectorAll('.silde__img')
   setTimeout(() => {
     
  for (i=0; i<cloneSlide.length; i++){
    cloneSlide[i].style.left = -slidesize*slideOffset +'px'
     slideOffset++
  console.log(slideOffset)
  }
       cloneSlide[0].addEventListener('transitionend',() => {cloneSlide[0].remove()})
   }, 1)

  
  
//  createSlide(slideCount, slideOffset)

  slidesContainer.prepend(slide)
  
  
}











nextSlide.addEventListener('click', next)
prevSlide.addEventListener('click', prev)













