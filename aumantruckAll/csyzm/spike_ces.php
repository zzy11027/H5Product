


<?php
/**
 * 荐购的活动
 * seraph
 */
define('IN_ECS', true);
define('ECS_ADMIN', true);
require(dirname(__FILE__) . '/includes/init.php');
require(ROOT_PATH . 'includes/lib_order.php');
require_once(dirname(__FILE__) . '/includes/class/Message.class.php');
require(ROOT_PATH . 'includes/cls_json.php');

$user_id=$_SESSION['user_id'];
$GLOBALS['smarty']->assign('user_id', $user_id);

if( !empty($_COOKIE['ECS']['username']) && !empty($_COOKIE['ECS']['user_id']) && !empty($_COOKIE['ECS']['password'])){
    $GLOBALS['smarty']->assign('userid', $_COOKIE['ECS']['user_id']);
    $GLOBALS['smarty']->assign('username', $_COOKIE['ECS']['username']);
}else{
    $GLOBALS['smarty']->assign('userid', '');
    $GLOBALS['smarty']->assign('username', '');
}


if (!isset($_REQUEST['step'])) {
    $_REQUEST['step'] = "index";
}

if ($_REQUEST["step"] == "index") {
    //$suiji = rand(1000,9999);
    //判断是否是手机登陆
    $ua = strtolower($_SERVER['HTTP_USER_AGENT']);
    $uachar = "/(nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|mobile)/i";
    if (($ua == '' || preg_match($uachar, $ua)) && !strpos(strtolower($_SERVER['REQUEST_URI']), 'wap')) {
        //授权登陆
        $appid = "wxa1ef57725e6a43a9";
        $REDIRECT_URI = "http://www.aumantruck.com/spike_tuijg.php?step=test";
        //获取公众号的ACCESS_TOKEN
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=" . urlencode($REDIRECT_URI) . "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        header("Location:" . $url);
    } else {
        echo "请您通过正确的方式，进入活动！";
    }
}

//进入首页
if ($_REQUEST["step"] == "test") {
    $openid = openid();
    $openid = $openid['openid'];
    if(empty($openid)){
        $appid = "wxa1ef57725e6a43a9";
        $REDIRECT_URI = "http://www.aumantruck.com/spike_tuijg.php?step=test";
        //获取公众号的ACCESS_TOKEN
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=" . urlencode($REDIRECT_URI) . "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        header("Location:" . $url);
    }else if(empty($token_1)){
    	//服务号
        $appid = "wxa1ef57725e6a43a9";
        $secret = "e3a5ac973731879a6fed086067acf0f0";
        //获取公众号的ACCESS_TOKEN
        $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$secret";
        $re = file_get_contents($url);
        $res = json_decode($re, true);
        $token_1 = $res['access_token'];
    }
    $subscribe_msg = 'https://api.weixin.qq.com/cgi-bin/user/info?access_token='.$token_1.'&openid='.$openid;
    $subscribe = file_get_contents($subscribe_msg);
    $nidaye=json_decode($subscribe,true);
    $zyxx = $nidaye['subscribe'];
    $nickname=$nidaye["nickname"];

    // if ($zyxx != 1) {
    //     $smarty->display('tuijg/share.html');
    // } else {
        //页面跳转
        $arr = fenxiang();
        $smarty->assign('arr', $arr);
        $smarty->assign('openid', $openid);

        $smarty->display('tuijg/index.html');
    //}

}


if ($_REQUEST["step"] == "tijiao") {
     $dqtime =  strtotime(date('Y-m-d H:i:s')); 
    if($dqtime < '1523808060'){
        echo "<script>alert('活动开始时间4月16日！敬请期待');location.href = 'spike_tuijg.php?step=test';</script>";
        exit();
    }
	if ($user_id=='') {
        echo "<script>alert('请登录');location.href = '/mobile/checkLogin.php?act=login&step=active&huodong=tuijg';</script>";
        die();
    }
   $openid = $_REQUEST['openid'];
    if(!$openid){
    	$appid = "wxa1ef57725e6a43a9";
        $REDIRECT_URI = "http://www.aumantruck.com/spike_tuijg.php?step=test";
        //获取公众号的ACCESS_TOKEN
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=" . urlencode($REDIRECT_URI) . "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        header("Location:" . $url);
    }
    $sqls = "select sfz,yh,yhkh from hd_info where lbid=130 and userid=$user_id";
    $ress = $GLOBALS['db']->getRow($sqls);
    $data_xx['sfz'] = $ress['sfz'];
    $data_xx['yh'] = $ress['yh'];
    $data_xx['yhkh'] = $ress['yhkh'];
	
    /* 取得国家列表、商店所在国家、商店所在国家的省列表 */
        $GLOBALS['smarty']->assign('city_list', get_regions(1, 1));
        $GLOBALS['smarty']->assign('shop_country', $_CFG['shop_country']);
        $GLOBALS['smarty']->assign('shop_province_list', get_regions(1, $_CFG['shop_country']));

    $arr = fenxiang();
    $smarty->assign('arr', $arr);
    $smarty->assign('data_xx', $data_xx);
    $smarty->assign('openid', $openid);
    $smarty->display('tuijg/liuzi.html');
}

if ($_REQUEST["step"] == "gezx") {
    $dqtime =  strtotime(date('Y-m-d H:i:s')); 
    if($dqtime < '1523808060'){
        echo "<script>alert('活动开始时间4月16日！敬请期待');location.href = 'spike_tuijg.php?step=test';</script>";
        exit();
    }
    if ($user_id=='') {
        echo "<script>alert('请登录');location.href = '/mobile/checkLogin.php?act=login&step=active&huodong=tuijg';</script>";
        die();
    }
    $openid = $_REQUEST['openid'];
    if(!$openid){
    	$appid = "wxa1ef57725e6a43a9";
        $REDIRECT_URI = "http://www.aumantruck.com/spike_tuijg.php?step=test";
        //获取公众号的ACCESS_TOKEN
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=" . urlencode($REDIRECT_URI) . "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        header("Location:" . $url);
    }

     $sql = "select tjrname from hd_info where  userid=$user_id and lbid=130";
     $res = $GLOBALS['db']->getone($sql);

    $sqls = "select name,phone,num from hd_info where lbid=130 and userid=$user_id";
    $ress = $GLOBALS['db']->getAll($sqls);
    $arr = fenxiang();
    $smarty->assign('arr', $arr);
    $smarty->assign('openid', $openid);
    $smarty->assign('name', $res);
    $smarty->assign('gcr', $ress);
    $smarty->display('tuijg/myself.html');
}


if ($_REQUEST["step"] == "denl") {
    //活动已结束时间
    $dqtime =  strtotime(date('Y-m-d H:i:s'));  //当前time();

     if($dqtime < '1523808060'){
        echo 8;
        exit();
    }

    // if($dqtime > '1520265540'){
    //     echo "<script>alert('本次活动已结束，所有奖品将于3个工作日内发放');history.go(-1);</script>";
    //     exit();
    // }

    if ($user_id=='') {
        echo 2;
        die();
    }else{
    	 echo 1;
        die();
    }

    
}

if ($_REQUEST["step"] == "tjcl") {

	if($_SERVER['HTTP_REFERER'] != "http://www.aumantruck.com/spike_tuijg.php?step=tijiao"){
         echo "<script>alert('本系统不允许从地址栏访问');</script>";
         echo "<script>window.close();</script>";
        exit;

    }   

    $AJAX = ('XMLHttpRequest' == @$_SERVER['HTTP_X_REQUESTED_WITH']);
    if(!$AJAX) exit('非法请求');
    $dqtime =  strtotime(date('Y-m-d H:i:s')); 
	if($dqtime < '1523808060'){
        echo "<script>alert('活动开始时间4月16日！敬请期待');location.href = 'spike_tuijg.php?step=test';</script>";
        exit();
    }
	$tjrname = $_REQUEST["tjrname"];
	$tjrtel = $_REQUEST["tjrtel"];
	$sfz = $_REQUEST["sfz"];
	$yh = $_REQUEST["yh"];
	$yhkh = $_REQUEST["yhkh"];
	$gcname = $_REQUEST["gcname"];
	$gctel = $_REQUEST["gctel"];
	$province = $_REQUEST["province"];
	$city = $_REQUEST["city"];
    $yxcx = $_REQUEST["yxcx"];
	$data = date("Y-m-d H:i:s");
    $time = time();

    $openid = $_REQUEST["openid"];
    $sql = "select phone,name from hd_info where  userid=$user_id and lbid=130 ";
    $res = $GLOBALS['db']->getAll($sql);
    for ($i=0; $i < count($res); $i++) { 
        if ($res[$i]['phone'] == $gctel || $res[$i]['name'] == $gcname) {
            echo 9;
            die();
        }
    }

	if(!$openid and !$tjrname and !$tjrtel and !$sfz and !$yh and !$yhkh and !$gcname and !$gctel and !$province and !$city and !$user_id){
             echo "File not found.";
             exit();
        }
	$insert_sql  =$GLOBALS['db']->query("insert into hd_info (lbid,userid,openid,name,phone,provinces,models,sfz,yh,yhkh,tjrname,tjrtel,adddate,item,num,gcyx) values (130,'$user_id','$openid','$gcname','$gctel','$province','$city','$sfz','$yh','$yhkh','$tjrname','$tjrtel','$data','$time','审核中','$yxcx')");
        if($insert_sql){
            echo 1;
            exit();
        }
}
/* 验证图片验证码是否正确 */

if ($_REQUEST["step"] == 'check_captcha_aa') {

        $json = new JSON;
        include_once(ROOT_PATH . 'includes/cls_captcha.php');
        /* 检查验证码是否正确 */
        $validator = new captcha();
        if (!empty($_REQUEST['captcha']) && !$validator->check_word($_REQUEST['captcha'])) {
            $res = '2';
        }else if(empty($_REQUEST['captcha'])){
            $res = '3';
        }else{
            $res = '0';
        }

    die($json->encode($res));
}


//获取手机验证码
if ($_REQUEST["step"] == 'send_sms') {
    //exit();
    $json = new JSON;
    $message = new Message();
    $phone = $_REQUEST['mobile'];//
    $rand = rand(100000, 999999);
    $Content = '【福田戴姆勒】福田戴姆勒手机验证码为：' . $rand . '，请确保是本人操作且为本人手机，否则请忽略此短信!';
    $_SESSION['code'] = $rand;
    $_SESSION['code_time'] = time();
    $_SESSION['user_Mobile'] = $phone;
    $res = $message->sendSms($phone, $Content);
    die($json->encode(array('res' => $res)));
}

//验证手机验证码
if ($_REQUEST["step"] == 'capicha_time') {
    //exit();
    $json = new JSON;
    if (!empty($_REQUEST['code'])&&!empty($_REQUEST['mobile'])) {
        $code = $_REQUEST['code'];
        $mobile=$_REQUEST['mobile'];
    } else {
        $code = 0;
    }
    $code_time = $_SESSION['code_time'];
    $user_mobile=$_SESSION['user_Mobile'];
    $time = time();
    if ($code == $_SESSION['code'] && $time - $code_time < 300 && $mobile==$user_mobile) {
        $_SESSION['dxyz'] = '1';
        $res = '1';
    } else {
        $res = '0';
    }
    die($json->encode(array('res' => $res)));
}



if($_REQUEST["step"] == 'region')
{
    $type   = !empty($_REQUEST['type'])   ? intval($_REQUEST['type'])   : 0;
    $parent = !empty($_REQUEST['parent']) ? intval($_REQUEST['parent']) : 0;
    $apply_field_id = !empty($_REQUEST['apply_field_id']) ? intval($_REQUEST['apply_field_id']) : '';

    $arr['regions'] = get_regions($type, $parent);
    $arr['type']    = $type;
    $arr['target']  = !empty($_REQUEST['target']) ? stripslashes(trim($_REQUEST['target'])) : '';
    $arr['target']  = htmlspecialchars($arr['target']);
    $arr['apply_field_id']    = $apply_field_id;

    $json = new JSON;
    echo $json->encode($arr);
}

//签名算法加密
function fenxiang()
{
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa1ef57725e6a43a9&secret=e3a5ac973731879a6fed086067acf0f0";
    $re = file_get_contents($url);
    $res = json_decode($re, true);
    $token = $res['access_token'];
    $urls = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=$token&type=jsapi";
    //  $urls = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".ACCESS_TOKEN."&type=jsapi&winzoom=1";
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
        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/spike_tuijg.php'. '?' . $_SERVER['QUERY_STRING'] ;
    }else{
        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/spike_tuijg.php';//$_SERVER['PHP_SELF'];
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

//获取用户的openid
 function openid()
{
    //判断用户是否关注此服务号
    $appid = "wxa1ef57725e6a43a9";
    $secret = "e3a5ac973731879a6fed086067acf0f0";
    //获取code
    $code = $_REQUEST["code"];
    $get_token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' . $appid . '&secret=' . $secret . '&code=' . $code . '&grant_type=authorization_code';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $get_token_url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    $res = curl_exec($ch);
    curl_close($ch);
    $json_obj = json_decode($res, true);
    $token = $json_obj["access_token"];
    define("ACCESS_TOKEN", $token);
    $openid = $json_obj['openid'];
    $subscribe_msg = "https://api.weixin.qq.com/sns/userinfo?access_token=" . ACCESS_TOKEN . "&openid=" . $openid . "&lang=zh_CN";
    $subscribe = file_get_contents($subscribe_msg);
    $nidaye = json_decode($subscribe, true);
    return $nidaye;
}


?>