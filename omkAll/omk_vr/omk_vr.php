
<?php
/**
 * VR活动
 * summer
 */
define('IN_ECS', true);
define('ECS_ADMIN', true);
require(dirname(__FILE__) . '/includes/init.php');
require(ROOT_PATH . 'includes/lib_order.php');
require(ROOT_PATH . 'includes/cls_json.php');

//跳转到甄玲提供的新地址
//header("Location:  http://www.aumantruck.com/themes/default/vr/jieshu.html");
//die;

if (!isset($_REQUEST['step'])) {
    $_REQUEST['step'] = "index";
}
$user_agent = $_SERVER['HTTP_USER_AGENT'];
if (strpos($user_agent, 'MicroMessenger')) {
    // 微信浏览器
    $mem = new Memcache;
    $mem->connect("127.0.0.1", 11211);
    $token = $mem->get('arr');
    // 非微信浏览器禁止浏览
    if(empty($token)){
        $arr=fenxiang();
        $mem = new Memcache;
        $mem->connect("127.0.0.1", 11211);
        $mem->add('arr', $arr,0, 7000);
    }
    else
    {
        $GLOBALS['smarty']->assign('arr', $token);
    }
}


if ($_REQUEST["step"] == "index") {

    //判断是否是手机登陆
    $ua = strtolower($_SERVER['HTTP_USER_AGENT']);
    $uachar = "/(nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|mobile)/i";
    //header("Location: http://720yun.com/t/0e3jOzewkk3");
    $smarty->display('omk_vr/index_omk.dwt');
}

elseif($_REQUEST["step"] == "dati"){
    $_COOKIE['guid'] = isset($_COOKIE['guid'])?$_COOKIE['guid']:'';
    if(!$_COOKIE['guid']){
        $guid  = create_guid();
        setcookie('guid',$guid,time()+3600*240);
    }
    $xz_chexing =  isset($_REQUEST['xz_chexing'])?$_REQUEST['xz_chexing']:'';
    if(!$xz_chexing && $xz_chexing != 's1'&& $xz_chexing != 's3'&& $xz_chexing != 's5'){
        header("Location: http://huodong.chaojikache.com/omk_vr.php");
    }

    $smarty->assign('xz_chexing',$xz_chexing);
    $smarty->display('omk_vr/question.dwt');
}
//判断今天是否已抽过
elseif($_REQUEST['step'] == 'panduan'){

    $json = new JSON;

    $res    = '';
    $user_id=$_COOKIE['guid'];
    $date = date("Y-m-d");

    $kaishi = array(
        1  => strtotime("2017-04-12 09:00:00")
    );
    $jieshu = array(
        1  => strtotime("2017-05-24 10:03:00")
    );

    //判断用户是否中奖
    $date = date("Y-m-d");
    $sql="select * from ecs_huodong_omk where user_id='$user_id'and times like '%$date%' ";
    $res = $GLOBALS['db']->getAll($sql);

    if(time()<$kaishi[1]){
        //活动没开始
        $res =   13;
        die($json->encode($res));
    }

    if(time()>$jieshu[1]){
        //活动结束页面
        $res =  12;
        die($json->encode($res));
    }

    if ($res)
    {
        $res =  6;
        die($json->encode($res));
    }
    elseif( time() > $kaishi[1] ){
        $res  =   getRand(gailu());
        die($json->encode($res));
    }


}
//保存手机号
elseif($_REQUEST['step'] == 'baocun'){
    $json   = new JSON;
    $user_id = $_COOKIE['guid'] ;
    $phone = $_REQUEST['phone'];
    $uanme = $_REQUEST['name'];
    $chexing = $_REQUEST['chexing'];
    $date = date("Y-m-d");
    $sql = "update ecs_huodong_omk  set phone = '$phone',uname = '$uanme' ,code = '$chexing' where user_id = '$user_id'and times like '%$date%' ";
    if ( $user_id )
    {
        if( $GLOBALS['db']->query($sql))
        {
            $res['result'] =  1;
        }
        else
        {
            $res['result'] = 0;
        }

    }
    else
    {
        $res['result'] = 0;
    }
    die($json->encode($res));

}

function getRand($prize_arr)
{
    $user_id = $_COOKIE['guid'];
    $uname = '';
    $tel = '';
    foreach ($prize_arr as $key => $val) {
        $arr[$val['id']] = $val['v'];
    }
    $rid = get_rand($arr); //根据概率获取奖项id
    $res['yes'] = $prize_arr[$rid-1]['prize']; //中奖项
    unset($prize_arr[$rid-1]); //将中奖项从数组中剔除，剩下未中奖项
    shuffle($prize_arr); //打乱数组顺序
    for($i=0;$i<count($prize_arr);$i++){
        $pr[] = $prize_arr[$i]['prize'];
    }
    $res['no'] = $pr;
    $re =$res['yes'] ;
  //  $data['prize_title'] = $prize_arr['5']['prize']; //中奖奖品
    $time=date("Y-m-d H:i:s");
    switch ($res['yes']) {
        case '4':
            $res_a = '100元红包';
            break;
        case '3':
            $res_a = '10元红包';
            break;
        case '2':
            $res_a = '2元红包';
            break;
        case '1':
            $res_a = '1元红包';
            break;
        default:
            break;
    }
    if($res['yes'] == 6){
        $state = 'N';
    }else{
        $state = 'Y';
    }
    $prize =  $res['yes'];
    $sql="select num from ecs_counts_omk where id = '$prize' ";

    $num = $GLOBALS['db']->getOne($sql);
    if($num == 0){
        return 20;
    }
    else
    {
        $numss = "select id,num from ecs_counts_omk where id = '$prize'";
        $nums = $GLOBALS['db']->getRow($numss);

        $ones = $nums['num'] - 1;
        $id= $nums['id'];

        $sql = "update ecs_counts_omk set num={$ones} where id = {$id}";
       $GLOBALS['db']->query($sql);
        $sqls = "insert into ecs_huodong_omk (user_id,prize,uname,phone,times,state) values('$user_id','$res_a','$uname','$tel','$time','$state')";
        $GLOBALS['db']->query($sqls);
        return $re;
    }

}
function get_rand($proArr) {
    $result = '';

    //概率数组的总概率精度
    $proSum = array_sum($proArr);

    //概率数组循环
    foreach ($proArr as $key => $proCur) {
        $randNum = mt_rand(1, $proSum);
        if ($randNum <= $proCur) {
            $result = $key;
            break;
        } else {
            $proSum -= $proCur;
        }
    }
    unset ($proArr);

    return $result;
}
function get_rand_a(){
    $code = rand(1000,9999);
    $sql="select code from ecs_huodong where code='$code' ";
    $code_a = $GLOBALS['db']->getOne($sql);
    if($code_a){
        $code = get_rand_a();
    }
    return $code;
}
function gailu(){
    $prize_arr = array(
        '0' => array('id' => 1, 'prize' => 1, 'v' => 40),//1元红包
        '1' => array('id' => 2, 'prize' => 2, 'v' => 20),//2元红包
        '2' => array('id' => 3, 'prize' => 3, 'v' => 5),//10元红包
        '3' => array('id' => 4, 'prize' => 4, 'v' => 0.5 ),//100元红包
        '4' => array('id' => 5, 'prize' => 5, 'v' => 35 ),//100
    );
    return $prize_arr;
}
//扫码
function fenxiang()
{
    //$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa1ef57725e6a43a9&secret=e3a5ac973731879a6fed086067acf0f0";NxY0MhQ1TXe1YWkx
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx20f3f0b302417dcd&secret=219d53f830d1c173605306bcfa2c5543";
    $re = file_get_contents($url);
//    echo $re;die;
    $res = json_decode($re, true);
    $token = $res['access_token'];
    $urls = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=$token&type=jsapi&winzoom=1";
    $jsapi = file_get_contents($urls);
    $arr = json_decode($jsapi, true);
//获取jsapi_ticket
    $jsapi_ticket = $arr['ticket'];
//随机字符串
    $noncestr = getRandChar(16);
//获取时间戳
    $timestamp = strtotime(date("Y-m-d H:i:s"));
//获取url
    $url = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'] . '?' . $_SERVER['QUERY_STRING'];
//echo $url;die;
//echo "jsapi_ticket=$jsapi_ticket&noncestr=$noncestr&timestamp=$timestamp&url=$url";die;
    $sha1 = sha1("jsapi_ticket=$jsapi_ticket&noncestr=$noncestr&timestamp=$timestamp&url=$url");
//echo $sha1;die;
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
function create_guid(){
    $charid = strtoupper(md5(uniqid(mt_rand(), true)));
    $hyphen = chr(45);// "-"
    $uuid = substr($charid, 6, 2).substr($charid, 4, 2).
        substr($charid, 2, 2).substr($charid, 0, 2).$hyphen
        .substr($charid, 10, 2).substr($charid, 8, 2).$hyphen
        .substr($charid,14, 2).substr($charid,12, 2).$hyphen
        .substr($charid,16, 4).$hyphen.substr($charid,20,12);
    return $uuid;
}
?>