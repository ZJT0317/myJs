// getStyle(元素,样式); 
//获取样式

// valid(数字,几位);   
//取几位有效小数

// randomInt(a,b,arr);   
//a-b除了arr内的随机整数

// doMove(元素,{attr:end},[时间],[回调函数])  
//动画

// doubleTime(num);   
//num个位时前面加0

// timefm([时间对象]); 
//返回xxxx/xx/xx 星期x xx:xx:xx的时间格式

// offsetWindow(obj); 
//功能:获取该元素距窗口的left值和top值。

//win(attr,value);    
//参数:attr为属性名,value为属性值。
//功能:若value值为undefined则返回属性名为出窗口中attr的属性值。若value有值则为属性值为attr赋值。

// prevElement(ele);  
//参数:html中的一个标签,object类型
//功能:寻找ele标签的上一个兄弟元素
//返回值:ele标签的上一个兄弟元素

// nextElement(ele);  
//参数:html中的一个标签,object类型
//功能:寻找ele标签的下一个兄弟元素
//返回值:ele标签的下一个兄弟元素

// eleIndexof(ele,n);  
//参数:html中的一个标签,object类型
//功能:寻找ele标签的第n个兄弟节点
//返回值:ele标签的第n个兄弟节点

// prevAll(ele);   
//参数:html中的一个标签,object类型
//功能:寻找ele标签前面的所有兄弟元素
//返回值:ele标签前面的所有兄弟元素

// nextAll(ele);   
//参数:html中的一个标签,object类型
//功能:寻找ele标签后续的所有兄弟元素
//返回值:ele标签后续的所有兄弟元素

// siblings(ele);  
//参数:html中的一个标签,object类型
//功能:寻找ele标签所有的兄弟元素
//返回值:ele标签所有的兄弟元素

//inParBefore(oTag,oPar,n);
//参数:oTag,目标元素,object类型;oPar,目标元素的父元素，object类型;n:
//功能:倘若n值超出了目标元素父元素的所有子元素结点的长度或者父元素无任何子元素结点，那么添加元素变为直接将元素添加至父元素的最后一个位置。倘若没有，那么在父元素的第n个位置插入目标元素。
//返回值:无

//function debounce(timeInternal,zoomBody);
//参数:timeInternal:number类型，表示延迟显示的时间;zoomBody:object类型，表示函数。
//功能:防抖
//返回值:一个匿名函数

//function throttle(timeInternal,zoomBody);
//参数:timeInternal:number类型，表示延迟显示的时间;zoomBody:object类型，表示函数。
//功能:节流
//返回值:一个匿名函数

//function bind(obj,attr,fn);
//参数:obj:object类型，一个元素节点;attr:string类型，事件类型;fn:object类型，表示事件处理函数。
//功能:事件监听函数类型的封装
//返回值:无

//function stopBubble(e);
//参数:e:obeject类型，必要参数。为当前调用事件的事件对象。
//功能:阻止事件冒泡
//返回值:无

//function stopDefault(e);
//参数:e:obeject类型，必要参数。为当前调用事件的事件对象。
//功能:阻止事件冒泡
//返回值:无

//function delegation(fEle,ele,attr,fn);
//参数:fEle:object类型，要绑定事件的元素(ele的父元素);ele:string类型，为'.li'或'#id1'或'div';atrr:string类型,事件类型;fn:object类型,执行的函数。
//功能:事件委托函数封装。
//返回值:无。

//function upOrDown(e);
//参数:e:obejct类型,事件源对象
//功能:鼠标滚轮滚动倘若向上滚动返回1,倘若向下滚动返回0。是浏览器的兼容性处理。需要与mouseWheel()函数配合使用。
//返回值:number类型，值为1或0

//function mouseWheel(props);
//参数:props:object类型。由最多三个键值对组成。举例:{obj:document,up:function(){},down:function(){}}
//功能:封装鼠标滚轮函数。实现向上滚动鼠标滚轮执行up函数，向下滚动鼠标滚轮执行down函数的效果。需要与upOrDown()函数配合使用。
//返回值:无

//function tap(obj,attr,fn);
//参数:obj:object类型。是一个DOM元素对象。attr:string类型。分为点击('click'),长按('longTap'),上滑('downMove'),下滑('upMove'),左滑('leftMove'),右滑('rightMove')。fn:object类型，是一个函数。
//功能:移动端touch事件的封装
//返回值:无

//function createXHR();
//参数:无
//功能:创建了一个ajax实例对象
//返回值:一个object类型的数据

//function convertData(data);
//参数:data:string类型或者object类型.比如:{type:'read',color:'red'};
//功能:将形如{type:'read',color:'red'}类型的数据修改为形如type=read&color=red格式的string类型的数据
//返回值:返回一个type=read&color=red格式的string类型的数据

//function ajax(option);
/*参数:option:object类型。比如:{
   method :"get",   //string类型
   url:'123.txt',   //string类型
   data:'',         //string类型
   SFn:function(){},//object类型
   EFn:function(){} //object类型
}*/
//功能:进行一次ajax请求
//返回值:无

//function setCookie(key,value,t);
/*参数:key:string类型
value:string类型
t:number类型
*/
//功能:设置cookie，参数为cookie名、值和过期时间
//返回值:无

//function getCookie(key);
//参数:key:string类型
//功能:获取参数名字cookie的值
//返回值:一个string类型的数据

//function removeCookie(key);
//参数:key:string类型
//功能:删除参数名字cookie，将过期时间设置为前一天
//返回值:无

//function createSVG(tagName,option)
/*参数:tagName:string类型,比如:'circle','rect','line'等
option:object类型
举个例子:
var obj=createSVG('circle',{
    "cx":"120",
    "cy":"120",
    "r":"50",
    "fill":"blue"
})
*/
//功能:创建一个SVG图形
//返回值:一个object类型的变量，代表了一个创建的SVG图形标签
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; 
}

function valid(num,n){
    return Math.round(num*10**n)/10**n;
}

function randomInt(m,n,arr){
    var max = m > n ? m : n;
    var min = m < n ? m : n;
    var arr1 = arr || [];
    var ran=Math.floor(Math.random()*(max-min+1))+min;
    if(arr1.length){
        for(var i = 0;i < arr1.length;++i){
            if(arr1[i] == ran){
                break;
            }
        }
        if(i == arr1.length){
             return ran;
        }else{
            return randomInt(m,n,arr);
        }
    }else{
        return ran;
    }
}

function doMove(obj,option,time,endFn){
    cancelAnimationFrame(obj.timer);
    var attrs = [];
    var time = time || 400;
    var endFn = endFn || function(){};
    for(var attr in option){
        var myObj = {};
        myObj.myStyle = attr;
        myObj.end = option[attr];
        myObj.start = parseFloat(getStyle(obj,attr));
        myObj.speed = valid((myObj.end - myObj.start) * 1000 / (time * 60),2);
        attrs.push(myObj);
    }
    obj.timer = requestAnimationFrame(function goOn(){
        for(var i = 0;i < attrs.length;++i){
            attrs[i].newSp = parseFloat(getStyle(obj,attrs[i].myStyle)) + attrs[i].speed;
            if(attrs[i].newSp >= attrs[i].end && attrs[i].speed > 0 || attrs[i].newSp<=attrs[i].end && attrs[i].speed < 0){
                attrs[i].newSp = attrs[i].end;
            }
            obj.style[attrs[i].myStyle] = (attrs[i].myStyle == "opacity") ? attrs[i].newSp : attrs[i].newSp + 'px';
            //这里和素材中写的并不一致
            attrs[i].stop = (attrs[i].newSp == attrs[i].end);
        }
        obj.timer = requestAnimationFrame(goOn);
        var bStop = 0;
        for(var i = 0;i < attrs.length;++i){
            if(attrs[i].stop){
                bStop++;
            }
        }
        if(bStop == attrs.length){
            cancelAnimationFrame(obj.timer);
            endFn();
        }
    })
}

function doubleTime(n){
    return n < 10 ? '0' + n : '' + n;
}

function timefm(t){
    var oDate = t || new Date();
    var iY = oDate.getFullYear();
    var iM = oDate.getMonth() + 1;
    var iD = oDate.getDate();
    var iW = oDate.getDay();
    var weeks=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    var sW=weeks[iW];
    var iHours = oDate.getHours();
    var iMinutes = oDate.getMinutes();
    var iSeconds = oDate.getSeconds();
    return iY + '/' + doubleTime(iM) + '/' + doubleTime(iD) + ' ' + sW + ' ' + doubleTime(iHours) + ':' + doubleTime(iMinutes) + ':' + doubleTime(iSeconds);
}

function offsetWindow(obj){
    var nowLeft = obj.offsetLeft;
    var nowTop = obj.offsetTop;
    while(obj.offsetParent){
        obj = obj.offsetParent;
        nowLeft += obj.clientLeft + obj.offsetLeft;
        nowTop += obj.clientTop + obj.offsetTop;
    }
    return [nowLeft,nowTop];
}

function win(attr,value){
    if(typeof value=='undefined'){
        return document.documentElement[attr] || document.body[attr];
    }
    document.documentElement[attr]=value;
    document.body[attr]=value;
}

function prevElement(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

function nextElement(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

function eleIndexof(ele,index){
    return ele.parentNode.children[index];
}

function prevAll(ele){
    var arr = [];
    ele = prevElement(ele);
    while(ele){
       if(ele.nodeType == 1){
           arr.push(ele);
       }
       ele = prevElement(ele);
    }
    return arr.reverse();
}

function nextAll(ele){
    var arr = [];
    ele = nextElement(ele);
    while(ele){
        if(ele.nodeType == 1){
            arr.push(ele);
        }
        ele = nextElement(ele);
     }
    return arr;
}

function siblings(ele){
    return (prevAll(ele)).concat(nextAll(ele));
}

function inParBefore(oTag,oPar,n){
    oPar.children[n] ? oPar.insertBefore(oTag,oPar.children[n]): oPar.appendChild(oTag);
}

function debounce(timeInternal,zoomBody){
    var timer;
    return function(){
        var ars = Array.from(arguments);
        var thisObj = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
              zoomBody.apply(thisObj,ars);
        },timeInternal);
    }
}

function throttle(timeInternal,zoomBody){
    var startTime = new Date();
    return function(){
        var args = Array.from(arguments);
        var thisObj = this;
        var endTime = new Date();
        if(endTime-startTime >= timeInternal){
            startTime = endTime;
            zoomBody.apply(thisObj,args);
        }
    }
}

function bind(obj,attr,fn){
    obj.addEventListener ? obj.addEventListener(attr,fn,{passive:false},false) : obj.attachEvent('on'+attr,function(){
        fn.call(obj);
    })
}

function stopBubble(e){
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
        window.event.cancelBubble = true;
    }
}

function stopDefault(e){
    if(e && e.stopDefault){
        e.stopDefault();
    }else{
        window.event.returnValue=false;
    }
}

function delegation(fEle,ele,attr,fn){
    bind(fEle,attr,function(event){
        var tar = event.target || event.srcElement;
        if(ele[0] === '#' && ('#' + tar.id) == ele || ele[0] === '.' && tar.classList.contains(ele.substring(1)) || /[a-z]/.test(ele[0]) && tar.nodeName.toLowerCase() === ele.toLowerCase()){
            fn.call(tar);
        }
    })
}

function upOrDown(e){
    if(e.wheelDelta){
        return e.wheelDelta>0 ? 1 : 0;
    }else{
        return e.detail<0 ? 1 : 0;
    }
}

function mouseWheel(props){
    var obj=props.obj,up=props.up||function(){},down=props.down||function(){};
    var type=0;
    if(window.navigator.userAgent.indexOf('Firefox')!=-1){
        type=1;
    }
    //ie或者谷歌   火狐
    var string=(type==0)? 'mousewheel': 'DOMMouseScroll';
    bind(obj,string,function(e){
        var e = e||event;
        upOrDown(e) ? up.call(obj) : down.call(obj);
        stopDefault(e);
    })
} 

function tap(obj,attr,fn){
    obj.addEventListener('touchstart',function(e){
       var e = e || event;
       var ose = {
           sTime:Date.now(),
           eTime:Date.now(),
           sX:e.touches[0].pageX,
           sY:e.touches[0].pageY,
           eX:e.touches[0].pageX,
           eY:e.touches[0].pageY
       };
       obj.addEventListener('touchmove',function(e){
            var e = e || event;
            ose.eX = e.touches[0].pageX;
            ose.eY = e.touches[0].pageY;
            // console.log( ose.eX, ose.eY);
       })
       obj.addEventListener('touchend',function(){
           ose.eTime = Date.now();
            if(Math.abs(ose.eX - ose.sX) < 5 && Math.abs(ose.eY - ose.sY) < 5){
                if(ose.eTime - ose.sTime < 300){
                    //点击事件
                    if(attr == 'click'){
                        fn.call(obj);
                    }
                }else{
                    //长按事件
                    if(attr == 'longTap'){
                        fn.call(obj);
                    }
                }
            }else{
                if(Math.abs(ose.eX - ose.sX) > Math.abs(ose.eY - ose.sY)){
                    //左右滑动
                    if(ose.eX - ose.sX > 0){
                        if(attr == 'rightMove'){
                            fn.call(obj);
                        }
                    }else{
                        if(attr == 'leftMove'){
                            fn.call(obj);
                        }
                    }
                }else{
                    //上下滑动
                    if(ose.eY - ose.sY > 0){
                        if(attr == 'downMove'){
                            fn.call(obj);
                        }
                    }else{
                        if(attr == 'upMove'){
                            fn.call(obj);
                        }
                    }
                }
            }
       })
   })
}

function createXHR(){  
    if (window.XMLHttpRequest) { 
        return new XMLHttpRequest();
    } else if (window.XMLHttpRequest) {  
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
} 

function convertData(data){
    var arr = [];
    if(typeof data == 'object'){
        for(var key in data){
           arr.push( key + '=' + data[key] );
        }
        var condata = arr.join('&');
        return condata;
    }else{
        return data;
    }
}
function ajax(option){
   var method = option && option.method || "get";
   var url = option && option.url || "";
   var data = option && option.data || "";
   var SFn = option && option.SFn || function(){};
   var EFn = option && option.EFn || function(){};
   var xhr = createXHR();
   if(method.toLowerCase() == "get"){
      xhr.open(method,url+'?'+convertData(data),true);
      xhr.send();
   }else{
      xhr.open(method,url,true);
      xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
      xhr.send(data);
   }
   xhr.onreadystatechange = function(){
       if(xhr.readyState == 4){
            if(xhr.status == 200){
                SFn(xhr.responseText);
            }else{
                EFn();
            }
       }
   }
}

function setCookie(key,value,t){
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + t);
    document.cookie = key + '=' + encodeURI(value) + ';expires=' + oDate.toGMTString();

}

function getCookie(key){
    var arr1 = document.cookie.split('; ');
    for(var i = 0;i < arr1.length;++i){
        var arr2 = arr1[i].split('=');
        if(arr2[0] == key){
            return encodeURI(arr2[1]);
        }
    }
}

function removeCookie(key){
    setCookie(key,'',-1);
}

function createSVG(tagName,option){
    var sXmls="http://www.w3.org/2000/svg";
    var obj=document.createElementNS(sXmls,tagName);
    for(var attr in option){
        obj.setAttribute(attr,option[attr]);
    }
    return obj;
}