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
        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/mobile/templates/newYearbuyCar/video.php'. '?' . $_SERVER['QUERY_STRING'] ;
    }else{
        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/mobile/templates/newYearbuyCar/video.php';//$_SERVER['PHP_SELF'];
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
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
	<title>新年到！福田戴姆勒汽车总裁祝大家新年快乐！</title>
	<link rel="stylesheet" href="/mobile/templates/newYearbuyCar/css/index.css">
	<script src="/mobile/templates/newYearbuyCar/js/jquery.min.js"></script>
	<script src="/mobile/templates/newYearbuyCar/js/rotaryDraw.js"></script>
	<script src="/mobile/templates/newYearbuyCar/js/register_message.js"></script>
	<script src="/mobile/js/region2.js" type="text/javascript"></script>
	<!-- <script src="/mobile/js/region3.js" type="text/javascript"></script> -->
	<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
	<!-- <link href="new0225/css/css.css" rel="stylesheet"/> -->
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
                title: '新年到！福田戴姆勒汽车总裁祝大家新年快乐！', // 分享标题
                desc: '观看总裁视频，领总裁祝福红包', // 分享描述
                link: 'http://www.aumantruck.com/mobile/templates/newYearbuyCar/video.php', // 分享链接
                imgUrl: 'http://www.aumantruck.com/mobile/templates/newYearbuyCar/img/fx.jpg', // 分享图标
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
                title: '新年到！福田戴姆勒汽车总裁祝大家新年快乐！', // 分享标题
                link: 'http://www.aumantruck.com/mobile/templates/newYearbuyCar/video.php', // 分享链接
                imgUrl: 'http://www.aumantruck.com/mobile/templates/newYearbuyCar/img/fx.jpg', // 分享图标
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
<!--start:header-->
        <!-- #BeginLibraryItem "/library/page_header_new.lbi" -->
        <!-- #EndLibraryItem -->
<!--end:header-->
    

	<!-- 遮罩层 -->
	<div class="containerss"></div>
		<img src="/mobile/templates/newYearbuyCar/img/four.jpg" width="100%;">
<!-- 第四页 -->
	<!-- <div class="four"> -->
		<!--返回  -->
		<a href="http://www.aumantruck.com/mobile/om_zdp.php" class="return"></a>
		<video src="/mobile/templates/newYearbuyCar/img/2.mp4" id="video_1" _type="video"
	       	webkit-playsinline="true" webkit-playsinline playsinline x5-playsinline x5-video-player-fullscreen="true" controls="controls"  class="video_1" preload="preload" playsinline="true" x5-video-player-type="h5">
	    该浏览器不支持video属性
		</video>

		<video src="/mobile/templates/newYearbuyCar/img/1.mp4" id="video_1" _type="video"
	       	webkit-playsinline="true" webkit-playsinline playsinline x5-playsinline x5-video-player-fullscreen="true" controls="controls"  class="video_2" preload="preload" playsinline="true" x5-video-player-type="h5">
	    该浏览器不支持video属性
		</video>
		<div class="but4"></div>
		<a href="http://www.aumantruck.com/mobile/om_zdp.php" class="but5"></a>

		<div class="form3">
			<input type="text" class="inp1a" placeholder="请输入您的姓名">
			<input type="text" class="inp2a" placeholder="请输入您的电话">

			 <!-- style="margin: 0 auto;margin-top: 21rem;" -->
	        <div data-width="300" style="margin:0 auto;margin-top: 11rem;" class="l-captcha" data-site-key="86448773e1d3c5312a088c088c7b24db" data-callback="getResponsea" ></div>
			<div class="tj3" onclick="tj3()"></div>
			<div class="close"></div>
		</div>
	<!-- </div> -->
	<div style="width: 100%;height: 3rem;"></div>
	<!-- 中奖弹窗 -->
	<div class="succs" style="display:none">
		<!-- 确认按钮 -->
		<a href=""><div class="confirms"></div></a>
		<span></span>
	</div>
	<script src="//captcha.luosimao.com/static/js/api.js"></script>
	<script src="/mobile/templates/newYearbuyCar/js/index.js"></script>
	<script type="text/javascript">
//预加载
// var no = false;//判断是否加载完成
// var img = [
//     '/mobile/templates/newYearbuyCar/img/again.png',
//     '/mobile/templates/newYearbuyCar/img/confirm.png',
//     '/mobile/templates/newYearbuyCar/img/fail.png',
//     '/mobile/templates/newYearbuyCar/img/form1.png',
//     '/mobile/templates/newYearbuyCar/img/form2.png',
//     '/mobile/templates/newYearbuyCar/img/form3.png',
//     '/mobile/templates/newYearbuyCar/img/four.jpg',
//     '/mobile/templates/newYearbuyCar/img/img_01.png',
//     '/mobile/templates/newYearbuyCar/img/img_02.png',
//     '/mobile/templates/newYearbuyCar/img/index.jpg',
//     '/mobile/templates/newYearbuyCar/img/price.png',
//     '/mobile/templates/newYearbuyCar/img/jhm.png',
//     '/mobile/templates/newYearbuyCar/img/return.png',
//     '/mobile/templates/newYearbuyCar/img/three.jpg',
//     '/mobile/templates/newYearbuyCar/img/tj.png',
//     '/mobile/templates/newYearbuyCar/img/two.jpg',
//     '/mobile/templates/newYearbuyCar/img/zi.png',
//     // '/mobile/templates/newYearbuyCar/img/1.mp4',
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
//     }
// });
	</script>
</body>
</html>