$(window).on("load", function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$("body").addClass("ios");
	} else {
		$("body").addClass("web");
	}
});

$(document).ready(function() {
	$(".phone .arrow-down").click(function() {
		$(this)
			.next()
			.slideToggle();
	});

	// slider first screen
	$(function() {
		$(".slider")
			.on("init", function(event, slick) {
				let findBlock = $(this).find(".total");
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text("0" + (slick.currentSlide + 1));
				if (slick.slideCount < 10) {
					findBlock.text("0" + slick.slideCount);
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
			.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
				let indexNextSlider = nextSlide + 1;
				let findCurrentBlock = $(this).find(".current");
				if (indexNextSlider <= 9) {
					findCurrentBlock.text("0" + (nextSlide + 1));
				} else {
					findCurrentBlock.text(nextSlide + 1);
				}
			});
	});

	$(
		'<div class="spinner__nav"><div class="spinner__btn spinner-up">+</div><div class="spinner__btn spinner-down">-</div></div>'
	).insertAfter(".spinner>input");
	$(".spinner").each(function() {
		let spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find(".spinner-up"),
			btnDown = spinner.find(".spinner-down"),
			min = input.attr("min"),
			max = input.attr("max");

		btnUp.click(function() {
			let oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				newVal = oldValue;
			} else {
				newVal = oldValue + 100;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			let oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				newVal = oldValue;
			} else {
				newVal = oldValue - 100;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});
});
