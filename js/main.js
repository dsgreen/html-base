jQuery(document).ready(function($) {
    $(".main-navigation").removeClass("hidden");
    $(".mobile-navigation").removeClass("hidden");
    function setupMobileMenu() {
        $(".mobile-navigation").hide();
        $(".mobile-navigation .sub-menu").hide();
        $(".mobile-navigation .children").hide();
        $(".mobile-navigation .menu-item-has-children > a").click(function(e) {
            e.preventDefault();
            $(this).attr("aria-expanded", $(this).attr("aria-expanded") === "true" ? "false" : "true");
            $(this).next(".sub-menu").slideToggle("fast");
        });
        $(".mobile-navigation .page_item_has_children > a").click(function(e) {
            e.preventDefault();
            $(this).attr("aria-expanded", $(this).attr("aria-expanded") === "true" ? "false" : "true");
            $(this).next(".children").slideToggle("fast");
        });
        $(".mobile-nav-close").click(function(e) {
            e.preventDefault();
            $(".mobile-navigation").hide();
            $(".mobile-navigation .sub-menu").hide();
            $(".mobile-navigation .children").hide();
            $(".site-header").toggleClass("toggled");
        });
    }
    function trapFocusMobileNav() {
        var focusableElements = 'button, [href], [tabindex]:not([tabindex="-1"])';
        var modal = document.querySelector("#mobile-navigation-wrap");
        var firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
        var focusableContent = modal.querySelectorAll(focusableElements);
        var lastFocusableElement = focusableContent[focusableContent.length - 1];
        function keyListener(e) {
            var isTabPressed = e.key === "Tab" || e.keyCode === 9;
            if (!isTabPressed) {
                return;
            }
            if ($("#site-header").hasClass("toggled")) {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
        document.addEventListener("keydown", keyListener);
        firstFocusableElement.focus();
    }
    $(".nav-toggle").click(function() {
        $(".mobile-navigation").slideToggle("fast");
        $(".site-header").toggleClass("toggled");
        trapFocusMobileNav();
    });
    setupMobileMenu();
    $(window).resize(function() {
        $(".site-header").removeClass("toggled");
        $(".mobile-navigation").hide();
        $(".mobile-navigation .sub-menu").hide();
        $(".mobile-navigation .children").hide();
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 75) {
            $(".site-header").addClass("scrolled");
        } else {
            $(".site-header").removeClass("scrolled");
        }
    });
    $(".main-navigation > ul").superfish({
        speed: "fast",
        autoArrows: false,
        cssArrows: false
    });
});