const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f6bc5fce0d0119ad1c56e55a6965acf7","url":"./404.html"},{"revision":"49f226e7cc68a2881540b7ead217796c","url":"./archives/2023/03/index.html"},{"revision":"f655025eed4d35bdcf8628d60f2fd49c","url":"./archives/2023/04/index.html"},{"revision":"df854fd7dbf2d8ea7f17974ec3b44dc4","url":"./archives/2023/index.html"},{"revision":"19012054439bdd7d659cca5afd1a0a35","url":"./archives/2024/07/index.html"},{"revision":"3eb67ec65f20d284991c658db0aa0ae0","url":"./archives/2024/index.html"},{"revision":"cf7a3bd0c8599b12bad0ca2ec6c55c7f","url":"./archives/index.html"},{"revision":"f4564bfda2bfb50e1ea43a58ea407c78","url":"./bangumis/index.html"},{"revision":"c0c399bbf8540087f35063d9d2bc9401","url":"./bing.json"},{"revision":"c4b02cb5167ad4b4f424440bb56e6c06","url":"./categories/index.html"},{"revision":"50407854c7436a3f598d599246f64e6a","url":"./categories/前端/index.html"},{"revision":"9dbb025970d1352a1d3a73f73ee991b9","url":"./categories/学习笔记/index.html"},{"revision":"95861471173f30e99dd042c4df5e3851","url":"./categories/工具/index.html"},{"revision":"9cf6a40a67465598539304c6345cb280","url":"./categories/系统/index.html"},{"revision":"ae4ee2ffa1ca39fc91dc9ffb6962955f","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"465dc732a2ef6acee288824514188eca","url":"./feed/atom.xml"},{"revision":"7dfbbd519e6715eeab3c8d6da7c069b9","url":"./feed/rss2.xml"},{"revision":"dc50aa816f40d06c6a0865067a997a81","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"4b6b0031aeaaae6135ac5fda16d941c8","url":"./posts/19711/index.html"},{"revision":"cecbbbb10363e66486a38e94f284c98e","url":"./posts/21725/index.html"},{"revision":"d853cdcb4e7235ec4557808575e9a9b7","url":"./posts/33107/index.html"},{"revision":"dfe854380ea1ab1a747699b138e8b4ba","url":"./posts/33510/index.html"},{"revision":"1c6e402dd0d8db037fada567ae716e64","url":"./posts/33511/index.html"},{"revision":"ed166824e1248e468e9b56fbc6bad94e","url":"./posts/3603/index.html"},{"revision":"0628796f9aaab274c46aac9db1634fd3","url":"./posts/3a68f348/index.html"},{"revision":"022599137af0992633282c7f6a883a89","url":"./posts/50888/index.html"},{"revision":"25e843a537f516eb15b11a9b73cf433f","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"73a8de8ad93ce7a87d5cd5545a6c9584","url":"./search.xml"},{"revision":"54d993d3e15c44a8da4717d25e3ddf5c","url":"./sitemap/sitemap.xml"},{"revision":"8d3c816ee34f1e9deaf69857d99860c4","url":"./tags/Arch-Linux/index.html"},{"revision":"0ffd701e77de0407c0f02c95f6936b73","url":"./tags/index.html"},{"revision":"7609fc1ae25c3e272552de209651f5f2","url":"./tags/JavaScript/index.html"},{"revision":"a6e5bbadee92cb252be4d1219494d685","url":"./tags/Linux/index.html"},{"revision":"dba6987aab02846318d0c8798d0b193f","url":"./tags/Windows/index.html"},{"revision":"23b7fa1c909a140f234cc40159ab9d62","url":"./tags/双系统/index.html"},{"revision":"2ddcf451de5f5cfa46d06655bfd35313","url":"./tags/数据结构/index.html"}], {
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
