const CACHE_NAME = 'odr-timer-v3';
const urlsToCache = [
    '/odr-timer/',
    '/odr-timer/index.html',
    '/odr-timer/styles.css',
    '/odr-timer/app.js',
    '/odr-timer/manifest.json',
    '/odr-timer/icons/icon-192.svg',
    '/odr-timer/icons/icon-512.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
