		// var can = document.getElementById('can');

		// can.width = 300;

		// can.height = 300;

		// var ctx = can.getContext('2d');
		

		// $('.inp_3').bind('input propertychange', function() {
		// 	var v = $('.inp_3').val();
		// 	name = v;
		// });


//拍照
		// var demo_h5_upload_ops = {
		//     init:function(){
		//         this.eventBind();
		//     },
		//     eventBind:function(){
		//         var that = this;
		//         $("#upload").change(function(){
		//         	var finput = this.files[0];
		//             var reader = new FileReader();
		//             reader.onload = function (e) {
		//                 that.compress(this.result,finput);
		//             };
		//             reader.readAsDataURL(this.files[0]);
		//         });
		//     },
		//     compress : function (res,finput) {

		//         var that = this;
		//         var img = new Image(),
		//             // maxH = 300;
		//             maxH = 900;
		 
		//         img.onload = function () {
		//             var cvs = document.createElement('canvas'),
		//                 ctx = cvs.getContext('2d');
		 
		//             if(img.height > maxH) {
		//                 img.width *= maxH / img.height;
		//                 img.height = maxH;
		//             }
		//             cvs.width = img.width;
		//             cvs.height = img.height;
		 
		//             ctx.clearRect(0, 0, cvs.width, cvs.height);
		//             ctx.drawImage(img, 0, 0, img.width, img.height);
		//             if(Orientation==6){
		//             	var wi = nf*5;
		//             	var he = nf*7.5;
		// 				$(".img_wrap").animate({},function(){                                      
		// 					$(".img_wrap").css({'display': 'block','width': he,'height': wi,'position': 'absolute','top':'65%','left':'40%','transform':'rotate(90deg)'});                      
		// 				})
		//             }else if(Orientation != 6){

		// 				var wi = nf*5.1;
		// 				var he = nf*7.5;
		//             	$(".img_wrap").animate({},function(){                                      
		// 					$(".img_wrap").css({'display': 'block','width': wi,'height': he,'position': 'absolute','top':'62.5%','left':'45%','transform':'rotate(0deg)'});                      
		// 				})
		//             }
		//             var dataUrl = cvs.toDataURL('image/jpeg', 1);
		//             $(".img_wrap").attr("src",dataUrl);
		//             $(".img_wrap").show();
		//             // 上传略
		//             that.upload( finput );
		//         };
		 
		//         img.src = res;

		//     },
		//     upload:function( finput ){
		//         /*这里写上次方法,图片流是base64_encode的*/
		//         console.log(finput)

		// 		lrz(finput,{
		// 				width:300
		// 			}).then(function (rst) {
		// 					var img = new Image();
		// 					img.src = rst.base64;

		// 					img.onload = function () {
		// 					document.body.appendChild(img);
		// 					};
		// 		            // 处理成功会执行
		// 		            console.log(rst);
		// 		            rst.formData.append('base64img',rst.base64);
		// 		            $.ajax({
		// 		            	url:'',
		// 		            	type:'POST',
		// 		            	data:rst.formData,
		// 		            	processData:false,
		// 		            	contentType:false,
		// 		            	success:function(data){
		// 		            		$('<img />').attr('src',data).appendTo('body');
		// 		            	}

		// 		            })
		// 		        })
		// 		        .catch(function (err) {
		// 		            // 处理失败会执行
		// 		        })
		// 		        .always(function () {
		// 		            // 不管是成功失败，都会执行
		// 		            $('<img />').attr('src',rst.base64).appendTo('body');
		// 		        });
		//     }
		// };
 
 
		// $(document).ready( function(){
		// 	console.log(demo_h5_upload_ops)
		//     demo_h5_upload_ops.init();
		// } );



//旋转函数
		function rotate(x,y,imgs,ctxs){
			$('#imgBox').css("background-image","url()");
            ctxs.clearRect(0,0, 750, 1334);//先清掉画布上的内容
           	ctxs.save();
            ctxs.translate(x,y);//将绘图原点移到画布中点
            ctxs.rotate((Math.PI/180)*90);//旋转角度
            ctxs.translate(-x,-y);//将画布原点移动
            ctxs.drawImage(imgs,650,750,200,145);//绘制图片
            ctxs.restore();     
        }

//exif.js
		function selectFileImage(fileObj){

		     var file = fileObj.files['0']; 
		          EXIF.getData(file, function() {  
		            // alert(EXIF.pretty(this));  
		            EXIF.getAllTags(file);   
		            //alert(EXIF.getTag(this, 'Orientation'));   
		            Orientation = EXIF.getTag(file, 'Orientation'); 
		            console.log(Orientation); 
		            return Orientation;  
		     });
		 }

//判断手机是否为ios
		var file = document.getElementById('upload');

        if (getIos()) {
            file.removeAttribute("capture");
        }
        function getIos() {
            var ua=navigator.userAgent.toLowerCase();
            if (ua.match(/iPhone\sOS/i) == "iphone os") {
                return true;
            } else {
                return false;
            }
        }

        var base;
        // 拍照   压缩   上传
        $("#upload").change(function(){

        	var finput = this.files[0];

			lrz(finput,{

				width:500,
				height:500,
				quality:0.8

			}).then(function (rst) {

				 // 处理成功会执行
				// var img = new Image();
				// img.src = rst.base64;				
				// img.setAttribute("class", "img1");
				// img.onload = function () {

				// 	document.getElementById('save_img').appendChild(img);

				// };
				$('.base_img').attr('src',rst.base64);
				$('.base_img').css('display','block');
				base = rst.base64;

	            rst.formData.append('base64img',rst.base64);
				console.log(rst);


	        }).catch(function (err) {

	            // 处理失败会执行
	            
	        }).always(function () {
	            // 不管是成功失败，都会执行
	            // $('<img />').attr('src',rst.base64).appendTo('body');
	            console.log('总是执行')
	        });
		});



		var w = 375;
		var f = 16;
		var c = document.documentElement.clientWidth;
		var nf = c * f / w;
		document.documentElement.style.fontSize = nf + 'px';

		//多次点击变量
		var aa  = 1;

		// 第一页   点击消失
		$('.one>.dib').click(function(){
			$('.one').hide();
			$('.two').fadeIn(500);
		})
		$('.one>.one_one').click(function(){
			$('.one').hide();
			$('.two').fadeIn(500);
		})
		$('.one>.ones').click(function(){
			alert('第一页啦~')
		})






		// 第二页    点击消失
		$('.two>.pre').click(function(){
			$('.one').show();
			$('.two').hide();
		})


		// 第二页    点击消失
		$('.two>.jx').click(function(){
			$('.two').hide();
			$('.three').fadeIn(500);
		})




		//第三页
		$('.uprev').click(function(){
			$('.three').hide();
			$('.two').show();
		})
		$('.upnext').click(function(){
			if(base == undefined){
				alert('您还没有拍照哦！');
				return false;
			}

			if($('.upload1').val() == ''){
				alert('您还没有拍照哦！');
				return false;
			}
			$('.three').hide();
			$('.four').show();
		})
		//上传图片！！！！！！！！！！！！！！！！！！
		$('.load').click(function(){
			
			if(base == undefined){
				alert('您还没有拍照哦！');
				return false;
			}

			if($('.upload1').val() == ''){
				alert('您还没有拍照哦！');
				return false;
			}

    		console.log(base);
    		$('.three').hide();
    		$('.four').fadeIn(500);

    		alert('上传成功！');
		})

		$('.uprev1').click(function(){
			$('.four').hide();
			$('.three').show();
		})
		$('.upnext1').click(function(){
			$('.four').hide();
			$('.five').show();
		})
		//留资.....................................
		$('.tj1').click(function(){
			// console.log(base)
			if(aa == 1){

				var inp_1 = $(".inp1").val();
				var inp_2 = $(".inp2").val();
				var inp_3 = $(".inp3").val();
				if (inp_1=="") {alert("请输入您的姓名");return false;}
				if (inp_2=="") {alert("请输入您的电话");return false;}
				if (inp_3=="") {alert("请输入您的收货地址");return false;}
				var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

		        if (!reg.test(inp_2)) {
		            alert("请输入正确的手机号");
		            return false;
		        }

				$('.spinner').show();
				var token = $("#token").val();
				var ip = $("#ip").val();
				$.ajax({

		            type: 'POST',
		            dataType:'json',
		            url : '/hb.php?step=info',
		            data: {
		            	ip,ip,
		            	inp_1:inp_1,
		            	inp_2:inp_2,
		            	inp_3:inp_3,
		            	base64:base
					},
					beforeSend: function(request) { 
						request.setRequestHeader("Authorization", token); 
					},
		            success: function(data){
						if(data==1){
			            	$('.er').show();
	    					$('.spinner').hide();
	    					return;
    					}else{
    						$('.yi').show();
    						$('.spinner').hide();
    						return;
    					}
		            }

		   		});

	   		}

	        aa=2;
	        jump(3);

		})

		// 返回...............................
		$('.tj2').click(function(){

			$('.three').fadeIn(500);
			$('.four').hide();

		})


		// 点击分享
		$('.fx').click(function(){

			$('.fx_img').show();
		})

		//点击关闭分享窗口
		$('.close').click(function(){
			$('.fx_img').hide();
		})

		// 全屏手机高度自适应，解决设计只给一张背景图的难题！！！！！！！！！！！！！在高度大于iphoneX的情况下，自适应屏幕
		var win = $(window).height();

		// console.log(win)
		var doc = $(document).height()
		// console.log(doc)
		if(win>=812){

			// 先改变其高度
			$('.one').height(win);
			$('.two').height(win);
			$('.three').height(win);
			$('.four').height(win);
			$('.five').height(win);


			// 换一个自适应的背景图

			// $(".one").css("background-image","url(./img/ones.png)");
			// $(".two").css("background-image","url(./img/twos.png)");
			// $(".three").css("background-image","url(./img/threes.png)");
			// $(".four").css("background-image","url(./img/fours.png)");
			// $(".five").css("background-image","url(./img/fives.png)");
			
			// $('.contai_1').css('top','5%');
			// $('.contai_2').css('top','5%');

			// $('.xz>a').css('bottom','');
		}




	//禁止点击多次
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


		$('.uprev2').click(function(){
			$('.five').hide();
			$('.four').show();
		})
		$('.upnext2').click(function(){
			alert('最后一页啦~')
		})


		$('.yi_clo1').click(function(){
			$('.yi').hide();
		})

		$('.yi_clo2').click(function(){
			$('.four').hide();
			$('.er').hide();
			$('.five').show();
		})