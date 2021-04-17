$(document).ready(function(){

	$(".owl-carousel").owlCarousel({

	  	items: 5,
	  	loop: true,
	  	margin: 5,
	  	nav: true,
	  	// autoWidth:true,
	  	// center: true,
	  	responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        576:{
		            items:2,
		            nav:false
		        },

		        768:{
		            items:3,
		            nav:false
		        },

		        992:{
		            items:4,
		            nav:false
		        },

		        1200:{
		            items:5,
		            nav:false,
		            margin:10
		        },


		        1400:{
		            items:6,
		            nav:true,
		            loop:true
		        }
		    }


	  });


	$('.slick').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,

		 responsive: [

		    {
		      breakpoint: 1400,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },

		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		    
		  });



	$('.slider2').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,

		 responsive: [

		    {
		      breakpoint: 1400,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true
		      }
		    },

		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		    
		  });
	

});