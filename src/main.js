/* mobile menu fuctionality */
function openNav() {
  console.log('Opened mobile menu');
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  console.log('Closed mobile menu');
  document.getElementById('myNav').style.height = '0%';
}

/* button scroll functionality */
const btnScrollToTop = document.querySelector('#btnScrollToTop');

window.addEventListener('scroll', scrollFunction);

btnScrollToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

function scrollFunction() {
  if (window.pageYOffset > 300) {
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
}
