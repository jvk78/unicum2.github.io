let imgURL= 'assets/img/gallery/'
const GALLARY = [
  {imgName: '012.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: '002.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: 'crazyFrog.jpg', class: 'gallary__videos', content: 'gallary__video'},
  {imgName: '003.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: '004.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: '005.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: '006.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: 'Iliketomoveit.jpg', class: 'gallary__videos', content: 'gallary__video'},
  {imgName: '007.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: '008.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: '009.jpg', class: 'gallary__images', content: 'gallary__image'},
  {imgName: '010.jpg', class: 'gallary__images', content: 'gallary__image'},
];



const clsSlider = document.getElementById('cls_slider');
const prevSlideBtn = document.getElementById('prev_slide');
const playSlideBtn = document.getElementById('play_slide');
const nextSlideBtn = document.getElementById('next_slide');
const slider = document.getElementById('slider');
const gallaryWrapper = document.getElementById('gallary_wrapper');
const sliderWrapper = document.getElementById('sliders_wrapper');

let slidesContainer = document.createElement('div');
slidesContainer.classList.add('slides__container');
let gallaryHTML = '',
    sliderHTML = '',
    slideLenght = GALLARY.length,
    slideOffset = 0,
    play = false,
    slidesize,
    cloneSlide,
    slideCount,
    offset,
    autoPlay;




GALLARY.forEach((item) => {
  gallaryHTML += `
  <div class="${item.class}">
    <img class="${item.content}" src="${imgURL + item.imgName}" alt="${item.imgName}">
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
const images = document.querySelectorAll('.gallary__image')

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
  slide.src = images[slideCount].src
  slidesContainer.append(slide)
  console.log(slideCount)

}
async function next() {
  if (slideCount >= images.length - 1) {
    slideCount = 0
  } else {
    slideCount++
  }
  offset = 0;
  createSlide(slideCount, 1)
  cloneSlide = document.querySelectorAll('.silde__img')
  setTimeout(() => {
    for (let i = 0; i <= cloneSlide.length - 1; i++) {
      //  console.log('i = ' + i)
      cloneSlide[i].style.left = slidesize * offset - slidesize + 'px'
      offset++
    }
    nextSlideBtn.disabled = true
    prevSlideBtn.disabled = true
    cloneSlide[0].addEventListener('transitionend', () => {
      cloneSlide[0].remove()
      if (!play) {
        nextSlideBtn.disabled = false
        prevSlideBtn.disabled = false
      }
    })

  }, 0)
}

const prev = () => {
  if (slideCount <= 0) {
    slideCount = images.length - 1
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
    nextSlideBtn.disabled = true
    prevSlideBtn.disabled = true
    cloneSlide[0].addEventListener('transitionend', () => {
      cloneSlide[0].remove()
      nextSlideBtn.disabled = false
      prevSlideBtn.disabled = false
    })
  }, 0)
}




playSlideBtn.addEventListener('click', () => !play ? startPlaing() : stopPlaing())

const startPlaing = () => {
  playSlideBtn.classList.add('stop')
    next()
    nextSlideBtn.disabled = true
    prevSlideBtn.disabled = true
    autoPlay = setInterval((next), 2000)
    play = true
    
}

const stopPlaing = () =>{
  clearInterval(autoPlay)
    play = false
    nextSlideBtn.disabled = false
    prevSlideBtn.disabled = false
  playSlideBtn.classList.remove('stop')
}


nextSlideBtn.addEventListener('click', next)
prevSlideBtn.addEventListener('click', prev)













