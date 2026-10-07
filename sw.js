// Cache leve para abrir offline.
const C='faz-f136010b', CORE=["./", "index.html", "assets/css/style.css", "assets/js/main.js", "assets/fonts/sora-latin-var.woff2", "assets/fonts/inter-latin-var.woff2", "brand/logo-light.svg", "brand/logo-dark.svg", "favicon.svg", "assets/img/cc-bloqueado-cel.webp", "assets/img/cc-cadastro-desk.webp", "assets/img/cc-venda-cel.webp", "assets/img/cc-venda-desk.webp", "assets/img/gateway-ia-desk.webp", "assets/img/modelo-academia.webp", "assets/img/modelo-barbearia.webp", "assets/img/modelo-cardapio.webp", "assets/img/modelo-dentista.webp"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request; if(r.method!=='GET'||new URL(r.url).origin!==location.origin) return;
 const save=res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res};
 if(r.mode==='navigate'||r.destination==='document'){e.respondWith(fetch(r,{cache:'no-store'}).then(save).catch(()=>caches.match(r).then(m=>m||caches.match('./'))));return}
 e.respondWith(caches.match(r).then(m=>{const f=fetch(r).then(save).catch(()=>m);return m||f}))});
