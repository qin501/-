function play(img){
	/*通过id名查找元素*/
	var music=document.getElementById("music")
	/*暂停*/
	if(music.paused){
		music.play();
		img.src="img/musicBtn.png"
		img.className='btn';
	}else{
		music.pause();
		img.src="img/musicBtnOff.png"
		img.className='';
	}
}
