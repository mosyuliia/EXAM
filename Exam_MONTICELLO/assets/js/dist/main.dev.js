"use strict";

//Slider
$(document).ready(function () {
  $('.header_slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true
  });
  var b;
  if ($(window).width() < 1266 && $(window).width() > 800) b = 2;
  if ($(window).width() < 800) b = 1;
  if ($(window).width() > 1266) b = 3;
  $('.news_slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    slidesToShow: b,
    centerMode: true,
    centerPadding: '-30px'
  });
  $(window).resize(function () {
    var a = $(window).width();

    if (a < 1266 && a > 800) {
      b = 2;
      $('.news_slider').slick("slickSetOption", "slidesToShow", b, true);
    }

    ;

    if (a < 800) {
      b = 1;
      $('.news_slider').slick("slickSetOption", "slidesToShow", b, true);
    }

    ;

    if (a > 1266) {
      b = 3;
      $('.news_slider').slick("slickSetOption", "slidesToShow", b, true);
    }

    ;
  });
});
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $("#main_menu").addClass("scrolled");
    } else {
      $("#main_menu").removeClass("scrolled");
    }
  });
  $('input, select').styler();
});
$(function () {
  $(".hamburger, #page_overlay").on('click', function () {
    $("#mobile_menu_wrap .hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
  });
});
$(".sidemenu a").on('click', function () {
  $("#mobile_menu_wrap .hamburger").removeClass("is-active");
  $("body").removeClass("open");
}); //Gallery

lightGallery(document.getElementById('animated-thumbnails-gallery'), {
  thumbnail: true,
  plugins: [lgThumbnail],
  speed: 500
}); //NEWS SLIDER

function getPosts() {
  $.ajax({
    url: 'assets/common/news.json',
    type: 'get',
    dataType: 'json',
    success: function success(json) {
      var html = '';
      json.forEach(function (post) {
        html += "\n                <div class=\"slider_box\">\n                    <img src=\"".concat(json[i].img, "\" alt=\"skyline2\" title=\"architecture\">\n                    <div class=\"text_card_news\">   \n                        <h5>").concat(pjson[i].title, "</h5>\n                        <p>Having a home based business is a wonderful asset to your life...</p>\n                    </div> \n                    <div class=\"signature\">\n                        <div class=\"signature_logo logo2\"></div>\n                        <div class=\"text_author_news\">\n                            <p class=\"name_author_news\">DOMINIC FREEMAN</p>\n                            <p class=\"data_card_news\">24 Apr 2017</p>\n                        </div>\n                    </div>\n                </div>");
      });
      $("#news_slider").html(html);
    }
  });
} //MAP


$(function () {
  $("#init_map").on('click', function () {
    $(this).remove();
    var map = L.map('my_map').setView([48.93859768728371, 38.512547728855246], 15);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
    }).addTo(map);
    var myIcon = L.icon({
      iconUrl: 'assets/plugins/leaflet/images/Pin.png',
      iconSize: [106, 106],
      iconAnchor: [22, 94],
      popupAnchor: [31, -76]
    });
    L.marker([48.93859768728371, 38.512547728855246], {
      icon: myIcon
    }).addTo(map).bindPopup("\n            <div class=\"map_popup\">\n                <img src=\"assets/images/Building_3.png\" alt=\"\">\n                <div class=\"map_info\">\n                    <b>Hello!</b>\n                    <span>I'm here!</span>\n                </div>\n            </div>\n        ");
    marker.on('click', function () {
      document.getElementById('google_map').click();
    });
  });
});