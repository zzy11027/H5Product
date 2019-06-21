<?php
function fenxiang()
{   
    $timeres= date("Y-m-d H:i:s",time());
    $timeresc = strtotime($timeres);

    $appid = "wxa1ef57725e6a43a9";
    $secret = "e3a5ac973731879a6fed086067acf0f0";//
    //获取公众号的ACCESS_TOKEN
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$secret";
    $re = file_get_contents($url);
    $res = json_decode($re, true);

    $token_1 = $res['access_token'];

    $urls = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=$token_1&type=jsapi";
 

    $jsapi = file_get_contents($urls);
    $arr = json_decode($jsapi, true);

    //获取jsapi_ticket
    $jsapi_ticket = $arr['ticket'];
    //随机字符串
    $noncestr = getRandChar(16);
    //获取时间戳
    $timestamp = strtotime(date("Y-m-d H:i:s"));
    //获取url
    if ($_SERVER['QUERY_STRING']){
        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/mobile/templates/demo/canvas.php'. '?' . $_SERVER['QUERY_STRING'] ;
    }else{
        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/mobile/templates/demo/canvas.php';//$_SERVER['PHP_SELF'];
    }
 
    $sha1 = sha1("jsapi_ticket=$jsapi_ticket&noncestr=$noncestr&timestamp=$timestamp&url=$url");
    $arr = array('noncestr' => $noncestr, 'timestamp' => $timestamp, 'sha1' => $sha1);
    return $arr;
}

function getRandChar($length)
{
    $str = null;
    $strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    $max = strlen($strPol) - 1;
    for ($i = 0; $i < $length; $i++) {
        $str .= $strPol[rand(0, $max)];//rand($min,$max)生成介于min和max两个数之间的一个随机整数
    }
    return $str;
}
$arr=fenxiang();

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- viewport视图宽度设置      视图宽度 = 设备宽度， 初始化视图大小    可调整的最大宽度   可调整的最小宽度   用户是否可以调整视图宽度-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
    <title>你们辛苦了！向所有春节坚守岗位的卡车司机致敬！</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/indexs.css">
    <link rel="stylesheet" href="./css/swiper.min.css">
    <script src="./js/jquery-1.8.3.min.js"></script>
    <script src="./js/alloy_paper.js"></script>
    <script src="./js/alloy_finger.js"></script>
    <script src="./js/swiper.min1.js"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script>
        wx.config({
            debug: false, // 开启调试模式调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印�?
            appId: 'wxa1ef57725e6a43a9', // 必填，公众号的唯一标识
            timestamp: '<?php echo $arr['timestamp'] ?>', // 必填，生成签名的时间
            nonceStr: '<?php echo $arr['noncestr'] ?>', // 必填，生成签名的随机
            signature: '<?php echo $arr['sha1'] ?>',// 必填，签名，见附
            jsApiList: [
                "onMenuShareTimeline",
                "onMenuShareAppMessage"
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附
        });
        wx.ready(function () {
            wx.onMenuShareAppMessage({
                title: '你们辛苦了！向所有春节坚守岗位的卡车司机致敬！', // 分享标题
                desc: '点击为卡车司机打call！', // 分享描述
                link: 'http://www.aumantruck.com/mobile/templates/demo/canvas.php', // 分享链接
                imgUrl: 'http://www.aumantruck.com/mobile/templates/demo/img/fenx.jpg', // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {

                },
                cancel: function () {
                    //alert("取消成功");
                    // 用户取消分享后执行的回调函数
                }

            });
            wx.onMenuShareTimeline({
                title: '你们辛苦了！向所有春节坚守岗位的卡车司机致敬！', // 分享标题
                link: 'http://www.aumantruck.com/mobile/templates/demo/canvas.php', // 分享链接
                imgUrl: 'http://www.aumantruck.com/mobile/templates/demo/img/fenx.jpg', // 分享图标
                success: function () {

                },
                cancel: function () {
                  //  alert("取消成功");
                    // 用户取消分享后执行的回调函数
                }
            });
        })
    </script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?12ebce5ddde1b698958bacdd8cce7342";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>


</head>
<body>
    <audio src="./img/1.mp3" id="music1" class="audio"    preload="auto" >
        你的浏览器不支持video元素
    </audio>

    <!-- 预加载 -->
<!--     <div class="loading">
        <div class="xl-progress-wp">
            <div class="xl-progress">
                <i class="xl-progress__inner" style="width:0%;"></i>
            </div>
            <div class="xl-progress__txt">0%</div>
        </div>
    </div> -->

    <div class="first"></div>


    <!-- 选择模板页 -->
    <!-- <div class="nono" style="display: none;"> -->
    <div class="choice" id="swips1">
        <div class="swiper-container swiper-container2" id="swip" >
            <div class="swiper-wrapper">
                <!-- 44444444444444444444444444444444444444444444444444444444444444444 -->
                <section class="swiper-slide " id="swiper-slide4" data-slide="3">
                </section>
                <!-- 22222222222222222222222222222222222222222222222 -->
                <section class="swiper-slide " id="swiper-slide2" data-slide="4">
                </section>
                <!-- 333333333333333333333333333333333333333333333333333333333333 -->
                <section class="swiper-slide " id="swiper-slide3" data-slide="5">
                </section>
                <!-- 66666666666666666666666666666666666666666666666666666666666666666 -->
                <section class="swiper-slide " id="swiper-slide6" data-slide="6">
                </section>
                <!-- 66666666666666666666666666666666666666666666666666666666666666666 -->
                <section class="swiper-slide " id="swiper-slide7" data-slide="7">
                </section>
            </div>
        </div>
        <div class="sure"></div>
        <!-- <img src="./img/return.png" alt="" class="return"> -->
    </div>
   <!-- </div>  -->
    <!-- 模板Ending.............. -->

    <div class="Synthesis">
        <img src="./img/tishi.png" alt="" class="tishi">
        <img src="" alt="" class="fales" style="display: none;">
        <canvas id="c2" width="750" height="1334"></canvas>
        <div class="sel4 sels" onclick="Synthesis()">
            
        </div>
        <input id="upload"  class="upload1" name="file" type="file"  accept="image/*" />
        <div class="sel5 sels">
           
        </div>
        <a href="https://www.iqiyi.com/v_19rqqnve40.html#vfrm=2-4-0-1"></a>
        <!-- <img src="./img/return.png" alt=""  class="return"> -->
    </div>
    
    <!-- 生成页面 -->
    <div class="xz">
        <img src="" alt="" id="screenShotImg">
        <span>长按保存图片</span>
        <!-- <img src="./img/return.png" alt="" class="return"> -->
    </div>

    <script src="./js/canvassback.js"></script>
    <script src="./js/lrz.all.bundle.js"></script>
    <!-- <script src="./js/preload.js"></script> -->
    <script>
    var video1s = document.getElementById('swips1');
    video1s.addEventListener("touchmove",function(event){
        // event.preventDefault();
    });
//预加载
// var no = false;//判断是否加载完成
// var img = [
//     './img/first.jpg',
//     './img/1.mp3',
//     './img/1.mp4',
//     './img/1.png',
//     './img/2何卓恩女司机小南.mp3',
//     './img/3小慧.mp3',
//     './img/4张鼎饰演小五.mp3',
//     './img/Answer.png',
//     './img/Answers.png',
//     './img/dui.png',
//     './img/guide.png',
//     './img/hang.png',
//     './img/ing.png',
//     './img/ings.png',
//     './img/ljxq.png',
//     './img/people1.jpg',
//     './img/people2.jpg',
//     './img/people3.jpg',
//     './img/people4.jpg',
//     './img/words.png',
//     './img/单人照.png',
// ];
// var index = 0,
//     len = img.length,
//     progressInner = $(".xl-progress__inner"),
//     progressTxt = $('.xl-progress__txt');
// //图片预加载
// $.preload(img, {
//     minTimer: 3000,
//     //每加载完一张执行的方法
//     each: function (count) {
//         var percent = Math.round((count+1) / len * 100) + '%';
//         progressInner.css("width",percent);
//         progressTxt.html(percent);
//     },
//     // 加载完所有的图片执行的方法
//     end: function () {
//         console.log('预加载完成');
//         no = true;
//         $('.loading').hide();
//         $('.first').fadeIn();
//     }
// });
    </script>
</body>
</html>