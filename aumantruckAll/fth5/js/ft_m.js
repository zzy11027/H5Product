var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';
		var aa  = 1;
		var bb = 1;













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