const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5a91f30a063c2bdc2133cb0d3d3d1ff2","url":"./404.html"},{"revision":"73b58f5b1a3f9034bd0046d72f4cd9c7","url":"./archives/2023/03/index.html"},{"revision":"5e78019407bee41ea8a53cd6eb037cda","url":"./archives/2023/04/index.html"},{"revision":"875068b3ba53a3a0841b145c43447ea4","url":"./archives/2023/index.html"},{"revision":"38c9563f4153620295e5e19dbff138c1","url":"./archives/2024/08/index.html"},{"revision":"baca31f6be47e83fba134785b4771385","url":"./archives/2024/index.html"},{"revision":"6ca5c077464de3f1e71d89af590bc946","url":"./archives/index.html"},{"revision":"33b42ddb7c904956a2a1546a8a0790f8","url":"./archives/page/2/index.html"},{"revision":"23e8cb6189528cc3c1ddbd70f65b6467","url":"./bangumis/index.html"},{"revision":"df1cd6ec279625ec9c79fbb0e8ecb435","url":"./bing.json"},{"revision":"87bf7d143884775d3faccba9e6995a05","url":"./categories/index.html"},{"revision":"3d025e89032782c7cb2ad855594f06fd","url":"./categories/前端/index.html"},{"revision":"0d51916f11ede4ca6d7227bf636535ee","url":"./categories/学习笔记/index.html"},{"revision":"c6970ae9c636442cd42d198a88bac796","url":"./categories/工具/index.html"},{"revision":"53ee630e53e50dc9530f991063083f0b","url":"./categories/系统/index.html"},{"revision":"22ba915fd356712be486a93fe16940d5","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2139520706641d3cbe6a5b384fe54ccb","url":"./feed/atom.xml"},{"revision":"885ba34a3c6f113614a3ea34abef456e","url":"./feed/rss2.xml"},{"revision":"0471f5c98b1988119af9e2c31c6d5f86","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"946e6333513ae285bbb29224961e2879","url":"./page/2/index.html"},{"revision":"7e1426390d9309951d6ce6cc6c475b73","url":"./posts/32c38e43/index.html"},{"revision":"a9b70f6e583e75892ef906c850f7d088","url":"./posts/3749c4bb/index.html"},{"revision":"786d8ae38dbeb63ebbaa4a1ec6c35ad1","url":"./posts/3a68f348/index.html"},{"revision":"ed9210b498f80b76146b84a248f5305f","url":"./posts/3b5bdfda/index.html"},{"revision":"a7ac66c3c0e078fb7d43580dcf6a1c5e","url":"./posts/3cdc0be5/index.html"},{"revision":"7d80178c7e36f50f1f080d946979b337","url":"./posts/40f24371/index.html"},{"revision":"c63da414f163a2c41e64e31548b0d997","url":"./posts/8b672d54/index.html"},{"revision":"926938bf2a04003553df861a3e409374","url":"./posts/aa8f87ba/index.html"},{"revision":"da2122a143da6f0c1e34ec2a0a83c9ce","url":"./posts/b06cc6ec/index.html"},{"revision":"bd3244bfb2a3e2d3e7cfb49804ab331a","url":"./posts/c16db384/index.html"},{"revision":"7cb3cc81d90f2ace465ecc689a5cb896","url":"./posts/c41c7d43/index.html"},{"revision":"0d3125c518b426a4223edc5ae7923b8a","url":"./posts/d29113f6/index.html"},{"revision":"4634e289057ff3fb715e6b9ba0887c2a","url":"./posts/f85ddf3d/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"344b11cfef02e2d8977de6129fc525ed","url":"./search.xml"},{"revision":"be74f1ba7cdc1c1f4f28705d8c0956c1","url":"./sitemap/sitemap.xml"},{"revision":"8c0a7c855b7b48c6817b27b529c2a926","url":"./tags/Arch-Linux/index.html"},{"revision":"bdbe19017e56ac30a53603d60c549224","url":"./tags/CSS/index.html"},{"revision":"1816f2b4bba704a0f41f06ca224b8d17","url":"./tags/index.html"},{"revision":"12826e181027f5463682418f5002a9e6","url":"./tags/JavaScript/index.html"},{"revision":"4afdd671cb40df854492040ca6160fd4","url":"./tags/Linux/index.html"},{"revision":"2762fc6c033e674c39128c19cd6d8a5a","url":"./tags/Windows/index.html"},{"revision":"1d4cfcbf25033a2c7a648042981904b3","url":"./tags/双系统/index.html"},{"revision":"70f4bc82f652cf785828a7bc0fa361e9","url":"./tags/数据结构/index.html"}], {
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
