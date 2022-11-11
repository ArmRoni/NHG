jQuery(document).ready(function($) {
	jQuery(".share_btn_logo").click(function() {
		jQuery(this).toggleClass('active');  
		jQuery('.share_toggler ul').slideToggle('slow'); 
	});

	jQuery(".menu_bar").click(function() {
        jQuery('.header_nav_area').toggleClass('active-open');
		jQuery('.header').toggleClass('header_stiky');
		jQuery(this).toggleClass('menu_bar_active');
	});

	// new WOW().init();


	jQuery('.scroll_down').click(function () {
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top -0
		}, 1500);
		return false;
	});
});






//    jQuery(function(){
// 	var $grid = jQuery('.institution_project_box').isotope({
// 	  	// layoutMode: 'fitRows',
// 		itemSelector: '.institution_project_item',
// 		percentPosition: true,
// 		originLeft: false,
// 		masonry: { 
// 			columnWidth:1,
// 		}
// 	}); 

// 	jQuery('.title-menu').on( 'click', 'button', function() {
// 	  var filterValue = $(this).attr('data-filter');
// 	  $grid.isotope({ filter: filterValue });
// 	});
// });




// jQuery(function(){
// 	jQuery('#menu').slicknav({
// 		label: '',
// 		openedSymbol:"",
// 		closedSymbol:"",
// 		prependTo:'#menu_holder'
// 	});
// 	jQuery('.scroll_btn').click(function () {
// 		var Lochref = jQuery(this).attr('href');
// 		jQuery("html, body").stop().animate({
// 		scrollTop: jQuery(Lochref).offset().top -90
// 		}, 1500);
// 		return false;
// 	});
// 	jQuery('.parallax').simpleParallax();
// });

// jQuery(window).scroll(function(){
//     if (jQuery(window).scrollTop() >= 1) {
//         jQuery('.header-sticky').addClass('is_stuck');
//     }
//     else {
//         jQuery('.header-sticky').removeClass('is_stuck');
//     }
// });

// jQuery(".menu_bar").click(function() {
// 	jQuery(this).toggleClass('menuclose');  
// 	jQuery('.mobile_menu').toggleClass('mobile_menu_open'); 
// 	jQuery('.mobile_menu').fadeToggle('fast'); 
// });
// jQuery(".menu_close").click(function() { 
// 	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
// 	jQuery('.mobile_menu').slideUp('slow'); 
// });


  
 
    jQuery('.nth_full_slider').owlCarousel({
        loop:true,
        nav:true,
        margin: 0,
        stagePadding: 0,
        autoHeight: true,
        dots:false,
        responsiveClass:true,
        navText: [
            '<span aria-label="' + 'Previous' + '"><i class="fa ion-chevron-left" aria-hidden="true"></i></span>',
            '<span aria-label="' + 'Next' + '"><i class="fa ion-chevron-right" aria-hidden="true"></i></span>'
        ],
        responsive:{
            0:{
                items:1,
                dots:false,
                autoHeight: true,
            },
            992:{
                items:1,
                 nav:true,
                autoHeight: true,
            }
        }
    });

 
 if( jQuery('.megha_menu_top').length > 0 ) {
    jQuery('.megha_menu_top').owlCarousel({
        loop:true,
        nav:true,
        margin: 0,
        stagePadding: 0,
        dots:false,
        responsiveClass:true,
        navText: [
            '<span aria-label="' + 'Previous' + '"><i class="fa ion-chevron-left" aria-hidden="true"></i></span>',
            '<span aria-label="' + 'Next' + '"><i class="fa ion-chevron-right" aria-hidden="true"></i></span>'
        ],
        responsive:{
            0:{
                items:2,
                dots:false,
                autoHeight: true,
            },
            992:{
                items:4,
                 nav:true,
            }
        }
    });
}

    jQuery('.photo_gallery_carousel').owlCarousel({
        loop:true,
        nav:true,
        margin: 0,
        stagePadding: 0,
        dots:false,
        responsiveClass:true,
        navText: [
            '<span aria-label="' + 'Previous' + '"><i class="fa ion-chevron-left" aria-hidden="true"></i></span>',
            '<span aria-label="' + 'Next' + '"><i class="fa ion-chevron-right" aria-hidden="true"></i></span>'
        ],
        responsive:{
            0:{
                items:1,
                dots:false,
            },
            992:{
                items:1,
                 nav:true,
            }
        }
    });