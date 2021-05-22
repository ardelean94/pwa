self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/pwa/pwa-examples/a2hs/',
       '/pwa/pwa-examples/a2hs/index.html',
       '/pwa/pwa-examples/a2hs/index.js',
       '/pwa/pwa-examples/a2hs/style.css',
       '/pwa/pwa-examples/a2hs/images/fox1.jpg',
       '/pwa/pwa-examples/a2hs/images/fox2.jpg',
       '/pwa/pwa-examples/a2hs/images/fox3.jpg',
       '/pwa/pwa-examples/a2hs/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
