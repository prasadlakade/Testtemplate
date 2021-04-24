//
window.addEventListener('scroll', function () {
  checkScrollPixel();
  //parallax();
});

const checkScrollPixel = () => {
  const getScrollVal = window.pageYOffset;
  if (getScrollVal > 0) {
    document.querySelector('.header').classList.add('sticky-header');
    document.querySelector('.section-one').classList.add('sticky-header-mar');
  } else {
    document.querySelector('.header').classList.remove('sticky-header');
    document
      .querySelector('.section-one')
      .classList.remove('sticky-header-mar');
  }
};

// function parallax() {
//   var scroll = $(window).scrollTop();
//   var screenHeight = $(window).height();

//   $('.parallax').each(function () {
//     var offset = $(this).offset().top;
//     var distanceFromBottom = offset - scroll - screenHeight;

//     if (offset > screenHeight && offset) {
//       $(this).css(
//         'background-position',
//         'center ' + distanceFromBottom * 0.5 + 'px'
//       );
//     } else {
//       $(this).css('background-position', 'center ' + -scroll * 0.5 + 'px');
//     }
//   });
// }
