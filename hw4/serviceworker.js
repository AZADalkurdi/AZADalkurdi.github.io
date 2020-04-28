const cacheName = 'v2';



self.addEventListener('install', e => {
console.log('service Worker: Instaled');

});
self.addEventListener('activate', e => {
    console.log('service Worker: Activated');

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName){
                        console.log('sw:clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
     );
    });




self.addEventListener('fetch' , e => {
        console.log("fitching");
        e.respondWith(
            fetch(e.request)
            .then(res => {
                const resClone = res.clone();

                caches
                .open(cacheName)
                .then(cache => {
                    cache.put(e.request, resClone);
                });
                return res;
            }).catch(err => caches.match(e.request).then(res => res))
        );
    });

  
/*
const cacheName = 'v2';

const cacheAssest = [
    'index.html',
    'hw4.js',
    'style.css', 


];



self.addEventListener('install',e => {
console.log('service Worker: Instaled');

e.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
        console.log('SW:');
        cache.addAll(cacheAssest);
    })
    .then(() => self.skipWaiting())
);
});



self.addEventListener('fetch' , e => {
        console.log("fitching");
        e.respondWith(
            fetch(e.request).catch(() => caches.match(e.request)));
    });

    self.addEventListener('activate', e => {
        console.log('service Worker: Activated');
    
        e.waitUntil(
            caches.keys().then(cacheName => {
                return Promise.all(
                    cacheName.map(cache => {
                        if (cache !== cacheName){
                            console.log('sw:clearing old cache');
                            return caches.delete(cache);
                        }
                    })
                );
            })
         );
        });
        */
