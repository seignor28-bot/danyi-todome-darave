/* VILLAGE CONNECT TOGO – service worker minimal : le site se charge d'abord depuis Internet (toujours à jour),
   et reprend la dernière version enregistrée si la connexion est coupée. Les données (Firebase) ne sont jamais mises en cache. */
var CACHE='vct-v1';
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==CACHE}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}));
});
self.addEventListener('fetch',function(e){
  var r=e.request;
  if(r.method!=='GET')return;
  var u=new URL(r.url);
  if(u.origin!==self.location.origin)return;
  e.respondWith(
    fetch(r).then(function(res){
      if(res&&res.ok){var c=res.clone();caches.open(CACHE).then(function(ca){ca.put(r,c)})}
      return res;
    }).catch(function(){
      return caches.match(r).then(function(m){return m||caches.match('index.html')});
    })
  );
});
