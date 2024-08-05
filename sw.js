const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"34965437a60dc3614895d656fbb6cf3f","url":"./404.html"},{"revision":"f448f587a3953ceeb770a599c4f9beff","url":"./archives/2023/03/index.html"},{"revision":"1974c45b954d44aa86b51f1e1d46cfa1","url":"./archives/2023/04/index.html"},{"revision":"0cb0fa0bfbe0eb93c469a9fa60faf692","url":"./archives/2023/index.html"},{"revision":"98ea8441263de0d6fef94cef18f6a07b","url":"./archives/2024/08/index.html"},{"revision":"45346033cc5ab9c4adabf10594241f8e","url":"./archives/2024/index.html"},{"revision":"50251e2300d500d2d5f8dbdd56678518","url":"./archives/index.html"},{"revision":"1aea5f86e020955dd13627b6cd32bbbe","url":"./archives/page/2/index.html"},{"revision":"69778cd77d826a7d8a0636adf6b2e223","url":"./bangumis/index.html"},{"revision":"08133ebafa4af9b7ca24d947705118bd","url":"./bing.json"},{"revision":"29f5cf1ad966746ba9d83800b7a72755","url":"./categories/index.html"},{"revision":"e04fed0ffaf897210738b4effc860c6c","url":"./categories/前端/index.html"},{"revision":"046053d64d4e48e069447841d8ca13ac","url":"./categories/学习笔记/index.html"},{"revision":"856c26d3854163dbb02460393f6674fc","url":"./categories/工具/index.html"},{"revision":"3b6d19805ca759a653d94b592442c0ad","url":"./categories/数据库/index.html"},{"revision":"58b39b3a7775eafb6218225a6c82c325","url":"./categories/系统/index.html"},{"revision":"e340dfa3acfb87f9e86968950f81504a","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"67de1e698959e80f7dfb6c1b7182926a","url":"./feed/atom.xml"},{"revision":"9283d10af62bc78c976dc9f5d1604718","url":"./feed/rss2.xml"},{"revision":"2a802d430cf00d04e67f3d7d2899a905","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"8b4117b5aceb507b681ade2cbbffccc3","url":"./page/2/index.html"},{"revision":"6e96e71a762da7ed43c3a184cea8cc27","url":"./posts/19283750/index.html"},{"revision":"c81449ae0928564f0db79cbd8dd86a72","url":"./posts/32c38e43/index.html"},{"revision":"43816fcf6cc84d19299136095ae343c5","url":"./posts/3749c4bb/index.html"},{"revision":"38c014bdf3bbd9304d80736bc0773a8f","url":"./posts/3a68f348/index.html"},{"revision":"c9c95fd8e4247e9a8c05f3ca12599ad9","url":"./posts/3b5bdfda/index.html"},{"revision":"d59fb3fa8eb3c754db09d5420cd13d5f","url":"./posts/3cdc0be5/index.html"},{"revision":"fe0c56d2ccf7a43f45bb6b4fef1de551","url":"./posts/40f24371/index.html"},{"revision":"35635402be1919f91a738cca12d8dcae","url":"./posts/8b672d54/index.html"},{"revision":"5db5064864cb23f92dceb35c3ef422a8","url":"./posts/aa8f87ba/index.html"},{"revision":"39684b55cfcbc4be3256e0a8cbeb95ae","url":"./posts/b06cc6ec/index.html"},{"revision":"c2c5ea6db8a830dd2c6a923223a9f9bc","url":"./posts/c16db384/index.html"},{"revision":"1f089dda9b0ced5db3c9cdc2bf0a0ad5","url":"./posts/c41c7d43/index.html"},{"revision":"939b34921e946fcf1a2042e4df421950","url":"./posts/d29113f6/index.html"},{"revision":"258725986a439b4e3a82b2ae466e7108","url":"./posts/f85ddf3d/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"619ef6f17645a418befe611cabe0c72a","url":"./search.xml"},{"revision":"e6890e239148092badb460e92775276d","url":"./sitemap/sitemap.xml"},{"revision":"a7713a3a063117afb750439d7e788931","url":"./tags/Arch-Linux/index.html"},{"revision":"81fa170208db283274efe0bc381eca9a","url":"./tags/CSS/index.html"},{"revision":"14f7610adb5df48e516c712f38415857","url":"./tags/index.html"},{"revision":"9d6981e9e27d82de506c1f09d615fd04","url":"./tags/JavaScript/index.html"},{"revision":"28ff5b906ba08bc84022898aa7bb32eb","url":"./tags/Linux/index.html"},{"revision":"979643c15491d586b2d64a97acf3431d","url":"./tags/MySQL/index.html"},{"revision":"0f2f37c1aa6558d2a63392a80d1cf0cb","url":"./tags/Windows/index.html"},{"revision":"cbbf519454c86f511fe3e8e848eb5f24","url":"./tags/双系统/index.html"},{"revision":"76eda8202e789711fd821eff02c5cf4a","url":"./tags/数据结构/index.html"}], {
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
