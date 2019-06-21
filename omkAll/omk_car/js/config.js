(function(e){if(e)return;var t=["webkit","moz","o"],e={extend:function(e,t,n,r){n===undefined&&(n=!0);for(var i in t)if(n||!(i in e))r?r(i):e[i]=t[i];return e},support:{translate3d:function(){var e="translate3d(0px, 0px, 0px)",t=document.createElement("div");t.style.cssText=" -moz-transform:"+e+"; -ms-transform:"+e+"; -o-transform:"+e+"; -webkit-transform:"+e+"; transform:"+e;var n=/translate3d\(0px, 0px, 0px\)/g,r=t.style.cssText.match(n),i=r!==null&&r.length==1;return i}()},css:function(e,n,r){var i=/transform/i;if(i.test(n))for(var s=0;s<t.length;s++)e.style[t[s]+n.substr(0,1).toUpperCase()+n.substr(1)]=r;e.style[n]=r}};window.m=e})(window.m),m.Tab=function(e){this.config=m.extend(m.extend({},m.Tab.config),e,!0),this.init()},m.Tab.config={touchMove:!1,animTime:500,touchDis:40,direction:"x",touchSpeed:1,currentClass:"current",progressBar:!1},m.Tab.prototype={init:function(){var e=this,t=e.config;e._data={},e.target=t.target,e.length=e.target.length,e.trigger=t.trigger,e.num=e.target.length,e.wrap=e.target[0].parentNode,m.support.translate3d&&(e.wrap.style.webkitTransition="-webkit-transform "+t.animTime+"ms ease-out"),m.css(e.wrap,"transform","translate(0,0)"),e.width=e.wrap.parentNode.clientWidth;if(t.progressBar===!0){var n=document.createElement("ul");n.classList.add("progress-bar");for(var r=0;r<e.length;r++){var i=document.createElement("li");n.appendChild(i)}e.progressBar=e.wrap.parentNode.appendChild(n).childNodes}e._attach(),e.playTo(0)},_attach:function(){var e=this,t=e.config;window.addEventListener("resize",e.update.bind(e));if(e.trigger){var n=e.trigger.length;for(var r=0;r<n;r++)(function(t){e.trigger[t].addEventListener("touchend",function(n){e.playTo(t)})})(r)}var i=e._data,s=!1,o,u,a;t.touchMove&&e.wrap.addEventListener("touchstart",function(n){if(t.ontouchstart&&t.ontouchstart.apply(e,[n])===!1)return!1;i.pageX=n.touches[0].pageX,i.pageY=n.touches[0].pageY,e.wrap.style.webkitTransitionDuration="0ms",e.wrap.addEventListener("touchmove",u),e.wrap.addEventListener("touchend",a),o=""}),u=function(n){i.disX=n.touches[0].pageX-i.pageX,i.disY=n.touches[0].pageY-i.pageY,t.direction=="x"?i.dis=i.disX:i.dis=i.disY,o||(Math.abs(i.disX/i.disY)>1?o="x":o="y");if(t.ontouchmove&&t.ontouchmove.apply(e,[i.dis,n])===!1)return!1;t.direction==o&&(t.direction=="x"?m.css(e.wrap,"transform","translate3d("+(i.dis-e.target[e.current].offsetLeft)+"px,0,0)"):m.css(e.wrap,"transform","translate3d(0,"+(i.dis-e.target[e.current].offsetTop)+"px,0)"))},a=function(){if(o&&t.direction!=o)return;if(i.dis===undefined||isNaN(i.dis))i.dis=0;e.wrap.style.webkitTransitionDuration=t.animTime+"ms",e.wrap.removeEventListener("touchmove",u),e.wrap.removeEventListener("touchend",a);var n=!0;t.ontouchend&&t.ontouchend.apply(e,[i.dis])===!1&&(n=!1);if(!i.dis||Math.abs(i.dis)<t.touchDis||!n){e.playTo(e.current);return}i.dis>0?e.playTo(e.current-t.touchSpeed):e.playTo(e.current+t.touchSpeed),i.dis=0},e.wrap.addEventListener("click",function(n){t.onclick&&t.onclick.call(e,n)})},playTo:function(e){var t=this,n=t.config;t.wrap.style.webkitTransitionDuration=n.animTime+"ms";if(n.onchangebefore&&n.onchangebefore.apply(t,[e])===!1)return;e>=t.num-1&&(e=t.num-1),e<0&&(e=0),m.support.translate3d?n.direction=="x"?m.css(t.wrap,"transform","translate3d("+ -t.target[e].offsetLeft+"px,0,0)"):m.css(t.wrap,"transform","translate3d(0,"+ -t.target[e].offsetTop+"px,0)"):n.direction=="x"?m.css(t.wrap,"transform","translate("+ -t.target[e].offsetLeft*e+"px,0)"):m.css(t.wrap,"transform","translate(0,"+ -t.target[e].offsetTop*e+"px)");if(e===t.current)return;t.trigger&&t.trigger[t.current]&&t.trigger[t.current].classList.remove(n.currentClass),t.progressBar&&t.progressBar[t.current]&&t.progressBar[t.current].classList.remove(n.currentClass),t.prevPage=t.current,t.current=e,t.trigger&&t.trigger[t.current]&&t.trigger[t.current].classList.add(n.currentClass),t.progressBar&&t.progressBar[t.current]&&t.progressBar[t.current].classList.add(n.currentClass),n.onchangebefore&&n.onchangebefore.apply(t,[e]),n.lazyClass&&t.lazy(e),window.setTimeout(function(){n.onchange&&n.onchange.apply(t,[e])},n.animTime)},prev:function(){this.playTo(this.current-1)},next:function(){this.playTo(this.current+1)},update:function(e){var t=this;t.width=t.wrap.parentNode.clientWidth},lazy:function(e){var t=[];targetWrap=this.target[e],targetWrap.classList.contains(this.config.lazyClass)&&t.push(targetWrap);var n=Array.prototype.slice.call(targetWrap.querySelectorAll("."+this.config.lazyClass),0);t=t.concat(n);for(var r=0;r<t.length;r++){var i=t[r],s=i.getAttribute("data-url");s&&(/img/i.test(i.tagName)?i.src=s:i.style.backgroundImage="url("+s+")",i.removeAttribute("data-url"))}}},m.Pop=function(e){this.config=m.extend(e,m.Pop.config),this.init()},m.Pop.config={animTime:300},m.Pop.prototype={init:function(){var e=this,t=e.config;e.target=t.target,e.target.style.webkitPerspective="1000px",e.target.style.webkitBackfaceVisibility="hidden",e.context=t.target.querySelector(".pop-content"),e.context.style.webkitTransition="-webkit-transform "+t.animTime+"ms ease-out",e.context.style.webkitTransformOrigin="50% 0",e.hide()},show:function(){var e=this,t=e.config;e.target.style.display="block",window.setTimeout(function(){e.context.style.webkitTransform="translate3d(0,0,0) rotateX(0)"},0)},hide:function(){var e=this,t=e.config;e.context.style.webkitTransform="translate3d(0,-50%,0) rotateX(-90deg)",window.setTimeout(function(){e.target.style.display="none"},t.animTime)}};
(function(e){if(e)return;var t=["webkit","moz","o"],e={extend:function(e,t,n,r){n===undefined&&(n=!0);for(var i in t)if(n||!(i in e))r?r(i):e[i]=t[i];return e}};window.m=e})(window.m),m.Car=function(e){this.config=m.extend(m.extend({},m.Car.config),e,!0)},m.Car.config={speed:30,stopSpeed:5,time:100,height:480},m.Car.prototype={init:function(){var e=this,t=e.config;e._data={},e.target=t.target,e.wrap=e.target;e.wrap.style.webkitTransform="translateY(0px)";t.bspeed=0;e.miles=0;e.switch()},switch:function(){var t=this,n=t.config;var obj=t.target;t.bspeed=0;t.switchTime=0;t.clear();t.timerSwitch=setInterval(function(){if(t.bspeed<n.speed){t.bspeed+=2}else{t.switchOver=true}t.miles+=t.bspeed*n.time;var num=(parseInt(obj.style.webkitTransform.replace(/[^0-9]/ig,""))+t.bspeed);t.bspeed=t.bspeed>0?Math.ceil(t.bspeed):Math.floor(t.bspeed);if(num<n.height){obj.style.webkitTransform="translateY("+num+"px)"}else{obj.style.webkitTransform="translateY(0px)"}t.switchTime++},n.time)},up:function(){var t=this;n=t.config;t.clear();if(t.bspeed<n.speed){t.switch();return false}else{t.bspeed=t.bspeed+3}t.change();var t=this;this.clear();t.timerUp=setInterval(function(){t.change();t.miles+=t.bspeed*n.time},n.time)},down:function(){var t=this;n=t.config;t.clear();if(t.bspeed>n.stopSpeed){t.bspeed-=3}else{t.stops();return false};var t=this;t.timerDown=setInterval(function(){t.change();t.miles+=t.bspeed*n.time},n.time)},stops:function(){var t=this;n=t.config;t.stopTime=0;t.timer=null;t.clear();t.timerStops=setInterval(function(){if(t.bspeed>n.stopSpeed){t.bspeed-=2}else{if(t.stopTime>20)t.bspeed-=2}t.change();t.stopTime++;if(!t.bspeed)clearTimeout(t.timerStops);t.miles+=t.bspeed*n.time;t.stopTime++},n.time)},change:function(){var t=this;n=t.config;var obj=n.target;var num=(parseInt(obj.style.webkitTransform.replace(/[^0-9]/ig,""))+t.bspeed);t.bspeed=t.bspeed>0?Math.ceil(t.bspeed):Math.floor(t.bspeed);if(num<n.height){obj.style.webkitTransform="translateY("+num+"px)"}else{obj.style.webkitTransform="translateY(0px)"}},clear:function(){var t=this;clearTimeout(t.timerSwitch);clearTimeout(t.timerUp);clearTimeout(t.timerDown);clearTimeout(t.timerStops)}}

//define selctor
function g(obj){return (typeof obj=='object')?obj:document.getElementById(obj);}



var per = 0;
var kilo = 0;

//图片预加载
var imgPath= "/templates/omk/omk_car/img/";

var loadImage = function(path, callback){
    var img = new Image();
    img.onload = function(){
        img.onload = null;
        callback(path);
    }
    img.src = path;
}
function removeElement(_element){
         var _parentElement = _element.parentNode;
         if(_parentElement){
                _parentElement.removeChild(_element);  
         }
}
var loadingPage = (function(){
    var sourceArr = ['guidebarpoint.png?201407110132','guidebar.jpg?201407110132','tools1.png?201407110132','tools2.png?201407110132','tools3.png?201407110132','tools4.png?201407110132','tools5.png?201407110132','tools6.png?201407110132','tools7.png?201407110132','tools8.png?201407110132','car.png?201407110132','car-sep.png?201407110132','road.jpg?201407110132'];
    for (var i = 0; i < sourceArr.length; i++) {
        sourceArr[i] = (imgPath + sourceArr[i]);
    };
    var imgLoader = function(imgs, callback){
        var len = imgs.length, i = 0;
        while(imgs.length){
            loadImage(imgs.shift(), function(path){
                callback(path, ++i, len);
            });
        }
    }
    imgLoader(sourceArr, function(path, curNum, total){
        var percent = curNum/total;
        if(percent == 1){
    		//loading页隐藏
		 	var domLoading = document.querySelector('.load');
			removeElement(domLoading);
            setTimeout(gameLoading,500);
        }
    });
})();



//道具详情信息展示
function propDetail(e) {
	var target = e.target;
	if(target.tagName == "IMG"){
		e.stopPropagation() ;
		var shareData = g("shareData");
		if(shareData.style.display= "none"){
			shareData.style.display="none";
		}
		var sort = target.getAttribute("sort");
		var propShows = document.querySelectorAll(".propShow");
		for(var i=0; i<propShows.length; i++){
			propShows[i].style.display = "none";
		}
		document.querySelectorAll(".propShow")[sort-1].style.display = "block";
	}
}
//初始化道具
function propReset(){
	var tools = g("tools").getElementsByTagName("img");
	for(var i=0; i<tools.length; i++){
		var randNum=Math.floor(Math.random()*4+1);
		tools[i].src = propsObjs[randNum].url;
		tools[i].setAttribute("type",propsObjs[randNum].type);
		tools[i].setAttribute("tip",propsObjs[randNum].tip);
		tools[i].setAttribute("num",propsObjs[randNum].id);
		tools[i].setAttribute("name",propsObjs[randNum].name);
		tools[i].parentNode.getElementsByTagName("em")[0].innerHTML = propsObjs[randNum].name;

	}
}
function updateProp(target,num){
	 parent = target.parentNode
	// parent.removeChild(target);
	// var objImg = document.createElement("img");//div创建成功

	var randNum = Math.floor(Math.random()*100);
	if(randNum<60){
		 randNum=Math.floor(Math.random()*3);
	}else{
		 randNum=Math.floor(Math.random()*num+3);
	}
	//console.log(randNum+" rand");
	target.src = propsObjs[randNum].url;
	target.setAttribute("type",propsObjs[randNum].type);
	target.setAttribute("tip",propsObjs[randNum].tip);
	target.setAttribute("num",propsObjs[randNum].id);
	target.setAttribute("name",propsObjs[randNum].name);
	// parent.appendChild(objImg);
	parent.getElementsByTagName("em")[0].innerHTML = propsObjs[randNum].name;

	

}
var propsObjs = [
	{id:1,name:"加速引擎",url:"/templates/omk/omk_car/img/tools1.png?201407110132",type:"1",tip:"引擎改装成功！飚起来！"},
	{id:2,name:"里程芯片",url:"/templates/omk/omk_car/img/tools2.png?201407110132",type:"1",tip:"芯片改装成功！飚起来！"},
	{id:3,name:"招财挂件",url:"/templates/omk/omk_car/img/tools3.png?201407110132",type:"3",tip:"挂饰改装成功！飚起来！"},
	{id:4,name:"幸运油箱",url:"/templates/omk/omk_car/img/tools4.png?201407110132",type:"1",tip:"油箱改装成功！飚起来！"},
	{id:5,name:"香蕉皮",url:"/templates/omk/omk_car/img/tools5.png?201407110132",type:"0",tip:"您的赛车踩到了香蕉皮，滑到拉~"},
	{id:6,name:"大钉子",url:"/templates/omk/omk_car/img/tools6.png?201407110132",type:"0",tip:"赛车轮胎被图钉扎破拉，好惨~"},
	{id:7,name:"路障",url:"/templates/omk/omk_car/img/tools7.png?201407110132",type:"0",tip:"秉公执法的交警拦下了你的车~"},
	{id:8,name:"油漆",url:"/templates/omk/omk_car/img/tools8.png?201407110132",type:"0",tip:"新车惨遭油漆洗礼，人生好艰难~"}
]

//汽车油量更新
function oilsModify(string,curnum){
	var  oils = g("oils").getElementsByTagName("span");
	if(string == "reset"){
		for(var i=0; i< oils.length; i++){
	 		oils[i].className = "";
	 	}
	}
 	else{
 		oils[curnum].className = "blank";
 	}
}
function updateImgUrl(imgs,filename){
	for(var i=0; i<imgs.length; i++){
		imgs[i].src = filename;
	}
}

function gameLoading(){	//预加载完成后动作
 		g("begin").onclick = function(){
 			// pgvSendClick({hottag:'a20140711modifyracing.btns.begingame'}); 
 			removeElement(g('guide'));
 			 var car = new m.Car({
		        target: g("road"),
		        speed: 15,
		        stopSpeed:2,
		        time: 50,
		        height:750
	        });

 			var pointNum = 1;

 			function play(){
 				propReset();
 			 	car.init();
 			 	pointNum = 1;
 			 	var  startNum = 0;
 			 	var  endNum =11;

 			 	oilsModify("reset");
 			 	var points = 1;
 			 	g("milesPoint").innerHTML = points;

 			 	var roadImgs = g("road").getElementsByTagName("img");;
 			 	updateImgUrl(roadImgs,"/templates/omk/omk_car/img/road.jpg?201407110132");
 			 	//油箱与时速时时更新
 			 	mss =  setInterval(function(){
			    	hour = g("hour").innerHTML = parseInt(car.bspeed*0.5);//时速*4
			    	g("miles").innerHTML = (car.miles/8000).toFixed(1);//行驶里程80000
			    },1000);

 			 	var endTimer = setInterval(function(){
 			 		if(startNum == 1){
 			 			g("milesPoint").innerHTML = 2;
 			 			pointNum = 2;
 			 			loadImage(imgPath+"road2.jpg?201407110132",function(){
 			 				 	updateImgUrl(roadImgs,"/templates/omk/omk_car/img/road2.jpg?201407110132");
 			 			});
 			 		}else if(startNum == 3){
 			 			g("milesPoint").innerHTML =3;
 			 			pointNum = 3;
 			 			loadImage(imgPath+"road3.jpg?201407110132",function(){
 			 				 	updateImgUrl(roadImgs,"/templates/omk/omk_car/img/road3.jpg?201407110132");
 			 			});
 			 		}else if(startNum == 6){
 			 			g("milesPoint").innerHTML =4;
 			 			pointNum = 4;
 			 			loadImage(imgPath+"road4.jpg?201407110132",function(){
 			 				 	updateImgUrl(roadImgs,"/templates/omk/omk_car/img/road4.jpg?201407110132");
 			 			});
 			 		}



 			 		oilsModify("plus",startNum);	//减少油量
 			 		startNum++;
 			 		if(startNum == endNum){ 			//游戏结束后才操作	 
 			 			clearTimeout(endTimer);	
 			 			clearInterval(mss);		
 			 			car.stops();
	 			 		g('sharePage').style.display = "block";	//分享页面展现
	 			 		car.clear();
	 			 		overEnd();//游戏结束执行

 			 			}
 			 		
 			 		 

 			 	},2500);//3500

 			 }
 			 play();
 			 

 			g("askPropbar").addEventListener('click', function(e){propDetail(e);}, false);
		   
		    var forever = false; //无敌状态
		    var statusTimer = null;
		    var tools = g("tools");
		    var d = {};
		    tools.addEventListener('touchstart', function(e){
		    	var target = e.target;
		    	if(target.tagName == "IMG"){
		    		d.startY = e.touches[0].pageY;
		    		d.startX = e.touches[0].pageX;
		    		tools.addEventListener('touchmove', touchMove);
					tools.addEventListener('touchend', touchEnd);
		    	}
		    	clearTimeout(statusTimer);
		    	g("carStatus").style.opacity = 0;

		    	var targetNum = target.getAttribute("num");


			});
			touchMove = function(e){
				var target = e.target;
				if(target.tagName == "IMG"){
					d.disY = e.touches[0].pageY - d.startY;
					d.disX = e.touches[0].pageX - d.startX;
					if(Math.abs(d.dis / d.disY) > 0.5) {
						e.stopPropagation();
						e.preventDefault();
					}
					 target.style.webkitTransform = 'translate3d(' +d.disX + 'px,'+d.disY+'px,0)';
				}
			}
			touchEnd = function(e){
				var target = e.target;
				//console.log(d.disY +"disY");
				if(target.tagName == "IMG"){
					target.style.webkitTransform = 'translate3d(' +0 + 'px,'+0+'px,0)';
					if(d.disY > 20){
						updateProp(target,pointNum);
					}else if(d.disY < -20){
						if(target.getAttribute("type") == 3){
							forever = true;
							g("carFeature").src = "/templates/omk/omk_car/img/car-sep.png?201407110132";
							setTimeout(function(){
								g("carFeature").src = "/templates/omk/omk_car/img/car.png?201407110132";
								forever = false;
							},3000);
						}
							if(!forever){
								if(target.getAttribute("type") == 1){
									//console.log(car.switchOver + " OVER");
									car.up();
									updateProp(target,pointNum);
									clearTimeout(statusTimer);
									// g("carStatus").style.opacity = 1;
									g("carStatus").style.opacity = 0;
									g("carText").innerHTML =  target.getAttribute("tip");

									//console.log(target);
									statusTimer = setTimeout(function(){
										g("carStatus").style.opacity = 0;
									},3000);
									g("carStatus").className = "car-laugh";


								}
								else{

									//console.log(car.switchOver + " OVER");
									car.down();
									updateProp(target,pointNum);
									clearTimeout(statusTimer);
									// g("carStatus").style.opacity = 1;
									g("carStatus").style.opacity = 0;

									g("carText").innerHTML =  target.getAttribute("tip");

									statusTimer = setTimeout(function(){
										g("carStatus").style.opacity = 0;
									},3000);
									g("carStatus").className = "car-cry";


								}
							}else{
								if(target.getAttribute("type") == 1){
									car.up();
									updateProp(target,pointNum);
									clearTimeout(statusTimer);
									// g("carStatus").style.opacity = 1;
									g("carStatus").style.opacity = 0;

									g("carText").innerHTML =  target.getAttribute("tip");


									statusTimer = setTimeout(function(){
										g("carStatus").style.opacity = 0;
									},3000);
									g("carStatus").className = "car-laugh";
								}
								else{
									updateProp(target,pointNum);
								}
							}	
					}
				}
				d = {};

			}
 		}
}


