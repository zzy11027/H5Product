$(".btn-left").on("touchstart",function(e){
	checkleft(e);
});
$(".btn-right").on("touchstart",function(e){
	checkright(e);
})
var L1,L2,L3;
function checkleft(e){
	e.preventDefault();
	var cl = getDefaultStyle($("#car"), 'x');
	if(cl<$(".p2-center").width()*0.6){
		$("#car").transition({"x":L1+"px"},150);

	}else if(cl<$(".p2-center").width()*0.9){
		$("#car").transition({"x":L2+"px"},150);
		
	}
}
function checkright(e){
	e.preventDefault();
	var cl = getDefaultStyle($("#car"), 'x');
	if(cl<$(".p2-center").width()*0.3){
		$("#car").transition({"x":L2+"px"},150);

	}else if(cl<$(".p2-center").width()*0.6){
		$("#car").transition({"x":L3+"px"},150);

	}
}
$(".p1-btn-start").on("click",function(){
		var openid = $("#openid").val();
				$.ajax({
			        type: "POST",
			        url: "/omkds.php?step=cha",
			        data:{
			        	openid:openid
					},
			        success: function (res) {
			        	if(res==1){
			        		alert("很遗憾，您的游戏次数已用完");
			        		$('.p2s').text('30');
			        		clearTimeout(sei)
			        		return false;
			        	}else{



	$(".p2").fadeIn(500);
	$(".p1").fadeOut(500);
	// var center = ($(".p2-center").width()/2) - ($("#car").width()/2);
	// L1 = parseInt(($(".p2-center").width()*0.2) - $("#car").width());
	// L2 = parseInt(($(".p2-center").width()*0.62) - $("#car").width());
	// L3 = parseInt(($(".p2-center").width()*1) - $("#car").width());
	// $("#car").transition({"x":center+"px"});

	setTimeout(function(){
		$(".p2-go").hide();
		GameStart();
	},1000);

}
}
})

});
var speedIn = 400;//障碍物出现的速度
var speedDown = 1600;//障碍物掉落速度

var score=0,t,c;

var hei=$("body").height();
function GameStart(){
	c = setInterval(createItem,speedIn);
	startTimer();
	//createItem();
}
function reInterval(){
	clearInterval(c);
	c = setInterval(createItem,speedIn);
}

function startTimer(){

	t=setTimeout("startTimer()",1000);
}

//创建一个又一个路障
var strLeft=["8%","40%","70%"];
function createItem(){
	var rand = Math.floor(Math.random()*99);//障碍物身份随机
	if(score>0&&score<10){//20-50分，下降速度加快，创建障碍物速度也加快
		speedIn=400;
		speedDown=1600;
		reInterval();
	}
	if(score<0){
		speedIn=500;
		speedDown=2000;
		reInterval();
	}
	if(score>10&&score<20){
		speedIn=300;
		speedDown=1200;
		protect = 5;//降低保护罩出现率
		reInterval();
	}
	if(score>20&&score<30){
		speedIn=250;
		speedDown=1000;
		protect = 2;//降低保护罩出现率
		reInterval();
	}
	if(score>30){
		speedIn=200;
		speedDown=800;
		protect = -1;//彻底不出现保护罩
		reInterval();
	}
	var enemy_img = "";
	var roleName = "";
	if(rand<10){
		enemy_img = 0;
		roleName = "enemy";
	}else if(rand<40){
		enemy_img = 0;
		roleName = "enemy";
	}else if(rand<60){
		enemy_img = 1;
		roleName = "protect";
	}else if(rand<80){
		enemy_img = 2;
		roleName = "protect_1";
	}else{
		enemy_img = 0;
		roleName = "enemy";
	}
	var randleft = Math.floor(Math.random()*3);
	var html = '<div class="obj '+roleName+'" data-role="'+roleName+'" style="left:'+strLeft[randleft]+'"><img src="/templates/2018omkds/img/en_'+enemy_img+'.png"/</div>';
	$(".p2-center").append(html);
	$(".obj:last").transition({y:(hei*0.85)+'px'},speedDown,"linear",function(){
		var c=impact($(this),$("#car"));

		if(c){
// alert('碰撞了')
			var check=$(this).attr("data-role");
			// console.log(check)
			if(check == "protect"){//遇到加油站
				// console.log('遇到加油站')
				score = score + 5 ;
				// console.log(score)
				$('.p1s').text(score);
				playAudio($('.audio_2')[0]);
			}else if(check == 'protect_1'){
				// console.log('遇到加速器')
				score = score + 1 ;
				// console.log(score)
				$('.p1s').text(score);
				playAudio($('.audio_2')[0]);
			}else{
				// console.log('遇到路障')
				score = score - 3;
				$('.p1s').text(score);
				playAudio($('.audio_1')[0]);
			}
		}
		$(this).remove();
	});
}

//对比两个元素是否相碰
function impact(obj, dobj) {  
	var o = {  
		x: getDefaultStyle(obj, 'left'),  
		y: getDefaultStyle(obj, 'y'),  
		w: getDefaultStyle(obj, 'width'),  
		h: getDefaultStyle(obj, 'height')  
	}
	var d = {  
		x: getDefaultStyle(dobj, 'left'),  
		y: getDefaultStyle(dobj, 'top'),  
		w: getDefaultStyle(dobj, 'width'),  
		h: getDefaultStyle(dobj, 'height')  
	} 
	// console.log(d.x)
	var px, py;
	px = o.x <= d.x ? d.x : o.x;  
	py = o.y <= d.y ? d.y : o.y;  
	//console.log(o.h+" "+d.h);
	// 判断点是否都在两个对象中  
	if (px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) {  
		
		return true;  
	} else { 
		//console.log(d.h);
		//console.log(py+" "+d.y+" "+(d.y + d.h));
		return false;  
	}  
} 
function getDefaultStyle(obj, attribute) { 
	//console.log(obj.css(attribute));
	return parseInt(obj.css(attribute));  
} 