'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$(document).scroll(function(){
			if ($(this).scrollTop() > 140) {
				$('header').addClass('scrollDown');
			} else {
				$('header').removeClass('scrollDown')
			}
		})

		$('.burger-menu').click(function() {
			$(this).toggleClass('active');
			$('.header__layout').toggleClass('active');
			$('.header__nav').toggleClass('active');
		})

		$('.portfolio__sliders').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  prevArrow: '.fa-chevron-left',
		  nextArrow: '.fa-chevron-right',
		  speed: 700,
  		  fade: true,
		});




	});
})(jQuery);
