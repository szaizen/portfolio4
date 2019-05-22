$(function() {
  console.log('test');
  var mySwiper = new Swiper ('.swiper-container', {
  	loop: true,
  	slidesPerView: 2,
    	spaceBetween: 20,
    	centeredSlides : true,
  	pagination: '.swiper-pagination',
  	nextButton: '.swiper-button-next',
  	prevButton: '.swiper-button-prev',
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  })
});
