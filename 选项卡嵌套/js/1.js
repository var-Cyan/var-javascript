window.onload=function(){
(function(d){
	var data = [
	      {
	        'btn': 'he',
	        'describe': ['路飞', '索隆', '山治', '乌索普'],
	        'pic': ['路飞.jpg','索隆.jpg','山治.jpg','乌索普.jpg']
	      },
	      {
	        'btn': 'she',
	        'describe': ['娜美', '罗宾'],
	        'pic': ['娜美.jpg','罗宾.jpg']
	      },
	      {
	        
	        'btn': 'it',
	        'describe': ['布兰奇', '布鲁克', '乔巴'],
	        'pic': ['布兰奇.jpg','布鲁克.jpg','乔巴.jpg']
	      }
	    ];
	var section = d.querySelector('section');
	var str1= '<div class="side">';
	var str2= '<div class="content">';
	var len=data.length;
	for(var i=0;i<len;i++ ){
		str1+='<div class='+(i==0? 'active':'' )+'>'+data[i].btn+'</div>'
		str2+='<div class="item '+(i==0? 'active':'' )+'"><div class="pic"></div><div class="describe"></div></div>'
	}
		str1+= '</div>';
		str2+= '</div>';
	section.innerHTML=str1+str2;
	var pic=d.querySelectorAll('.pic'),
		describe=d.querySelectorAll('.describe');
	for(var i=0;i<len;i++ ){
		for(var j=0,lenj=data[i].pic.length;j<lenj;j++ ){
			pic[i].innerHTML+='<img class="'+(j==0? 'active':'' )+'" src="img/'+data[i].pic[j]+'" alt="">';
			describe[i].innerHTML+='<p class='+(j==0? 'active':'' )+'>'+data[i].describe[j]+'</p>'
		}
	}
	var side=d.querySelector('.side'),
	 	btn=side.querySelectorAll('div');
	var content=d.querySelector('.content'),
		item=content.querySelectorAll('.item');
		console.log(item);
	var	prev1=0;
	for(var i=0;i<len;i++){
		btn[i].index=i;
		btn[i].onclick=function(){
			btn[prev1].className='';
			this.className='active';
			item[prev1].className='item';
			item[this.index].className+=' active';
			prev1=this.index;
		}
	}
	for(var i=0;i<len;i++){
		goON(item[i]);	
	}
	function goON(x){
		var img=x.querySelectorAll('img');
		var p=x.querySelectorAll('p');
		var prev2=0;
			for(var i=0,len2=img.length;i<len2;i++){
				p[i].index=i;
				p[i].onclick=function(){
					p[prev2].className='';
					this.className='active';
					img[prev2].className='';
					img[this.index].className='active';
					prev2=this.index;
				}
			}
		}
})(document)
}//window.onload