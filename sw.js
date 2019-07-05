importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/2019/06',
       '/2019/05',
       '/2019/06/rolling-green-in-florida-highly.html',
       '/2019/06/removal-and-explantion.html',
       '/2019/05/jossaya-and-his-adventures-preview-post.html',
       '/2019/05/fk-alex-pt-3.html'
     ]);
   })
 );
});
