	// rem
		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';
		var second = 0;

		// 开屏页
		$('.start_1').click(function(){
			$('.index').hide();
			$('.contai_1').show();
		})

		var topArr = [
			'C位出道','车届大佬','小鲜肉车牌','魔女车牌','车牌大兄DEI','前任的车牌','车神的车牌',
			'老司机车牌','戏精车牌','祖传秘制车牌'
		]

		var bottomArr  =  [
			'秋名山老司机','佛系开车治愈多年路怒','速度与激情','昼伏夜出，捉摸不定','独特品味帅SKR人',
			'从来不堵贼有面儿','风起云涌，叱咤车界','远离水逆，自己就是锦鲤','早睡早起不作死，拼死拯救发际线',
			'多一点真诚，少一点套路','我是不一样的烟火','帅气逼人，新社会暖男','油钱能省出一套房砸','大佬停车位安排一下',
			'理想型，经济适用男','三人行，必有一辆好车乎','车届小鲜肉','车海中最亮的一颗星','弯道漂移王',
			'路见不平，油门相助'
		]

        //上联随机 
        function random1(){
            var random = Math.floor(Math.random()*10);
            var str = topArr[random];
            return str;
        }

        //下联随机
        function random2(){
            var random = Math.floor(Math.random()*19);
            var str = bottomArr[random];
            return str;
        }
		
		// //图片合成函数
		// function draw(){
		// 	var name  =  $('.inp_1').val();
		// 	if(name == ''){alert('请输入您的姓名');return false};
		// 	var cph =  $('.inp_2').val();
		// 	if(cph == ''){alert('请输入您的车牌号');return false};
		// 	//上联
		// 	var strs =  random1();
		// 	var strss = random2();
			
		// 	var c=document.createElement('canvas');
		// 		ct=c.getContext('2d');
		// 		c.width=750;
		// 		c.height=1334;
		// 		ct.rect(0,0,c.width,c.height);
		// 		ct.fillStyle='#fff';
		// 		ct.fill(); 

		// 		var img=new Image;
		// 		//img.crossOrigin = 'Anonymous'; //解决跨域
		// 		if(second == 0){img.src = imgArr();second = 1;}//随机图片
		// 		else{img.src = ewm()}//二维码
		// 		img.onload=function(){
		// 			ct.drawImage(img,0,0,750,1334);
		// 			ct.textAlign='center';
		// 			ct.fillStyle = "#fff";  
		// 			ct.font ="small-caps bold 43px arial";
		// 			ct.fillText(name,385,245,200);
		// 			ct.font ="small-caps bold 55px arial"; 
		// 			ct.fillText(strs,385,320,300);
		// 			ct.font ="small-caps bold 36px arial";  
		// 			ct.fillText(strss,385,385,600); 
		// 			//调用判断  函数
		// 			switchs(strss,ct);
		// 			var src = c.toDataURL("image/png",10);
		// 			$('#screenShotImg').attr('src',src);
		// 		}

  //           	$('#screenShotImg').css('display','block');
  //           	$('#screenShotImg_1').css('display','block');

		// }


		//图片合成函数
		function draw(){
			var name  =  $('.inp_1').val();
			if(name == ''){alert('请输入您的姓名');return false};
			var cph =  $('.inp_2').val();
			if(cph == ''){alert('请输入您的车牌号');return false};
			//上联
			var strs =  random1();
			var strss = random2();
			var c=document.createElement('canvas');
				ct=c.getContext('2d');
				c.width=750;
				c.height=1334;
				ct.rect(0,0,c.width,c.height);
				ct.fillStyle='#fff';
				ct.fill(); 
			function drawing(n){
				if(n<2){
					var img=new Image;
					//img.crossOrigin = 'Anonymous'; //解决跨域
					if(second == 0){img.src = imgArr();}//随机图片
					else{img.src = ewm()}//二维码
					img.onload=function(){
						if(second == 0){
							ct.drawImage(img,0,0,750,1334);
							ct.textAlign='center';
							ct.fillStyle = "#fff";  
							ct.font ="small-caps bold 43px arial";
							ct.fillText(name,385,245,200);
							ct.font ="small-caps bold 55px arial"; 
							ct.fillText(strs,385,320,300);
							ct.font ="small-caps bold 36px arial";  
							ct.fillText(strss,385,385,600); 
							//调用判断  函数
							switchs(strss,ct);
							second = 1;
						}else{
							ct.drawImage(img,0,1166,750,168);
						}
						drawing(n+1);//递归
					}
				}else{
					$('.xz').show();
					var src = c.toDataURL("image/png",10);
					$('#screenShotImg').attr('src',src);
					$('#screenShotImg').css('display','block');
					$('#screenShotImg_1').css('display','block');
				}
			}

			drawing(0);
		}




		// 全屏手机高度自适应，解决设计只给一张背景图的难题！！！！！！！！！！！！！在高度大于iphoneX的情况下，自适应屏幕
		var win = $(window).height();

		// console.log(win)
		var doc = $(document).height()
		// console.log(doc)
		if(win>=812){

			// 先改变其高度
			$('.index').height(win);
			$('.two').height(win);
			$('#screenShotImg').height(win);
			$('.xz').height(win);


			// 换一个自适应的背景图
			// $(".index").css("background-image","url(./img/kai.png)");
			$(".two").css("background-image","url(./img/two_1.png)");
			$('.contai_1').css('top','5%');
			$('.contai_2').css('top','5%');

			// $('.xz>a').css('bottom','');
		}	

		// 点击消失键盘
		$('.dian').click(function(){
			closePro();
		})



		// 优化单选框
		$('.inp_13').click(function(){
			$(".man").css("background-image","url(./img/icon.png)");
			$(".wman").css("background-image","url(./img/icon_1.png)");
		})

		$('.inp_14').click(function(){
			$(".wman").css("background-image","url(./img/icon.png)");
			$(".man").css("background-image","url(./img/icon_1.png)");
		})


		//判断      诗句拼接
		function switchs(n,ct){
			ct.font ="small-caps 545 28px arial";
			console.log(n);
			switch(n)
			{
			case '秋名山老司机':
			  ct.fillText('秋名山上行人稀，',385,450,600);
			  ct.fillText('常有车神比高低。',385,500,600);
			  ct.fillText('如今车牌依旧在，',385,550,600);
			  ct.fillText('秋名山上领风骚。',385,600,600);
			  break;
			case '佛系开车治愈多年路怒':
			  ct.fillText('他快任他快，',385,450,600);
			  ct.fillText('我走我十迈。',385,500,600);
			  ct.fillText('小心驶得万年船，',385,550,600);
			  ct.fillText('平平安安即是福。',385,600,600);
			  break;
  			case '速度与激情':
			  ct.fillText('去马疾如飞，',385,450,600);
			  ct.fillText('车势如破竹。',385,500,600);
			  break;
			case '昼伏夜出，捉摸不定':
			  ct.fillText('喝最烈的酒，',385,450,600);
			  ct.fillText('熬最深的夜。',385,500,600);
			  break;
  			case '独特品味帅SKR人':
			  ct.fillText('川贝枇杷鸡尾酒，',385,450,600);
			  ct.fillText('无糖雪碧黄瓜汁，SKR。',385,500,600);
			  break;
			case '从来不堵贼有面儿':
			  ct.fillText('徜徉在晚高峰的城市二环',385,450,600);
			  break;
			case '风起云涌，叱咤车界':
			  ct.fillText('小猪佩奇身上纹，',385,450,600);
			  ct.fillText('掌声送给社会人。',385,500,600);
			  break;
  			case '远离水逆，自己就是锦鲤':
			  ct.fillText('世界上本没有锦鲤',385,450,600);
			  ct.fillText('转发的人多了',385,500,600);
			  ct.fillText('也就有了锦鲤',385,550,600);
			  ct.fillText('——鲁迅',485,600,200);
			  break;
			case '早睡早起不作死，拼死拯救发际线':
			  ct.fillText('霸王育发液，',385,450,600);
			  ct.fillText('是对秃头最后的妥协。',385,500,600);
			  break;
  			case '多一点真诚，少一点套路':
			  ct.fillText('城市套路深，',385,450,600);
			  ct.fillText('我要回农村。',385,500,600);
			  break;
			case '我是不一样的烟火':
			  ct.fillText('一路向北，我就是我',385,450,600);
			  ct.fillText('是颜色不一样的烟火',385,500,600);
			  break;
  			case '帅气逼人，新社会暖男':
			  ct.fillText('告诉你一个秘密',385,450,600);
			  ct.fillText('我总是承受着这个年纪本不该拥有的',385,500,600);
			  ct.fillText('帅气与智慧',385,550,600);
			  break;
			case '油钱能省出一套房砸':
			  ct.fillText('辛辛苦苦一整年，',385,450,600);
			  ct.fillText('有车有房有票子。',385,500,600);
			  break;
  			case '大佬停车位安排一下':
			  ct.fillText('观乎天地间，',385,450,600);
			  ct.fillText('这皇家SSVIP停车位，非阁下莫属。',385,500,600);
			  break;
			case '理想型，经济适用男':
			  ct.fillText('比你顾家的没你有钱',385,450,600);
			  ct.fillText('比你有钱的没你专心',385,500,600);
			  ct.fillText('比你专心的没你帅气',385,550,600);
			  break;
  			case '三人行，必有一辆好车乎':
			  ct.fillText('皇上说要雨露均沾，',385,450,600);
			  ct.fillText('我偏偏要PICK你C位出道。',385,500,600);
			  break;
			case '车届小鲜肉':
			  ct.fillText('有颜有范儿，动感爆棚',385,450,600);
			  ct.fillText('你就是社会主流，时代C位',385,500,600);
			  break;
  			case '车海中最亮的一颗星':
			  ct.fillText('夜空中最亮的星，',385,450,600);
			  ct.fillText('能否记起，',385,500,600);
			  ct.fillText('曾与我同行的你',385,550,600);
			  break;
			case '弯道漂移王':
			  ct.fillText('是时候展现真正的技术了，',385,450,600);
			  ct.fillText('九曲十八弯，',385,500,600);
			  ct.fillText('道道都过招。',385,550,600);
			  break;
  			case '路见不平，油门相助':
			  ct.fillText('一方有难八方呼应，',385,450,600);
			  ct.fillText('老铁就是这么贴心。',385,500,600);
			  break;
			}
		}


		//底图  随机
		function imgArr(){
			var sel = $('#cx option:selected').text();

			if(sel == '奥铃 CTS'){
				var random = Math.floor(Math.random()*2);
				var imgArr =  [
						'/templates/ol/olh5s/img/1.jpg','/templates/ol/olh5s/img/2.jpg'
					];
				var randomImg=imgArr[random];
				console.log(randomImg);
				return randomImg;
			}else if(sel == '奥铃TS'){
				var random = Math.floor(Math.random()*2);
				var imgArr =  [
						'/templates/ol/olh5s/img/3.jpg','/templates/ol/olh5s/img/4.jpg'
					];
				var randomImg=imgArr[random];
				console.log(randomImg);
				return randomImg;
			}else if(sel == '奥铃新捷运'){
				var random = Math.floor(Math.random()*2);
				var imgArr =  [
						'/templates/ol/olh5s/img/5.jpg','/templates/ol/olh5s/img/6.jpg'
					];
				var randomImg=imgArr[random];
				console.log(randomImg);
				return randomImg;
			}
		}


		//二维码
		function ewm(){
			var src = '/templates/ol/olh5s/img/er.png';
			return src;
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
		function Play(e) {
			var audio = document.getElementsByClassName('audio')[0];

			if(audio.paused){
				audio.play();

			}else{
				audio.pause();

			}
		}