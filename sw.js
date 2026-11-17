/* Mechkawaii San : jeu hors ligne */
const CACHE='mk-8.32';
const FILES=["./", "index.html", "manifest.webmanifest", "og-image.png", "assets/hd/p1.png", "assets/hd/p3.png", "assets/hd/b4.png", "assets/hd/b24.png", "assets/hd/b21.png", "assets/hd/b11.png", "assets/hd/p2.png", "assets/hd/b2.png", "assets/hd/tiles.png", "assets/hd/b23.png", "assets/hd/b22.png", "assets/hd/p0.png", "assets/hd/b9.png", "assets/hd/p4.png", "assets/hd/b10.png", "assets/hd/b6.png", "assets/hd/b20.png", "assets/hd/b16.png", "assets/hd/b3.png", "assets/hd/b17.png", "assets/hd/b1.png", "assets/hd/b5.png", "assets/mix/tiles.png", "assets/brand/heart.png", "assets/brand/katakana.png", "assets/brand/logo.png", "assets/brand/topo.webp", "assets/brand/icon-180.png", "assets/brand/icon-512.png", "assets/heroes/sheep.png", "assets/heroes/duke.png", "assets/heroes/yamabato.png", "assets/heroes/banado.png", "assets/heroes/johanna.png", "assets/heroes/khurt.png", "assets/heroes/meimei.png", "assets/heroes/rasmus.png", "assets/heroes/faline.png", "assets/heroes/fuyu.png", "assets/heroes/rhoney.png", "assets/np/tiles.png", "fonts/vt323-latin-400-normal.woff2", "fonts/press-start-2p-latin-400-normal.woff2", "icons/icon-192.png", "icons/apple-touch-icon.png", "icons/icon-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const rq=e.request;if(rq.method!=='GET'||new URL(rq.url).origin!==location.origin)return;
  const page=rq.mode==='navigate'||rq.url.endsWith('index.html');
  if(page){ // page : réseau d'abord (mises à jour), sinon copie locale
    e.respondWith(fetch(rq).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));return r}).catch(()=>caches.match('index.html').then(r=>r||caches.match('./'))));return}
  e.respondWith(caches.match(rq,{ignoreSearch:true}).then(r=>r||fetch(rq).then(n=>{const cp=n.clone();caches.open(CACHE).then(c=>c.put(rq,cp));return n})));
});
