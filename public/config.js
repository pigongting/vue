// https://www.cnblogs.com/2050/p/3877280.html

// layout viewport 布局视口
// alert(document.documentElement.clientWidth);

// visual viewport 可见视口
// 但在 Android 2, Oprea mini 和 UC 8 中无法正确获取
// alert(window.innerWidth);

// ideal viewport 理想视口
// iphone 的 ideal viewport 宽度都是 320px
// 安卓设备就比较复杂了，有 320px 的，有 360px 的，有 384px
// <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

// 进入时，如果带来参数，去掉，保证签名成功
var hrefArr = window.location.href.split('?')
if (hrefArr.length > 1) {
  window.location.href = hrefArr[0]
}
