//rem 改变根元素字体大小
var w = 375;
var f = 16;
var c = document.documentElement.clientWidth;
var nf = c * f / w;
document.documentElement.style.fontSize = nf + 'px';
var aa = 1;
var bb = 1;
var trues = false;
var true1 = true;
(function(){
    init_screen();
})();
// 弹幕
function sendreply() {
    var content = $("#reply-write").val();
    if ($.trim(content) == "") {
        alert("亲，请输入你的想说的话！");
        return false;
    }
    var text=$("#reply-write").val();
    var colortxt = getReandomColor();
    var div='<div style="'+'font-size:14px;width:100%;color:'+colortxt+';"><p>'+text+'</p></div>';
    $("#reply-write").val("");
    $(".d-show").append(div);
    init_screen();
    var date = new Date();
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
    D = date.getDate() + '  ';
    if(date.getDate().toString().length == 1){
        var ri = '0' + date.getDate()+' ';
    }else{
        var ri = date.getDate()+' ';
    }
    h = date.getHours() + ':';
    m = date.getMinutes();
    s = date.getSeconds(); 
    var username = $('#username').val();
    var contents = $('<ul class="ul2"><li>'+username+'</li><li>'+content+'</li><li>'+M+ri+h+m+'</li></ul>');
    $(contents).appendTo($('.ul'));
    $.ajax({
        url: 'http://www.aumantruck.com/mobile/spike_across.php?act=insert_leav',
        type: 'post',
        data: {
            content:content
        },
        //  async : true, //默认为true 异步
        error: function () {

        },
        success: function (data) {
            console.log(data);
            if(data){
                // alert('弹幕发送成功！');
            }
        }
    });
}
function init_screen() {
    var _top = 0;
    $(".d-show").find("div").show().each(function () {
        var _left = 650;
        var _height = 340;

        _top = _top + 10;
        if(_top > 60){_top = 0};
        if (_top >= _height - 120) {
            _top = 40;
        }
        $(this).css({left: _left, top: _top});
        var time = 10000;
        if ($(this).index() % 2 == 0) {
            time = 12000;
        }
        if ($(this).index() % 3 == 0) {
            time = 14000;
        }
        if ($(this).index() % 4 == 0) {
            time = 16000;
        }
        if ($(this).index() % 5 == 0) {
            time = 18000;
        }
        if ($(this).index() % 7 == 0) {
            time = 20000;
        }
        if ($(this).index() % 8 == 0) {
            time = 23000;
        }
        $(this).animate({left: "-" + _left + "px"}, time, function () {
        });
    });
}
// function test() {
//     var i = 0;
//     var aa = $("#danmu").val();
//     var ss = aa.split(",");
// 	var colortxt = getReandomColor();
// 	console.log(colortxt);
//     (function () {
//         if (i > ss.length-1 ) {
//           //  test();
//             return;
//         }
//         else
//         {
//             var div='<div style="'+'font-size:14px;width:100%;color:'+colortxt+'"><p>'+ss[i]+'</p></div>';
//             $(".d-show").append(div);
//             init_screen();
//             i++;
//             window.setTimeout(arguments.callee, 3000);
//         }


//     })();
// }
// test();
oTimers = setInterval("queryHandles()",1000);
function queryHandles(){
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://www.aumantruck.com/mobile/spike_across.php?act=leav',
        success: function(data){
            var ss = data.split(",");
            var length = ss.length;
            console.log(data);
            $(ss).each(function(i,index){
                var colortxt = getReandomColor();
                var div='<div style="'+'font-size:14px;width:100%;color:'+colortxt+'"><p>'+ss[i]+'</p></div>';
                $(".d-show").append(div);
                if(ss.length != 0 && ss.length != 1){
                    var date = new Date();
                    Y = date.getFullYear() + '-';
                    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
                    D = date.getDate() + '  ';
                    if(date.getDate().toString().length == 1){
                    var ri = '0' + date.getDate()+' ';
                    }else{
                    var ri = date.getDate()+' ';
                    }
                    h = date.getHours() + ':';
                    m = date.getMinutes();
                    s = date.getSeconds(); 
                    if(ss[i] != ""){
                        var contents = $('<ul class="ul2"><li>'+ss[i]+'</li><li>'+M+ri+h+m+'</li></ul>');
                    }
                    $(contents).appendTo($('.ul'));
                }
            })
            init_screen();
        }
    });
}
//随机获取颜色值
function getReandomColor() {
    return '#' + (function (h) {
                return new Array(7 - h.length).join("0") + h
            })((Math.random() * 0x1000000 << 0).toString(16))
}

// 弹幕    结束
// 
// 
// 
//
// 导航按钮切换
$('#nav div').each(function(i,index){
    $(this).click(function(){
        if($('#nav div').index(this) == i){
            $(this).css('background-image','url(/mobile/templates/acrossChina/img/' + (i+1)  + '.png)');
        }
        if(i == 0){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/2-2.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/3-3.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/4-4.png)');
            $('.index').show();
            $('.carnum').hide();
            $('.activepic').hide();
            $('.activecall').hide();
            $('.banner').show();
        }
        else if(i == 1){
            // console.log(myChart);
            // return;
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/3-3.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/4-4.png)');
            $('.index').hide();
            $('.carnum').show();
            $('.activepic').hide();
            $('.activecall').hide();
            $('.banner').hide();
            myChart.resize();  
        }
        else if(i == 2){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/2-2.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/4-4.png)');
            $('.index').hide();
            $('.carnum').hide();
            $('.activepic').show();
            $('.activecall').hide();
            $('.banner').hide();
        }
        else if(i == 3){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/2-2.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/3-3.png)');
        	$('.index').hide();
            $('.carnum').hide();
            $('.activepic').hide();
            $('.activecall').show();
            $('.banner').hide();
        }
    })
})

// 按钮切换
$('.zbnav div').each(function(i,index){
    $(this).click(function(){
        if($('.zbnav div').index(this) == i){
            $(this).css('background-image','url(/mobile/templates/acrossChina/img/zb' + (i+1)  + '.png)');
        }
        if(i == 0){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/zb2-2.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/zb3-3.png)');
        }else if(i == 1){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/zb1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/zb3-3.png)');
        }else if(i == 2){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/zb1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/zb2-2.png)');
        }
    })
})

// 按钮切换
// $('#cartimenav div').each(function(i,index){
//     $(this).click(function(){
//         if($('#cartimenav div').index(this) == i){
//             $(this).css('background-image','url(/mobile/templates/acrossChina/img/s' + (i+1)  + '.png)');
//         }
//         if(i == 0){
//             $('.shishi').hide();
//             $('.border').css('display','block');
//             $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/s2-2.png)');
//         }
//         else if(i == 1){
//             $('.border').hide();
//             $('.shishi').css('display','block');
//             $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/s1-1.png)');
//         }
//     })
// })

// 按钮切换
$('.picnav div').each(function(i,index){
    $(this).click(function(){
        if($('.picnav div').index(this) == i){
            $(this).css('background-image','url(/mobile/templates/acrossChina/img/a' + (i+1)  + '.png)');
        }
        if(i == 0){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/a2-2.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/a3-3.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/a4-4.png)');
            $('.picall1').show();
            $('.picall2').hide();
            $('.picall3').hide();
            $('.picall4').hide();
        }else if(i == 1){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/a1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/a3-3.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/a4-4.png)');
            $('.picall1').hide();
            $('.picall2').show();
            $('.picall3').hide();
            $('.picall4').hide();
        }else if(i == 2){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/a1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/a2-2.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/a4-4.png)');
            $('.picall1').hide();
            $('.picall2').hide();
            $('.picall3').show();
            $('.picall4').hide();
        }else if(i == 3){
            $(this).siblings().eq(0).css('background-image','url(/mobile/templates/acrossChina/img/a1-1.png)');
            $(this).siblings().eq(1).css('background-image','url(/mobile/templates/acrossChina/img/a2-2.png)');
            $(this).siblings().eq(2).css('background-image','url(/mobile/templates/acrossChina/img/a3-3.png)');
            $('.picall1').hide();
            $('.picall2').hide();
            $('.picall3').hide();
            $('.picall4').show();
        }
    })
})

// 悬浮 
var heig = $('.container').height();
var bi = 1000/heig;
var bis = bi.toFixed(2);   
$('.f2').click(function(){
    // $('.box').show();
    // $('html,body').addClass('ovfHiden');
    // $('.containerss').show();
    // $('.containerss1').show();
    $('html,body').animate({scrollTop:500},'10');
})
$('.close').click(function(){
    $('.box').hide();
    // $('html,body').removeClass('ovfHiden');
    // $('.containerss').hide();
    // $('.containerss1').hide();
})
var newdraw =new turntableDraw('.drawBtn',{
    share:6,
    speed:"4s",
    velocityCurve:"ease",
    weeks:10,
    callback:function(num,n)
    {
        console.log(num)
        if(num == 1){//10000元
            $('.box').hide();
            $('html,body').addClass('ovfHiden');
            $('.containerss').show();   
            $('.containerss1').show();  
            $('.yes-prize').show();
            $('.yes-prize').css('background-image','url(/mobile/templates/acrossChina/img/10000.png)');
        }
        else if(num == 2){
            $('.box').hide();
            $('html,body').addClass('ovfHiden');
            $('.containerss').show();   
            $('.containerss1').show();  
            $('.yes-prize').show();
            $('.yes-prize').css('background-image','url(/mobile/templates/acrossChina/img/no-prize.png)');
        }else if(num == 3){
            $('.box').hide();
            $('html,body').addClass('ovfHiden');
            $('.containerss').show();   
            $('.containerss1').show();  
            $('.yes-prize').show();
            $('.yes-prize').css('background-image','url(/mobile/templates/acrossChina/img/1000.png)');
        }else if(num == 4){
            $('.box').hide();
            $('html,body').addClass('ovfHiden');
            $('.containerss').show();   
            $('.containerss1').show();  
            $('.yes-prize').show();
            $('.yes-prize').css('background-image','url(/mobile/templates/acrossChina/img/300.png)');
        }else if(num == 5){
            $('.box').hide();
            $('html,body').addClass('ovfHiden');
            $('.containerss').show();   
            $('.containerss1').show();  
            $('.yes-prize').show();
            $('.yes-prize').css('background-image','url(/mobile/templates/acrossChina/img/5000.png)');
        }else if(num == 6){
            $('.box').hide();
            $('html,body').addClass('ovfHiden');
            $('.containerss').show();   
            $('.containerss1').show();  
            $('.yes-prize').show();
            $('.yes-prize').css('background-image','url(/mobile/templates/acrossChina/img/100.png)');
        }
    },
});


function prize(){
    var phone = $('.inp2').val();
    if(phone == ''){alert('您还没有提交哦~');return false};
    if(trues == false){alert('您还没有提交哦~');return false};
    if(true1 == false){alert('您已经抽过了~');return false};
    if(bb == 1){
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://www.aumantruck.com/mobile/spike_across.php?act=prize',
        data: {
            phone:phone
        },
        success: function(data){
            true1 = false;
            console.log(data);
            if(data.res == 1){
                newdraw.goto(1);
            }
            else if(data.res == 2){
                newdraw.goto(5);
            }else if(data.res == 3){
                newdraw.goto(3);
            }else if(data.res == 4){
                newdraw.goto(6);
            }else if(data.res == 5){
                newdraw.goto(4);
            }else if(data.res == 10){
                newdraw.goto(2);
            }
        }
    });
    }
    bb=2;
    jumps(3);
}


$('.yes-prize').click(function(){
    $('.yes-prize').hide();
    $('html,body').removeClass('ovfHiden');
    $('.containerss').hide();   
    $('.containerss1').hide();  
    window.location.href = '';
})

$('.no-prize').click(function(){
    $('.no-prize').hide();
    $('html,body').removeClass('ovfHiden');
    $('.containerss').hide();   
    $('.containerss1').hide();  
    window.location.href = '';
})

//留资.....................................
function tj(){
    if(aa == 1){
        var inp1 = $(".inp1").val();
        var inp2 = $(".inp2").val();
        var inp3 = $(".inp3").find("option:selected").text();
        var inp4 = $(".inp4").find("option:selected").text();
        var inp5 = $(".inp5").find("option:selected").text();
        var inp6 = $(".inp6").find("option:selected").text();
        console.log(inp1,inp2,inp3,inp4,inp5,inp6);

        if (inp1=="") {alert("请输入您的姓名");return false;}
        if (inp2=="") {alert("请输入您的电话");return false;}
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

        if (!reg.test(inp2)) {
            alert("请输入正确的手机号");
            return false;
        }

        if (inp3=="" || inp3 == '省') {alert("请选择省份");return false;}
        if (inp4=="" || inp4 == '城市') {alert("请选择城市");return false;}
        if (inp5=="" || inp5 == '经销商') {alert("请选择经销商");return false;}
        if (inp6=="" || inp6 == '请选择车型') {alert("请选择车型");return false;}


        $.ajax({
            type: 'POST',
            dataType:'json',
            url : 'http://www.aumantruck.com/mobile/spike_across.php?act=info',
            data: {
                name:inp1,
                phone:inp2,
                prov_name:inp3,
                city_name:inp4,
                dealer_name:inp5,
                car_name:inp6,
            },
            success: function(data){
                if(data.res == 1){
                    alert('提交成功');
                    $('.box').show();
                    $('html,body').addClass('ovfHiden');
                    $('.containerss').show();
                    $('.containerss1').show();
                    trues = true;
                }
            }

        });

    }

    aa=2;
    jump(3);


}
function getCitys1(){
    var province1 = $(".inp3  option:selected").val();
    if (province1=="请选择省份") {alert("请选择省份");return false;}
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://www.aumantruck.com/mobile/spike_across.php?act=shi',
        data: {
            parent_id:province1,
        },
        success: function(data){
            console.log(data[0]);
            var quname_html = "<option value='请选择城市'>请选择城市</option>";
            for(var i = 0; i < data.length; i++){
                quname_html += "<option value='"+ data[i].region_id+"'>"+data[i].region_name+"</option>";
            }
            $(".inp4").html(quname_html);
        }
    });
}
function getjxs1(){
    var province1 = $(".inp3  option:selected").val();
    var city1 = $(".inp4  option:selected").val();
    if (city1=="请选择省份") {alert("请选择省份");return false;}
    $.ajax({
        type: 'POST',
        dataType:'json',
        url : 'http://www.aumantruck.com/mobile/spike_across.php?act=check_by_region',
        data: {
            goods_id:1,
            is_activity:1,
            prov:province1,
            city:city1
        },
        success: function(data){
            console.log(data)
            var quname_html = "<option value='请选择经销商'>请选择经销商</option>";
            for(var i = 0; i < data.length; i++){
                quname_html += "<option value='"+ data[i].agency_id+"'>"+ data[i].agency_name +"</option>";
            }
            $(".inp5").html(quname_html);
        }
    });
}
var mySwiper1 = new Swiper ('.Challenge', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    // prevButton:'.swiper-button-prev',
    // nextButton:'.swiper-button-next',
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    loop:true,
}) 
var mySwiper2 = new Swiper ('.pic1', {
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    loop:true
}) 
var mySwiper3 = new Swiper ('.pic2', {
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    loop:true
}) 
var mySwiper4 = new Swiper ('.pic3', {
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    loop:true
}) 
var mySwiper5 = new Swiper ('.pic4', {
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    loop:true
}) 
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
//禁止点击多次
function jumps(count) { 
    window.setTimeout(function(){ 
        count--; 
        if(count > 0) { 
            jumps(count); 
        } else { 
           bb=1; 
        } 
    }, 2000); 
}
// 适配华为键盘影响布局的问题
var h = window.innerHeight;
var myInput = document.getElementById('xm');
var myInputs = document.getElementById('phone');
myInput.addEventListener('focus',handler,false);
myInputs.addEventListener('focus',handler,false);
function handler(){
	$('body').height(h);
}

