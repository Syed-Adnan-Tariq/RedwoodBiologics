$(document).ready(function () {
  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 80,
      },
      200
    );
  });
  $(window).load(function () {
    var x = location.protocol;
    if (x === "http:") {
      window.location.protocol = "https:";
    }
  });

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top + 20;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
});
function isOnScreen(elem) {
  // if the element doesn't exist, abort
  if (elem.length == 0) {
    return;
  }
  var $window = jQuery(window);
  var viewport_top = $window.scrollTop();
  var viewport_height = $window.height();
  var viewport_bottom = viewport_top + viewport_height;
  var $elem = jQuery(elem);
  var top = $elem.offset().top;
  var height = $elem.height();
  var bottom = top + height;

  return (
    (top >= viewport_top && top < viewport_bottom) ||
    (bottom > viewport_top && bottom <= viewport_bottom) ||
    (height > viewport_height &&
      top <= viewport_top &&
      bottom >= viewport_bottom)
  );
}

var oldsState = "header";
var newState = "";
jQuery(document).ready(function () {
  window.addEventListener("scroll", function (e) {
    if (isOnScreen(jQuery("#feed"))) {
      $(".content__text").css("display", "block");
    } else if (isOnScreen(jQuery("#save"))) {
      $(".content__text").css("display", "block");
    } else if (isOnScreen(jQuery("#scale"))) {
      $(".content__text").css("display", "block");
    } else if (isOnScreen(jQuery("#header"))) {
      $(".content__text").css("display", "block");
    } else {
      // console.log("i am not here");
      $(".content__text").css("display", "none");
    }
  });
});

$(document).ready(function () {
  $("#name1").click(function (e) {
    $("#name1").addClass("showing1");
    for (let i = 2; i < 11; i++) {
      $("#name" + i).removeClass("showing" + i);
    }
  });
});
$(document).ready(function () {
  $("#name2").click(function (e) {
    $("#name2").addClass("showing2");
    for (let i = 1; i < 11; i++) {
      if (i == 2) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name3").click(function (e) {
    $("#name3").addClass("showing3");
    for (let i = 1; i < 11; i++) {
      if (i == 3) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name4").click(function (e) {
    $("#name4").addClass("showing4");
    for (let i = 1; i < 11; i++) {
      if (i == 4) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name5").click(function (e) {
    $("#name5").addClass("showing5");
    for (let i = 1; i < 11; i++) {
      if (i == 5) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name6").click(function (e) {
    $("#name6").addClass("showing6");
    for (let i = 1; i < 11; i++) {
      if (i == 6) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name7").click(function (e) {
    $("#name7").addClass("showing7");
    for (let i = 1; i < 11; i++) {
      if (i == 7) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name8").click(function (e) {
    $("#name8").addClass("showing8");
    for (let i = 1; i < 11; i++) {
      if (i == 8) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name9").click(function (e) {
    $("#name9").addClass("showing9");
    for (let i = 1; i < 11; i++) {
      if (i == 9) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(document).ready(function () {
  $("#name10").click(function (e) {
    $("#name10").addClass("showing10");
    for (let i = 1; i < 11; i++) {
      if (i == 10) {
        // console.log("I am hit");
      } else {
        $("#name" + i).removeClass("showing" + i);
      }
    }
  });
});
$(function () {
  setTimeout(function () {
    if (location.hash) {
      /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
      window.scrollTo(0, 0);
      target = location.hash.split("#");
      smoothScrollTo($("#" + target[1]));
    }
  }, 1);

  // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      smoothScrollTo($(this.hash));
      return false;
    }
  });

  function smoothScrollTo(target) {
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top - 80,
        },
        1000
      );
    }
  }
});

$(document).ready(function () {
  if ($(".brands_slider").length) {
    var brandsSlider = $(".brands_slider");

    brandsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: false,
      dots: false,
      autoWidth: true,
      items: 4,
      margin: 35,
    });

    if ($(".brands_prev").length) {
      var prev = $(".brands_prev");
      prev.on("click", function () {
        brandsSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".brands_next").length) {
      var next = $(".brands_next");
      next.on("click", function () {
        brandsSlider.trigger("next.owl.carousel");
      });
    }
  }

  $('.read-more').click(function () {
    $('.dot-1').hide();
    $('.read-more').hide();
    $('.box-height-1').css("height", "32vw");
    $('.show-less').show(150);
    $('.remaining-text').show(150);
    $('.remaining-text').css("opacity", "1");
  });
  $('.show-less').click(function () {
    $('.remaining-text').hide();
    $('.show-less').hide();
    $('.box-height-1').css("height", "23vw");
    $('.dot-1').show();
    $('.read-more').show();
  });
  $('.read-more1').click(function () {
    $('.read-more1').hide();
    $('.remaining-text1').show(150);
    $('.dot-2').hide();
    $('.box-height-2').css("height", "27vw");
    $('.show-less1').show(150);
  });
  $('.show-less1').click(function () {
    $('.remaining-text1').hide();
    $('.dot-2').show();
    $('.box-height-2').css("height", "23vw");
    $('.read-more1').show();
    $('.show-less1').hide();
  });
  $('.read-more2').click(function () {
    $('.read-more2').hide();
    $('.remaining-text2').show(150);
    $('.dot-3').hide();
    $('.box-height-3').css("height", "33vw");
    $('.show-less2').show(150);
  });
  $('.show-less2').click(function () {
    $('.remaining-text2').hide();
    $('.dot-3').show();
    $('.box-height-3').css("height", "23vw");
    $('.read-more2').show();
    $('.show-less2').hide();
  });

  $('.mobile-read-more').on('click touchstart', function () {
    $('.dot-1').hide();
    $('.mobile-read-more').hide();
    $('.mobile-show-less').show(150);
    $('.remaining-text').show(150);
    $('.remaining-text').css("opacity", "1");
  });
  $('.mobile-show-less').on('click touchstart', function () {
    $('.remaining-text').hide();
    $('.mobile-show-less').hide();
    $('.dot-1').show();
    $('.mobile-read-more').show();
  });
  $('.mobile-read-more-1').on('click touchstart', function () {
    $('.dot-2').hide();
    $('.mobile-read-more-1').hide();
    $('.mobile-show-less-1').show(150);
    $('.remaining-text-1').show(150);
    $('.remaining-text-1').css("opacity", "1");
  });
  $('.mobile-show-less-1').on('click touchstart', function () {
    $('.remaining-text-1').hide();
    $('.mobile-show-less-1').hide();
    $('.dot-2').show();
    $('.mobile-read-more-1').show();
  });
  $('.mobile-read-more-2').on('click touchstart', function () {
    $('.dot-3').hide();
    $('.mobile-read-more-2').hide();
    $('.mobile-show-less-2').show(150);
    $('.remaining-text-2').show(150);
    $('.remaining-text-2').css("opacity", "1");
  });
  $('.mobile-show-less-2').on('click touchstart', function () {
    $('.remaining-text-2').hide();
    $('.mobile-show-less-2').hide();
    $('.dot-3').show();
    $('.mobile-read-more-2').show();
  });
});

$(document).ready(function () {
  $(document).click(function (event) {
      var click = $(event.target);
      var _open = $(".navbar-collapse").hasClass("show");
      if (_open === true && !click.hasClass("navbar-toggler")) {
          $(".navbar-toggler").click();
      }
  });
});

$(document).ready(function () {
  $('.quote-tt').css('opacity', '0');
  $('.box-height-1').css('visibility', 'hidden');
  $('#image-1').css('opacity', '0');
  $('.box-height-2').css('visibility', 'hidden');
  $('.img-research2').css('opacity', '0');
  $('.box-height-3').css('visibility', 'hidden');
  $('#image-3').css('opacity', '0');
  $('#card-1').css('opacity', '0');
  $('#card-2').css('opacity', '0');
  $('#card-3').css('opacity', '0');
  $('#card-4').css('opacity', '0');
  $('#card-5').css('opacity', '0');
  $('.achivement1').css('opacity', '0');
  $('.achivement2').css('opacity', '0');
  $('.achivement3').css('opacity', '0');

  $('.tagline').waypoint(function () {
    $('.tagline').addClass('animate__fadeInLeft');
    }, { offset: '75%' });

  $('.quote-tt').waypoint(function () {
    $('.quote-tt').css('opacity', '1');
    $('.quote-tt').addClass('animate__fadeIn');
  }, { offset: '75%' });

  $('#image-1').waypoint(function () {
    $('#image-1').css('opacity', '1');
    $('#image-1').addClass('animate__fadeInRight');
    $('.box-height-1').css('visibility', 'inherit');
    $('.box-height-1').addClass('animate__fadeInLeft');
  }, { offset: '75%' });

  $('.img-research2').waypoint(function () {
    $('.img-research2').css('opacity', '1');
    $('.img-research2').addClass('animate__fadeInLeft');
    $('.box-height-2').css('visibility', 'inherit');
    $('.box-height-2').addClass('animate__fadeInRight');
  }, { offset: '75%' });

  $('#image-3').waypoint(function () {
    $('#image-3').css('opacity', '1');
    $('#image-3').addClass('animate__fadeInRight');
    $('.box-height-3').css('visibility', 'inherit');
    $('.box-height-3').addClass('animate__fadeInLeft');
  }, { offset: '70%' });
  
  $('#card-1').waypoint(function () {
    $('#card-1').css('opacity', '1');
    $('#card-1').addClass('animate__zoomIn');
  }, { offset: '70%' });
  $('#card-2').waypoint(function () {
    $('#card-2').css('opacity', '1');
    $('#card-2').addClass('animate__zoomIn');
  }, { offset: '70%' });
  $('#card-3').waypoint(function () {
    $('#card-3').css('opacity', '1');
    $('#card-3').addClass('animate__zoomIn');
  }, { offset: '70%' });
  $('#card-4').waypoint(function () {
    $('#card-4').css('opacity', '1');
    $('#card-4').addClass('animate__zoomIn');
  }, { offset: '70%' });
  $('#card-5').waypoint(function () {
    $('#card-5').css('opacity', '1');
    $('#card-5').addClass('animate__zoomIn');
  }, { offset: '70%' });

  $('.achivement1').waypoint(function () {
    $('.achivement1').css('opacity', '1');
    $('.achivement1').addClass('animate__fadeInLeft');
  }, { offset: '75%' });

  $('.achivement2').waypoint(function () {
    $('.achivement2').css('opacity', '1');
    $('.achivement2').addClass('animate__fadeInUp');
  }, { offset: '75%' });
  
  $('.achivement3').waypoint(function () {
    $('.achivement3').css('opacity', '1');
    $('.achivement3').addClass('animate__fadeInRight');
  }, { offset: '75%' });
});
