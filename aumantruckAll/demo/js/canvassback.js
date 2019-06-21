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
$('.first').hide();
// $('.nono').show();
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


//确认选择模板
$('.sure').click(function(){
console.log(mySwiper2s);
if(mySwiper2s.snapIndex == 0){
	imgSrc = './img/4s.png';
}
else if(mySwiper2s.snapIndex == 1){
	imgSrc = './img/2s.png';
}
else if(mySwiper2s.snapIndex == 2){
	imgSrc = './img/3s.png';
}
else if(mySwiper2s.snapIndex == 3){
	imgSrc = './img/6s.png';
}
else if(mySwiper2s.snapIndex == 4){
	imgSrc = './img/8s.png';
}
$('.choice').hide();
$('.fales').attr('src',imgSrc);
$('.fales').show();
$('.Synthesis').show();
$('.Synthesis').css('z-index','999999999999999999');
console.log(imgSrc);
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
