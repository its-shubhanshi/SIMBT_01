$(function () {
  $(".mob").click(function () {
    $(this).toggleClass("active");
    $(".wrap-1 .flex").slideToggle();
  });
});

$(function () {
  let vh = $(window).height();
  $(window).scroll(function () {
    var top = $(this).scrollTop();
    var left = $(this).scrollLeft();
    //console.log(top,left);

    if (top >= $("#contact").offset().top - 500) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(4) a").addClass("active");
    } else if (top >= $("#projects").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(3) a").addClass("active");
    } else if (top >= $("#skills").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(2) a").addClass("active");
    } else if (top >= $("#about").offset().top - 130) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(1) a").addClass("active");
    } else if (top >= $("#home").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(0) a").addClass("active");
    } else {
      $(".internal a").removeClass("active");
    }
  });
});
