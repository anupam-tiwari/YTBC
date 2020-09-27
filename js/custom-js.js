// owl-carousel js-index page
		var owl = $('#one');
      owl.owlCarousel({
        margin: 10,
        loop: true,
		   nav:true,
		  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
		    navigation: true,
		  
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })

//Products section
		var owl = $('#product-sec');
      owl.owlCarousel({
        margin: 10,
        loop: true,
		  items: 3,
		   merge:true,
		      nav: false,
  				dots: true,
		  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
		    navigation: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items:3
          },
          1200: {
            items:6	
          },
			1400: {
            items:6
          }
        }
		  
      })
	  
	  //Pixcy page slider
		var owl = $('#pixgy-slider');
      owl.owlCarousel({
        margin: 20,
        loop: true,
		  items: 4,
		   merge:true,
		      nav: true,
  				dots: false,
		  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
		    navigation: true,
        responsive: {
          0: {
            items:1
          },
          600: {
            items:4
          },
          1200: {
            items:4	
          },
			1400: {
            items:4
          }
        }
		  
      })

 //Pixcy page slider
		var owl = $('#partner');
      owl.owlCarousel({
        margin: 20,
        loop: true,
		  items: 4,
		   merge:true,
		      nav: true,
  				dots: false,
		  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
		    navigation: true,
        responsive: {
          0: {
            items:1
          },
          600: {
            items:2
          },
          1200: {
            items:3	
          },
			1400: {
            items:3
          }
        }
		  
      })
//custors section
		var owl = $('#our_customers');
      owl.owlCarousel({
        margin: 10,
        loop: true,
		  items: 3,
		   merge:true,
		      nav: false,
  				dots: true,
		  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
		    navigation: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items:3
          },
          1200: {
            items:6	
          },
			1400: {
            items:6
          }
        }
		  
      })




// owl-carousel js-
		var owl = $('#E2');
      owl.owlCarousel({
        margin: 40,
        loop: true,
		  nav: false,
  				dots: true,
		  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
		    navigation: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })
		 $( ".owl-prev").html("<img src='images/partner-arrow-left.png'>");
		$( ".owl-next").html("<img src='images/partner-arrow-right.png'>");
		$( "#partnerr .owl-prev").html("<img src='images/partner-arrow-left.png'>");
		$( "#partner .owl-next").html("<img src='images/partner-arrow-right.png'>");

 //$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


(function ($) {
$(document).ready(function () {
	//sticky go to top function
var menu = document.querySelector('#nav-sticky');
var origOffsetY = menu.offsetTop + 48;
if ($(window).width() > 750 && $(window).width() < 1000) {
	var origOffsetY = menu.offsetTop + 48;
} else if ($(window).width() > 640 && $(window).width() < 750) {
	var origOffsetY = menu.offsetTop + 48;
} else if ($(window).width() < 480) {
	var origOffsetY = menu.offsetTop + 48;
}

function scroll() {
	if ($(window).scrollTop() > origOffsetY) {
		$('#nav-sticky').addClass('sticky');
		$('#head-gap').addClass('stickytwo');
	} else {
		$('#nav-sticky').removeClass('sticky');
		$('#head-gap').removeClass('stickytwo');
	}
}
document.onscroll = scroll;  
	
	
	
	
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	//**remve class
	$("#nav-profile-tab").click(function(){
  $("#nav-home-tab").removeClass("intro");
});
	
	});
	

})(jQuery);