function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Service = /*#__PURE__*/function () {
  "use strict";

  function Service(config) {
    _classCallCheck(this, Service);
    this.config = config;
  }
  _createClass(Service, [{
    key: "request",
    value: function request(url, data) {
      var api = this.config.baseURL + url;
      var keys = Object.keys(data);
      var values = Object.values(data);
      var headerKeys = Object.keys(this.config.headers);
      var headerValues = Object.values(this.config.headers);
      var args = '';
      for (var i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          args += "".concat(keys[i], "=").concat(values[i]);
        } else {
          args += "".concat(keys[i], "=").concat(values[i], "&");
        }
      }
      var headerID = '';
      for (var _i = 0; _i < headerKeys.length; _i++) {
        if (_i === headerKeys.length - 1) {
          headerID += "".concat(headerKeys[_i], "=").concat(headerValues[_i]);
        } else {
          headerID += "".concat(headerKeys[_i], "=").concat(headerValues[_i], "&");
        }
      }
      return "".concat(api, "?").concat(args, "&").concat(headerID);
    }
  }]);
  return Service;
}();
var service = new Service({
  baseURL: 'https://www.coderutil.com',
  headers: {
    'access-key': '1c64f399a148745e6f9e0df9c4a24ee2',
    'secret-key': 'de14e8189aea8a98f3d5e8d48056a183'
  }
});
var handlerData = function handlerData(data) {
  var message_wrapper = document.querySelector('#message-wrapper');
  var message_items = [];
  for (var i = 0; i < data.length; i++) {
    var hotValue = data[i].hotValue === null ? '' : data[i].hotValue;
    var isBoil = data[i].isBoil ? '沸' : '';
    var isHot = data[i].isHot ? '热' : '';
    var isNew = data[i].isNew ? '新' : '';
    var keyword = data[i].keyword;
    var rank = data[i].rank;
    var summary = data[i].summary ? data[i].summary : '';
    var type = data[i].type ? data[i].type : '';
    var url = data[i].url;
    var msg_item = {};
    msg_item.item = document.createElement('div');
    msg_item.item.setAttribute('class', 'swiper-slide');
    msg_item.item.setAttribute('id', 'message-item');
    msg_item.hotValue = document.createElement('span');
    msg_item.hotValue.setAttribute('id', 'msg-hotValue');
    msg_item.hotValue.innerHTML = hotValue;
    msg_item.hotValue.innerHTML === '' ? null : msg_item.hotValue.setAttribute('style', 'margin-right: 5px');
    msg_item.tags = document.createElement('span');
    msg_item.tags.setAttribute('id', 'msg-tags');
    msg_item.tags.innerHTML = isBoil + isHot + isNew;
    msg_item.tags.innerHTML === '' ? null : msg_item.tags.setAttribute('style', 'margin-right: 3px');
    msg_item.keyword = document.createElement('span');
    msg_item.keyword.setAttribute('id', 'msg-keyword');
    msg_item.keyword.innerHTML = keyword;
    msg_item.rank = document.createElement('span');
    msg_item.rank.setAttribute('id', 'msg-rank');
    msg_item.rank.innerHTML = rank;
    msg_item.summary = document.createElement('span');
    msg_item.summary.setAttribute('id', 'msg-summary');
    msg_item.summary.innerHTML = summary;
    msg_item.type = document.createElement('span');
    msg_item.type.setAttribute('id', 'msg-type');
    msg_item.type.innerHTML = type;
    msg_item.type.innerHTML === '' ? null : msg_item.type.setAttribute('style', 'margin-right: 5px');
    msg_item.url = document.createElement('a');
    msg_item.url.setAttribute('id', 'msg-url');
    msg_item.url.setAttribute('target', '_blank');
    msg_item.url.href = url;
    message_items[i] = msg_item;
  }
  for (var _i2 = 0; _i2 < message_items.length; _i2++) {
    message_wrapper.appendChild(message_items[_i2].item);
    message_items[_i2].item.appendChild(message_items[_i2].url);
    message_items[_i2].url.appendChild(message_items[_i2].rank);
    message_items[_i2].url.appendChild(message_items[_i2].type);
    message_items[_i2].url.appendChild(message_items[_i2].keyword);
    message_items[_i2].url.appendChild(message_items[_i2].tags);
    message_items[_i2].url.appendChild(message_items[_i2].hotValue);
    message_items[_i2].url.appendChild(message_items[_i2].summary);
  }
  var msg_swiper = new Swiper('#message-container', {
    direction: 'vertical',
    passiveListeners: true,
    spaceBetween: 0,
    effect: 'slide',
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000
    },
    mousewheel: true
  });
  msg_swiper.el.onmouseenter = function () {
    msg_swiper.autoplay.stop();
  };
  msg_swiper.el.onmouseleave = function () {
    msg_swiper.autoplay.start();
  };
};
var handlerError = function handlerError(xhr, statusText) {
  console.log("\u8BF7\u6C42\u5931\u8D25! \u72B6\u6001\u7801: ".concat(xhr.status, ", \u5931\u8D25\u539F\u56E0: ").concat(statusText));
};
document.addEventListener('DOMContentLoaded', function () {
  var message = document.getElementById('message');
  if (message) {
    $.ajax({
      url: service.request('/api/resou/v1/weibo.jsonp', {
        size: 40
      }),
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'callback',
      success: handlerData,
      error: handlerError
    });
  }
});