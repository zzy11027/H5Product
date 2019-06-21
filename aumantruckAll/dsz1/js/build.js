		
		var data = ['/mobile/templates/dsz1/img/1.jpg','/mobile/templates/dsz1/img/2.jpg','/mobile/templates/dsz1/img/3.jpg','/mobile/templates/dsz1/img/4.jpg','/mobile/templates/dsz1/img/5.jpg','/mobile/templates/dsz1/img/6.jpg','/mobile/templates/dsz1/img/7.jpg','/mobile/templates/dsz1/img/8.jpg'];

//图片合成函数
		function draw(){

			var name = $('.xm').val();
			var random = Math.floor(Math.random()*8);
			console.log(random);
			var c=document.createElement('canvas');
				ct=c.getContext('2d');
				c.width=750;
				c.height=1200;
				ct.rect(0,0,c.width,c.height);
				ct.fillStyle='#fff';
				ct.fill(); 

				var img=new Image;
				console.log(data[random]);
				//img.crossOrigin = 'Anonymous'; //解决跨域
				img.src=data[random];
				img.onload=function(){
					ct.textAlign='center';
					ct.fillStyle = "black";  
					ct.font ="small-caps bold 50px arial"; 
					// ct.font ="italic small-caps bold 50px arial"; 
					// ct.font ="50px italic bold FZDaHei-B02S"; 
					ct.drawImage(img,0,0,750,1200);
					ct.fillText(name,370,700,300); 
					var src = c.toDataURL("image/png",10);
					$('#screenShotImg').attr('src',src);
				}

				//保存生成作品图片
				
				//alert(JSON.stringify(base64));
            	
            	$('#screenShotImg').css('display','block');
            	$('#screenShotImg_1').css('display','block');

		}


		// 适配华为键盘影响布局的问题
		var h = window.innerHeight;
		var myInput = document.getElementById('xm');
		myInput.addEventListener('focus',handler,false);
		function handler(){
			//console.log(h)
			$('body').height(h);
// 　　		$('body').height($('body')[0].clientHeight);

		}
