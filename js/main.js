jQuery(document).ready(function($) {
    $(".main-navigation").removeClass("hidden");
    if (window.innerWidth < 768) {
        $(".main-navigation").hide();
    }
    $(".nav-toggle").click(function() {
        $(".main-navigation").slideToggle("fast");
        $(".site-header").toggleClass("toggled");
    });
    $(window).resize(function() {
        $(".site-header").removeClass("toggled");
        if (window.innerWidth > 767) {
            $(".main-navigation").show();
        } else if (window.innerWidth < 768) {
            $(".main-navigation").hide();
        }
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 75) {
            $(".site-header").addClass("scrolled");
        } else {
            $(".site-header").removeClass("scrolled");
        }
    });
});

jQuery(document).ready(function($) {
    $.localScroll.defaults.axis = "y";
    $.localScroll.hash({
        duration: 500
    });
    $.localScroll({
        duration: 500,
        hash: true
    });
});

if (!Modernizr.svg) {
    $('img[src$=".svg"]').each(function() {
        $(this).attr("src", $(this).attr("src").replace(".svg", ".png"));
    });
}