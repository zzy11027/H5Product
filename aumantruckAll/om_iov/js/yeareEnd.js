//   查看行车报告
// $('.index>div').click(function(){
// 	$('.index').fadeOut(500);
// 	$('.swiper-containers').fadeIn(500);
// 	// mySwiper.update();
// 	$("#car").addClass("animated1 slideInUps");
// 	$("#container1").addClass("animated1 slideInRight");
// 	$("#sp").addClass("animated1s slideInUp");
// 	$("#sp1").addClass("animated1s slideInUp");
// 	$("#sp2").addClass("animated1s slideInUp");
// })	
var inp1,inp2,inp3,inp4,inp5,inp6,inp3a,file,base,nickname,resps;
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
	var inp1s = $(".se1").find("option:selected").text();
	var inp2s = $(".se2").find("option:selected").text();
	var inp3s = $(".se3").find("option:selected").text();
	var inp4s = $(".se4").find("option:selected").text();
	var inp5s= $(".se5").find("option:selected").text();
	nickname = $('.nick').val();

	if (nickname=="") {alert("请输入您的昵称");return false;}
	if (inp1s=="" || inp1s == '您的年龄') {alert("请选择您的年龄");return false;}
	if (inp2s=="" || inp2s == '货物类型') {alert("请选择货物类型");return false;}
	if (inp3s=="" || inp3s == '您的总行驶里程') {alert("请选择您的总行驶里程");return false;}
	if (inp4s=="" || inp4s == '去过多少个目的地') {alert("请选择去过多少个目的地");return false;}
	if (inp5s=="" || inp5s == '您的新年愿望') {alert("请选择您的新年愿望");return false;}
	if (base==undefined) {alert("请上传头像!");return false;}

	if(inp1s == '20岁以下'){inp1 = '小鲜肉'}else if(inp1s == '21-25'){inp1 = '年少有为的青年'}
	else if(inp1s == '26-30'){inp1 = '小哥哥'}else if(inp1s == '31-35'){inp1 = '社会的中流砥柱'}
	else if(inp1s == '36-45'){inp1 = '成熟稳重的男人'}else if(inp1s == '46以上'){inp1 = '知性大叔'};	
	
	if(inp2s == '日用百货'){inp2 = '事无巨细的'}else if(inp2s == '快递'){inp2 = '和马云关系密切的'}
	else if(inp2s == '冷链'){inp2 = '车冷人不冷的'}else if(inp2s == '生鲜'){inp2 = '走在时间的前面的'}
	else if(inp2s == '电子产品'){inp2 = '走在科技最前沿的'}else if(inp2s == '城建渣土'){inp2 = '白天很少跑车的'}
	else if(inp2s == '煤炭矿石'){inp2 = '擅长上山下河的'}else if(inp2s == '危化品（含汽油）'){inp2 = '从不抽烟喝酒的'}
	else if(inp2s == '其他货物'){inp2 = '集力量与智慧于一身的'};
	
	if(inp3s == '5万以下'){inp3a = '5万以下'}else if(inp3s == '5-10万'){inp3a = '5-10万'}
	else if(inp3s == '10-15万'){inp3a = '10-15万'}else if(inp3s == '20-30万'){inp3a = '20-30万'}
	else if(inp3s == '30万以上'){inp3a = '30万以上'}

	if(inp3s == '5万以下'){inp3 = '跑车很轻松'}else if(inp3s == '5-10万'){inp3 = '相当于绕地球2圈'}
	else if(inp3s == '10-15万'){inp3 = '今年非常忙碌'}else if(inp3s == '20-30万'){inp3 = '相当于绕地球5圈'}
	else if(inp3s == '30万以上'){inp3 = '你全身心投入到运送货物中'}

	if(inp4s == '5个以下'){inp4 = '你运输路线稳定'}else if(inp4s == '5-10个'){inp4 = '你走南闯北'}
	else if(inp4s == '10-15个'){inp4 = '你荣获地标打卡王'}else if(inp4s == '15个以上'){inp4 = '你获得神行侠称号'}

	if(inp5s == '赚它一个亿'){inp5 = '事业顺利';inp6 = '躺着就能狂赚1个亿'}
	else if(inp5s == '躺着就能赚钱'){inp5 = '出门见喜';inp6 = '出门遇贵，低头捡钱'}
	else if(inp5s == '天降对象广撒狗粮'){inp5 = '天降桃花';inp6 = '爱上你的人排长龙钱'}
	else if(inp5s == '出入平安'){inp5 = '出行平安';inp6 = '斗战圣佛为你保驾护航'}
	else if(inp5s == '多点时间陪家人'){inp5 = '家庭和睦';inp6 = '母慈子孝多关心不吵架'}
	else if(inp5s == '换辆好车'){inp5 = '日进斗金';inp6 = '钱都论斤称，房都论栋数'}
	else if(inp5s == '银行存款突破9位数'){inp5 = '存款翻升';inp6 = '存款突破小学生数字极限'}
	else if(inp5s == '全家人身体健康'){inp5 = '身体健康';inp6 = '身体倍棒、吃嘛嘛香！'}	


	// $('.eight').show();
	$('.swiper-containers').hide()
	draw();
})
//话术
// var random1 = ['事无巨细的','和马云关系密切的','车冷人不冷的','走在时间的前面的','走在科技最前沿的','白天很少跑车的','擅长上山下河的','从不抽烟喝酒的','集力量与智慧于一身的'];
// var random2 = ['你运输路线稳定','你走南闯北','你荣获地标打卡王','你获得神行侠称号'];
// var random3 = ['跑车很轻松。','相当于绕地球2圈。','今年非常忙碌。','相当于绕地球5圈。'];
//图片合成
var second = 0;
var trues = true;
function draw(){
	if(trues == true){
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
					ct.fillStyle = "#226AC7";  
					ct.font ="small-caps bold 35px arial";
					// var ran1 = random1[Math.floor(Math.random()*9)];
					// var ran2 = random2[Math.floor(Math.random()*4)];
					// var ran3 = random3[Math.floor(Math.random()*4)];
					console.log(inp1,inp2,inp3,inp4,inp5,inp6,nickname);
					ct.fillText(inp2,230,600,800);//第一个随机
					ct.fillText(inp1,110,650,800);//第一个选项
					ct.fillText(inp4,230,720,800);//第二个随机
					ct.fillText(inp3a,240,800,800);//第二个选项
					ct.fillText(inp3,110,850,600);//第三个随机
					ct.fillText(inp5,110,960,600);//滴三个选项
					ct.fillText(inp6,110,1005,800);//滴三个选项
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
			var src = c.toDataURL("image/png",1);
			$('#screenShotImg').attr('src',src);
			$('#screenShotImg').css('display','block');
			$('#screenShotImg_1').css('display','block');
		}
	}

	drawing(0);
	trues = false;
}
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