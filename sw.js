
const cacheName = "app-shell-resources-v1";
const assets = [
  "/",
  'index.html',
  'pages/about.html',
  'pages/contact.html',
  'js/app.js',
  'js/common.js',
  'js/materialize.min.js',
  'css/styles.css',
  'css/materialize.min.css',
  'images/pkcontacts.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v118/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]

self.addEventListener('install', evt => {
  console.log('The service worker is being installed.', evt);
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("Opened cache");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  console.log('The service worker is being activated.', evt);
});

// fetch event
self.addEventListener('fetch', evt => {
  console.log('The service worker is serving the asset.', evt);
  // Checking if the cache contains the request. hmm very cool.
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      // console.log("Cache response", cacheRes);
      return cacheRes || evt.request;
    })
  );
});