jQuery(function ($) {
  // hamburger
  $(".js-hamburger").click(function () {
    $(this).toggleClass("is-open"); 
    $(".js-drawer").toggleClass("is-open"); 
  });

  $(".drawer__list--item a").click(function (event) {
    event.preventDefault(); 
    $(".js-hamburger").removeClass("is-open");
    $(".js-drawer").removeClass("is-open");
  });

  // accordion
  $(".js-header-accordion > p").click(function () {
    var $parent = $(this).parent();

    $(".js-header-accordion")
      .not($parent)
      .removeClass("is-open")
      .children(".header__accordion--list")
      .slideUp();

    $parent
      .toggleClass("is-open")
      .children(".header__accordion--list")
      .slideToggle();
  });

  $(".js-drawer-accordion > p").click(function () {
    var $parent = $(this).parent();

    $(".js-drawer-accordion")
      .not($parent)
      .removeClass("is-open")
      .children(".drawer__accordion--list")
      .slideUp();

    $parent
      .toggleClass("is-open")
      .children(".drawer__accordion--list")
      .slideToggle();
  });
});
