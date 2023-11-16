// Имя кэша для версии сервис-воркера
const CACHE_NAME = 'my-app-cache-v1';

// Список ресурсов для кэширования
const cacheUrls = ['/', 'index.html', 'css/', 'fonts/', 'img/', 'js/'];

// Установка сервис-воркера
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheUrls);
    }),
  );
});

// Активация сервис-воркера
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        }),
      );
    }),
  );
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request).then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== 'basic'
          ) {
            console.error('Fetch error for', event.request.url, 'Status:', networkResponse.status);
            return networkResponse;
          }

          const clonedResponse = networkResponse.clone();
          // eslint-disable-next-line no-undef
          caches.open(RUNTIME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });

          return networkResponse;
        });
      })
      .catch((error) => {
        console.error('Cache match error:', error);
      }),
  );
});
