// 通过指定的id获取到对应的数据
 function getDataById(data, id){
  var item = null;
  for(var i=0; i<data.length; i++){
    if(data[i].id === id){
      item = data[i];
      break;
    }
    if(!item && data[i].child){
      item = getDataById(data[i].child, id);
      if(item){
        break;
      }
    }
  }
  return item;
};
// 获取到一组数据data中指定id的所有的子集
function getChildrenById (data, id){
  var targetData = getDataById(data,id);
  if(targetData && targetData.child){
    return targetData.child;
  }
};

// 通过指定的id获取到自己以及自己所有的父级

function getParentsById(data, id){
  var items = [];
  var current = getDataById(data, id);
  if(current){
    items.push(current);
    items = items.concat(getParentsById(data, current.pId));
  }
  return items;
};

//通过指定的id和pid获取其他同级的数据
function getOtherById(data,pid,id){
  var arr=getChildrenById (data, pid);
  var a=getDataById(data, id);
  var item=[];
  for(var i=0;i<arr.length;i++){
    if(a.id!=arr[i].id){
      item.push(arr[i])
    }
  }
  return item
}
// 点击进入文件
function fnIn(target,tagName,className){
  if(funonOff){
      if(target.nodeName.toUpperCase()===tagName||target.classList.contains(className)){
    
      var clickid=1*(target.parentNode.dataset.id || target.dataset.id)
      if(pid==clickid)return//如果点击的是自己则return
      pid=clickid;
      //可能有问题
      funonOff=true;
     prodata=createpage(data,pid)
    }
  }

}
//单选
function selfcheck(target,tagName){
 if(target.nodeName.toUpperCase()===tagName){
    target.parentNode.classList.toggle('active')
    getDataById(data,Number(target.parentNode.dataset.id)).checked=target.parentNode.classList.contains('active')?true:false;
 } 
   allcheck.lastElementChild.innerHTML=youChosenum()
    allcheck.className=checkedTrueOrFalse(prodata)?'active':'';
}

//判断数据里是否全部选中checked   true/false
function checkedTrueOrFalse(prodata){
  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked==false){
      return false
    }
  }
  return true
}
//选中的有几个

function chosenum(prodata){
  var chosenum=0;
  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked==true){
      chosenum++;
    }
  }
  return chosenum
}
//您已选中chosenum个文件
function youChosenum(){
  var choseinnerHTML;
  if(testCheckedTrue(prodata)){
    choseinnerHTML=`已选中${chosenum(prodata)}个文件/文件夹`;
  }else{
    choseinnerHTML='全选'
  }
  // return choseinnerHTML=testCheckedTrue(prodata)?`已选中${chosenum(prodata)}个文件/文件夹`:'全选';
  return choseinnerHTML
}


//全选
function allcheckevent(item){
  item.classList.toggle('active')
  var files=filesListParent.getElementsByTagName('li');
  if(!checkedTrueOrFalse(prodata)){
    for(var i=0;i<files.length;i++){
      files[i].classList.add('active')
      getDataById(data,Number(files[i].dataset.id)).checked=true
    }
  }else{
    for(var i=0;i<files.length;i++){
      files[i].classList.remove('active')
      getDataById(data,Number(files[i].dataset.id)).checked=false
    }
  }
  allcheck.lastElementChild.innerHTML=youChosenum()
}

//点击新建功能
function clickNewBuild(data,pid){
  //全选相关
    //让全选的对号去掉
    allcheck.className='';
    console.log(prodata)
    for(var i=0;i<prodata.length;i++){
      prodata[i].checked=false
      filesListParent.children[i].classList.remove('active')
    }
    //新建验证文件名是否重复
    var li=document.createElement('li')
    li.innerHTML=`<i class="checkbox"></i>
          <span class="folderimg"></span>
          <a class="foldername" href="javascript:;"></a>
          <div class="more">
            <span>-</span>
            <time>2017-03-06</time>
          </div>
          <form class="change-foldername active">
            <input type="text" class="change" >
          </form>`
     filesListParent.insertBefore(li, filesListParent.firstElementChild) 
     var input=li.querySelector('input')
     input.focus();

     input.onblur=function(e){
      var inputVal=input.value.trim();
      var inputLen=input.value.trim().length;
      var n=1
       if(input.value.trim()==='' ){
        alertfun('新建文件时记得起名字呦')
          li.remove('li');
          panduan();
          return
        }
        nameAddNum(prodata,inputVal,inputLen,n)
    }
}
//验证名字是否重复 用于新建
function testname(prodata,inputVal){
  if(prodata){
    for(var i=0;i<prodata.length;i++){
      if(prodata[i].name===inputVal){
        return false
      }
    }
    return true
  }
}
// 验证要移动的名字和目标点的名字是否相同  用于移动到
function testMandTname(prodata,clickself){

  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked){
      for(var j=0;j<clickself.length;j++){
        if(prodata[i].name==clickself[j].name){
            return false
        }
      }
    }
  }
  return true
}
//验证有没有选中的 用于移动到
function testCheckedTrue(prodata){
  if(prodata){
      for(var i=0;i<prodata.length;i++){
      if(prodata[i].checked==true){
        return true
      }
    }
    return false
  }

}
//给重复的名字尾部加数字 用于新建
function nameAddNum(paodata,inputVal,inputLen,n){
   if(testname(prodata,inputVal)){
        var newfile={
            id: ++user_data.maxId,
            pId: pid,
            name: inputVal,
            checked: false,
            type: 'folder',
            time: newBuildDate(), 
            child: []
        }
          getDataById(data,pid).child.unshift(newfile)
          profiles(data,pid)
          proTree(data,pid)
          promovebox(data,pid)  
          panduan();
          prodata=createpage(data,pid)
      }else{
        if(inputVal.length>inputLen){
          inputVal=inputVal.substring(0,inputLen)
        }
        nameAddNum(paodata,inputVal+`(${++n})`,inputLen,n)

      }
}







// 判断id不能是自己及自己的子集 用于移动到
function compareId(prodata,compared){
  // console.log(compared)
  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked){
      for(var j=0;j<compared.length;j++){
        if(prodata[i]==compared[j]){
          return true
        }
      }
    }
  }
  return false //没有相同的
}

//将删除的数据移动到目标的child
function delAddTarget(prodata,clickself){
  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked){
      prodata[i].pId=clickself.id;
      prodata[i].checked=false;
      clickself.child.unshift(prodata.splice(i,1)[0])
      i--;
    }
  }
}
//将选中的数据复制到目标的child
function copyAddTarget(prodata,clickself){
  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked){
      prodata[i].pId=clickself.id;
      prodata[i].checked=false;
      clickself.child.unshift(prodata[i])
    }
  }
}
//重复之后覆盖  用于移动
function movefugai(prodata,clickchild){
  console.log(2222)
  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked){
      for(var j=0;j<clickchild.length;j++){
        if(prodata[i].name==clickchild[j].name){
          prodata[i].pId=clickchild[j].pId;
          prodata[i].checked=false;
          clickchild[j]=prodata.splice(i,1)[0];
          i--;
          break;
        }
      }
    }
  }
}
// 重复之后覆盖   用于复制
function copyfugai(prodata,clickchild){
  
  for(var i=0;i<prodata.length;i++){
    if(prodata[i].checked){
      for(var j=0;j<clickchild.length;j++){
        if(prodata[i].name==clickchild[j].name){
          prodata[i].checked=false;
          prodata[i].pId=clickchild[j].pId;
          clickchild.splice(j,1);
          break;
        }
      }
    }
  }
}




function panduan(){
  var froms=filesListParent.querySelectorAll('li form')
  var n = true;//没有 可以点
  for(var i=0;i<froms.length;i++){
    if(froms[i].classList.contains('active')){
      n = false;//有，不能点
    }
  }
  // console.log(fq.css(alert,'height')==200)
  if(n){
    funonOff=fq.css(alert,'height')==200?true:false;
  }
}
//重命名
function againname(father){
  ///获取数据及标签
  funonOff=false;
  var thisid=father.dataset.id*1
  var thispid=getDataById(data, thisid).pId
  var thisform=father.querySelector('form');
  var thisa=father.querySelector('a');
  var thisinput=thisform.children[0];
  //自己原来的名字
  var selfname=thisa.innerHTML
  // 获得除了自己的同级数据
  var otherdata=getOtherById(data,thispid,thisid)
  //-------------------------
    thisform.classList.add('active')
    thisinput.value=selfname;
    thisinput.select();
    thisinput.onblur=function(){
        thisinput.value=thisinput.value.trim()
      //-------------没起名----------------
      if(thisinput.value==''){

       alertfun('新建文件时记得起名字呦')

        thisform.classList.remove('active')
        // if(father.classList.contains('active')){
          father.classList.remove('active')
        // }
      }else if(compare(thisinput.value,otherdata)){
       alertfun('与当前文件内的文件名重复了呦')
        thisinput.select();
      }else if(!compare(thisinput.value,otherdata)){
         getDataById(data, thisid).name=thisa.innerHTML=thisinput.value;
          thisform.classList.remove('active')
          father.classList.remove('active')
          getDataById(data, thisid).checked=false;
      }
      panduan()
    }
    
}
function compare(thisinputValue,otherdata){
  for(var i=0;i<otherdata.length;i++){
    if(thisinputValue==otherdata[i].name){
      return true
    }
  }
  return false
}

//弹出内容
function alertfun(alertcontent){
    // if(funonOff){
    alert.innerHTML=alertcontent
   fq.animation(alert, {'top':300}, 1000, 'backOut', function(){
      fq.animation(alert, {'top':-200}, 1000, 'backIn')
      })
   // panduan()
 // }
}

//判断列表的文件所有的亮没亮  亮了有true 否则false
function checkonOff(){
  if(prodata){
      for(var i=0;i<prodata.length;i++){
      if(prodata[i].checked){
        return false
      }
    }

    return true
  }

}



//删除功能
function deletekey(){
  var arrdelid=[],deletedata=[];
  for(var i=0;i<filesListParent.children.length;i++){
    if(filesListParent.children[i].classList.contains('active'))
    arrdelid.push(filesListParent.children[i].dataset.id*1)
  }
  // console.log(arrdelid)
  if(arrdelid.length==0){
    alertfun('请选择您要删除的文件')
  }else{
    var arrdeldata=[]
     for(var i=0;i<arrdelid.length;i++){
      arrdeldata.push(getDataById(data, arrdelid[i]))
     }
     var fatherdata=getDataById(data, arrdeldata[0].pId)
     for(var i=0;i<fatherdata.child.length;i++){
      for(var j=0;j<arrdeldata.length;j++){
        if(fatherdata.child[i].id==arrdeldata[j].id){
          deletedata.push(fatherdata.child.splice(i,1))
          // console.log(deletedata)
          // n--;
          if(allcheck.classList.contains('active')){
            allcheck.classList.remove('active');
          }
          
          // console.log(pid)
        }
      }
     }
prodata=createpage(data,pid)
     return
  }
 
}
    //碰撞给li添加active 用于画框
    function pengzhuang(ele,lis){
      for(var i=0; i<lis.length; i++){
        if(duang(ele, lis[i])){
        
          prodata[i].checked = true
          lis[i].classList.add('active');
        
          allcheck.classList[checkedTrueOrFalse(prodata)?'add':'remove']('active')
        }else{
          if(lis[i].classList.contains('active')){
            prodata[i].checked = false;
            lis[i].classList.remove('active');
            allcheck.classList[checkedTrueOrFalse(prodata)?'add':'remove']('active')
          }
        }
      }
    }
    //获取相对于文档的绝对值 用于画框
  function getRect(obj, type){
      var rect = obj.getBoundingClientRect();
      switch(type){
        case 'left':
          return rect.left;
        break;
        case 'top':
          return rect.top;
        break;
        case 'right':
          return rect.right;
        break;
        case 'bottom':
          return rect.bottom;
        break;
      }
    };
    //碰撞检测 用于画框
  function duang(a,b){
    var currentdata=a.getBoundingClientRect();
    var targetdata=b.getBoundingClientRect(); 
    // console.log(currentdata,targetdata)
    return currentdata.right>targetdata.left && currentdata.left<targetdata.right && currentdata.top<targetdata.bottom && currentdata.bottom>targetdata.top
    
  }
  //补0函数 用于新建;
  function add0(n){
      return n<10 ? "0"+n:n
    }
  //新文件建立的时间 用于新建
  function newBuildDate(){
    var newDate=new Date();
    var oYear=newDate.getFullYear(),
        oMonth=newDate.getMonth(),
        oDate=newDate.getDate(),
        oHours=newDate.getHours(),
        oMins=newDate.getMinutes(),
        oSecs=newDate.getSeconds();
    return `${oYear}/${add0(oMonth+1)}/${add0(oDate)}  ${add0(oHours)}:${add0(oMins)}:${add0(oSecs)}`
  }
  //转化KB
  function compare(size){
    if(size==0){
      return '-';
    }
    if(size>0 && size<2013){
      return size+'KB'
    }
    if(size>=Math.pow(1024,1) && size<Math.pow(1024,2)){
      return Number.parseInt((size/Math.pow(1024,1)).toFixed(2))+'MB';
    }
    if(size>=Math.pow(1024,2) && size<Math.pow(1024,3)){
      return Number.parseInt((size/Math.pow(1024,2)).toFixed(2))+'GB';
    }
    if(size>=Math.pow(1024,3) && size<Math.pow(1024,4)){
      return Number.parseInt((size/Math.pow(1024,3)).toFixed(2))+'TB';
    }

  }