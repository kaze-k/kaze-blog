const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"04957a71cd1b9c56737ac0899f3f89f9","url":"./404.html"},{"revision":"599331a210aac32d0bc1abeddb02389a","url":"./archives/2023/03/index.html"},{"revision":"cd59c86d557aac5af023e11f435839ab","url":"./archives/2023/04/index.html"},{"revision":"5cc6dcaec04adc99c061670449da6bab","url":"./archives/2023/index.html"},{"revision":"110a4873197fdddc825a23acd87d38f8","url":"./archives/2024/07/index.html"},{"revision":"80cf8c609fc10519ab04574f5e86c4d4","url":"./archives/2024/index.html"},{"revision":"b34cc756088909697fcf3f163c0b0fda","url":"./archives/index.html"},{"revision":"c0cd34f3ee3a52b99932a606f5a4b113","url":"./bangumis/index.html"},{"revision":"c0c399bbf8540087f35063d9d2bc9401","url":"./bing.json"},{"revision":"598c29c6cbb8e15b001e667135fa5320","url":"./categories/index.html"},{"revision":"cee2da050aa3902a5771b227cbc83b25","url":"./categories/前端/index.html"},{"revision":"d5d1256312e492f59189f923843fc2bc","url":"./categories/学习笔记/index.html"},{"revision":"d1dd00b4f0270533fe36f7b620c62739","url":"./categories/工具/index.html"},{"revision":"daf2c342983afe22f83ec73cea7ee299","url":"./categories/系统/index.html"},{"revision":"57afad8e14a6355d1883a693baa109a6","url":"./cinema/index.html"},{"revision":"5d7a4dfafa4e6306359b5c63ddf0a78c","url":"./css/custom/admonition.css"},{"revision":"8fd1a90908a58c3c94cfa9b9404a8fa9","url":"./css/custom/container.css"},{"revision":"031266f9e0cd047d1be8741a6b57bcc4","url":"./css/index.css"},{"revision":"8ae0df7bac0ab2a63a899ffcdd1d4d98","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"465dc732a2ef6acee288824514188eca","url":"./feed/atom.xml"},{"revision":"7dfbbd519e6715eeab3c8d6da7c069b9","url":"./feed/rss2.xml"},{"revision":"8f10181dd3032df7210e2e25ec7733e5","url":"./index.html"},{"revision":"3b1297421f9cfbc1b9da64ccb971aee5","url":"./js/custom/animation.js"},{"revision":"4643fd565d49109ce0e37222d428ee28","url":"./js/custom/screenfull.js"},{"revision":"c725a17834730ace1d1e6bdecda6a038","url":"./js/custom/title.js"},{"revision":"dc6dfb767929a8040eb599b92768e38f","url":"./js/custom/utils.js"},{"revision":"7023de0baae39c03b868dd8c247439b0","url":"./js/main.js"},{"revision":"733413d39f04a431f2387166bbae2aea","url":"./js/request.js"},{"revision":"acd1d222d372950d5eece7edff473c7b","url":"./js/runtime/runtime.js"},{"revision":"b36f7605e8a31f588191879bf3dbd611","url":"./js/search/algolia.js"},{"revision":"cee8444728cfafe1459574e6eea7d19d","url":"./js/search/local-search.js"},{"revision":"908991af20b833594941531bd3aa1d76","url":"./js/swiper_init.js"},{"revision":"634643bf68ab98d27a2e63830d7a2a7d","url":"./js/tw_cn.js"},{"revision":"ab0980e145518832dde8c4d230ded981","url":"./js/utils.js"},{"revision":"b571033cf07b48720fc20917bbf2c125","url":"./posts/19711/index.html"},{"revision":"fcce8960457d44b2b639cfb6f1d84eaf","url":"./posts/21725/index.html"},{"revision":"0af7d0495e1e12029f61e2e5a8fa687d","url":"./posts/33107/index.html"},{"revision":"99de265fabc7c9888852b87c8952a118","url":"./posts/33510/index.html"},{"revision":"d628a1485f5c1792a3b0883f87e56fe8","url":"./posts/33511/index.html"},{"revision":"c5d99a5c5a0dd4c91650e23c7fe4d3fe","url":"./posts/3603/index.html"},{"revision":"7c753a72b15617939cc919e2ad40957f","url":"./posts/3a68f348/index.html"},{"revision":"3b5b4302725738e1e025d56a81ac93ed","url":"./posts/50888/index.html"},{"revision":"1077cdfefa6a2f55bc10f621fd314a9a","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"73a8de8ad93ce7a87d5cd5545a6c9584","url":"./search.xml"},{"revision":"54d993d3e15c44a8da4717d25e3ddf5c","url":"./sitemap/sitemap.xml"},{"revision":"3260676240d114e4909c49b6a416009a","url":"./tags/Arch-Linux/index.html"},{"revision":"d88620c18656eeefafe42ded7602c5e6","url":"./tags/index.html"},{"revision":"6a78a629fc2a94e6e3ec637fab8ecc32","url":"./tags/JavaScript/index.html"},{"revision":"224547d2087f5ea72ef646b558c06e95","url":"./tags/Linux/index.html"},{"revision":"3ccac0ecf73a40498bf255c21380af35","url":"./tags/Windows/index.html"},{"revision":"987e978826529eb63c3f82bd15ce7760","url":"./tags/双系统/index.html"},{"revision":"8510091cc9f65f1c4de32f4403fcba1b","url":"./tags/数据结构/index.html"}], {
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
