const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"84e6b53fb1812156927d6a16dc5b9559","url":"./404.html"},{"revision":"90d96e99f716fb9ef969fa81af545d63","url":"./archives/2023/03/index.html"},{"revision":"8bd81e8065074717334a86e9543879c1","url":"./archives/2023/04/index.html"},{"revision":"9ef47036330a8389364693666808aafc","url":"./archives/2023/index.html"},{"revision":"c2ddda760b53fbefad253ff1297a767a","url":"./archives/2024/08/index.html"},{"revision":"e4cc4fe932dc0a5abd34809545dc0a0c","url":"./archives/2024/index.html"},{"revision":"ec29748579c80b959af6db68ec2e5673","url":"./archives/index.html"},{"revision":"39a163698cf2bba47ad51318cbf1d550","url":"./archives/page/2/index.html"},{"revision":"8f93d245d00e58db9eb130eda0b8d9a8","url":"./bangumis/index.html"},{"revision":"8da7bb1d184b428a52f82102b6c51246","url":"./bing.json"},{"revision":"7bc7519e61c053be42b399f7f59bac10","url":"./categories/index.html"},{"revision":"49d3faae881681fff7957b5461c27c54","url":"./categories/前端/index.html"},{"revision":"833df5b88db814985f636be2ba1d1c51","url":"./categories/学习笔记/index.html"},{"revision":"89bc21c0a0119e9b8932c3905b85837b","url":"./categories/工具/index.html"},{"revision":"80e478213438bfe7d22ba1fb37443aca","url":"./categories/系统/index.html"},{"revision":"8cfdea51367e92800f197f9df6ae49b6","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cad22227879accb229a3ef10f4c50c9b","url":"./feed/atom.xml"},{"revision":"6f62e1e1f590bf9fe3ebe21f6eaab876","url":"./feed/rss2.xml"},{"revision":"f64daab94ce79b86d416fd47fcf889f0","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"87e2bee9c1b073b6d2a8882e02402d23","url":"./page/2/index.html"},{"revision":"95eb0c67df8a4c163cc52cb2eca49cb5","url":"./posts/32c38e43/index.html"},{"revision":"c5aafa1f5a3c9dcf4a371cc11bdf4a42","url":"./posts/3749c4bb/index.html"},{"revision":"db8b8dd4055c057d7f47cf55103abf40","url":"./posts/3a68f348/index.html"},{"revision":"757ac33fcb7e33ff38062b149729a862","url":"./posts/3b5bdfda/index.html"},{"revision":"ede8599eb3fd66378818f7ec405c1d79","url":"./posts/3cdc0be5/index.html"},{"revision":"49a2af00e1a1db54f73541b891048b42","url":"./posts/40f24371/index.html"},{"revision":"ffade37d48189ce07338ee37af455f6b","url":"./posts/8b672d54/index.html"},{"revision":"92b7a238f88f6240b4bfa379f551a04f","url":"./posts/aa8f87ba/index.html"},{"revision":"5fc5be262b8d72eb8ed87a4de3fb859a","url":"./posts/b06cc6ec/index.html"},{"revision":"e96f62a96348f3c124047570ec8ce944","url":"./posts/c16db384/index.html"},{"revision":"9cb54d17957b1ae5fa6f5211af568235","url":"./posts/c41c7d43/index.html"},{"revision":"98a27842214a9bc962a27886b86c5278","url":"./posts/d29113f6/index.html"},{"revision":"ce9d89c57dc9f35f735e8188a95fa30b","url":"./posts/f85ddf3d/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"9ae74baae457f0f1ef51def21141704b","url":"./search.xml"},{"revision":"bb0c9efcb08bd5cbbab54b27b6931324","url":"./sitemap/sitemap.xml"},{"revision":"65737c21e32b409e8aa8bfa1dd295e76","url":"./tags/Arch-Linux/index.html"},{"revision":"1219b578bfe2888068c620b32836a66d","url":"./tags/CSS/index.html"},{"revision":"591ccbe86b3707e2838ea27459fa449b","url":"./tags/index.html"},{"revision":"88bd058cce6c0c85ab58b23e2c4b1e20","url":"./tags/JavaScript/index.html"},{"revision":"604a91ff2ee5f1347b16d5a6f2d6007f","url":"./tags/Linux/index.html"},{"revision":"8b281f8f9989b33271a79812d9af939f","url":"./tags/Windows/index.html"},{"revision":"bb057efbd5d3585b42e10f40013fb1f4","url":"./tags/双系统/index.html"},{"revision":"d7489aad108ff28b3ff9d0f12b833bb1","url":"./tags/数据结构/index.html"}], {
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
