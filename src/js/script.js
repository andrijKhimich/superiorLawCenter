const humburger = $(".js-humburger");
const headerMenu = $(".menu");
const scrollBtn = $(".scroll-btn");
const header = $(".header");
const logoImg = $(".logo img");
const practiceSlider = $('#practiceSlider');
const testimonialsSlider = document.querySelector('#testimonialsSlider');


function setInnerHeader() {
  logoImg.attr("src", logoBlackUrl);
  header.addClass("header_inner");
}

function setHomeHeader() {
  logoImg.attr("src", logoMainUrl);
  header.removeClass("header_inner");
}

function showContent() {
  $(".main-wrapper").removeClass("js-fadeIn");
}

function detectSubMenu() {
  $('.submenu').each(function () {
    $(this).parent('.nav-menu__item').addClass('nav-menu__item_icon');
  });
}
$(window).on('load', function () {
  showContent();
  detectSubMenu();
});
// function showOnScroll(scrollValue) {
//   $('.js-scroll').each(function () {
//     let elem = $(this);
//     let sectionPos = elem.offset().top;
//     let windowPos = $(window).scrollTop() + $(window).height() / 1.2;
//     if (sectionPos < windowPos) {
//       elem.removeClass('js-fadeIn js-slideLeft js-slideRight js-slideTop');
//     }
//   });

//   $('.js-active').each(function () {
//     let item = $(this);
//     let sectionPos = item.offset().top;
//     let windowPos = $(window).scrollTop() + $(window).height() / 2.8;
//     if (sectionPos < windowPos) {
//       item.addClass('active');
//     } else {
//       item.removeClass('active');
//     }
//   });
// }

// function openMenu() {
//   humburger.addClass('open');
//   headerMenu.addClass('open');
// }

// function closeMenu() {
//   humburger.removeClass('open');
//   headerMenu.removeClass('open');
// }



function initTestimonialsSlider() {
  const counter = document.querySelector('#testimonialsSliderInfo');
  $(testimonialsSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    let i = (currentSlide ? currentSlide : 0) + 1;
    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });

  $(testimonialsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 800,
    fade: true,
    arrows: true,
    prevArrow: $('#testimonialsPrev'),
    nextArrow: $('#testimonialsNext'),
    adaptiveHeight: true,
  });
}
$(document).ready(function () {
  initPartnersSlider();

  if (testimonialsSlider) {
    initTestimonialsSlider();
  }

  // if ($('.inner-page').length > 0) {
  //   setInnerHeader();
  // } else {
  //   setHomeHeader();
  // }
  // showContent();

  // humburger.click(function () {
  //   if ($(this).hasClass('open')) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
  // });

  function initPartnersSlider() {
    const partnerSlider = document.querySelector('#partnerSlider.slick-slider');
    if (window.innerWidth < 991 && !partnerSlider) {
      $('#partnerSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
        autoplaySpeed: 10000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 991,
            settings: 'unslick'
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 2,
              dots: true
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          }
        ]
      });
    }
  }

  $(document).resize(function () {
    initPartnersSlider();
  });
});


// slow scroll to id

//   scrollBtn.click(function (e) {
//     e.preventDefault();
//     let link = $($(this).attr('href'))
//     $('html, body').animate({
//       scrollTop: link.offset().top
//     }, 1000);
//   });

//   showOnScroll($(window).scrollTop());

//   $(window).scroll(function () {
//     const scrollValue = $(this).scrollTop();
//     showOnScroll(scrollValue);
//     scrollValue >= 1 ? closeMenu() : null;

//     if (scrollValue > 1) {
//       header.addClass('sticky');
//     } else {
//       header.removeClass('sticky');
//       // logoImg.attr("src", logoColorUrl);
//     }
//   });

// $('.home-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000
// });
// $('.testimonials-slider__wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000,
//   arrows: true,
//   prevArrow: $('.testimonials-slider_prev'),
//   nextArrow: $('.testimonials-slider_next')
// });
// });
svg4everybody();

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});