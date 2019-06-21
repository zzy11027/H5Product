		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';
		var aa  = 1;
		var bb = 1;
		var resps;var respsa;
		//人机验证  第一页
		function getResponse(resp){
		     console.log(resp);  // resp 即验证成功后获取的值
		     resps = resp;
		}
		//人机验证  第三页
		function getResponsea(resp){
		     console.log(resp);  // resp 即验证成功后获取的值
		     respsa = resp;
		}
		// 首页第一个按钮
		$('.but1').click(function(){
			$('.index').hide();
			$('.two').show();
		})
		//首页第二个按钮
		$('.but2').click(function(){
			$('.index').hide();
			$('.three').show();
		})
		//首页第三个按钮
		$('.but3').click(function(){
			alert('大年三十，敬请期待！');
			// $('.index').hide();
			// $('.four').show();
		})
		//第四页中按钮
		$('.but4').click(function(){
			$('.form3').show();
			$('.containerss').show();
		})
		//转盘按钮
		$('.zi').click(function(){
			$('.containerss').show();
			$('.form1').show();
		})
		//返回
		$('.return').click(function(){
			$('.two').hide();
			$('.three').hide();
			$('.three').hide();
			$('.four').hide();
			$('.containerss').hide();
			$('.succs').hide();
			$('.form1').hide();
			$('.index').show();
		})
		//关闭按钮
		$('.form1>.close').click(function(){
			$('.form1').hide();
			$('.containerss').hide();
		})
		//关闭按钮
		$('.form3>.close').click(function(){
			$('.form3').hide();
			$('.containerss').hide();
		})
		//新用户留资   +   抽奖
		function tj1(){
			if(aa == 1){
			var inp1 = $(".inp1").val();
			var inp2 = $(".inp2").val();
			var inp3 = $(".inp3").find("option:selected").val();
			var cx = $(".inp3").find("option:selected").text();
			var inp4 = $(".inp4").find("option:selected").text();
			var inp5 = $(".inp5").find("option:selected").text();
			var inp6 = $(".inp6").find("option:selected").text();
			var inp7 = $(".inp7").val();
			if (inp1=="") {alert("请输入您的姓名");return false;}
			if (inp2=="") {alert("请输入您的电话");return false;}
			var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	        if (!reg.test(inp2)) {
	            alert("请输入正确的手机号");
	            return false;
	        }
			if (inp3=="" || inp3 == '请选择车型') {alert("请输入车型");return false;}
			if (inp4=="" || inp4 == '请选择省份') {alert("请选择省份");return false;}
			if (inp5=="" || inp5 == '请选择城市') {alert("请选择城市");return false;}
			if (inp6=="" || inp6 == '请选择经销商') {alert("请选择经销商");return false;}
			if(resps == undefined || resps == ''){alert('请输入图片验证码！');return false;}
			$('.form1').hide();
			$('.containerss').hide();
			$.ajax({
	            type: 'POST',
	            dataType:'json',
	            url : 'http://www.aumantruck.com/mobile/om_zdp.php?step=book',
	            data: {
	            	name:inp1,
	            	phone:inp2,
	            	car_id:inp3,
	            	prov_name:inp4,
	            	city_name:inp5,
	            	dealer_name:inp6,
					code:resps,
	            	cx:cx,
	            	other:'',
	            	type:1,
				},
	            success: function(data){
	            	// $('.return').remove();
	            	console.log(typeof data.res);
	    			if(data.res == 9){
	    				newdraw.goto(8,1);
	    			}
	    			else if(data.res == 10){
						$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/again.png)');
						$('.succs').show();
						$('.containerss').show();
	    			}
	    			else if(data.res == 13){
	    				alert('验证码超时！');
	    				window.location.href = 'http://www.aumantruck.com/mobile/om_zdp.php';
	    			}
	    			else if(data.res == 12){
	    				alert('短信验证超过三次，可直接提交！');
	    			}
	    			else if(data.res === '5000元油卡'){
	    				newdraw.goto(1);
	    			}
	    			else if(data.res === '1000元油卡'){
	    				newdraw.goto(4);
	    			}
	    			else if(data.res === '1088购车劵'){
	    				newdraw.goto(3);
	    			}
	    			else if(data.res === '爱奇艺月卡'){
	    				newdraw.goto(2);
	    			}
	            }
	   		});
	   		}
	        aa=2;
	        jump(3);
		}
		// new一个转盘   对象
 		var newdraw =new turntableDraw('.drawBtn',{
			share:8,
			speed:"4s",
			velocityCurve:"ease",
			weeks:10,
			callback:function(num,n)
			{
				console.log(num,n)
				// $('html,body').addClass('ovfHiden');
				// $('html,body').animate({scrollTop:0},'10');
				if(num == 8){//未中奖
    				$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/fail.png)');
    				$('.succs').show();
    				$('.containerss').show();
				}else if(num == 1){//5000元油卡
    				$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
    				$('.succs').show();
    				$('.containerss').show();
            		$('.succs>span').text('5000元油卡');
				}else if(num == 4){//1000元油卡
    				$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
    				$('.succs').show();
    				$('.containerss').show();
            		$('.succs>span').text('1000元油卡');
				}else if(num == 3){//1088购车券
    				$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
    				$('.succs').show();
    				$('.containerss').show();
            		$('.succs>span').text('1088购车券');
				}else if(num == 2){//爱奇艺月卡
    				$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/jhm.png)');
    				$('.succs').show();
    				$('.containerss').show();
            		$('.succs>span').text('');
				}
			},
		});

		//老用户留资   +   抽奖  
		var other;
		function tj2(){
			if(aa == 1){
			var inp1 = $(".inp1s").val();
			var inp2 = $(".inp2s").val();
			var inp3 = $(".inp3s").find("option:selected").text();
			var inp4 = $(".inp4s").find("option:selected").text();
			var inp5 = $(".inp5s").find("option:selected").text();
			var inp6 = $(".inp6s").val();
			if (inp1=="") {alert("请输入您的姓名");return false;}
			if (inp2=="") {alert("请输入您的电话");return false;}
			var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	        if (!reg.test(inp2)) {
	            alert("请输入正确的手机号");
	            return false;
	        }
			if (inp3=="" || inp3 == '请选择省份') {alert("请选择省份");return false;}
			if (inp4=="" || inp4 == '请选择城市') {alert("请选择城市");return false;}
			if (inp5=="" || inp5 == '请选择经销商') {alert("请选择经销商");return false;}
			if(state != 10){if (inp6=="" || inp6 == '请输入验证码') {alert("请输入验证码");return false;}}
			$.ajax({
	            type: 'POST',
	            dataType:'json',
	            url : 'http://www.aumantruck.com/mobile/om_zdp.php?step=book',
	            data: {
	            	name:inp1,
	            	phone:inp2,
	            	prov_name:inp3,
	            	city_name:inp4,
	            	dealer_name:inp5,
	            	code:inp6,
	            	cx:'',
	            	car_id:'',
	            	other:other,
	            	type:2,
				},
	            success: function(data){
	            	// $('.return').remove();
					$('.containerss').show();
	            	console.log(data);
	            	switch(data.res){
	    				case 9 ://未中奖
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/fail.png)');
							$('.succs').show();
		    				break;
	    				case 10 ://已经抽过
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/again.png)');
							$('.succs').show();
		    				break;
	    				case 13 ://验证码超时
		    				alert('短信验证码超时！');
		    				break;
	    				case 11 ://短信验证码错误
		    				alert('短信验证码错误！');
		    				break;
						case 12 ://短信验证超过三次
		    				alert('短信验证超过三次，可直接提交！');
		    				break;
		    			case '1088购车劵':
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
							$('.succs').show();
							$('.succs>span').text('1088购车券');
		    				break;
		    			case '爱奇艺月卡':
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/jhm.png)');
							$('.succs').show();
							$('.succs>span').text('爱奇艺月卡');
		    				break;
		    			default:
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/yhm.png)');
							$('.succs').show();
							$('.succs>span').text(data.res.name);
	    			}
	            }
	   		});
	   		}
	        aa=2;
	        jump(3);
		}


		//视频页   +   抽奖
		function tj3(){
			if(aa == 1){
			var inp1 = $(".inp1a").val();
			var inp2 = $(".inp2a").val();
			if (inp1=="") {alert("请输入您的姓名");return false;}
			if (inp2=="") {alert("请输入您的电话");return false;}
			var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	        if (!reg.test(inp2)) {
	            alert("请输入正确的手机号");
	            return false;
	        }
			if(respsa == undefined || respsa == ''){alert('请输入图片验证码！');return false;}
			$.ajax({
	            type: 'POST',
	            dataType:'json',
	            url : 'http://www.aumantruck.com/mobile/om_zdp.php?step=book',
	            data: {
	            	name:inp1,
	            	phone:inp2,
	            	prov_name:'',
	            	city_name:'',
	            	dealer_name:'',
	            	code:respsa,
	            	cx:'',
	            	car_id:'',
	            	other:'other',
	            	type:3,
				},
	            success: function(data){
	            	// $('.return').remove();
					$('.containerss').show();
	            	console.log(data);
	            	switch(data.res){
	    				case 9 ://未中奖
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/fail.png)');
							$('.form3').hide();
							$('.succs').show();
		    				break;
		    			//
	    				case 10 ://已经抽过
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/again.png)');
							$('.form3').hide();
							$('.succs').show();
		    				break;
	    				case 13 ://验证码超时
		    				alert('短信验证码超时！');
		    				break;
	    				case 11 ://短信验证码错误
		    				alert('短信验证码错误！');
		    				break;
						case 12 ://短信验证超过三次
		    				alert('短信验证超过三次，可直接提交！');
		    				break;
		    			case '88元话费':
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
							$('.succs').show();
							$('.form3').hide();
							$('.succs>span').text('88元话费');
		    				break;
		    			case '8元话费':
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
							$('.succs').show();
							$('.form3').hide();
							$('.succs>span').text('8元话费');
		    				break;
		    			case '5元话费':
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
							$('.succs').show();
							$('.form3').hide();
							$('.succs>span').text('5元话费');
		    				break;
		    			case '2元话费':
							$('.succs').css('background-image','url(/mobile/templates/newYearbuyCar/img/price.png)');
							$('.succs').show();
							$('.form3').hide();
							$('.succs>span').text('2元话费');
		    				break;
	    			}
	            }
	   		});
	   		}
	        aa=2;
	        jump(3);
		}

 	//省市经销商
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
                url: "cjdz5.php?step=check_by_region&prov="+prov+"&city="+city+"&is_activity=1&goods_id="+goods_id,
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

  	function getDistributors1(goods_id){
        if(goods_id == 1){
            var prov_obj = document.getElementById("selProvinces_2");
            var prov = prov_obj.options[prov_obj.options.selectedIndex].value;
            var city_obj = document.getElementById("selCities_2");
            var city = city_obj.options[city_obj.options.selectedIndex].value;
        }
        if(city){
            $.ajax({
                type: "GET",
                url: "cjdz5.php?step=check_by_region&prov="+prov+"&city="+city+"&is_activity=1&goods_id="+goods_id,
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
                        $("#apply_field6_2").html(option_html);
                    }

                }
            });
        }

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