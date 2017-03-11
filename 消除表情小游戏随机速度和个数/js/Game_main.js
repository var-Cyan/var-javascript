// ------------------------------------
// 图片资源
var imgData = ['img/demonI.png', 'img/demonII.png', 'img/demonIII.png', 'img/demonIV.png', 'img/demonV.png'],
		imgLen = imgData.length;

// 最外层容器
var outerWrap = Fq('.content');
var objWrap = Fq('.bili');
// 外层容器总宽度
var outerWidth = fq.css(objWrap, 'width');
var outerHeight = fq.css(objWrap, 'height');
// 可以有多少个位置
var allPositions = Math.floor(outerWidth / 50) - 1;
// 一个小人的宽度
var eachWidth = 50;
// 初始速度
var speed = 3000;

var score = 0;
var lose = 0;
var end = false;

// 开始游戏
Fq('.btn').onclick =function (){
	start();
};

// ------------------------------------

// 开始游戏：
function start(){
	end = false;
	Fq('.winNum').innerHTML = Fq('.loseNum').innerHTML = 0 + '分';
	fq.animate(Fq('.win'), {left: -100}, 1000);
	fq.animate(Fq('.lose'), {left: -100}, 1000);
	fq.animate(Fq('.btn'), {bottom: -60, opacity: 0}, 1000, play);
}

// 结束游戏
function gameOver(){
	if(lose == 1){
		end = true;
		setTimeout(function (){
			fq.shake(outerWrap, 'translateX', 20, function (){
				fq.animate(Fq('.win'), {left: 14}, 1000);
				fq.animate(Fq('.lose'), {left: 14}, 1000);
				fq.animate(Fq('.btn'), {bottom: 20, opacity: 1}, 1000);
			});
		},500);
		objWrap.innerHTML = '';
		Fq('.btn').innerHTML = '重新开始！';
	}
}

// 随机生成小人
function createOjbs(){
	var objs = {
		img: imgData[fq.rp([0, imgLen-1])],
		// x: fq.rp([1, allPositions]) * eachWidth,
		x: fq.rp([10, outerWidth - eachWidth]),
		y: -70
	};
	return objs;
}

// 创建小人元素
function createEle(){
	var obj = createOjbs();
	objWrap.innerHTML = `<img src="${obj.img}" style="left:${obj.x}px;top:${obj.y}px">`;
}

function play(){
	if(end) return;
	createEle();
	var imgObj = Fq('.bili img');
	imgObj.onmouseover = function (){
		clearInterval(imgObj.timer);
		imgObj.src = 'img/demonVI.png';
		fq.shake(imgObj, 'translateX', 20, function (){
			objWrap.innerHTML = '';
			Fq('.winNum').innerHTML = ++score + '分';
			if(score % 10 == 0 && speed >= 500){
				speed -= 500;
			}
			play();
		});
	}
	fq.animate(imgObj, {top: outerHeight}, speed, 'linear', function (){
		fq.shake(outerWrap, 'translateY', 20, function (){
			Fq('.loseNum').innerHTML = ++lose + '分';
			//gameOver();
			play();
		});
		objWrap.innerHTML = '';
	});
};























































































