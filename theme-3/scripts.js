//
window.addEventListener('scroll', function () {
  checkScrollPixel();
  //parallax();
});

const checkScrollPixel = () => {
  const getScrollVal = window.pageYOffset;
  if (getScrollVal > 100) {
    document
      .querySelector('.card:nth-child(3n+1)')
      .classList.add('fadeInLeft-animation');
    document
      .querySelector('.card:nth-child(3n+3)')
      .classList.add('fadeInRight-animation');
    document
      .querySelector('.card:nth-child(3n+2)')
      .classList.add('fadeInUp-animation');
  } else {
    // document.querySelector('.header').classList.remove('sticky-header');
  }
};
