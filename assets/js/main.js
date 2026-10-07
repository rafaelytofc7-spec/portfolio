// Portfólio: ano no rodapé; botão flutuante some perto dos CTAs; service worker.
(function(){
  var y=document.getElementById('ano'); if(y) y.textContent=new Date().getFullYear();
  var fab=document.querySelector('.fab');
  if(fab&&'IntersectionObserver' in window){
    var seen=new Set();
    var io=new IntersectionObserver(function(es){es.forEach(function(e){ e.isIntersecting?seen.add(e.target):seen.delete(e.target); }); fab.classList.toggle('hide',seen.size>0);});
    document.querySelectorAll('.hero .btn-wa,.final').forEach(function(el){io.observe(el)});
  }
  if('serviceWorker' in navigator && location.protocol==='https:'){ navigator.serviceWorker.register('sw.js').catch(function(){}); }
})();
