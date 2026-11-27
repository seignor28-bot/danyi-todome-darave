/* VILLAGE CONNECT TOGO – ajoute le nom, le logo et l'accès aux nouveaux espaces sur l'accueil.
   Ce fichier ne supprime ni ne modifie aucune fonction existante. */
(function(){
  try{
    document.title='VILLAGE CONNECT TOGO – Danyi Todomé Daravé';
    var brand=document.querySelector('.brand');
    if(brand){
      brand.innerHTML='<span style="display:flex;align-items:center;gap:10px"><img src="logo.png" alt="" style="height:36px;width:36px;border-radius:8px;display:block"><span>VILLAGE CONNECT TOGO<small style="display:block;font-size:11px;letter-spacing:.3px;opacity:.85;font-weight:600">Danyi Todomé Daravé</small></span></span>';
    }
    var hero=document.querySelector('#accueil .hero');
    if(hero && !document.getElementById('vct-acces')){
      var a='display:flex;align-items:center;justify-content:center;min-height:50px;margin-top:10px;border-radius:999px;font-weight:700;text-decoration:none;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;';
      var html=
      '<section id="vct-acces" style="max-width:640px;margin:0 auto;padding:22px 16px 6px;text-align:center">'+
        '<div style="padding:20px 16px;border-radius:16px;background:#073F3A;border:2px solid #D7AD55;color:#fff">'+
          '<h2 style="margin:0 0 8px;font-size:23px;color:#fff;border:0;padding:0">Le mot du fondateur</h2>'+
          '<p style="margin:0 0 14px;color:#EBD08F;font-family:system-ui,sans-serif;font-size:15px">Un message de Charles kokoroko à toute la communauté.</p>'+
          '<a href="mot-du-fondateur.html" style="'+a+'background:#D7AD55;color:#052C28;margin-top:0">Lire le message</a>'+
        '</div>'+
        '<h2 style="margin:26px 0 4px;font-size:23px">Nos espaces</h2>'+
        '<a href="vct-mobilite.html" style="'+a+'background:#073F3A;color:#fff">VCT Mobilité</a>'+
        '<a href="vct-hebergement.html" style="'+a+'background:#073F3A;color:#fff">VCT Hébergement</a>'+
        '<a href="vct-communaute.html" style="'+a+'background:#073F3A;color:#fff">VCT Communauté</a>'+
      '</section>';
      hero.insertAdjacentHTML('afterend',html);
    }
  }catch(e){}
})();
