//rem布局  根据视口改变根元素fontsize
var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
//全局变量
var base;
var c2 = document.getElementById("c2");
c2.width =750;
c2.height = 1334;
var ctx2 = c2.getContext("2d");
var bmp1S = c2.width/750;
var bmpS;
var imgSrc;
var mySwiper1s;
var mySwiper2s;
var man = false;
var woman = false;
var base;
var con = false; //判断用户第几次观看视频
var second = false;//如果用户第二次上传   return false
var upimgurls;
//首屏点击事件
var h = document.getElementsByClassName('first')[0];
h.onclick=function(){
	if(no){
		$('.first').hide();
		$('.loading').remove();
		$('.video_con').show();
		$('.video_1').show();
		$("#but").css("-webkit-animation","rotating 1.5s 0s linear infinite");
	    a= setTimeout(function(){
	        $('.video_1').trigger('play');
	    },500);
	}else{
		alert('不要心急哦~');
	}
};
//跳过视频
function skips(){
	$('.video_con').hide();
	var myVid = document.getElementById("video_1");
	myVid.pause();
	if(con == false){
		audioAutoPlay('music5');
		b=setTimeout(function(){
			$('.Answerbj').fadeIn();
		},200);
		con = true;
	}
}
//禁止触摸视频
var video1 = document.getElementById('video_1');
video1.addEventListener("touchmove",function(event){
	$('#but').show();
	// event.preventDefault();
});
//监听视频播放结束
video1.addEventListener("ended",function(){
	// $("video")[0].setAttribute("style","display:none");
	$('.video_con').hide();
	// playAudio($('.come')[0]);
	if(con == false){
		audioAutoPlay('music5');
		b=setTimeout(function(){
			$('.Answerbj').fadeIn();
		},500);
		con = true;
	}
});
// 音频播放   接听电话
function Play(e) {
	var comeaudio = document.getElementsByClassName('come')[0];
    if(comeaudio.paused){
		comeaudio.pause();
		console.log('暂停');
    }else{
    	comeaudio.pause();
    	console.log('暂停');
    }
	$('.Answerbj').hide();
	$('.people').show();
    var audio = document.getElementsByClassName('audio')[e];
    console.log(audio);
    if(audio.paused){
		audio.play();
		console.log('播放'+e)
    }
	// else{
	// audio.pause();
	//     console.log('暂停')
	// }

}
// 音频暂停  挂断电话
function hang(e) {
    var audio = document.getElementsByClassName('audio')[e];
    console.log(audio);
    if(audio.paused){
		audio.pause();
		console.log('暂停');
		$('.people').hide();
		$('.uploads').show();
    }
    else{
	   audio.pause();
        console.log('暂停');
		$('.people').hide();
		$('.uploads').show();
    }
}
//  选择   播放演员录音
function chang(){
	var word = $(".whoaudio").find("option:selected").text();
	console.log(word);
	if(word == '何卓恩-饰演《超级队长》季小楠'){
		$('.people>img').attr('src','/mobile/templates/bigMovies/img/people2.jpg');
		$('.uploads').hide();
		$('.people').show();
		$('.people>.hang').attr("onclick","hang(1);");
		// playAudio($('.audio')[1]);
		audioAutoPlay('music2');
		$('.people>span').text('何卓恩');
	}else if(word == '林小慧-饰演《超级队长》刘玉'){
		$('.people>img').attr('src','/mobile/templates/bigMovies/img/people3.jpg');
		$('.uploads').hide();
		$('.people').show();
		$('.people>.hang').attr("onclick","hang(2);");
		// playAudio($('.audio')[2]);
		audioAutoPlay('music3');
		$('.people>span').text('小慧');
	}else if(word == '张鼎-饰演《超级队长》小武'){
		$('.people>img').attr('src','/mobile/templates/bigMovies/img/people4.jpg');
		$('.uploads').hide();
		$('.people').show();
		$('.people>.hang').attr("onclick","hang(3);");
		// playAudio($('.audio')[3]);
		audioAutoPlay('music4');
		$('.people>span').text('张鼎');
	}
}
//监听  四个录音播放是否完毕
var audio1 = document.getElementsByClassName('audio')[0];
audio1.addEventListener("ended",function(){
	console.log('监听audio1结束');
	$('.people').hide();
	$('.uploads').fadeIn();
});

var audio2 = document.getElementsByClassName('audio')[1];
audio2.addEventListener("ended",function(){
	console.log('监听audio2结束');
	$('.people').hide();
	$('.uploads').fadeIn();
});

var audio3 = document.getElementsByClassName('audio')[2];
audio3.addEventListener("ended",function(){
	console.log('监听audio3结束');
	$('.people').hide();
	$('.uploads').fadeIn();
});

var audio4 = document.getElementsByClassName('audio')[3];
audio4.addEventListener("ended",function(){
	console.log('监听audio4结束');
	$('.people').hide();
	$('.uploads').fadeIn();
});
//确认选择模板
$('.sure').click(function(){
	if(man == true){
		// console.log($('.swiper-slide-active').attr('data-slide'));
		var m = $('.swiper-slide-active').attr('data-slide');
		console.log(mySwiper2s.snapIndex);
		if(mySwiper2s.snapIndex == 0){
			imgSrc = '/mobile/templates/bigMovies/img/4s.png';
		}
		else if(mySwiper2s.snapIndex == 1){
			imgSrc = '/mobile/templates/bigMovies/img/2s.png';
		}
		else if(mySwiper2s.snapIndex == 2){
			imgSrc = '/mobile/templates/bigMovies/img/3s.png';
		}
		else if(mySwiper2s.snapIndex == 3){
			imgSrc = '/mobile/templates/bigMovies/img/6s.png';
		}
		$('.choice').hide();
		$('.fales').attr('src',imgSrc);
		$('.fales').show();
		$('.Synthesis').show();
		$('.Synthesis').css('z-index','999999999999999999');
		console.log(imgSrc);
	} 
	else if(woman == true){
		console.log(mySwiper1s);
		if(mySwiper1s.snapIndex == 0){
			imgSrc = '/mobile/templates/bigMovies/img/1s.png';
		}
		else if(mySwiper1s.snapIndex == 1){
			imgSrc = '/mobile/templates/bigMovies/img/5s.png';
		}
		else if(mySwiper1s.snapIndex == 2){
			imgSrc = '/mobile/templates/bigMovies/img/6s.png';
		}
		$('.choice').hide();
		$('.fales').attr('src',imgSrc);
		$('.fales').show();
		$('.Synthesis').show();
		$('.Synthesis').css('z-index','999999999999999999');
		console.log(imgSrc);
	}
})
//  获取  图片url
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }   
    return url ;
}
//进入  选择男女主角页
function draw(){
	$('.man_wo').show();
	$('.uploads').hide();	
}
//男女模板 选择页
function mans(){
	// $('.Synthesis').show();
	// $('.fales').show();
	// $('.fales').attr('src','/mobile/templates/bigMovies/img/4s.png');
	// imgSrc = '/mobile/templates/bigMovies/img/4s.png';
	// myswiper2();
	$('.choice').show();
	$('.swiper-container2').show();
	$('.swiper-container1').hide();
	woman = true;
	man = false;
}
function womans(){
	// $('.Synthesis').show();
	// $('.fales').show();
	// $('.fales').attr('src','/mobile/templates/bigMovies/img/1s.png');
	// imgSrc = '/mobile/templates/bigMovies/img/1s.png';
	// myswiper1();
	$('.choice').show();
	$('.swiper-container1').show();
	$('.swiper-container2').hide();
	man = true;
	woman = false;
}
//上传图片  引入AlloyFinger+cax
$("#upload").change(function(){
	upimgurls = getObjectURL(this.files[0]);
	second = true;
	var finput = this.files[0];
	lrz(finput,{
		width:500,
		height:500,
		quality:0.5
	}).then(function (rst) {
		$('.fales').hide();
		//如果用户返回操作。先隐藏canvas  然后上传文件之后再让其显示。
		$('#c2').show();
		base = rst.base64;
        rst.formData.append('base64img',rst.base64);
        $('.sel>img').show();

	    upimg = new Image();
	    upimg.src = base;
	    upimg.onload = function(){
	        ctx2.clearRect(0,0,c2.width,c2.height);
	        if(upimg.width>c2.width){
	            bmpS = c2.width/upimg.width;
	        }else{
	            bmpS = upimg.width/upimg.width;
	        }
			MoveStage(upimgurls);
	    };

    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
    });
});

function MoveStage(upimgurls){/////移动元素
    var Stage = AlloyPaper.Stage, Bitmap = AlloyPaper.Bitmap,Loader = AlloyPaper.Loader;
    var stage = new Stage("#c2");
    stage.autoUpdate=false;
    var ld = new Loader();
    ld.loadRes2([
        { id: "test1", src: upimgurls },
        { id: "test2", src: imgSrc },
        // { id: "test2", src: './img/b'+C+".png" },
    ]);
    ld.complete(function () {
        var bmp = new Bitmap(ld.get("test1"));
        bmp.originX = 0.5;
        bmp.originY = 0.5;
        bmp.x = stage.width / 2;
        bmp.y = stage.height / 2;
        stage.add(bmp);

        var bmp1 = new Bitmap(ld.get("test2"));
        bmp.originX = 0.5;
        bmp.originY = 0.5;
        bmp1.x = 0;
        bmp1.y = 0;
        bmp1.scale = bmp1S;
        stage.add(bmp1);

        stage.update();
        updateStage1();
        var initScale = 1;
        new AlloyFinger(bmp1, {
            multipointStart: function () {
                initScale = bmp.scaleX; 
				stage.update();
            },
            rotate: function (evt) {
                bmp.rotation += evt.angle;
                stage.update();
                updateStage1();
            },
            pinch: function (evt) {
                bmp.scaleX = bmp.scaleY = initScale * evt.scale;
                stage.update();
                updateStage1();
            },
            pressMove: function (evt) {
                bmp.x += evt.deltaX;
                bmp.y += evt.deltaY;
                bmp1.x = 0;
                bmp1.y = 0;
                evt.preventDefault();
                stage.update();
                updateStage1();
            }

        });
    });
    //将上传的图片画入canvas圆中
    function updateStage1(){
        // ctx2.clearRect(0,0,c2.width,c2.height);
        ctx2.beginPath();
        ctx2.arc(c2.width/2 , c2.height/2 , c2.width , 0 , 2*Math.PI);
        ctx2.save();
        ctx2.clip();
        stage.update();
        ctx2.restore();
    }
}
//图片合成
function Synthesis(){
	// console.log(upimgurls);
	if (base==undefined) {alert("请上传照片!");return false;}
	if (upimgurls==undefined) {alert("请上传照片!");return false;}
	if (second== false) {alert("请上传照片!");return false;}
	var c2 = document.getElementById("c2");
	var base64=c2.toDataURL("image/jpg",1);
	$('.Synthesis').hide();
	$('.xz').show();
	$('#screenShotImg').attr('src',base64);
	$('#screenShotImg').css('display','block');
	second = false;//恢复  默认   再次上传 判断
}
//最后一页  点击重拍
$('.xz>span').click(function(){
	$('.xz').hide();
	$('.uploads').show();
})
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
	audio.load();
	audio.play();
	document.removeEventListener("touchstart",play,false);
	};

	audio.load();
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
	    	audio.load();
	    	audio.play();
		}, false);
	} else {
		document.addEventListener("WeixinJSBridgeReady", function () {
		    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
		        audio.load();
		        audio.play();
		    });
		}, false);
	}
}
//判断手机是否为ios   input上传文件
var file = document.getElementById('upload');

if (getIos()) {
    file.removeAttribute("capture");
}
function getIos() {
    var ua=navigator.userAgent.toLowerCase();
    if (ua.match(/iPhone\sOS/i) == "iphone os") {
        return true;
    } else {
        return false;
    }
}
//其他 全局方法..................................................................
//视频静音
function mute(){
	var myVid = document.getElementById("video_1");
	if (myVid.muted != true) {
		console.log('静音');
		myVid.muted = true;
		$("#but").css("-webkit-animation","");
	} else {
		myVid.muted = false;
		console.log('打开');
		$("#but").css("-webkit-animation","rotating 1.5s 0s linear infinite");
	}
	// alert(myVid.defaultMuted);
	// myVid.defaultMuted = true;
	//    myVid.load();
	//    myVid.play();
}
//重新播放
function again(){
	$('.video_con').show();
	$('#but').show();
	var myVid = document.getElementById("video_1");
	myVid.style.display = 'block';
	myVid.defaultMuted = true;
	myVid.load();
	myVid.play();
}
//第一个   模板选择
// function myswiper1(){
 	mySwiper1s = new Swiper('.swiper-container1',{
		effect : 'coverflow',
	    observer:true,
	    observeParents:true,
		slidesPerView: 1.5,
		centeredSlides: true,
		// loop:true,
		coverflowEffect: {
			rotate: 100,
			stretch: 0,
			depth: 0,
			modifier: 2,
			slideShadows : true
		},
		on: {
            slideChange: function () {
                // 获取当前活动下标
                var index = this.realIndex;
                console.log(index);
            }
        }
	})
// }
//第二个    模板选择
// function myswiper2(){
	mySwiper2s = new Swiper('.swiper-container2',{
		effect : 'coverflow',
	    observer:true,
	    observeParents:true,
		slidesPerView: 1.5,
		centeredSlides: true,
		// loop:true,
		coverflowEffect: {
			rotate: 100,
			stretch: 0,
			depth: 0,
			modifier: 2,
			slideShadows : true
		},
	})
// }
//第一次返回
$('.man_wo>.return').click(function(){
	$('.man_wo').hide();
	$('.uploads').show();
})
//第二次返回
$('.choice>.return').click(function(){
	$('.choice').hide();
	$('.man_wo').show();
})
//第三次返回
$('.Synthesis>.return').click(function(){
	$('.Synthesis').hide();
	$('.man_wo').show();
	//如果用户返回操作。先隐藏canvas  然后上传文件之后再让其显示。
	$('#c2').hide();
})
//第四次返回
$('.xz>.return').click(function(){
	$('.xz').hide();
	$('.Synthesis').show();
})
//图片合成   此方案已作废
// var second = 0;
// var imgSrc;
// function draw(){
// 	if (base==undefined) {alert("请上传照片!");return false;}
// 	var who = $(".sel2").find("option:selected").text();
// 	if (who=='选择与谁合影') {alert("请选择!");return false;}
// 	console.log(base,who);
// 	if(who == '张赫宣'){imgSrc = '/mobile/templates/bigMovies/img/张赫宣.png'}
// 	else if(who == '何卓恩'){imgSrc = '/mobile/templates/bigMovies/img/何卓恩.png'}
// 	else if(who == '林小慧'){imgSrc = '/mobile/templates/bigMovies/img/林小慧.png'}
// 	else if(who == '葛天'){imgSrc = '/mobile/templates/bigMovies/img/葛天.png'}
// 	else if(who == '张鼎'){imgSrc = '/mobile/templates/bigMovies/img/张鼎.png'}
// 	else if(who == '单人照'){imgSrc = '/mobile/templates/bigMovies/img/单人照.png'}
// 	$('.uploads').hide();
// 	var c=document.createElement('canvas');
// 		ct=c.getContext('2d');
// 		c.width=750;
// 		c.height=1334;
// 	function drawing(n){
// 		if(n<2){
// 			var img=new Image;
// 			// img.setAttribute('crossOrigin', 'anonymous');
// 			if(second == 0){img.src = base;}//随机图片
// 			else if(second == 1){img.src = imgSrc}
// 			img.onload=function(){
// 				if(second == 0){
// 					console.log(img.src);
// 					ct.rect(0,0,c.width,c.height);
// 					ct.fillStyle='#fff';
// 					ct.fill(); 
// 					ct.drawImage(img,0,200,750,1000);//背景图
// 					second++;
// 				}else if(second == 1){
// 					console.log(img.src);
// 					ct.drawImage(img,0,0,750,1334);//自拍图
// 					second++;
// 				}
// 				drawing(n+1);//递归
// 			}
// 		}else{
// 			n = 0;
// 			$('.xz').show();
// 			var src = c.toDataURL("image/png",10);
// 			$('#screenShotImg').attr('src',src);
// 			$('#screenShotImg').css('display','block');
// 			second = 0;
// 		}
// 	}

// 	drawing(0);
// }