var button = '<div class="jingshan">'+
    '<span id="timebox" class="start">秒杀已经开始</span>'+
    '<span id="qianggou"><a href="javascript:;" ><img src="/public/images/level1_button.jpg" alt="抢购按钮"/></a></span></div>';
$(".jingshan").html(button);
 
$(function(){
    var flag=1;
    $("#qianggou").click(function(){
        if(flag!=1){
          return ;
        }
        flag=2;
        var token='';
        var url="http://192.168.128.128/redis.php"
        $.ajax({
           type: "POST",
           url: url,
           data: "token="+token,
           success: function(msg){
             alert( "Data Saved: " + msg );
           }
        });
    })
 
})