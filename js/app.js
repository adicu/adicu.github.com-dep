$(function(){
  if (Modernizr.touch){
       $('.responsive-block').addClass("touch");
  }

  var $win = $(window);
  var $banner = $('.adi-banner');
  var $navbar = $('.navbar');
  var $spacer = $('.navbar-spacer');
  var $bannerListserv = $('.listserv');
  var $bottom = $('#bottom');

  $win.scroll( function() {
    if(!$navbar.hasClass('navbar-fixed-top') && $win.scrollTop() > $navbar.offset().top){
      console.log("add");
      $banner.addClass("spacer-active");
      $spacer.addClass("spacer-active");
      $navbar.addClass("navbar-fixed-top");
      $bottom.removeClass("hidden");
      $bannerListserv.removeClass("hidden");

    } else if ($navbar.hasClass('navbar-fixed-top')  && $win.scrollTop() < $spacer.offset().top){
      console.log("remove");
      $navbar.removeClass("navbar-fixed-top");
      $banner.removeClass("spacer-active");
      $spacer.removeClass("spacer-active");
      $bottom.addClass("hidden");
      if (! $bannerListserv.hasClass("open")) {
        $bannerListserv.addClass("hidden");
      }
    }
  });

  function scrollToElement(selector, time, verticalOffset, completion) {
    console.log("selector:", selector);
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time, completion);
  };

  $('.scroll').on('click', function(event){
    event.preventDefault();
    console.log("target: ", $(this), $(this).attr("href"));
    var elem = '#' + $(this).attr("href").replace(/(^#|^\/#)/g, '');
    scrollToElement(elem, 500, 0);
  });


});