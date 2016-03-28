# JS createSVG
#### [预览地址](http://codepen.io/ghost028/pen/qZjpRL)
![createSVG-DEMO](psd.jpg)
###1.调用JS
* 在\</body>里加入\<script src="js/createSVG.js"></script>

###2.HTML
* \<div id="box1"></div>

###3.接口
* *号为必填项
```javascript
    createSVG({
        id: document.getElementById('box1'),    //*父层ID
        num: '74',  //*百分值

        // bgEle:true,  //  是否开启背景边框，开启后需要设置bgFill和bgColor颜色
        // bgFill:'#ccc',   //背景填充色，默认为：none
        // bgColor:'#D4D4D4',   //背景边框底色，默认为：none
        
        borderColor: 'tomato',   //边框颜色，默认为：#000      
        borderWidth:'20',    //边框粗细，最好别超过20，默认为：10
        linecap:true,    //边框端点形状，true为圆，false为方，默认为：方
     
        // fontSize:'20',    //数值大小，默认为：70
        fontColor:'#555',    //数值颜色，默认为：#000
        fontWeight:true,     //字体是否加粗，true或false
    });
```
