console.log('drag')
class Drag {

			drag(ele){	
				this.ele=ele							//改变函数this指向，并且不执行函数，返回一个新的函数
				this.ele.addEventListener('mousedown',this.fnDown.bind(this))
			}
			fnDown(e){
				e.preventDefault();
				this.downX=e.pageX-this.ele.offsetLeft;
				this.downY=e.pageY-this.ele.offsetTop;
// bind方法每运行一次，就返回一个新函数，这会产生一些问题。比如，监听事件的时候，不能写成下面这样。
// element.addEventListener('mouseover', this.fnDown.bind(this));
//上面代码表示，mouseover事件绑定bind方法生成的一个匿名函数。这样会导致无法取消绑定，所以，下面的代码是无效的。
// element.removeEventListener('click', this.fnDown.bind(this));
// 正确的方法是写成下面这样：
// var this.move = this.fnDown.bind(this);  element.addEventListener('click', this.move);  //  ...  element.removeEventListener('click', this.move);
				this.move=this.fnMove.bind(this);
				this.up=this.fnUp.bind(this);
				document.addEventListener('mousemove',this.move)
				document.addEventListener('mouseup',this.up)
			}
			fnMove(e){
				this.moveX=e.pageX-this.downX;
				this.moveY=e.pageY-this.downY;
				this.limit();
				this.ele.style.left=this.moveX+'px';
				this.ele.style.top=this.moveY+'px';
			}
			fnUp(){
				document.removeEventListener('mousemove',this.move)
				document.removeEventListener('mouseup',this.up)
			}
			limit(){
				if(this.moveX<0)this.moveX=0;
				if(this.moveX>this.ele.offsetParent.offsetWidth-this.ele.offsetWidth){
					this.moveX=this.ele.offsetParent.offsetWidth-this.ele.offsetWidth
				}
				if(this.moveY<0)this.moveY=0;
				if(this.moveY>this.ele.offsetParent.offsetHeight-this.ele.offsetHeight){
					this.moveY=this.ele.offsetParent.offsetHeight-this.ele.offsetHeight
				}
				
			}
		}