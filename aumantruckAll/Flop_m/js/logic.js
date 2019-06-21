function clickFun(){
	$('.but').click(function(){
		var name =  $('#name').val();
	    var phone =  $('#phone').val();
	    var prov = $('#prov').val();
	    var city = $('#city').val();
	    var jxs = $('#jxs').val();
	    var cx = $('#cx').val();
	    var openid = $('#openid').val();
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
	    if(prov == ''){
	        alert("请选择您的省份!");
	        return false;
	    }
	    if(city == ''){
	        alert("请选择您的城市!");
	        return false;
	    }
	    if(jxs == ''){
	        alert("请选择您的经销商!");
	        return false;
	    }
	    if(cx == ''){
	        alert("请输入您的意向车型!");
	        return false;
	    }
	    var json = {
	    	name:name,
	    	phone:phone,
	    	prov:prov,
	    	city:city,
	    	jxs:jxs,
	    	cx:cx,
	    	openid:openid
	    }
		getData("", null,json);//留资
	})

	$('.container1 img').click(function(){
		var openid = $('#openid').val();
		var index = $(this).index();
		var json = {
			openid:openid,
		}
		getData("", index,json);//抽奖
	})

	$('.container2 img').click(function(){
		var isShare = $('#isShare').val();
		if(isShare){
			$('.prize>img').attr({
				'src':'./images/10tan.png',
			})
			$('.prize').show();
			$('.mask').show();
			$('.container2>img').eq($('.container2 img').index($(this))).attr({
				'src':'./images/10yuan.png',
			})
		}else{
			alert('请分享好友帮忙哦~');
		}
	})

	$('.prize_left').click(function(){
		$(this).parent().hide();
		$('.mask').hide();
	})

	$('.prize_right').click(function(){
		alert('12')
		console.log(wx.miniProgram.navigateTo)
		wx.miniProgram.navigateTo({url: '/path/to/page'})
	})

	$('.img12').click(function(){
		$('.lzs').show();
		$('.mask').show();
	})

	$('.close').click(function(){
		$('.lzs').hide();
		$('.mask').hide();
	})
}
function getData(dateurl, callback, json) {
	var token = $('#token').val();
	$.ajax({
		type: "POST",
		dataType: "jsonp",
		url: dateurl,
		data:json,
    	beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
		success: function(data) {
			// callback(data);
			if(callback != null){
				$('.prize>img').attr({
					'src':'./images/10tan.png',
				})
				$('.prize').show();
				$('.mask').show();
				$('.container1>img').eq(callback).attr({
					'src':'./images/10yuan.png',
				})
			}
		},
		error: function(e) {
			console.log(e);
		}
	});

};
function inputBug(){
	// 适配华为键盘影响布局的问题
	var h = window.innerHeight;
	var myInput = document.getElementById('name');
	var myInputs = document.getElementById('phone');
	myInput.addEventListener('focus',handler,false);
	myInputs.addEventListener('focus',handlers,false);
	function handler(){
		$('body').height(h);
	}
	function handlers(){
	    $('body').height(h);
	}
}
function init() {

	clickFun();
	inputBug();
};
$(function() {
	init();
})