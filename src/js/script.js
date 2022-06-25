$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
