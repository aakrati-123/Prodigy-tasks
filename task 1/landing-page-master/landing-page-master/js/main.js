$(function(){
	
	$('.cta').click(function(){
		$('.overlay').css('display', 'flex');
		return false;
	});

	$('.close-btn').click(function(){
		$('.overlay').hide();
	});

});