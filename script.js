$(function() {
  $('a[href^="#"]').click(function() {
    let id = $(this).attr("href");
    let position = $(id).offset().top;

    $("html,body").animate(
      {
        scrollTop: position
      },
      "slow",
      "swing"
    );
  });
  $(".head-title").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      "slow"
    );
  });
  $("#Contact-show").click(function() {
    $("#Contact-modal").fadeIn();
  });
  $(".fa-times").click(function() {
    $("#Contact-modal").fadeOut();
  });
});
$(window).on("load scroll", function() {
  var box1 = $("li");
  var box2 = $(".life-contents");

  box1.each(function() {
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > boxOffset - wh + 150) {
      $(this).addClass("animated");
    }
  });
  box2.each(function() {
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > boxOffset - wh + 150) {
      $(this).addClass("animated");
    }
  });

  $("h2").each(function() {
    var boxoffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > boxoffset - wh) {
      $(this).addClass("active");
    }
  });
});
