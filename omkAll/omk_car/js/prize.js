
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
		$('.content').show();
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
		$(".fail_all>.close").on("click",function(){
			$('.fail_all').hide();
			$('.containerss').hide();
		});

		$(".addani").click(function(){
            $(".ani").animate({scrollLeft:gun+'px'},300);
        });
		$(".addani1").click(function(){
            $(".ani").animate({scrollLeft:'-'+gun+'px'},300);
        });

        $('.clo').click(function(){
        	window.location.href = 'http://omk.douyar.cc/omk/omk_car.php?step=test';
        })

        $('.clos').click(function(){
        	window.location.href = 'http://omk.douyar.cc/omk/omk_car.php?step=test';
        })
	//游戏结束时   执行函数
	function overEnd(){
		console.log('结束了！');
		$('.road-inner').remove();
		$('.y').show();
		var counts = $('#miles').text();
		var openid = $("#openid").val();
		var token = $("#token").val();
		$('.km').text(counts);
		$.ajax({
            type: 'POST',
            dataType:'json',
            url : '/omk/omk_car.php?step=rank',
            data: {
            	fen:counts,
            	openid:openid,
			},
			beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			},
            success: function(data){
            	// console.log(data);return;
            	$('.bfb').text(data);
            	$('.miles').remove();
            	$('.miless').show();
            	$('#miless').text(counts);
				wx.onMenuShareAppMessage({
		            title: '恭喜您击败全国'+data+'%的选手,有TA,你就能击败别人', // 分享标题
		            desc:'快递之星超级“快“ 递,给你不一样的定制体验', // 分享描述
		            link: 'http://omk.douyar.cc/omk/omk_car.php?step=test', // 分享链接
		            imgUrl: 'http://omk.douyar.cc/templates/omk/omk_car/img/fx.jpg', // 分享图标
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
            url : '/omk/omk_car.php?step=info',
            data: {
            	inp_1:inp_1,
            	inp_2:inp_2,
            	openid:openid
			},
			beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			},
            success: function(data){
            	$('.askPropbar').hide();

            	if(data==1){
            		$('.yes').show();
            		$('.yes>p').text('50');
            	}else if(data == 2){
            		$('.yes').show();
            		$('.yes>p').text('10');
            	}else if(data == 3){
            		$('.yes').show();
            		$('.yes>p').text('5');
            	}else if(data == 4){
            		$('.yes').show();
            		$('.yes>p').text('2');
            	}else{
            		$('.no').show();
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