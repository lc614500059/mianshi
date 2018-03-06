window.onload = function() {
  
        
           //1 获取事件相关元素
            // 获取screen  获取arr
            var oScreen = $("#screen");
            var oArr = $("#arr");
            // 2 事件类型   鼠标移上   鼠标移开  给screenDiv加事件
            oScreen.onmouseover = function() { //３　绑定事件驱动程序　　事件处理函数
                oArr.style.display = "block";
                // 当鼠标移到整个screen上面 清除定时器
                clearInterval(timer);
                timer = null;
            }
            oScreen.onmouseout = function() {
                oArr.style.display = "none";
                //鼠标移开以后　再走起来
                timer = setInterval(autoPlay,1000);
            }
      
         // 无缝
             var timer = null;
             // 设定一个全局变量 用来作为ul 移动的计数器 这个变量 很关键  作为整体的移动的步伐的把控
             var k = 1;
             
             // 先实现单击右侧小三角 来实现向左侧滑动
             // 1 获取事件相关元素
             var oRight = $("#right");
             var oUl = $("#ul");
             
             var oLeft = $("#left");
             
             // 获取一下ul里面的所有的li
             var aLi = $("li",oUl);
             // 用js来获取一个图片的宽
             
             var imgW = aLi[0].children[0].offsetWidth+20;
             
             // 复制一份和第一个li一模一样的li 然后放到最后一个li的后面
                var newLi = aLi[0].cloneNode(true);
                oUl.appendChild(newLi);
             
             // 复制一份和最后的一个li一模一样的li 放在第一个li的前面
                 var newLi2 = aLi[aLi.length-2].cloneNode(true);
                 //console.log(aLi[aLi.length-2]);
                 oUl.insertBefore(newLi2,first(oUl));
             var oNav = $("ol",oScreen)[0];
             // 获取导航小方块
             
             // 初始化的时候 应该让ul定位在 负一个图片的宽的位置 显示的应该是第一张图
             oUl.style.left = -imgW*k + "px";
             //console.log(imgW);
            
           
             // 开一个定时器 走起来
             timer = setInterval(autoPlay,3000);
             function　autoPlay() {
                 
                 // 一单击 让全局变量k加一下
                 k++;
                 if(k>=aLi.length) {
                     k = 1;
                     oUl.style.left = -imgW*k + "px";
                 }
                 //单击一下  要往左侧移动一个图片的宽
                 move(oUl,"left",13,-imgW*k,function(){
                     
                     //每一次运动完毕之后　要进行判断　　如果k变化到某一个数值了 则让oUl迅速归位
                     if(k >= aLi.length-5) {
                         k = 1;// 让变量k 等于0   
                         oUl.style.left = -imgW*k + "px"; 
                     }
                 });
                 
             }
}
