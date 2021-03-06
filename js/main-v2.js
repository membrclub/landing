$(document).ready(function() {
  "use strict";

  var window_width = $(window).width(),
      window_height = window.innerHeight,
      header_height = $(".default-header").height(),
      header_height_static = $(".site-header.static").outerHeight(),
      fitscreen = window_height - header_height;


  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  if (document.getElementById("default-select")) {
      $('select').niceSelect();
  };
  if (document.getElementById("service-select")) {
      $('select').niceSelect();
  };

  $('.single-feature').tilt({ maxTilt: 5 });
  $('.single-price').tilt({ maxTilt: 5 });

  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
      });
      $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
      });
      $('body').append($mobile_nav);
      $('body').prepend(
      '<button type="button" id="mobile-nav-toggle">'
      + '<i id="mobile-menu" data-feather="menu" color="white"></i>'
      + '<i id="mobile-menu-x" data-feather="x"></i></button>'
      );
      feather.replace()
      $('#mobile-menu-x').hide();
      $('body').append('<div id="mobile-body-overly"></div>');

      $(document).on('click', '#mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-menu').toggle();
        $('#mobile-menu-x').toggle();
        $('#mobile-body-overly').toggle();
        });

      $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length ===
          0) {
          if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-menu').toggle();
          $('#mobile-menu-x').toggle();
          $('#mobile-body-overly').fadeOut();
          }
      }
      });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  $('.nav-menu a, #mobile-nav a, .scroll').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-menu').toggle();
          $('#mobile-menu-x').toggle();
          $('#mobile-body-overly').fadeOut();
        }

        return false;
      }
    }
  });


  $(document).ready(function() {

      $('html, body').hide();

      if (window.location.hash) {

      setTimeout(function() {

          $('html, body').scrollTop(0).show();

          $('html, body').animate({

          scrollTop: $(window.location.hash).offset().top - 108

          }, 1000)

      }, 0);

      } else {

      $('html, body').show();

      }

  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('header-scrolled');
      $('#logo img').attr("src", "img/lightlogo.png");
    } else {
      $('#header').removeClass('header-scrolled');
      $('#logoimage').attr("src", "img/darklogo.png");
    }
  });
});
