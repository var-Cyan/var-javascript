window.onload=function(){	
	(function(d){
		var sec=d.querySelector('section');		
		var arr=[
		'img/1484663381888.jpg',
		'img/1485183613336.jpg',
		'img/1485184026988.jpg',
		'img/1485184837151.jpg',
		'img/1485184857554.jpg',
		'img/1485184940366.jpg',
		'img/1485184973469.jpg',
		'img/1485185184973.jpg',
		]
		var len=arr.length;
		var strpic='<div class="pic">';
		var strball='<div class="ball">';
		var n=0;
		var dir=true;
		var timer=null;
		for(var i=0;i<len;i++){
			strpic+='<img class="'+(i==0? "active":" ")+'" src="'+ arr[i] +'">';
			strball+='<a class="'+(i==0?'active':'')+'" href="javascript:;"></a>'
		}
		strpic+='</div>';
		strball+='</div>';
		sec.innerHTML+=strpic+strball;
		var prev=d.querySelector('.prev');
		var next=d.querySelector('.next');
		var pic=d.querySelector('.pic');
		var imgs=document.querySelectorAll('img');
		var balls=document.querySelectorAll('.ball a')
		function cleanPro(i){
			balls[n].className=i<1?'active':'';
			// i<1?fq.mTween(imgs[n], 'opacity', 1, 100,'linear'):fq.mTween(imgs[n], 'opacity', 0, 100,'linear');
			fq.mTween(imgs[n], 'opacity',i<1? 1:0, 500,'linear',function(){dir=true;});

		}
		// function nextEvent(){
		// 	cleanPro(1);
		// 	// n++;//1
		// 	// n = n>len-1? 0 : n;//1
		// 	n = (n==len-1)? 0 : ++n;//2
		// 	cleanPro(0);
		// }
		// function prevEvent(){
		// 	cleanPro(1);
		// 	// n--; //1
		// 	// n = (n<0)? len-1 : n;//1
		// 	n = (n==0)? len-1 : --n;//2
		// 	cleanPro(0);
		// }
		function nextPrev(onOff){
			if(!dir){
				return;
			}
			dir=false;
			cleanPro(1);
			n = onOff? (n==len-1? 0 : ++n):(n==0? len-1 : --n);
			cleanPro(0);
		}
		next.onclick=function(){
			clearInterval(timer);
			nextPrev(true);
			dianji();
		}
		prev.onclick=function(){
			clearInterval(timer);
			nextPrev(false);
			dianji();
		}
		dianji();
		function dianji(){
			timer=setInterval(function(){nextPrev(true);},3000);
		}
		
		pic.onmouseover=function(){
			clearInterval(timer);
		}
		pic.onmouseout=function(){
			dianji();
		}
		for(i=0;i<len;i++){
			balls[i].index=i;
			balls[i].onclick=function(){
			if(!dir){
				return;
			}
				dir=false;
				cleanPro(1);
				n=this.index;
				cleanPro(0);
			}
		}
	})(document)
}