const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a35e49990e63660070db68d6f5520803","url":"./404.html"},{"revision":"5ecbc349d6029b5897cd399e176138b4","url":"./archives/2023/03/index.html"},{"revision":"b2ab131aae680963b47f8d244de054b6","url":"./archives/2023/04/index.html"},{"revision":"daa4e88de1d87d64be827b02f2696db5","url":"./archives/2023/index.html"},{"revision":"497c98858d2caeac442e08c4d588a6b4","url":"./archives/2024/07/index.html"},{"revision":"0bb5cef37ae9c7d8e065bdccf23c944c","url":"./archives/2024/index.html"},{"revision":"fa98561287ab6995b8707d6daeda5bbc","url":"./archives/index.html"},{"revision":"1fa80028f5b2b443f48772c7cbb732f5","url":"./bangumis/index.html"},{"revision":"8e9f3df5b5ac8997ccb96529cd1ecded","url":"./bing.json"},{"revision":"1408bcdca4fff5f22014e136912864be","url":"./categories/index.html"},{"revision":"643a78f9d01db043eb358c2c8a546a7a","url":"./categories/前端/index.html"},{"revision":"9ce040e7a991edcec972d4110a0b6c90","url":"./categories/学习笔记/index.html"},{"revision":"10635ea12a323bb262924af3461cd577","url":"./categories/工具/index.html"},{"revision":"2a2c4f25db8752f42516a7c72f33b2e3","url":"./categories/系统/index.html"},{"revision":"33b12aaa5ea267c492ef38f4ed85ac91","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"465dc732a2ef6acee288824514188eca","url":"./feed/atom.xml"},{"revision":"7dfbbd519e6715eeab3c8d6da7c069b9","url":"./feed/rss2.xml"},{"revision":"bf823b49213240dc8d6153cc6d99e1e7","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"71139e73189d585dc00b8ca08985a228","url":"./posts/19711/index.html"},{"revision":"e1aa04695a1f7824fcc17213c7170f4a","url":"./posts/21725/index.html"},{"revision":"5c57580c5356d703d2c5280e7cac801e","url":"./posts/33107/index.html"},{"revision":"e1cdd7e3893c7dd05b52e2a5aea0bee1","url":"./posts/33510/index.html"},{"revision":"9081f7f6ca9fd27d7ac19d6c10b00a8c","url":"./posts/33511/index.html"},{"revision":"347d25dfd0116ac740aa47684e9622de","url":"./posts/3603/index.html"},{"revision":"33758321c1928d8339be767c64cc25e0","url":"./posts/3a68f348/index.html"},{"revision":"34f88943c7efc14be515f92656a60252","url":"./posts/50888/index.html"},{"revision":"023b01ff50c99526f84fccaa38b00068","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"17fbceef5c5481d0e07667a9152953e7","url":"./search.xml"},{"revision":"4694cfc531aca12e55a03eecd371dd97","url":"./sitemap/sitemap.xml"},{"revision":"a5c5a4c4a21a5c5d360aa3129597b9ac","url":"./tags/Arch-Linux/index.html"},{"revision":"f51ca97a96d0b2e308741a8f05cb6005","url":"./tags/index.html"},{"revision":"4247fbe57e7283218bf756442792100f","url":"./tags/JavaScript/index.html"},{"revision":"639018d8707841f34903bb9823734e85","url":"./tags/Linux/index.html"},{"revision":"8aff6180a7357bdf98bd35ff4487e4a9","url":"./tags/Windows/index.html"},{"revision":"b6b4b28e7259fcba1fb9dc810a8e5a64","url":"./tags/双系统/index.html"},{"revision":"83743fd186b9a60c0a3f34dde9e53087","url":"./tags/数据结构/index.html"}], {
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
