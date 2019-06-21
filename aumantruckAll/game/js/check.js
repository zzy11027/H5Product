		// 游戏倒计时
		var con = $('.time').text();
		// 分数
		var car = 0;

		// 倒计时游戏
		function start(){	

				 sei = setTimeout(function(){
					// console.log('开始了')
					$('.content').hide();

					var fen = $('.ling').text();

					 //判断用户是否到达300分 
					if (fen<300) {

						$('.no').fadeIn(300);

						var jf = $('.ling').text();

						$('.jf-1').text(jf);

					}else{

						$('.over').fadeIn(300);

						var jf = $('.ling').text();

						$('.jf').text(jf);

	        			var openid = $("#openid").val();
	        			var nickname = $("#nickname").val();
				        $.ajax({
				            type: "GET",
				            url: "http://www.aumantruck.com/mobile/spike_game.php?step=inser&openid="+openid+"&fen="+fen,
				            dataType: 'json',
				            success: function (result) {
				            	$('.ph').text(result.str+"%");
				            	$('.jiang').text(result.add);
				                wx.onMenuShareAppMessage({
					                title: '欧曼EST冷链之星，与你一起拯救新鲜！', // 分享标题
					                desc: nickname+'以'+fen+'分的成绩傲视群雄，你敢来挑战Ta赢取丰厚奖品吗？', // 分享描述
					                link: 'http://www.aumantruck.com/mobile/spike_game.php?', // 分享链接
					                imgUrl: 'http://www.aumantruck.com/mobile/templates/game/img/logo.jpg', // 分享图标
					                type: '', // 分享类型,music、video或link，不填默认为link
					                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					                success: function () {
					                    //alert("分享成功");
					                    // 用户确认分享后执行的回调函数
					                },
					                cancel: function () {
					                    //alert("取消成功");
					                    // 用户取消分享后执行的回调函数
					                }

					            });
				            }
				        });

					}
				},30000);


				var a = setInterval(function(){
					// console.log('开始了!!!!!!!')

					con--;
					// console.log(con)
					if(con < 0){
						clearInterval(a);
					}
					$('.time').text(con)

				},1000)

		}

		$('.wu img').each(function(index){
			console.log(index)
			$(this).drag({
						before: function(e) {

						},
						process: function(e) {
							$(this).text(Math.round(e.pageX)+'...'+Math.round(e.pageY));
						},
						end: function(e) {

							var chil = $('.wu').children().length;

							console.log(chil);

							if(chil == 1){
								clearTimeout(sei);
								setTimeout(function(){
									stop();
								},2000)
							}

							var thi = $(this)

							// 获取目标的top值  left值
							var t = $('.div_1').position().top;
							var t_2 = $('.div_2').position().top;
							var t1 = $('.div_3').position().top;
							var t2 = $('.div_4').position().top;

							var l = $('.div_1').position().left;
							var l1 = $('.div_2').position().left;

							// console.log(t,t1,l,l1);

							var etop = $(this).position().top;
							var eleft = $(this).position().left;

							// console.log(etop,eleft);


							jian(etop,thi,eleft);

							if(index == 0){
								
								check2(t,t1,l,l1,etop,eleft,t2,t_2);

							}else if(index == 1){
								
								check1(t,t1,l,l1,etop,eleft,t2);
							}else if(index == 2){
								
								check2(t,t1,l,l1,etop,eleft,t2,t_2);
							}else if(index == 3){
								
								check2(t,t1,l,l1,etop,eleft,t2,t_2);
							}else if(index == 4){
								
								check1(t,t1,l,l1,etop,eleft,t2);
							// }else if(index == 5){
								
							// 	check1(t,t1,l,l1,etop,eleft,t2);
							// }else if(index == 6){
								
							// 	check4(t,t1,l,l1,etop,eleft,t2);
							// }else if(index == 7){
								
							// 	check2(t,t1,l,l1,etop,eleft,t2,t_2);
							// }else if(index == 8){
								
							// 	check4(t,t1,l,l1,etop,eleft,t2);
							// }else if(index == 9){
								
							// 	check1(t,t1,l,l1,etop,eleft,t2);
							// }
							}else if(index == 5){
								
								check1(t,t1,l,l1,etop,eleft,t2);
							}else if(index == 6){
								
								check3(t,t1,l,l1,etop,eleft,t2);
							}else if(index == 7){
								
								check3(t,t1,l,l1,etop,eleft,t2);
							}else if(index == 8){
								
								check4(t,t1,l,l1,etop,eleft,t2);
							}else if(index == 9){
								
								check3(t,t1,l,l1,etop,eleft,t2);
							}
							
						}
					});
		})

// 检测是否进入投放区域
			function jian(etop,thi,eleft){
					if(etop<20.6875*nf||eleft>11.375*nf){
						alert('没放对位置哦~');
						// $(thi).css('top','')
					}else{
						$(thi).remove();
					}
			}


// 检测进入了那个区域
//			// 左上 
			function check1(t,t1,l,l1,etop,eleft,t2){
// etop>24.6875*nf&&etop<30.7465*nf
				if(etop>t&&etop<t1&&eleft<l1){
					// alert('进入')
					car+=50;
					// document.getElementsByClassName('audio_2')[0].play();
					// $('.audio_1').trigger('play');
					// Play3();
					playAudio($('.audio_2')[0]);
					$('.ling').text(car)
				}else{
					$("#errormsg_1").show(300).delay(1000).hide(300);
					document.getElementsByClassName('audio_1')[0].play();
					// Play2();
					playAudio($('.audio_1')[0]);
				}
			}

			// 右上
			function check2(t,t1,l,l1,etop,eleft,t2,t_2){

				if(etop>t_2&&etop<t2&&eleft>l1){
					// alert('进去了')
					car+=50;
					// document.getElementsByClassName('audio_2')[0].play();
					// $('.audio_1').trigger('play');
					// Play3();
					playAudio($('.audio_2')[0]);
					$('.ling').text(car)
				}else{
					$("#errormsg_1").show(300).delay(1000).hide(300);
					document.getElementsByClassName('audio_1')[0].play();
					// Play2();
					playAudio($('.audio_1')[0]);
				}
			}

			// 左下
			function check3(t,t1,l,l1,etop,eleft,t2){

				if(etop>=t1-40&&eleft<l1){
					// alert('进去了')
					car+=50;
					// document.getElementsByClassName('audio_2')[0].play();
					// $('.audio_1').trigger('play');
					// Play3();
					playAudio($('.audio_2')[0]);
					$('.ling').text(car)
				}else{
					$("#errormsg_1").show(300).delay(1000).hide(300);
					document.getElementsByClassName('audio_1')[0].play();
					// Play2();
					playAudio($('.audio_1')[0]);
				}
			}

			// 右下
			function check4(t,t1,l,l1,etop,eleft,t2){

				if(etop>t2-20&&eleft>l1){
					// alert('进去了')
					car+=50;
					// document.getElementsByClassName('audio_2')[0].play();
					// $('.audio_1').trigger('play');
					// Play3();
					playAudio($('.audio_2')[0]);
					$('.ling').text(car)
				}else{
					$("#errormsg_1").show(300).delay(1000).hide(300);
					document.getElementsByClassName('audio_1')[0].play();
					// Play2();
					playAudio($('.audio_1')[0]);
				}
			}




			// 30秒之前答完，暂停倒计时
			function stop(){
					$('.content').hide();

					var fen = $('.ling').text();

					 //判断用户是否到达300分 
					if (fen<300) {

						$('.no').fadeIn(300);

						var jf = $('.ling').text();

						$('.jf-1').text(jf);

					}else{

						$('.over').fadeIn(300);

						var jf = $('.ling').text();

						$('.jf').text(jf);

	        			var openid = $("#openid").val();
	        			var nickname = $("#nickname").val();
				        $.ajax({
				            type: "GET",
				            url: "http://www.aumantruck.com/mobile/spike_game.php?step=inser&openid="+openid+"&fen="+fen,
				            dataType: 'json',
				            success: function (result) {
				            	$('.ph').text(result.str+"%");
				            	$('.jiang').text(result.add);
				                wx.onMenuShareAppMessage({
					                title: '欧曼EST冷链之星，与你一起拯救新鲜！', // 分享标题
					                desc: nickname+'以'+fen+'分的成绩傲视群雄，你敢来挑战Ta赢取丰厚奖品吗？', // 分享描述
					                link: 'http://www.aumantruck.com/mobile/spike_game.php?', // 分享链接
					                imgUrl: 'http://www.aumantruck.com/mobile/templates/game/img/logo.jpg', // 分享图标
					                type: '', // 分享类型,music、video或link，不填默认为link
					                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					                success: function () {
					                    //alert("分享成功");
					                    // 用户确认分享后执行的回调函数
					                },
					                cancel: function () {
					                    //alert("取消成功");
					                    // 用户取消分享后执行的回调函数
					                }

					            });
				            }
				        });

					}
			}
			// 史上巨坑无比的audio
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