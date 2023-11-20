var cacheName = 'bemna-LAstLAP-2013';
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/',
        // all file which you need to cache at start - static caching
      ]);
    }),
  );
});
// To delete the old chache if name changed it will delete old chache
self.addEventListener('activate', (event) => {
  console.info('Event: Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    // Cache first approch
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    }),
  );
});
self.addEventListener('sync', function (event) {
  if (event.tag == 'myFirstSync') {
    console.log('synching');
  }
  console.log('test');
});
