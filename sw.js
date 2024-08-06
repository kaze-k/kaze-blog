const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b8f440be89cc29c7589002274c013eab","url":"./404.html"},{"revision":"49a3aba591c1a0f15661970c6e611e9f","url":"./archives/2023/03/index.html"},{"revision":"8a64d3fcfb043cec20d662d0b663c722","url":"./archives/2023/04/index.html"},{"revision":"db99df1a59f9f71860664f35cdd6a880","url":"./archives/2023/index.html"},{"revision":"d0b3f2c3db58b1df9a0fce6503f6b096","url":"./archives/2024/08/index.html"},{"revision":"952fca0833eb3bba624614c292e24075","url":"./archives/2024/index.html"},{"revision":"95375d94a804f4c48b7aca79c83cd02a","url":"./archives/index.html"},{"revision":"cfdd5e035f5791cbf10ba3db497e9f32","url":"./archives/page/2/index.html"},{"revision":"403de88f2a4cacf7c02307d66cf3e5e4","url":"./bangumis/index.html"},{"revision":"a0e4c0b7175c1d8b05c2ecf4970f3d68","url":"./bing.json"},{"revision":"c81ddc36e76b46debe335ab262ed3c62","url":"./categories/index.html"},{"revision":"1e6a74db8a8d206fae68e427ac7dad43","url":"./categories/前端/index.html"},{"revision":"d7bc578332d125babebf7a21ab444ae3","url":"./categories/学习笔记/index.html"},{"revision":"fd3a5ee72e8d3d1fe3c713935958fa11","url":"./categories/工具/index.html"},{"revision":"fe85953b70e0b3ba6f1f7c3b86faaca1","url":"./categories/数据库/index.html"},{"revision":"c657ac4dae304e5070d316eaee3d1b92","url":"./categories/系统/index.html"},{"revision":"52a8ae51a3cf81d54e53a8a661b12b1e","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"199d1d467e210aacd2052586fa57f68f","url":"./feed/atom.xml"},{"revision":"08ce09a679d090d3f4802dd237a42c01","url":"./feed/rss2.xml"},{"revision":"eeb315a282c173c78e1287a73981c6b3","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"6fec7c9ebc06e0ac46601771c5b6b1df","url":"./page/2/index.html"},{"revision":"efbc18a220e8f0e3c20e1efe0fe2dd9b","url":"./posts/19283750/index.html"},{"revision":"ecfeb09d76fe93a3a1a98aa9371c1c76","url":"./posts/32c38e43/index.html"},{"revision":"45d6e0da45903dac52a14e220239ca7a","url":"./posts/333261a7/index.html"},{"revision":"4996da3c6689d9aac15fe3cbb22ba05d","url":"./posts/3749c4bb/index.html"},{"revision":"dbf559245730192375d25d96bd38d4ab","url":"./posts/3a68f348/index.html"},{"revision":"5ec217d5a513f466530a5026322d965e","url":"./posts/3b5bdfda/index.html"},{"revision":"72beb459e2661c9c875c6655af326086","url":"./posts/3cdc0be5/index.html"},{"revision":"a71c92a137df12dd398b1c9a0d95970d","url":"./posts/40f24371/index.html"},{"revision":"ad8d672c5374aefd794c9d21629caba0","url":"./posts/7f2bc276/index.html"},{"revision":"02a36c43584526849497a0de40ea43ae","url":"./posts/8b672d54/index.html"},{"revision":"b85ea736a144cb3a409897a87234db5d","url":"./posts/aa8f87ba/index.html"},{"revision":"5d93c8adacf0702d7bcff97f902a9864","url":"./posts/b06cc6ec/index.html"},{"revision":"0a24bb6002bfa724a7d84c702930682e","url":"./posts/c16db384/index.html"},{"revision":"bb4c0ce254517eb53165da81095c78b4","url":"./posts/c41c7d43/index.html"},{"revision":"988a9d3dad161febd6d35782aefddb49","url":"./posts/d29113f6/index.html"},{"revision":"49cabc0c1f6a9c7a72fb7b6736d8c970","url":"./posts/f85ddf3d/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"cc10c7b8792fe4ea516729d156807dcb","url":"./search.xml"},{"revision":"4dee0a543b6d388826f269b75fe28532","url":"./sitemap/sitemap.xml"},{"revision":"5fd6d6d2515b2925db6df21a13610ec0","url":"./tags/Arch-Linux/index.html"},{"revision":"e148395d498d7ebd6d9cb7f055270806","url":"./tags/CSS/index.html"},{"revision":"0ea1a14a234a4d51ca0b7448e5abef79","url":"./tags/index.html"},{"revision":"6a924c62273721396b724fb778a4b6a1","url":"./tags/JavaScript/index.html"},{"revision":"6b213b95207dd4b570bca2fa80044cc4","url":"./tags/Linux/index.html"},{"revision":"59f53ac26f6e6750c914ed859a7bfc52","url":"./tags/MySQL/index.html"},{"revision":"d1d5eec61fb2f5345f49164af1e06681","url":"./tags/Windows/index.html"},{"revision":"054db5229fd4e5d3dbecb33ce396fadd","url":"./tags/双系统/index.html"},{"revision":"d0721b1c9627c50d8d01ef47a2dbe205","url":"./tags/数据结构/index.html"},{"revision":"6d4d328fc933b0547f12fbdf652df065","url":"./tags/浏览器/index.html"}], {
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
