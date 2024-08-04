const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"14705d0011fb3263005756fabee41ead","url":"./404.html"},{"revision":"2c36c6fe0100b2da42afd013ccd2db5d","url":"./archives/2023/03/index.html"},{"revision":"9a08ee26fd4d8681fb81509fdc33e6f1","url":"./archives/2023/04/index.html"},{"revision":"ab567e15f2f9882c2ff9d7ce0465df12","url":"./archives/2023/index.html"},{"revision":"0e032563418d8ef24e45f1626754d05c","url":"./archives/2024/08/index.html"},{"revision":"7e22119d518f9e1e6b0692daf50e5553","url":"./archives/2024/index.html"},{"revision":"9d5100d819ac0de63b6900aa530bb36e","url":"./archives/index.html"},{"revision":"e43e95045b4812240d0b2d2c3627e647","url":"./archives/page/2/index.html"},{"revision":"fa024a1da878071b5411a34446611b02","url":"./bangumis/index.html"},{"revision":"17a4c8df8af45bc07dd3c36865dce101","url":"./bing.json"},{"revision":"91fb750676fedba2d7d34e09b11db6ff","url":"./categories/index.html"},{"revision":"ea7638bd312e8577240d0399b0eca44f","url":"./categories/前端/index.html"},{"revision":"bee72abf0a6a911ad8a2df1721a9c6a3","url":"./categories/学习笔记/index.html"},{"revision":"f7c6ecb8a47a16959dfa8d77b56c2c4c","url":"./categories/工具/index.html"},{"revision":"81be1aba9a2e95c9f8882efa5b93f0e2","url":"./categories/系统/index.html"},{"revision":"5e855fff745db9448821f8d0fa00e2bf","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4dc3cf796bd88c6f250f8a7c46aa7139","url":"./feed/atom.xml"},{"revision":"d12c73baddba86cf0db70d75edbe598f","url":"./feed/rss2.xml"},{"revision":"5d698c50d4a736e0ac517b9ebc0ef456","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"092700ba59f9cab9cbcce85ccea6383c","url":"./page/2/index.html"},{"revision":"75021078feeb92733dc330147f4f51d3","url":"./posts/19711/index.html"},{"revision":"cbc65cf5a0c5590c35fd7e7ca59baa31","url":"./posts/21725/index.html"},{"revision":"ff203a9f787dcf8a40a521857e0b6fbb","url":"./posts/33107/index.html"},{"revision":"e2e52b583db6c16a4ff53c3399748ece","url":"./posts/33510/index.html"},{"revision":"0f852f62d05f2c050111a4911197d9c9","url":"./posts/33511/index.html"},{"revision":"b5cb32bbf051e7e9ce05dbc06fa6e829","url":"./posts/3603/index.html"},{"revision":"037ce2a5b3a8f6c5215c24e32dc030a5","url":"./posts/3749c4bb/index.html"},{"revision":"1fce289121b345e99786476c643852ad","url":"./posts/3a68f348/index.html"},{"revision":"7a459aae8232c3cfa569a47a72296878","url":"./posts/3b5bdfda/index.html"},{"revision":"baa5a94c5a67d68facb2db7a53922209","url":"./posts/50888/index.html"},{"revision":"5712ebb95d019cbf5307f68477a9faa1","url":"./posts/61844/index.html"},{"revision":"002537fc984296ae4c466c15954055d5","url":"./posts/8b672d54/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"4207973edeb1061cf2c5506b1a25aa81","url":"./search.xml"},{"revision":"8aaffceaa80a9bfece369e9525e1b17d","url":"./sitemap/sitemap.xml"},{"revision":"46bc4e356b8129c3d330f080e8a66cd8","url":"./tags/Arch-Linux/index.html"},{"revision":"f7eaa4f6cafe5996f0287db2caf8d3a9","url":"./tags/CSS/index.html"},{"revision":"a5e9a4461a0219e272814b59c54109d9","url":"./tags/index.html"},{"revision":"88e6932e870d84fd31999fd32ed57e93","url":"./tags/JavaScript/index.html"},{"revision":"7cac7b16588477ff2d5c3beedc54cff0","url":"./tags/Linux/index.html"},{"revision":"fa655141f01ea12efb7b65f7b2c041bf","url":"./tags/Windows/index.html"},{"revision":"9a046daf5577220223b3642e74f1a095","url":"./tags/双系统/index.html"},{"revision":"80535f502fa8f050b079676397a76fbc","url":"./tags/数据结构/index.html"}], {
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
