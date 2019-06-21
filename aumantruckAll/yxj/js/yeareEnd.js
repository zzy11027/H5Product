$('.pri').click(function(){
	$('.swiper-containers').show();
	$('.index').hide();
	$(".s1").addClass("animated1s bounceInLeft");
})
$('.pris').click(function(){
	$('.gz').show();
})
$('.gz').click(function(){
	$(this).hide();
})
var inp1,inp2,inp3,inp4,inp5,inp6,inp3a,file,base,nickname,resps;
var se3;
var aa = 1;
//头像上传
$("#upload").change(function(){
	var finput = this.files[0];
	lrz(finput,{
		width:500,
		height:500,
		quality:0.5
	}).then(function (rst) {
		base = rst.base64;
        rst.formData.append('base64img',rst.base64);
        $('.nickpic').attr('src',base);
        $('.nickpic').show();
		// console.log(base);
    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
        // $('<img />').attr('src',rst.base64).appendTo('body');
    });
});

function tj(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		if (base==undefined) {alert("请上传行驶证!");return false;}
		var inp1 = $(".inp1").val();
		var inp2 = $(".inp2").val();
		var inp3 = $(".inp3").find("option:selected").text();
		var inp4 = $(".inp4").find("option:selected").text();
		var inp5 = $(".sel2").find("option:selected").text();
		var inp5s = $(".sel2").find("option:selected").val();
		var inp6 = $(".sel3").find("option:selected").text();
		if (inp1=="") {alert("请输入您的姓名");return false;}
		if (inp2=="") {alert("请输入您的电话");return false;}
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	    if (!reg.test(inp2)) {
	        alert("请输入正确的手机号");
	        return false;
	    }
		if (inp3=="" || inp3 == '车型') {alert("请选择您的车型");return false;}
		if (inp4=="" || inp4 == '行业') {alert("请选择您的行业");return false;}
		if (inp5=="" || inp5 == '预约门店') {alert("请选择您的预约门店");return false;}
		if (inp6=="" || inp6 == '预约时段') {alert("请选择您的预约时段");return false;}
		se3 = inp6;
		$.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : 'http://www.aumantruck.com/mobile/om_yx.php?step=info',
	        data: {
	            openid:openid,
	        	name:inp1,
	        	phone:inp2,
	        	pinpai:inp3,
	        	hangye:inp4,
	        	fwname:inp5,
	        	fwid:inp5s,
	        	time:inp6,
	        	base:base,
			},
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	console.log(data);
	        	if(data.res == 1){// 预约成功    设置下一页文字   显示预约成功弹窗
					$('.div1').text(se3);
					$('.div2').text(data.data.address);
					$('.div3').text(data.data.phone);
					$('.tan1').show();
					// $('.swiper-containers').hide();
	        	}else if(data.res == 2){//预约失败
					// $('.swiper-containers').hide();
	        		$('.tan2').show();
	        	}else if(data.res == 3){//预约失败
	        		alert('您已预约！');
					// $('.swiper-containers').hide();
					$('.div1').text(se3);
					$('.div2').text(data.data.address);
					$('.div3').text(data.data.phone);
					$('.tan1').show();
	        		// window.location.href = '';
	        	}

	        }
		});
	}
  	aa=2;
  	jump(3);
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

    function tan1(){
		$('.yes').show();
		$('.lz').hide();
		$('.tan1').hide();
    }

    function tan2(){
		window.location.href = '';
    }