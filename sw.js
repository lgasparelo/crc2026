/* CRC 2026: service worker mínimo. Rede primeiro; cache só como reserva se o sinal cair dentro do auditório. */
var C="crc2026-v6";
self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==C}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  var rq=e.request.mode==="navigate"?e.request:new Request(e.request,{cache:"no-cache"});
  e.respondWith(fetch(rq).then(function(r){var cp=r.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return r}).catch(function(){return caches.match(e.request)}));
});
