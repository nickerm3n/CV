'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.burger-menu').click(function() {
			$(this).toggleClass('active');
			$('.header__layout').toggleClass('active');
			$('.header__nav').toggleClass('active');
		})

	});
})(jQuery);
