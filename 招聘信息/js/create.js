//实时获取search、hash、数据
var search=window.location.search.substr(1) || 'sh';
var hash=Number(window.location.hash.slice(1)) || 1;
var data=aData[search].text;
//获取左侧列表的父级及生成列表内容
var nav=document.querySelector('.contant nav')
var str='';
for(var i=0;i<aData.list.length;i++){
str+=`<a class="${search===aData.list[i].lx? 'active':''}" href="?${aData.list[i].lx}">
		<span>
			${aData.list[i].text}
		</span>
		<span>
			${aData.list[i].eng}
		</span>
	</a>`;
}
nav.innerHTML=str;
//招聘信息的父级
var shbox=document.querySelector('.shbox');
//总招聘信息的父级
var zhaopin=document.querySelector('.zhaopin');
//每页有几条信息
var n=4;
// 初始化页面
creat(hash);
// 生成招聘信息的函数
	function creat(hash){
		shbox.innerHTML='';	
	for(var i=(hash-1)*n;i<hash*n;i++){
		if(!data[i]) break
		var li=document.createElement('li');
			li.ID=i
		li.innerHTML=`<span class="num">
					${aData.add0(i+1)}
				</span>
				<div class="need">
					<div class="top">
						<span class="zw">${data[i].zw}</span>
						<span class="rs">需求人数:${data[i].rs}名</span>
					</div>
					<div class="bottom">
						<span>${data[i].info[0].t}</span>
						<div class="gwxq">
							<span>${data[i].info[0].l}</span>
						</div>
					</div>
				</div>
				<div class="last">
					<timer class="sj">${aData.date(data[i].sj,1)}</timer>
					<div class="more">查看详情</div>
				</div>`;
				li.onclick=function(){
					window.location.href=`more.html?${search}#${this.ID}`;
				}
				
			shbox.appendChild(li);
		}

		// 获取页数的父级及生成页数
	var div=document.createElement('div');
		div.className='list';
	//有多少页
	var page=Math.ceil(data.length/n);
	for(var i=0;i<page;i++){
		var a=document.createElement('a');
		a.innerHTML=i+1;
		a.href=`#${i+1}`;
		a.onclick=function(){
			hash=Number(this.innerHTML);
			creat(hash);
		}
		div.appendChild(a);
	}
	zhaopin.appendChild(div);


	}