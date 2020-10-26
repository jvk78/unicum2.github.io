'use strict';

var imgURL = 'assets/img/gallery/';
var GALLARY = [{ imgName: '012.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: '002.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: 'crazyFrog.jpg', class: 'gallary__videos', content: 'gallary__video' }, { imgName: '003.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: '004.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: '005.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: '006.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: 'Iliketomoveit.jpg', class: 'gallary__videos', content: 'gallary__video' }, { imgName: '007.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: '008.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: '009.jpg', class: 'gallary__images', content: 'gallary__image' }, { imgName: '010.jpg', class: 'gallary__images', content: 'gallary__image' }];

var clsSlider = document.getElementById('cls_slider');
var prevSlideBtn = document.getElementById('prev_slide');
var playSlideBtn = document.getElementById('play_slide');
var nextSlideBtn = document.getElementById('next_slide');
var slider = document.getElementById('slider');
var gallaryWrapper = document.getElementById('gallary_wrapper');
var sliderWrapper = document.getElementById('sliders_wrapper');

var slidesContainer = document.createElement('div');
slidesContainer.classList.add('slides__container');
var gallaryHTML = '',
    sliderHTML = '',
    slideLenght = GALLARY.length,
    slideOffset = 0,
    play = false,
    slidesize = void 0,
    cloneSlide = void 0,
    slideCount = void 0,
    offset = void 0,
    autoPlay = void 0,
    slide = void 0;

GALLARY.forEach(function (item) {
  gallaryHTML += '\n  <div class="' + item.class + '">\n    <img class="' + item.content + '" src="' + (imgURL + item.imgName) + '" alt="' + item.imgName + '">\n  </div>\n';
});
clsSlider.addEventListener('click', function () {
  slider.style.display = 'none';
  var removeSlades = document.querySelectorAll('.silde__img');
  removeSlades.forEach(function (item) {
    item.remove();
  });
  slidesContainer.remove();
  slideOffset = 0;
  offset = 0;
  stopPlaing();
});
gallaryWrapper.innerHTML = gallaryHTML;

var gallaryImages = document.querySelectorAll('.gallary__images');
var images = document.querySelectorAll('.gallary__image');

gallaryImages.forEach(function (item, index) {
  item.addEventListener('click', function () {
    sliderWrapper.append(slidesContainer);
    slider.style.display = 'flex';
    slideCount = index;
    createSlide(slideCount, slideOffset);
    slidesContainer.append(slide);
  });
});

var createSlide = function createSlide(slideCount, slideOffset) {
  slidesize = sliderWrapper.getBoundingClientRect().width;
  slide = document.createElement('img');
  slide.classList.add('silde__img');
  slide.style.left = slidesize * slideOffset + 'px';
  slide.src = images[slideCount].src;
  slidesContainer.append(slide);
};
async function next() {
  if (slideCount >= images.length - 1) {
    slideCount = 0;
  } else {
    slideCount++;
  }
  offset = 0;
  createSlide(slideCount, 1);
  cloneSlide = document.querySelectorAll('.silde__img');
  setTimeout(function () {
    for (var i = 0; i <= cloneSlide.length - 1; i++) {
      //  console.log('i = ' + i)
      cloneSlide[i].style.left = slidesize * offset - slidesize + 'px';
      offset++;
    }
    nextSlideBtn.disabled = true;
    prevSlideBtn.disabled = true;
    cloneSlide[0].addEventListener('transitionend', function () {
      cloneSlide[0].remove();
      if (!play) {
        nextSlideBtn.disabled = false;
        prevSlideBtn.disabled = false;
      }
    });
  }, 0);
}

var prev = function prev() {
  if (slideCount <= 0) {
    slideCount = images.length - 1;
  } else {
    slideCount--;
  }
  offset = 1;
  createSlide(slideCount, -1);
  cloneSlide = document.querySelectorAll('.silde__img');
  setTimeout(function () {
    for (var i = 0; i <= cloneSlide.length - 1; i++) {
      cloneSlide[i].style.left = slidesize * offset + 'px';
      offset--;
    }
    nextSlideBtn.disabled = true;
    prevSlideBtn.disabled = true;
    cloneSlide[0].addEventListener('transitionend', function () {
      cloneSlide[0].remove();
      nextSlideBtn.disabled = false;
      prevSlideBtn.disabled = false;
    });
  }, 0);
};

playSlideBtn.addEventListener('click', function () {
  return !play ? startPlaing() : stopPlaing();
});

var startPlaing = function startPlaing() {
  playSlideBtn.classList.add('stop');
  next();
  nextSlideBtn.disabled = true;
  prevSlideBtn.disabled = true;
  autoPlay = setInterval(next, 2000);
  play = true;
};

var stopPlaing = function stopPlaing() {
  clearInterval(autoPlay);
  play = false;
  nextSlideBtn.disabled = false;
  prevSlideBtn.disabled = false;
  playSlideBtn.classList.remove('stop');
};

nextSlideBtn.addEventListener('click', next);
prevSlideBtn.addEventListener('click', prev);
