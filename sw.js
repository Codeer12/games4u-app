importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/index.html',
       'https://blog.se-gaming.tk',
       'https://blog.se-gaming.tk/2019/05',
       'https://blog.se-gaming.tk/2019/06/rolling-green-in-florida-highly.html',
       'https://blog.se-gaming.tk/2019/06/removal-and-explantion.html',
       'https://blog.se-gaming.tk/2019/05/jossaya-and-his-adventures-preview-post.html',
       'https://blog.se-gaming.tk/2019/05/fk-alex-pt-3.html',
       'https://blog.se-gaming.tk/2019/06'
     ]);
   })
 );
});
