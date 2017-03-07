window.onload=function (){

	var pico=document.getElementById('pico');

	//声明一个变量content 获取元素content
	var content=document.getElementById('content');
	//声明一个变量send 获取元素send
	var send=document.getElementById('send');
	
	var kong=document.getElementById('kong');
	
	var sure=document.getElementById('sure');
	
	var chat=document.getElementById('chat');
	
	var chatcontent=document.querySelector('.chatcontent');
	
	var ico=true;
	
	pico.onclick=function (){
		if(ico){
			pico.src='img/rico.png';
			ico=false;
			content.value='';
		}else{
			pico.src='img/lico.png';
			ico=true;
			content.value='';
		}
	}
	content.focus();
	send.onclick=function (){
		if(content.value==''){
			kong.style.display='block';
			sure.onclick=function (){
				kong.style.display='none';
			};
		}
		else{
			var yn;
			if(ico){
				yn='lico';
				}
			else{
				yn='rico';
				}
			chatcontent.innerHTML='<div class="'+yn+'"><span><img src="img/'+yn+'.png"/></span><p>'+content.value+'</p></div>'+chatcontent.innerHTML;
			content.value='';
			content.focus();
		};
	};
}	
	
	

	
	
	
	
	
	

