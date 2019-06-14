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

	});
})(jQuery);
