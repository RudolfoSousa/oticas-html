$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container.swiper-webdoor', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-webdoor .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-webdoor .swiper-button-next',
      prevEl: '.swiper-webdoor .swiper-button-prev',
    },
  });

var swiperBrands = new Swiper ('.swiper-container.swiper-brands', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-brands .swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-brands .swiper-button-next',
    prevEl: '.swiper-brands .swiper-button-prev',
  },
  slidesPerView: 5,
  centeredSlides: true,
  initialSlide: 1
})
})