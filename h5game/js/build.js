//rem 改变根元素字体大小
		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';

//多次点击变量
		var aa  = 1;


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
//点击分享  出现  分享弹窗
		$(".show").on("click",function(){
			$('.fx').show();
		});
//点击关闭    关闭分享弹窗
		$(".fx>.close").on("click",function(){
			$('.fx').hide();
		});
//游戏  开始 .................

		var con = 0;//分数  从0  开始
		var time = $('.time>span:eq(1)').text();// 游戏倒计时
		var speed = 1000;//快递出现速度
		var a,b,sei,set;//定时器

//gif  
		function starts(){
			//开始按钮消失   首页消失    播放gif视频  音频暂停
			var audio = document.getElementsByClassName('audio')[0];
			audio.pause();
			$('.kai').hide();
			$('.start').remove();
			$('.gif').fadeIn(500);
			$('.gif').trigger('play');
		}
		//监听视频  播放完毕  进入游戏页面
		var video1 = document.getElementsByClassName('video1')[0];
		video1.addEventListener("ended",function(){
			playAudio($('.audio_2')[0]);
			//定时， 倒计时结束后，gif消失 然后开始游戏  
			// $('.gif').trigger('pause');
			$('.gif').remove();
			$('.game').show();
			//移除第一个播放按钮   创建一个新的播放按钮
			$('.first').remove();
			var second = document.createElement('div');
			second.setAttribute("onclick","Plays()");
			second.setAttribute("id","but");
			document.body.appendChild(second);
			start();
			djs();
        	
		});
// 游戏开始
		function start(){	
				a = setInterval(moveDiv,speed);
				//倒计时
			 	sei = setTimeout(function(){

					var fen = $('.count>span:first').text();


					 //判断用户是否到达300分 
					if (fen<200) {
						//没有到300分     出现失败弹窗     出现遮罩      不抽奖
						clearInterval(a);
						$('.fail_all').fadeIn(500);
						$('.containerss').show();
					}else{
						//获取分数
						var counts = $('.count>span:first').text();$('.success_all>p:eq(0)').text(counts);$('.register>p:eq(0)').text(counts);
						//完成200分或者以上    ajax设置超越百分比
						var tokem = $("#token").val();
						var openid = $("#openid").val();
						var nickname = $("#nickname").val();
						$.ajax({

				            type: 'POST',
				            dataType:'json',
				            url : '/omkds.php?step=insert_bfb',
				            data: {
				            	openid:openid,
				            	fen:counts
							},
							beforeSend: function(request) { 
							request.setRequestHeader("Authorization", token); 
							}, 
				            success: function(data){
				            	//挑战成功  设置得了多少分
				            	$('.success_all>p:eq(0)').text(counts);
				            	//挑战成功  设置百分比
				            	$('.success_all>p:eq(1)').text(data+'%');
				            	//提交表单成功  设置分数
				            	$('.register>p:eq(0)').text(counts);
				            	//提交表单成功  设置百分比
				            	$('.register>p:eq(1)').text(data+'%');
				            	wx.onMenuShareAppMessage({
						            title: '疯狂拆快递', // 分享标题
						            desc: nickname+'以'+counts+'分的成绩傲视群雄，快来挑战ta赢取丰厚奖品吧！', // 分享描述
						            link: 'http://omkds.douyar.cc/omkds.php', // 分享链接
						            imgUrl: 'http://omkds.douyar.cc/templates/h5game/img/fx.jpg', // 分享图标
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
						clearInterval(a);
						clearInterval(max);
						$('.success_all').fadeIn(500);
						$('.containerss').show();
					}
				},30000);
		}


//游戏倒计时
		function djs(){

			b = setInterval(function(){
				time--;

				//倒计时结束后     结束游戏
				if(time == 0){
					clearInterval(a);
					clearInterval(b);
					$('.time>span:eq(1)').text('0');
					return false;
				}

				$('.time>span:eq(1)').text(time);
			},1000)
		}



//随机创建  快递
		function moveDiv() {
			if(time<=0){
console.log('结束')
				clearInterval(b);
				clearInterval(a);
				return false;
			}
				
			var imgObj=document.createElement("img");

			imgObj.setAttribute("src",randomImg());
			imgObj.setAttribute("title","快递");

			//随机位置
			var x=getRandom(50,window.innerWidth-140);
			var y=getRandom(120,window.innerHeight-270);


			imgObj.setAttribute("style","position:absolute;left:"+x+"px;top:"+y+"px");

			imgObj.setAttribute("onclick","removeImg(this)");

			document.body.appendChild(imgObj);

			removeImgs(imgObj);

		};


//求函数随机数   设置快递的top  left
		function getRandom(min,max){
			var random=Math.random()*(max-min)+min;
			random=Math.floor(random);
			return random;
		}


//如果没有点击   一秒钟之后也会消失
		function removeImgs(img){

			$(img).fadeOut(1000,function(){
				$(img).remove();
			})
		}



//如果点中的话   消失  并加分   而后出现频率增加
		function removeImg(obj){

			//加分之前  判断时间
			if(time<=0){
				clearInterval(b);
				clearInterval(a);
				clearInterval(max);
				return false;
			}
			var src = $(obj).attr('src');

			if(src == 'templates/h5game/img/boom.png'){
				
				$(obj).attr('src',function(){
					$(obj).fadeOut(800);
					con-=15;
					return 'templates/h5game/img/booms.png';
				});
			}else if(src == 'templates/h5game/img/1.png'){
				
				$(obj).attr('src',function(){
					$(obj).fadeOut(800);
					con+=10;
					return 'templates/h5game/img/2s.png';
				})
			}else if(src == 'templates/h5game/img/3.png'){
				
				$(obj).attr('src',function(){
					$(obj).fadeOut(800);
					con+=20;
					return 'templates/h5game/img/4s.png';
				})
			}
			// document.body.removeChild(obj);

			$('.count>span:first').text(con);

			//根据用户得分情况      设置快递出现速度
			if(con>0 && con<50){
				speed = 750;
				clearInterval(a);
				a = setInterval(moveDiv,speed);
			}else if(con>50 && con<120){
				speed = 600;
				clearInterval(a);
				a = setInterval(moveDiv,speed);
			}else if(con>120 && con<160){
				speed = 450;
				clearInterval(a);
				a = setInterval(moveDiv,speed);
			}else if(con>160 && con<200){
				speed = 300;
				clearInterval(a);
				a = setInterval(moveDiv,speed);
			}else if(con>200 && con<500){
				//开始出现大图片
				$('.yao').show();
				clearInterval(a);
			}

		}


//随机图片src
		function randomImg(){
			var random = parseInt(Math.random()*5);

			var src = ["templates/h5game/img/1.png","templates/h5game/img/boom.png","templates/h5game/img/3.png","templates/h5game/img/1.png","templates/h5game/img/3.png"];

			return src[random];
		}


//中间大快递出现    点击加分并更换src
		function bigSrc(a){
			if(time<=0){
				clearInterval(b);
				clearInterval(a);
				return false;
			}
			var random = parseInt(Math.random()*7);

			var srcs = ["templates/h5game/img/1.png","templates/h5game/img/3.png","templates/h5game/img/4.png","templates/h5game/img/1.png","templates/h5game/img/3.png","templates/h5game/img/4.png","templates/h5game/img/1.png"];

			a.src = srcs[random];

			con+=30;
			$('.count>span:first').text(con);

			if(con>500){
				$('.yao').hide();
				speed = 250;
				max = setInterval(moveDiv,speed);
			}
		} 


//开始抽奖
		function luck(){

			$('.success_all').hide();
			var tokem = $("#token").val();
			var openid = $("#openid").val();

			$.ajax({
		        type: "POST",
		        url: "/omkds.php?step=prize",
		        data:{
		        	openid:openid,
				},
				beforeSend: function(request) { 
					request.setRequestHeader("Authorization", token); 
				}, 
		        success: function (data) {
		        	//二元 
		        	if(data == 1){
		        		$('.prize').css('background-image','url(templates/h5game/img/prize_3.png)');
		        		$('.prize').show();
		        		$('.containerss').show();
		        	//十元
		        	}else if(data == 2){
		        		$('.prize').css('background-image','url(templates/h5game/img/prize_2.png)');
		        		$('.prize').show();
		        		$('.containerss').show();
		        	//五十元
		        	}else if(data == 3){
		        		$('.prize').css('background-image','url(templates/h5game/img/prize_1.png)');
		        		$('.prize').show();
		        		$('.containerss').show();
		        		
		        	//未中奖
		        	}else if(data == 4){
		        		$('.prize_none').show();
		        		$('.containerss').show();
		        	}
		        }
		    });
		}


		//留资.....................................
		function tj(){
			$('.prize').hide();
			var tokem = $("#token").val();
			var openid = $("#openid").val();
			if(aa == 1){

				var inp_1 = $(".inp1").val();
				var inp_2 = $(".inp2").val();
				var inp_3 = $(".inp3  option:selected").text();
				if (inp_1=="") {alert("请输入您的姓名");return false;}
				if (inp_2=="") {alert("请输入您的电话");return false;}
				if (inp_3=="" || inp_3 == "意向车型") {alert("请选择意向车型");return false;}
				var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

		        if (!reg.test(inp_2)) {
		            alert("请输入正确的手机号");
		            return false;
		        }

				$('.spinner').show();

				$.ajax({

		            type: 'POST',
		            dataType:'json',
		            url : '/omkds.php?step=info',
		            data: {
		            	inp_1:inp_1,
		            	inp_2:inp_2,
		            	inp_3:inp_3,
		            	openid:openid,
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					}, 
		            success: function(data){
		            	if(data==1){
		            		$('.register').show();
		            		$('.spinner').hide();
		            	}
		            }

		   		});

	   		}

	        aa=2;
	        jump(3);


	    }

		// 全屏手机高度自适应，解决设计只给一张背景图的难题！！！！！！！！！！！！！在高度大于iphoneX的情况下，自适应屏幕
		var win = $(window).height();

		// console.log(win)
		var doc = $(document).height()
		// console.log(doc)
		if(win>=812){

			// 先改变其高度
			$('.kai').height(win);
			$('.game').height(win);
			$('.gif').height(win);
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


		function Play(e) {
			var audio = document.getElementsByClassName('audio')[0];

			if(audio.paused){
				audio.play();

			}else{
				audio.pause();

			}
		}

		function Plays(e) {
			var audio = document.getElementsByClassName('audio')[1];

			if(audio.paused){
				audio.play();

			}else{
				audio.pause();

			}
		}

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


		//触摸监听
		// document.addEventListener('touchstart', function () {
		//     function audioAutoPlay() {
		//         var audio = document.getElementsByClassName('audio')[0];
		//             audio.play();
		//     }
		//     audioAutoPlay();
		// });

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