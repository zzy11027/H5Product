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
            url: 'spike_csyzm.php?step=capicha_time',
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
var a=0;
function send_capicha_regist() {
    var mobile_phone = $('#tjrtel').val();
    var yzm_captcha=$('#captcha').val();
    //alert(yzm_captcha);
    var status=false;
    if (mobile_phone == '') {
       alert('请输入手机号');
       return false;
    }
    if (mobile_phone == '推荐人电话') {
       alert('请输入手机号');
       return false;
    }else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile_phone))) {
            alert("请输入正确的电话号码");
            return false;
    }

    if(!yzm_captcha){
        alert("*请输入图片验证码");
        return false;
    }
    if(yzm_captcha == "请输入验证码"){
        alert("*请输入图片验证码");
        return false;
    }

     $.ajax({
        url: 'spike_csyzm.php?step=check_captcha_aa',
        data: {
            captcha: yzm_captcha,
        },
        async:false,
        type: 'post',
        dataType: 'json',
        success: function(result) {
            if (result == '0') {
                status=true;
            }
            else if(result == '2'){
                 alert("*图片验证码错误");
                  return status;
            }else{
                return status;
            }
        }
    });
    if(status){
        $.ajax({
                url: 'spike_csyzm.php?step=send_sms',
                data: {
                    mobile: mobile_phone,
                },
            async:false,
            type: 'post',
            dataType: 'json',
            success: function callback_ver(result) {
                if (result.res == "1") {
                    $("#tjrtel").attr("readonly", "readonly");
                    $("#getYzm").addClass("dengdai congxin");
                    $("#getYzm").attr("disabled", "disabled");
                    capicha_timeout(60);
                    $("#yzm").removeAttr("disabled");
                } else {
                    alert("验证码发送失败");
                }
            }
        });
    }
}  

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

