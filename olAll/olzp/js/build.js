//rem 改变根元素字体大小
		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';

//多次点击变量
		var aa  = 1;
//首页  
		$(".start").on("click",function(){
			$('.containerss').show();
			$('.bj').show();
		});
		$('.a2').click(function(){
			$('.fxing').show();
		})
		$('.fxing').click(function(){
			$(this).hide();
		})
// new一个转盘   对象
 		var newdraw =new turntableDraw('.drawBtn',{
			share:6,
			speed:"4s",
			velocityCurve:"ease",
			weeks:10,
			callback:function(num)
			{
				console.log(num)
				if(num == 1){
					$('.containerss').show();
					$('.bj').hide();
            		$('.lz').show();
            		$('.lz>p').text('2');
				}else if(num == 2){
					$('.containerss').show();	
					$('.bj').hide();
            		$('.lz').show();
            		$('.lz>p').text('5');
				}else if(num == 6){
					$('.containerss').show();	
					$('.bj').hide();
            		$('.lz').show();
            		$('.lz>p').text('10');
				}else if(num == 4){
					$('.containerss').show();
					$('.bj').hide();
            		$('.noprize').show();
				}
			},
		});


//开始抽奖
		$(".zi").click(function(event) {
			if(aa == 1){
				var token = $("#token").val();
				var openid = $("#openid").val();
				var id = $('#id').val();
				console.log(id);
				$.ajax({
		            type: 'POST',
		            dataType:'json',
		            url : 'http://al.douyar.cc/ol/express.php?step=prize',
		            data: {
		            	openid:openid,
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					}, 
		            success: function(data){
		            	
		    			switch(data.res){
		    				//2
		    				case 1 :
			    				newdraw.goto(1);
			    				break;
			    			//5
		    				case 2 :
			    				newdraw.goto(2);
			    				break;
			    			//10
		    				case 3 :
			    				newdraw.goto(6);
			    				break;
			    			//中奖未留资      
		    				case 10 :
			    				alert('您已经中过奖了哦~请留资！');
			    				$('.lz').show();
			    				$('.lz>p').text(data.prize);
			    				$('.containerss').show();
			    				$('.bj').hide();
			    				break;
			    			//没有中奖    和已经中奖
		    				case 9 :
			            		newdraw.goto(4);
			    				break;
		    			}
		            }
		   		});
	   		}
	        aa=2;
	        jump(3);
		});


		//留资.....................................
		function tj(){
			if(aa == 1){
				var name = $(".name").val();
				var phone = $(".phone").val()
				var yzm = $(".yzm").val();
				var token = $("#token").val();
				var openid = $("#openid").val();
				console.log(name,phone,yzm)
				if (name=="") {alert("请输入您的姓名");return false;}
				if (phone=="") {alert("请输入您的电话");return false;}
				var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		        if (!reg.test(phone)) {
		            alert("请输入正确的手机号");
		            return false;
		        }
				var han = /^[\u4e00-\u9fa5]+$/;
				if(!han.test($('.name').val())){alert('请输入汉字！');return false;}
				if (name=="") {alert("请输入您的姓名");return false;}
				if (phone=="") {alert("请输入您的电话");return false;}
				$.ajax({
		            type: 'POST',
		            dataType:'json',
		            url : 'http://al.douyar.cc/ol/express.php?step=info',
		            data: {
		            	name:name,
		            	phone:phone,
		            	code:yzm,
		            	openid:openid,
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					}, 
		            success: function(data){
		            	console.log(data);
		            	if(data.res == 1){
		            		alert('留资成功！');
		            		window.location.href = '';
		            	}else if(data.res == 11){
		            		alert('验证码错误！');
		            	}else{
		            		alert('留资失败！');
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
			$('.two').height(win);
			$('.three').height(win);
			$('.four').height(win);
			$('.four_1').height(win);
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
		window.onload = function(){
			var h = window.innerHeight;
			var myInput = document.getElementById('xm');
			var myInputs = document.getElementById('phone');
			myInput.addEventListener('focus',handler,false);
			myInputs.addEventListener('focus',handler,false);
			function handler(){
				$('body').height(h);
	 　　		//$('body').height($('body')[0].clientHeight);
			}			
		}
		// 限制input  输入内容
		$('.inp1').bind('input propertychange', function() {

       		if($('.inp1').val().length == 1){

       			document.getElementById("inp_1").value=document.getElementById("inp_1").value.replace(/[^1-9]/g,'')
       		}else{
       			document.getElementById("inp_1").value=document.getElementById("inp_1").value.replace(/\D/g,'')
       		}
       		

		});