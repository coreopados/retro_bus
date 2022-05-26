$(document).ready(function () {
  // modile menu
  $(".mobile-menu-button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-wrap .menu").toggleClass("active");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".up-btn").fadeIn(200);
    } else {
      $(".up-btn").fadeOut(200);
    }
  });

  $(".up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  if ($(window).innerWidth() > 991) {
    if ($.fn.stick_in_parent) {
      $(".calendar").stick_in_parent();
    }
  }

  // grid-gallery
  if (
    $(".content-gallery-wrap.active .content-gallery").length > 0 &&
    innerWidth > 576
  ) {
    setTimeout(function () {
      if ($.fn.masonry) {
        $(".content-gallery-wrap.active .content-gallery").masonry({
          itemSelector: ".grid-gal",
          columnWidth: 350,
          gutter: 65,
          isFitWidth: true,
        });
      }
    }, 200);
  }

  // show & hide more voyage

  $(".show-more-post").click(function (e) {
    e.preventDefault();

    $(this).closest(".post-voyage").find(".hidden-info").removeClass("hidden");
    $(this).addClass("hidden");
  });

  $(".hide-more").click(function (e) {
    e.preventDefault();
    $(this).closest(".post-voyage").find(".hidden-info").addClass("hidden");
    $(this)
      .closest(".post-voyage")
      .find(".show-more-post")
      .removeClass("hidden");
  });

  // more desc about bus
  $(".bus-desc__more").click(function (e) {
    e.preventDefault();

    var mainText = $(this).text();
    var data_toggle_text = $(this).attr("data-toggle-text");
    $(this).text(data_toggle_text);
    $(this).attr("data-toggle-text", mainText);
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .closest(".omnibus-info-bus")
        .find(".hidden-block")
        .addClass("hidden");
      $(this).closest(".omnibus-info-bus").find(".images").addClass("hidden");
    } else {
      $(this).addClass("active");
      $(this)
        .closest(".omnibus-info-bus")
        .find(".hidden-block")
        .removeClass("hidden");
      $(this)
        .closest(".omnibus-info-bus")
        .find(".images")
        .removeClass("hidden");
    }
  });

  // smooth scroll

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 20,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  if ($(".swiper-tel").length > 0) {
    var swiper = new Swiper(".swiper-tel", {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  }

  $(".note-main-after-head").delay(1000).addClass("animate-text");

  setTimeout(function () {
    anime.timeline().add({
      targets: ".note-main-after-head .letter",
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 100 * (i + 1),
    });
  }, 1200);

  // grid actuales
  if ($(".grid-actuales").length > 0 && innerWidth > 688) {
    setTimeout(function () {
      var $grid = $(".grid-actuales").masonry({
        itemSelector: ".grid-col",
        gutter: 10,
        isFitWidth: true,
        columnWidth: 290,
      });
    }, 500);
  }

  if ($(".slider-instagram").length > 0) {
    var swiper = new Swiper(".slider-instagram", {
      slidesPerView: 8,
      loop: true,
      breakpoints: {
        1400: {
          slidesPerView: 8,
        },
        1200: {
          slidesPerView: 6,
        },
        991: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  }

  //music
  $(".music").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("play");
    let $audio = $("audio");

    if (!$(this).hasClass("play")) {
      $audio[0].pause();
    } else {
      $audio[0].play();
    }
  });

  // tabs
  $(".tabs-gallery a").click(function (e) {
    e.preventDefault();
    var activeTab = $(this).attr("data-tab") - 1;
    console.log(activeTab);
    $(".tabs-gallery a, .content-gallery-wrap").removeClass("active");

    $(this).addClass("active");

    $(".content-gallery-wrap").each(function (i, elem) {
      if (activeTab == i) {
        $(elem).addClass("active");
      }
      setTimeout(function () {
        $(".content-gallery-wrap.active .content-gallery").masonry({
          itemSelector: ".grid-gal",
          columnWidth: 350,
          gutter: 65,
          isFitWidth: true,
        });
      }, 200);
    });
  });

  // description set to localstorage
  if (!localStorage.getItem("desc") == "" && $("body").hasClass("gallery")) {
    $(
      "<div class='fancybox__desc'>" + localStorage.getItem("desc") + "</div>"
    ).insertAfter(".fancybox__content");
  } else {
    $(".fancybox__desc").remove();
  }

  //add description to fancybox
  $(document).on(
    "click",
    ".gallery [data-fancybox], .gallery .carousel__slide",
    function () {
      var desc;
      var currentIndex;

      $(".fancybox__desc").remove();

      setTimeout(function () {
        $(".fancybox__thumbs .carousel__slide").each(function (i, elem) {
          if ($(elem).hasClass("is-nav-selected")) {
            currentIndex = i;
          }
        });

        $(".content-gallery-wrap.active .content-gallery a").each(function (
          i,
          elem
        ) {
          if (i == currentIndex) {
            desc = $(elem).attr("data-desc");
            localStorage.setItem("desc", desc);
          }
        });

        if (!desc == "") {
          $("<div class='fancybox__desc'>" + desc + "</div>").insertAfter(
            ".fancybox__content"
          );
        } else {
          $(".fancybox__desc").remove();
        }

        $(".carousel__button.is-close").insertBefore(".fancybox__track");
      }, 100);

      $(".is-next, .is-prev").click(function () {
        var desc1;
        var currentIndex1;

        $(".fancybox__desc").remove();

        setTimeout(function () {
          $(".fancybox__thumbs .carousel__slide").each(function (i, elem) {
            if ($(elem).hasClass("is-nav-selected")) {
              currentIndex1 = i;
            }
          });

          $(".content-gallery-wrap.active .content-gallery a").each(function (
            i,
            elem
          ) {
            if (i == currentIndex1) {
              desc1 = $(elem).attr("data-desc");
              localStorage.setItem("desc", desc1);
            }
          });

          if (!desc1 == "") {
            $("<div class='fancybox__desc'>" + desc1 + "</div>").insertAfter(
              ".fancybox__content"
            );
          } else {
            $(".fancybox__desc").remove();
          }

          $(".carousel__button.is-close").insertBefore(".fancybox__track");
        }, 100);
      });
    }
  );

  // download video, img
  $(".videos-press .video, .photos-hd-press a").click(function () {
    var urlLink = $(this).attr("href");
    setTimeout(function () {
      $(
        "<a href='" + urlLink + "' class='download-link' download >Download</a>"
      ).appendTo(".fancybox__slide.is-selected");
    }, 100);
  });

  // toggle lang
  $(".languages li").click(function (e) {
    e.preventDefault();
    $(".languages li").removeClass("current-lang");
    $(this).addClass("current-lang");
  });

  if (innerWidth < 576) {
    // more posts
    var num = 5;
    $(".grid-actuales .grid-col:lt(" + num + ")").addClass("active ");

    $(".more-posts button").on("click", function () {
      event.preventDefault();

      num = num + 3;
      $(".grid-actuales .grid-col:lt(" + num + ")").addClass("active ");

      if ($(".grid-actuales .grid-col:last").hasClass("active")) {
        // $('.more-posts').css('visibility', 'hidden')
        $(".more-posts").fadeOut();
      }
    });
  }

  if (innerWidth < 688) {
    // more posts
    var num = 3;
    $(".reviews .review:lt(" + num + ")").addClass("active ");

    $(".more-review button").on("click", function () {
      event.preventDefault();

      num = num + 3;
      $(".reviews .review:lt(" + num + ")").addClass("active ");

      if ($(".reviews .review:last").hasClass("active")) {
        // $('.more-posts').css('visibility', 'hidden')
        $(".more-review").fadeOut();
      }
    });

    $(".hidden-info__desc .right-part").each(function (i, elem) {
      var parent = $(elem).closest(".post-info");
      $(elem).appendTo(parent);
    });
  } else {
    $(".post-info .right-part").each(function (i, elem) {
      var parent = $(elem).closest(".post-info ");
      var parent1 = parent.find(".hidden-info__desc");

      $(elem).appendTo(parent1);
    });
  }

  if (innerWidth < 991) {
    $(".images").each(function (i, elem) {
      var parent = $(elem)
        .closest(".omnibus-info-bus-wrap")
        .find(".bus-desc__text");
      $(elem).appendTo(parent).addClass("hidden");
    });

    $(".calendar-archives").appendTo(".voyages-wrap .left");

    $(".activities-content .page-title p")
      .insertBefore(".voyage-1")
      .addClass("links-activities");
  } else {
    $(".images").each(function (i, elem) {
      var parent = $(elem).closest(".omnibus-info-bus-wrap").find(".img-wrap");
      $(elem).appendTo(parent).addClass("hidden");
    });

    $(".calendar-archives").appendTo(".voyages-wrap .right .calendar");
  }

  if (innerWidth < 540) {
    if ($("more-mounthes").length == 0) {
      $(
        '<a class="more-mounthes"><svg xmlns="http://www.w3.org/2000/svg" width="23.082" height="19.989" viewBox="0 0 23.082 19.989"><path id="Контур_7762" data-name="Контур 7762" d="M330.261,445.891,341.8,425.9H318.72Z" transform="translate(-318.72 -425.902)" fill="#1d1d1b"/></svg></a>'
      ).insertAfter(".cal-title2");
    }

    var mounth = 3;
    $(".calendar-mounthes .mounth:lt(" + mounth + ")").addClass("active ");

    $(document).on("click", ".more-mounthes", function (event) {
      event.preventDefault();

      mounth = mounth + 6;
      $(".calendar-mounthes .mounth:lt(" + mounth + ")").addClass("active ");
      $(".more-mounthes").addClass("hiden");
    });
  } else {
    $(".calendar-mounthes .mounth").removeClass("active");

    $(".more-mounthes").remove();
  }

  Fancybox.bind("[data-fancybox^='id']", {
    // Your options go here
    animated: false,
  });

  // Wrap every letter in a span
  var textWrapper = document.querySelector(".note-main-after-head");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

$(window).on("resize", function () {
  if (innerWidth < 991) {
    $(".activities-content .page-title p")
      .insertBefore(".voyage-1")
      .addClass("links-activities");

    $(".images").each(function (i, elem) {
      var parent = $(elem)
        .closest(".omnibus-info-bus-wrap")
        .find(".bus-desc__text");
      $(elem).appendTo(parent).addClass("hidden");
    });

    $(".calendar-archives").appendTo(".voyages-wrap .left");
  } else {
    $(".images").each(function (i, elem) {
      var parent = $(elem).closest(".omnibus-info-bus-wrap").find(".img-wrap");
      $(elem).appendTo(parent).addClass("hidden");
    });

    $(".calendar-archives").appendTo(".voyages-wrap .right .calendar");

    $(".links-activities").insertAfter(".activities-content .page-title h1");
  }

  if (innerWidth < 540) {
    if ($(".more-mounthes").length == 0) {
      $(
        '<a class="more-mounthes"><svg xmlns="http://www.w3.org/2000/svg" width="23.082" height="19.989" viewBox="0 0 23.082 19.989"><path id="Контур_7762" data-name="Контур 7762" d="M330.261,445.891,341.8,425.9H318.72Z" transform="translate(-318.72 -425.902)" fill="#1d1d1b"/></svg></a>'
      ).insertAfter(".cal-title2");
    }

    var mounth = 3;

    $(".calendar-mounthes .mounth:lt(" + mounth + ")").addClass("active ");

    $(document).on("click", ".more-mounthes", function (event) {
      event.preventDefault();

      mounth = mounth + 6;
      $(".calendar-mounthes .mounth:lt(" + mounth + ")").addClass("active ");
      $(".more-mounthes").addClass("hidden");
    });
  } else {
    $(".calendar-mounthes .mounth").removeClass("active");
  }

  if (innerWidth < 688) {
    $(".hidden-info__desc .right-part").each(function (i, elem) {
      var parent = $(elem).closest(".post-info");
      $(elem).appendTo(parent);
    });
  } else {
    $(".post-info .right-part").each(function (i, elem) {
      var parent = $(elem).closest(".post-info ");
      var parent1 = parent.find(".hidden-info__desc");

      $(elem).appendTo(parent1);
    });
  }
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".menu, .mobile-menu-button"); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      div.removeClass("active"); // скрываем его
    }
  });
});
