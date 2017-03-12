window.onload=function(){
	var li=document.querySelectorAll('li');
		len=li.length;
	var sumitem=document.querySelector('.sumitem');
	var sumPrice=document.querySelector('.sumPrice');
	var summost=document.querySelector('.summost');
	var date=[];
		for(i=0;i<len;i++){
			abc(i);
		}
		function abc(l){
			var add=li[l].querySelector('.add');
			var min=li[l].querySelector('.min');
			var subtotalPrice=li[l].querySelector('.subtotalPrice');
			var unitPrice=li[l].querySelector('.unitPrice');
			var num=li[l].querySelector('.num');
			add.onclick=function(){
				num.innerHTML=date[l].num=++num.innerHTML;
				subtotalPrice.innerHTML=date[l].subtotalPrice=num.innerHTML*unitPrice.innerHTML;
				sum();
			}
			min.onclick=function(){
				num.innerHTML=date[l].num=num.innerHTML!=0?--num.innerHTML:0;
				subtotalPrice.innerHTML=date[l].subtotalPrice=num.innerHTML*unitPrice.innerHTML;
				sum();
			}
			date[l]={
				num:num.innerHTML*1,
				unitPrice:unitPrice.innerHTML*1,
				subtotalPrice:subtotalPrice.innerHTML*1
			};
		}
			function sum(){
				var arrSum=[0,0,0];
				for(i=0;i<len;i++){
					arrSum[0]+=date[i].num;
					arrSum[1]+=date[i].subtotalPrice;
					if(date[i].num!=0 && arrSum[2]<date[i].unitPrice){
						arrSum[2]=date[i].unitPrice;
					}
				}
				sumitem.innerHTML=arrSum[0];
				sumPrice.innerHTML=arrSum[1];
				summost.innerHTML=arrSum[2];
			}
}