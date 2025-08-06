const CACHE_NAME = "buitems-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./buitems.css",
  //"./buitems.js",
  "./BUITEMS tab logo.ico",
  "./backgrond for laptop.png",
  "./A4 buitems fp.png",
  "./a4 buitems fp 1.png",
  "./A4 butiems frontpage 2.png",
  "./a4 butiems frontpages 3.png",
  "./background for mobile.png",
  "./buitems logo.png",

  // External calculator & page HTML files
  "./aggregate.html",
  "./GPA calculator.html",
  "./CGPA calculator.html",
  "./timetable generate.html",
  "./GenFrontpage.html",
  "./faculty and dep.html",

  // External assets (icons etc.)
  "https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css",
];

// Install the service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Intercept requests and serve cached files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
