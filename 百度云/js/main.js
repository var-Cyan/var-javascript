// 所有的文件数据
var data = user_data.files;
// 右侧的总父级
var bodyright=document.querySelector('.bodyright');
//右键弹出框
var rightKeyBox=document.querySelector('.rightKey');
// 获取树状菜单的父容器
var leftTreeParent = document.querySelector('.firstul');
//文件夹父容器的box
var folderbox = document.querySelector('.folder')
// 获取文件列表的父容器
var filesListParent = document.querySelector('.folder ul');
//获取filesListParent下的所有li(实时获取)
var lis=filesListParent.getElementsByTagName('li')
// 获取面包屑的父容器
var breadParent = document.querySelector('.breadName')
//获取新建文件夹这个按钮
var newbuild=document.querySelector('.newbuild');
//获取重命名按钮
var again=document.querySelector('.again');
//获取删除按钮
var del=document.querySelector('.del');
//获取移动按钮
var move=document.querySelector('.move')
//获取移动到的盒子
var movebox=document.querySelector('.movebox');
//获取移动到的盒子里的ul
var moveul=document.querySelector('.movebox ul');
//获取全选按钮
var allcheck=document.querySelector('.allcheck span');
//复制功能
var copy=document.querySelector('.copy');

var funonOff=true;

var alert=document.querySelector('.alert');
//设置初始化pid为0
var pid =0;

//获取sure或cancel
var btnbox=movebox.querySelector('.btns')
//切换文件样式按钮
var rightfun=document.querySelector('.rightfun');
var prodata;
var button=document.querySelector('.alert div')
// console.log(button)
// 用于移动到
var clickfather;
var clickself;
var clickid;
//order下的div
var orderDiv=document.querySelector('.order div');
//排序的父级
var sortWay=document.querySelector('.orderbox');
//延时定时器
var sortWayTimer=null;
//返回上一级
var back=document.querySelector('.back')
//加载量
var load=document.querySelector('.load')





