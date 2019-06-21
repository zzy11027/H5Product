//rem 改变根元素字体大小
		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';

		        
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

		function li(){
			if(int == 4){
				$('.li').hide();
				$('.prize_none').show();
			}else{
				$('.li').hide();
				$('.prize').show();
			}
		}


//游戏  开始 .................

		var con = 0;//分数  从0  开始
		var time = $('.time>span:eq(1)').text();// 游戏倒计时
		var speed = 1000;//快递出现速度
		var max;
		var a,b,sei,set;//定时器

		var int;

		var id;

//gif  
		function starts(){
			$('.start').remove();
			$('.kai').hide();
			$('.game').show();
			start();
			djs();
		}
        	

// 游戏开始
		function start(){	
				a = setInterval(moveDiv,speed);
				//倒计时
			 	sei = setTimeout(function(){
					clearInterval(a);
					clearInterval(max);
					clearInterval(b);
					$('.bj').show();
					$('.containerss').show();
					$('.game').hide();
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

			if(src == '/templates/ol/olxm/img/2.png'){
				
				$(obj).attr('src',function(){
					$(obj).fadeOut(800);
					con-=20;
					return '/templates/ol/olxm/img/booms.png';
				});
			}else if(src == '/templates/ol/olxm/img/1.png'){
				
				$(obj).attr('src',function(){
					$(obj).fadeOut(800);
					con+=10;
					return '/templates/ol/olxm/img/1s.png';
				})
			}else if(src == '/templates/ol/olxm/img/4.png'){
				
				$(obj).attr('src',function(){
					$(obj).fadeOut(800);
					con+=10;
					return '/templates/ol/olxm/img/1s.png';
				})
			}else if(src == '/templates/ol/olxm/img/3.png'){
				
				$(obj).attr('src',function(){
					$(obj).fadeOut(800);
					con+=20;
					return '/templates/ol/olxm/img/1s.png';
				})
			}
			// else if(src == '/templates/ol/olxm/img/boom.png'){
				
			// 	$(obj).attr('src',function(){
			// 		$(obj).fadeOut(800);
			// 		con-=20;
			// 		return '/templates/ol/olxm/img/booms.png';
			// 	})
			// }
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

			var src = ["/templates/ol/olxm/img/1.png","/templates/ol/olxm/img/4.png","/templates/ol/olxm/img/3.png","/templates/ol/olxm/img/4.png","/templates/ol/olxm/img/2.png","/templates/ol/olxm/img/1.png","/templates/ol/olxm/img/3.png"];

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

			var srcs = ["/templates/ol/olxm/img/1.png","/templates/ol/olxm/img/3.png","/templates/ol/olxm/img/4.png","/templates/ol/olxm/img/2.png","/templates/ol/olxm/img/1.png","/templates/ol/olxm/img/3.png","/templates/ol/olxm/img/4.png","/templates/ol/olxm/img/1.png"];

			a.src = srcs[random];

			con+=30;
			$('.count>span:first').text(con);

			if(con>500){
				$('.yao').hide();
				speed = 250;
				max = setInterval(moveDiv,speed);
			}
		} 


// //开始抽奖
		function luck(){
			if(aa == 1){
				var token = $("#token").val();
				var openid = $("#openid").val();
				var inp_1 = $(".inp1").val();
				var inp_2 = $(".inp2").val();
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
		            url : '/ol/xm.php?step=info',
		            data: {
		            	openid:openid,
		            	inp_1:inp_1,
		            	inp_2:inp_2,
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					}, 
		            success: function(data){
						clearInterval(a);
						clearInterval(max);
						int = data.data.prize;
						id = data.data.id;
						if(data.data.prize == 1){
							$('.lz').hide();
							// $('.prize').show();
							$('.li').show();
							$('.li').addClass('animated bounceInDown');
							$('.containerss').show();
							$('.prize').css('background-image','url(/templates/ol/olxm/img/pri3.png');
						}else if(data.data.prize == 2){
							$('.lz').hide();
							// $('.prize').show();
							$('.li').show();
							$('.li').addClass('animated bounceInDown');
							$('.containerss').show();
							$('.prize').css('background-image','url(/templates/ol/olxm/img/pri1.png');
						}else if(data.data.prize == 3){
							$('.lz').hide();
							// $('.prize').show();
							$('.li').show();
							$('.li').addClass('animated bounceInDown');
							$('.containerss').show();
							$('.prize').css('background-image','url(/templates/ol/olxm/img/pri2.png');
						}else if(data.data.prize == 4){
							$('.lz').hide();
							$('.li').show();
							$('.li').addClass('animated bounceInDown');
							$('.containerss').show();
							// $('.prize_none').show();
							$('.li').show();
							$('.li').addClass('animated bounceInDown');
						}
		            }

		   		});
			}
			aa=2;
			jump(3);
		}

	    function lq(){
			var token = $("#token").val();
			var openid = $("#openid").val();
			if(aa == 1){

				var dz = $("#dz").val();
				if (dz=="") {alert("请输入您的收货地址");return false;}

				$.ajax({

		            type: 'POST',
		            dataType:'json',
		            url : '/ol/xm.php?step=address',
		            data: {
		            	address:dz,
		            	openid:openid,
		            	prize:int,
		            	id:id,
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					}, 
		            success: function(data){
		            	if(data.code == 1){
		            		window.location.href = 'http://al.douyar.cc/ol/xm.php';
		            	}else{
		            		alert("提交失败");
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

			// $(".one").css("background-image","url(/templates/ol/olxm/img/ones.png)");
			// $(".two").css("background-image","url(/templates/ol/olxm/img/twos.png)");
			// $(".three").css("background-image","url(/templates/ol/olxm/img/threes.png)");
			// $(".four").css("background-image","url(/templates/ol/olxm/img/fours.png)");
			// $(".five").css("background-image","url(/templates/ol/olxm/img/fives.png)");
			
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



