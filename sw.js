const CACHE_NAME='spps-tawau-v3';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.url.includes('firebase')||e.request.url.includes('googleapis'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});