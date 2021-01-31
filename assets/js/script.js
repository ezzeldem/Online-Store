$(document).ready(function () {

  // web lang
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }


  // scroleBotton

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
      $(".scrol-box").css({ "opacity": 1, "visibility": "visible", "bottom": '40px' });


      if ($(window).width() >= 772) {
        $(".nav-section").addClass('fixed-box');
      }
    }
    else {
      $(".scrol-box").css({ "opacity": 0, "visibility": "hidden", "bottom": '0px' });
      $(".nav-section").removeClass('fixed-box');
    }
  });
  $(".scrol-box").click(function () {
    $("html, body").animate(
      {
        scrollTop: $('.intro-section').offset().top,
      },
      900
    );
  });


  // intro-slider
  $('.intro-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    outhight: true,
    prevArrow: "<div class='circle-arrow devo-left'><i class='fa fa-chevron-left'></i></div>",
    nextArrow: "<div class='circle-arrow devo-right'><i class='fa fa-chevron-right'></i></div>",
    autoplaySpeed: 2000,
    autoplay: false,
    dots: false,
    arrows: true,
    rtl: dir_lang,
  });

  // beauty-slider
  $('.beauty-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    outhight: true,
    autoplaySpeed: 2000,
    autoplay: false,
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: false,
    responsive: [

      {
        breakpoint: 997,
        settings: {
          slidesToShow: 2,          
          centerMode: false,
        }
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  // company-slider
  $('.company-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    outhight: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: "<div class='circle-arrow devo-left'><i class='fa fa-arrow-left'></i></div>",
    nextArrow: "<div class='circle-arrow devo-right'><i class='fa fa-arrow-right'></i></div>",
    responsive: [
      
      {
        breakpoint: 997,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });


  // comment-slider
  $('.comment-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    outhight: true,
    autoplaySpeed: 2000,
    autoplay: false,
    dots: true,
    arrows: false,
  });

  //   owl slider

  $('.owl-carousel.best-saling-slider ,.owl-carousel.blog-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      772: {
        items: 2,
        nav: false
      },
      992: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })


});