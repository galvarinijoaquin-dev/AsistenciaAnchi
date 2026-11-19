// Necesario para que el celular permita instalar la pagina como app.
// No guarda nada: siempre pide todo a internet para que las marcadas sean en tiempo real.
// La pagina en si se pide sin cache, para que nunca se abra una version vieja.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
    if (e.request.mode === 'navigate') e.respondWith(fetch(e.request, { cache: 'no-store' }));
    else e.respondWith(fetch(e.request));
});
