const section = document.querySelectorAll('section');
const sectionTitleWrapper = document.querySelector('.section__titles_wrapper');
const sectionTitles = document.querySelector('.section__titles');
const sectionTitle = document.querySelectorAll('.section__title');
const sectionAnchors = document.querySelectorAll('a[href^="#"]');
let headerHeight;
let sectionID;
let sectionPosition;
let scrollPosition;
let scrollValue;
let speedScroll = 30;
let activeSection = 0;
let activeTitle;

function showTitle() {
  if (section[1].getBoundingClientRect().top < window.innerHeight / 3) {
    sectionTitles.style.top = document.getElementById('header').clientHeight - 1 + 'px';
  } else {
    sectionTitles.style.top = '0px';
  }
}

function chsngeTitle() {
  sectionTitleHeight = sectionTitle[0].clientHeight;
  section.forEach((item, index) => {
    if (item.getBoundingClientRect().top < window.innerHeight / 2 && item.getBoundingClientRect().top >= 0) {
      activeSection = index
      activeTitle = activeSection - 1
    }
    if (item.getBoundingClientRect().top < window.innerHeight / 1.9 && item.getBoundingClientRect().top > window.innerHeight / 2) {
      if (index > 0) {
        activeTitle = activeSection - 1
        activeSection = index - 1
      } else {
        activeSection = 0
        activeTitle = 0
      }
    }
  })
  
  sectionTitleWrapper.style.top = -sectionTitleHeight * (activeTitle) + 'px'
  for (i = 0; i < sectionAnchors.length; i++) {
    sectionAnchors[i].classList.remove('activ__nav')
  }
  sectionAnchors[activeSection].classList.add('activ__nav')
}


window.onresize = () => {
  showTitle()
  chsngeTitle()
}

window.onscroll = () => {
    showTitle()
  chsngeTitle()
 
}




sectionAnchors.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    headerHeight = document.getElementById('header').clientHeight;
    scrollPosition = window.pageYOffset
    sectionID = item.getAttribute('href').substr(1)
    sectionPosition = document.getElementById(sectionID).getBoundingClientRect().top
    scrollValue = Math.floor(sectionPosition + scrollPosition - headerHeight)
    scrollPosition > scrollValue ? scrollUp() : scrollDown()
  })
})

function scrollDown() {
    if (scrollPosition < scrollValue) {
      scrollPosition += speedScroll
      window.scrollTo(0, scrollPosition)
      requestAnimationFrame(scrollDown)
    } else if (scrollPosition > scrollValue) {
      window.scrollTo(0, scrollValue);
      return;
    }
}
function scrollUp() {
  if (scrollPosition > scrollValue) {
    scrollPosition -= speedScroll
    window.scrollTo(0, scrollPosition)
    requestAnimationFrame(scrollUp)
  } else if (scrollPosition < scrollValue) {
    window.scrollTo(0, scrollValue);
    return;
  }
}












