//rem 改变根元素字体大小
		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';

//多次点击变量
		var aa  = 1;

//中奖的变量
		var cases;
//首页  
		$(".start").on("click",function(){
			$('.kai').hide();
			$('.two').show();
			$('.gui').show();
		});

//选定车型
		$('.xd').click(function(){
			if($('.hid').val() == ''){
				alert('请选择车型!');
				return false;
			}
			$('.two').hide();
			$('.three').show();	
		})

//规则按钮
		$('.gui').click(function(){
			$('.gz').show();
			$('.close').show();
			$('.containerss').show();
		})
//关闭
		$('.close').click(function(){
			$('.gz').hide();
			$('.close').hide();
			$('.containerss').hide();
		})
//返回
		$('.return').click(function(){
			$('.four').hide();
			$('.two').show();
		})

//返回
		$('.returns').click(function(){
			$('.four_1').hide();
			$('.two').show();
		})

//点击分享关闭
		$('.fenx').click(function(){
			$('.fenx').hide();
		})
		$('.fenxs').click(function(){
			$('.fenxs').hide();
		})
//选择车型
        $('.all>ul>li>div>img').each(function(index){
            $(this).click(function(){
            	console.log(index);
                $(this).parent().css("background-image","url(/mobile/templates/Double12/img/is.png)");
                $(this).parent().siblings().css("background-image","url()");
                $(this).parent().parent().parent().siblings().find('div').css("background-image","url()");
                $(this).parent().parent().siblings().find('div').css("background-image","url()");

                if(index == 0){
					$('.hid').val('1');
					$('.hids').val('欧曼EST');
					$('.car').attr('src','/mobile/templates/Double12/img/c1.png')                	
                }else if(index == 1){
                	$('.hid').val('2');
                	$('.hids').val('欧曼EST');

                	$('.car').attr('src','/mobile/templates/Double12/img/c2.png')
                }else if(index == 2){
                	$('.hid').val('3');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c3.png')
                }else if(index == 3){
                	$('.hid').val('4');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c4.png')
                }else if(index == 4){
                	$('.hid').val('5');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c5.png')
                }else if(index == 5){
                	$('.hid').val('6');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c6.png')
                }else if(index == 6){
                	$('.hid').val('7');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c7.png')
                }else if(index == 7){
                	$('.hid').val('8');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c8.png')
                }else if(index == 8){
                	$('.hid').val('9');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c9.png')
                }else if(index == 9){
                	$('.hid').val('10');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c10.png')
                }else if(index == 10){
                	$('.hid').val('11');
                	$('.hids').val('欧曼ETX');

                	$('.car').attr('src','/mobile/templates/Double12/img/c11.png')
                }else if(index == 11){
                	$('.hid').val('12');
                	$('.hids').val('欧曼EST');

                	$('.car').attr('src','/mobile/templates/Double12/img/c12.png')
                }else if(index == 12){
                	$('.hid').val('13');
                	$('.hids').val('欧曼EST');

                	$('.car').attr('src','/mobile/templates/Double12/img/c13.png')
                }else if(index == 13){
                	$('.hid').val('14');
                	$('.hids').val('欧曼EST');

                	$('.car').attr('src','/mobile/templates/Double12/img/c14.png')
                }else if(index == 14){
                	$('.hid').val('15');
                	$('.hids').val('欧曼EST');

                	$('.car').attr('src','/mobile/templates/Double12/img/c15.png')
                }else if(index == 15){
                	$('.hid').val('16');
                	$('.hids').val('欧曼GTL');

                	$('.car').attr('src','/mobile/templates/Double12/img/c16.png')
                }

            })
        })

// new一个转盘   对象
 		var newdraw =new turntableDraw('.drawBtn',{
			share:8,
			speed:"4s",
			velocityCurve:"ease",
			weeks:10,
			callback:function(num)
			{
				console.log(num)
				if(num == 1){
					$('.containerss').show();	
            		$('.price').show();
            		$('.price>p').text('蓝牙耳机');
				}else if(num == 2){
					$('.containerss').show();
            		$('.price').show();
            		$('.price>p').text('机油一桶');
				}else if(num == 3){
					$('.containerss').show();
            		$('.price').show();
            		$('.price>p').text('血压计');
				}else if(num == 4){
					$('.containerss').show();
            		$('.prices').show();
            		$('.prices').css("background-image","url(/mobile/templates/Double12/img/pricess.png)");
				}else if(num == 5){
					$('.containerss').show();
            		$('.prices').show();
            		$('.prices').css("background-image","url(/mobile/templates/Double12/img/prices.png)");
					var token = $("#token").val();
					var openid = $("#openid").val();
					var id = $('#id').val();
            		$.ajax({

			            type: 'POST',
			            dataType:'json',
			            url : 'http://www.aumantruck.com/mobile/om1212.php?step=address',
			            data: {
			            	openid:openid,
			            	id:id,
			            	cases:cases,
						},
						beforeSend: function(request) { 
							request.setRequestHeader("Authorization", token); 
						}, 
			            success: function(data){
			            	console.log('ok!');
			            }

	   			});
				}else if(num == 6){
					$('.containerss').show();
            		$('.price').show();
            		$('.price>p').text('腰托');
				}else if(num == 7){
					$('.containerss').show();
            		$('.no').show();
				}else if(num == 8){
					$('.containerss').show();
            		$('.price').show();
            		$('.price>p').text('抱枕');
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
		            url : 'http://www.aumantruck.com/mobile/om1212.php?step=draw',
		            data: {
		            	openid:openid,
		            	id:id,
					},
					beforeSend: function(request) { 
							request.setRequestHeader("Authorization", token); 
					}, 
		            success: function(data){
		            	
		    			switch(data){
		    				//蓝牙耳机
		    				case 1 :
		    					cases = data;
			    				newdraw.goto(1);
			    				break;
			    			//机油一桶
		    				case 4 :
		    					cases = data;
			    				newdraw.goto(2);
			    				break;
			    			//血压计
		    				case 5 :
		    					cases = data;
			    				newdraw.goto(3);
			    				break;
			    			//话费2元
		    				case 6 :
		    					cases = data;
			    				newdraw.goto(5);
			    				break;
			    			//腰托
		    				case 2 :
		    					cases = data;
			            		newdraw.goto(6);
			    				break;
			    			//谢谢参与
		    				case 7 :
			            		newdraw.goto(7);
			    				break;
			    			//抱枕
			    			case 3 :
			    				cases = data;
			            		newdraw.goto(8);
			    				break;
			    			//已经中奖了
			    			case 9 :
								$('.yj').show();
			    				break;
			    			case 10 :
								alert('请从正常渠道进入');
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
				var inp1 = $(".inp1").val();
				var inp2 = $("#selProvinces_1").find("option:selected").text();
				var inp3 = $("#selCities_1").find("option:selected").text();
				var inp4 = $("#apply_field6_1").find("option:selected").text();

				// var prov_id = $("#selProvinces_1").val();
				// var city_id = $("#selCities_1").val();
				// var agency_id = $("#apply_field6_1").val();

				var inp5 = $(".inp5").val()
				var inp6 = $(".inp6").val();
				var inp7 = $('.hid').val();
				var inp8 = $('.hids').val();
				var token = $("#token").val();
				var openid = $("#openid").val();
				console.log(inp1,inp2,inp3,inp4,inp5,inp6)
				if (inp5=="") {alert("请输入您的姓名");return false;}
				if (inp6=="") {alert("请输入您的电话");return false;}
				var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

		        if (!reg.test(inp6)) {
		            alert("请输入正确的手机号");
		            return false;
		        }

				if (inp1=="") {alert("请输入您的订车数量");return false;}
				if (inp2=="" || inp2 == '省') {alert("请选择省份");return false;}
				if (inp3=="" || inp3 == '城市') {alert("请选择城市");return false;}
				if (inp4=="" || inp4 == '经销商') {alert("请选择经销商");return false;}

				$('.spinner').show();

				$.ajax({

		            type: 'POST',
		            dataType:'json',
		            url : 'http://www.aumantruck.com/mobile/om1212.php?step=book',
		            data: {
		            	num:inp1,
		            	prov_id:inp2,
		            	city_id:inp3,
		            	agency_id:inp4,
		            	name:inp5,
		            	phone:inp6,
		            	car_id:inp7,
		            	openid:openid,
		            	cname:inp8,
		            	// prov_ids:prov_id,
		            	// city_ids:city_id,
		            	// agency_ids:agency_id,
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					}, 
		            success: function(data){
		            	$('#id').val(data.id);
		            	//没有抽到  优惠券
		            	if(data.prize == 6){
		            		$('.three').hide();
		            		$('.four_1').show();
		            	//没有抽到优惠券
		            	}else if(data.prize == 8){
		            		alert('请从正常渠道进入');
		            	}else{
		            		$('.three').hide();
		            		$('.four').show();
		            		$('.four>p').text(data.prize);
		            	}
		            	wx.onMenuShareAppMessage({
				            title: '全民狂欢，豪礼价到！', // 分享标题
				            desc: '12.12购车最高优惠1万，更有多重分享礼', // 分享描述
				            link: 'http://www.aumantruck.com/mobile/om1212.php?step=test', // 分享链接
				            imgUrl: 'http://www.aumantruck.com/mobile/templates/Double12/img/fxfx.jpg', // 分享图标
				            type: '', // 分享类型,music、video或link，不填默认为link
				            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				            success: function () {
				                $('.bj').show();
				                $('.four').hide();
				                $('.four_1').hide();
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

	        aa=2;
	        jump(3);


	    }


//抽奖留资
		$('.tj1').click(function(){
			var val = $('.price>input').val();
			var token = $("#token").val();
			var openid = $("#openid").val();
			var id = $('#id').val();
			console.log(val,token,openid,id,cases);
			if(val == ''){
				alert('请输入地址');
				return false;
			}
			$.ajax({

	            type: 'POST',
	            dataType:'json',
	            url : 'http://www.aumantruck.com/mobile/om1212.php?step=address',
	            data: {
	            	val:val,
	            	openid:openid,
	            	id:id,
	            	cases:cases,
				},
				beforeSend: function(request) { 
					request.setRequestHeader("Authorization", token); 
				}, 
	            success: function(data){
	            	alert('提交成功！');
	            	window.location.href = 'http://www.aumantruck.com/mobile/om1212.php?step=test';
	            }

	   		});
		})


    function getDistributors(goods_id){
        if(goods_id == 1){
            var prov_obj = document.getElementById("selProvinces_1");
            var prov = prov_obj.options[prov_obj.options.selectedIndex].value;
            var city_obj = document.getElementById("selCities_1");
            var city = city_obj.options[city_obj.options.selectedIndex].value;
        }

        if(city){
            $.ajax({
                type: "GET",
                url: "om1212.php?step=check_by_region&prov="+prov+"&city="+city+"&is_activity=1&goods_id="+goods_id,
                dataType: 'json',
                success: function (result) {
                    if(result.error == 1){
                        return false;
                    }
                    var content = result.content;
                    var option_html = "";
                    if(content.length>0){
                        for(var i = 0; i < content.length; i++){
                            option_html += "<option value='"+ content[i]['agency_id'] +"'>"+ content[i]['agency_name'] +"</option>";
                        }
                    }else{
                        option_html += "<option value=''>这里提不到车，去隔壁市看看吧</option>";
                    }
                    if(goods_id == 1){
                        $("#apply_field6_1").html(option_html);
                    }

                }
            });
        }

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
		var h = window.innerHeight;
		var myInput = document.getElementById('xm');
		var myInputs = document.getElementById('phone');
		myInput.addEventListener('focus',handler,false);
		myInputs.addEventListener('focus',handler,false);
		function handler(){
			// $('body').height(h);
 　　		//$('body').height($('body')[0].clientHeight);
		}


		// 限制input  输入内容
		$('.inp1').bind('input propertychange', function() {

       		if($('.inp1').val().length == 1){

       			document.getElementById("inp_1").value=document.getElementById("inp_1").value.replace(/[^1-9]/g,'')
       		}else{
       			document.getElementById("inp_1").value=document.getElementById("inp_1").value.replace(/\D/g,'')
       		}
       		

		});