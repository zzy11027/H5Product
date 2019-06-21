
//rem 改变根元素字体大小
	var aa = 1;
	var w = 375;
	var f = 16;
	var c = document.documentElement.clientWidth;
	var nf = c * f / w;
	document.documentElement.style.fontSize = nf + 'px';
	var id;

	var gun = 18.75*nf;

	//--创建页面监听，等待微信端页面加载完毕 触发音频播放
	document.addEventListener('DOMContentLoaded', function () {
	    function audioAutoPlay() {
	        var audio = document.getElementsByClassName('audio')[0];
	            audio.play();
	        document.addEventListener("WeixinJSBridgeReady", function () {
	            audio.play();
	        }, false);
	    }
	    audioAutoPlay();
	});

	function Play(e) {
		var audio = document.getElementsByClassName('audio')[0];

		if(audio.paused){
			audio.play();

		}else{
			audio.pause();

		}
	}

	$('.start').click(function(){
		$('.kai').hide();
		$('#gameDiv').show();
	})

	//首页  规则
		$(".rule").on("click",function(){
			$('.rule_all').show();
			$('.containerss').show();
		});
	//关闭规则
		$(".rule_all>.close").on("click",function(){
			$('.rule_all').hide();
			$('.containerss').hide();
		});

	//关闭失败弹窗
		$(".a1s").on("click",function(){
			$('.fx').show();
		});

		$('.guan').click(function(){
			$('.fx').hide();
		})
        $('.clo').click(function(){
        	window.location.href = 'http://omk.douyar.cc/omk/xm.php?step=test';
        })

        $('.clos').click(function(){
        	window.location.href = 'http://omk.douyar.cc/omk/xm.php?step=test';
        })



	//游戏结束时   执行函数
	function overEnd(t){
		console.log('结束了啦啦啦啦啦啦！'+t);
		var openid = $("#openid").val();
		var token = $("#token").val();
		var nickname = $("#nickname").val();
		$('.km').text(t);
		$.ajax({
            type: 'POST',
            dataType:'json',
            url : '/omk/xm.php?step=rank',
            data: {
            	fen:t,
            	openid:openid,
			},
			beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			},
            success: function(data){
            	$('.containerss').show();
            	$('.lz').show();
            	$('.bfb').text(data+"%");
				wx.onMenuShareAppMessage({
		            title: '圣诞节运输大作战', // 分享标题
		            desc: nickname+'以'+t+'分的成绩傲视全场，快来挑战ta赢取丰厚奖品吧', // 分享描述
		            link: 'http://omk.douyar.cc/omk/xm.php?step=test', // 分享链接
		            imgUrl: 'http://omk.douyar.cc/templates/omk/xm/img/fx.jpg', // 分享图标
		            type: '', // 分享类型,music、video或link，不填默认为link
		            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		            success: function () {
		                //alert("分享成功");
		                // 用户确认分享后执行的回调函数
		            },
		            cancel: function () {
		               // alert("取消成功");
		                // 用户取消分享后执行的回调函数
		            }

	        	});
            }

   		});
	}

	function tj(){
		if(aa == 1){
		var inp_1 = $(".inp1").val();
		var inp_2 = $(".inp2").val();
		var token = $("#token").val();
		var openid = $("#openid").val();
		if (inp_1=="") {alert("请输入您的姓名");return false;}
		if (inp_2=="") {alert("请输入您的电话");return false;}
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

        if (!reg.test(inp_2)) {
            alert("请输入正确的手机号");
            return false;
        }
		$.ajax({

            type: 'POST',
            dataType:'json',
            url : '/omk/xm.php?step=info',
            data: {
            	inp_1:inp_1,//姓名
            	inp_2:inp_2,//手机号
            	openid:openid
			},
			beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			},
            success: function(data){
            	$('.lz').hide();
            	if(data==1){
            		$('.yes').show();
            		$('.containerss').show();
            		$('.yes>p').text('50');
            	}else if(data == 2){
            		$('.yes').show();
            		$('.containerss').show();
            		$('.yes>p').text('10');
            	}
            	// else if(data == 3){
            	// 	$('.yes').show();
            	// 	$('.containerss').show();
            	// 	$('.yes>p').text('5');
            	// }
            	else if(data == 3){
            		$('.yes').show();
            		$('.containerss').show();
            		$('.yes>p').text('2');
            	}else{
            		$('.no').show();
            		$('.containerss').show();
            	}
            }

   		});
   		}

        aa=2;
        jump(3);
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

	// 适配华为键盘影响布局的问题
	var h = window.innerHeight;
	var myInput = document.getElementById('xm');
	var myInputs = document.getElementById('phone');
	myInput.addEventListener('focus',handler,false);
	myInputs.addEventListener('focus',handler,false);
	function handler(){
		//console.log(h)
		$('body').height(h);
　　		//$('body').height($('body')[0].clientHeight);

	}

	// 全屏手机高度自适应，解决设计只给一张背景图的难题！！！！！！！！！！！！！在高度大于iphoneX的情况下，自适应屏幕
	var win = $(window).height();

	// console.log(win)
	var doc = $(document).height()
	// console.log(doc)
	if(win>=812){

		// 先改变其高度
		$('.kai').height(win);
		$('.containerss').height(win);

		// 换一个自适应的背景图

		// $(".one").css("background-image","url(./img/ones.png)");
		// $(".two").css("background-image","url(./img/twos.png)");
		// $(".three").css("background-image","url(./img/threes.png)");
		// $(".four").css("background-image","url(./img/fours.png)");
		// $(".five").css("background-image","url(./img/fives.png)");
		
		// $('.contai_1').css('top','5%');
		// $('.contai_2').css('top','5%');

		// $('.xz>a').css('bottom','');
	}