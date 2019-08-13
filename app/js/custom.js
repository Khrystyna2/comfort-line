$(document).ready(function () {
	$(".phone .arrow-down").click(function () {
		$(this)
			.parent()
			.toggleClass("open");
		$(this)
			.next()
			.toggleClass("show");
	});

	// slider first screen
	$(function () {
		$(".slider")
			.on("init", function (event, slick) {
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
				speed: 1000
			})
			.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
				let indexNextSlider = nextSlide + 1;
				let findCurrentBlock = $(this).find(".current");
				if (indexNextSlider <= 9) {
					findCurrentBlock.text("0" + (nextSlide + 1));
				} else {
					findCurrentBlock.text(nextSlide + 1);
				}
			});
	});

	// slider promotions
	$(function () {
		$(".slider-promotions")
			.on("init", function (event, slick) {
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
				// autoplay: true,
				autoplaySpeed: 2000,
				focusOnSelect: false,
				slide: ".slider-promotions__item",
				nextArrow: ".slider-promotions-next",
				prevArrow: ".slider-promotions-prev"
			})
			.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
				let indexNextSlider = nextSlide + 1;
				let findCurrentBlock = $(this).find(".current");
				if (indexNextSlider <= 9) {
					findCurrentBlock.text("0" + (nextSlide + 1));
				} else {
					findCurrentBlock.text(nextSlide + 1);
				}
			});
	});

	// slider reviews
	$(function () {
		$(".slider-client")
			.on("init", function (event, slick) {
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
				slidesToShow: 3,
				slidesToScroll: 1,
				slide: ".slider-reviews__item",
				nextArrow: ".client-next",
				prevArrow: ".client-prev",
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			})
			.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
				let indexNextSlider = nextSlide + 1;
				let findCurrentBlock = $(this).find(".current");
				if (indexNextSlider <= 9) {
					findCurrentBlock.text("0" + (nextSlide + 1));
				} else {
					findCurrentBlock.text(nextSlide + 1);
				}
			});
	});

	$(function () {
		$(".slider-partners")
			.on("init", function (event, slick) {
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
				slidesToShow: 3,
				slidesToScroll: 1,
				slide: ".slider-reviews__item",
				nextArrow: ".partners-next",
				prevArrow: ".partners-prev",
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			})
			.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
				let indexNextSlider = nextSlide + 1;
				let findCurrentBlock = $(this).find(".current");
				if (indexNextSlider <= 9) {
					findCurrentBlock.text("0" + (nextSlide + 1));
				} else {
					findCurrentBlock.text(nextSlide + 1);
				}
			});
	});

	$(function () {
		$(".slider-emloees")
			.on("init", function (event, slick) {
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
				slidesToShow: 3,
				slidesToScroll: 1,
				slide: ".slider-reviews__item",
				nextArrow: ".emloees-next",
				prevArrow: ".emloees-prev",
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			})

			.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
				let indexNextSlider = nextSlide + 1;
				let findCurrentBlock = $(this).find(".current");
				if (indexNextSlider <= 9) {
					findCurrentBlock.text("0" + (nextSlide + 1));
				} else {
					findCurrentBlock.text(nextSlide + 1);
				}
			});
	});

	$(".nav-link").click(function () {
		let findHref = $(this).attr("href");
		let findBlock = $(".tab-content").find(findHref);
		if (findHref === "#pills-client") {
			$(".slider-client").slick("refresh");
		}
		if (findHref === "#pills-partners") {
			$(".slider-partners").slick("refresh");
		}
		if (findHref === "#pills-emloees") {
			$(".slider-emloees").slick("refresh");
		}
		findBlock.addClass("open");
		setTimeout(function () {
			$(".tab-pane").removeClass("open");
		}, 600);
	});
	$(
		'<div class="spinner__nav"><div class="spinner__btn spinner-up">+</div><div class="spinner__btn spinner-down">-</div></div>'
	).insertAfter(".spinner>input");
	$(".spinner").each(function () {
		let spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find(".spinner-up"),
			btnDown = spinner.find(".spinner-down"),
			min = input.attr("min"),
			max = input.attr("max");

		btnUp.click(function () {
			let oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				newVal = oldValue;
			} else {
				newVal = oldValue + 10;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			let oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				newVal = oldValue;
			} else {
				newVal = oldValue - 10;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// calendar start
	var d = new Date();

	var Calendar = {
		themonth: d.getMonth(), // The number of the month 0-11
		theyear: d.getFullYear(), // This year
		today: [d.getFullYear(), d.getMonth(), d.getDate()], // adds today style
		selectedDate: null, // set to today in init()
		years: [], // populated with last 10 years in init()
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],

		init: function () {
			this.selectedDate = this.today;
			// Populate the list of years in the month/year pulldown
			var year = this.theyear;
			for (var i = 0; i < 10; i++) {
				this.years.push(year--);
			}

			this.bindUIActions();
			this.render();
		},

		bindUIActions: function () {
			// Move calander to today
			$(".today").click(function () {
				Calendar.themonth = d.getMonth();
				Calendar.theyear = d.getFullYear();
				Calendar.selectMonth();
				Calendar.selectYear();
				Calendar.selectedDate = Calendar.today;
				Calendar.render();
			});

			// Move the calendar pages
			$(".calendar p.minusmonth").text(this.months[this.themonth]);
			$(".minusmonth").click(function () {
				Calendar.themonth += -1;
				Calendar.changeMonth();
				$(this).addClass("active");
				$(".addmonth").removeClass("active");
			});
			$(".calendar p.addmonth").text(this.months[this.themonth + 1]);
			$(".addmonth").click(function () {
				Calendar.themonth += 1;
				Calendar.changeMonth();
				$(this).addClass("active");
				$(".minusmonth").removeClass("active");
			});
		},

		// Makes sure that month rolls over years correctly
		changeMonth: function () {
			if (this.themonth == 12) {
				this.themonth = 0;
				this.theyear++;
			} else if (this.themonth == -1) {
				this.themonth = 11;
				this.theyear--;
			}

			this.render();
		},

		// Helper functions for time calculations
		TimeCalc: {
			firstDay: function (month, year) {
				var fday = new Date(year, month, 1).getDay(); // Mon 1 ... Sat 6, Sun 0
				if (fday === 0) fday = 7;
				return fday - 1; // Mon 0 ... Sat 5, Sun 6
			},
			numDays: function (month, year) {
				return new Date(year, month + 1, 0).getDate(); // Day 0 is the last day in the previous month
			}
		},

		render: function () {
			var days = this.TimeCalc.numDays(this.themonth, this.theyear), // get number of days in the month
				fDay = this.TimeCalc.firstDay(this.themonth, this.theyear), // find what day of the week the 1st lands on
				daysHTML = "",
				i;

			// $('.calendar p.monthname').text(this.months[this.themonth]); // add month name to calendar
			for (i = 0; i < fDay; i++) {
				// place the first day of the month in the correct position
				daysHTML += '<li class="noclick">&nbsp;</li>';
			}
			// write out the days
			for (i = 1; i <= days; i++) {
				if (
					this.today[0] == this.selectedDate[0] &&
					this.today[1] == this.selectedDate[1] &&
					this.today[2] == this.selectedDate[2] &&
					this.today[0] == this.theyear &&
					this.today[1] == this.themonth &&
					this.today[2] == i
				)
					daysHTML += '<li class="active today">' + i + "</li>";
				else if (this.today[0] == this.theyear && this.today[1] == this.themonth && this.today[2] == i)
					daysHTML += '<li class="today">' + i + "</li>";
				else if (
					this.selectedDate[0] == this.theyear &&
					this.selectedDate[1] == this.themonth &&
					this.selectedDate[2] == i
				)
					daysHTML += '<li class="active">' + i + "</li>";
				else daysHTML += "<li>" + i + "</li>";

				$(".calendar-body").html(daysHTML); // Only one append call
			}

			// Adds active class to date when clicked
			$(".calendar-body li").click(function () {
				// toggle selected dates
				if (!$(this).hasClass("noclick")) {
					$(".calendar-body li").removeClass("active");
					$(this).addClass("active");
					Calendar.selectedDate = [Calendar.theyear, Calendar.themonth, $(this).text()]; // save date for reselecting
				}
			});
		}
	};

	Calendar.init();
	// calendar end

	// timer
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	$(".timer").each(function () {
		let curentDate = $(this).data("time");
		let currentDay = $(this).find(".days");
		let currentHour = $(this).find(".hours");
		let currentMinute = $(this).find(".minutes");
		let currentSecond = $(this).find(".seconds");

		let countDownStart = new Date(curentDate).getTime();

		let startDate = setInterval(function () {
			let now = new Date().getTime();
			let distance = countDownStart - now;
			function timer(distance) {
				$(currentDay).text(Math.floor(distance / day));
				$(currentHour).text(Math.floor((distance % day) / hour));
				$(currentMinute).text(Math.floor((distance % hour) / minute));
				$(currentSecond).text(Math.floor((distance % (second * 60)) / second));
			}
			timer(distance);

			if (distance < 0) {
				clearInterval(startDate);
				distance = 0;
				$(".competition-counter > ul li").css("color", "#ff0000");
				timer(distance);
			}
		}, second);
	});

	// menu on screen 1200
	$(".menu__btn").on("click", function () {
		$(this).toggleClass("active");
		$(".menu")
			.slideToggle()
			.toggleClass("open");
	});

	$(window).resize(function () {
		if ($(window).width() >= 1200) {
			$(".menu").css("display", "block");
		} else if ($(window).width() <= 1999) {
			$(".menu").css("display", "none");
		}
	});

	// slider brands
	$(".slider-brands").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 2000,
		focusOnSelect: false,
		slide: ".slider-brands__item",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	// accordion
	$(".accordion>li>div").click(function () {
		$(this)
			.find("span")
			.toggleClass("rotate");
		$(this)
			.next("article")
			.slideToggle();
		$(this)
			.closest("li")
			.siblings("li")
			.find("span")
			.removeClass("rotate");
		$(this)
			.closest("li")
			.siblings("li")
			.find("article")
			.slideUp();
	});

	// change color roletta
	$(".label-radio-input").click(function () {
		let datdSrc = $(this).attr("data-src");
		$("#colorRoletta").attr("src", datdSrc);
	});

	// who we are page - team slider


	$(function () {
		$(".slider-ww")
			.on("init", function (event, slick) {
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
				slidesToShow: 4,
				slidesToScroll: 1,
				slide: ".slider-reviews__item",
				nextArrow: ".slider-ww-next",
				prevArrow: ".slider-ww-prev",
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}
				]
			})
			.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
				let indexNextSlider = nextSlide + 1;
				let findCurrentBlock = $(this).find(".current");
				if (indexNextSlider <= 9) {
					findCurrentBlock.text("0" + (nextSlide + 1));
				} else {
					findCurrentBlock.text(nextSlide + 1);
				}
			});
	});


});
