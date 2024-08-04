function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,l,u,o,a=[],c=!0,i=!1;try{if(u=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=u.call(n)).done)&&(a.push(t.value),a.length!==r);c=!0);}catch(e){i=!0,l=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw l}}return a}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,l=function(){};return{s:l,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,u=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}var methodMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],nativeAPI=function(){if("undefined"==typeof document)return!1;for(var e=methodMap[0],r={},n=0,t=methodMap;n<t.length;n++){var l=t[n];if((null==l?void 0:l[1])in document){var u,o=_createForOfIteratorHelper(l.entries());try{for(o.s();!(u=o.n()).done;){var a=_slicedToArray(u.value,2),c=a[0],i=a[1];r[e[c]]=i}}catch(e){o.e(e)}finally{o.f()}return r}}return!1}(),eventNameMap={change:nativeAPI.fullscreenchange,error:nativeAPI.fullscreenerror},screenfull={request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,r=arguments.length>1?arguments[1]:void 0;return new Promise((function(n,t){var l=function e(){screenfull.off("change",e),n()};screenfull.on("change",l);var u=e[nativeAPI.requestFullscreen](r);u instanceof Promise&&u.then(l).catch(t)}))},exit:function(){return new Promise((function(e,r){if(screenfull.isFullscreen){var n=function r(){screenfull.off("change",r),e()};screenfull.on("change",n);var t=document[nativeAPI.exitFullscreen]();t instanceof Promise&&t.then(n).catch(r)}else e()}))},toggle:function(e,r){return screenfull.isFullscreen?screenfull.exit():screenfull.request(e,r)},onchange:function(e){screenfull.on("change",e)},onerror:function(e){screenfull.on("error",e)},on:function(e,r){var n=eventNameMap[e];n&&document.addEventListener(n,r,!1)},off:function(e,r){var n=eventNameMap[e];n&&document.removeEventListener(n,r,!1)},raw:nativeAPI};Object.defineProperties(screenfull,{isFullscreen:{get:function(){return Boolean(document[nativeAPI.fullscreenElement])}},element:{enumerable:!0,get:function(){var e;return null!==(e=document[nativeAPI.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[nativeAPI.fullscreenEnabled])}}}),nativeAPI||(screenfull={isEnabled:!1}),document.getElementById("screenfull-button").addEventListener("click",(function(){screenfull.isEnabled&&screenfull.toggle(),screenfull.isFullscreen?document.querySelector(".screenfull").querySelector("i").classList.replace("fa-compress","fa-expand"):document.querySelector(".screenfull").querySelector("i").classList.replace("fa-expand","fa-compress")}));