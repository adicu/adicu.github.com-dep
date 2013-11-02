$(function(){
  var $win = $(window);
  var $banner = $('.adi-banner');
  var $navbar = $('.navbar');
  var $spacer = $('.navbar-spacer');
  
  $win.scroll(function() {     
    if(!$navbar.hasClass('navbar-fixed-top') && $win.scrollTop() > $navbar.position().top){
      console.log("add");
      $banner.addClass("spacer-active")
      $spacer.addClass("spacer-active");
      $navbar.addClass("navbar-fixed-top");

    } else if ($navbar.hasClass('navbar-fixed-top')  && $win.scrollTop() < $spacer.position().top){
      console.log("remove");
      $navbar.removeClass("navbar-fixed-top");
      $banner.removeClass("spacer-active")
      $spacer.removeClass("spacer-active");
    }
  });
});