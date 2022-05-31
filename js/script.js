
(function ($) { "use strict";
	$(window).on("load",function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
	$('.play-icon i').click(function() {
		var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	});
	var portfolio_item = $('.portfolio-items-wrapper');
	if (portfolio_item.length) {
		var mixer = mixitup(portfolio_item);
	};
	$('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
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
		  ]
	});
	$('.clients-logo-slider').slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		slidesToShow: 5,
  		slidesToScroll: 1,
	});
	$('.company-gallery').slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		slidesToShow: 5,
  		slidesToScroll: 1,
	});
	$('.counter').each(function() {
	  var $this = $(this),
	      countTo = $this.attr('data-count');
	  
	  $({ countNum: $this.text()}).animate({
	    countNum: countTo
	  },
	  {
	    duration: 1500,
	    easing:'linear',
	    step: function() {
	      $this.text(Math.floor(this.countNum));
	    },
	    complete: function() {
	      $this.text(this.countNum);
	    }
	  });  
	});
	

	var scroll = new SmoothScroll('a[href*="#"]');

$(window).scroll(function() {    
var scroll = $(window).scrollTop();
if (scroll > 200) {
    $(".navigation").addClass("sticky-header");
} else {
    $(".navigation").removeClass("sticky-header");
}});

})(jQuery);

window.marker = null;

function initialize() {
    var map;
    var nottingham = new google.maps.LatLng(37.73885426679362, 29.09223480053451);
    var style = [
    	{"stylers": [{"hue": "#ff61a6"},{"visibility": "on"},{"invert_lightness": true},{"saturation": 40},{"lightness": 10}]}
	];
    var mapOptions = {
        center: nottingham,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom:9,
        backgroundColor:"#000",
        zoom:17,
        panControl:false,
        zoomControl:true,
        mapTypeControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        zoomControlOptions: {
            style:google.maps.ZoomControlStyle.LARGE
        }
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var mapType = new google.maps.StyledMapType(style, {name:"Grayscale"});
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');
    var marker_image ='images/marker.png';
    var pinIcon = new google.maps.MarkerImage(marker_image,null,null, null,new google.maps.Size(25, 33));
	
    marker = new google.maps.Marker({
        position: nottingham,
        map: map,
        icon: pinIcon,
        title: 'navigator'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);