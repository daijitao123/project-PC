 (function () {
        var step = 0, autoTimer = null, interval = 2000;
        var banner = document.getElementById("banner")
        var inner = document.getElementById("inner"),
            tip = document.getElementById("Tip"),
            tipList = tip.getElementsByTagName("li"),
            btnLeft = document.getElementById("bannerLeft"),
            btnRight = document.getElementById("bannerRight");

        //->实现焦点对齐

     //->实现焦点对齐
     function changeTip() {
         var tempStep = step;
         tempStep >= tipList.length ? tempStep = 0 : null;
         for (var i = 0; i < tipList.length; i++) {
             tipList[i].className = i === tempStep ? "bg" : null;
         }
     }

     //->实现自动轮播图
     autoTimer = window.setInterval(autoMove, interval);
     function autoMove() {
         step++;
         if (step > 5) {
             step = 1;
             inner.style.left = 0;
         }
         zhufengAnimate(inner, {left: -step * 750}, 500);
         changeTip();
     }

     //->鼠标进入轮播图区域停止自动轮播,鼠标离开自动轮播开启
     banner.onmouseenter = function () {
         window.clearInterval(autoTimer);
         btnLeft.style.display = btnRight.style.display = "block";
     };

     banner.onmouseleave = function () {
         autoTimer = window.setInterval(autoMove, interval);
         btnLeft.style.display = btnRight.style.display = "none";
     };


     //->实现焦点轮播
     tipMove();
     function tipMove() {
         for (var i = 0; i < tipList.length; i++) {
             var cur = tipList[i];
             cur.index = i;
             cur.onclick = function () {
                 step = this.index;
                 zhufengAnimate(inner, {left: -step * 750}, 500, 3);
                 changeTip();
             }
         }
     }

     //->实现左右切换
     btnLeft.onclick = function () {
         step--;
         if (step < 0) {
             step = 5;
             inner.style.left = -3750 + "px";
         }
         zhufengAnimate(inner, {left: -step * 750}, 500, 3);
         changeTip();
     };

     btnRight.onclick = autoMove;
    })();
