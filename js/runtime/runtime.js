// 格式规范化，个位数前面加0
var nol = function nol(h) {
  return Number(h) > 9 ? h : '0' + h;
};
function createTime() {
  var create_time = Math.round(new Date('03/01/2023 00:00:00').getTime() / 1000); //在此行修改建站时间
  var timestamp = Math.round(new Date().getTime() / 1000);
  var second = timestamp - create_time;
  var time = new Array('000', '00', '00', '00', '00');
  if (second >= 365 * 24 * 3600) {
    time[0] = Math.floor(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  } // 年
  if (second >= 24 * 3600) {
    time[1] = Math.floor(second / (24 * 3600));
    second %= 24 * 3600;
  } // 天
  if (second >= 3600) {
    time[2] = nol(Math.floor(second / 3600));
    second %= 3600;
  } // 时
  if (second >= 60) {
    time[3] = nol(Math.floor(second / 60));
    second %= 60;
  } // 分
  if (second >= 0) {
    time[4] = nol(second);
  } // 秒

  var currentTimeHtml = '';
  // 白天
  if (Number(time[2]) < 19 && Number(time[2]) > 6) {
    currentTimeHtml = "\n      <img class='boardsign' src='https://img.shields.io/badge/klog-\u767D\u5929\u597D-6adea8?style=social&logo=bilibili&logoColor=343a43' title='X_X'>\n      <div class='textTip'>\n        \u672C\u7AD9\u5DF2\u52A0\u8F7D\u4E86\n        <span id='year'>".concat(time[0], "</span>&nbsp\u5E74\n        <span id='days'>").concat(time[1], "</span>&nbsp\u5929\n        <span id='hour'>").concat(time[2], "</span>&nbsp\u65F6\n        <span id='minute'>").concat(time[3], "</span>&nbsp\u5206\n        <span id='second'>").concat(time[4], "</span>&nbsp\u79D2\n        <i class='fas fa-heartbeat' style='color:red'></i>\n      </div>");
  }
  // 晚上
  else {
    currentTimeHtml = "\n      <img class='boardsign' src='https://img.shields.io/badge/klog-\u665A\u4E0A\u597D-6adea8?style=social&logo=alienware&logoColor=343a43' title='>_<'>\n      <div class='textTip'>\n        \u672C\u7AD9\u5DF2\u52A0\u8F7D\u4E86\n        <span id='year'>".concat(time[0], "</span>&nbsp\u5E74\n        <span id='days'>").concat(time[1], "</span>&nbsp\u5929\n        <span id='hour'>").concat(time[2], "</span>&nbsp\u65F6\n        <span id='minute'>").concat(time[3], "</span>&nbsp\u5206\n        <span id='second'>").concat(time[4], "</span>&nbsp\u79D2\n        <i class='fas fa-heartbeat' style='color:red'></i>\n      </div>");
  }
  //覆写挂载标签的内容
  document.getElementById('workboard').innerHTML = currentTimeHtml;
}
setInterval(function () {
  createTime();
}, 1000);