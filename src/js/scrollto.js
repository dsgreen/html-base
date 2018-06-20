jQuery(document).ready(function($) {

  /*
   * back to top button
   */
  $.localScroll.defaults.axis = 'y';

  // Scroll initially if there's a hash (#something) in the url
  $.localScroll.hash({
    duration:500
  });

  $.localScroll({
    duration:500,
    hash:true
  });

});
