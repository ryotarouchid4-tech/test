const CACHE_NAME = 'my-app-cache-v1';
const FILES_TO_CACHE = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (evt) => {
  self.skipWaiting();
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.method !== 'GET') return;
  evt.respondWith(caches.match(evt.request).then((resp) => resp || fetch(evt.request)));
});
