


		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';

		//多次点击变量
		var aa  = 1;

		// 第一页   点击消失 向右
		$('.one>.one_one').click(function(){
			$('.one').hide();
			$('.two').show();
		})
//向左
		$('.one>.ones').click(function(){
			alert('第一页啦~')
		})



//点心
		$('.one>.xin').click(function(){
			$('.one').hide();
			$('.two').show();
		})


		// 第二页    点击消失
		$('.two>.jx').click(function(){
			$('.two').hide();
			$('.three').fadeIn(500);
		})



		$('.two>.one_one').click(function(){
			$('.two').hide();
			$('.three').show();
		})

		$('.two>.ones').click(function(){
			$('.two').hide();
			$('.one').show();
		})

		//第三页   点击消失
		$('.three>.one_one').click(function(){

			var inp_1 = $(".inp1").val();
			var inp_2 = $(".inp2").val();
			var inp_3 = $("#selects  option:selected").text();
			var inp_4 = $("#selects1  option:selected").text();
			if (inp_1=="") {alert("请输入您的姓名");return false;}
			if (inp_2=="") {alert("请输入您的电话");return false;}
			if (inp_3=="请选择性别") {alert("请选择您的性别");return false;}
			if (inp_4=="请选择城市") {alert("请选择您的城市");return false;}
			var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

	        if (!reg.test(inp_2)) {
	            alert("请输入正确的手机号");
	            return false;
	        }

			$('.three').hide();
			$('.four').fadeIn(500);
		})

		$('.three>.ones').click(function(){
			$('.three').hide();
			$('.two').fadeIn(500);
		})
		//留资.....................................
		$('.ts').click(function(){
			if(aa == 1){

				var inp_1 = $(".inp1").val();
				var inp_2 = $(".inp2").val();
				var inp_3 = $("#selects  option:selected").text();
				var inp_4 = $("#selects1  option:selected").text();
				if (inp_1=="") {alert("请输入您的姓名");return false;}
				if (inp_2=="") {alert("请输入您的电话");return false;}
				if (inp_3=="请选择性别") {alert("请选择您的性别");return false;}
				if (inp_4=="请选择城市") {alert("请选择您的城市");return false;}
				var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

		        if (!reg.test(inp_2)) {
		            alert("请输入正确的手机号");
		            return false;
		        }

				$('.spinner').show();

				var token = $("#token").val();
				var ip = $("#ip").val();
				$.ajax({

		            type: 'POST',
		            dataType:'json',
		            url : '/hb.php?step=info',
		            data: {
		            	ip,ip,
		            	inp_1:inp_1,
		            	inp_2:inp_2,
		            	inp_3:inp_3,
		            	inp_4:inp_4,
		            	type:159
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					},
		            success: function(data){
		            	if(data==1){
			            	$('.er').show();
	    					$('.spinner').hide();

    					}else{
    						$('.yi').show();
    						$('.spinner').hide();
    						return;
    					}
		            }

		   		});

	   		}

	        aa=2;
	        jump(3);

		})

		// 点击分享
		$('.fx').click(function(){

			$('.fx_img').show();
		})

		//点击关闭分享窗口
		$('.close').click(function(){
			$('.fx_img').hide();
		})

		// 全屏手机高度自适应，解决设计只给一张背景图的难题！！！！！！！！！！！！！在高度大于iphoneX的情况下，自适应屏幕
		var win = $(window).height();

		// console.log(win)
		var doc = $(document).height()
		// console.log(doc)
		if(win>=812){

			// 先改变其高度
			$('.one').height(win);
			$('.two').height(win);
			$('.three').height(win);
			$('.four').height(win);
			$('.five').height(win);


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


		//第四页
		$('.four>.one_one').click(function(){
			alert('最后一页啦~')
		})

		$('.four>.ones').click(function(){
			$('.four').hide();
			$('.three').show();
		})



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


	        $('.yi_clo').click(function(){
	        	$('.yi').hide();
	        	$('.er').hide();
	        })


		$('.yi_clo1').click(function(){
			$('.yi').hide();
		})

		$('.yi_clo2').click(function(){
			$('.er').hide();
			$('.three').hide();
			$('.four').show();
		})