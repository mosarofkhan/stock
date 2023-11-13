const CACHE_NAME = 'offline-gallery-v1';
const urlsToCache = [
    '/',
    './asset/Flowers/Plane_Flowers/Normal_Flowers.html',
    // Add other files you want to cache (CSS, JavaScript, images)
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })
    );
});
