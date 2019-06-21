		var can = document.getElementById('can');

		can.width = 300;

		can.height = 300;

		var ctx = can.getContext('2d');
		
		// var data = ['index.jpg','1.png'];
//保存图片base64编码
		var base64=[];
//将拍照的照片赋值给str
		var str = '';
//判断图片的第几次合成
		var aaa = 0;
//filltext---->1
		var name = '';
//filltext---->2
		var place = '1234589'; 
//判断用户拍没拍照
		var tru = false; 

		$('.inp_3').bind('input propertychange', function() {
			var v = $('.inp_3').val();
			name = v;
		});

//点击触发test函数
		function test(){
//tru == true  判断用户拍没拍照
			if(tru == true){

				
				var hy = $("#input-12 option:selected").text();
				var cit = $('#cit option:selected').text();
				var name = $("#username").val();
				if (hy=='') {
					alert("请选择行业");
					return false;
				}
				if (hy=='行业') {
					alert("请选择行业");
					return false;
				}
				if (cit=='') {
					alert("请选择地点");
					return false;
				}
				if (cit=='地点') {
					alert("请选择地点");
					return false;
				}
				if (name=='') {
					alert("请输入姓名");
					return false;
				}
				$.ajax({
			            type:"POST",
			            dataType:'json',
			            url:"spike_2018live.php?step=inst",
			            data:{
			              "hy":hy,
			              "city":cit,
			              "name":name
			            },
			            success:function(data){
			            	console.log(data);

			              if (data==1) {
							//赋值给一个全局变量的字符串，然后filltext()
							// place = data;
			              }
			              if (data==2) {
			              }
			            }
			          }) 
				$('button').remove();
				$('input').remove();
				$('select').remove();
				draw(function(){
					// $('#imgBox').css("background-image","url(templates/2018live/index_2.png)");
					document.getElementById('imgBox').innerHTML='<img class="tu" onclick="return false" src="'+base64[0]+'">';
					$('.a_2').show();
				})	

			}else{
				alert('您还没有上传照片！')
				
			}
		}
//图片合成函数
		function draw(fn){
			$('.k1').remove();
			// $('#imgBox').css("background-image","url()");
			var data = [str,'templates/2018live/index_3.png'];
			// var data = ['index_3.png',str];
			var c=document.createElement('canvas'),
				ct=c.getContext('2d'),
				len=data.length;
			c.width=750;
			c.height=1206;
			// c.style.width = c.width/2+'px';
			// c.style.height = c.height/2+'px';
			ct.rect(0,0,c.width,c.height);
			ct.fillStyle='#fff';
			ct.fill(); 
			function drawing(n){
				if(n<len){
					var img=new Image;
					//img.crossOrigin = 'Anonymous'; //解决跨域
					img.src=data[n];
					img.onload=function(){  
						
						if(aaa==0){
							aaa=1;
							// ct.drawImage(img,75,75,150,150);
							ct.fillStyle = "#fff";  
							ct.font ="bold 25px 宋体";
							ct.fillText(name,275,980,200);
							ct.fillStyle = "#000";  
							ct.font ="bold 25px 宋体";
							ct.fillText(place,185,800,200); 
							ct.drawImage(img,83,883,143,195);
							var x = c.width/2; //画布宽度的一半
							var y = c.height/2;//画布高度的一半
							console.log(x,y)
						}else{
						
							ct.drawImage(img,0,0,750,1206);
							ct.fillStyle = "#fff";  
							ct.font ="bold 25px 宋体";
							ct.fillText(name,275,980,80);
							ct.fillStyle = "#000";  
							ct.font ="bold 25px 宋体";
							ct.fillText(place,185,800,200); 
							var x = c.width/2; //画布宽度的一半
							var y = c.height/2;//画布高度的一半
							console.log(x,y)
						}
						drawing(n+1);//递归
						// console.log(Orientation);

						if(Orientation==6){
							rotate(x,y,img,ct);
						}


					}
				}else{
					//保存生成作品图片
					base64.push(c.toDataURL("image/png",10));
					//alert(JSON.stringify(base64));
					fn();

				}
			}
			drawing(0);
		}
//拍照
		var demo_h5_upload_ops = {
		    init:function(){
		        this.eventBind();
		    },
		    eventBind:function(){
		        var that = this;
		        $("#upload").change(function(){
		            var reader = new FileReader();
		            reader.onload = function (e) {
		                that.compress(this.result);
		            };
		            reader.readAsDataURL(this.files[0]);
		        });
		    },
		    compress : function (res) {

		    	tru = true;
		        var that = this;
		        var img = new Image(),
		            // maxH = 300;
		            maxH = 900;
		 
		        img.onload = function () {
		            var cvs = document.createElement('canvas'),
		                ctx = cvs.getContext('2d');
		 
		            if(img.height > maxH) {
		                img.width *= maxH / img.height;
		                img.height = maxH;
		            }
		            cvs.width = img.width;
		            cvs.height = img.height;
		 
		            ctx.clearRect(0, 0, cvs.width, cvs.height);
		            ctx.drawImage(img, 0, 0, img.width, img.height);
		            if(Orientation==6){
		            	var wi = nf*5;
		            	var he = nf*7.5;
						$(".img_wrap").animate({},function(){                                      
							$(".img_wrap").css({'display': 'block','width': he,'height': wi,'position': 'absolute','top':'65%','left':'40%','transform':'rotate(90deg)'});                      
						})
		            }else if(Orientation != 6){
		            	console.log(Orientation)
						var wi = nf*5.1;
						var he = nf*7.5;
		            	$(".img_wrap").animate({},function(){                                      
							$(".img_wrap").css({'display': 'block','width': wi,'height': he,'position': 'absolute','top':'62.5%','left':'45%','transform':'rotate(0deg)'});                      
						})
		            }
		            var dataUrl = cvs.toDataURL('image/jpeg', 1);
		            str = dataUrl;
		            $(".img_wrap").attr("src",dataUrl);
		            $(".img_wrap").show();
		            // 上传略
		            that.upload( dataUrl );
		        };
		 
		        img.src = res;
		        
		    },
		    upload:function( image_data ){
		        /*这里写上次方法,图片流是base64_encode的*/
		    }
		};
 
 
		$(document).ready( function(){
			console.log(demo_h5_upload_ops)
		    demo_h5_upload_ops.init();
		} );



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
			console.log(fileObj);
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
//下载图片
