		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';



		// 开屏页
		$('.start').click(function(){

			$('.index').hide();

			$('.one').fadeIn(500);
		})

		// 遍历input添加对勾     第一页
		$('.one>input').each(function(i){

			$(this).click(function(){

				if(i == 0){
					$('.one_dui>.one_dui_1').show();
					$('.one_dui>.one_dui_1').siblings().hide();
				}else if(i == 1){
					$('.one_dui>.one_dui_2').show();
					$('.one_dui>.one_dui_2').siblings().hide();
				}else if(i == 2){
					$('.one_dui>.one_dui_3').show();
					$('.one_dui>.one_dui_3').siblings().hide();
				}else if(i == 3){
					$('.one_dui>.one_dui_4').show();
					$('.one_dui>.one_dui_4').siblings().hide();
				}
			})
		})


		// 遍历input添加对勾     第二页
		$('.two>input').each(function(i){

			$(this).click(function(){

				if(i == 0){
					$('.two_dui>.one_dui_1').show();
					$('.two_dui>.one_dui_1').siblings().hide();
				}else if(i == 1){
					$('.two_dui>.one_dui_2').show();
					$('.two_dui>.one_dui_2').siblings().hide();
				}else if(i == 2){
					$('.two_dui>.one_dui_3').show();
					$('.two_dui>.one_dui_3').siblings().hide();
				}else if(i == 3){
					$('.two_dui>.one_dui_4').show();
					$('.two_dui>.one_dui_4').siblings().hide();
				}
			})
		})

		// 遍历input添加对勾     第三页
		$('.three>input').each(function(i){

			$(this).click(function(){

				if(i == 0){
					$('.three_dui>.one_dui_1').show();
					$('.three_dui>.one_dui_1').siblings().hide();
				}else if(i == 1){
					$('.three_dui>.one_dui_2').show();
					$('.three_dui>.one_dui_2').siblings().hide();
				}else if(i == 2){
					$('.three_dui>.one_dui_3').show();
					$('.three_dui>.one_dui_3').siblings().hide();
				}else if(i == 3){
					$('.three_dui>.one_dui_4').show();
					$('.three_dui>.one_dui_4').siblings().hide();
				}else if(i == 4){
					$('.three_dui>.one_dui_5').show();
					$('.three_dui>.one_dui_5').siblings().hide();
				}
			})
		})

		// 下一题11111111111111111111111111
		$('.next').click(function(){

			var val=$('input:radio[name="x"]:checked').val();
			// console.log(val)

			if(val == undefined){
				alert('您还没答题~！')
				return false;
			}

			$('.one').hide();

			$('.two').show();
		})

		// 下一题2222222222222222222
		$('.next_1').click(function(){

			var val=$('input:radio[name="z"]:checked').val();
			// console.log(val)

			if(val == undefined){
				alert('您还没答题~！')
				return false;
			}

			$('.two').hide();

			$('.three').show();
		})
		
		// 下一题3333333333333333
		$('.next_2').click(function(){

			var val=$('input:radio[name="y"]:checked').val();
			// console.log(val)

			if(val == undefined){
				alert('您还没答题~！')
				return false;
			}

			$('.three').hide();

			$('.four').show();
		})


		function test(){
			
			var va = $('.xm').val();
			var sec = [];
			if(va == ''){
				alert('请输入您的姓名~！');
				return false;
			}

			$('input:radio').each(function(){
				if(this.checked){
                   sec1 = $(this).val();
                   sec.push(sec1)
                }
			})
			// console.log(sec)

			var index = Math.floor((Math.random()*sec.length));

			var chuan = sec[index];
			
			var ind = index+1
// alert(ind+'_'+chuan);
			$('.spinner').show();

			$.ajax({

	            type: 'POST',
	            dataType:'json',
	            url : 'spike_dsz.php?step=hc',
	            data: {ind:ind,chuan:chuan,va:va},

	            success: function(data){
	            	console.log(data);
	            	$('.spinner').hide();
	            	$('#screenShotImg').attr('src',data.img);
	            	$('#screenShotImg').css('display','block');
	            	$('#screenShotImg_1').css('display','block');
	            }
		   	});
		}


		// 全屏手机高度自适应，解决设计只给一张背景图的难题！！！！！！！！！！！！！在高度大于iphoneX的情况下，自适应屏幕
		var win = $(window).height();

		console.log(win)
		var doc = $(document).height()
		// console.log(doc)
		if(win>=812){

			// 先改变其高度
			$('.index').height(win);
			$('.one').height(win);
			$('.two').height(win);
			$('.three').height(win);
			$('.four').height(win);
			$('#screenShotImg').height(win);
			
		}