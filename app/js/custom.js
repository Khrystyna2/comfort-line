$(window).on("load", function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$("body").addClass("ios");
	} else {
		$("body").addClass("web");
	}
});

$(document).ready(function() {
	// if($('.slick-slider').length) {
	// 	$('.slick-slider').slick({
	// 		dots: true,
	// 		infinite: false,
	// 		speed: 300,
	// 		slidesToShow: 4,
	// 		slidesToScroll: 4,
	// 		responsive: [
	// 			{
	// 			  breakpoint: 1024,
	// 			  settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3,
	// 				infinite: true,
	// 				dots: true
	// 			  }
	// 			},
	// 			{
	// 			  breakpoint: 600,
	// 			  settings: "unslick"
	// 			}
	// 		]
	// 	});
	// };
});
