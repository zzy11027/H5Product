var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
var lottery = {
	index: -1,    //当前转动到哪个位置，起点位置
	count: 0,     //总共有多少个位置
	timer: 0,     //setTimeout的ID，用clearTimeout清除
	speed: 20,    //初始转动速度
	times: 0,     //转动次数
	cycle: 50,    //转动基本次数：即至少需要转动多少次再进入抽奖环节
	prize: -1,    //中奖位置
	init: function(id) {
		if ($('#' + id).find('.lottery-unit').length > 0) {
			$lottery = $('#' + id);
			$units = $lottery.find('.lottery-unit');
			this.obj = $lottery;
			this.count = $units.length;
			$lottery.find('.lottery-unit.lottery-unit-' + this.index).addClass('active');
		};
	},
	roll: function() {
		var index = this.index;
		var count = this.count;
		var lottery = this.obj;
		$(lottery).find('.lottery-unit.lottery-unit-' + index).removeClass('active');
		index += 1;
		if (index > count - 1) {
			index = 0;
		};
		$(lottery).find('.lottery-unit.lottery-unit-' + index).addClass('active');
		this.index = index;
		return false;
	},
	stop: function(index) {
		this.prize = index;
		return false;
	}
};

function roll() {
	lottery.times += 1;
	lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
	
	if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
		clearTimeout(lottery.timer);
		lottery.prize = -1;
		lottery.times = 0;
		click = false;
	} else {
		if (lottery.times < lottery.cycle) {
			lottery.speed -= 10;
		} else if (lottery.times == lottery.cycle) {
			// var index = 0; //静态演示，随机产生一个奖品序号，实际需请求接口产生
			lottery.prize = index;		
		} else {
			if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
				lottery.speed += 110;
			} else {
				lottery.speed += 20;
			}
		}
		if (lottery.speed < 40) {
			lottery.speed = 40;
		};
		lottery.timer = setTimeout(roll, lottery.speed); //循环调用
	}
	return false;
}

var click = false;
var index;//中奖  0-7
window.onload = function(){
	lottery.init('lottery');

	$('.draw-btn').click(function() {
		if (click) { //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
			return false;
		} else {
			$.ajax({

	            type: 'GET',
	            dataType:'json',
	            url : '/mobile/draw.php',
	            data: {
	            	id : 1
				},
	            success: function(data){
	            	console.log(data);
	            	if(data){
						index = 3;//0 - 7  八个奖项
						lottery.speed = 100;
						roll(); //转圈过程不响应click事件，会将click置为false
						$('.tan').show();//中奖填写信息
					}
	            },
	            error:function(){
	            	alert('错误！')
	            }

	   		});
			
			click = true; //一次抽奖完成后，设置click为true，可继续抽奖
			return false;
		}
	});
};




	function tj(){

		var inp_1 = $(".inp1>input").val();
		var inp_2 = $(".inp2>input").val();
		if (inp_1=="") {alert("请输入您的姓名");return false;}
		if (inp_2=="") {alert("请输入您的电话");return false;}
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        if (!reg.test(inp_2)) {
            alert("请输入正确的手机号");
            return false;
        }


		$.ajax({

            type: 'POST',
            dataType:'json',
            url : 'http://localhost/php_cs/ce.php',
            data: {
            	inp_1:inp_1,
            	inp_2:inp_2,
			},
            success: function(data){

            	if(data){
				}
            }

   		});
	}



	function yes(){
		$('.ling').hide();
	}