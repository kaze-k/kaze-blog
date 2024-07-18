function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener('DOMContentLoaded', function () {
  var headerContentWidth, $nav;
  var mobileSidebarOpen = false;
  var adjustMenu = function adjustMenu(init) {
    var getAllWidth = function getAllWidth(ele) {
      var width = 0;
      ele.length && Array.from(ele).forEach(function (i) {
        width += i.offsetWidth;
      });
      return width;
    };
    if (init) {
      var blogInfoWidth = getAllWidth(document.querySelector('#blog-info > a').children);
      var menusWidth = getAllWidth(document.getElementById('menus').children);
      headerContentWidth = blogInfoWidth + menusWidth;
      $nav = document.getElementById('nav');
    }
    var hideMenuIndex = '';
    if (window.innerWidth <= 768) hideMenuIndex = true;else hideMenuIndex = headerContentWidth > $nav.offsetWidth - 120;
    if (hideMenuIndex) {
      $nav.classList.add('hide-menu');
    } else {
      $nav.classList.remove('hide-menu');
    }
  };

  // 初始化header
  var initAdjust = function initAdjust() {
    adjustMenu(true);
    $nav.classList.add('show');
  };

  // sidebar menus
  var sidebarFn = {
    open: function open() {
      btf.sidebarPaddingR();
      document.body.style.overflow = 'hidden';
      btf.animateIn(document.getElementById('menu-mask'), 'to_show 0.5s');
      document.getElementById('sidebar-menus').classList.add('open');
      mobileSidebarOpen = true;
    },
    close: function close() {
      var $body = document.body;
      $body.style.overflow = '';
      $body.style.paddingRight = '';
      btf.animateOut(document.getElementById('menu-mask'), 'to_hide 0.5s');
      document.getElementById('sidebar-menus').classList.remove('open');
      mobileSidebarOpen = false;
    }
  };

  /**
   * 首頁top_img底下的箭頭
   */
  var scrollDownInIndex = function scrollDownInIndex() {
    var $scrollDownEle = document.getElementById('scroll-down');
    $scrollDownEle && $scrollDownEle.addEventListener('click', function () {
      btf.scrollToDest(document.getElementById('content-inner').offsetTop, 300);
    });
  };

  /**
   * 代碼
   * 只適用於Hexo默認的代碼渲染
   */
  var addHighlightTool = function addHighlightTool() {
    var highLight = GLOBAL_CONFIG.highlight;
    if (!highLight) return;
    var isHighlightCopy = highLight.highlightCopy;
    var isHighlightLang = highLight.highlightLang;
    var isHighlightShrink = GLOBAL_CONFIG_SITE.isHighlightShrink;
    var highlightHeightLimit = highLight.highlightHeightLimit;
    var isShowTool = isHighlightCopy || isHighlightLang || isHighlightShrink !== undefined;
    var $figureHighlight = highLight.plugin === 'highlighjs' ? document.querySelectorAll('figure.highlight') : document.querySelectorAll('pre[class*="language-"]');
    if (!((isShowTool || highlightHeightLimit) && $figureHighlight.length)) return;
    var isPrismjs = highLight.plugin === 'prismjs';
    var highlightShrinkEle = '';
    var highlightCopyEle = '';
    var highlightShrinkClass = isHighlightShrink === true ? 'closed' : '';
    if (isHighlightShrink !== undefined) {
      highlightShrinkEle = "<i class=\"fas fa-angle-down expand ".concat(highlightShrinkClass, "\"></i>");
    }
    if (isHighlightCopy) {
      highlightCopyEle = '<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>';
    }
    var copy = function copy(text, ctx) {
      if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        document.execCommand('copy');
        if (GLOBAL_CONFIG.Snackbar !== undefined) {
          btf.snackbarShow(GLOBAL_CONFIG.copy.success);
        } else {
          var prevEle = ctx.previousElementSibling;
          prevEle.innerText = GLOBAL_CONFIG.copy.success;
          prevEle.style.opacity = 1;
          setTimeout(function () {
            prevEle.style.opacity = 0;
          }, 700);
        }
      } else {
        if (GLOBAL_CONFIG.Snackbar !== undefined) {
          btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport);
        } else {
          ctx.previousElementSibling.innerText = GLOBAL_CONFIG.copy.noSupport;
        }
      }
    };

    // click events
    var highlightCopyFn = function highlightCopyFn(ele) {
      var $buttonParent = ele.parentNode;
      $buttonParent.classList.add('copy-true');
      var selection = window.getSelection();
      var range = document.createRange();
      if (isPrismjs) range.selectNodeContents($buttonParent.querySelectorAll('pre code')[0]);else range.selectNodeContents($buttonParent.querySelectorAll('table .code pre')[0]);
      selection.removeAllRanges();
      selection.addRange(range);
      var text = selection.toString();
      copy(text, ele.lastChild);
      selection.removeAllRanges();
      $buttonParent.classList.remove('copy-true');
    };
    var highlightShrinkFn = function highlightShrinkFn(ele) {
      var $nextEle = _toConsumableArray(ele.parentNode.children).slice(1);
      ele.firstChild.classList.toggle('closed');
      if (btf.isHidden($nextEle[$nextEle.length - 1])) {
        $nextEle.forEach(function (e) {
          e.style.display = 'block';
        });
      } else {
        $nextEle.forEach(function (e) {
          e.style.display = 'none';
        });
      }
    };
    var highlightToolsFn = function highlightToolsFn(e) {
      var $target = e.target.classList;
      if ($target.contains('expand')) highlightShrinkFn(this);else if ($target.contains('copy-button')) highlightCopyFn(this);
    };
    var expandCode = function expandCode() {
      this.classList.toggle('expand-done');
    };
    function createEle(lang, item, service) {
      var fragment = document.createDocumentFragment();
      if (isShowTool) {
        var hlTools = document.createElement('div');
        hlTools.className = "highlight-tools ".concat(highlightShrinkClass);
        hlTools.innerHTML = highlightShrinkEle + lang + highlightCopyEle;
        hlTools.addEventListener('click', highlightToolsFn);
        fragment.appendChild(hlTools);
      }
      if (highlightHeightLimit && item.offsetHeight > highlightHeightLimit + 30) {
        var ele = document.createElement('div');
        ele.className = 'code-expand-btn';
        ele.innerHTML = '<i class="fas fa-angle-double-down"></i>';
        ele.addEventListener('click', expandCode);
        fragment.appendChild(ele);
      }
      if (service === 'hl') {
        item.insertBefore(fragment, item.firstChild);
      } else {
        item.parentNode.insertBefore(fragment, item);
      }
    }
    if (isHighlightLang) {
      if (isPrismjs) {
        $figureHighlight.forEach(function (item) {
          var langName = item.getAttribute('data-language') ? item.getAttribute('data-language') : 'Code';
          var highlightLangEle = "<div class=\"code-lang\">".concat(langName, "</div>");
          btf.wrap(item, 'figure', {
            "class": 'highlight'
          });
          createEle(highlightLangEle, item);
        });
      } else {
        $figureHighlight.forEach(function (item) {
          var langName = item.getAttribute('class').split(' ')[1];
          if (langName === 'plain' || langName === undefined) langName = 'Code';
          var highlightLangEle = "<div class=\"code-lang\">".concat(langName, "</div>");
          createEle(highlightLangEle, item, 'hl');
        });
      }
    } else {
      if (isPrismjs) {
        $figureHighlight.forEach(function (item) {
          btf.wrap(item, 'figure', {
            "class": 'highlight'
          });
          createEle('', item);
        });
      } else {
        $figureHighlight.forEach(function (item) {
          createEle('', item, 'hl');
        });
      }
    }
  };

  /**
   * PhotoFigcaption
   */
  function addPhotoFigcaption() {
    document.querySelectorAll('#article-container img').forEach(function (item) {
      var parentEle = item.parentNode;
      var altValue = item.title || item.alt;
      if (altValue && !parentEle.parentNode.classList.contains('justified-gallery')) {
        var ele = document.createElement('div');
        ele.className = 'img-alt is-center';
        ele.textContent = altValue;
        parentEle.insertBefore(ele, item.nextSibling);
      }
    });
  }

  /**
   * Lightbox
   */
  var runLightbox = function runLightbox() {
    btf.loadLightbox(document.querySelectorAll('#article-container img:not(.no-lightbox)'));
  };

  /**
   * justified-gallery 圖庫排版
   */
  var runJustifiedGallery = function runJustifiedGallery(ele) {
    var htmlStr = function htmlStr(arr) {
      var str = '';
      var replaceDq = function replaceDq(str) {
        return str.replace(/"/g, '&quot;');
      }; // replace double quotes to &quot;
      arr.forEach(function (i) {
        var alt = i.alt ? "alt=\"".concat(replaceDq(i.alt), "\"") : '';
        var title = i.title ? "title=\"".concat(replaceDq(i.title), "\"") : '';
        str += "<div class=\"fj-gallery-item\"><img src=\"".concat(i.url, "\" ").concat(alt + title, "\"></div>");
      });
      return str;
    };
    var lazyloadFn = function lazyloadFn(i, arr, limit) {
      var loadItem = limit;
      var arrLength = arr.length;
      if (arrLength > loadItem) i.insertAdjacentHTML('beforeend', htmlStr(arr.splice(0, loadItem)));else {
        i.insertAdjacentHTML('beforeend', htmlStr(arr));
        i.classList.remove('lazyload');
      }
      return arrLength > loadItem ? loadItem : arrLength;
    };
    var fetchUrl = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);
            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fetchUrl(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var runJustifiedGallery = function runJustifiedGallery(item, arr) {
      if (!item.classList.contains('lazyload')) item.innerHTML = htmlStr(arr);else {
        var limit = item.getAttribute('data-limit');
        lazyloadFn(item, arr, limit);
        var clickBtnFn = function clickBtnFn() {
          var lastItemLength = lazyloadFn(item, arr, limit);
          fjGallery(item, 'appendImages', item.querySelectorAll(".fj-gallery-item:nth-last-child(-n+".concat(lastItemLength, ")")));
          btf.loadLightbox(item.querySelectorAll('img'));
          lastItemLength < limit && item.nextElementSibling.removeEventListener('click', clickBtnFn);
        };
        item.nextElementSibling.addEventListener('click', clickBtnFn);
      }
      btf.initJustifiedGallery(item);
      btf.loadLightbox(item.querySelectorAll('img'));
    };
    var addJustifiedGallery = function addJustifiedGallery() {
      ele.forEach(function (item) {
        item.classList.contains('url') ? fetchUrl(item.textContent).then(function (res) {
          runJustifiedGallery(item, res);
        }) : runJustifiedGallery(item, JSON.parse(item.textContent));
      });
    };
    if (window.fjGallery) {
      addJustifiedGallery();
      return;
    }
    getCSS("".concat(GLOBAL_CONFIG.source.justifiedGallery.css));
    getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js)).then(addJustifiedGallery);
  };

  /**
   * rightside scroll percent
   */
  var rightsideScrollPercent = function rightsideScrollPercent(currentTop) {
    var perNum = btf.getScrollPercent(currentTop, document.body);
    var $goUp = document.getElementById('go-up');
    if (perNum < 95) {
      $goUp.classList.add('show-percent');
      $goUp.querySelector('.scroll-percent').textContent = perNum;
    } else {
      $goUp.classList.remove('show-percent');
    }
  };

  /**
   * 滾動處理
   */
  var scrollFn = function scrollFn() {
    var $rightside = document.getElementById('rightside');
    var innerHeight = window.innerHeight + 56;

    // 當滾動條小于 56 的時候
    if (document.body.scrollHeight <= innerHeight) {
      $rightside.style.cssText = 'opacity: 1; transform: translateX(-58px)';
      return;
    }

    // find the scroll direction
    function scrollDirection(currentTop) {
      var result = currentTop > initTop; // true is down & false is up
      initTop = currentTop;
      return result;
    }
    var initTop = 0;
    var isChatShow = true;
    var $header = document.getElementById('page-header');
    var isChatBtnHide = typeof chatBtnHide === 'function';
    var isChatBtnShow = typeof chatBtnShow === 'function';
    var isShowPercent = GLOBAL_CONFIG.percent.rightside;
    var scrollTask = btf.throttle(function () {
      var currentTop = window.scrollY || document.documentElement.scrollTop;
      var isDown = scrollDirection(currentTop);
      if (currentTop > 56) {
        if (isDown) {
          if ($header.classList.contains('nav-visible')) $header.classList.remove('nav-visible');
          if (isChatBtnShow && isChatShow === true) {
            chatBtnHide();
            isChatShow = false;
          }
        } else {
          if (!$header.classList.contains('nav-visible')) $header.classList.add('nav-visible');
          if (isChatBtnHide && isChatShow === false) {
            chatBtnShow();
            isChatShow = true;
          }
        }
        $header.classList.add('nav-fixed');
        if (window.getComputedStyle($rightside).getPropertyValue('opacity') === '0') {
          $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)';
        }
      } else {
        if (currentTop === 0) {
          $header.classList.remove('nav-fixed', 'nav-visible');
        }
        $rightside.style.cssText = "opacity: ''; transform: ''";
      }
      isShowPercent && rightsideScrollPercent(currentTop);
      if (document.body.scrollHeight <= innerHeight) {
        $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)';
      }
    }, 200);
    window.scrollCollect = scrollTask;
    window.addEventListener('scroll', scrollCollect);
  };

  /**
   * toc,anchor
   */
  var scrollFnToDo = function scrollFnToDo() {
    var isToc = GLOBAL_CONFIG_SITE.isToc;
    var isAnchor = GLOBAL_CONFIG.isAnchor;
    var $article = document.getElementById('article-container');
    if (!($article && (isToc || isAnchor))) return;
    var $tocLink, $cardToc, autoScrollToc, $tocPercentage, isExpand;
    if (isToc) {
      var $cardTocLayout = document.getElementById('card-toc');
      $cardToc = $cardTocLayout.getElementsByClassName('toc-content')[0];
      $tocLink = $cardToc.querySelectorAll('.toc-link');
      $tocPercentage = $cardTocLayout.querySelector('.toc-percentage');
      isExpand = $cardToc.classList.contains('is-expand');
      window.mobileToc = {
        open: function open() {
          $cardTocLayout.style.cssText = 'animation: toc-open .3s; opacity: 1; right: 55px';
        },
        close: function close() {
          $cardTocLayout.style.animation = 'toc-close .2s';
          setTimeout(function () {
            $cardTocLayout.style.cssText = "opacity:''; animation: ''; right: ''";
          }, 100);
        }
      };

      // toc元素點擊
      $cardToc.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target.classList;
        if (target.contains('toc-content')) return;
        var $target = target.contains('toc-link') ? e.target : e.target.parentElement;
        btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI($target.getAttribute('href')).replace('#', ''))), 300);
        if (window.innerWidth < 900) {
          window.mobileToc.close();
        }
      });
      autoScrollToc = function autoScrollToc(item) {
        var activePosition = item.getBoundingClientRect().top;
        var sidebarScrollTop = $cardToc.scrollTop;
        if (activePosition > document.documentElement.clientHeight - 100) {
          $cardToc.scrollTop = sidebarScrollTop + 150;
        }
        if (activePosition < 100) {
          $cardToc.scrollTop = sidebarScrollTop - 150;
        }
      };
    }

    // find head position & add active class
    var list = $article.querySelectorAll('h1,h2,h3,h4,h5,h6');
    var detectItem = '';
    var findHeadPosition = function findHeadPosition(top) {
      if (top === 0) {
        return false;
      }
      var currentId = '';
      var currentIndex = '';
      list.forEach(function (ele, index) {
        if (top > btf.getEleTop(ele) - 80) {
          var id = ele.id;
          currentId = id ? '#' + encodeURI(id) : '';
          currentIndex = index;
        }
      });
      if (detectItem === currentIndex) return;
      if (isAnchor) btf.updateAnchor(currentId);
      detectItem = currentIndex;
      if (isToc) {
        $cardToc.querySelectorAll('.active').forEach(function (i) {
          i.classList.remove('active');
        });
        if (currentId === '') {
          return;
        }
        var currentActive = $tocLink[currentIndex];
        currentActive.classList.add('active');
        setTimeout(function () {
          autoScrollToc(currentActive);
        }, 0);
        if (isExpand) return;
        var parent = currentActive.parentNode;
        for (; !parent.matches('.toc'); parent = parent.parentNode) {
          if (parent.matches('li')) parent.classList.add('active');
        }
      }
    };

    // main of scroll
    window.tocScrollFn = btf.throttle(function () {
      var currentTop = window.scrollY || document.documentElement.scrollTop;
      if (isToc && GLOBAL_CONFIG.percent.toc) {
        $tocPercentage.textContent = btf.getScrollPercent(currentTop, $article);
      }
      findHeadPosition(currentTop);
    }, 100);
    window.addEventListener('scroll', tocScrollFn);
  };

  /**
   * Rightside
   */
  var rightSideFn = {
    switchReadMode: function switchReadMode() {
      // read-mode
      var $body = document.body;
      $body.classList.add('read-mode');
      var newEle = document.createElement('button');
      newEle.type = 'button';
      newEle.className = 'fas fa-sign-out-alt exit-readmode';
      $body.appendChild(newEle);
      function clickFn() {
        $body.classList.remove('read-mode');
        newEle.remove();
        newEle.removeEventListener('click', clickFn);
      }
      newEle.addEventListener('click', clickFn);
    },
    switchDarkMode: function switchDarkMode() {
      // Switch Between Light And Dark Mode
      var nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      if (nowMode === 'light') {
        activateDarkMode();
        saveToLocal.set('theme', 'dark', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
      } else {
        activateLightMode();
        saveToLocal.set('theme', 'light', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
      }
      // handle some cases
      typeof utterancesTheme === 'function' && utterancesTheme();
      typeof changeGiscusTheme === 'function' && changeGiscusTheme();
      (typeof FB === "undefined" ? "undefined" : _typeof(FB)) === 'object' && window.loadFBComment && window.loadFBComment();
      typeof runMermaid === 'function' && window.runMermaid();
    },
    showOrHideBtn: function showOrHideBtn(e) {
      // rightside 點擊設置 按鈕 展開
      var rightsideHideClassList = document.getElementById('rightside-config-hide').classList;
      rightsideHideClassList.toggle('show');
      if (e.classList.contains('show')) {
        rightsideHideClassList.add('status');
        setTimeout(function () {
          rightsideHideClassList.remove('status');
        }, 300);
      }
      e.classList.toggle('show');
    },
    scrollToTop: function scrollToTop() {
      // Back to top
      btf.scrollToDest(0, 500);
    },
    hideAsideBtn: function hideAsideBtn() {
      // Hide aside
      var $htmlDom = document.documentElement.classList;
      $htmlDom.contains('hide-aside') ? saveToLocal.set('aside-status', 'show', 2) : saveToLocal.set('aside-status', 'hide', 2);
      $htmlDom.toggle('hide-aside');
    },
    runMobileToc: function runMobileToc() {
      if (window.getComputedStyle(document.getElementById('card-toc')).getPropertyValue('opacity') === '0') window.mobileToc.open();else window.mobileToc.close();
    }
  };
  document.getElementById('rightside').addEventListener('click', function (e) {
    var $target = e.target.id ? e.target : e.target.parentNode;
    switch ($target.id) {
      case 'go-up':
        rightSideFn.scrollToTop();
        break;
      case 'rightside_config':
        rightSideFn.showOrHideBtn($target);
        break;
      case 'mobile-toc-button':
        rightSideFn.runMobileToc();
        break;
      case 'readmode':
        rightSideFn.switchReadMode();
        break;
      case 'darkmode':
        rightSideFn.switchDarkMode();
        break;
      case 'hide-aside-btn':
        rightSideFn.hideAsideBtn();
        break;
      default:
        break;
    }
  });

  /**
   * menu
   * 側邊欄sub-menu 展開/收縮
   */
  var clickFnOfSubMenu = function clickFnOfSubMenu() {
    document.querySelectorAll('#sidebar-menus .site-page.group').forEach(function (item, _, arr) {
      item.addEventListener('click', function () {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].className !== 'site-page group hide' && arr[i] !== item) arr[i].classList.add('hide');
        }
        this.classList.toggle('hide');
      });
    });
  };

  /**
   * 複製時加上版權信息
   */
  var addCopyright = function addCopyright() {
    var copyright = GLOBAL_CONFIG.copyright;
    document.body.oncopy = function (e) {
      e.preventDefault();
      var textFont;
      var copyFont = window.getSelection(0).toString();
      if (copyFont.length > copyright.limitCount) {
        textFont = copyFont + '\n' + '\n' + '\n' + copyright.languages.author + '\n' + copyright.languages.link + window.location.href + '\n' + copyright.languages.source + '\n' + copyright.languages.info;
      } else {
        textFont = copyFont;
      }
      if (e.clipboardData) {
        return e.clipboardData.setData('text', textFont);
      } else {
        return window.clipboardData.setData('text', textFont);
      }
    };
  };

  /**
   * 網頁運行時間
   */
  var addRuntime = function addRuntime() {
    var $runtimeCount = document.getElementById('runtimeshow');
    if ($runtimeCount) {
      var publishDate = $runtimeCount.getAttribute('data-publishDate');
      $runtimeCount.innerText = btf.diffDate(publishDate) + ' ' + GLOBAL_CONFIG.runtime;
    }
  };

  /**
   * 最後一次更新時間
   */
  var addLastPushDate = function addLastPushDate() {
    var $lastPushDateItem = document.getElementById('last-push-date');
    if ($lastPushDateItem) {
      var lastPushDate = $lastPushDateItem.getAttribute('data-lastPushDate');
      $lastPushDateItem.innerText = btf.diffDate(lastPushDate, true);
    }
  };

  /**
   * table overflow
   */
  var addTableWrap = function addTableWrap() {
    var $table = document.querySelectorAll('#article-container :not(.highlight) > table, #article-container > table');
    if ($table.length) {
      $table.forEach(function (item) {
        btf.wrap(item, 'div', {
          "class": 'table-wrap'
        });
      });
    }
  };

  /**
   * tag-hide
   */
  var clickFnOfTagHide = function clickFnOfTagHide() {
    var $hideInline = document.querySelectorAll('#article-container .hide-button');
    if ($hideInline.length) {
      $hideInline.forEach(function (item) {
        item.addEventListener('click', function (e) {
          var $this = this;
          $this.classList.add('open');
          var $fjGallery = $this.nextElementSibling.querySelectorAll('.fj-gallery');
          $fjGallery.length && btf.initJustifiedGallery($fjGallery);
        });
      });
    }
  };
  var tabsFn = {
    clickFnOfTabs: function clickFnOfTabs() {
      document.querySelectorAll('#article-container .tab > button').forEach(function (item) {
        item.addEventListener('click', function (e) {
          var $this = this;
          var $tabItem = $this.parentNode;
          if (!$tabItem.classList.contains('active')) {
            var $tabContent = $tabItem.parentNode.nextElementSibling;
            var $siblings = btf.siblings($tabItem, '.active')[0];
            $siblings && $siblings.classList.remove('active');
            $tabItem.classList.add('active');
            var tabId = $this.getAttribute('data-href').replace('#', '');
            var childList = _toConsumableArray($tabContent.children);
            childList.forEach(function (item) {
              if (item.id === tabId) item.classList.add('active');else item.classList.remove('active');
            });
            var $isTabJustifiedGallery = $tabContent.querySelectorAll("#".concat(tabId, " .fj-gallery"));
            if ($isTabJustifiedGallery.length > 0) {
              btf.initJustifiedGallery($isTabJustifiedGallery);
            }
          }
        });
      });
    },
    backToTop: function backToTop() {
      document.querySelectorAll('#article-container .tabs .tab-to-top').forEach(function (item) {
        item.addEventListener('click', function () {
          btf.scrollToDest(btf.getEleTop(btf.getParents(this, '.tabs')), 300);
        });
      });
    }
  };
  var toggleCardCategory = function toggleCardCategory() {
    var $cardCategory = document.querySelectorAll('#aside-cat-list .card-category-list-item.parent i');
    if ($cardCategory.length) {
      $cardCategory.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          var $this = this;
          $this.classList.toggle('expand');
          var $parentEle = $this.parentNode.nextElementSibling;
          if (btf.isHidden($parentEle)) {
            $parentEle.style.display = 'block';
          } else {
            $parentEle.style.display = 'none';
          }
        });
      });
    }
  };
  var switchComments = function switchComments() {
    var switchDone = false;
    var $switchBtn = document.querySelector('#comment-switch > .switch-btn');
    $switchBtn && $switchBtn.addEventListener('click', function () {
      this.classList.toggle('move');
      document.querySelectorAll('#post-comment > .comment-wrap > div').forEach(function (item) {
        if (btf.isHidden(item)) {
          item.style.cssText = 'display: block;animation: tabshow .5s';
        } else {
          item.style.cssText = "display: none;animation: ''";
        }
      });
      if (!switchDone && typeof loadOtherComment === 'function') {
        switchDone = true;
        loadOtherComment();
      }
    });
  };
  var addPostOutdateNotice = function addPostOutdateNotice() {
    var data = GLOBAL_CONFIG.noticeOutdate;
    var diffDay = btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);
    if (diffDay >= data.limitDay) {
      var ele = document.createElement('div');
      ele.className = 'post-outdate-notice';
      ele.textContent = data.messagePrev + ' ' + diffDay + ' ' + data.messageNext;
      var $targetEle = document.getElementById('article-container');
      if (data.position === 'top') {
        $targetEle.insertBefore(ele, $targetEle.firstChild);
      } else {
        $targetEle.appendChild(ele);
      }
    }
  };
  var lazyloadImg = function lazyloadImg() {
    window.lazyLoadInstance = new LazyLoad({
      elements_selector: 'img',
      threshold: 0,
      data_src: 'lazy-src'
    });
  };
  var relativeDate = function relativeDate(selector) {
    selector.forEach(function (item) {
      var $this = item;
      var timeVal = $this.getAttribute('datetime');
      $this.innerText = btf.diffDate(timeVal, true);
      $this.style.display = 'inline';
    });
  };
  var unRefreshFn = function unRefreshFn() {
    window.addEventListener('resize', function () {
      adjustMenu(false);
      btf.isHidden(document.getElementById('toggle-menu')) && mobileSidebarOpen && sidebarFn.close();
    });
    document.getElementById('menu-mask').addEventListener('click', function (e) {
      sidebarFn.close();
    });
    clickFnOfSubMenu();
    GLOBAL_CONFIG.islazyload && lazyloadImg();
    GLOBAL_CONFIG.copyright !== undefined && addCopyright();
  };
  window.refreshFn = function () {
    initAdjust();
    if (GLOBAL_CONFIG_SITE.isPost) {
      GLOBAL_CONFIG.noticeOutdate !== undefined && addPostOutdateNotice();
      GLOBAL_CONFIG.relativeDate.post && relativeDate(document.querySelectorAll('#post-meta time'));
    } else {
      GLOBAL_CONFIG.relativeDate.homepage && relativeDate(document.querySelectorAll('#recent-posts time'));
      GLOBAL_CONFIG.runtime && addRuntime();
      addLastPushDate();
      toggleCardCategory();
    }
    scrollFnToDo();
    GLOBAL_CONFIG_SITE.isHome && scrollDownInIndex();
    addHighlightTool();
    GLOBAL_CONFIG.isPhotoFigcaption && addPhotoFigcaption();
    scrollFn();
    var $jgEle = document.querySelectorAll('#article-container .fj-gallery');
    $jgEle.length && runJustifiedGallery($jgEle);
    runLightbox();
    addTableWrap();
    clickFnOfTagHide();
    tabsFn.clickFnOfTabs();
    tabsFn.backToTop();
    switchComments();
    document.getElementById('toggle-menu').addEventListener('click', function () {
      sidebarFn.open();
    });
  };
  refreshFn();
  unRefreshFn();
});