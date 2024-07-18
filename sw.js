const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"62265d2cc9ff83c5c67bd9ce69c1dbd7","url":"./404.html"},{"revision":"555bf1f39c1190c7e139dc6e18d3e3ab","url":"./archives/2023/03/index.html"},{"revision":"7a256203baaffa38a14f8ee53ee71533","url":"./archives/2023/04/index.html"},{"revision":"cd7948430d3da03d6b3e8197cf2974af","url":"./archives/2023/index.html"},{"revision":"6379e0b0847a27787db2e88befd8c55e","url":"./archives/2024/07/index.html"},{"revision":"3b12cd65c7ebbc3e6c95ed9c2603c4d5","url":"./archives/2024/index.html"},{"revision":"3872e5e99578e506bb461a834407178a","url":"./archives/index.html"},{"revision":"0fbc404d1c9ff449b03035874d5ee010","url":"./bangumis/index.html"},{"revision":"3c34175d5ebbab3bf2703a2de8443fae","url":"./bing.json"},{"revision":"2c10ab75cafdf3b400382fed2c73f79b","url":"./categories/index.html"},{"revision":"6de7fa43e61a5abe15bdca2dec5c51aa","url":"./categories/前端/index.html"},{"revision":"e1508f460fddfdaa80e1b42e4d591cc6","url":"./categories/学习笔记/index.html"},{"revision":"887dfb766249c0cb9b577734f1f2909c","url":"./categories/工具/index.html"},{"revision":"65822d0094e9fe29da803639dcaf3a19","url":"./categories/系统/index.html"},{"revision":"cf891f12da4c3bfab6d67303d0ceab39","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"628ca9def54b8156261a53a8cef49acb","url":"./feed/atom.xml"},{"revision":"9a7aa4987ba2bca88598020e8ed1be85","url":"./feed/rss2.xml"},{"revision":"55eeb770830dffef18dc1d4ee303053a","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"11ca37b3b3b23656a11a1a2d1f723a35","url":"./posts/19711/index.html"},{"revision":"5ce98ee152c614ee06cbf382ee7c1ee6","url":"./posts/21725/index.html"},{"revision":"0b3a2491e8ecbc4d887f835d51d8cb7f","url":"./posts/33107/index.html"},{"revision":"7a9f3469e1bda8df883fc18422d8bf08","url":"./posts/33510/index.html"},{"revision":"fab6237cdb6c6b5c7782217d99abd3bf","url":"./posts/33511/index.html"},{"revision":"963c58a3d05bc9e6caf132cba17487c5","url":"./posts/3603/index.html"},{"revision":"7acbcb42355fad5ce23b9bbc80f37079","url":"./posts/3a68f348/index.html"},{"revision":"1b9034ab741477364817eef5ca38b1dc","url":"./posts/50888/index.html"},{"revision":"b43dd3a409bb3ab0445ca2031e83f9d9","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"1d2b6ca6dc0ccdc2e0942d937e54fe27","url":"./search.xml"},{"revision":"1ab3a84a72c604239d0a84a1ea5e0c94","url":"./sitemap/sitemap.xml"},{"revision":"a8c5b3600b6f129be147c9aa5835ca2f","url":"./tags/Arch-Linux/index.html"},{"revision":"f3ecdbebd27a1b0a0eab6ce0e08bff72","url":"./tags/index.html"},{"revision":"4959a5f8c415c6b19fc63117e88eb4b9","url":"./tags/JavaScript/index.html"},{"revision":"c767fa25f8158ee03630f83badff13b3","url":"./tags/Linux/index.html"},{"revision":"45a589a06bd12763e1a914e6d5f88d90","url":"./tags/Windows/index.html"},{"revision":"2d79be026238a7a2e488be74f121b795","url":"./tags/双系统/index.html"},{"revision":"b6fc958c6ef6db12523e2f924b1737a2","url":"./tags/数据结构/index.html"}], {
  directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// jsdelivr的CDN资源
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: 'static-libs',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

workbox.googleAnalytics.initialize();
