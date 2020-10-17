const tetxIntro = document.querySelector('.intro__title');
const intro = document.querySelector('.intro');
//const strIntro = tetxIntro.textContent;
const strIntro = tetxIntro.querySelectorAll('.intro__text');;

//const splitIntro = strIntro.split('');
//tetxIntro.innerHTML = '';

  let htmlAdd
strIntro.forEach((item) => {
 htmlAdd = item
  itemSplit = item.textContent.split('')
  htmlAdd.innerHTML = '';
  itemSplit.forEach((i) => {
    htmlAdd.innerHTML += '<span class="span__text">' + i + '</span>'
  })
//  console.log(htmlAdd)
})
//console.log(intro.querySelectorAll('.span__text').length)
  

//for (let i=0; i < strIntro.length; i++) {
//     tetxIntro.innerHTML += '<span class="span__text">' + splitIntro[i] + '</span>'
//     }


let span
let charLength = intro.querySelectorAll('.span__text').length;
let char = 0
let timer = setInterval(intoAnim, 30)
let timerColor
function intoAnim() {
  span = tetxIntro.querySelectorAll('span')[char];
  span.classList.add('intro__anim');
  char++;
//console.log(char+" xxx "+intro.textContent.length)
  if (char === charLength){ 
    char = 0
//    console.log(char)
//    color()
    setTimeout(() => {
    timerColor = setInterval(color, 30)
    }, 300)
//  let timerColor = setInterval(color, 30)
    complete();
  return;
  }
}

function color() {
  span = tetxIntro.querySelectorAll('span')[char];
  span.classList.add('color');
  char++;
  if (char === charLength){ 
    setTimeout(() => {
intro.classList.add('remove');}, 1000)
    completeColor();
  return;
  }
//console.log(char + '-' +splitIntro.length)
}
////intoAnim()


function complete() {
  clearInterval(timer);
  timer = null;
 }
function completeColor() {
//  console.log(123)
   clearInterval(timerColor);
  timerColor = null;
}










