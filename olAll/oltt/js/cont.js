
var aa = 1;
var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
var prizes;
var c2 = document.getElementById("c2");
c2.width =750;
c2.height = 1334;
var ctx2 = c2.getContext("2d");
var bmp1S = c2.width/750;
var bmpS;
var imgSrc = '/templates/ol/oltt/img/bj.png';
var base;
var seconds = false;//如果用户第二次上传   return false
var upimgurls;
var yuan;
var index = 0;
var flag=false;
var con=0;
var second = 0;
var src;
// 开屏页
$('.start').click(function(){
	$('.index').hide();
	$('.one').show();
	var token = $("#token").val();
	var openid = $("#openid").val();
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : '/ol/ol_spirit.php?step=zt',
        data: {
            openid:openid,
        },
    	beforeSend: function(request) { 
			request.setRequestHeader("Authorization", token); 
		}, 
        success: function(data){
        	console.log(data);
        	if(data.zt == 12){
        		$('.prize').show();
        		if(data.prize == 1){
        			$('.prize>p').text('100');
        		}else if(data.prize == 2){
        			$('.prize>p').text('50');
        		}else if(data.prize == 3){
        			$('.prize>p').text('10');
        		}else if(data.prize == 4){
        			$('.prize>p').text('5');
        		}else if(data.prize == 5){
        			$('.prize>p').text('1');
        		}
        	}else{
				$('.index').hide();
				$('.one').fadeIn(500);
        	}
        }
    });	
})
// 遍历input添加对勾     第一页
$('.bj1 input').each(function(i){
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
$('.bj2 input').each(function(i){
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
$('.bj3 input').each(function(i){
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
$('.bj4 input').each(function(i){
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
$('.bj5 input').each(function(i){
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
// 遍历input添加对勾     第五页
$('.bj6 input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.six_dui>.one_dui_1').show();
			$('.six_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.six_dui>.one_dui_2').show();
			$('.six_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.six_dui>.one_dui_3').show();
			$('.six_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.six_dui>.one_dui_4').show();
			$('.six_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.six_dui>.one_dui_5').show();
			$('.six_dui>.one_dui_5').siblings().hide();
		}
	})
})
// 遍历input添加对勾     第6页
$('.bj7 input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.seven_dui>.one_dui_1').show();
			$('.seven_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.seven_dui>.one_dui_2').show();
			$('.seven_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.seven_dui>.one_dui_3').show();
			$('.seven_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.seven_dui>.one_dui_4').show();
			$('.seven_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.seven_dui>.one_dui_5').show();
			$('.seven_dui>.one_dui_5').siblings().hide();
		}
	})
})
// 遍历input添加对勾     第6页
$('.bj8 input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.eight_dui>.one_dui_1').show();
			$('.eight_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.eight_dui>.one_dui_2').show();
			$('.eight_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.eight_dui>.one_dui_3').show();
			$('.eight_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.eight_dui>.one_dui_4').show();
			$('.eight_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.eight_dui>.one_dui_5').show();
			$('.eight_dui>.one_dui_5').siblings().hide();
		}
	})
})
// 遍历input添加对勾     第6页
$('.bj9 input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.nine_dui>.one_dui_1').show();
			$('.nine_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.nine_dui>.one_dui_2').show();
			$('.nine_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.nine_dui>.one_dui_3').show();
			$('.nine_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.nine_dui>.one_dui_4').show();
			$('.nine_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.nine_dui>.one_dui_5').show();
			$('.nine_dui>.one_dui_5').siblings().hide();
		}
	})
})
// 遍历input添加对勾     第6页
$('.bj10 input').each(function(i){
	$(this).click(function(){
		if(i == 0){
			$('.ten_dui>.one_dui_1').show();
			$('.ten_dui>.one_dui_1').siblings().hide();
		}else if(i == 1){
			$('.ten_dui>.one_dui_2').show();
			$('.ten_dui>.one_dui_2').siblings().hide();
		}else if(i == 2){
			$('.ten_dui>.one_dui_3').show();
			$('.ten_dui>.one_dui_3').siblings().hide();
		}else if(i == 3){
			$('.ten_dui>.one_dui_4').show();
			$('.ten_dui>.one_dui_4').siblings().hide();
		}else if(i == 4){
			$('.ten_dui>.one_dui_5').show();
			$('.ten_dui>.one_dui_5').siblings().hide();
		}
	})
})
// 下一题11111111111111111111111111
$('.next_0').click(function(){
	var val=$('input:radio[name="x"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.one').hide();
	$('.two').show();
})
// 下一题2222222222222222222
$('.next_1').click(function(){
	var val=$('input:radio[name="z"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.two').hide();
	$('.three').show();
})
// 下一题3333333333333333
$('.next_2').click(function(){
	var val=$('input:radio[name="y"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.three').hide();
	$('.four').show();
})
// 下一题4444444444444444
$('.next_3').click(function(){
	var val=$('input:radio[name="m"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.four').hide();
	$('.five').show();
})
// 下一题5555555555555555555
$('.next_4').click(function(){
	var val=$('input:radio[name="n"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.five').hide();
	$('.six').show();
})
// 下一题5566666666666666666
$('.next_5').click(function(){
	var val=$('input:radio[name="n1"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.seven').show();
	$('.six').hide();
})
// 下一题77777777777777777777777
$('.next_6').click(function(){
	var val=$('input:radio[name="n2"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.eight').show();
	$('.seven').hide();
})
// 下一题888888888888888888888
$('.next_7').click(function(){
	var val=$('input:radio[name="n3"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.nine').show();
	$('.eight').hide();
})
// 下一题999999999999999999999999
$('.next_8').click(function(){
	var val=$('input:radio[name="n4"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	$('.ten').show();
	$('.nine').hide();
})
function reset(){
	$(".main_1,.main_2,.main_3").css({"top":'1.5rem'});
}
reset();
function prize(){
    if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
	    $.ajax({
	        type: 'POST',
	        dataType:'json',
	        url : '/ol/ol_spirit.php?step=prize',
	        data: {
	            openid:openid,
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	prizes = data.res;
	        	$('.zz').show();
	        	if(data.res == 1){
					if(index==0){  
						if(!flag){
							flag=true;
							reset();
							set=setInterval(function () {
								flag=false;
								con++;
								if(con==10){
									$(".main_1").animate({"top":-500},1000,"linear", function () {
										$(this).css("top",0).animate({"top":-2.5+'rem'},1000,"linear");
									});
									$(".main_2").animate({"top":-500},1500,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},1500,"linear");
									});
									$(".main_3").animate({"top":-500},2000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},2000,"linear");
									});
								}
								if(con==280){
					        		$('.prize').show();
					        		$('.prize>p').text('100');
					        		$('.prize>p').show();
									clearInterval(set);
								}
							},10);
						}
					}
					index=1;
	        	}
	        	else if(data.res == 2){
					if(index==0){  
						if(!flag){
							flag=true;
							reset();
							set=setInterval(function () {
								flag=false;
								con++;
								if(con==10){
									$(".main_1").animate({"top":-500},1000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},1000,"linear");
									});
									$(".main_2").animate({"top":-500},1500,"linear", function () {
										$(this).css("top",0).animate({"top":-16.4+'rem'},1500,"linear");
									});
									$(".main_3").animate({"top":-500},2000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},2000,"linear");
									});
								}
								if(con==280){
					        		$('.prize').show();
					        		$('.prize>p').text('50');
					        		$('.prize>p').show();
									clearInterval(set);
								}
							},10);
						}
					}
					index=1;
	        	}
	        	else if(data.res == 3){
					if(index==0){  
						if(!flag){
							flag=true;
							reset();
							set=setInterval(function () {
								flag=false;
								con++;
								if(con==10){
									$(".main_1").animate({"top":-500},1000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},1000,"linear");
									});
									$(".main_2").animate({"top":-500},1500,"linear", function () {
										$(this).css("top",0).animate({"top":-2.5+'rem'},1500,"linear");
									});
									$(".main_3").animate({"top":-500},2000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},2000,"linear");
									});
								}
								if(con==280){
					        		$('.prize').show();
					        		$('.prize>p').text('10');
					        		$('.prize>p').show();
									clearInterval(set);
								}
							},10);
						}
					}
					index=1;
	        	}
	        	else if(data.res == 4){
					if(index==0){  
						if(!flag){
							flag=true;
							reset();
							set=setInterval(function () {
								flag=false;
								con++;
								if(con==10){
									$(".main_1").animate({"top":-500},1000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},1000,"linear");
									});
									$(".main_2").animate({"top":-500},1500,"linear", function () {
										$(this).css("top",0).animate({"top":-16.4+'rem'},1500,"linear");
									});
									$(".main_3").animate({"top":-500},2000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},2000,"linear");
									});
								}
								if(con==280){
					        		$('.prize').show();
					        		$('.prize>p').text('5');
					        		$('.prize>p').show();
									clearInterval(set);
								}
							},10);
						}
					}
					index=1;
	        	}
	        	else if(data.res == 5){
					if(index==0){  
						if(!flag){
							flag=true;
							reset();
							set=setInterval(function () {
								flag=false;
								con++;
								if(con==10){
									$(".main_1").animate({"top":-500},1000,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},1000,"linear");
									});
									$(".main_2").animate({"top":-500},1500,"linear", function () {
										$(this).css("top",0).animate({"top":0.82+'rem'},1500,"linear");
									});
									$(".main_3").animate({"top":-500},2000,"linear", function () {
										$(this).css("top",0).animate({"top":-2.3+'rem'},2000,"linear");
									});
								}
								if(con==280){
					        		$('.prize').show();
					        		$('.prize>p').text('1');
					        		$('.prize>p').show();
									clearInterval(set);
								}
							},10);
						}
					}
					index=1;
	        	}
        		else if(data.res == 11){
        			alert('您已参与过哦！');
        			window.location.href = '';
	        	}else if(data.res == 9){
	        		$('.no-prize').show();
	        		$('.zz').show();
	        	}
	        }
	    });
	}
	aa=2;
	jump(3);
}
function tj(){
	if(aa == 1){
		var token = $("#token").val();
		var openid = $("#openid").val();
		var inp1 =  $('.inp1').val();
	    var inp2 =  $('.inp2').val();
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
	        url : '/ol/ol_spirit.php?step=info',
	        data: {
	        	name:inp1,
	        	phone:inp2,
	            openid:openid,
	            prize:prizes,
	        },
	    	beforeSend: function(request) { 
				request.setRequestHeader("Authorization", token); 
			}, 
	        success: function(data){
	        	console.log(data);
	        	alert('领取成功！');
	        	window.location.href = '';
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
function test(){
	var val=$('input:radio[name="n5"]:checked').val();
	if(val == undefined){
		alert('您还没答题~！')
		return false;
	}
	var sec = [];
	$('input:radio').each(function(){
		if(this.checked){
           sec1 = $(this).val();
           sec.push(sec1)
        }
	})
	var rand =  Math.floor(Math.random()*12);
	$('.titles').attr('src','/templates/ol/oltt/img/'+rand+'.png');
	$('.texts').attr('src','/templates/ol/oltt/img/'+rand+'-'+rand+'.png');
	$('.ten').hide();
	$('.sevens').show();
}
function draw(){
	if (base==undefined) {alert("请上传头像!");return false;}
	var c=document.createElement('canvas');
	ct=c.getContext('2d');
	c.width=750;
	c.height=1206;
	function drawing(n){
		if(n<2){
			var img=new Image;
			img.setAttribute('crossOrigin', 'anonymous');
			if(second == 0){img.src = base;}
			else if(second == 1){img.src = '/templates/ol/oltt/img/poster.png'}
			var imgW = "";
			var imgH = "";
			img.onload=function(){
				if(second == 0){
					imgW = img.width;
					imgH = img.height;
					ct.rect(0,0,c.width,c.height);
					ct.fillStyle='#fff';
					ct.fill(); 
					console.log(imgW,imgH);
					ct.drawImage(img,0,520,c.width,imgH*c.width/imgW);
					console.log(c.width,imgH*c.width/imgW)
					// ct.drawImage(img,0,550,750,520);
					second = 1;
				}
				else if(second == 1){
					console.log(img.src);
					ct.drawImage(img,0,0,750,1206);
					second = 2;
				}
				drawing(n+1);//递归
			}
		}else{
			$('.seven').hide();
			$('.xz').show();
			src = c.toDataURL("image/png",10);
			$('#screenShotImg').attr('src',src);
			$('#screenShotImg').css('display','block');
			$('#screenShotImg_1').css('display','block');
		}
	}
	drawing(0);
}
//重拍
function chongpai(){
	$('.Synthesis').hide();
	$('.sevens').show();
}
//判断字符串长度
var jmz = {};
jmz.GetLength = function(str) {
    return str.replace(/[\u0391-\uFFE5]/g,"aa").length;   //先把中文替换成两个字节的英文，在计算长度
};  
 

//图片合成
function Synthesis(){
	if (base==undefined) {alert("请上传照片!");return false;}
	var c2 = document.getElementById("c2");
	ctx=c2.getContext('2d');
	var texts = $('.p1').text();
	console.log(texts);
	ctx.fillStyle='#fff';
	ctx.textAlign='left';
	ctx.fillStyle = "#fff";  
	ctx.font ="small-caps bold 40px arial";
	var chr = texts.split("");
	var temp = "";
	var row = [];
    for (var a = 0; a < chr.length; a++) {
        if (ctx.measureText(temp).width < 230) {;
        } else {
            row.push(temp);
            temp = "";
        }
        temp += chr[a];
    }
    row.push(temp);
    for (var b = 0; b < row.length; b++) {
        ctx.fillText(row[b], 435, 180 + (b + 1) * 42);
    }
	var texts1 = $('.p2').text();
	ctx.fillStyle='#fff';
	ctx.font ="small-caps  25px arial";
	ctx.fillText(texts1, 200, 268,280);

	var texts2 = $('.p3').text();
	ctx.textAlign='center';
	ctx.font ="small-caps bold 42px arial";
	ctx.fillStyle='#fff';
	ctx.fillText(texts2, 240, 987,280);



	// if(jmz.GetLength(texts2)==4){
	// 	ctx.font ="small-caps bolder 45px arial,sans-serif";
	// 	ctx.fillText(texts2, 170, 992,280);
	// }else{
	// 	ctx.font ="small-caps bolder 45px arial,sans-serif";
	// 	ctx.fillText(texts2, 210, 990,280);
	// }



	



	var base64=c2.toDataURL("image/jpg",1);
	$('.Synthesis').hide();
	$('.xz').show();
	$('#screenShotImg').attr('src',base64);
	$('#screenShotImg').css('display','block');
	seconds = false;//恢复  默认   再次上传 判断
}
//判断手机是否为ios   input上传文件
var file = document.getElementById('uploadss');
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
//上传图片  引入AlloyFinger+cax
$("#uploadss").change(function(){
	upimgurls = getObjectURL(this.files[0]);
	seconds = true;
	var finput = this.files[0];
	lrz(finput,{
		width:500,
		height:500,
		quality:1.0
	}).then(function (rst) {
		base = rst.base64;
		if(!$('.jxs').val()){
			alert('请输入您的信息!');
			return false;
		}
		if(!$('.xsrx').val()){
			alert('请输入您的信息!');
			return false;
		}
		if(!$('.name').val()){
			alert('请输入您的信息!');
			return false;
		}
		if(!$(".count").val()){
			alert('请输入您的信息!');
			return false;
		}
		var han = /^[\u4e00-\u9fa5]+$/;
		if(!han.test($('.name').val())){alert('请输入汉字！');return false;}
		var reg=/^\d{1,}$/
		var pattern=new RegExp(reg);
		if(!pattern.test($('.xsrx').val())){
			alert('请输入数字！');return false;
		}
		//如果用户返回操作。先隐藏canvas  然后上传文件之后再让其显示。
		$('.container').hide();
		$('#c2').show();
		$('.Synthesis').css('background-image','url()');
		$('.Synthesis').show();
		$('.sevens').hide();
        rst.formData.append('base64img',rst.base64);
	    upimg = new Image();
	    upimg.src = base;
	    upimg.onload = function(){
	        ctx2.clearRect(0,0,c2.width,c2.height);
	        if(upimg.width>c2.width){
	            bmpS = c2.width/upimg.width;
	        }else{
	            bmpS = upimg.width/upimg.width;
	        }
			MoveStage(base);
	    };
	    yuan = '/templates/ol/oltts/img/' + $(".count").val() + '.png';
	// if($(".count").val() == 1){
	// 	yuan = '/templates/ol/oltt/img/01.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 2){
	// 	yuan = '/templates/ol/oltt/img/02.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 3){
	// 	yuan = '/templates/ol/oltt/img/03.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 4){
	// 	yuan = '/templates/ol/oltt/img/04.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 5){
	// 	yuan = '/templates/ol/oltt/img/05.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 6){
	// 	yuan = '/templates/ol/oltt/img/06.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 7){
	// 	yuan = '/templates/ol/oltt/img/07.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 8){
	// 	yuan = '/templates/ol/oltt/img/08.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 9){
	// 	yuan = '/templates/ol/oltt/img/09.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 10){
	// 	yuan = '/templates/ol/oltt/img/10.png';
	// 	console.log(yuan);
	// }
	$('.p1').text($('.jxs').val());
	$('.p2').text($('.xsrx').val());
	$('.p3').text($('.name').val());
    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
    });
});
function MoveStage(upimgurls){/////移动元素
    var Stage = AlloyPaper.Stage, Bitmap = AlloyPaper.Bitmap,Loader = AlloyPaper.Loader;
    var stage = new Stage("#c2");
    stage.autoUpdate=false;
    var ld = new Loader();
    ld.loadRes2([
        { id: "test1", src: upimgurls },
        { id: "test2", src: imgSrc },
        { id: "test3", src: yuan },
    ]);
    ld.complete(function () {
        var bmp = new Bitmap(ld.get("test1"));
        bmp.originX = 0.5;
        bmp.originY = 0.5;
        bmp.x = stage.width / 2;
        bmp.y = stage.height / 2;
        stage.add(bmp);
        var bmp1 = new Bitmap(ld.get("test2"));
        bmp.originX = 0.5;
        bmp.originY = 0.5;
        bmp1.x = 0;
        bmp1.y = 0;
        bmp1.scale = bmp1S;
        stage.add(bmp1);
        //第三个
    	var bmp2 = new Bitmap(ld.get("test3"));
        bmp.originX = 0.5;
        bmp.originY = 0.5;
        bmp2.x = 295;
        bmp2.y = 1020;
        bmp2.scale = bmp1S;
        stage.add(bmp2);




        stage.update();
        updateStage1();
        var initScale = 1;
        new AlloyFinger(bmp1, {
            multipointStart: function () {
                initScale = bmp.scaleX; 
				stage.update();
            },
            rotate: function (evt) {
                bmp.rotation += evt.angle;
                stage.update();
                updateStage1();
            },
            pinch: function (evt) {
                bmp.scaleX = bmp.scaleY = initScale * evt.scale;
                stage.update();
                updateStage1();
            },
            pressMove: function (evt) {
                bmp.x += evt.deltaX;
                bmp.y += evt.deltaY;
                bmp1.x = 0;
                bmp1.y = 0;
                evt.preventDefault();
                stage.update();
                updateStage1();
            }
        });
    });
    //将上传的图片画入canvas圆中
    function updateStage1(){
        // ctx2.clearRect(0,0,c2.width,c2.height);
        ctx2.beginPath();
        ctx2.arc(c2.width/2 , c2.height/2 , c2.width , 0 , 2*Math.PI);
        ctx2.save();
        ctx2.clip();
        stage.update();
        ctx2.restore();
    }
}
//  获取  图片url
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }   
    console.log(file,url);
    return url ;
}
//进入操作上传页
function comeon(){
	$('.Synthesis').show();
	$('.sevens').hide();
}
function xq(){
	$('.xqs').show();
	$('.container').show();
}
$('.fen').click(function(){
	$('.fenxiang').show();
})
$('.fenxiang').click(function(){
	$(this).hide();
})
$('.no-prize').click(function(){
	$(this).hide();
	$('.zz').hide();
})
$('.xqs button').click(function(){
	$('.xqs').hide();
	$('.container').hide();
})
$('.draw').click(function(){
	$('.xz').hide();
	$('.tiger').show();
})
// $("#upload").change(function(){
// 	var finput = this.files[0];
// 	lrz(finput,{
// 		width:500,
// 		height:500,
// 		quality:0.8
// 	}).then(function (rst) {
// 		base = rst.base64;
//         rst.formData.append('base64img',rst.base64);
//         $('.pic>img').attr('src',base);
//         $('.pic>img').show();
//         console.log(base);
//     }).catch(function (err) {
//         // 处理失败会执行
//     }).always(function () {
//         // 不管是成功失败，都会执行
//         // $('<img />').attr('src',rst.base64).appendTo('body');
//     });
// });
// // function maxCountElement(arr) {  
//    var obj={};
//    for(var i=0;i<arr.length;i++){  
//        var key=arr[i]; 
//        if(obj[key]){
//            obj[key]++;  
//        }else{  
//            obj[key]=1;
//        }  
//    }  
//    var maxCount=0;
//    var maxElement=arr[0];
//    var eq = [];
//    for(var key in obj){  
//        if(maxCount < obj[key]){  
//            maxCount=obj[key]; 
//            maxElement=key;  
//            eq.length=0;
//        }else if(maxCount === obj[key]){  
//        	eq.push(key);
//        }
//    }  
//    if(eq.length > 0){
//    	for(var j=0;j<eq.length;j++){
//    	maxElement+=eq[j];
//    	}
//    }
//    return maxElement;  
//     }  
//     
//     
//     
//     
$('.tj').click(function(){
	var han = /^[\u4e00-\u9fa5]+$/;
	if(!han.test($('.jxs').val())){alert('请输入汉字！');return false;}
	// if(!$('.jxs').val()){
	// 	alert('请输入您的信息!');
	// 	return false;
	// }
	if(!$('.xsrx').val()){
		alert('请输入您的信息!');
		return false;
	}
	if(!$('.name').val()){
		alert('请输入您的信息!');
		return false;
	}
	if(!$(".count").val()){
		alert('请输入您的信息!');
		return false;
	}
	var reg=/^\d{1,}$/
	var pattern=new RegExp(reg);
	if(!pattern.test($('.xsrx').val())){
		alert('请输入数字！');return false;
	}

	if(!han.test($('.name').val())){alert('请输入汉字！');return false;}
	if (base==undefined) {alert("请上传图片!");return false;}
	var upimgurls = getObjectURL(document.getElementById('uploadss').files[0]);
    upimg = new Image();
    upimg.src = base;
    upimg.onload = function(){
        ctx2.clearRect(0,0,c2.width,c2.height);
        if(upimg.width>c2.width){
            bmpS = c2.width/upimg.width;
        }else{
            bmpS = upimg.width/upimg.width;
        }
		MoveStage(base);
    };
	$('#c2').show();
	$('.Synthesis').css('background-image','url()');
	$('.Synthesis').show();
	$('.sevens').hide();
	$('.container').hide();
	yuan = '/templates/ol/oltts/img/' + $(".count").val() + '.png';
	// if($(".count").val() == 1){
	// 	yuan = '/templates/ol/oltt/img/01.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 2){
	// 	yuan = '/templates/ol/oltt/img/02.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 3){
	// 	yuan = '/templates/ol/oltt/img/03.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 4){
	// 	yuan = '/templates/ol/oltt/img/04.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 5){
	// 	yuan = '/templates/ol/oltt/img/05.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 6){
	// 	yuan = '/templates/ol/oltt/img/06.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 7){
	// 	yuan = '/templates/ol/oltt/img/07.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 8){
	// 	yuan = '/templates/ol/oltt/img/08.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 9){
	// 	yuan = '/templates/ol/oltt/img/09.png';
	// 	console.log(yuan);
	// }else if($(".count").val() == 10){
	// 	yuan = '/templates/ol/oltt/img/10.png';
	// 	console.log(yuan);
	// }
	$('.p1').text($('.jxs').val());
	$('.p2').text($('.xsrx').val());
	$('.p3').text($('.name').val());
})