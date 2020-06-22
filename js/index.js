//点击跳出登录界面 当点击.denglu .Sign后，显示出 .WxDenglu
// 查找.Sign的类
var Sign = document.querySelector(".denglu .Sign");
// 查找要被点击的标签.wx-denglu
var wxDenglu = document.querySelector(".wx-denglu");
// 查找点击后关闭的按钮
var wxX = document.querySelector(".wx-x");

Sign.onclick = function () {
    // 点击之后，运行这里的代码
    wxDenglu.style.display = "block";
    // 显示
}

wxX.onclick = function () {
    wxDenglu.style.display = "none";
    // 关闭
}

// 有一个机器人: switchImage
// 只要告诉他切换到第几张图片，它就会自动的去完成切换
// n表示第几张图片
function switchImage(n) {
    var value = n * - 100 + "%"; //计算它最终的margin-left
    var img1 = document.getElementById('img');
    img1.style.marginLeft = value;

    //下面，搞定下方的li的选中效果
    //清除之前的active
    var active = document.querySelector(".rbox .active");
    active.className = "";
    // 加入active效果
    var ulTitle = document.querySelector(".rbox");
    ulTitle.children[n].className = "active";
    // children[n]查找看.rbox子元素的第n张
}

// 只要鼠标移入.rbox元素，就要完成图片的切换
var ulTitle = document.querySelector(".rbox");
ulTitle.onmouseover = function (e) {
    // 切换图片
    // 要得到是第几张图片，就必须得到当前移入的是第几个li
    // e.target 通过这个表达式，可以得到当前移入的元素的dom对象
    // 先把ulTitle.children变成真的数组
    var children = Array.from(ulTitle.children);
    var index = children.indexOf(e.target);
    currentIndex = index; //更改当前是第几张图片
    switchImage(index);
    console.log(index)
};

var timer = "";
var currentIndex = 0;//一开始是第1张图片
//开始切换图片（3秒切换一次）
function start() {
    clearInterval(timer);
    timer = setInterval(function() {
        currentIndex ++;
        if(currentIndex == 5) {
            currentIndex = 0;
        }
        switchImage(currentIndex);
    },3000)
}

// 停止切换图片
function stop() {
    clearInterval(timer);
}

start();

//最后：鼠标移入banner-container的时候，停止自动切换
// 鼠标移出banner-container的时候，开始自动切换
var bodeerLeft = document.querySelector(".bodyer-left")
bodeerLeft.onmouseover = function () {
    stop();
}
bodeerLeft.onmouseout = function () {
    start();
}


// 主区域的中间

function contStart(n) {
    var newQh = document.querySelector(".new-cont .new-qh");
    var value = n * -100 + "%";
    newQh.style.marginLeft = value;
    
    var liactive = document.querySelector(".text .liactive");
    liactive.className = "";
    var contText = document.querySelector(".text");
    contText.children[n].className = "liactive";
}

// 选中li的父元素
var contText = document.querySelector(".text");
contText.onmouseover = function(e) {
    // if(e.target.tagName != "LI") {
    //     return;
    // }
    var children = Array.from(contText.children);
    var index = children.indexOf(e.target);
    if(index === 5 || index == -1) {
        return;
    }

    contStart(index);
    console.log(index)
}