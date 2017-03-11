//----------------------------------------
// 图片资源：
var imgData = ['img/demonI.png', 'img/demonII.png', 'img/demonIII.png', 'img/demonIV.png', 'img/demonV.png'],
		imgLen = imgData.length;
// 运动函数资源
var move=['linear','easeIn','easeOut','easeBoth','easeInStrong','easeOutStrong','easeBothStrong','bounceIn','bounceOut','bounceBoth']
// 获取包裹小人的容器div
var bili = Fq('.bili');
// 获取包裹小人外层容器的宽度
var wrapWidth = fq.css(bili, 'width');
// 定义一个小人的最大宽度：
var oneMaxWidth = 75;
// 获取最外层元素用来做失去分数时候的抖动
var outer = Fq('.content');
// 初始运动的总时间
var speed = 3000;
// 定义加分数
var winScore = 0;
// 定义失分数
var loseScore = 0;
// 定义一个游戏结束的变量
var end = false;

// 开始游戏按钮点击：
Fq('.btn').onclick = function (){
  gameStart();
};


//-----------------------------------------
// 游戏开始：
function gameStart(){
  /*Fq('.win')
  Fq('.lose')
  Fq('.btn')*/
  end = false;
  Fq('.loseNum').innerHTML = Fq('.winNum').innerHTML = winScore = loseScore = 0;
  fq.animate(Fq('.win'), {left: -100}, 1000);
  fq.animate(Fq('.lose'), {left: -100}, 1000);
  fq.animate(Fq('.btn'), {bottom: -60, opacity: 0}, 1000, play);
}

// 生成小人对象数据：
function creatObj(){
  var n=fq.rp([1,5])
  var arr= new Array(n);
  for(var i=0;i<n;i++){
    arr[i]={};
  }

  arr.forEach(function(item){
      item.imgSrc = imgData[fq.rp([0, imgLen-1])];
      item.x = fq.rp([10, wrapWidth - oneMaxWidth]);
      item.y = -63;
  })
  return arr;
}

// 创建小人对应的html元素：
function createEle(){
  var creat= creatObj();
  creat.forEach(function(item){
      bili.innerHTML += `<img src="${item.imgSrc}" style="left:${item.x}px;top:${item.y}px;">`;
  })

}

// 游戏运行函数：
function play(){
  if(end){
    return;
  }
  createEle();
  var gameImg = Fq('.bili img');

  var gameImg =document.querySelectorAll('.bili img')
    gameImg.forEach(function(item){
      
      item.onmouseover = function (){
      clearInterval(item.animate);
      item.src = 'img/demonVI.png';
      fq.shake(item, 'translateX', 20, function (){
        item.parentNode.removeChild(item);
        Fq('.winNum').innerHTML = ++winScore + '分';
        if(winScore % 10 === 0 && speed >= 5000){
          speed -= 300;
        };
        if(bili.innerHTML===''){
          play();
        }
      });
    };
      fq.animate(item, {top: 410}, speed, move[fq.rp([0,move.length-1])], function (){
        Fq('.loseNum').innerHTML = ++loseScore + '分';
        fq.shake(outer, 'translateY', 20, function (){
          
          gameOver();
          if(bili.innerHTML===''){
            play();
          }
        });
         item.parentNode.removeChild(item);
      });
  })
}

// 游戏结束功能
function gameOver(){
  if(loseScore >=10){
    end = true;
    setTimeout(function() {
      fq.shake(outer, 'translateX', 20, function (){
        fq.animate(Fq('.win'), {left: 14}, 1000);
        fq.animate(Fq('.lose'), {left: 14}, 1000);
        fq.animate(Fq('.btn'), {bottom: 20, opacity: 1}, 1000, function (){
          Fq('.btn').innerHTML = '重新开一局吧！';
        });
      });
    }, 500);
  }
}




