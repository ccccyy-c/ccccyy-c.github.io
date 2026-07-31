const CACHE_NAME = 'workbuddy-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/manifest.json',
  '/data/essay_trans_data.js'
];

// Install
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch - network first, fallback to cache
self.addEventListener('fetch', (e) => {
  // Skip API requests and sync endpoints
  if (e.request.url.includes('/api/') || e.request.url.includes('/sync_data/')) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Cache successful responses
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
