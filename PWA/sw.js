self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-shell").then(cache => {
            return cache.add("/");
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.response).then(response => {
            return response || fetch(event.request);
        })
    );
})