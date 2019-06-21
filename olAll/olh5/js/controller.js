	// rem
		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';

		// 开屏页
		$('.start_1').click(function(){
			$('.index').hide();
			$('.contai_1').show();
		})

		var imgArr =  [
			'./img/1.png','./img/2.png','./img/3.png'
		];

		var topArr = [
			'C位出道','车届大佬','小鲜肉车牌','魔女车牌','车牌大兄dei','前任的车牌','车神的车牌',
			'老司机车牌','戏精车牌','祖传秘制车牌'
		]

		var bottomArr  =  [
			'秋名山老司机','佛系开车治愈多年路怒','速度与激情','昼伏夜出，捉摸不定','独特品味帅skr人',
			'从来不堵贼有面儿','风起云涌，叱咤车界','远离水逆，自己就是锦鲤','早睡早起不作死，拼死拯救发际线',
			'多一点真诚，少一点套路','我是不一样的烟火','帅气逼人','油钱能省出一套房砸','大佬停车位安排一下',
			'皮皮虾，我们走！','三人行，必有一辆好车乎','车王上神，无我境界','车海中最亮的一颗星','弯道漂移王',
			'路见不平， 油门相助'
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
		
		//图片合成函数
		function draw(){
			//上联
			var strs =  random1();
			var strss = random2();
			var random = Math.floor(Math.random()*3);
			var c=document.createElement('canvas');
				ct=c.getContext('2d');
				c.width=750;
				c.height=1334;
				ct.rect(0,0,c.width,c.height);
				ct.fillStyle='#fff';
				ct.fill(); 

				var img=new Image;
				//img.crossOrigin = 'Anonymous'; //解决跨域
				img.src='./img/1.jpg';
				// img.src=imgArr[random];
				img.onload=function(){
					ct.textAlign='center';
					ct.fillStyle = "black";  
					ct.font ="small-caps bold 50px arial"; 
					ct.drawImage(img,0,0,750,1334);
					ct.fillText(strs,385,300,300); 
					ct.fillText(strss,385,600,300); 

					//调用判断  函数
					switchs(strss,ct);

					var src = c.toDataURL("image/png",10);
					$('#screenShotImg').attr('src',src);
				}

            	$('#screenShotImg').css('display','block');
            	$('#screenShotImg_1').css('display','block');

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
			console.log(ct);
			switch(n)
			{
			case '秋名山老司机':
			  ct.fillText('秋名山上行人稀,',385,600,300);
			  ct.fillText('常有车神比高低。',385,700,300);
			  ct.fillText('如今车牌依旧在，',385,800,300);
			  ct.fillText('秋名山上领风骚。',385,900,300);
			  break;
			// case 2:
			  
			//   break;
			}
		}