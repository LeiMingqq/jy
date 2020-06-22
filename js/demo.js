
//n表示第几张
function switchImagt(n) {
    var img1 = document.getElementById('img');
    var value = n * -100 + "%";
    img1.style.marginLeft = value;

    //图片移到第几张就在第几张的标签上加效果
    var active = document.querySelector(".rbox .active");
    active.className = "";//每次清空没有被选中的元素
    var ulTitle = document.querySelector(".rbox");
    ulTitle.children[n].className = "active";
}

// 当鼠标移入span[n]图片就在第n的位置上显示
var ulTitle = document.querySelector(".rbox");
ulTitle.onmouseover = function (e) {
    var children = Array.from(ulTitle.children)
    var index = children.indexOf(e.target);
    cuurenIndex = index;
    switchImagt(index);
    console.log(index);
}



// 每个3秒切换一次图片
var timer = "";
var cuurenIndex = 0; //表示第1张图片
function start() {
    if (timer != "") {
        //不是空就清除一下
        clearInterval(timer);
    }
    timer = setInterval(function () {
        cuurenIndex++;
        if (cuurenIndex == 5) {
            cuurenIndex = 0;
        }
        switchImagt(cuurenIndex);
        console.log(cuurenIndex)
    }, 3000);
}
// 停止
function stop() {
    clearInterval(timer);
}

start();


var bodeerLeft = document.querySelector(".bodyer-left")
bodeerLeft.onmouseover = function () {
    stop();
}
bodeerLeft.onmouseout = function () {
    start();
}


// 主区域的中间

function contStart(n) {
    var newQh = document.querySelector(".bodyer-cont .new-qh");
    var value = n * -100 + "px";
    newQh.style.marginLeft = value
}