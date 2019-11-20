// var w = 375;
// var f = 16;
// var c = document.documentElement.clientWidth;
// var nf = c * f / w;
// document.documentElement.style.fontSize = nf + 'px';
window.onresize = setFontSize;
setFontSize();
function setFontSize(){
    var designWidth = 750;
    var windowWidth = document.documentElement.clientWidth;
    console.log(windowWidth);
    if(windowWidth > designWidth){
        windowWidth = designWidth;
    }
    document.documentElement.style.fontSize = 32 * (windowWidth / designWidth) + "px";

}
// 移动端默认初始化时暂停播放，改为初始化页面时播放
document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
		$("#but").css("-webkit-animation","rotating 1.5s 0s linear infinite");
        var audio = document.getElementsByClassName('audio')[0];

            audio.play();

        document.addEventListener("WeixinJSBridgeReady", function () {

            audio.play();

        }, false);

    }
    // audioAutoPlay();
});
// 音频播放
function Play(e) {
    var audio = document.getElementsByClassName('audio')[0];
    console.log(audio.paused);
    if(audio.paused){
 		audio.play();
        $("#but").css("-webkit-animation","rotating 1.5s 0s linear infinite");
    }else{
		$("#but").css("-webkit-animation","");
	 	audio.pause();
        console.log('暂停')
    }
}