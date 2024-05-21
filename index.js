$(document).ready(function(){

  function initSwiper() {
    var windowWidth = $(window).width();

    if (windowWidth > 832) {
      swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        },
        fadeEffect: {
          crossFade: true,
        },
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 2,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else {
      swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }

  function destroySwiper() {
    if (swiper !== undefined) {
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }

  function handleResize() {
    destroySwiper();
    initSwiper();
  }

  initSwiper(); // Initial initialization

  $(window).resize(function() {
    handleResize();
  });

  $('.autoplay').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
