/**
 * Created by 午后的阳光 on 2016/5/14.
 */
var index = 0;
  var flag=false;
  var TextNum1
  var TextNum2
  var TextNum3
  //   function letGo(){

  //   TextNum1=parseInt(Math.random()*4)//随机数
  //   TextNum2=parseInt(Math.random()*7)
  //   TextNum3=parseInt(Math.random()*7)
  //   console.log(TextNum1)
  //   var num1=[-549,-615,-735,-904][TextNum1];//在这里随机
  //   var num2=[-430,-549,-615,-735,-904][TextNum2];
  //   var num3=[-430,-549,-615,-735,-904][TextNum3];
  //   $(".main_1").animate({"top":-1140},1000,"linear", function () {
  //     $(this).css("top",0).animate({"top":num1},1000,"linear");
  //   });
  //   $(".main_2").animate({"top":-1140},1000,"linear", function () {
  //     $(this).css("top",0).animate({"top":num2},1800,"linear");
  //   });
  //   $(".main_3").animate({"top":-1140},1000,"linear", function () {
  //     $(this).css("top",0).animate({"top":num3},1300,"linear");
  //   });
  // }

  function reset(){
    $(".main_1,.main_2,.main_3").css({"top":-430});
  }
function test(){
  var openid = $("#openid").val();
          $.ajax({
            type:"POST",
            url:"spike_hxcx.php?step=prize",
            data:{
              "openid":openid
            },
            success:function(data){
              //console.log(data);
              if(data==1){
              	if(index==0){  
        				    $('.car').hide();
        				    $('.main').show();
				                if(!flag){
				                  flag=true;
				                  reset();
				              set=setInterval(function () {
				                  flag=false;
				                  con++;
				                  if(con==10){
                  						$(".main_1").animate({"top":-1140},1000,"linear", function () {
                  							$(this).css("top",0).animate({"top":-48.1+'rem'},1000,"linear");
                  						});
                  						$(".main_2").animate({"top":-1140},1000,"linear", function () {
                  							$(this).css("top",0).animate({"top":-7.18+'rem'},1000,"linear");
                  						});
                  						$(".main_3").animate({"top":-1140},1000,"linear", function () {
                  							$(this).css("top",0).animate({"top":-7.18+'rem'},1000,"linear");
                  						});
				                  }
						              if(con==280){
						                $('.lq').show();
						                $('.cli').hide();
                            clearInterval(set);
						              }
				              },10);
				              }
				        }
				                index=1;
                        $("#zjs").html("288");
                        $(".pp").html("288");
              }
              if(data==2){
              	if(index==0){
      				    $('.car').hide();
      				    $('.main').show();
      				    if(!flag){
      				      flag=true;
      				      reset();
      				      // letGo();
      				      set = setInterval(function () {
      				        flag=false;
      				        con++;
      				        //清除定时器
      				        //
      				        if(con==10){
      				          //$('.cli').hide();
      				          // test();
      						$(".main_1").animate({"top":-1140},1000,"linear", function () {
      							$(this).css("top",0).animate({"top":-55+'rem'},1000,"linear");
      						});
      						$(".main_2").animate({"top":-1140},1000,"linear", function () {
      							$(this).css("top",0).animate({"top":-7.18+'rem'},1000,"linear");
      						});
      						$(".main_3").animate({"top":-1140},1000,"linear", function () {
      							$(this).css("top",0).animate({"top":-7.18+'rem'},1000,"linear");
      						});
      				        }
      						if(con==280){
      						$('.lq').show();
      						$('.cli').hide();
      						clearInterval(set);
      						}
      				      },10);
      				    }
				      }
				            index=1;
                    $("#zjs").html("188");
                    $(".pp").html("188");
              }
              if(data==3){
				    if(index==0){
				    $('.car').hide();
				    $('.main').show();
				    if(!flag){
				      flag=true;
				      reset();
				      // letGo();
				      set=setInterval(function () {
				        flag=false;
				        con++;
				        //清除定时器
				        //
				        if(con==10){
				          //$('.cli').hide();
				          // test();
      						$(".main_1").animate({"top":-1140},1000,"linear", function () {
      							$(this).css("top",0).animate({"top":-61.8+'rem'},1000,"linear");
      						});
      						$(".main_2").animate({"top":-1140},1000,"linear", function () {
      							$(this).css("top",0).animate({"top":-7.18+'rem'},1000,"linear");
      						});
      						$(".main_3").animate({"top":-1140},1000,"linear", function () {
      							$(this).css("top",0).animate({"top":-7.18+'rem'},1000,"linear");
      						});
				        }
				        if(con==280){
				        $('.lq').remove();
                $('.lq_lq').show();
						    $('.cli').remove();
						 clearInterval(set);
					}
				      },10);
				    }
				  }
				    index=1;
                $("#zjs").html("88");
                $(".pp").html("88");
              }
               if(data==4){
               alert("未中奖");
              }
              if(data==7){
               alert("已经领奖了");
              }
              if(data==8){
               alert("明天再来");
              }
            }
          }) 
          //alert('pl');
}
function tijiao(){
  var name = $("#name").val();
  var tel = $("#tel").val();
  var openid = $("#openid").val();
  if (!name) {
    alert("请输入姓名");
     return false;
  }
  if (!tel) {
    alert("请输入手机号");
     return false;
  }
  var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
  if (!reg.test(tel)) {
      alert("请输入正确的手机号");
      return false;
  }
    $.ajax({
            type:"POST",
            url:"spike_hxcx.php?step=info",
            data:{
              "name":name,
              "phone":tel,
              "openid":openid
            },
            success:function(data){
              //console.log(data);
              if (data==1) {
                $('.tc').fadeIn();
                
                $('.lq').fadeOut();
              }
              if (data==9) {
                alert("已经领取过了");
              }
              
            }
          }) 

}
var con=0;

