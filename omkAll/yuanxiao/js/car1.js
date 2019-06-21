$(function(){
	$(".carimg > button").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var i=$(this).index();
		$(".carimg_5 > ul").first().show().siblings("ul").hide();
		$(".carimg > p > img").first().show();
		$(".carimg > p > img").eq(i).show().siblings().hide();
		$(".carimg_5 > ul").eq(i).show().siblings().hide();
	});
	$(".star > button").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var i=$(this).index();
		$(".imgck > ul").eq(i).show().siblings().hide();
	});
	$(".viderow > button").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var i=$(this).index();
		$(".vide > ul").eq(i).show().siblings().hide();
	});
	
});