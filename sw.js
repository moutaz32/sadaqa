const CACHE_NAME = 'sadaqa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://img.icons8.com/color/512/quran.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&family=Amiri:wght@400;700&display=swap'
];

// 1. تثبيت الخدمة وتخزين الملفات
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. تشغيل الملفات حتى بدون إنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
