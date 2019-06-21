//   查看行车报告
$('.index>div').click(function(){
	$('.index').fadeOut(500);
	$('.swiper-containers').fadeIn(500);
	// mySwiper.update();
	$("#car").addClass("animated1 slideInUps");
	$("#container1").addClass("animated1 slideInRight");
	$("#sp").addClass("animated1s slideInUp");
	$("#sp1").addClass("animated1s slideInUp");
	$("#sp2").addClass("animated1s slideInUp");
})	
var ipn1,inp2,inp3,inp4,inp5,file,base,nickname,resps;
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
		// console.log(base);
    }).catch(function (err) {
        // 处理失败会执行
    }).always(function () {
        // 不管是成功失败，都会执行
        // $('<img />').attr('src',rst.base64).appendTo('body');
    });
});
//年度报告
$('.look').click(function(){
	var inp1s = $(".sel1").find("option:selected").text();
	if(inp1s == '20岁以下'){inp1 = '小鲜肉'}else if(inp1s == '21-25'){inp1 = '年少有为的青年'}
	else if(inp1s == '26-30'){inp1 = '小哥哥'}else if(inp1s == '31-35'){inp1 = '社会的中流砥柱'}
	else if(inp1s == '36-45'){inp1 = '成熟稳重的男人'}else if(inp1s == '46以上'){inp1 = '知性大叔'};	
	inp2 = $(".sel2").find("option:selected").text();
	inp3 = $(".sel3").find("option:selected").text();
	inp4 = $(".sel4").find("option:selected").text();
	inp5 = $(".sel5").find("option:selected").text();
	nickname = $('.nick').val();
	if (nickname=="") {alert("请输入您的昵称");return false;}
	if (inp1=="" || inp1 == '您的年龄') {alert("请选择您的年龄");return false;}
	if (inp2=="" || inp2 == '货物类型') {alert("请选择货物类型");return false;}
	if (inp3=="" || inp3 == '您的总行驶里程') {alert("请选择您的总行驶里程");return false;}
	if (inp4=="" || inp4 == '去过多少个目的地') {alert("请选择去过多少个目的地");return false;}
	if (inp5=="" || inp5 == '您的新年愿望') {alert("请选择您的新年愿望");return false;}
	if (base==undefined) {alert("请上传头像!");return false;}
	$('.eight').show();
	$('.swiper-containers').hide();
})
//话术
var random1 = ['事无巨细的','和马云关系密切的','车冷人不冷的','走在时间的前面的','走在科技最前沿的','白天很少跑车的','擅长上山下河的','从不抽烟喝酒的','集力量与智慧于一身的'];
var random2 = ['你运输路线稳定','你走南闯北','你荣获地标打卡王','你获得神行侠称号'];
var random3 = ['跑车很轻松。','相当于绕地球2圈。','今年非常忙碌。','相当于绕地球5圈。'];
//图片合成
var second = 0;
function draw(){
	var c=document.createElement('canvas');
		ct=c.getContext('2d');
		c.width=750;
		c.height=1334;
	function drawing(n){
		if(n<2){
			var img=new Image;
			img.setAttribute('crossOrigin', 'anonymous');
			if(second == 0){img.src = '/mobile/templates/om_iov/imgs/9.png';}//随机图片
			else{img.src = base}//二维码
			img.onload=function(){
				if(second == 0){
					// ct.rect(0,0,c.width,c.height);
					ct.fillStyle='#fff';
					ct.fill(); 
					ct.drawImage(img,0,0,750,1334);
					ct.textAlign='left';
					ct.fillStyle = "#000";  
					ct.font ="small-caps  30px arial";
					var ran1 = random1[Math.floor(Math.random()*9)];
					var ran2 = random2[Math.floor(Math.random()*4)];
					var ran3 = random3[Math.floor(Math.random()*4)];
					console.log(ran1,ran2,ran3,inp1,inp2,inp5,nickname);
					ct.fillText(ran1,210,670,800);//第一个随机
					ct.fillText(inp1,110,720,800);//第一个选项
					ct.fillText(ran2,210,768,800);//第二个随机
					ct.fillText(inp3,250,815,800);//第二个选项
					ct.fillText(ran3,110,865,600);//第三个随机
					ct.fillText(inp5,110,960,600);//滴三个选项
					ct.font ="small-caps  70px arial"; 
					ct.fillStyle = "#fff";
					ct.fillText('HI,',150,420,300);
					ct.fillText(nickname,150,500,300);
					second = 1;
				}else{
					ct.arc(375,226,100,0,2*Math.PI,false);
					// ct.fillStyle = 'red';
					// ct.fill();
					ct.clip();
					ct.drawImage(img,275,126,200,200);
				}
				drawing(n+1);//递归
			}
		}else{
			$('.eight').hide();
			$('.xz').show();
			var src = c.toDataURL("image/png",10);
			$('#screenShotImg').attr('src',src);
			$('#screenShotImg').css('display','block');
			$('#screenShotImg_1').css('display','block');
		}
	}

	drawing(0);
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
	var yzm =  $('.yzm').val();
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
        	console.log(data);
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
     console.log(resp);  // resp 即验证成功后获取的值
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