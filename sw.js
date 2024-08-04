const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9f14a4fc542df8f627dea45b4dd3c6b8","url":"./404.html"},{"revision":"8c5a48de91ee3a2cbea8a1014495b3b5","url":"./archives/2023/03/index.html"},{"revision":"8cf24e53da6363decf7a793339e6feb7","url":"./archives/2023/04/index.html"},{"revision":"4ca7ab03f63ba56a9e0d07c5c038e0f9","url":"./archives/2023/index.html"},{"revision":"55c74914239dfef23f79eee72f31f125","url":"./archives/2024/08/index.html"},{"revision":"8f6101af987015c6d803abebb090bd80","url":"./archives/2024/index.html"},{"revision":"d36c428ff73e03960f216f9d1eb82e79","url":"./archives/index.html"},{"revision":"a7048e6d37d84f3cbf10f4347a76cbe3","url":"./archives/page/2/index.html"},{"revision":"bf790cff469bdceff3bace8bbbc67e3b","url":"./bangumis/index.html"},{"revision":"7f5d3cd14e32084d70a2235e0a43ebd9","url":"./bing.json"},{"revision":"aa4e438caeb2ef47db838f3201eec522","url":"./categories/index.html"},{"revision":"98c00fdb45896d68a08ec57d29b7df27","url":"./categories/前端/index.html"},{"revision":"6194c709f381e1ab02062aaacf767812","url":"./categories/学习笔记/index.html"},{"revision":"19f4257b11c1522ac1c881da33476b17","url":"./categories/工具/index.html"},{"revision":"242e71a1dd83df8c05b8953bb67f17f8","url":"./categories/系统/index.html"},{"revision":"ae5a4f81360a92ad7f7c7027a8e07489","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"ccd2f790c032bb90afcfb85d81baf567","url":"./feed/atom.xml"},{"revision":"0f35580c184a5eaa0f6f14c150dc3247","url":"./feed/rss2.xml"},{"revision":"d81e621464f7ef9b04555843fcca82d4","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"4deb2ed7cb39c5482cefe1e3e9508d91","url":"./page/2/index.html"},{"revision":"623a82ce9c8f1bcb1f962581b6fe92ce","url":"./posts/32c38e43/index.html"},{"revision":"7fd67b95e34dfe1cf2f05d8420d63869","url":"./posts/3749c4bb/index.html"},{"revision":"45c87d4558e10ddb296ba10175fed5ce","url":"./posts/3a68f348/index.html"},{"revision":"de381653e3d83c8181d43a6169fa5362","url":"./posts/3b5bdfda/index.html"},{"revision":"08fdb2c93c9a680362bf3212c419dcce","url":"./posts/3cdc0be5/index.html"},{"revision":"25496ccfc1e39108d56625e7bf8d492e","url":"./posts/40f24371/index.html"},{"revision":"d8b9fea1f1e22aec480f20b34a63ecc7","url":"./posts/8b672d54/index.html"},{"revision":"143f2d61bc6af6bc74f9af761f48620b","url":"./posts/aa8f87ba/index.html"},{"revision":"fe0e79cce546c8493eab3aa57eab4837","url":"./posts/b06cc6ec/index.html"},{"revision":"e4cbd6c4909b0a3aa3569a3a1a3decbe","url":"./posts/c16db384/index.html"},{"revision":"892a4ec2cb6c512b3efae8541d09261d","url":"./posts/c41c7d43/index.html"},{"revision":"b385829ef0c02b7eff42177b7f47da9b","url":"./posts/d29113f6/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"c9c8c1da112a1a980dd364c8bdcb6d1e","url":"./search.xml"},{"revision":"997ce77d063940720dda5caa69cc87ce","url":"./sitemap/sitemap.xml"},{"revision":"c464bf61d34189a98f7a412a225ec86a","url":"./tags/Arch-Linux/index.html"},{"revision":"b519ad8a3c61569202648c9d423d8ff3","url":"./tags/CSS/index.html"},{"revision":"43a90479c17a69499ff2ef9f14e118f9","url":"./tags/index.html"},{"revision":"26f69f4fdb05be86427f8c2a81cbf3ce","url":"./tags/JavaScript/index.html"},{"revision":"ef7a553014bf6d0d4bf2e28e23fa1002","url":"./tags/Linux/index.html"},{"revision":"e81145168724cf6350a53e36d58142ea","url":"./tags/Windows/index.html"},{"revision":"06b0650e5033463d753f6851eb9e7c5b","url":"./tags/双系统/index.html"},{"revision":"c6284e95a38674a8ab5a14efd6523a77","url":"./tags/数据结构/index.html"}], {
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
