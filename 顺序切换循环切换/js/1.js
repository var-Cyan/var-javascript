window.onload=function (){
	//声明一个变量loop循环切换
	var loop=document.querySelector('#loop');
	//声明一个变量order顺序切换
	var order=document.querySelector('#order');

	var onOff1=true;
	//声明一个变量four
	var four=1;
	// 声明一个变量t1 功能描述
	var t1=document.getElementById('text1');
	// 声明一个变量t2 文字描述
	var t2=document.getElementById('des');
	// 声明一个变量prev上一页
	var prev=document.getElementById('prev');
	// 声明一个变量next下一页
	var next=document.getElementById('next');
	// 声明一个数组 （图片的名字） 
	var picName=['娜美','路飞 船长','索隆 剑客','娜美 航海士','乌索普 狙击手','山治 厨师','乔巴 医生','罗宾 考古学者','弗兰奇 船匠','布鲁克 音乐家'];
	// 声明一个数组 图片
	var pic=['img/blue.jpg','img/路飞.jpg','img/索隆.jpg','img/娜美.jpg','img/乌索普.jpg','img/山治.jpg','img/乔巴.jpg','img/罗宾.jpg','img/弗兰奇.jpg','img/布鲁克.jpg']
	//声明一个图片变量img
	var img=document.getElementById('img');
	//声明一个数字变量 num
	var number=0;
	//声明一个变量 图片的总张数和第几张图片
	var num=document.getElementById('num');
	//声明一个变量 ale 提醒
	var ale=document.getElementById('ale');
	//声明一个变量firstLast
	var firstLast=document.querySelector('.firstLast');
	//声明一个变量确定 sure
	var sure=document.querySelector('.sure');
	//声明一个变量bg
	var bg=document.querySelector('.bg');
	//声明一个变量camera
	var camera=document.querySelector('.camera');
	//声明一个变量
	var home=document.querySelector('.home');
	//声明一个变量 bbox
	var bbox=document.querySelector('.bbox');

	camera.onclick=function (){
		bbox.style.WebkitTransform =bbox.style.transform = 'scale(1) rotate(360deg)';
	}
	home.onclick=function (){
		bbox.style.WebkitTransform = 'scale(0) rotate(0deg)';
	}
	// 声明一个函数describe
	function describe (){	
		img.src=pic[number];
		num.innerHTML=(number+1)+'/'+picName.length;
		t2.innerHTML=picName[number];
	};
	loop.onclick = function (){
        /**
         * 如果 弹窗不显示的时候 才能点击这个按钮
         */
        if(four == 1){
          loop.className = 'active';
          order.className = '';
          t1.innerHTML = '图片可以从最后一张跳转到第一张循环切换';
          onOff1 = true;
        }
      };
     order.onclick = function (){
        if(four == 1){
          order.className = 'active';
          loop.className = '';
          t1.innerHTML = '图片只能到最后一张或只能到第一张切换';
          onOff1 = false;
        }
      };  
      describe ();
        prev.onclick = function (){
        if(four == 1){
          number--;
          if(number < 0){
            if(onOff1){
              number = pic.length - 1;
            }else{
              number = 0;
              ale.style.display = 'block';
              firstLast.innerHTML='已经是第一张了'
              four = 2;
            }
          }
          describe ();
        }
      };
      
      next.onclick = function (){
        if(four == 1){
          number++;
          if(number >pic.length - 1){
            if(onOff1){
              number = 0;  // 循环
            }else{
              number = pic.length - 1;  // 顺序
              ale.style.display = 'block';
              firstLast.innerHTML='已经是最后一张了'
              four = 2;
            }
          }
          describe ();
        }
      };

	sure.onclick = function (){
        ale.style.display = 'none';
        four = 1;
      };


}