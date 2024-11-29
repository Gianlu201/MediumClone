const header = document.querySelector('header');
const heroSect = document.getElementById('hero');
const getStarted = document.querySelector('nav li.start')
const m = document.querySelectorAll('#mGrid path');


document.addEventListener('scroll', function(event) {
  if (window.scrollY >= heroSect.offsetHeight -30 ) {
    header.classList.add('white');
    getStarted.classList.add('green');
  } else {
    header.classList.remove('white');
    getStarted.classList.remove('green');
  }
})


function sfarfallio() {
  for (let i = 0; i<20; i++) {
    let j = Math.floor(Math.random()*m.length);
    let element = m[j].parentElement.parentElement.parentElement;
    if (element.getAttribute('opacity') == 1) {
      element.setAttribute('opacity', '0');
    } else {
      element.setAttribute('opacity', '1');
    }
    
  }
}

// console.log(m[6].parentElement.parentElement.parentElement.getAttribute('opacity'))

document.addEventListener('load', init())

function init() {
  setInterval(() => {
    sfarfallio();
  }, 1000);
}