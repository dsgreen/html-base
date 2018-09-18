/*
 Main Navigation
 */

jQuery(document).ready(function($) {

  // hidden class added for better loading at mobile (expanded menu is not shown as it loads)
  $('.main-navigation').removeClass('hidden');

  // 1st page load
  if (window.innerWidth < 768) {
    $('.main-navigation').hide();
  }

  // toggle button
  $('.nav-toggle').click(function(){
    $('.main-navigation').slideToggle('fast');
    $('.site-header').toggleClass('toggled');
  });

  // browser resize, collapse mobile menu
  $(window).resize(function() {
    $('.site-header').removeClass('toggled');
    if (window.innerWidth > 767) {
      $('.main-navigation').show();
    }
    else if (window.innerWidth < 768) {
      $('.main-navigation').hide();
    }
  });

});
