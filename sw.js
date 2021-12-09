// console.log('Hello from the service worker.');

self.addEventListener('install', evt => {
  console.log('The service worker is being installed.', evt);
});

// activate event
self.addEventListener('activate', evt => {
  console.log('The service worker is being activated.', evt);
});