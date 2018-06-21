jQuery(document).ready(function($) {
    $(".main-navigation").removeClass("hidden");
    if (window.innerWidth < 768) {
        $(".main-navigation").hide();
    }
    $(".nav-toggle").click(function() {
        $(".main-navigation").slideToggle("fast");
    });
    $(window).resize(function() {
        if (window.innerWidth > 767) {
            $(".main-navigation").show();
        } else if (window.innerWidth < 768) {
            $(".main-navigation").hide();
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