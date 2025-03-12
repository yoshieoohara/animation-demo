// accordion
$(function () {
  $(".js-accordion-ttl").first().addClass("is-open").next(".js-accordion-txt").show();

  $(".js-accordion-ttl").click(function () {
    $(".js-accordion-ttl").not(this).removeClass("is-open").next(".js-accordion-txt").slideUp();

    $(this).toggleClass("is-open").next(".js-accordion-txt").slideToggle();
  });
});
