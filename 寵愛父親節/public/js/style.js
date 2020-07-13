"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//Burger menu animation with greensock / gsap
var menu = $(".menu"),
    menuitem1 = $(".menu__item--1"),
    menuitem2 = $(".menu__item--2"),
    menuitem3 = $(".menu__item--3"),
    divs = $("#divs"),
    bodys = $("body"),
    speed = 0.15; //instantiate  timeline

var tl = gsap.timeline({
  paused: true
}); //pause default
//collapse menu

tl.to(menuitem1, speed, {
  top: 10,
  ease: Quint.easeOut
}, "label--1");

if ($(window).width() > 500) {
  tl.to(menuitem3, speed, {
    top: -10,
    ease: Quint.easeOut
  }, "label--1");
} else {
  tl.to(menuitem3, speed, {
    top: -5,
    ease: Quint.easeOut
  }, "label--1");
}

tl.to([menuitem1, menuitem2, menuitem3], speed, {
  rotation: -90,
  ease: Quint.easeOut
});
tl.to(menuitem1, speed, {
  left: 0,
  rotation: 45,
  ease: Quint.easeOut
}, "label--2");
tl.to(menuitem2, speed, {
  opacity: 0,
  ease: Quint.easeOut
}, "label--2");
tl.to(menuitem3, speed, {
  right: 0,
  rotation: -45,
  ease: Quint.easeOut
}, "label--2"); // play timeline on click, reverse animation if active

menu.click(function () {
  $(this).toggleClass('active');

  if ($(this).hasClass("active")) {
    divs.css({
      "position": "relative",
      "left": "200px"
    });
    tl.play();
  } else {
    divs.css({
      "position": "relative",
      "left": "0px"
    });
    tl.reverse();
  }
}); //data-depth="0.1"
// const scene1 = document.querySelector('#bvb');
// const parallaxInstance1 = new Parallax(scene1, {
//   relativeInput: true
// });
//連結延遲

$(".link_a").click(function () {
  divs.css({
    "position": "relative",
    "left": "0px"
  });
  tl.reverse();
  menu.removeClass('active');
  $('body,html').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
}); //TOP

$('#top').on('click', function () {
  $('html, body').animate({
    'scrollTop': 0
  });
}); //滾輪

$.fn.extend({
  parallaxElement: function parallaxElement(options) {
    var defaults = {
      parallaxSpeed: 1,
      parallaxRatio: 24
    };
    var options = $.extend(defaults, options);
    return this.each(function () {
      var opts = options,
          parallaxEl = $(this),
          parallaxSpeedData = parallaxEl.attr('data-parallax-speed');

      if ((typeof parallaxSpeed === "undefined" ? "undefined" : _typeof(parallaxSpeed)) !== (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)) && parallaxSpeed !== false) {
        var durationStyle = ['transition-duration: ' + parallaxSpeedData + 's', '-webkit-transition-duration: ' + parallaxSpeedData + 's', '-moz-transition-duration: ' + parallaxSpeedData + 's'].join(';');
      } else {
        var durationStyle = ['transition-duration: ' + opts.parallaxSpeed + 's', '-webkit-transition-duration: ' + opts.parallaxSpeed + 's', '-moz-transition-duration: ' + opts.parallaxSpeed + 's'].join(';');
      }

      var parallaxRatioData = parallaxEl.attr('data-parallax-ratio');
      $(window).scroll(function () {
        var offsetParallaxEl = parallaxEl.offset().top,
            offsetDelta = offsetParallaxEl - $(window).height(),
            wScroll = $(this).scrollTop();

        if (_typeof(parallaxRatioData) !== (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)) && parallaxRatioData !== false) {
          var translateYStyle = [durationStyle, 'transform: translateY(' + -(wScroll - offsetDelta) / parallaxRatioData + 'px)', '-webkit-transform: translateY(' + -(wScroll - offsetDelta) / parallaxRatioData + 'px)', '-moz-transform: translateY(' + -(wScroll - offsetDelta) / parallaxRatioData + 'px)'].join(';');
        } else {
          var translateYStyle = [durationStyle, 'transform: translateY(' + -(wScroll - offsetDelta) / opts.parallaxRatio + 'px)', '-webkit-transform: translateY(' + -(wScroll - offsetDelta) / opts.parallaxRatio + 'px)', '-moz-transform: translateY(' + -(wScroll - offsetDelta) / opts.parallaxRatio + 'px)'].join(';');
        }

        if (wScroll > offsetDelta) {
          parallaxEl.attr('style', translateYStyle);
        }
      });
    });
  }
});

if ($(window).width() > 1025) {
  $('#c1_banner,#c2_banner,#c3_banner,#c4_banner').parallaxElement({
    parallaxRatio: 24,
    parallaxSpeed: 0.9
  });
} else if ($(window).width() > 1024) {
  $('#c1_banner,#c2_banner,#c3_banner,#c4_banner').parallaxElement({
    parallaxRatio: 60,
    parallaxSpeed: 0.9
  });
} else {
  $('#c1_banner,#c2_banner,#c3_banner,#c4_banner').parallaxElement({
    parallaxRatio: 60,
    parallaxSpeed: 0.9
  });
}

$(document).ready(function () {
  var banner_x = document.querySelectorAll(".text_banner.s1");
  var banner_x2 = document.querySelectorAll(".text_banner.s2");

  function Check_Time1() {
    banner_x[0].classList.add("op");
    banner_x2[0].classList.remove("op");
  }

  ;

  function Check_Time2() {
    banner_x2[0].classList.add("op");
    banner_x[0].classList.remove("op");
  }

  ;
  setInterval(function () {
    Check_Time1();
  }, 4000);
  setInterval(function () {
    Check_Time2();
  }, 8000);
});