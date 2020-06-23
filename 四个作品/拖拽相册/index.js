var items = document.getElementsByClassName('item');
// 获取拖拽旋转的元素
var wrapper = document.getElementsByClassName('wrapper')[0];
var deg = 360 / items.length;
window.onload = function () {
    // 设置每张图片的立体位置  并且为其设置动画延迟
    for (var i = 0; i < items.length; i++) {
        items[i].style.transform = 'rotateY(' + i * deg + 'deg) translateZ(350px)'
        // 索引值为0 的图片 延迟的时间最长 10 * 0.1
        // 索引值为1                      9 * 0.1
        // 索引值为2                      8 * 0.1
        // 索引值为length - 1 的图片没有延迟  
        //  每相邻两张图片之间的延迟是0.1s
        items[i].style.transitionDelay = (items.length - 1 - i) * 0.1 + 's';
    }
    // 上一个鼠标点的位置
    var lastX = null,
        lastY = null,
        // 当前鼠标的位置
        nowX = null,
        nowY = null,
        // 鼠标移动的距离
        disX = 0,
        disY = 0,
        // 元素旋转的角度
        rotateX = -10,
        rotateY = 0;
    document.onmousedown = function (e) {
        // 上一个点鼠标的位置
        lastX = e.clientX;
        lastY = e.clientY;
        document.onmousemove = function (ev) {
            // 当前鼠标的位置
            nowX = ev.clientX;
            nowY = ev.clientY;
            console.log(ev)
            // 记录鼠标移动的距离
            disX = nowX - lastX;
            disY = nowY - lastY;
            // 计算旋转的角度
            rotateY += disX * 0.1;
            rotateX -= disY * 0.1;
            wrapper.style.transform = 'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)'
            // 保存当前鼠标的位置 作为下一次鼠标移动的起始位置
            lastX = nowX;
            lastY = nowY;
        }
        // 鼠标抬起 不继续进行鼠标移动的行为
        document.onmouseup = function () {
            document.onmousemove = null;
            var timer = setInterval(() => {
                disX *= 0.98;
                disY *= 0.98;
                rotateY += disX * 0.1;
                rotateX -= disY * 0.1;
                wrapper.style.transform = 'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)';
                if (Math.abs(disX) < 0.1 && Math.abs(disY) < 0.1) {
                    clearInterval(timer)
                }
            }, 20);
        }
    }
}

alert("事先声明这个小项目不是我做的，是我网上的老师做的。");