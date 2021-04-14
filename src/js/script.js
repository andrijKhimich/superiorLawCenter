const humburger = $("#humburger");
const headerMenu = $("#menu");
// const scrollBtn = $(".scroll-btn");
const header = $("#header");
const logoImg = $(".logo img");
const logoSource = $(".logo source");
const practiceSlider = $('#practiceSlider');
const testimonialsSlider = $('#testimonialsSlider');
const windowWidth = $(window).width();
const modalBtn = $('.modal-contact_primary');
const modalBody = $('.modal-contact__body');



function toggleModal() {
  modalBody.slideToggle();
  modalBtn.toggleClass('open');
}


function setContactHeader() {
  logoImg.attr("src", logoBlackUrl);
  logoSource.attr("srcset", logoBlackSrcSet);
  header.addClass("header_inner");
}

function setHomeHeader() {
  logoImg.attr("src", logoMainUrl);
  logoSource.attr("srcset", logoMainSrcSet);
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

function openMenu() {
  humburger.addClass('open');
  headerMenu.addClass('open');
}

function closeMenu() {
  humburger.removeClass('open');
  headerMenu.removeClass('open');
}

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

$(window).on('load', function () {
  showContent();
  detectSubMenu();
});

$(document).ready(function () {

  function replace() {
    if (($(window).width() < 991) && ($('.criminal-page').length > 0)) {
      $('#replaceMob').append($('#replaceEl'));
    } else {
      $('#replaceDesctop').append($('#replaceEl'));
    }
  }

  replace();
  // TOGGLE MAIN MENU //
  $(document).on('click', '.nav-menu__item_icon .nav-menu__link', function (e) {

    if (windowWidth < 991) {
      e.preventDefault();
      let link = $(this);
      let liItem = link.parent('.nav-menu__item');
      let subList = liItem.children('.submenu');
      if (liItem.hasClass('active')) {
        liItem.removeClass('active');
        subList.slideUp();
      } else {
        liItem.addClass('active');
        subList.slideDown();
      }
    }
  });

  // serch active block
  $(document).mouseup(function (e) {
    var searchcontainer = $('.nav.active, .humburger, .nav-menu__item_icon .nav-menu__link');

    if (!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0) {
      closeMenu();
    }
  });

  humburger.click(function () {
    if ($(this).hasClass('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  modalBtn.click(function () {
    toggleModal();
  });

  initPartnersSlider();

  if (testimonialsSlider) {
    initTestimonialsSlider();
  }

  setHeaderSettings();

  function setHeaderSettings() {
    if (($(window).width() > 991) && ($('.contact-page').length > 0)) {
      setContactHeader();
    } else {
      setHomeHeader();
    }
  }

  function initPartnersSlider() {
    const partnerSlider = document.querySelector('#partnerSlider.slick-slider');
    if ($(window).width() < 991 && !partnerSlider) {
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

  $(window).on('resize', function () {
    initPartnersSlider();
    replace();
    setHeaderSettings();
  });


  // FAQ page accordion
  $('.accordion__content').hide();
  $('.accordion-list li a').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('accordion_active')) {
      $(this).removeClass("accordion_active").closest('.accordion-list li').find('.accordion__content').slideUp(200);
      $(this).find('.accordion__plus').removeClass('accordion__plus_active');
    } else {
      $(this).addClass("accordion_active").closest('.accordion-list li').find('.accordion__content').slideDown(200);
      $(this).parent().siblings('.accordion-list li').find('.accordion-list li a').removeClass("accordion_active");
      $(this).parent().siblings('.accordion-list li').find('.accordion__content').slideUp(200);
      $(this).find('.accordion__plus').addClass('accordion__plus_active');
      $(this).parent().siblings('.accordion-list li').find('.accordion__plus').removeClass('accordion__plus_active');
    }
  });

});

// $(window).on('resize', function () {
//   initPartnersSlider();
//   replace();
// });

$(window).scroll(function () {
  const scrollValue = $(this).scrollTop();
  scrollValue >= 1 ? closeMenu() : null;
});

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