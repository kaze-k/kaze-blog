function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var methodMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
// New WebKit
['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
// Old WebKit
['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
var nativeAPI = function () {
  if (typeof document === 'undefined') {
    return false;
  }
  var unprefixedMethods = methodMap[0];
  var returnValue = {};
  for (var _i = 0, _methodMap = methodMap; _i < _methodMap.length; _i++) {
    var methodList = _methodMap[_i];
    var exitFullscreenMethod = methodList === null || methodList === void 0 ? void 0 : methodList[1];
    if (exitFullscreenMethod in document) {
      var _iterator = _createForOfIteratorHelper(methodList.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            index = _step$value[0],
            method = _step$value[1];
          returnValue[unprefixedMethods[index]] = method;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return returnValue;
    }
  }
  return false;
}();
var eventNameMap = {
  change: nativeAPI.fullscreenchange,
  error: nativeAPI.fullscreenerror
};
var screenfull = {
  // eslint-disable-next-line default-param-last
  request: function request() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var options = arguments.length > 1 ? arguments[1] : undefined;
    return new Promise(function (resolve, reject) {
      var onFullScreenEntered = function onFullScreenEntered() {
        screenfull.off('change', onFullScreenEntered);
        resolve();
      };
      screenfull.on('change', onFullScreenEntered);
      var returnPromise = element[nativeAPI.requestFullscreen](options);
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenEntered)["catch"](reject);
      }
    });
  },
  exit: function exit() {
    return new Promise(function (resolve, reject) {
      if (!screenfull.isFullscreen) {
        resolve();
        return;
      }
      var onFullScreenExit = function onFullScreenExit() {
        screenfull.off('change', onFullScreenExit);
        resolve();
      };
      screenfull.on('change', onFullScreenExit);
      var returnPromise = document[nativeAPI.exitFullscreen]();
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenExit)["catch"](reject);
      }
    });
  },
  toggle: function toggle(element, options) {
    return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
  },
  onchange: function onchange(callback) {
    screenfull.on('change', callback);
  },
  onerror: function onerror(callback) {
    screenfull.on('error', callback);
  },
  on: function on(event, callback) {
    var eventName = eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, callback, false);
    }
  },
  off: function off(event, callback) {
    var eventName = eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, callback, false);
    }
  },
  raw: nativeAPI
};
Object.defineProperties(screenfull, {
  isFullscreen: {
    get: function get() {
      return Boolean(document[nativeAPI.fullscreenElement]);
    }
  },
  element: {
    enumerable: true,
    get: function get() {
      var _document$nativeAPI$f;
      return (_document$nativeAPI$f = document[nativeAPI.fullscreenElement]) !== null && _document$nativeAPI$f !== void 0 ? _document$nativeAPI$f : undefined;
    }
  },
  isEnabled: {
    enumerable: true,
    // Coerce to boolean in case of old WebKit.
    get: function get() {
      return Boolean(document[nativeAPI.fullscreenEnabled]);
    }
  }
});
if (!nativeAPI) {
  screenfull = {
    isEnabled: false
  };
}

// 切换图标
document.getElementById('screenfull-button').addEventListener('click', function () {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
  if (screenfull.isFullscreen) {
    document.querySelector('.screenfull').querySelector('i').classList.replace('fa-compress', 'fa-expand');
  } else {
    document.querySelector('.screenfull').querySelector('i').classList.replace('fa-expand', 'fa-compress');
  }
});