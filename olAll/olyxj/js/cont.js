var aa = 1;
var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
var prizes;//奖项id
var testing = 0;//检测是否按顺序答题
var num;//检测随机第几套题
var arr1 = [
	'/templates/ol/olyxj/img/1-1.png','/templates/ol/olyxj/img/1-2.png','/templates/ol/olyxj/img/1-3.png','/templates/ol/olyxj/img/1-4.png','/templates/ol/olyxj/img/1-5.png'
]

var arr2 = [
	'/templates/ol/olyxj/img/2-1.png','/templates/ol/olyxj/img/2-2.png','/templates/ol/olyxj/img/2-3.png','/templates/ol/olyxj/img/2-4.png','/templates/ol/olyxj/img/2-5.png'
]

var arr3 = [
	'/templates/ol/olyxj/img/3-1.png','/templates/ol/olyxj/img/3-2.png','/templates/ol/olyxj/img/3-3.png','/templates/ol/olyxj/img/3-4.png','/templates/ol/olyxj/img/3-5.png'
]

var arr4 = [
	'/templates/ol/olyxj/img/4-1.png','/templates/ol/olyxj/img/4-2.png','/templates/ol/olyxj/img/4-3.png','/templates/ol/olyxj/img/4-4.png','/templates/ol/olyxj/img/4-5.png'
]

var arr5 = [
	'/templates/ol/olyxj/img/5-1.png','/templates/ol/olyxj/img/5-2.png','/templates/ol/olyxj/img/5-3.png','/templates/ol/olyxj/img/5-4.png','/templates/ol/olyxj/img/5-5.png'
]

var arrAll = [arr1,arr2,arr3,arr4,arr5];
// 开屏页
function start(){
	$('.index').hide();
	$('.container').hide();
	$('.choice').show();
	randimg();
}
//规则
function rule(){
	$('.gz').show();
	$('.container').show()
}
//关闭规则
$('.gz>.close').click(function(){
	$('.gz').hide();
	$('.container').hide();
})
//1-5灯笼
$('.dl').each(function(i,index){
	$(this).click(function(x){
		if(testing == i){
			$(this).css('opacity',1);
			testing += 1;
			$(this).attr('onclick','already('+i+')');
			$(this).removeAttr('isattr');
			$($('.page')[i]).show();
			$('.choice').hide();
		}
		else if(testing < i){
			alert('请按顺序答题！');
		}
		// else{
		// 	alert("已经答题了~~")
		// }
	})
})

// 遍历input添加对勾     第一页
$('.one>input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.one_dui>.one_dui_1').show();
			$('.one_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.one_dui>.one_dui_2').show();
			$('.one_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.one_dui>.one_dui_3').show();
			$('.one_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.one_dui>.one_dui_4').show();
			$('.one_dui>.one_dui_4').siblings().hide();
		}
	})
})


// 遍历input添加对勾     第二页
$('.two>input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.two_dui>.one_dui_1').show();
			$('.two_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.two_dui>.one_dui_2').show();
			$('.two_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.two_dui>.one_dui_3').show();
			$('.two_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.two_dui>.one_dui_4').show();
			$('.two_dui>.one_dui_4').siblings().hide();
		}
	})
})

// 遍历input添加对勾     第三页
$('.three>input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.three_dui>.one_dui_1').show();
			$('.three_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.three_dui>.one_dui_2').show();
			$('.three_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.three_dui>.one_dui_3').show();
			$('.three_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.three_dui>.one_dui_4').show();
			$('.three_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.three_dui>.one_dui_5').show();
			$('.three_dui>.one_dui_5').siblings().hide();
		}
	})
})


// 遍历input添加对勾     第四页
$('.four>input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.four_dui>.one_dui_1').show();
			$('.four_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.four_dui>.one_dui_2').show();
			$('.four_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.four_dui>.one_dui_3').show();
			$('.four_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.four_dui>.one_dui_4').show();
			$('.four_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.four_dui>.one_dui_5').show();
			$('.four_dui>.one_dui_5').siblings().hide();
		}
	})
})


// 遍历input添加对勾     第五页
$('.five>input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.five_dui>.one_dui_1').show();
			$('.five_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.five_dui>.one_dui_2').show();
			$('.five_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.five_dui>.one_dui_3').show();
			$('.five_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.five_dui>.one_dui_4').show();
			$('.five_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.five_dui>.one_dui_5').show();
			$('.five_dui>.one_dui_5').siblings().hide();
		}
	})
})


// 下一题11111111111111111111111111
function next1(){
	var val=$('input:radio[name="x"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.one').hide();
	$('.choice').show();
}


// 下一题2222222222222222222
function next2(){
	var val=$('input:radio[name="z"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.two').hide();
	$('.choice').show();
}


// 下一题3333333333333333
function next3(){
	var val=$('input:radio[name="y"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.three').hide();
	$('.choice').show();
}


// 下一题4444444444444444
function next4(){
	var val=$('input:radio[name="m"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.four').hide();
	$('.choice').show();
}

//查看答案
function next5(){
	var sec;
	var val=$('input:radio[name="n"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
// $('input:radio').each(function(){
// 	if(this.checked){
//           sec1 = $(this).val();
//           sec.push(sec1)
//        }
// })
	
	$('.five').hide();
	$('.container').show();
	$('.end').show();
	for(var i = 0; i < 5; i++){
		if(num == i){
			$('.endimg').attr('src','/templates/ol/olyxj/img/answer'+i+'.png');
		}
	}
	return false;
}

//抽奖
function prize(){
    if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var id = $("#ids").val();
	    $.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : 'http://al.douyar.cc/ol/ol_yx.php?step=prize',//
	        data: {
	            openid:openid,
	            id:id,
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	prizes = data.res;
	        	$('.endimg').hide();
	        	if(data.res == 1){
	        		$('.prize').show();
	        		$('.prize>p').text('100');
	        	}
	        	else if(data.res == 2){
	        		$('.prize').show();
	        		$('.prize>p').text('50');
	        	}
	        	else if(data.res == 3){
	        		$('.prize').show();
	        		$('.prize>p').text('10');
	        	}
	        	else if(data.res == 4){
	        		$('.prize').show();
	        		$('.prize>p').text('5');
	        	}
	        	else if(data.res == 5){
	        		$('.prize').show();
	        		$('.prize>p').text('1');
	        	}
	        	else if(data.res == 9){
	        		$('.noprize').show();
	        	}
        		else if(data.res == 10){
        			alert('您已中奖！');
        			window.location.href = '';
	        	}
	        }
	    });
}
aa=2;
jump(3);
}

//领取
function lq(){
	$('.prize').hide();
	$('.lz').show();
}

//留资
function tj(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var inp1 =  $('.inp1').val();
	    var inp2 =  $('.inp2').val();
	    var id   = $("#ids").val();
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
	        url : 'http://al.douyar.cc/ol/ol_yx.php?step=info',
	        data: {
	        	name:inp1,
	        	phone:inp2,
	            openid:openid,
	            prize:prizes,
	            id:id,
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	console.log(data);
	        	if(data.res == 8){
	        		alert('此奖品已发光！');
	        		window.location.href = '';
	        	}else{
		        	alert('领取成功！');
		        	window.location.href = '';
	        	}

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
        } else { 
           aa=1; 
        } 
    }, 2000); 
} 

//随机图片
function randimg(){
	var randdom = $('.ti');
	var rand =  Math.floor(Math.random()*5);
	num = rand;
	var randarr = arrAll[rand];
	$(randarr).each(function(i,index){
		$(randdom[i]).attr('src',index);
	})
}

function already(i){
	// alert('已经答题了哦~~');
	$($('.page')[i]).show();
	$('.choice').hide();
}