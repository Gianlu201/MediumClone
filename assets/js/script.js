const header = document.querySelector('header');
const heroSect = document.getElementById('hero');
const getStarted = document.querySelector('nav li.start')

document.addEventListener('scroll', function(event) {
  if (window.scrollY >= heroSect.offsetHeight -30 ) {
    header.classList.add('white');
    getStarted.classList.add('green');
  } else {
    header.classList.remove('white');
    getStarted.classList.remove('green');
  }
})