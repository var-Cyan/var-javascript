
//生成左侧的树状菜单
function proTree(data, id){
	//初始化左侧页面
  	var leftTree = createTree(data, id);
  	leftTreeParent.innerHTML = leftTree;
}
//生成右侧文件夹/列表
function profiles(data, id){
	//初始化右侧页面
	filesListParent.innerHTML = '';
	// console.log(getChildrenById(data,id))
	var datas = getChildrenById(data,id);
  	var fileshtml = createFiles(datas,id);
	filesListParent.innerHTML=fileshtml;
	
	return datas
}

//生成面包屑
function probread(data,id){
	// if(id!=0){
		//初始化面包屑导航 当id为0时 不显示
		breadParent.innerHTML = '';
		var bread = getParentsById(data, id);
		var breads = createbread(bread,id);
		breadParent.innerHTML=breads
		// }
}

function promovebox(data,id){
	var leftTree = createTree(data,id);
	moveul.innerHTML=leftTree
}