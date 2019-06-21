var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
var arr = ['/mobile/templates/festival/img/1.png','/mobile/templates/festival/img/2.png','/mobile/templates/festival/img/3.png','/mobile/templates/festival/img/4.png','/mobile/templates/festival/img/5.png','/mobile/templates/festival/img/6.png','/mobile/templates/festival/img/7.png','/mobile/templates/festival/img/8.png','/mobile/templates/festival/img/9.png','/mobile/templates/festival/img/10.png'];
var is = true;//禁止多次点击
var num;//记录随机图片名称
var alltrue = [];//判断是否都正确
var aa = 1;
//首页
$('.gz').click(function(){
	$('.gz_con').show();
	$('.container').show();
	$('.open').show();
	$('.close').show();
})
$('.close').click(function(){
	$('.gz_con').hide();
	$('.container').hide();
	$('.open').hide();
	$('.close').hide();
})
$('.fx').click(function(){
	$('.fxs').show();
})
$('.fxs').click(function(){
	$('.fxs').hide();
})
$('.chou').click(function(){
	var names =  $('#name').val();
	var openid = $('#openid').val();
	var token = $('#token').val();
	if(names == ''){
		$('.container').show();
		$('.lz').show();
	}else{
        $.ajax({
            type: 'POST',
            dataType:'json',
            url : '/mobile/choice.php?step=prize',
            data: {
                openid:openid,
            },
        	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
            success: function(data){
            	console.log(data);
            	if(data.res == 1){
            		$('.prize').show();
            		$('.prize>p').text('18');
            	}
            	if(data.res == 2){
            		$('.prize').show();
            		$('.prize>p').text('10');
            	}
            	if(data.res == 3){
            		$('.prize').show();
            		$('.prize>p').text('8');
            	}
            	if(data.res == 4){
            		$('.prize').show();
            		$('.prize>p').text('5');
            	}
            	if(data.res == 5){
            		$('.prize').show();
            		$('.prize>p').text('2');
            	}
            	if(data.res == 6){
            		$('.prize').show();
            		$('.prize>p').text('1');
            	}
            	if(data.res == 7){
            		$('.prizecar').show();
            	}
            	if(data.res == 9){
            		$('.noprize').show();
            	}
            	if(data.res == 11){
            		$('.noprize').show();
            	}
            }
        });
	}

})
//首页开始答题
function start(){
	var openid = $("#openid").val();
	var token = $("#token").val();
	$.ajax({
        type: "POST",
        url: "/mobile/choice.php?step=num",
        data:{
        	openid:openid
		},
    	beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
        success: function (data) {
        	console.log(data);
        	if(data<=0){
        		$('.without').show();
        		$('.container').show();
        		return false;
        	}else{
				$('.index').hide();
				$('.one').show();
				$('.gz_con').hide();
				$('.container').hide();
				$('.open').hide();
				$('.close').hide();
				var rand =  Math.floor(Math.random()*10);
				for(var i = 0;i<10;i++){
					if(rand == i){
						num = arr[rand];
						$('.ti1').attr('src',arr[rand]);
						arr.splice(rand,1); 
						break;
					}
				}
        	}
        }
    });
}

// 遍历input添加对勾     第一页
$('.one>input').each(function(i){
	$(this).click(function(){
		if(is == true){
			ifelse(i);
		}
		is = false;
	})
})

// 遍历input添加对勾     第二页
$('.two>input').each(function(i){

	$(this).click(function(){
		if(is == false){
			ifelse(i);
		}
		is = true;
	})
})

// 遍历input添加对勾     第三页
$('.three>input').each(function(i){

	$(this).click(function(){
		if(is == true){
			ifelse(i);
		}
		is = false;
	})
})

// 遍历input添加对勾     第四页
$('.four>input').each(function(i){

	$(this).click(function(){
		if(is == false){
			ifelse(i);
		}
		is = true;
	})
})

// 遍历input添加对勾     第五页
$('.five>input').each(function(i){

	$(this).click(function(){
		if(is == true){
			ifelse(i);
		}
		is = false;
	})
})

// 下一题11111111111111111111111111
$('.next').click(function(){
	var val=$('input:radio[name="x"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.one').hide();
	$('.one_dui>div').hide();
	$('.two').show();
	var rand =  Math.floor(Math.random()*9);
	for(var i = 0;i<9;i++){
		if(rand == i){
			num = arr[rand];
			$('.ti1').attr('src',arr[rand]);
			arr.splice(rand,1); 
			break;
		}
	}
})

// 下一题2222222222222222222
$('.next_1').click(function(){
	var val=$('input:radio[name="z"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.two').hide();
	$('.one_dui>div').hide();
	$('.three').show();
	var rand =  Math.floor(Math.random()*8);
	for(var i = 0;i<8;i++){
		if(rand == i){
			num = arr[rand];
			$('.ti1').attr('src',arr[rand]);
			arr.splice(rand,1); 
			break;
		}
	}
})
		
// 下一题3333333333333333
$('.next_2').click(function(){
	var val=$('input:radio[name="y"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.one_dui>div').hide();
	$('.three').hide();
	$('.four').show();
	var rand =  Math.floor(Math.random()*7);
	for(var i = 0;i<7;i++){
		if(rand == i){
			num = arr[rand];
			$('.ti1').attr('src',arr[rand]);
			arr.splice(rand,1); 
			break;
		}
	}
})

// 下一题444444444444444444444
$('.next_3').click(function(){
	var val=$('input:radio[name="q"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.one_dui>div').hide();
	$('.four').hide();
	$('.five').show();
	var rand =  Math.floor(Math.random()*6);
	for(var i = 0;i<6;i++){
		if(rand == i){
			num = arr[rand];
			$('.ti1').attr('src',arr[rand]);
			arr.splice(rand,1); 
			break;
		}
	}
})

// 第五题   
function test(){
	var val=$('input:radio[name="w"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	var sec = [];
	var len = alltrue.length;
	if(len == 5){
		$('.yes').show();
		$('.container').show();
	}else{
		$('.no>p').text(len);
		$('.no').show();
		$('.container').show();
	}
	$('input:radio').each(function(){
		if(this.checked){
           sec1 = $(this).val();
           sec.push(sec1)
        }
	})
}

function tj(){
    if(aa == 1){
		var token = $("#token").val();
		console.log(token);
		var openid = $("#openid").val();
        var inp1 =  $('.name').val();
        var inp2 =  $('.phone').val();
        if(inp1 == ''){
            alert("请输入您的姓名!");
            return false;
        }
        if(inp2 == ''){
            alert("请输入您的电话!");
            return false;
        }
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!reg.test(inp2)) {
            alert("请输入正确的手机号!");
            return false;
        }
        $.ajax({
            type: 'POST',
            dataType:'json',
            url : '/mobile/choice.php?step=info',
            data: {
                name:inp1,
                phone:inp2,
                openid:openid,
            },
        	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
            success: function(data){
            	if(data.res == 1){
            		$('.prize').show();
            		$('.prize>p').text('18');
            	}
            	if(data.res == 2){
            		$('.prize').show();
            		$('.prize>p').text('10');
            	}
            	if(data.res == 3){
            		$('.prize').show();
            		$('.prize>p').text('8');
            	}
            	if(data.res == 4){
            		$('.prize').show();
            		$('.prize>p').text('5');
            	}
            	if(data.res == 5){
            		$('.prize').show();
            		$('.prize>p').text('2');
            	}
            	if(data.res == 6){
            		$('.prize').show();
            		$('.prize>p').text('1');
            	}
            	if(data.res == 7){
            		$('.prizecar').show();
            	}
            	if(data.res == 9){
            		$('.noprize').show();
            	}
            	if(data.res == 11){
            		$('.noprize').show();
            	}

            }
        });
    }
	aa=2;
	jump(3);
}

function news(){
	window.location.href = '';
}
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
function ifelse(i){
	console.log(i,num);
	if(num == '/mobile/templates/festival/img/1.png'){
		if(i == 0){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 2){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/2.png'){
		if(i == 0){
			$('.one_dui>.one_dui_3').show();
			$('.one_dui>.one_dui_3').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_3').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_3').siblings().show();
		}else if(i == 1){
			$('.one_dui>.one_dui_3').show();
			$('.one_dui>.one_dui_3').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_3').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_3').siblings().show();
		}else if(i == 2){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_3').show();
			$('.one_dui>.one_dui_3').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.one_dui>.one_dui_3').show();
			$('.one_dui>.one_dui_3').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_3').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_3').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/3.png'){
		if(i == 0){
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_2').siblings().show();
		}else if(i == 1){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_2').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_2').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/4.png'){
		if(i == 0){
			$('.one_dui>.one_dui_4').show();
			$('.one_dui>.one_dui_4').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_4').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_4').siblings().show();
		}else if(i == 1){
			$('.one_dui>.one_dui_4').show();
			$('.one_dui>.one_dui_4').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_4').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_4').siblings().show();
		}else if(i == 2){
			$('.one_dui>.one_dui_4').show();
			$('.one_dui>.one_dui_4').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_4').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_4').siblings().show();
		}else if(i == 3){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_4').show();
			$('.one_dui>.one_dui_4').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_4').siblings().hide();
		}
	}
	else if(num == '/mobile/templates/festival/img/5.png'){
		if(i == 0){
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_2').siblings().show();
		}else if(i == 1){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_2').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_2').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_2').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/6.png'){
		if(i == 0){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 2){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/7.png'){
		if(i == 0){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 2){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/8.png'){
		if(i == 0){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 2){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/9.png'){
		if(i == 0){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 2){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}
	}
	else if(num == '/mobile/templates/festival/img/10.png'){
		if(i == 0){//正确答案
			alltrue.push(1);
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 2){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}else if(i == 3){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').css('background-image','url(/mobile/templates/festival/img/dui.png)');
			$('.one_dui>.one_dui_1').siblings().css('background-image','url(/mobile/templates/festival/img/cuo.png)');
			$('.one_dui>.one_dui_1').siblings().show();
		}
	}
}