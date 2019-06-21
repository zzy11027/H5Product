

		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';


		function show(){
			$('.con').show();
			$('.containerss').show();
		}

		function shows(){
			$('.con').hide();
			$('.containerss').hide();
		}


		//多次点击变量
		var aa  = 1;


		//留资.....................................
		function tj(){
			if(aa == 1){
				var inp_1 = $("#selects1  option:selected").val();
				var inp_2 = $("#selects2  option:selected").val();
				var inp_3 = $("#selects3  option:selected").val();
				var inp_4 = $("#selects4  option:selected").val();
				var inp_5 = $("#selects5  option:selected").val();
				var inp_6 = $(".inp8").val();
				var inp_7 = $(".inp9").val();
				if (inp_6=="") {alert("请输入您的姓名");return false;}
				if (inp_7=="") {alert("请输入您的电话");return false;}
				if (inp_1=="省份") {alert("请选择省份");return false;}
				if (inp_2=="城市") {alert("请选择城市");return false;}
				if (inp_3=="品牌") {alert("请选择品牌");return false;}
				if (inp_4=="车系") {alert("请选择车系");return false;}
				if (inp_5=="经销商") {alert("请选择经销商");return false;}
				// console.log(inp_1,inp_2,inp_3,inp_4,inp_5,inp_6,inp_7);

				var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		        if (!reg.test(inp_7)) {
		            alert("请输入正确的手机号");
		            return false;
		        }

				$.ajax({

		            type: 'POST',
		            dataType:'json',
		            url : 'http://zr.douyar.cc/?step=info',
		            data: {
		            	provinceid:inp_1,
		            	cityid:inp_2,
		            	brandid:inp_3,
		            	seriesid:inp_4,
		            	dealerid:inp_5,
		            	name:inp_6,
		            	tel:inp_7,
					},
		            success: function(data){
	            		if(data.status == 0){
	            			alert('提交成功！');
	            			window.location.href = 'http://zr.douyar.cc/';
	            		}else if(data.status == 1){
	            			alert('提交失败！');
	            			window.location.href = 'http://zr.douyar.cc/';
	            		}else{
	            			alert(data.data);
	            			window.location.href = 'http://zr.douyar.cc/';
	            		}
		            }
		   		});

	   		}

	        aa=2;
	        jump(3);

		}

		$(function () {
					$.ajax({
						url : 'http://h5.homenev.com/php/index.php?c=FotonApiJsonp&a=GetProvince',
			            type: 'POST',
			            dataType: "jsonp",
			            jsonp: "callback",
			            data: {
			            	keyvalue:'20181217-fotondmp-58',
						},
			            success: function(data){
			            	var str = eval('(' + data + ')');
			            	var result = str.data.filter(function(item){ return item.id != 2});
							var results = result.filter(function(items){ return items.id != 30});
							console.log(results);
							var quname_html = "<option value='省份'>省份</option>";

		                    for(var i = 0; i < results.length; i++){
		                        quname_html += "<option value='"+ results[i].id+"'>"+ results[i].provinceName +"</option>";
		                    }


		                	$(".inp1").html(quname_html);
			            }

				   	});
		 });

	    //省份
	    function change1(){
	    	var inp_1 = $("#selects1  option:selected").val();
	    	if (inp_1=="省份") {alert("请选择省份");return false;}
	    	console.log(inp_1);
			$.ajax({
				url : 'http://h5.homenev.com/php/index.php?c=FotonApiJsonp&a=GetCity',
	            type: 'POST',
	            dataType: "jsonp",
	            jsonp: "callback",
	            data: {
	            	provinceid:inp_1,
	            	keyvalue:'20181217-fotondmp-58',
				},
	            success: function(data){
	            	var str = eval('(' + data + ')');
					var quname_html = "<option value='城市'>城市</option>";

                    for(var i = 0; i < str.data.length; i++){
                        quname_html += "<option value='"+ str.data[i].id+"'>"+ str.data[i].cityName +"</option>";
                    }


                	$(".inp2").html(quname_html);
	            }

		   	});
	    }


	    //城市
	    function change2(){
	    	var inp_1 = $("#selects2  option:selected").val();
	    	if (inp_1=="城市") {alert("请选择城市");return false;}
	    	console.log(inp_1);
			$.ajax({
				url : 'http://h5.homenev.com/php/index.php?c=FotonApiJsonp&a=GetBrand',
	            type: 'POST',
	            dataType: "jsonp",
	            jsonp: "callback",
	            data: {
	            	keyvalue:'20181217-fotondmp-58',
				},
	            success: function(data){
	            	var str = eval('(' + data + ')');
	            	console.log(str);
					var quname_html = "<option value='品牌'>品牌</option>";

                    for(var i = 0; i < str.data.length; i++){
                        quname_html += "<option value='"+ str.data[i].id+"'>"+ str.data[i].brandName +"</option>";
                    }


                	$(".inp3").html(quname_html);
	            }

		   	});
	    }


	    //品牌
	    function change3(){
	    	var inp_1 = $("#selects3  option:selected").val();
	    	if (inp_1=="城市") {alert("请选择城市");return false;}
	    	console.log(inp_1);
			$.ajax({
				url : 'http://h5.homenev.com/php/index.php?c=FotonApiJsonp&a=GetCarSeries',
	            type: 'POST',
	            dataType: "jsonp",
	            jsonp: "callback",
	            data: {
	            	brandid:inp_1,
	            	keyvalue:'20181217-fotondmp-58',
				},
	            success: function(data){
	            	var str = eval('(' + data + ')');
	            	console.log(str);
					var quname_html = "<option value='车系'>车系</option>";

                    for(var i = 0; i < str.data.length; i++){
                        quname_html += "<option value='"+ str.data[i].id+"'>"+ str.data[i].seriesName +"</option>";
                    }


                	$(".inp5").html(quname_html);
	            }

		   	});
	    }


	    //车系
	    function change4(){
	    	var inp_1 = $("#selects1  option:selected").val();
	    	var inp_2 = $("#selects2  option:selected").val();
	    	var inp_3 = $("#selects3  option:selected").val();
	    	var inp_4 = $("#selects4  option:selected").val();
	    	console.log(inp_1,inp_2,inp_3,inp_4);
			$.ajax({
				url : 'http://h5.homenev.com/php/index.php?c=FotonApiJsonp&a=GetDealer',
	            type: 'POST',
	            dataType: "jsonp",
	            jsonp: "callback",
	            data: {
	            	provinceid:inp_1,
	            	cityid:inp_2,
	            	keyvalue:'20181217-fotondmp-58',
				},
	            success: function(data){
	            	var str = eval('(' + data + ')');
	            	console.log(str);
					var quname_html = "<option value='经销商'>经销商</option>";

					if(str.data.length>0){

	                    for(var i = 0; i < str.data.length; i++){
	                        quname_html += "<option value='"+ str.data[i].id+"'>"+ str.data[i].dealerName +"</option>";
	                    }
	                }else{
	                	quname_html += "<option value=''>这里提不到车，去隔壁市看看吧</option>";
	                }

                	$(".inp6").html(quname_html);
	            }

		   	});
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