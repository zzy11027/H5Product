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

	$(".butt_1").click(function(){
		$(".biao").show();
		$(".biao_1").hide();
	})
	
	$(".butt_2").click(function(){
		$(".biao").hide();
		$(".biao_1").show();
	})

	$(".biao > li").eq(0).click(function(){

		$(".a").attr("src","templates/yuanxiao/img/rh123/1.png");
		$(".s").attr("src","templates/yuanxiao/img/rh123/4.png");
		$(".d").attr("src","templates/yuanxiao/img/rh123/5.png");
		$(".one").show();
		$(".two").hide();
		$(".three").hide();
		$(".four").hide();
		$(".five").hide();
		$(".six").hide();
		$(".seven").hide();
	})

	$(".biao > li").eq(1).click(function(){

		$(".a").attr("src","templates/yuanxiao/img/rh123/2.png");
		$(".s").attr("src","templates/yuanxiao/img/rh123/3.png");
		$(".d").attr("src","templates/yuanxiao/img/rh123/5.png");
		$(".one").hide();
		$(".two").show();
		$(".three").hide();
		$(".four").hide();
		$(".five").hide();
		$(".six").hide();
		$(".seven").hide();
	})

	$(".biao > li").eq(2).click(function(){

		$(".a").attr("src","templates/yuanxiao/img/rh123/2.png");
		$(".s").attr("src","templates/yuanxiao/img/rh123/4.png");
		$(".d").attr("src","templates/yuanxiao/img/rh123/6.png");
		$(".one").hide();
		$(".two").hide();
		$(".three").show();
		$(".four").hide();
		$(".five").hide();
		$(".six").hide();
		$(".seven").hide();
	})



	$(".biao_1 > li").eq(0).click(function(){
		$(".q").attr("src","templates/yuanxiao/img/rh456/2.png");
		$(".w").attr("src","templates/yuanxiao/img/rh456/4.png");
		$(".e").attr("src","templates/yuanxiao/img/rh456/5.png");
		$(".r").attr("src","templates/yuanxiao/img/rh456/7.png");
		$(".five").hide();
		$(".six").hide();
		$(".seven").hide();
		$(".one").hide();
		$(".two").hide();
		$(".three").hide();
		$(".four").show();
	})

	$(".biao_1 > li").eq(1).click(function(){
		$(".w").attr("src","templates/yuanxiao/img/rh456/3.png");
		$(".q").attr("src","templates/yuanxiao/img/rh456/1.png");
		$(".e").attr("src","templates/yuanxiao/img/rh456/5.png");
		$(".r").attr("src","templates/yuanxiao/img/rh456/7.png");
		$(".five").show();
		$(".six").hide();
		$(".seven").hide();
		$(".one").hide();
		$(".two").hide();
		$(".three").hide();
		$(".four").hide();
	})

	$(".biao_1 > li").eq(2).click(function(){
		$(".e").attr("src","templates/yuanxiao/img/rh456/6.png");
		$(".w").attr("src","templates/yuanxiao/img/rh456/4.png");
		$(".q").attr("src","templates/yuanxiao/img/rh456/1.png");
		$(".r").attr("src","templates/yuanxiao/img/rh456/7.png");
		$(".five").hide();
		$(".six").show();
		$(".seven").hide();
		$(".one").hide();
		$(".two").hide();
		$(".three").hide();
		$(".four").hide();
	})

	$(".biao_1 > li").eq(3).click(function(){
		$(".r").attr("src","templates/yuanxiao/img/rh456/8.png");
		$(".w").attr("src","templates/yuanxiao/img/rh456/4.png");
		$(".e").attr("src","templates/yuanxiao/img/rh456/5.png");
		$(".q").attr("src","templates/yuanxiao/img/rh456/1.png");
		$(".one").hide();
		$(".two").hide();
		$(".three").hide();
		$(".four").hide();
		$(".five").hide();
		$(".six").hide();
		$(".seven").show();
	})
});