/* VILLAGE CONNECT TOGO – rend le site installable (icône d'écran d'accueil avec le logo).
   Ne supprime ni ne modifie aucune fonction existante. */
(function(){
  try{
    var h=document.head;
    function add(tag,attrs){var el=document.createElement(tag);for(var k in attrs)el.setAttribute(k,attrs[k]);h.appendChild(el)}
    if(!document.querySelector('link[rel="manifest"]'))add('link',{rel:'manifest',href:'manifest.json'});
    if(!document.querySelector('link[rel="apple-touch-icon"]'))add('link',{rel:'apple-touch-icon',href:'vct-icon-192.png'});
    if(!document.querySelector('meta[name="theme-color"]'))add('meta',{name:'theme-color',content:'#073F3A'});
    if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}
    var ev=null;
    window.addEventListener('beforeinstallprompt',function(e){
      e.preventDefault();ev=e;
      if(document.getElementById('vct-install')||sessionStorage.getItem('vct-install-non'))return;
      var d=document.createElement('div');d.id='vct-install';
      d.style.cssText='position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:9999;background:#052C28;border:2px solid #D7AD55;border-radius:16px;padding:12px;display:flex;align-items:center;gap:10px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#fff';
      d.innerHTML='<img src="vct-icon-192.png" alt="" style="width:44px;height:44px;border-radius:10px"><span style="flex:1;font-size:14px;line-height:1.3"><b>Installer VCT</b><br>Ajoutez l’application à votre écran d’accueil.</span><button id="vct-oui" style="background:#D7AD55;color:#052C28;border:0;border-radius:999px;padding:0 16px;min-height:44px;font-weight:700;font-size:14px">Installer</button><button id="vct-non" aria-label="Fermer" style="background:none;border:0;color:#EBD08F;font-size:22px;min-width:36px;min-height:44px">×</button>';
      document.body.appendChild(d);
      document.getElementById('vct-oui').onclick=function(){d.remove();if(ev){ev.prompt();ev=null}};
      document.getElementById('vct-non').onclick=function(){d.remove();try{sessionStorage.setItem('vct-install-non','1')}catch(x){}};
    });
    window.addEventListener('appinstalled',function(){var d=document.getElementById('vct-install');if(d)d.remove()});
  }catch(e){}
})();
