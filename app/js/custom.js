$(window).on("load", function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$("body").addClass("ios");
	} else {
		$("body").addClass("web");
	}
});

$(document).ready(function() {

	$('.phone .arrow-down').click(function() {
		$(this).next().slideToggle()
	})

	// slider first screen
    $(function () {
        $('.slider').on('init', function (event, slick) {
            let findBlock = $(this).find('.total');
            let findCurrentBlock = $(this).find('.current');
            findCurrentBlock.text('0' + (slick.currentSlide + 1));
            if (slick.slideCount < 10) {
                findBlock.text('0' + slick.slideCount);
            } else {
                findBlock.text(slick.slideCount);
            }
        })
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                // autoplay: true,
                autoplaySpeed: 2000,
                focusOnSelect: false,
				slide: ".slider__item",
				nextArrow: ".slider__next",
				prevArrow: ".slider__prev",
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            dots: false
                        }
                    }
                ]
            })
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                let indexNextSlider = nextSlide + 1;
                let findCurrentBlock = $(this).find('.current');
                if (indexNextSlider <= 9) {
                    findCurrentBlock.text('0' + (nextSlide + 1));
                }
                else {
                    findCurrentBlock.text(nextSlide + 1);
                }
            });
    });

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
