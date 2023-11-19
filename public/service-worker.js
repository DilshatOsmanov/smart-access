// Имя кэша для версии сервис-воркера
const CACHE_NAME = 'my-app-cache-v2';

// Установка и активация сервис-воркера
self.addEventListener('install', (event) => {
  console.log('Caching...');
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // Кэширование известных ресурсов при установке
        return cache.addAll(['/', 'index.html']);
      })
      .then(() => self.skipWaiting()), // Активация сервис-воркера после установки
  );
});

// Активация сервис-воркера при установке
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          }),
        );
      })
      .then(() => self.clients.claim()), // Установка сервис-воркера в качестве активного на всех страницах
  );
});

// Обработка запросов с использованием стратегии Cache First
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
            return networkResponse;
          }

          const clonedResponse = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
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
