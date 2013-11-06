$(function(){
  var $win = $(window);
  var $banner = $('.adi-banner');
  var $navbar = $('.navbar');
  var $spacer = $('.navbar-spacer');
  var $bannerListserv = $('.listserv');
  
  $win.scroll( function() {   
    if(!$navbar.hasClass('navbar-fixed-top') && $win.scrollTop() > $navbar.offset().top){
      console.log("add");
      $banner.addClass("spacer-active");
      $spacer.addClass("spacer-active");
      $navbar.addClass("navbar-fixed-top");
      $bannerListserv.removeClass("hidden");

    } else if ($navbar.hasClass('navbar-fixed-top')  && $win.scrollTop() < $spacer.offset().top){
      console.log("remove");
      $navbar.removeClass("navbar-fixed-top");
      $banner.removeClass("spacer-active");
      $spacer.removeClass("spacer-active");
      if (! $bannerListserv.hasClass("open")) {
        $bannerListserv.addClass("hidden");
      }
    }
  });
});