// sw.js
self.addEventListener('install', event => {
  console.log('📦 Service Worker installing...');
});

self.addEventListener('fetch', event => {
  // Optional: cache logic can go here later
});
