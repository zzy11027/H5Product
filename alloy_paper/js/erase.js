var erase = function (id,index){
    var num = 8;
    var img = new Image();
    if(index == 1){
        img.src = '/templates/ol/oldouble11/img/vague1.png';
    }
    if(index == 2){
        img.src = '/templates/ol/oldouble11/img/vague2.png';
    }
    if(index == 3){
        img.src = '/templates/ol/oldouble11/img/vague3.png';
    }
    if(index == 4){
        img.src = '/templates/ol/oldouble11/img/vague4.png';
    }
    if(index == 5){
        img.src = '/templates/ol/oldouble11/img/vague5.png';
    }
	var canvas = document.getElementById(id);
	var ctx=canvas.getContext('2d');
    var offsetX = canvas.offsetLeft;
    var offsetY = canvas.offsetTop;
    var mousedown = false;
    img.onload = function() {
        ctx.drawImage(img, 0, 0,canvas.width, canvas.height);
        //     ctx.globalCompositeOperation = 'destination-out'; 
        // 　  //其他操作...
        // ctx.rect(0,0,canvas.width,canvas.height);
        // ctx.fill();
	   ctx.globalCompositeOperation = 'destination-out';
    }
    function eventDown(e){
        e.preventDefault();
        mousedown=true;
    }
    function eventUp(e){
        e.preventDefault();
        mousedown=false;
    }
    function eventMove(e){
    	e.preventDefault();
        // $('#'+id).siblings('.zhaxin').remove();
        if(mousedown) {
            if(e.changedTouches){
                e=e.changedTouches[e.changedTouches.length-1];
            }
            num += 5;
            if(num > 400){
                $('.zhaxin').remove();
                ctx.beginPath();
                ctx.arc(200, 200, 1500, 0, Math.PI * 2);
                ctx.fill();
                if(index == 1){
                    $('.page1').removeClass('stop-swiping');
                    $('.Twinkle1').show();
                }
                if(index == 2){
                    $('.page2').removeClass('stop-swiping');
                    $('.Twinkle2').show();
                }
                if(index == 3){
                    $('.page3').removeClass('stop-swiping');
                    $('.Twinkle3').show();
                }
                if(index == 4){
                    $('.page4').removeClass('stop-swiping');
                    $('.Twinkle4').show();
                }
                if(index == 5){
                    $('.page5').removeClass('stop-swiping');
                    $('.Twinkle5').show();
                }
                return;
            }
            var x = (e.clientX*2);
            var y = (e.clientY*2);
            ctx.beginPath();
            // ctx.fillStyle = "red";
            ctx.arc(x, y, 50, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    canvas.addEventListener('touchstart', eventDown);
    canvas.addEventListener('touchend', eventUp);
    canvas.addEventListener('touchmove', eventMove);
    canvas.addEventListener('mousedown', eventDown);
    canvas.addEventListener('mouseup', eventUp);
    canvas.addEventListener('mousemove', eventMove);
}
