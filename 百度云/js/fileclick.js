//初始化页面右侧文件的数据
 prodata=createpage(data,pid)
function createpage(data,pid){
	    allcheck.className='';
	   
	promovebox(data)
	proTree(data, pid);
	probread(data,pid);

	var filelis=profiles(data, pid)
		if(profiles(data, pid)){
			for(var i=0;i<profiles(data, pid).length;i++){
				profiles(data, pid)[i].checked=false
			}
		}	
			allcheck.lastElementChild.innerHTML='全选';

			back.classList[`${breadParent.children.length==1?'remove':'add'}`]('active')
			load.innerHTML=`已全部加载，共${filelis?filelis.length:0}项`;
 		folderbox.classList[filesListParent.children.length?'remove':'add']('active');
 	
 	return filelis
 	
 	
}
//新建功能
newbuild.onclick=function(){
	newbuildFun()
}
// 新建功能的函数
function newbuildFun(){
	if(funonOff){
		funonOff=false;
		clickNewBuild(data,pid)
	}
}
//全选功能
allcheck.onclick=function(){
	if(filesListParent.children.length==0){
		alertfun('没有可选项')
		return
	}
	if(funonOff){
		allcheckevent(this);
	}
}

//复制功能
copy.onclick=function(){
	moveFun(true);
}

//删除功能
del.onclick=function(){
	delFun();
}
function delFun(){
	if(funonOff){	
		deletekey()
	}
}
//返回上一层
back.onclick=function(){
	backFather()
}
function backFather(){
	if(funonOff){
		var sonId=breadParent.lastElementChild.dataset.id*1
		var fatherId=getDataById(data, sonId).pId
		createpage(data,fatherId)
	}

}





//切换文件夹样式
rightfun.addEventListener('click',function(e){
	var target = e.target;
	if(target.classList.contains('list')){
		filesListParent.classList[filesListParent.classList.contains('listfile')?'add':'remove']('folders')
		filesListParent.classList[filesListParent.classList.contains('listfile')?'remove':'add']('listfile')

	}
})
//移动到
move.onclick=function(){
	moveFun();
}
//移动到
function moveFun(copyfun){
	//	from的input亮没亮//验证有没有选中的	
	if(funonOff&&!checkonOff()&&prodata){
		// console.log(!checkonOff())
		funonOff=false
		//让移动到的盒子显现出来
		movebox.style.display='block';
		//给这个盒子添加一个点击
		moveul.addEventListener('click',function(e){
			var target=e.target;

			if(target.nodeName.toUpperCase()==='SPAN'){
				//点击span父级li的id
				clickid=target.parentNode.dataset.id*1
				//点击的亮
				promovebox(data,clickid)
				clickself=getDataById(data, clickid)
				//获取到点击元素的自己及所有父级
				clickfather=getParentsById(data, clickid)
				//获取的数据
				//prodata
			}
		})
			btnbox.onclick = function(e){
			var target=e.target;
			//点击确定发生什么
			if(target.className==='sure'){	
				if(!clickself){
					alertfun('请选择您要移动的文件')
				}else if(compareId(prodata,clickfather)){
					alertfun('不能移动到当前文件的子文件夹呦')
				}else if(clickid==pid){
					alertfun('不能移动到当前')
				}else if(!testMandTname(prodata,clickself.child)){
					fq.animation(alert, {'top':300}, 1000, 'backOut', function(){
						button.onclick=function(e){
							var target=e.target;
							if(target.className==='yes'){
								//把重复的覆盖掉
								
								console.log(copyfun)
								if(copyfun){
									//将选中的数据复制到目标的child 用于复制
									copyfugai(prodata,clickself.child)

				   					copyAddTarget(prodata,clickself)
								}else{
									//将删除的数据移动到目标的child 用于移动
									movefugai(prodata,clickself.child)

			   						delAddTarget(prodata,clickself)
								}
			   					
			   					//生成页面
			   					prodata=createpage(data,pid);
							}
							if(target.className==='no'){
								fq.animation(alert, {'top':-200}, 1000, 'backIn')
							}
							fq.animation(alert, {'top':-200}, 1000, 'backIn')
							// movebox.style.display='';
							// fq.animation(alert, {'top':-200}, 1000, 'linear')
					   		panduan();
					   		clickfather=clickself=clickid=null;
						}

					})
				}else{
					delAddTarget(prodata,clickself)
   					//生成页面
   					prodata=createpage(data,pid);
   					movebox.style.display='';
					clickfather=clickself=clickid=null;
				}

			}
			//点击取消发生什么
			if(target.className==='cancel'){
				console.log(1231321312313213213)
				// movebox.style.display='';
			}
			movebox.style.display='';
		}
	}else{
		alertfun('请选择您要移动的文件')
	}
	panduan();
}








//单选功能

filesListParent.addEventListener('click',function(e){
	if(funonOff){
		var target = e.target;
		selfcheck(target,'I');
	}
})
//点击进入
leftTreeParent.addEventListener('click',function(e){
	var target = e.target;
	fnIn(target,'SPAN')
})
filesListParent.addEventListener('click',function(e){
	var target = e.target;
	fnIn(target,'LI','folderimg')
})
breadParent.addEventListener('click',function(e){
	var target = e.target;
	fnIn(target,'A')
})

//双击重命名
	filesListParent.addEventListener('dblclick',function(e){
		if(funonOff){
			for(var i=0;i<filesListParent.children.length;i++){
				filesListParent.children[i].classList.remove('active')
				prodata[i].checked=false;
			}
			if(funonOff){
				var target = e.target;
				if(allcheck.classList.contains('active')){
					allcheck.className='';
				}
				if(target.nodeName.toUpperCase()==='A'){
					var father=target.parentNode;
						againname(father)
				}
			}	
		}
		panduan();
	})

//重命名
again.onclick=function(){
	choseAgainName();
}
function choseAgainName(){
	if(funonOff){
		var checkednum=filesListParent.querySelectorAll('.active')
		let chelen=checkednum.length
		if(chelen>1){
			alertfun('只能选中一个您想重新命名的文件')
		}else if(chelen<1){
			alertfun('请选择一个您要重新命名的文件')
			
		}else if(chelen==1){
			againname(checkednum[0])
		}
	}
}


// 画框
folderbox.addEventListener('mousedown',function(e){
	if(funonOff){
		if(e.buttons!=1)return//取消右键画框
			var target=e.target;
		if(!target.classList.contains('folder'))return
		
		e.preventDefault();	
		var div=document.createElement('div')
			div.style.position='absolute';
			div.style.background='rgba(255,255,255,.1)';
		
		folderbox.insertBefore(div,folderbox.firstElementChild)
		var downx=e.pageX,downy=e.pageY;
		document.addEventListener('mousemove',fnmove)
		function fnmove(e){
			var movex=getRect(folderbox, 'right')<e.pageX?getRect(folderbox, 'right'):e.pageX;
			var movey=getRect(folderbox, 'bottom')<e.pageY?getRect(folderbox, 'bottom'):e.pageY;
			var W=Math.abs(movex-downx);
			var H=Math.abs(movey-downy);
			var L=Math.min(movex-getRect(folderbox, 'left'),downx-getRect(folderbox, 'left'));
			var T=Math.min(movey-getRect(folderbox, 'top'),downy-getRect(folderbox, 'top'));

			pengzhuang(div,lis)

			div.style.width=W+'px';
			div.style.height=H+'px';
			div.style.left=L+'px';
			div.style.top=T+'px';
		
		}
		document.addEventListener('mouseup',fnup)
			function fnup(e){
				document.removeEventListener('mouseup',fnup)
				document.removeEventListener('mousemove',fnmove)
				div.remove(div);
			}
		}	
})	

// order.onclick=function(){
	orderDiv.onmouseenter=function(){
		sortWay.classList.add('active');	
	}
	
	orderDiv.onmouseleave=function(){
		sortWayTimer=setTimeout(function(){
			sortWay.classList.remove('active');
		},1000)
	}
	sortWay.onmouseenter = function (){
		console.log(sortWayTimer)
		clearInterval(sortWayTimer);
		console.log(sortWayTimer)
	}
	sortWay.onmouseleave = function (){
		sortWay.classList.remove('active');
	}
// }


//排序
sortWay.addEventListener('click',function(e){
	if(prodata&&funonOff){
		var target=e.target;
		if(target.classList.contains('sortName')){
			// console.log(1)
			prodata.sort(function(a,b){
				return b.name.localeCompare(a.name);
			})
			// createpage(data,pid)
		}
		if(target.classList.contains('sortSize')){
			prodata.sort(function(a,b){
				return b.size-(a.size);
			})
			console.log('按大小排序还没写')
		}
		if(target.classList.contains('sortData')){
			prodata.sort(function(a,b){
				return Date.parse(b.time) - Date.parse(a.time);;
			})
			
		}
		createpage(data,pid)
	}

})


rightKeyfun();
// 右键
function rightKeyfun(){
	bodyright.oncontextmenu = function (e){
		e.preventDefault();

		//如果有亮 的就清除灰色字体
		// if(testCheckedTrue(prodata)){
			rightKeyBox.children[rightKeyBox.children.length-1].classList[testCheckedTrue(prodata)?'remove':'add']('noclick');
		// }
		var target=e.targrt;
		//右键盒子的高度
		var H=211;
		// console.log(fq.css(rightKeyBox, 'height'))
		// console.log(rightKeyBox.offsetHeight)
		var x = e.pageX-getRect(bodyright, 'left'), y = e.pageY-getRect(bodyright, 'top');
      // 当鼠标的x坐标距离屏幕可视区右侧的距离大于菜单的宽度的时候
      // 那么这个菜单就出现在鼠标的右侧，否则就出现在鼠标的左侧。
      // menu.offsetWidth 在display为none的时候获取不到
      if(bodyright.offsetWidth - x < fq.css(rightKeyBox, 'width')){
      	
        x = x - fq.css(rightKeyBox, 'width');
      
      }
      if(bodyright.offsetHeight - y < H){
      	console.log(bodyright.offsetHeight,y,H)
        var flag = true;
      }  
      // fq.css(rightKeyBox, '');
      fq.css(rightKeyBox, {
      	display:'block',
        left: x,
        top: y
      });


      if(flag){
        // fq.css(rightKeyBox, {height: H, top: y - H});
        fq.animation(rightKeyBox, {height: H, top: y - H}, 500, 'backOut')
      }else{
        fq.css(rightKeyBox, {height: H});
      }
    };

    document.onclick = function (){
      fq.animation(rightKeyBox, {height: 0}, 200, 'backIn', function (){
        fq.css(this, '');
      });
	}
}
//    右键的功能
rightKeyBox.onclick=function(e){
	var target=e.target;
	console.log(target.className)
	//新建
	if(target.className=='rightNew'){
		newbuildFun();
	}
	//重新加载
	if(target.className=='rightAdd'){
		createpage(data,pid);
	}
	if(testCheckedTrue(prodata)){
		//删除
		if(target.className=='rightDel'){
			delFun();
		}
		//重命名
		if(target.className=='rightAgain'){
			choseAgainName();
		}
		//复制
		if(target.className=='Copy'){
			console.log('还没写呢')
		}
		if(target.className=='rightMove'){
			moveFun();
		}
	}
}