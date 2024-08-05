const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f6293fdb711abb68d1b0b2076ee6b713","url":"./404.html"},{"revision":"24c3390bc8f232b35be25379d4add767","url":"./archives/2023/03/index.html"},{"revision":"bfcf190081a72d715919bb26d914c536","url":"./archives/2023/04/index.html"},{"revision":"91180f5e9c22f93771beb0cd83e8423e","url":"./archives/2023/index.html"},{"revision":"3a62668cbf5115c34f7484d78949f9d0","url":"./archives/2024/08/index.html"},{"revision":"8a4ae2065646c08fd80fbe7d55ff3ae7","url":"./archives/2024/index.html"},{"revision":"82cba1b370e5861911a6da373c86bbe6","url":"./archives/index.html"},{"revision":"771b29ed252648d16ac0908ec935546a","url":"./archives/page/2/index.html"},{"revision":"61972aa80007edcdb7f67b64b2619f93","url":"./bangumis/index.html"},{"revision":"a6f76614a8f388ef3cf067ff7859f3c9","url":"./bing.json"},{"revision":"cd9900d5374fc6d7691635a7153900a1","url":"./categories/index.html"},{"revision":"5834cbba1a481038569f67ae2c255960","url":"./categories/前端/index.html"},{"revision":"467f4ed9725b8c84e1c5397788ea0268","url":"./categories/学习笔记/index.html"},{"revision":"598ac88b78301b429f5811d39ce7f2f2","url":"./categories/工具/index.html"},{"revision":"ca4594a6b836a2c3beff6439080378d5","url":"./categories/系统/index.html"},{"revision":"d87bb86c3945b3d50fba816c11876d2d","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"fcfc22c46b153597624085350eb9952d","url":"./css/index.css"},{"revision":"58e33d7647d7a1ca78b60f325bc03f0e","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"070f6241e5cada18008512f960e0026b","url":"./feed/atom.xml"},{"revision":"5430b0b8bc841929eac340d3e0e0b189","url":"./feed/rss2.xml"},{"revision":"b7f99cf767d4a9d19dc8add4552bc5d0","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"0ef006f429fcd6a323bdf76eebc7294e","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"0176a26d2ff8d610a180b6f89e2d8ff1","url":"./js/main.js"},{"revision":"0d0cdee24f1dc6e635719e0a456b0951","url":"./js/request.js"},{"revision":"2569c6851c8fd28faaeba1cb35237835","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"c243b045c6c1bd64cf0c6436fcb915aa","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"5b9a0bab7a3ee4788352a42730891769","url":"./js/utils.js"},{"revision":"abdeead9e06d681b717e654003029ea4","url":"./page/2/index.html"},{"revision":"01439f3837aafaaf3c08dfa16b8a0bcb","url":"./posts/0/index.html"},{"revision":"46afbfa0af01bd46ddefdae797b53d60","url":"./posts/32c38e43/index.html"},{"revision":"af180635084ec8abc5e2307cadb3104b","url":"./posts/3749c4bb/index.html"},{"revision":"09524fd250b8ea629185f17499345964","url":"./posts/3a68f348/index.html"},{"revision":"b655cbc9115c7d41f3bb9369ff092edd","url":"./posts/3b5bdfda/index.html"},{"revision":"44897c067c54d0cab9f9e0874af9c7f2","url":"./posts/3cdc0be5/index.html"},{"revision":"5497bc3f1258366674bdd2274097877f","url":"./posts/40f24371/index.html"},{"revision":"302de44cdd8b63ddbc22090c6ba203e1","url":"./posts/8b672d54/index.html"},{"revision":"04aaca598a19b49328c05b95abbbb4d5","url":"./posts/aa8f87ba/index.html"},{"revision":"d4cc74745c313c3d58b0e9baefff21ec","url":"./posts/b06cc6ec/index.html"},{"revision":"812257f190d59e6e80796c99fbf1f6c2","url":"./posts/c16db384/index.html"},{"revision":"18e982f5bd8ca6046af9138467c1182a","url":"./posts/c41c7d43/index.html"},{"revision":"0ec65513c8e942c3e3e7b9ba1a94e94d","url":"./posts/d29113f6/index.html"},{"revision":"d3f1ac88046280c29a2d6c6fd01f9b38","url":"./posts/f85ddf3d/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"20b07b759e1855302844f6798cf2da5b","url":"./search.xml"},{"revision":"531ec94f13e9169dcfaa38704ac4cb89","url":"./sitemap/sitemap.xml"},{"revision":"c947f89c79df211db0e9d38ef25be805","url":"./tags/Arch-Linux/index.html"},{"revision":"13a1d472f27dae20b962d9a7d809fd13","url":"./tags/CSS/index.html"},{"revision":"a0480c407fb0dbfe931c3b46b9e53982","url":"./tags/index.html"},{"revision":"c6320558c2a076a623c7a33afaad1aa5","url":"./tags/JavaScript/index.html"},{"revision":"76f77e9d70f5b8b541e5f7de276b01e6","url":"./tags/Linux/index.html"},{"revision":"2cb990dcb7e5d2f23044a0fb86480c2c","url":"./tags/Windows/index.html"},{"revision":"9b43f639343930d1badf15f582bc6a03","url":"./tags/双系统/index.html"},{"revision":"c6996245635c0335e25b551897c20f06","url":"./tags/数据结构/index.html"}], {
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
