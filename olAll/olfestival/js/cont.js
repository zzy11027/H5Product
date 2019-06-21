		
		var aa = 1;
		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';
		var prizes;
		function xq(){
			$('.xqs').show();
			$('.container').show();
		}

		$('.xqs').click(function(){
			$(this).hide();
			$('.container').hide();
		})
		// 开屏页
		$('.start').click(function(){
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

		// 下一题11111111111111111111111111
		$('.next_0').click(function(){

			var val=$('input:radio[name="x"]:checked').val();
			// console.log(val)

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
			// console.log(val)

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
			// console.log(val)

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
			var val=$('input:radio[name="m"]:checked').val();
			if(val == undefined){
				alert('您还没答题~！')
				return false;
			}
			$('.five').hide();
			$('.six').show();
		})


		// function test(){
		// 	var val=$('input:radio[name="n"]:checked').val();
		// 	if(val == undefined){
		// 		alert('您还没答题~！')
		// 		return false;
		// 	}
		// 	var sec = [];
		// 	$('input:radio').each(function(){
		// 		if(this.checked){
  //                  sec1 = $(this).val();
  //                  sec.push(sec1)
  //               }
		// 	})
		// 	var res = maxCountElement(sec);
		// 	if(res.length == 2){
		// 		var rand =  Math.floor(Math.random()*2);
		// 		if(rand == 0){
		// 			var other = res.slice(rand,1);
		// 			if(other == 'a'){
		// 				$('.end>.end1').attr('src','/templates/ol/olfestival/img/end1.png');
		// 				$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-1.png');
		// 			}
		// 			else if(other == 'b'){
		// 				$('.end>.end1').attr('src','/templates/ol/olfestival/img/end2.png');
		// 				$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-2.png');
		// 			}
		// 			else if(other == 'c'){
		// 				$('.end>.end1').attr('src','/templates/ol/olfestival/img/end3.png');
		// 				$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-3.png');
		// 			}
		// 		}else{
		// 			var other = res.slice(rand);
		// 			if(other == 'a'){
		// 				$('.end>.end1').attr('src','/templates/ol/olfestival/img/end1.png');
		// 				$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-1.png');
		// 			}
		// 			else if(other == 'b'){
		// 				$('.end>.end1').attr('src','/templates/ol/olfestival/img/end2.png');
		// 				$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-2.png');
		// 			}
		// 			else if(other == 'c'){
		// 				$('.end>.end1').attr('src','/templates/ol/olfestival/img/end3.png');
		// 				$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-3.png');
		// 			}
		// 		}
		// 		$('.five').hide();
		// 		$('.end').show();
		// 		return false;
		// 	}

		// 	else if(res == 'a'){
		// 		$('.five').hide();
		// 		$('.end').show();
		// 		$('.end>.end1').attr('src','/templates/ol/olfestival/img/end1.png');
		// 		$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-1.png');
		// 	}
		// 	else if(res == 'b'){
		// 		$('.five').hide();
		// 		$('.end').show();
		// 		$('.end>.end1').attr('src','/templates/ol/olfestival/img/end2.png');
		// 		$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-2.png');
		// 	}
		// 	else if(res == 'c'){
		// 		$('.five').hide();
		// 		$('.end').show();
		// 		$('.end>.end1').attr('src','/templates/ol/olfestival/img/end3.png');
		// 		$('.end>.end1-1').attr('src','/templates/ol/olfestival/img/end1-3.png');
		// 	}
		// }

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
	        		$('.prize').show();
	        		$('.prize>p').text('100');
	        		$('.prize>p').show();
	        	}
	        	else if(data.res == 2){
	        		$('.prize').show();
	        		$('.prize>p').text('50');
	        		$('.prize>p').show();
	        	}
	        	else if(data.res == 3){
	        		$('.prize').show();
	        		$('.prize>p').text('10');
	        		$('.prize>p').show();
	        	}
	        	else if(data.res == 4){
	        		$('.prize').show();
	        		$('.prize>p').text('5');
	        		$('.prize>p').show();
	        	}
	        	else if(data.res == 5){
	        		$('.prize').show();
	        		$('.prize>p').text('1');
	        		$('.prize>p').show();
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

// function maxCountElement(arr) {  
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

var base;
function test(){
	var val=$('input:radio[name="n1"]:checked').val();
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
	var rand =  Math.floor(Math.random()*10);
	$('.titles').attr('src','/templates/ol/olfestival/img/'+rand+'.png');
	$('.texts').attr('src','/templates/ol/olfestival/img/'+rand+'-'+rand+'.png');
	$('.six').hide();
	$('.seven').show();
}

$('.upload').click(function(){
	if (base==undefined) {alert("请上传头像!");return false;}
})
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
        console.log(base);
    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
        // $('<img />').attr('src',rst.base64).appendTo('body');
    });
});
var second = 0;var src;
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
			else if(second == 1){img.src = '/templates/ol/olfestival/img/poster.png'}
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

function liji(){
	var texts = $('.inps').val();
	// if(texts.length > 18){}
	var c=document.createElement('canvas');
		ct=c.getContext('2d');
		c.width=750;
		c.height=1206;
		var img=new Image;
		img.setAttribute('crossOrigin', 'anonymous');
		img.src = src;
		img.onload=function(){
			ct.rect(0,0,c.width,c.height);
			ct.fillStyle='#fff';
			ct.fill(); 
			ct.drawImage(img,0,0,750,1206);
			ct.textAlign='left';
			ct.fillStyle = "#AF0029";  
			ct.font ="small-caps bold 30px arial";

			var chr = texts.split("");
			var temp = "";
			var row = [];
	        for (var a = 0; a < chr.length; a++) {
	            if (ct.measureText(temp).width < 480) {;
	            } else {
	                row.push(temp);
	                temp = "";
	            }
	            temp += chr[a];
	        }

	        row.push(temp);

	        for (var b = 0; b < row.length; b++) {
	            ct.fillText(row[b], 130, 200 + (b + 1) * 40);
	        }
			// ct.fillText(texts,380,615,800);//第一个随机
			$('.eight').show();
			$('.xz').hide();
			var m = c.toDataURL("image/png",10);
			$('#screenShotImgss').attr('src',m);
			$('#screenShotImgss').css('display','block');
		}
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