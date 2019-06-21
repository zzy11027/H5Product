//注册验证
function check_register()
{
    capicha_check();

    if (is_mobile_exists()) {
        if (capicha_time()) {
            return true;
        } else if (!capicha_time()||$("#yzm").val()=='') {
          alert('验证码不正确');
            return false;
        }
    } else {
        return false;
    }
}

//检查验证码有效性
function capicha_time(){
    var code = $("#yzm").val();
    var mobile = $("#tjrtel").val();
    var status=true;
    $.ajax({
            url: 'spike_jgrq.php?step=capicha_time',
            data: {
                code: code,
                mobile:mobile
            },
            type: 'post',
            async: false,
            dataType: 'json',
            success: function callback_ver(result) {
                if (result.res == "1") {
                    status=true;
                } else {
                    status=false;
                }
            }
        });
        return status;
}


//发送验证码
//var a=0;
function send_capicha_regist() {
   
    var mobile_phone = $('#tjrtel').val();
    var yzm_captcha=$('#captcha').val();
    // //alert(yzm_captcha);
    // var status=false;
    // if (mobile_phone == '') {
    //    alert('请输入手机号');
    //    return false;
    // }
    if (mobile_phone == '推荐人电话') {
       alert('请输入手机号');
       return false;
    }else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile_phone))) {
            alert("请输入正确的电话号码");
            return false;
    }
    if($('#getYzm').html()==='重新发送' || $('#getYzm').html()==='获取验证码'){
        $.ajax({
                url: 'spike_jgrq.php?step=send_sms',
                data: {
                    mobile: mobile_phone,
                    captcha: yzm_captcha,
                },
            async:false,
            type: 'post',
            dataType: 'json',
            success: function callback_ver(result) {
                if (result.res == "1") {
                    $("#tjrtel").attr("readonly", "readonly");
                    $("#getYzm").addClass("dengdai congxin");
                    $("#getYzm").attr("disabled", "disabled");
                    capicha_timeout(120);
                    $("#yzm").removeAttr("disabled");
                } else if(result.res == "20")  {
                    alert("图片验证码不正确");
                }else if(result.res == "30")  {
                    alert("请输入图片验证码");
                }else if(result.res == "30")  {
                    alert("请输入图片验证码");
                }else{
                    alert("发送失败");
                }
            }
        });
    }else{
        alert("已经发送！");
        return false;
    }
}
   // a=1;
    //console.log($('#getYzm').html());

// else if($('#getYzm').html()==='重新发送'){
    
//     console.log('ok');
//         //a=0;
//         send_capicha_regist();
//     }
//     else{
//         alert('已经发送！');
//         console.log($('#getYzm').html());
//     }

// }

//点击发送验证码后的定时器
function capicha_timeout(time) {

    --time;

    $("#getYzm").html("(<size style='color:red'>" + time + "s</size>)");
    if (time > 0) {
        // $("#hqyzm").html("重新发送");
        // $('#getYzm').removeAttr("onclick");
        setTimeout("capicha_timeout(" + time + ")", 1000);
        
    } else {
        $("#getYzm").html("重新发送");
        $("#getYzm").removeClass("congxin");
        $("#getYzm").removeAttr("disabled");
        $("#tjrtel").removeAttr("readonly");
    }

}


































//检查用户名格式是否正确
function is_mobile_exists() {
    var mobile = $("#tel").val();
    var status = true;
    if ($('#tel').val() == '') {
        alert('请输入手机号');
        status = false;
        return status;
    }else if (!(/^1\d{10}$/.test(mobile))) {
       alert('请输入正确的手机号');
        $('#yzm').attr('disabled');
        status = false;
        return status;
    }
    return status;
}
function capicha_check() {

    if ($("#yzm").val() == "") {
      alert('请输入验证码');
        return false;
    }

}






































//发送验证码
function send_capicha() {
    var mobile_phone = $('#mobile').val();
    if (mobile_phone == '') {
        return false;
    }
    if (!is_mobile_exists()) {
        return false;
    }
    $.ajax({
        url: 'user.php?step=send_sms_password',
        data: {
            mobile: mobile_phone,
        },
        type: 'post',
        dataType: 'json',
        success: function complete(result) {

            if (result.res == 1) {
                $("#hqyzm").addClass("dengdai congxin");
                $("#hqyzm").attr("disabled", "disabled");
                capicha_timeout(60);
                $("#yzm").removeAttr("disabled");
            } else {
                alert("验证码发送失败");
            }

        }
    });

    return false;
}






//重新发送验证码
function resend_capicha() {
    if ($("#hqyzm").attr("disabled") == undefined) {
        send_capicha();
    }
}




//第三方绑定验证
function check_bind()
{
    capicha_check();

    if (bind_is_mobile_exists()) {
        if (capicha_time() && check_other_user_id()) {
            return true;
        } else {
            $('#capicha_check').html("*验证码不正确");
            return false;
        }
    } else {
        return false;
    }
}






//同意授权按钮选择
function accept_item() {
    if ($(".jizhu img").css("visibility") == 'hidden') {
        $(".jizhu img").css("visibility", "visible");
    } else {
        $(".jizhu img").css("visibility", "hidden");
    }
}




//第三方绑定页面发送验证码
function bind_send_capicha() {
    var mobile_phone = $('#mobile').val();
    if (mobile_phone == '') {
        return false;
    }
    if (!bind_is_mobile_exists()) {
        return false;
    }
    $.ajax({
        url: 'user.php?act=send_sms_password',
        data: {
            mobile: mobile_phone,
        },
        type: 'post',
        dataType: 'json',
        success: function complete(result) {
            if (result.res == 1) {
                $("#hqyzm").addClass("dengdai congxin");
                $("#hqyzm").attr("disabled", "disabled");
                capicha_timeout(60);
                $(".yanzheng").removeAttr("disabled");
            } else {
                alert("验证码发送失败");
            }

        }
    });

    return false;
}





//第三方绑定页面，检查手机号是否正确
function bind_is_mobile_exists() {
    var mobile = $("[name=mobile]").val();
    var status = true;
    if (!(/^1\d{10}$/.test(mobile))) {
        $("#mobile_check").html("*请输入正确的手机号");
        $('#hqyzm').attr('disabled');
        status = false;
        return status;
    } else if ($('#mobile').val() == '') {
        $("#mobile_check").html("*请输入正确的手机号");
        status = false;
        return status;
    } else {
        $("#mobile_check").html("");
        return status;
    }
}

//检查第三方id
function check_other_user_id(){
    var other_id=$('#user_id').val();
    var status = false;
    $.ajax({
        url: '../user.php?act=other_user_id',
        data: {
            other_id: other_id
        },
        async: false,
        type: 'post',
        dataType: 'json',
        success: function(result) {
            if (result.res == '1') {
                status = true;
            } else {
                status = false;
            }
        }
    });
    return status;
}