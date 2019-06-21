var key,vins;
var file,base,nickname,resps;
$('#lo').click(function(){
	$('.index').hide();
	$('.login').show();
    $.ajax({
        url : 'http://www.aumantruck.com/mobile/om_iov.php?step=img',
        type: 'POST',
        dataType: "json",
        success: function(data){
            // var codeimg = decodeURIComponent(data.res.img);
			var str = data.res.img;  
			var base = new Base64();  
			var result2 = base.decode(str);  
            $('.yzm').attr('src','data:image/jpeg;base64,'+result2);
            key = data.res.imgKey;
            return;
        }

    });
})
function yzms(){
if(aa == 1){
    $.ajax({
        url : 'http://www.aumantruck.com/mobile/om_iov.php?step=img',
        type: 'POST',
        dataType: "json",
        success: function(data){
            // var codeimg = decodeURIComponent(data.res.img);
			var str = data.res.img;  
			var base = new Base64();  
			var result2 = base.decode(str);  
            $('.yzm').attr('src','data:image/jpeg;base64,'+result2);
            key = data.res.imgKey;
            return;
        }

    });
    		}
    aa=2;
    jump(3);
}
function tj(){
	$names = $("#names").val();
	$phone = $("#password").val();
	$yzm = $("#yzm").val();
	if ($names=="请输入您的手机号" || $names == '') {
		alert('请输入您的用户名');
        return false;
	}
	if ($phone=="请输入密码" || $phone == '') {
		alert('请输入您的密码');
        return false;
	}

    $.ajax({
        url : 'http://www.aumantruck.com/mobile/om_iov.php?step=work_login',
        type: 'POST',
        dataType: "json",
        data:{
        	name: $names,
    	  	password: $phone,
	  	 	yzm:$yzm,
  	 	  	imgKey:key,
        },
        success: function(data){
        	// if(data.code != 0){
        	// 	window.location.href = 'http://www.aumantruck.com/mobile/om_iov.php?step=test';
        	// }
        	if(data.code == 0){
        		$('.login').hide();
        		$(data.data).each(function(index){
        			var div = $('<div>'+data.data[index].vin+'</div>');
        			$(div).attr('class','vinma');
        			$(div).attr('onclick','vin('+"'"+data.data[index].vin+"'"+')');
        			$(div).appendTo($('.vin_vin'));
        		})
        		$('.vin').show();
            }else if(data.msg == '无符合条件车辆！'){
                alert('无符合条件车辆,点击确定跳转至非会员界面');
                window.location.href = "http://www.aumantruck.com/mobile/om_iov.php?step=test";
            }else{
        		alert('填写错误！');
            }
            return;
        }

    });
}
function vin(vin){
	vins = vin;
    $.ajax({
        url : 'http://www.aumantruck.com/mobile/om_iov.php?step=info',
        type: 'POST',
        dataType: "json",
        data: {
            vin:vin,
        },
        success: function(data){
        	console.log(data);
            $('.totalMileage>b').text(data.res.totalMileage+'公里');
            $('.totalDays>b').text(data.res.totalDays+'天');
            $('.hundredOilConsumption>b').text(data.res.hundredOilConsumption+'L');
            $('.totalOilConsumption>b').text('年度总油耗'+data.res.totalOilConsumption+'L');
            //$('.totalOilConsumptionRanking>b').text('打败了全国0%的卡友');
            $('.totalOilConsumptionRanking>b').text('打败了全国'+data.res.hundredOilConsumptionRanking+'%的卡友');
            $('.averageAnnualSpeed>b').text(data.res.averageAnnualSpeed+'KM/h');
            $('.dailyDrivingTime>b').text(data.res.dailyDrivingTime+'小时');
            $('.dailyDrivingTimeRanking>b').text('打败了全国'+data.res.dailyDrivingTimeRanking+'%的卡友');
            $('.arriveMaximumCity>b').text(data.res.arriveMaximumCity);
			$('.index').fadeOut(500);
			$('.login').fadeOut(500);
			$('.vin').fadeOut(500);
			$('.swiper-containers').fadeIn(500);
			mySwiper.update();
			$("#car").addClass("animated1 slideInUps");
			$("#container1").addClass("animated1 slideInRight");
			$("#container1s").addClass("animated1 slideInLeft");
			$("#sp").addClass("animated1s slideInUp");
			$("#sp1").addClass("animated1s slideInUp");
			$("#sp2").addClass("animated1s slideInUp");
			$("#sp1s").addClass("animated1s slideInUp");
			$("#sp2s").addClass("animated1s slideInUp");
        }

    });
}

var aa = 1;
//头像上传
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
    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
        // $('<img />').attr('src',rst.base64).appendTo('body');
    });
});


//图片合成
var second = 0;var randimg;var inp1,inp2,inp3,inp4,inp5,inp6,inp7,inp8,inp9;
function draw(){
    console.log(vins);
	var nick = $('.nick>input').val();
	if (base==undefined) {alert("请上传头像!");return false;}
	if(nick == ''){alert('请输入您的昵称！');return false};
    $('.spinner').show();
    $('.zz').show();

    $.ajax({
        url : 'http://www.aumantruck.com/mobile/om_iov.php?step=infos',
        type: 'POST',
        dataType: "json",
        data:{vin:vins},
        success: function(data){
        	inp1 = data.res.drivingScore + '分';
        	inp2 = data.res.saftyScore + '分';
        	inp3 = data.res.vehicleDamageScore + '分';;
        	inp4 = data.res.economicScore + '分';;
        	inp5 = data.res.totalMileage + '公里';;
        	inp6 = data.res.totalDrivingTime + '小时';
        	inp7 = data.res.hundredOilConsumption + 'L/';
        	inp8 = '前' + data.res.hundredOilConsumptionRanking + '%';
        	inp9 = data.res.arriveMaximumCity;

	var c=document.createElement('canvas');
		ct=c.getContext('2d');
		c.width=750;
		c.height=1334;
	function drawing(n){
            if(70<inp1<90){
                randimg = 'http://www.aumantruck.com/mobile/templates/om_iov/img/sheng.png';
            }
            else if(90<inp2<100){
                randimg = 'http://www.aumantruck.com/mobile/templates/om_iov/img/wen.png';
            }
            else if(100000<inp3){
                randimg = 'http://www.aumantruck.com/mobile/templates/om_iov/img/qin.png';
            }
            else if(60<inp4<100){
                randimg = 'http://www.aumantruck.com/mobile/templates/om_iov/img/gaoxiao.png';
            }
            else if(70<inp5<100){
                randimg = 'http://www.aumantruck.com/mobile/templates/om_iov/img/zhuang.png';
            }
            else if(80<inp6<100){
                randimg = 'http://www.aumantruck.com/mobile/templates/om_iov/img/nuli.png';
            }
            else{
                randimg = 'http://www.aumantruck.com/mobile/templates/om_iov/img/fendou.png';
            }
		
		if(n<3){
			var img=new Image;
			img.setAttribute('crossOrigin', 'anonymous');
			if(second == 0){img.src = '/mobile/templates/om_iov/img/9.jpg';}//随机图片
			else if(second == 1){img.src = randimg}
			else if(second == 2){img.src = base}//二维码
			img.onload=function(){
				if(second == 0){
					console.log(img.src);
					// ct.rect(0,0,c.width,c.height);
					ct.fillStyle='#fff';
					ct.fill(); 
					ct.drawImage(img,0,0,750,1334);
					ct.textAlign='left';
					ct.fillStyle = "#226AC7";  
					ct.font ="small-caps bold 30px arial";
					ct.fillText(inp1,380,615,800);//第一个随机
					ct.fillText(inp2,320,675,800);//第一个选项
					ct.fillText(inp3,250,730,800);//第二个随机
					ct.fillText(inp4,320,785,800);//第二个选项
					ct.fillText(inp5,230,840,600);//第三个随机
					ct.fillText(inp6,280,895,600);//滴三个选项
					ct.fillText(inp7,510,950,600);//滴三个选项
					ct.fillText(inp8,585,950,600);//滴三个选项
					ct.fillText(inp9,100,1045,600);//滴三个选项
					ct.font ="small-caps bold 60px arial"; 
					ct.fillStyle = "#fff";
					ct.fillText('HI,',100,455,300);
					ct.fillText(nick,100,535,800);
					second = 1;
				}
				else if(second == 1){
					console.log(img.src);
					ct.drawImage(img,320,380,200,170);
					second = 2;
				}
				else{
					ct.arc(375,195,100,0,2*Math.PI,false);
					// ct.fillStyle = 'red';
					// ct.fill();
					ct.clip();
					ct.drawImage(img,275,95,200,200);
				}
				drawing(n+1);//递归
			}
		}else{
			$('.spinner').hide();
			$('.zz').hide();
			$('.eight').hide();
			$('.swiper-containers').hide();
			$('.xz').show();
			var src = c.toDataURL("image/png",10);
			$('#screenShotImg').attr('src',src);
			$('#screenShotImg').css('display','block');
			$('#screenShotImg_1').css('display','block');
		}
	}

	drawing(0);
	        }
    });
}
//点击抽奖  留资
$('.cj').click(function(){
	$('.zz').show();
	$('.lz').show();
})
//抽奖
function cj(){
	// if(aa == 1){
	var name =  $('.name').val();
	var phone =  $('.phone').val();
	var yzm =  $('.yzma').val();
	if (name=="") {alert("请输入您的姓名");return false;}
	if (phone=="") {alert("请输入您的电话");return false;}
	if(resps == undefined || resps == ''){alert('请输入图片验证码！');return false;}
	if (yzm=="" || yzm == '请输入验证码') {alert("请输入验证码");return false;}
	var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(phone)) {
        alert("请输入正确的手机号");
        return false;
    }
	$.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://www.aumantruck.com/mobile/om_iov.php?step=prize',
        data: {
        	name:name,
        	phone:phone,
        	code:yzm,
		},
        success: function(data){
        	if(data == 12){
        		alert('验证码错误！');
        	}
        	else if(data == 1){
        		$('.lz').hide();
        		$('.prize').show();
    			$('.zz').show();
    			$('.prize>span').text('18');
        	}else if(data == 2){
        		$('.lz').hide();
        		$('.prize').show();
    			$('.zz').show();
    			$('.prize>span').text('10');
        	}
        	else if(data == 3){
        		$('.lz').hide();
        		$('.prize').show();
    			$('.zz').show();
    			$('.prize>span').text('8');
        	}
        	else if(data == 4){
        		$('.lz').hide();
        		$('.prize').show();
    			$('.zz').show();
    			$('.prize>span').text('5');
        	}
        	else if(data == 5){
        		$('.lz').hide();
        		$('.prize').show();
    			$('.zz').show();
    			$('.prize>span').text('2');
        	}
        	else if(data == 6){
        		$('.lz').hide();
        		$('.prize').show();
    			$('.zz').show();
    			$('.prize>span').text('1');
        	}
        	else if(data == 8){
        		$('.lz').hide();
        		$('.no_prize').show();
    			$('.zz').show();
        	}
        	else if(data == 11){
        		alert('图形验证码过期！');
        		window.preload();
        	}
        }

		});
		// }
  //   aa=2;
  //   jump(3);
}

//人机验证
function getResponse(resp){
      // resp 即验证成功后获取的值
     resps = resp;
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

        var video1 = document.getElementById('video_1');
        video1.addEventListener("touchmove",function(event){
            event.preventDefault();
        });
        var video1s = document.getElementById('swip');
        video1s.addEventListener("touchmove",function(event){
            event.preventDefault();
        });
        var login = document.getElementById('login');
        login.addEventListener("touchmove",function(event){
            event.preventDefault();
        });
        var vinss = document.getElementById('vin');
        vinss.addEventListener("touchmove",function(event){
            event.preventDefault();
        });

        // 适配华为键盘影响布局的问题
        var h = window.innerHeight;
        var myInput = document.getElementById('names');
        var myInputs = document.getElementById('password');

        myInput.addEventListener('focus',handler,false);
        myInputs.addEventListener('focus',handlers,false);

        function handler(){
            
            $('body').height(h);
// 　　       $('body').height($('body')[0].clientHeight);

        }

        function handlers(){
            // alert(h)
            $('body').height(h);
// 　　       $('body').height($('body')[0].clientHeight);

        }

