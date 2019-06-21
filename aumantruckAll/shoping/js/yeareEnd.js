var aa = 1,postid = 0;
var nickname = $('#nickname').val();
function orders(){
	$('.orders').show();
	$('.zz').show();
}
$('.close').click(function(){
	$('.orders').hide();
	$('.zz').hide();
})
function messages(){
	$('.messages').show();
	$('.zz').show();
}
$('.closes').click(function(){
	$('.messages').hide();
	$('.zz').hide();
})
function makes(){
	if(aa==1){
	var openid = $("#openid").val();
	var token = $("#token").val();
	$.ajax({
        type: 'POST',
        dataType:'text',
        url : '/shoping/grab.php?step=qrcode',
        data: {
        	openid:openid,
		},
		beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		},
        success: function(data){
        	draw(data);
        },
	});
			}
    aa=2;
    jump(3);
}



function callpay()
{
	if(aa == 1){

	var openid = $("#openid").val();
	var token = $("#token").val();
	var name =  $('.name').val();
	var phone =  $('.phone').val();
	var province = $(".lz1>.province").find("option:selected").text();
	var city = $(".lz1>.city").find("option:selected").text();
	var jxs = $(".lz1>.jxs").find("option:selected").text();
	var cx = $(".lz1>.cx").find("option:selected").text();
	if (name=="") {alert("请输入您的姓名");return false;}
	if (phone=="") {alert("请输入您的电话");return false;}
	var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(phone)) {
        alert("请输入正确的手机号");
        return false;
    }
	if(postid==0){
		alert('请选择神卷数量!');
		return false;
	}
	if (cx=="" || cx == '车型') {alert("请选择您的车型");return false;}
	if (province=="" || province == '请选择省份') {alert("请选择您的省份");return false;}
	if (city=="" || city == '请选择城市') {alert("请选择您的城市");return false;}
	if (jxs=="" || jxs == '请选择经销商') {alert("请选择您的经销商");return false;}
	$.ajax({
        type: 'POST',
        dataType:'json',
        url : '/shoping/grab.php?step=pay',
        data: {
        	openid:openid,
        	postid:postid,
        	name:name,
        	phone:phone,
        	province:province,
        	city:city,
        	jxs:jxs,
        	cx:cx,
		},
		beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		},
        success: function(data){
        	if(data==4){
        		alert('您已经购买5张神卷了!');
        		return false;
        	}
        	if(data==5){
        		alert('当前购买数量已超过5张神卷了!');
        		return false;
        	}
        	if (typeof WeixinJSBridge == "undefined"){
			    if( document.addEventListener ){
			        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
			    }else if (document.attachEvent){
			        document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
			        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
			    }
			}else{
			    WeixinJSBridge.invoke(
					'getBrandWCPayRequest',
					data,
					function(res){
						if(res.err_msg == "get_brand_wcpay_request:ok" ){
						     $.ajax({
						        type: 'POST',
						        dataType:'json',
						        url : '/shoping/grab.php?step=lz1',
						        data: {
						        	openid:openid,
						        	name:name,
						        	phone:phone,
						        	postid:postid,
						        	province:province,
						        	city:city,
						        	jxs:jxs,
						        	cx:cx
								},
								beforeSend: function(request) { 
									request.setRequestHeader("Authorization", token); 
								},
						        success: function(data){
						        	alert('预约成功！');
						        	$('.orders').hide();
						        	$('.zz').hide();
						        	$('.order>a').attr('onclick','jqqd()');
						        	$('.order').attr('src','shoping1/img/order_top.png');
						        }
							});
						} 	
					}
				);
			}
        }
	});
		}
    aa=2;
    jump(3);
}
// function jqqd(){
// 	alert('敬请期待！');
// }
$('.circle').each(function(i,index){
	$(this).click(function(){
		$(this).addClass('selected');
		$(this).siblings().removeClass('selected');
		$(this).attr('post-id',i+1);
		postid = $(this).attr('post-id');
	})
})
// //预约
// function tj1(){
// 	if(aa == 1){
// 		var openid = $("#openid").val();
// 		var token = $("#token").val();
// 		var name =  $('.name').val();
// 		var phone =  $('.phone').val();
// 		var cx = $(".cx").find("option:selected").text();
// 		var province = $(".province").find("option:selected").text();
// 		var city = $(".city").find("option:selected").text();
// 		if (name=="") {alert("请输入您的姓名");return false;}
// 		if (phone=="") {alert("请输入您的电话");return false;}
// 		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
// 	    if (!reg.test(phone)) {
// 	        alert("请输入正确的手机号");
// 	        return false;
// 	    }
// 		$.ajax({
// 	        type: 'POST',
// 	        dataType:'json',
// 	        url : '/shoping/grab.php?step=lz1',
// 	        data: {
// 	        	openid:openid,
// 	        	name:name,
// 	        	phone:phone,
// 	        	postid:postid,
// 	        	cx:cx,
// 	        	province:province,
// 	        	city:city,
// 			},
// 			beforeSend: function(request) { 
// 				request.setRequestHeader("Authorization", token); 
// 			},
// 	        success: function(data){
// 	        	alert('预约成功！');
// 	        }
// 		});
// 	}
//     aa=2;
//     jump(3);
// }

//留资
function tj2(){
	if(aa == 1){
		var openid = $("#openid").val();
		var token = $("#token").val();
		var names =  $('.names').val();
		var phones =  $('.phones').val();
		var provinces = $(".lz2>.province").find("option:selected").text();
		var citys = $(".lz2>.city").find("option:selected").text();
		var jxss = $(".lz2>.jxs").find("option:selected").text();
		var cxs = $(".lz2>.cx").find("option:selected").text();
		if (names=="") {alert("请输入您的姓名");return false;}
		if (phones=="") {alert("请输入您的电话");return false;}
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	    if (!reg.test(phones)) {
	        alert("请输入正确的手机号");
	        return false;
	    }
		if (cxs=="" || cxs == '车型') {alert("请选择您的车型");return false;}
		if (provinces=="" || provinces == '请选择省份') {alert("请选择您的省份");return false;}
		if (citys=="" || citys == '请选择城市') {alert("请选择您的城市");return false;}
		if (jxss=="" || jxss == '请选择经销商') {alert("请选择您的经销商");return false;}
		$.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : '/shoping/grab.php?step=lz2',
	        data: {
	        	openid:openid,
	        	names:names,
	        	phones:phones,
	        	provinces,provinces,
	        	citys,citys,
	        	jxss,jxss,
	        	cxs,cxs,
			},
			beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			},
	        success: function(data){
	        	alert('留言成功！');
	        	$('.messages').hide();
	        	$('.zz').hide();
	        }
		});
	}
    aa=2;
    jump(3);
}
var second = 0;
//图片合成
function draw(imgs,nick){
	
	var c=document.createElement('canvas');
		ct=c.getContext('2d');
		c.width=750;
		c.height=1334;
	function drawing(n){
		if(n<2){
			var img=new Image;
			img.setAttribute('crossOrigin', 'anonymous');
			if(second == 0){img.src = '/shoping/img/test.jpg';}//随机图片
			else{img.src = '/shoping/qr/'+imgs}//二维码
			img.onload=function(){
				if(second == 0){
					// ct.rect(0,0,c.width,c.height);
					ct.fillStyle='#fff';
					ct.fill(); 
					ct.drawImage(img,0,0,750,1334);
					ct.textAlign='left';
					ct.fillStyle = "#fff";  
					ct.font ="small-caps bold 35px arial";
					ct.fillText(nickname,340,900,300);
					second = 1;
				}else{
					ct.drawImage(img,300,960,180,180);
				}
				drawing(n+1);//递归
			}
		}else{
			$('.spinner').hide();
			$('.zz').hide();
			$('.bj').hide();
			$('.xz').show();
			var src = c.toDataURL("image/png",1);
			$('#screenShotImg').attr('src',src);
			$('#screenShotImg').css('display','block');
			$('#screenShotImg_1').css('display','block');
		}
	}

	drawing(0);
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

