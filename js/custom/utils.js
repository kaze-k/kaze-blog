document.addEventListener('DOMContentLoaded', function () {
  var hide_down = function hide_down() {
    var go_down = document.querySelector('#go-down');
    var isbottom = Math.abs(document.documentElement.scrollHeight - window.pageYOffset - document.documentElement.clientHeight) <= 200;
    if (isbottom) {
      go_down.style.display = 'none';
    } else {
      go_down.style.display = 'block';
    }
  };
  var handlerWheel = function handlerWheel(el) {
    if (el) {
      el.addEventListener('wheel', function (event) {
        event.preventDefault();
        el.scrollLeft += event.deltaY;
      });
    }
  };
  var tagBar = document.querySelector('.tagBar-list');
  var categoryBar = document.querySelector('.categoryBar-list');
  var articleList = document.querySelector('.article-list');
  handlerWheel(articleList);
  handlerWheel(tagBar);
  handlerWheel(categoryBar);
  window.addEventListener('scroll', hide_down);
});