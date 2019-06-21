$(function() {
  // pk进度条代码
  // 总数
  var pk_total = 100;

  var num1 = $('.num1').html()
  var num2 = $('.num2').html()
  var bili1 = (num1/pk_total).toFixed(2)*100;
  var bili2 = (num2/pk_total).toFixed(2)*100;
  var ip = $("#ip").val();

  $( ".left" ).progressbar({
    value: bili1
  });
  $( ".right" ).progressbar({
    value: bili2
  });

  //会
  $('.btn1').click(function(){

    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":1,"type":1},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num1').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".left" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })
  
  $('.btn2').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":2,"type":1},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num2').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".right" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })
  // pk进度条代码结束

  // 应战进度条代码
  var yztotal = 200;
  var num3 = $('.num3').html()
  var num4 = $('.num4').html()
  var num5 = $('.num5').html()
  var num6 = $('.num6').html()
  var num7 = $('.num7').html()
  var num8 = $('.num8').html()
  var num9 = $('.num9').html()
  var num10 = $('.num10').html()
  var num11 = $('.num11').html()
  var num12 = $('.num12').html()
  var num13 = $('.num13').html()
  var num14 = $('.num14').html()
  var num15 = $('.num15').html()
  var num16 = $('.num16').html()
  
  var bili3 = (num3/pk_total).toFixed(2)*100;
  var bili4 = (num4/pk_total).toFixed(2)*100;
  var bili5 = (num5/pk_total).toFixed(2)*100;
  var bili6 = (num6/pk_total).toFixed(2)*100;
  var bili7 = (num7/pk_total).toFixed(2)*100;
  var bili8 = (num8/pk_total).toFixed(2)*100;
  var bili9 = (num9/pk_total).toFixed(2)*100;
  var bili10 = (num10/pk_total).toFixed(2)*100;
  var bili11 = (num11/pk_total).toFixed(2)*100;
  var bili12 = (num12/pk_total).toFixed(2)*100;
  var bili13 = (num13/pk_total).toFixed(2)*100;
  var bili14 = (num14/pk_total).toFixed(2)*100;
  var bili16 = (num16/pk_total).toFixed(2)*100;
  var bili15 = (num15/pk_total).toFixed(2)*100;


  $( ".c1" ).progressbar({
    value: bili3
  });
  $( ".c2" ).progressbar({
    value: bili4
  });
  $( ".c3" ).progressbar({
    value: bili5
  });
  $( ".c4" ).progressbar({
    value: bili6
  });
  $( ".c5" ).progressbar({
    value: bili7
  });
  $( ".c6" ).progressbar({
    value: bili8
  });
  $( ".c7" ).progressbar({
    value: bili9
  });
  $( ".c8" ).progressbar({
    value: bili10
  });
  $( ".c9" ).progressbar({
    value: bili11
  });
  $( ".c10" ).progressbar({
    value: bili12
  });
  $( ".c11" ).progressbar({
    value: bili13
  });
  $( ".c12" ).progressbar({
    value: bili14
  });
  $( ".c13" ).progressbar({
    value: bili15
  });
  $( ".c14" ).progressbar({
    value: bili16
  });

  $('.r1').click(function(){

      $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":3,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num3').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c1" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
      
  })

  $('.r2').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":4,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num4').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c2" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r3').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":5,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num5').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c3" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })
  
  $('.r4').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":6,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num6').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c4" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r5').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":7,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num7').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c5" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })
  $('.r6').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":8,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num8').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c6" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r7').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":9,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num9').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c7" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })
  
  $('.r8').click(function(){
      $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":10,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num10').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c8" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r9').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":11,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num11').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c9" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r10').click(function(){
   $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":12,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num12').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c10" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r11').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":13,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num13').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c11" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r12').click(function(){
   $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":14,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num14').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c12" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })

  $('.r13').click(function(){
   $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":15,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num15').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c13" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })
  $('.r14').click(function(){
   $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":29,"type":2},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.num16').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".c14" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
  })





   // 进度条代码

   var nu1 = $('.nu1').html()  
   var nu2 = $('.nu2').html()
   var nu3 = $('.nu3').html()
   var nu4 = $('.nu4').html()
   var nu5 = $('.nu5').html()
   var nu6 = $('.nu6').html()
   var nu7 = $('.nu7').html()
   var nu8 = $('.nu8').html()
   var nu9 = $('.nu9').html()
   var nu10 = $('.nu10').html()
   var nu11 = $('.nu11').html()
   var nu12 = $('.nu12').html()
   var nu13 = $('.nu13').html()
   var nu14 = $('.nu14').html()
   
   var bil1 = (nu1/pk_total).toFixed(2)*100;
   var bil2 = (nu2/pk_total).toFixed(2)*100;
   var bil3 = (nu3/pk_total).toFixed(2)*100;
   var bil4 = (nu4/pk_total).toFixed(2)*100;
   var bil5 = (nu5/pk_total).toFixed(2)*100;
   var bil6 = (nu6/pk_total).toFixed(2)*100;
   var bil7 = (nu7/pk_total).toFixed(2)*100;
   var bil8 = (nu8/pk_total).toFixed(2)*100;
   var bil9 = (nu9/pk_total).toFixed(2)*100;
   var bil10 = (nu10/pk_total).toFixed(2)*100;
   var bil11 = (nu11/pk_total).toFixed(2)*100;
   var bil12 = (nu12/pk_total).toFixed(2)*100;
   var bil13 = (nu13/pk_total).toFixed(2)*100;
   var bil14 = (nu14/pk_total).toFixed(2)*100;
   
  
 
   $( ".t1" ).progressbar({
     value: bil1
   });
   $( ".t2" ).progressbar({
     value: bil2
   });
   $( ".t3" ).progressbar({
     value: bil3
   });
   $( ".t4" ).progressbar({
     value: bil4
   });
   $( ".t5" ).progressbar({
     value: bil5
   });
   $( ".t6" ).progressbar({
     value: bil6
   });
   $( ".t7" ).progressbar({
     value: bil7
   });
   $( ".t8" ).progressbar({
     value: bili8
   });
   $( ".t9" ).progressbar({
     value: bili9
   });
   $( ".t10" ).progressbar({
     value: bili10
   });
   $( ".t11" ).progressbar({
     value: bil11
   });
   $( ".t12" ).progressbar({
     value: bil12
   });
   $( ".t13" ).progressbar({
     value: bil13
   });
   $( ".t14" ).progressbar({
     value: bil14
   });
 

   $('.i1').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":16,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu1').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t1" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i2').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":17,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu2').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t2" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i3').click(function(){
      $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":18,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu3').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t3" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
   
   $('.i4').click(function(){
      $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":19,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu4').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t4" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i5').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":20,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu5').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t5" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
   $('.i6').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":21,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu6').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t6" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i7').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":22,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu7').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t7" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
   
   $('.i8').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":23,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu8').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t8" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i9').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":24,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu9').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t9" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i10').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":25,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu10').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t10" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i11').click(function(){
   $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":26,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu11').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t11" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i12').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":27,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu12').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t12" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
 
   $('.i13').click(function(){
    $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":28,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu13').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t13" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })
   $('.i14').click(function(){
     $.ajax({
        type: "POST",
        url: "/hysj.php?step=tp",
        data: {"ip":ip,"id":30,"type":3},
        dataType: 'json',
        success: function (data) {
            if(data==1){
                alert("您已经投过票了");
                return;
            }else{
               alert("感谢您的投票");
               $('.nu14').html(data);
                bili = (data/pk_total).toFixed(2)*100;
               $( ".t14" ).progressbar({
                value: bili
               });
               return;
            }
        }
    });
   })

});