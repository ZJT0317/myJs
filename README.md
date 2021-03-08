# myJs
这是一个js常用效果和方法的自制封装库
### 方法说明
#### getStyle(元素,样式); 
获取样式

#### valid(数字,几位);   
取几位有效小数

#### randomInt(a,b,arr);   
a-b除了arr内的随机整数

#### doMove(元素,{attr:end},[时间],[回调函数])  
动画

#### doubleTime(num);   
num个位时前面加0

#### timefm([时间对象]); 
返回xxxx/xx/xx 星期x xx:xx:xx的时间格式

#### offsetWindow(obj); 
功能:获取该元素距窗口的left值和top值。

#### win(attr,value);    
参数:attr为属性名,value为属性值。
功能:若value值为undefined则返回属性名为出窗口中attr的属性值。若value有值则为属性值为attr赋值。

#### prevElement(ele);  
参数:html中的一个标签,object类型
功能:寻找ele标签的上一个兄弟元素
返回值:ele标签的上一个兄弟元素

#### nextElement(ele);  
参数:html中的一个标签,object类型
功能:寻找ele标签的下一个兄弟元素
返回值:ele标签的下一个兄弟元素

#### eleIndexof(ele,n);  
参数:html中的一个标签,object类型
功能:寻找ele标签的第n个兄弟节点
返回值:ele标签的第n个兄弟节点

#### prevAll(ele);   
参数:html中的一个标签,object类型
功能:寻找ele标签前面的所有兄弟元素
返回值:ele标签前面的所有兄弟元素

#### nextAll(ele);   
参数:html中的一个标签,object类型
功能:寻找ele标签后续的所有兄弟元素
返回值:ele标签后续的所有兄弟元素

#### siblings(ele);  
参数:html中的一个标签,object类型
功能:寻找ele标签所有的兄弟元素
返回值:ele标签所有的兄弟元素

#### inParBefore(oTag,oPar,n);
参数:oTag,目标元素,object类型;oPar,目标元素的父元素，object类型;n:
功能:倘若n值超出了目标元素父元素的所有子元素结点的长度或者父元素无任何子元素结点，那么添加元素变为直接将元素添加至父元素的最后一个位置。倘若没有，那么在父元素的第n个位置插入目标元素。
返回值:无

#### function debounce(timeInternal,zoomBody);
参数:timeInternal:number类型，表示延迟显示的时间;zoomBody:object类型，表示函数。
功能:防抖
返回值:一个匿名函数

#### function throttle(timeInternal,zoomBody);
参数:timeInternal:number类型，表示延迟显示的时间;zoomBody:object类型，表示函数。
功能:节流
返回值:一个匿名函数

#### function bind(obj,attr,fn);
参数:obj:object类型，一个元素节点;attr:string类型，事件类型;fn:object类型，表示事件处理函数。
功能:事件监听函数类型的封装
返回值:无

#### function stopBubble(e);
参数:e:obeject类型，必要参数。为当前调用事件的事件对象。
功能:阻止事件冒泡
返回值:无

#### function stopDefault(e);
参数:e:obeject类型，必要参数。为当前调用事件的事件对象。
功能:阻止事件冒泡
返回值:无

#### function delegation(fEle,ele,attr,fn);
参数:fEle:object类型，要绑定事件的元素(ele的父元素);ele:string类型，为'.li'或'#id1'或'div';atrr:string类型,事件类型;fn:object类型,执行的函数。
功能:事件委托函数封装。
返回值:无。

#### function upOrDown(e);
参数:e:obejct类型,事件源对象
功能:鼠标滚轮滚动倘若向上滚动返回1,倘若向下滚动返回0。是浏览器的兼容性处理。需要与mouseWheel()函数配合使用。
返回值:number类型，值为1或0

#### function mouseWheel(props);
参数:props:object类型。由最多三个键值对组成。举例:{obj:document,up:function(){},down:function(){}}
功能:封装鼠标滚轮函数。实现向上滚动鼠标滚轮执行up函数，向下滚动鼠标滚轮执行down函数的效果。需要与upOrDown()函数配合使用。
返回值:无

#### function tap(obj,attr,fn);
参数:obj:object类型。是一个DOM元素对象。attr:string类型。分为点击('click'),长按('longTap'),上滑('downMove'),下滑('upMove'),左滑('leftMove'),右滑('rightMove')。fn:object类型，是一个函数。
功能:移动端touch事件的封装
返回值:无

#### function createXHR();
参数:无
功能:创建了一个ajax实例对象
返回值:一个object类型的数据

#### function convertData(data);
参数:data:string类型或者object类型.比如:{type:'read',color:'red'};
功能:将形如{type:'read',color:'red'}类型的数据修改为形如type=read&color=red格式的string类型的数据
返回值:返回一个type=read&color=red格式的string类型的数据

#### function ajax(option);
参数:option:object类型。比如:{
   method :"get",   //string类型
   url:'123.txt',   //string类型
   data:'',         //string类型
   SFn:function(){},//object类型
   EFn:function(){} //object类型
}
功能:进行一次ajax请求
返回值:无

#### function setCookie(key,value,t);
参数:key:string类型
value:string类型
t:number类型
功能:设置cookie，参数为cookie名、值和过期时间
返回值:无

#### function getCookie(key);
参数:key:string类型
功能:获取参数名字cookie的值
返回值:一个string类型的数据

#### function removeCookie(key);
参数:key:string类型
功能:删除参数名字cookie，将过期时间设置为前一天
返回值:无

#### function createSVG(tagName,option)
参数:tagName:string类型,比如:'circle','rect','line'等
option:object类型
举个例子:
var obj=createSVG('circle',{
    "cx":"120",
    "cy":"120",
    "r":"50",
    "fill":"blue"
})
功能:创建一个SVG图形
返回值:一个object类型的变量，代表了一个创建的SVG图形标签
