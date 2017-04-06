//创建左侧的树状菜单
function createTree(data,id){
	var tree='';
	// <i class="wjb"></i>
	for(var i=0;i<data.length;i++){
		tree+=`<li data-id=${data[i].id}>
		<i class=${data[i].child.length!=0?'sjx':''}></i>
				<span class=${data[i].id===id? 'active':''}>

					
					${data[i].name}
				</span>`;
		tree+= data[i].child ? `<ul>${createTree(data[i].child,id)}</ul>` : '';		
		tree+=`</li>`;
	}
	return tree;
}
//创建右侧文件列表
function createFiles(data,id){
	var file='';
	if(!data){
		return file;
	}
	// debugger
	for(var i=0;i<data.length;i++){
		file +=`<li data-id=${data[i].id}>

					<i class="checkbox"></i>
					<span class="folderimg"></span>
					<a class="foldername" href="javascript:;">${data[i].name}</a>
					<div class="more">
						<span>${compare(data[i].size)}</span>
						<time>${data[i].time}</time>
					</div>
					<form class="change-foldername ${data[i].name?'':'active'}">
						<input type="text" class="change" >
					</form>
				</li>`;
				// console.log('you'+data[i].name)
		}
		// debugger
		return file
	}
// 创建面包屑导航
function createbread(data,id){
	var bread = '';
	for(var i=0;i<data.length;i++){
		bread =`<div class="fl" data-id=${data[i].id}><a href="javascript:;" data-id=${data[i].id}>
			${data[i].id!=0?'<i>></i>':''}
			${data[i].name}	
		</a></div>${bread}`
	}
	return bread
}