if($('#openid').val() == 'o_5dHxJM1hetrec1RYwAbtSU_H8g'){
	$('.yes').show();
	$('.index').hide();
	$('.Catalog').hide();
	$('.bj3').show();
}
var aa = 1;
var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
// dom操作
$('.index').click(function(){
	$('.index').hide();
	$('.Catalog').show();
	$('body').css('background','#508034');
})

function Repurchases(){
	var token = $("#token").val();
	var openid = $("#openid").val();
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://al.douyar.cc/ol/ol_country.php?step=nav',
        data: {
            openid:openid,
            nav:1,
        },
    	beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
        success: function(data){
        	if(data.res){
        		$('#id').val(data.res);
        	}
			$('.bj1').show();
			$('.Catalog').hide();
        }
    });
}
function buycars(){
	var token = $("#token").val();
	var openid = $("#openid").val();
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://al.douyar.cc/ol/ol_country.php?step=nav',
        data: {
            openid:openid,
            nav:2,
        },
    	beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
        success: function(data){
        	if(data.res){
				$('.bj2').show();
				$('.Catalog').hide();
				$('#id').val(data.res);
        	}
        }
    });
}
function luckys(){
	var token = $("#token").val();
	var openid = $("#openid").val();
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://al.douyar.cc/ol/ol_country.php?step=nav',
        data: {
            openid:openid,
            nav:3
        },
    	beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
        success: function(data){
        	console.log(data.res.res,data);
        	if(data.res.res == 11){
        		alert('您已经抽过奖了哦~');
        	}else if(data.res.res == 12){
        		$('#id').val(data.res.id);
				$('.bj3').show();
				$('.yes').show();
				$('.yes>p').text(data.res.prize);
				$('.Catalog').hide();
        	}else if(data.res.res == 15){
        		alert('您已中过奖了，下次再来哦~');
        	}
        	else{
        		$('#id').val(data.res.id);
				$('.bj3').show();
				$('.Catalog').hide();
        	}
        }
    });
}
function jshops(){
	window.location.href = 'https://czyl.foton.com.cn/shareCars/activity/bespeakCar190312/index.html';
}
function cares(){
	var token = $("#token").val();
	var openid = $("#openid").val();
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://al.douyar.cc/ol/ol_country.php?step=nav',
        data: {
            openid:openid,
            nav:5,
        },
    	beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
        success: function(data){
        	if(data.res == 10){
        		$('.tj4').hide();
        		$('.tj5').show();
				$('.bj5').show();
				$('.Catalog').hide();
				$('.lq').hide();
				$('.zz').hide();
        	}else{
        		$('#id').val(data.res);
				$('.bj5').show();
				$('.Catalog').hide();
				$('.lq').hide();
				$('.zz').hide();
        	}
        	
        }
    });
}
var olcx;
function car1s(s){
	$('.bj2s').show();
	$('.bj2s>.Coupon').attr('src','/templates/ol/olFiveRites/img/8000.png');
	olcx = s;
}
function car2s(s){
	$('.bj2s').show();
	$('.bj2s>.Coupon').attr('src','/templates/ol/olFiveRites/img/15000.png');
	olcx = s;
}
function car3s(s){
	$('.bj2s').show();
	$('.bj2s>.Coupon').attr('src','/templates/ol/olFiveRites/img/12000.png');
	olcx = s;
}
function tj1(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var id = $("#id").val();
		var name =  $('.name').val();
	    var phone =  $('.phone').val();
	    var province = $(".province").find("option:selected").text();
	    var city = $(".city").find("option:selected").text();
	    if(name == ''){
	        alert("请输入您的姓名!");
	        return false;
	    }
	    if(phone == ''){
	        alert("请输入您的电话!");
	        return false;
	    }
	    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	    if (!reg.test(phone)) {
	        alert("请输入正确的手机号!");
	        return false;
	    }
	    if (province=="" || province == '请选择省份') {alert("请选择省份");return false;}
		if (city=="" || city == '请选择城市') {alert("请选择城市");return false;}
	    $.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : 'http://al.douyar.cc/ol/ol_country.php?step=info',
	        data: {
	            openid:openid,
	            id:id,
	            name:name,
	            phone:phone,
	            prov:province,
	            city:city,
	            nav:1,
	            cx:''
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	if(data.res){
	        		$('.success').show();
	        		$('.zz').show();
	        	}
	        	
	        }
	    });		
	}
	aa=2;
	jump(3);	
}
function tj2(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var id = $("#id").val();
		var names =  $('.names').val();
	    var phones =  $('.phones').val();
	    var provinces = $(".provinces").find("option:selected").text();
	    var citys = $(".citys").find("option:selected").text();
	    if(names == ''){
	        alert("请输入您的姓名!");
	        return false;
	    }
	    if(phones == ''){
	        alert("请输入您的电话!");
	        return false;
	    }
	    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	    if (!reg.test(phones)) {
	        alert("请输入正确的手机号!");
	        return false;
	    }
	    if (provinces=="" || provinces == '请选择省份') {alert("请选择省份");return false;}
		if (citys=="" || citys == '请选择城市') {alert("请选择城市");return false;}
	    $.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : 'http://al.douyar.cc/ol/ol_country.php?step=info',
	        data: {
	            openid:openid,
	            id:id,
	            name:names,
	            phone:phones,
	            prov:provinces,
	            city:citys,
	            cx:olcx,
	            nav:2
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	$('.success').show();
	        	$('.zz').show();
	        }
	    });		
	}
	aa=2;
	jump(3);	
}
function egg(num){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var id = $("#id").val();
		$('.Hammer'+num+'s').addClass('frames');
		$('.egg'+num+'s').siblings().removeAttr('onclick');
		$('.egg'+num+'s').removeAttr('onclick');
		setTimeout(function(){
    		$('.egg'+num+'s').attr('src','/templates/ol/olFiveRites/img/eggs.png');
			$('.egg'+num+'s').css({'width':'29%','height':'16%'});
		},500)
	    $.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : 'http://al.douyar.cc/ol/ol_country.php?step=prize',
	        data: {
	            id:id,
	            openid:openid,
	            nav:3,
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	setTimeout(function(){
					$('.Hammer'+num+'s').removeClass('frames');
					$('.Hammer'+num+'s').hide();
		        	//中奖了
		        	if(data.res == 1){
		        		$('.yes').show();
		        		$('.yes>p').text('液晶电视');
		        		$('.zz').show();
		        	}else if(data.res == 2){
		        		$('.yes>p').text('全自动洗衣机');
		        		$('.zz').show();
		        		$('.yes').show();
		        	}else if(data.res == 3){
		        		$('.yes>p').text('扫地机器人');
		        		$('.zz').show();
		        		$('.yes').show();
		        	}else if(data.res == 4){
		        		$('.yes-1>p').text('50元话费');
		        		$('.zz').show();
		        		$('.yes-1').show();
		        	}else if(data.res == 5){
		        		$('.yes>p').text('10万元以下任意车型半价');
		        		$('.zz').show();
		        		$('.yes').show();
		        	//未中奖
		        	}else if(data.res == 9){
		        		$('.no').show();
		        		$('.zz').show();
		        	}else if(data.res == 10){
		        		$('.yijing').show();
		        		$('.zz').show();
		        	}	        		
	        	},1000)
	        }
	    });	
}
var base,bases;
$("#upload").change(function(){
	var finput = this.files[0];
	lrz(finput,{
		width:500,
		height:500,
		quality:0.8
	}).then(function (rst) {
		base = rst.base64;
        rst.formData.append('base64img',rst.base64);
        $('.pic>img').attr('src',base);
        $('.pic>img').show();
        $('.upload1').text('已上传！');
    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
        // $('<img />').attr('src',rst.base64).appendTo('body');
    });
});

$("#upload2").change(function(){
	var finput = this.files[0];
	lrz(finput,{
		width:500,
		height:500,
		quality:0.8
	}).then(function (rst) {
		bases = rst.base64;
        rst.formData.append('base64img',rst.base64);
        $('.pic>img').attr('src',base);
        $('.pic>img').show();
        $('.upload2').text('已上传！');
    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
        // $('<img />').attr('src',rst.base64).appendTo('body');
    });
});
function tj3(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var id = $("#id").val();
		var name1 =  $('.name1').val();
	    var phone1 =  $('.phone1').val();
	    var shdz = $('.shdz').val();//收货地址
	    var vin = $('.vin').val();//VIN码
	    var nav = 3;
	    var cx = $(".cx").find("option:selected").text();//车型
	    if(name1 == ''){
	        alert("请输入您的姓名!");
	        return false;
	    }
	    if(phone1 == ''){
	        alert("请输入您的电话!");
	        return false;
	    }
	    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	    if (!reg.test(phone1)) {
	        alert("请输入正确的手机号!");
	        return false;
	    }
	    if(shdz == ''){
	        alert("请输入您的收货地址!");
	        return false;
	    }
	    if(vin == ''){
	        alert("请输入您的新购车vin码!");
	        return false;
	    }
	    if (cx=="" || cx == '请选择您前一辆车车型') {alert("请选择您前一辆车车型");return false;}
	    if (base==undefined) {alert("请上传您的购车发票!");return false;}
	    $.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : 'http://al.douyar.cc/ol/ol_country.php?step=info',
	        data: {
	            openid:openid,
	            id:id,
	            name:name1,
	            phone:phone1,
	            shdz:shdz,//收货地址
	            vin:vin,
	            nav:nav,
	            cx:cx,
	            base:base,
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	if(data.res == true){
	        	$('.yes-1').hide();
	        	$('.yes').hide();
	        	$('.success').show();
	        	$('.zz').show();
	        }
	    	}
	    });		
	}
	aa=2;
	jump(3);	
}
var file = document.getElementById('upload');
if (getIos()) {
    file.removeAttribute("capture");
}
function getIos() {
    var ua=navigator.userAgent.toLowerCase();
    if (ua.match(/iPhone\sOS/i) == "iphone os") {
        return true;
    } else {
        return false;
    }
}
function tj4(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var id = $("#id").val();
		$.ajax({
		    type: 'POST',
		    dataType:'json',
		    url : 'http://al.douyar.cc/ol/ol_country.php?step=card',
		    data: {
		        openid:openid,
		        id:id,
		        nav:5
		    },
			beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
		    success: function(data){
		    	$('.lq').show();
		    	$('.zz').show();
		    }
		});
	}
	aa=2;
	jump(3);
}
function jump(count) { 
	window.setTimeout(function(){ 
		count--; 
		if(count > 0) { 
			jump(count); 
		}else{ 
			aa=1; 
			} 
	}, 2000); 
} 
//省市联动
function getCitys(){
    var provincesobj=document.getElementById("province");
    var cityobj=document.getElementById("city");
    var index=provincesobj.selectedIndex;
    var value=provincesobj[index].value;;
    var cityName=cityArr[value];
    cityobj.length=1;
    for(var i=1;i<cityArr[value].length;i++){
        cityobj.options[cityobj.options.length]=new Option(cityName[i],i);
    }
}
//省市联动
function getCity(){
    var provincesobj=document.getElementById("provinces");
    var cityobj=document.getElementById("citys");
    var index=provincesobj.selectedIndex;
    var value=provincesobj[index].value;;
    var cityName=cityArr[value];
    cityobj.length=1;
    for(var i=1;i<cityArr[value].length;i++){
        cityobj.options[cityobj.options.length]=new Option(cityName[i],i);
    }
}


function tj5s(){
	$('.bj5').hide();
	$('.bj3').hide();
	$('.bj1').hide();
	$('.bj2').hide();
	$('.Catalog').show();
	$('.zz').hide();
	$('.success').hide();
	$('.yijing').hide();
	$('.no').hide();
	$('.yes').hide();
}

$('.returns').click(function(){
	$('.bj2s').hide();
	$('.bj2').show();
})
$('.returnss').click(function(){
	$('.bj1').hide();
	$('.Catalog').show();
})
$('.returnsss').click(function(){
	$('.bj2').hide();
	$('.Catalog').show();
})

function tj3s(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var id = $("#id").val();
		var name1 =  $('.name2').val();
	    var phone1 =  $('.phone2').val();
	    var shdz = $('.shdz').val();//收货地址
	    var vin = $('.vin2').val();//VIN码
	    var nav = 3;
	    var cx = $(".cx2").find("option:selected").text();//车型
	    if(name1 == ''){
	        alert("请输入您的姓名!");
	        return false;
	    }
	    if(phone1 == ''){
	        alert("请输入您的电话!");
	        return false;
	    }
	    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	    if (!reg.test(phone1)) {
	        alert("请输入正确的手机号!");
	        return false;
	    }
	    // if(shdz == ''){
	    //     alert("请输入您的收货地址!");
	    //     return false;
	    // }
	    if(vin == ''){
	        alert("请输入您的新购车vin码!");
	        return false;
	    }
	    if (cx=="" || cx == '请选择您前一辆车车型') {alert("请选择您前一辆车车型");return false;}
	    if (bases==undefined) {alert("请上传您的购车发票!");return false;}
	    $.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : 'http://al.douyar.cc/ol/ol_country.php?step=info',
	        data: {
	            openid:openid,
	            id:id,
	            name:name1,
	            phone:phone1,
	            shdz:'',//收货地址
	            vin:vin,
	            nav:nav,
	            cx:cx,
	            base:bases,
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	if(data.res == true){
	        	$('.success').show();
	        	$('.yes').hide();
	        	$('.yes-1').hide();
	        	$('.zz').show();
	        }
	    	}
	    });		
	}
	aa=2;
	jump(3);	
}