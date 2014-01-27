$(window).scroll(function() {
	oVal = ($(window).scrollTop() / 240);
	$('.blur').css('opacity', oVal);
});