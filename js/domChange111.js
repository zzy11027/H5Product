//跳过
var aa;
$('.skip').click(function(){
    // regSwiper();
    Swiper1.slideTo(7, 500, false);
    $('.page2 ').find('.ai,.xiang,.haha,.xiao,.lu,.qi').hide();
    $('.page4 ').find('.tanqi').hide();
    $('.angry2').hide();
    $('.Template').show();
    $('.cashi').remove();
})
//扎心了吗？
$('.swiper-slide>.cashi').on('touchstart',function(e) {
    $(this).remove();
});
//点击关闭二维码
$(document).on("click touchstart",".close",function(){
    if($(this).parent().attr('class') == 'follow'){
        $('.follow ').remove();
    }else{
        $('.container').hide();
        // $('.prize').hide();
        $('.tjSuccess').hide();
        $('.file').hide();
    }
    $('.follow').hide();//隐藏二维码页面
});
//点击关闭二维码
$(document).on("click touchstart",".guan",function(){
    $('.follow ').remove();
    $('.follow').hide();//隐藏二维码页面
});
//分享
$('.fx').click(function(){
    $('.fximg').show();
})
//关闭分享
$(document).on("click touchstart",".fximg",function(){
    $('.fximg').hide();
});
//返回
$(document).on("click touchstart",".return",function(){
    regSwiper();
    Swiper1.slideTo(0, 500, false);
    $('.Template').hide();
});
//一键解锁
$(document).on("click touchstart",".key",function(){
    window.location.href = 'http://aoling.douyar.cc/index/product/made.html';
});
//关闭alert
$('.alert>.closes').click(function(){
    $('.alert').hide();
    $('.container').css('z-index','11');
    if($('.alert>.dd').text() == '您已领过奖啦，请把机会留给他人哦……' || $('.alert>.dd').text() == '手机号不符合！'){
        window.location.href = '';
    }
})
//领奖
var isLing = 0;
$('.Determine').click(function(){
    // if(isLing == 1){alert('您已领取！');return false;}
    var openid = $("#openid").val();
    var token = $("#token").val();
    var lucky_tel = $(".phone").val();
    if (lucky_tel == "") {
        $('.alert').show();
        $('.container').css('z-index','99999');
        $('.container').show();
        $('.alert>.dd').text('请输入手机号!');
        return false;
    }
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(lucky_tel)) {         
        $('.alert').show();
        $('.container').show();
        $('.alert>.dd').text('请输入手机号!');
    }
    $.ajax({
        url:'http://al.douyar.cc/ol/double.php?step=info',
        type:'post',
        data:{
            phone:lucky_tel,
            openid:$('#openid').val()
        },
        dataType:'json',
        beforeSend: function(request) { 
                request.setRequestHeader("Authorization", $('#token').val()); 
        }, 
        success:function(data){
            isLing = 1;
            if(data.code == 1){
                $('.prize').hide();
                $('.tjSuccess').show();
                $('.container').show();
                return false;
            }else if(data.code == -1){
                $('.container').show();
                $('.container').css('z-index','99999');
                $('.alert>.dd').text('未知错误！');
                return false;
            }
        }
    })
});
//确认选择模板
var imgSrc;
var imgSrcs;
$('.sure').click(function(){
    $('#but').css('top','1rem');
    if(mySwiper1s.snapIndex == 0){
        imgSrc = './img/Template1.png';
        imgSrcs = './img/1s.png';
    }
    else if(mySwiper1s.snapIndex == 1){
        imgSrc = './img/Template2.png';
        imgSrcs = './img/2s.png';
    }
    else if(mySwiper1s.snapIndex == 2){
        imgSrc = './img/Template3.png';
        imgSrcs = './img/3s.png';
    }
    else if(mySwiper1s.snapIndex == 3){
        imgSrc = './img/Template4.png';
        imgSrcs = './img/4s.png';
    }
    else if(mySwiper1s.snapIndex == 4){
        imgSrc = './img/Template5.png';
        imgSrcs = './img/5s.png';
    }
    $('.swiper-container1').hide();
    $('.Template').hide();
    $('.Synthesis').show();
    $('.fales').attr('src',imgSrcs);
    $('.fales').show();
})

// 话费红包，全民疯抢点击事件
function prize(){
    var openid = $("#openid").val();
    var token = $("#token").val();
    $.ajax({
        url:'http://al.douyar.cc/ol/double.php?step=prize',
        type:'post',
        data:{
            openid:$('#openid').val()
        },
        dataType:'text',
        beforeSend: function(request) { 
                request.setRequestHeader("Authorization", $('#token').val()); 
        }, 
        success:function(data){
        	isPrize = 1;
            var datas = JSON.parse(data);
            //未中奖
            if(datas.code < 0){
                $(".container").show();
                $(".file").show();   
            }else if(datas.code == 1){
                $(".container").show();
                $('.prize').show();
                $('.prize>.yuan').text('1元');
            //中奖5元
            }else if(datas.code == 2){
                $(".container").show();
                $('.prize').show();
                $('.prize>.yuan').text('5元');
            //中奖1元
            }else if(datas.code == 3){
                $(".container").show();
                $('.prize').show();
                $('.prize>.yuan').text('10元');
            }else if(datas.code == 8){
                $(".container").show();
                $('.prize').show();
                $('.prize>.yuan').text(datas.content);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('未知错误！');
        }
    })    
}
function regSwiper(){
    Swiper1 = new Swiper ('.swiper-container1', {
        direction: 'vertical', // 垂直切换选项
        effect: 'fade',
        noSwipingClass : 'stop-swiping',
        longSwipesRatio : 0.4,
        cubeEffect: {
            slideShadows: false,
            shadow: false,
        },
        on: {
            slideChange: function () {
                // 获取当前活动下标
                var index = this.realIndex;
                console.log(index)
                if(index == 1){
                    t1.play();
                    // t1.restart();
                    $('.follow').show();
                    $('.Template').hide();
                    $('#but').css('top','2.7rem');
                    $('.logo').css('background-image','url(./img/logo.png)');
                }
                if(index == 2){
                    t2.play();
                    // t2.restart();
                    $('.page1 ').find('.angry2').hide();
                    $('.Template').hide();
                    $('.cashi').remove();
                    $('.logo').css('background-image','url(./img/logo.png)');
                }
                if(index == 3){
                    t3.play();
                    console.log(t3);
                    $('.page2 ').find('.ai,.xiang,.haha,.xiao,.lu,.qi').hide();
                    $('.Template').hide();
                    $('.cashi').remove();
                    $('.logo').css('background-image','url(./img/logo.png)');
                }
                if(index == 4){
                    t4.play();
                    $('.page3 ').find('.musics').hide();
                    $('.Template').hide();
                    $('.cashi').remove();
                    $('.logo').css('background-image','url(./img/logo.png)');
                }
                if(index == 5){
                    t5.play();
                    $('.page4 ').find('.tanqi').hide();
                    $('.Template').hide();
                    $('.cashi').remove();
                    $('.logo').css('background-image','url(./img/logo.png)');
                }
                if(index == 6){
                    $('.page2 ').find('.ai,.xiang,.haha,.xiao,.lu,.qi').hide();
                    $('.Template').show();
                    $('.cashi').remove();
                    $('.logo').css('background-image','url(./img/logos.png)');
                }
            }
        }
    })   
}
//模板
var mySwiper1s = new Swiper('.swiper-container2',{
    effect : 'coverflow',
    observer:true,
    observeParents:true,
    slidesPerView: 2.0,
    centeredSlides: true,
    initialSlide :2,//默认第二个
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows : true
    },
    on: {
        slideChange: function () {
            // 获取当前活动下标
            var index = this.realIndex;
        }
    }
}) 





$('.queding').click(function(){
    $('.lz1').show();
    $(this).parent().hide();
    $('.container').show();
})
$('.cc').click(function(){
    $('.lz1').hide();
    $('.container').hide();
})

$('.file').click(function(){
    $(this).hide();
    $('.lz1').show();
    $('.container').show();
})

$('.tj2').click(function(){
        var inp1 = $(".lz1>.inp1").val();
        var inp2 = $(".lz1>.inp2").val();
        var inp3 = $(".lz1>.inp3").find("option:selected").val();
        var inp4 = $(".lz1>.inp4").find("option:selected").text();
        var cxid = $(".lz1>.inp4").find("option:selected").val();
        var inp5 = $(".lz1>.inp5").find("option:selected").text();
        var inp6 = $(".lz1>.inp6").find("option:selected").text();
        var inp7 = $(".lz1>.inp7").find("option:selected").text();

        if (inp1=="") {alert("请输入您的姓名");return false;}
        if (inp2=="") {alert("请输入您的电话");return false;}
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        if (!reg.test(inp2)) {alert("请输入正确的手机号");return false;}
        if (inp3=="-1") {alert("请选择称呼");return false;}
        if (inp4=="请选择车型") {alert("请选择车型");return false;}
        if (inp5=="请选择身省份") {alert("请选择身省份");return false;}
        if (inp6=="请选择城市") {alert("请选择城市");return false;}
        if (inp7=="请选择经销商") {alert("请选择经销商");return false;}
        $.ajax({
            type: 'POST',
            dataType:'json',
            url : 'http://al.douyar.cc/ol/double.php?step=info_dmp',
            data: {
                name:inp1,
                phone:inp2,
                sex:inp3,
                cx:inp4,
                cxid:cxid,
                prove:inp5,
                city:inp6,
                jxs:inp7,
                openid:$('#openid').val()
            },
            beforeSend: function(request) { 
                request.setRequestHeader("Authorization", $('#token').val()); 
            }, 
            success: function(data){
                console.log(data);
                if(data.code > 0){
                    alert('留资成功！');
                    $('.lz1').hide();
                    $('.container').hide();
                    return false;                    
                }
            }
        });
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



function getcity(){
    var prov = $(".inp5 option:selected").val();
    $.ajax({
        type: "post",
        url: "/ol/ol_on.php?step=city",
        data: {
            prov:prov
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log(typeof data);
            var cxhtml = "<option value='请选择城市'>请选择城市</option>";
            for (var i = 0; i < data.length; i++) {
                cxhtml += "<option value='" + data[i].city + "'>" + data[i].city + "</option>";
            }
            $(".inp6").html(cxhtml)
        }
    })
}
function getjxs(){
    var city = $(".inp6 option:selected").val();
    var prov = $(".inp5 option:selected").val();
    $.ajax({
        type: "post",
        url: "/ol/ol_on.php?step=jxs",
        data: {
            city:city,
            prov:prov
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            var cxhtml = "<option value='请选择经销商名称'>请选择经销商名称</option>";
            for (var i = 0; i < data.length; i++) {
                cxhtml += "<option value='" + data[i].jxs + "'>" + data[i].jxs + "</option>";
            }
            $(".inp7").html(cxhtml)
        }
    })
}