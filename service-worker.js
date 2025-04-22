
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("dosecalc-cache").then(function(cache) {
      return cache.addAll([
        "/nursing_drug_calculator.html",
        "/manifest.json",
        "/service-worker.js"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
