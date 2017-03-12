window.onload=function(){
	(function(d){
		var li=d.querySelectorAll('li');
		var nums=d.querySelectorAll('.num');
			subtotalPrices=d.querySelectorAll('.subtotalPrice'),
			unitPrices=d.querySelectorAll('.unitPrice');
		var sumitem=d.querySelector('.sumitem'),
			sumPrice=d.querySelector('.sumPrice'),
			summost=d.querySelector('.summost');
		for(var i=0,len=li.length;i<len;i++){
			start(li[i]);
		}
		function start(x){
			var add=x.querySelector('.add'),
				min=x.querySelector('.min'),
				num=x.querySelector('.num'),
				unitPrice=x.querySelector('.unitPrice'),
				subtotalPrice=x.querySelector('.subtotalPrice');
				add.onclick=function(){
					num.innerHTML=++num.innerHTML;
					sum();
				}
				min.onclick=function(){
					num.innerHTML=num.innerHTML>0?--num.innerHTML:0;
					sum();
				}	
				function sum(){
					subtotalPrice.innerHTML=(unitPrice.innerHTML)*(num.innerHTML);
					var zgs=0,
						zP=0,
						most=0;
					for(var i=0;i<nums.length;i++){
						zgs+=nums[i].innerHTML*1;
						zP+=subtotalPrices[i].innerHTML*1;
						if(nums[i].innerHTML!=0 && most<unitPrices[i].innerHTML*1){
							most=unitPrices[i].innerHTML*1;
						}
					}
					sumitem.innerHTML=zgs;
					sumPrice.innerHTML=zP;
					summost.innerHTML=most;
				}
		}
	})(document)
}//window