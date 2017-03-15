var search=window.location.search.slice(1);
var hash=window.location.hash.slice(1)*1;
var moresearch=aData[search].text[hash];
var back=document.querySelector('.back')
var box=document.querySelector('.box');
box.innerHTML=`<div class="head">
				<div class="zhaopin">${moresearch.zw}</div>
				<span class="yaoqiu">${moresearch.dy}/${moresearch.dd}/${moresearch.jy}/${moresearch.xl}/人数${moresearch.rs}名</span>
			</div>
			<div class="body">
				<span class="t">${moresearch.info[0].t}</span>
				<span class="l">${del(moresearch.info[0].l)}</span>
			</div>`;

function del(arr){
	var str=''
	for(var i=0;i<moresearch.info[0].l.length;i++){
		str+=arr[i]+'</br>'
	}
	return str
}
back.onclick=function(){
	window.location.href=`shouye.html?${search}#${Number(Math.floor((hash/4)+1))}`;
}
