//rem布局  根据视口改变根元素fontsize
var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
var aa = 1;
var tru = true;
var rid;
var prize;
var cc;
var nums = $('#hidden').val();
var arr = [
'五谷丰登闹新春，家家户户福相伴，和气美满团圆年，红红春联写美满，文字里面情飞扬，款款祝福送予君，春节愉快合家欢，幸福美满万年长，春节快乐！',
'大年三十福来登，合家欢乐喜庆呈，安康相守不变更，财运福运把你争，为你吹来吉祥风，忧愁烦恼统统扔，开心快乐你全能，春节快乐，心想事成！',
'祥风阵阵，福来运转，猪年新春，普天同庆，恭喜发财，吉祥如意，尽享欢乐，健康幸福，团团圆圆，开心快乐，新春好运，万事顺利！',
'朝霞映满天，盛世耀猪年。歌美舞翩翩，快乐太平年。瑞雪一片片，幸福绕猪年。春风暖心田，欢度团圆年。猪年到了，愿你快乐绵绵！',
'春节到处乐洋洋，祝福语先到身旁，心意情意都献上，愿您接纳永收藏，愿您事业财源广，愿您暖和体安康，愿您烦恼忧愁散，愿您春节安康！',
'炮竹声声辞旧岁，欢度佳节福连天，宾朋满座笑开颜，举杯共饮幸福春，条条问候传祝福，新春快乐合家欢，吉庆有余过大年，祝猪年春节愉快!',
'吉祥如意凌空下，幸福安康在家园。快乐春风扑面来，烦恼忧愁滚一边。新年新景新气象，欢歌笑语报平安。祝你猪年身体健康，万事如意，笑口常开!',
'歌声笑声连成片，大人孩子乐翻天，祝福心愿比酒甜，和和美美团圆年，吉庆有余举杯赞，家和万事皆如愿，福寿康宁岁月好，辞旧迎新生活甜。春节愉快。'

]

// 音频播放   接听电话
function Play(e) {
	if(tru == true){
		audioAutoPlay('music1');
		$('.meet').show();
		$('.Answerbj').hide();
		$('#music5').remove();
	}
	tru = false;
}

function meet(){
	$('.meet').hide();
	$('.Answer').hide();
	$('.Answerbj').hide();
	$('#music1').remove();
	var hiddens = $('#hidden').val();//判断是否抽过红包   不管几个
	console.log(hiddens);
	if(hiddens == 0){
		judge();//没有抽奖   加入动画
	}
	else if(hiddens != 0 && hiddens<3){
		$('.chat').show();//抽过奖 无所谓几个。直接显示对话框
		$('.one').show();	
		$('.two').show();	
		$('.three').show();	
		$('.four').show();	
	}
	else if(hiddens != 0 && hiddens>=3){
		$('.chat').hide();
		$('.fxs').show();
		$('.fan').show();
	}
	// else if(hiddens == 2){
	// 	judge3();//抽了两个
	// }
	// else if(hiddens >= 3){
	// 	judge4();//抽了三个	
	// }	
}


//监听  四个录音播放是否完毕
var num = 1;
var audio1 = document.getElementsByClassName('audio')[0];
audio1.addEventListener("ended",function(){
	console.log('监听audio1结束');
	var hiddens = $('#hidden').val();
	if(hiddens == 0){
		judge();//没有抽奖
	}
	else if(hiddens != 0 && hiddens<3){
		$('.chat').show();//抽过奖 无所谓几个。直接显示对话框
		$('.one').show();	
		$('.two').show();	
		$('.three').show();	
		$('.four').show();	
	}
	else if(hiddens != 0 && hiddens>=3){
		$('.chat').hide();
		$('.fxs').show();
		$('.fan').show();
	}
	// else if(hiddens == 2){
	// 	judge3();//抽了两个
	// }
	// else if(hiddens >= 3){
	// 	judge4();//抽了三个	
	// }
});

// 第一次进来
function judge(){
	$('.Answerbj').hide();
	$('.chat').show();
	set = setInterval(function(){
		if(num == 1){
			$('.one').show();
			num = 4;
		}
		else if(num == 4){
			$('.two').show();
			num = 5;
		}
		else if(num == 5){
			$('.three').show();
			num = 6;
		}
		else if(num == 6){
			$('.four').show();
			clearInterval(set);
			console.log('结束');
			num = 6;
		}
	},1000*num);
}

// // 第二次进来
// function judge2(){
// 	$('.Answerbj').hide();
// 	$('.chat').show();
// 	$('.one').show();
// 	$('.two').show();
// 	$('.three').show();
// 	$('.four').show();
// 	$('.two').css('background-image','url(/templates/ol/olNewyear/img/4.png)');
// 	$('.two').removeAttr('onclick');
// }

// // 第三次进来
// function judge3(){
// 	$('.Answerbj').hide();
// 	$('.chat').show();
// 	$('.one').show();
// 	$('.two').show();
// 	$('.three').show();
// 	$('.four').show();
// 	$('.two').css('background-image','url(/templates/ol/olNewyear/img/4.png)');
// 	$('.three').css('background-image','url(/templates/ol/olNewyear/img/5.png)');
// 	$('.two').removeAttr('onclick');
// 	$('.three').removeAttr('onclick');
// }

// // 第四次进来
// function judge4(){
// 	$('.Answerbj').hide();
// 	// $('.chat').show();
// 	// $('.one').show();
// 	// $('.two').show();
// 	// $('.three').show();
// 	// $('.four').show();
// 	// $('.two').css('background-image','url(/templates/ol/olNewyear/img/4.png)');
// 	// $('.three').css('background-image','url(/templates/ol/olNewyear/img/5.png)');
// 	// $('.four').css('background-image','url(/templates/ol/olNewyear/img/6.png)');
// 	$('.two').removeAttr('onclick');
// 	$('.three').removeAttr('onclick');
// 	$('.four').removeAttr('onclick');
// 	$('.fxs').show();
// 	$('.fan').show();
// }


//点击打开红包
function rob0(dj){
	cc = dj;
	if(dj == 1){
		$('#hidden1').val('1');
	}
	else if(dj == 2){
		$('#hidden2').val('2');
	}
	else if(dj == 3){
		$('#hidden3').val('3');
	}
	$('.chat').hide();
	$('.clik').show();
}

//点击打开红包
function rob1(dj){
	alert('已经领取过了哦！');
	return false;
}


// 抢红包
function clik(type){

if(aa == 1){
var token = $("#token").val();
var openid = $("#openid").val();
$.ajax({
    type: 'POST',
    dataType:'json',
    url : 'http://al.douyar.cc/ol/ol_phone.php?step=prize',
    data: {
    	openid:openid,type:cc
	},
	beforeSend: function(request) { 
		request.setRequestHeader("Authorization", token); 
	}, 
    success: function(data){
		$('.clik').hide();

    	if(data.res == 1){
    		$('.lz1>span').text('100');
    		$('.price').show();
    		rid = data.res;
    	}
    	else if(data.res == 2){
    		$('.lz1>span').text('50');
    		$('.price').show();
    		rid = data.res;
    	}
    	else if(data.res == 3){
    		$('.lz1>span').text('10');
    		$('.price').show();
    		rid = data.res;
    	}
    	else if(data.res == 4){
    		$('.lz1>span').text('5');
    		$('.price').show();
    		rid = data.res;
    	}
    	else if(data.res == 5){
    		$('.lz1>span').text('1');
    		$('.price').show();
    		rid = data.res;
    	}
    	else if(data.rid == 6){
    		$('.prize_ma').show();
    		$('.lz2>span').text(data.name);
    		prize = data.name;
    		rid = data.rid;
    		// alert('请您保留好此页截图！');
    	}
    	else if(data.res == 9){
	    	//未中奖
	        var random = Math.floor(Math.random()*8);
	        var str = arr[random];
	        $('.noprice>span').text(str);
	        $('.noprice').show();
    	}
    }
	});
}
aa=2;
jump(3);
}

//留资  提交
function tj(){
if(aa == 1){
var token = $("#token").val();
var openid = $("#openid").val();
var name = $("#name").val();
var phone = $("#phone").val();
if (name==""){
	alert('请输入您的姓名');
    return false;
}
if (phone=="") {
	alert('请输入您的电话');
    return false;
}

var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

if (!reg.test(phone)) {
    alert("请输入正确的手机号");
    return false;
}
$.ajax({
    type: 'POST',
    dataType:'json',
    url : 'http://al.douyar.cc/ol/ol_phone.php?step=info',
    data: {
    	openid:openid,
    	name:name,
    	phone:phone,
    	rid:rid,
    	prov:'',
    	city:'',
    	prize:'',
    	type:cc
	},
	beforeSend: function(request) { 
		request.setRequestHeader("Authorization", token); 
	}, 
    success: function(data){
    	if(data.res == 1){
    		alert('您好，您的话费红包将在7天内充值到账~');
    		$('.prize').hide();
    		$('.price>span').text('');
    		$('.chat').show();
    		chang();
    	}else{
    		alert('提交失败!');
    	}
    }
	});
}
aa=2;
jump(3);
}

function tj1(){
	if(aa == 1){
	var token = $("#token").val();
	var openid = $("#openid").val();
	var inp1 = $(".lz2>.inp1").val();
	var inp2 = $(".lz2>.inp2").val();
	var inp3 = $(".lz2>.inp3").find("option:selected").text();
	var inp4 = $(".lz2>.inp4").find("option:selected").text();
	if (inp1=="") {alert("请输入您的姓名");return false;}
	if (inp2=="") {alert("请输入您的电话");return false;}
	var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(inp2)) {
        alert("请输入正确的手机号");
        return false;
    }
	if (inp3=="" || inp3 == '请选择省份') {alert("请选择省份");return false;}
	if (inp4=="" || inp4 == '请选择城市') {alert("请选择城市");return false;}
	$('.containerss').removeAttr('onclick');
	$.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://al.douyar.cc/ol/ol_phone.php?step=info',
        data: {
        	name:inp1,
        	phone:inp2,
        	prov:inp3,
        	city:inp4,
        	prize:prize,
        	openid:openid,
        	rid:rid,
        	type:cc
		},
		beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
        success: function(data){
	    	if(data.res == 1){
				alert('提交成功!');
				$('.prize_ma').hide();
				$('.price>span').text('');
				chang();
				$('.chat').show();
	    	}else{
	    		alert('提交失败!');
	    	}
        }
		});
		}
    aa=2;
    jump(3);
}
//改变红包状态
function chang(){
	nums++;
	if(nums != 0 && nums>=3){
		$('.chat').hide();
		$('.price').hide();
		$('.prize_ma').hide();
		$('.noprice').hide();
		$('.fxs').show();
		$('.fan').show();
		return false;
	}
	$('.price').hide();
	$('.price>span').text('');
	$('.prize_ma').hide();
	$('.prize_ma>.lz2>span').text('');
	$('.noprice').hide();
	$('.clik').hide();
	$('.chat').show();
	var hid1 = $('#hidden1').val();
	var hid2 = $('#hidden2').val();
	var hid3 = $('#hidden3').val();
	if(hid1 == 1){
		$('.two').attr('src','/templates/ol/olNewyear/img/1a.png');//领取状态
		$('.two').attr('onclick','rob1()');
	}
	// else{
	// 	$('.two').attr('src','/templates/ol/olNewyear/img/0a.png');//没有领取
	// 	$('.two').attr('onclick','rob0()');
	// }

	if(hid2 == 2){
		$('.three').attr('src','/templates/ol/olNewyear/img/1b.png');//领取状态
		$('.three').attr('onclick','rob1()');
	}
	// else{
	// 	$('.three').attr('src','/templates/ol/olNewyear/img/0b.png');//没有领取
	// 	$('.three').attr('onclick','rob0()');
	// }

	if(hid3 == 3){
		$('.four').attr('src','/templates/ol/olNewyear/img/1c.png');//领取状态
		$('.four').attr('onclick','rob1()');
	}
	// else{
	// 	$('.four').attr('src','/templates/ol/olNewyear/img/0c.png');//没有领取
	// 	$('.four').attr('onclick','rob0()');
	// }
}

//未中奖 返回
function accepts(){
	nums++;
	if(nums != 0 && nums>=3){
		$('.chat').hide();
		$('.price').hide();
		$('.prize_ma').hide();
		$('.noprice').hide();
		$('.fxs').show();
		$('.fan').show();
		return false;
	}
	$('.price').hide();
	$('.price>span').text('');
	$('.prize_ma').hide();
	$('.prize_ma>.lz2>span').text('');
	$('.noprice').hide();
	$('.clik').hide();
	$('.chat').show();
	var hid1 = $('#hidden1').val();
	var hid2 = $('#hidden2').val();
	var hid3 = $('#hidden3').val();
	if(hid1 == 1){
		$('.two').attr('src','/templates/ol/olNewyear/img/1a.png');//领取状态
		$('.two').attr('onclick','rob1()');
	}
	// else{
	// 	$('.two').attr('src','/templates/ol/olNewyear/img/0a.png');//没有领取
	// 	$('.two').attr('onclick','rob0()');
	// }

	if(hid2 == 2){
		$('.three').attr('src','/templates/ol/olNewyear/img/1b.png');//领取状态
		$('.three').attr('onclick','rob1()');
	}
	// else{
	// 	$('.three').attr('src','/templates/ol/olNewyear/img/0b.png');//没有领取
	// 	$('.three').attr('onclick','rob0()');
	// }

	if(hid3 == 3){
		$('.four').attr('src','/templates/ol/olNewyear/img/1c.png');//领取状态
		$('.four').attr('onclick','rob1()');
	}
	// else{
	// 	$('.four').attr('src','/templates/ol/olNewyear/img/0c.png');//没有领取
	// 	$('.four').attr('onclick','rob0()');
	// }
}

// //中奖 返回
// function accept2(){
// 	var hiddens = $('#hidden').val();
// 	if(hiddens == 0){
// 		judge();//没有抽奖
// 		$('.clik').hide();
// 		$('.prize_ma').hide();
// 		$('.chat').show();
// 	}
// 	else if(hiddens == 1){
// 		judge2();//抽了一个
// 		$('.clik').hide();
// 		$('.prize_ma').hide();
// 		$('.chat').show();
// 	}
// 	else if(hiddens == 2){
// 		judge3();//抽了两个
// 		$('.clik').hide();
// 		$('.prize_ma').hide();
// 		$('.chat').show();
// 	}
// 	else if(hiddens >= 3){
// 		judge4();//抽了三个	
// 		$('.clik').hide();
// 		$('.prize_ma').hide();
// 		// $('.chat').show();
// 	}
// }


$('.gz').click(function(){
	$('.containerss').show();
	$('.gzs').show();
})
$('.gzs').click(function(){
	$('.containerss').hide();
	$('.gzs').hide();
})

$('.f').click(function(){
	$('.fff').show();
})
$('.fff').click(function(){
	$('.fff').hide();
})
$('.fan').click(function(){
	$('.two').attr('src','/templates/ol/olNewyear/img/1a.png');
	$('.three').attr('src','/templates/ol/olNewyear/img/1b.png');
	$('.four').attr('src','/templates/ol/olNewyear/img/1c.png');
	$('.fxs').hide();
	$('.fan').hide();
	$('.chat').show();
	$('.one').show();
	$('.two').show();
	$('.three').show();
	$('.four').show();
	$('.noprice').hide();
	$('.two').attr('onclick','rob1()');
	$('.three').attr('onclick','rob1()');
	$('.four').attr('onclick','rob1()');
})


//城市
function change1(){
	var inp_1 = $("#selects1  option:selected").val();
	if (inp_1=="请选择省份") {alert("请选择请选择省份");return false;}
	console.log(inp_1);
	$.ajax({
		url : 'http://al.douyar.cc/ol/ol_carnival.php?step=city',
        type: 'POST',
        dataType: "json",
        data: {
        	inp_1:inp_1,
		},
        success: function(data){
        	console.log(data);
			var quname_html = "<option value='请选择城市'>请选择城市</option>";

            for(var i = 0; i < data.res.length; i++){
                quname_html += "<option value='"+ data.res[i].id+"'>"+ data.res[i].name +"</option>";
            }


        	$(".inp4").html(quname_html);
        }

   	});
}

//禁止点击多次
function jump(count) { 
    window.setTimeout(function(){ 
        count--; 
        if(count > 0) { 
            jump(count); 
        } else { 
           aa=1; 
        } 
    }, 2000); 
} 

//微信中打开h5   音频处理
function playAudio(audio) {
		if (window.WeixinJSBridge) {
			WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
			    audio.play();
			}, false);
		} else {
			document.addEventListener("WeixinJSBridgeReady", function () {
			    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
			        audio.play();
			    });
			}, false);
		}
		audio.play();
		return false;
}
// 手机浏览器打开h5  音频处理
function audioAutoPlay(id){
	var audio = document.getElementById(id),
	play =function(){
	audio.play();
	document.removeEventListener("touchstart",play,false);
	};

	audio.play();
	// document.addEventListener("WeixinJSBridgeReady",function() {
	// play();console.log(audio);
	// },false);
	document.addEventListener('YixinJSBridgeReady',function() {
	play();
	},false);
	// document.addEventListener("touchstart",play,false);
	if (window.WeixinJSBridge) {
		WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
	    	audio.play();
		}, false);
	} else {
		document.addEventListener("WeixinJSBridgeReady", function () {
		    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
		        audio.play();
		    });
		}, false);
	}
}