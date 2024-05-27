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
          nextEl: '.next',
          prevEl: '.prev',
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
          nextEl: '.next',
          prevEl: '.prev',
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

  initSwiper();
  
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
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToScroll: 1,
        }
      }]
  });
  
  
  
});



$(document).mouseup(function(e) {
  var container = $("#collapseExample");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.collapse('hide');
  }
});
