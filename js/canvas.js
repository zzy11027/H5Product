//全局变量
var base;
var c2 = document.getElementById("c2");
c2.width =750;
c2.height = 1334;
var ctx2 = c2.getContext("2d");
var bmp1S = c2.width/750;
var bmpS;
var base;
var upimgurls;
var isPrize;

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
		//如果用户返回操作。先隐藏canvas  然后上传文件之后再让其显示。
		$('#c2').show();
        // $('.generate').show();
        $('.ewms').hide();
        // $('.upload').css('background-image','url(./img/last.png)')
		base = rst.base64;
        rst.formData.append('base64img',rst.base64);
        $('.fales').hide();
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
        bmp1.x = 100;
        bmp1.y = 100;
        bmp1.scale = 0.5;
        // bmp1.scale = bmp1S;
        stage.add(bmp1);

        stage.update();
        updateStage1();
        var initScale = 1;
        new AlloyFinger(bmp1, {
            multipointStart: function () {
                initScale = bmp1.scaleX; 
				stage.update();
            },
            rotate: function (evt) {
                bmp1.rotation += evt.angle;
                stage.update();
                updateStage1();
            },
            pinch: function (evt) {
                bmp1.scaleX = bmp1.scaleY = initScale * evt.scale;
                stage.update();
                updateStage1();
            },
            pressMove: function (evt) {
                bmp1.x += evt.deltaX;
                bmp1.y += evt.deltaY;
                // bmp1.x = 0;
                // bmp1.y = 0;
                evt.preventDefault();
                stage.update();
                updateStage1();
            }

        });
    //     
        new AlloyFinger(bmp, {
            multipointStart: function () {
                initScale = bmp.scaleX; 
                stage.update();
            },
            pointStart: function (evt) {
                //手指触摸屏幕触发
                console.log(evt);
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
                console.log(evt);
                bmp.x += evt.deltaX;
                bmp.y += evt.deltaY;
                // bmp1.x = 0;
                // bmp1.y = 0;
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
        // ctx2.arc(c2.width/2 , c2.height/2 , c2.width , 0 , 2*Math.PI);
        ctx2.save();
        ctx2.clip();
        stage.update();
        ctx2.restore();
    }
}
//图片合成
function Synthesis(){
	if (base==undefined) {
        $('.alert').show();
        $('.container').show();
        $('.alert>.dd').text('请您先上传合适的照片!');
        return false;
    }
	if (upimgurls==undefined) {        
        $('.alert').show();
        $('.container').show();
        $('.alert>.dd').text('请您先上传合适的照片!');
        return false;
    }
	if (second== false) {        
        $('.alert').show();
        $('.container').show();
        $('.alert>.dd').text('请您先上传合适的照片!');
        return false;
    }
	var c2 = document.getElementById("c2");
	var base64=c2.toDataURL("image/jpg",1);
	$('.Synthesis').hide();
	$('.xz').show();
	$('#screenShotImg').attr('src',base64);
	$('#screenShotImg').css('display','block');
	second = false;//恢复  默认   再次上传 判断
        $.ajax({
            url:'http://al.douyar.cc/ol/double.php?step=img',
            type:'post',
            data:{
                img:base64,
                openid:$('#openid').val()
            },
            dataType:'json',
            beforeSend: function(request) { 
                    request.setRequestHeader("Authorization", $('#token').val()); 
            }, 
            success:function(data){
                console.log(data);
            }
        })
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


