// see https://github.com/l-lin/font-awesome-animation
/*
gparents: 唯一的祖先节点名
animation: 动画
hover: 是否hover才出现动效
icons: 图标 see https://fontawesome.com/
speed: 速率 （可选) faa-fast faa-slow
*/

var nav_gparents = '#nav';
var nav_animation = 'faa-tada';
var nav_hover = true;
var nav_speed = '';
var nav_icons = new Array('.fa-archive', '.fa-tags', '.fa-folder-open', '.fa-bilibili', '.fa-tv');
var social_gparents = '.card-info-social-icons';
var social_animation = 'faa-shake';
var social_hover = true;
var social_speed = 'faa-fast';
var social_icons = new Array('.fa-github', '.fa-git', '.fa-envelope', '.fa-rss');
var logo_gparents = '#blog-info';
var logo_animation = 'faa-bounce';
var logo_hover = true;
var logo_speed = '';
var logo_icons = new Array('.site-icon');
var add_animation = function add_animation(gparents, animation, hover, icons, speed) {
  var index = document.querySelector("".concat(gparents));
  if (index) {
    for (var i = 0; i < icons.length; i++) {
      var icon = index.querySelector("".concat(icons[i]));
      // hover
      if (hover) {
        icon.classList.add("".concat(animation), 'animated-hover');
        icon.parentElement.classList.add('faa-parent', 'animated-hover');
      } else {
        icon.classList.add("".concat(animation), 'animated', "".concat(speed));
      }

      // speed
      if (speed) {
        icon.classList.add("".concat(speed));
      }
    }
  }
};
document.addEventListener('DOMContentLoaded', function () {
  add_animation(nav_gparents, nav_animation, nav_hover, nav_icons, nav_speed);
  add_animation(social_gparents, social_animation, social_hover, social_icons, social_speed);
  add_animation(logo_gparents, logo_animation, logo_hover, logo_icons, logo_speed);
});