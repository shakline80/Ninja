(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    

		    $(".menu_trigger").click(function(){
            $(".header-right, .menu_trigger").toggleClass("active");
        });

        //===== Sticky Menu-Bar Start
        $(window).on('scroll',function(event) {    
            var scroll = $(window).scrollTop();
            if (scroll < 10) {
                $(".header-topbar-area").removeClass("sticky");
            }else{
                $(".header-topbar-area").addClass("sticky");
            }
        });
        //===== Sticky Menu-Bar End

	

        $('.stories-slider').slick({
            centerMode: true,
            slidesToShow: 3,
            autoplay:true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '50px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '30px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 481,
                settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '0px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 300,
                settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '0px',
                  slidesToShow: 1
                }
              }
            ]
          });





        
        






	});



    jQuery(window).load(function(){
      $('select').niceSelect();
     
    });

    new WOW().init();


}(jQuery));	