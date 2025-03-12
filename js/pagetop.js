// page-top
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".js-page-top").addClass("appear");
  } else {
    $(".js-page-top").removeClass("appear");
  }
}

$(window).scroll(function () {
  PageTopAnime();
});

$(".js-page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500,
    function () {
      $(".js-page-top").removeClass("appear");
    }
  );
  return false;
});
