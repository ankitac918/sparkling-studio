$(document).ready(function() {
    "use strict";


    /***** Owl Slider *****/
    $(".slider-wrapper").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        smartSpeed: 700,
        loop: true,
        responsiveClass: true,
        items: 1,
        nav: true,
        navText: ['<img src="images/left-arrow.png" alt="" />', '<img src="images/right-arrow.png" alt="" />'],
        margin: 0,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    $(".slider-wrapper").on('translate.owl.carousel', function() {
        $('.slider-item .slider-heading').removeClass('wow fadeInDown').hide();
        $('.slider-item .slider-para').removeClass('wow fadeInUp').hide();
        $('.slider-item .slider-btn').removeClass('wow fadeInUp').hide();
    });

    $(".slider-wrapper").on('translated.owl.carousel', function() {
        $('.owl-item.active .slider-item .slider-heading').addClass('animated fadeInDown').show();
        $('.owl-item.active .slider-item .slider-para').addClass('animated fadeInUp').show();
        $('.owl-item.active .slider-item .slider-btn').addClass('animated fadeInUp').show();
    });

    $(".owl-doctor").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
        loop: true,
        responsiveClass: true,
        items: 4,
        nav: false,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });



    /***** Isotope Gallery *****/
    // $(window).on('load', function(){

    // 	$(".gallery-items").isotope({
    //  			filter: '.car'
    // 	});

    // 	$(".gallery-items").isotope({
    // 		itemSelector:'.grid-item',
    // 		percentPosition:true,
    // 		masonry:{
    // 			columnWidth:'.grid-item'
    // 		},
    // 	});
    // 	$("ul.gallery-filter > li").on("click",function(){
    // 		$("ul.gallery-filter > li").removeClass("active");
    // 		$(this).addClass("active");
    // 		var selector=$(this).attr("data-filter");
    // 		$(".gallery-items").isotope({
    // 			filter: selector,
    // 			animationOptions: {
    // 				duration: 750,
    // 				easing: 'linear',
    // 				queue: true
    // 			}
    // 		});
    // 		return false;
    // 	});

    // 	//Preloader
    // 	$("#preloader").fadeOut("500");
    // });


    /***** Magnific-popup *****/
    // $('.grid-item').magnificPopup({
    // 	delegate: '.fc-icon a',
    // 	type: 'image',
    // 	gallery: {
    // 		// options for gallery
    // 		enabled: true
    // 	},
    // 	removalDelay: 300,
    // 	mainClass: 'mfp-fade'
    // });


    /***** Smooth Scroll *****/
    // smoothScroll.init({
    // 	speed: 700
    // });

    $("#preloader").fadeOut("500");

    /***** Back To Top *****/
    // $(window).scroll(function(){
    // 	if($(this).scrollTop()>500){
    // 	    $(".back-to-top a").fadeIn();
    // 	} else{
    // 	    $(".back-to-top a").fadeOut();
    // 	}
    // });
});