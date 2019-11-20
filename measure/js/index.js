$(function () { 
  var openid=$('#openid').val();
  var token=$('#token').val();
        //弹窗
      $('.start').click(function () { 
         /* $(".success").show().delay(3000).fadeOut(); */
         $('.first').hide();
         $('.problem').show();
      })
      $('.n1').click(function () { 
         $('.num2').show()
       })
       $('.rule').click(function () { 
        $('#bg').show();
        $('#rules').show();
       })
       $('.sure').click(function () { 
        $('#bg').hide();
        $('#rules').hide();
       })
       $('.y1').click(function () { 
         $('.num3').show()
       })
       $('.h1').click(function () { 
         $('.num4').show();
       })
      //生成测试结果
       $('.creat').click(function () { 
          if($(".num4").css("display")=="block"){
            $('#shareContent').show();
            $('.problem').hide();
            var number=Math.floor(Math.random() * (5) + 1);
            $('.pho').css('background-image','url('+$('#touxiang').val()+')');
            if(number==1){
               $('.result1').show();
               $('.share').show();
               $('.pho').show();
            }
            if(number==2){
               $('.result2').show();
               $('.share').show();
               $('.pho').show();
            }
            if(number==3){
               $('.result3').show();
               $('.share').show();
               $('.pho').show();
            }
            if(number==4){
               $('.result4').show();
               $('.share').show();
               $('.pho').show();
            }
            if(number==5){
               $('.result5').show();
               $('.share').show();
               $('.pho').show();
            }
          }
          else{
             alert("请答题");
          }
        })
        // $('.share').click(function () { 
        //     $('#shareContent').hide();
        //     $('.result1').hide();
        //     $('.result2').hide();
        //     $('.result3').hide();
        //     $('.result4').hide();
        //     $('.result5').hide();
        //     $('.share').hide();
        //     $('.pho').hide();

        //   });
          $(".goPrize").click(function(){ 
            $.ajax({
              url: '/mobile/measures.php?step=ifcj',
              type: 'post',
              data:{
                  openid : openid,
              },
              //  async : true, //默认为true 异步
              dataType:'json',
              beforeSend: function (request) {
                  request.setRequestHeader("Authorization", token);
              },
              success: function (data) {
                console.log(data.code);
                if(data.code < 0){
                  alert(data.content)
                }else{
                  $(".success").text(share).show().delay(3000).fadeOut(); 
                  $('.share-pho').hide();
                  /*$('.info').show();*/
                  $('.lotto').show();
                  $('#screenShotImg').hide();
                  $('.shareContent').hide();
                }

              },
              error: function () {
              }
              
          });
          })
              $(".cover").click(function(){ 
                $(this).hide();
              })
       /*    $('.share-bg').click(function () { 
                  $('.share-pho').hide();
                  
           }) */
           $('.btn1').click(function () { 
             $('.prize').hide();
             $('.info').show();
            })
         $('.btn').click(function () { 
            var openid=$('#openid').val();
            var name = $('.name').val();
            var tel = $('.tel').val();
            var address = $('.address').val();
            if(!tel || !address ||!name){
               alert('请输入您的信息');
               return false;
           }
           var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
           if (!reg.test(tel)) {         
               alert('请输入正确手机号!');
               return false;
           }
           /* $('.info').hide();  */
           $.ajax({
            url: '/mobile/measures.php?step=tj',
            type: 'post',
            data:{
                openid : openid,
                name:name,
                tel:tel,
                address:address
            },
            //  async : true, //默认为true 异步
            dataType:'json',
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", token);
            },
            success: function (data) {
                if(data.code==1){
                  // 跳转转盘
                  $('.info').hide();
                 window.location.reload();
                }else{
                  alert(data.content);
                }
            },
            error: function () {
            }
        });
          })



          var aa=1;
          $('.click').click(function(){
            if(aa == 1){
              $.ajax({
                      type: 'POST',
                      dataType:'json',
                      url : '/mobile/measures.php?step=prize',
                      data: {
                        openid:openid,
                        
                },
                beforeSend: function (request) {
                  request.setRequestHeader("Authorization", token);
                },
                success: function(data){
                  console.log(data);
                  if(data.code=='-2'){
                    alert('今日抽奖次数以上限，请明天再来')
                  }
                  switch(data.code){
                    //未中奖
                    case -1 :
                      newdraw1.goto(1);
                    break;
                    //u型枕
                    case 1 :
                      newdraw1.goto(4);
                    break;
                    //手工钥匙扣
                    case 2 :
                      newdraw1.goto(8);
                    break;
                    //印花帆布袋
                    case 3 :
                      newdraw1.goto(7);
                    break;
                    //8元
                    case 4 :
                      newdraw1.goto(5);
                    break;
                    //6元
                    case 5 :
                      newdraw1.goto(3);
                    break;
                    //2元
                    case 6:
                      newdraw1.goto(2);
                    break;
                  }
                }
              });
               }
                aa=2;
                jump(3);
          })
          var newdraw1 =new turntableDraw('.cirle',{
             share:8,
             speed:"4s",
             velocityCurve:"ease",
             weeks:10,
             callback:function(num)
             {
               $('.lotto').hide()
               if(num == 4){
                  $('.prize').show();
                  $('.edit').text('u型枕');
               }else if(num == 8){
                  $('.prize').show();
                  $('.edit').text('手工钥匙扣');	
               }else if(num == 7){
                  $('.prize').show();	
                  $('.edit').text('印花帆布袋');
               }else if(num == 5){
                  $('.prize').show();
                  $('.edit').text('8元现金红包');	
               }else if(num == 3){
                  $('.prize').show();	
                  $('.edit').text('6元现金红包');
               }else if(num == 2){
                $('.prize').show();	
                $('.edit').text('2元现金红包');
               }else if(num == 1){
                  $('.pity').show();  
                  $('.prize').hide();	
               }
             },
           });
           $('.btn2').click(function(){
             $('.pity').hide();
             window.location.reload();
           })
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
 })