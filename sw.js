const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4e5ee2fea1c4c2ed973eeeaf11a1251b","url":"./404.html"},{"revision":"db4203b9c0b482a10bca68492e501378","url":"./archives/2023/03/index.html"},{"revision":"a49bad768e21139d2beda72bcc893ba0","url":"./archives/2023/04/index.html"},{"revision":"cbd649ea1dcfcbd211bcfa782157722c","url":"./archives/2023/index.html"},{"revision":"08eb52c8a0ebf114d2c553331820c693","url":"./archives/2024/08/index.html"},{"revision":"72982d7478f54966afba5012c83c44e1","url":"./archives/2024/index.html"},{"revision":"6001db2be417194923f18930d34a1bd8","url":"./archives/index.html"},{"revision":"b5d82aa0169764bc49a8af34721f1e3f","url":"./archives/page/2/index.html"},{"revision":"1263c6973faabfdf21835b856150a924","url":"./bangumis/index.html"},{"revision":"087d6e0b57939cd46ce0ae71be107590","url":"./bing.json"},{"revision":"2ba961b4bc72578eecc67ae055eb7640","url":"./categories/index.html"},{"revision":"19dc69797df75550031ac42accce0295","url":"./categories/前端/index.html"},{"revision":"1ca2b598d176425023df0e4a34230425","url":"./categories/学习笔记/index.html"},{"revision":"764aa559ff9d8e148c6d688ded63b2c6","url":"./categories/工具/index.html"},{"revision":"e83c585be1da2161ae322862d69b6517","url":"./categories/系统/index.html"},{"revision":"d1d6b023af23d656ddee07ae16d5d5af","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"39bd74be6731a9a0ffa6d1f9f7dc17e2","url":"./feed/atom.xml"},{"revision":"340ec3af17cc5b255ae54b31d6b704b2","url":"./feed/rss2.xml"},{"revision":"fd9f74263611ca6cd6d00b4967695d07","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"ea0c55cdf86f7f85e384140e41da0d92","url":"./page/2/index.html"},{"revision":"1f0a9d7013bb2b4e94a45b39d597982e","url":"./posts/32c38e43/index.html"},{"revision":"c356c0a9f799849290a135b3228edbea","url":"./posts/3749c4bb/index.html"},{"revision":"5a4aa4480dc6b3f1a09eafd6b18eb30b","url":"./posts/3a68f348/index.html"},{"revision":"fe336ae8c8be4af1d12fcda3bd844f38","url":"./posts/3b5bdfda/index.html"},{"revision":"bb412003a055cd31ed215794e6e7a154","url":"./posts/3cdc0be5/index.html"},{"revision":"df16b3dccb4fcbb70a8bb2e8d84f5e41","url":"./posts/40f24371/index.html"},{"revision":"800add193c5faff9d901d698694f52f2","url":"./posts/8b672d54/index.html"},{"revision":"10f8c3df81b5504e64fd5bc06f77a8e2","url":"./posts/aa8f87ba/index.html"},{"revision":"759f1f34c541ee984fef977a6fa69da4","url":"./posts/b06cc6ec/index.html"},{"revision":"c225a270defb9baac383c8f7ef4981aa","url":"./posts/c16db384/index.html"},{"revision":"601f61624539f32e2fdffd96f6084c28","url":"./posts/c41c7d43/index.html"},{"revision":"a7563a976c91b9bca476c27116c834c3","url":"./posts/d29113f6/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"71021f29726afb401cf51e6d094f86be","url":"./search.xml"},{"revision":"fc276859f066304c735bfee2ac774451","url":"./sitemap/sitemap.xml"},{"revision":"7bfb97a0f8bc34aea9c5afa0429b776d","url":"./tags/Arch-Linux/index.html"},{"revision":"f28b8d9e41c6ad3e8212743a6a1f09b0","url":"./tags/CSS/index.html"},{"revision":"7f0036376ae901b46a849eff24f5f2eb","url":"./tags/index.html"},{"revision":"9084bf5fe88eadda5045805c9b827a1d","url":"./tags/JavaScript/index.html"},{"revision":"123d6a75dd57d9b51cf1794512f85526","url":"./tags/Linux/index.html"},{"revision":"35ae1bb7954a51891ec30933b2002fac","url":"./tags/Windows/index.html"},{"revision":"0b5c7381e136ffcc2aebcc09982755a4","url":"./tags/双系统/index.html"},{"revision":"69032daf8a67c12db9b5d8d47853efb7","url":"./tags/数据结构/index.html"}], {
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
