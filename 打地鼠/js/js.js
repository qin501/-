window.onload=function(){
	/*得分*/
	var scope=0;
	var img=document.getElementsByTagName('img');
	var d=document.getElementById('js');
	var music=document.getElementById('music');
	music.pause();
	var time;
	function jiaSu(x){
		if(time!=undefined)
		clearInterval(time);
		time=setInterval(function(){
			var num=Math.round(Math.random()*8);/*0-8的随机数*/
			img[num].src='img/2.gif';
			num=Math.round(Math.random()*8);
			img[num].src='img/5.jpg';
		},x);
	}
	//加速
	jiaSu(1000);
	for(var i=0;i<img.length;i++){
		img[i].onclick=function(){
			var src=this.src;
			if(src.indexOf('img/2.gif')!=-1){
				music.play();
				music.src='mp3/d.mp3';/*修复Bug,多次点击时声音消失*/
				scope+=2;
				this.src='img/5.jpg';
			}else{
				scope-=2;
			}
			if(scope==10){
				jiaSu(500);
			}else if(scope==20){
				jiaSu(100);
			}
			
			d.innerText='得分：'+scope;
		}
	}
}

