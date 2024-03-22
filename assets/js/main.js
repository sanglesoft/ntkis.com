(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /*====  responsive menu js active =====*/
        if ($.fn.slicknav) {
            $('.mainmenu ul#nav').slicknav({
                prependTo: ".responsive_menu",
                label: ""
            })
        }

        /*====  sticky menu js active =====*/
        if ($.fn.sticky) {
            $('.header-area').sticky({ stopSpacing: 0 });
        }

        /*====  screenshot slide =====*/
        if ($.fn.owlCarousel) {
            $('.screenshot-slide').owlCarousel({
                items: 4,
                loop: true,
                margin: 20,
                dots: false,
                autoplay: false,
                center: true,
                mouseDrag: true,
                autoWidth: false,
                nav: true,
                autoplayHoverPause: true,
                touchDrag: true,
                navText: ["<i class='zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        margin: 0
                    },
                    480: {
                        items: 2,
                         margin: 0
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4
                    }
                }
            });
        }
        /*====  screenshot slide =====*/
        if ($.fn.owlCarousel) {
            $('.screenshot-home3-slide').owlCarousel({
                items: 5,
                loop: true,
                nav: true,
                autoplay: true,
                margin: 30,
                center: true,
                navText: ["<i class='zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        margin: 0
                    },
                    480: {
                        items: 2,
                        center: false,
                        margin: 0
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 5
                    }
                }
            });
        }

        /*====  testimonial slide =====*/
        if ($.fn.owlCarousel) {
            $('.testimonial-slide, .blog-slide').owlCarousel({
                items: 3,
                loop: true,
                nav: false,
                autoplay: true,
                margin: 20,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }

        /*====  testimonial slide =====*/
        if ($.fn.owlCarousel) {
            $('.home2-screenshot-slide').owlCarousel({
                items: 3,
                loop: true,
                nav: true,
                autoplay: true,
                margin: 20,
                navText: ["<i class='zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }

        /*====  magnific popup js active =====*/
        if ($.fn.magnificPopup) {
            $('.video-btn').magnificPopup({
                type: 'video',
                mainClass: 'mfp-iframe'
            });
        }

        /*====  magnific popup js active =====*/
        if ($.fn.magnificPopup) {
            $('.single-blog-popup').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom',
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out'
                },
                gallery: {
                    enabled: true
                }
            });

        }

        /*====  one page js active =====*/
        $('.mainmenu > ul#nav > li > a, .preview-hero a.view-demo').click(function() {
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 0
            }, 1000);
            return false;
        });

    });

    /*====  Window Load Function =====*/
    jQuery(window).load(function() {

    /*====  animation js =====*/
        new WOW().init();

    /*====  preloader js =====*/
      setTimeout(function() {
            $('body').addClass('loaded');
        }, 500);

    });

}(jQuery));