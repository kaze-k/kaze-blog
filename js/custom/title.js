var ErrorIcon = document.location.origin + '/img/error.png';
var OriginTitle = document.title;
var OriginIcon;
var titleTime;
var links = document.querySelectorAll('link');
for (var i = 0; i < links.length; i++) {
  if (links[i].rel === 'shortcut icon') {
    OriginIcon = links[i].href;
  }
}
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    var _links = document.querySelectorAll('link');
    for (var _i = 0; _i < _links.length; _i++) {
      if (_links[_i].rel === 'shortcut icon') {
        // links[i].setAttribute('href', '/img/error.png');
        _links[_i].href = ErrorIcon;
      }
      document.title = '页面失踪了 X_X';
      clearTimeout(titleTime);
    }
  } else {
    var _links2 = document.querySelectorAll('link');
    for (var _i2 = 0; _i2 < _links2.length; _i2++) {
      if (_links2[_i2].rel === 'shortcut icon') {
        // links[i].setAttribute('href', '/img/favicon.png');
        _links2[_i2].href = OriginIcon;
      }
    }
    document.title = OriginIcon === ErrorIcon ? 'X_X' : '>‿ㅇ';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 1000);
  }
});