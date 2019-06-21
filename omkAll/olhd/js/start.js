$(function(){
	var h=$(document).height();
	var dwc=$(document).width();
	
	$('.mian').css('width',parseInt(dwc)+'px');
	$('.mian').css('height',parseInt(h)+'px');
	$('.mian').css('background-size',parseInt(dwc)+'px '+parseInt(h)+'px');
	
	$('.anniu').css('margin-top',parseInt(h)*0.7296+'px');
	$('.anniu a img').css('height',parseInt(h)*0.08+'px');
	$('.anniu a img').css('width',(parseInt(h)*0.08)*2.8727+'px');
});