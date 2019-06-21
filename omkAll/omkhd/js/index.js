//var yum="http://www.sy2.cn/app/";//域名用于下落橘子背景
var shell = document.getElementById("mian");
var w = $(document).width();
var dw = w / 20;
var mainh = $(document).height();
$(function () {
    var h = $(document).height();
    var dwc = $(document).width();

    console.log(dwc);


    //**结束得分提示页面*/.endmain endcten
    // $('.endmain').css('height', h + 'px');
    // $('.endmain').css('background-size', dwc + 'px ' + h + 'px');


    //**结束得分提示页面*/

    //**调整开始按图层*/.shellstart{.start

    

    //**调整开始按图层*/

    $('.mian').css('height',  '1015px');
    //$('.bott').css('height',((h-6)*0.2)+'px');
    //$('.person').css('height',((h-6)*0.2)+'px');
    $('.bott').css('height', '150px');
    // $('#person').css('height', '100px');

    var person_left;
    $(".bott_left").bind("touchstart", function () {//人物向左移动
        $("#person").removeClass("car2");
        $("#person").addClass("car1");
        $('#person').attr('i', '1');
        var set = setInterval(function () {
            var p = $('#person').attr('i');
            if (p == '1') {//判断手机触摸
                person_left = $('#person').css('margin-left');
                person_left = parseInt(person_left);
                if (person_left > 0) {//判断人物是否移动出边界
                    $('#person').css('margin-left', (person_left - 5) + 'px');
                }
            }
            if (p == '0') {
                clearInterval(set);
            }
        }, 0);
    });

    $(".bott_left").bind("touchend", function () {//人物向左移动停止，手触摸离开就改变状态
        $('#person').attr('i', '0');

    });


    $(".bott_right").bind("touchstart", function () {//人物向右移动
        $("#person").removeClass("car1");
        $("#person").addClass("car2");
        $('#person').attr('i', '1');
        var set = setInterval(function () {
            var p = $('#person').attr('i');
            if (p == '1') {
                person_left = $('#person').css('margin-left');
                person_left = parseInt(person_left);
                if (person_left < (w - 300)) {//判断人物是否移动出边界
                    $('#person').css('margin-left', (person_left + 5) + 'px');
                }
            }
            if (p == '0') {
                clearInterval(set);
            }
        }, 0);
    });

    $(".bott_right").bind("touchend", function () {//人物向右移动停止
        $('#person').attr('i', '0');
    });

    $("#person").bind("touchmove", function (e) {
        $('#person').attr('i', '1');
        e.preventDefault();
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        var elm = $("#person").offset();
        var x = touch.pageX-110;
        var y = touch.pageY;
        
        if (x>0 && x<w-300){
            $("#person").css('margin-left', x+'px');
        }
    });

    console.log("111");
    allrun();


});


//**水果随机出现位置*/
function ran() {//随机1到20的数的函数
    var kwc = Math.ceil(Math.random() * 20);
    return kwc;
}
//**水果下落函数*/
function fall() {
    var s, der, ki, col;
    s = ran();
    der = ran();
    if (der == 5 || der == 10 || der == 15) {
        ki = '0';//0就扣分
        col = 'url(templates/omkhd/img/hongbao1.jpg)';
        //col='url('+yum+'/api/vendor/game/jieshuiguo/img/orange1.png)';//如果设置有域名就用此段代码
    } else {
        ki = '1';//如果是1就记分
        col = 'url(templates/omkhd/img/hongbao.png)';
        //col='url('+yum+'/api/vendor/game/jieshuiguo/img/orange.png)';//如果设置有域名就用此段代码
    }

    var ml = dw * s;
    if (ml > (w - 80)) {//判断右边果子是否超出边界
        ml = ml - 90;
    }

    var myDate = new Date();
    var myid = myDate.getTime();

    var html = shell.innerHTML;
    shell.innerHTML = html + '<div ki="' + ki + '" id="' + myid + '" style="position:absolute;z-index: 0;width: 80px;margin-left: ' + ml + 'px;margin-top: 0px;height: 88px;background: ' + col + ' no-repeat;background-size: 100% 100%"></div>';
    var fallset = setInterval(function () {
        var obsg = document.getElementById(myid);//获取下落水果对象

        var vt = obsg.style.marginTop;
        vt = parseInt(vt);
        obsg.style.marginTop = (vt + 5) + 'px';
        if (vt > mainh - 351) {
            var person = $('#person').css('margin-left');//获取人物的位置
            person = parseInt(person);
            if (ml > person && ml < (person + 227)) {//判断接没有接住
                //**记录分数*/
                var ki = $('#' + myid).attr('ki');
                var fen = $('#person').attr('fens');
                var kiy = $('#suju').attr('kiy');
                fen = parseInt(fen);

                if (kiy == '1') {//判断游戏是否结束没有
                    if (ki == '1') {//判断是否该加减分数
                        fen = fen + 1;//加分
                    } else {
                        fen = fen - 2;//减分
                        var temp = ml-25;
                        $("#boom").css({"margin-left":temp+"px"})
                        $("#boom").show();
                        setTimeout(function () {
                            $("#boom").hide();
                        },500)
                    }
                }

                $('#person').attr('fens', fen);
                $('#czsl').html(fen+"个");//分数记录
                $('#endfeng').html(fen);

                //**记录分数*/
                console.log(fen);
                clearInterval(fallset);
                obsg.remove();
            }
        }
        if (vt > mainh - 230) {
            clearInterval(fallset);
            obsg.remove();
        }
    }, 10);

}


function allrun() {//游戏总运行函数
    var endrun = setInterval(function () {//定时游戏结束
        $('#suju').attr('kiy', '0');
        // $('#ing').css('display', 'none');
        // $('#end').css('display', 'block');
        console.log('游戏结束');
        clearInterval(endrun);

       

        var fen = $('#person').attr('fens');
        var openid = $("#openid").val();
        $.ajax({
            type: "GET",
            url: "http://jhb.douyar.cc/omk_hd.php?step=inser&openid="+openid+"&fen="+fen,
            dataType: 'json',
            success: function (result) {
                $("#hb_num1").html(fen);
                $("#hb_num2").html(result+"%");
                $("#cj_num1").html(fen);
                $("#cj_num2").html(result+"%");
                $('#ing').hide();
                $('#bg2').show();
                $('#box_bg').show();
                $('#hb_box').show();

                 wx.onMenuShareAppMessage({
                    title: '抢到个'+fen+'包，击败了全国'+result+'%的卡友，可敢与我一战！', // 分享标题
                    desc: '来挑战一下，你能抢到几个包？', // 分享描述
                    link: 'http://jhb.douyar.cc/omk_hd.php', // 分享链接
                    imgUrl: 'http://www.aumantruck.com/mobile2/templates/omkhd/img/logo.jpg', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        //alert("分享成功");
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                       // alert("取消成功");
                        // 用户取消分享后执行的回调函数
                    }

                });
            }
        });

    }, 16000);

    var time1 = setInterval(function () {//时间跳动表
        var pd = $('#suju').attr('kiy');
        if (pd == '0') {
            clearInterval(time1);
        } else {
            var times = $('#time1').html();
            times = parseInt(times);
            times = times - 1;
            $('#time1').html(times+"秒");
        }


    }, 1000);


    var run = setInterval(function () {//游戏运行函数
        var kiy = $('#suju').attr('kiy');
        if (kiy == '1') {
            fall();
        } else {
            clearInterval(run);
        }
    }, 300);
}

function boxBgClick() {
    $('#box_bg').hide();
    $('#hb_box').hide();
}

function zlyc() {
    // alert("再来一次");
    window.location.reload();
}

// function chai() {
//     alert("chai");
// }

// function tijiao() {
//     alert("tijiao");
// }

function queding() {
    hideAll();
    $("#cj_box").show();
}

function xycj() {
    hideAll();
    $("#fenxiangbg").show();
}

function hideAll(){
    $("#box_bg").hide();
    $("#hb_box").hide();
    $("#zj_box").hide();
    $("#cj_box").hide();
    $("#no_zj_box").hide();
    $("#fenxiangbg").hide();

}

function reten() {
    window.location.reload();
}

function funrun() {
    $('.beijinzez').css('display', 'none');
    allrun();
}

function fenxiangbgClick () {
    hideAll();
    $("#cj_box").show();
}

