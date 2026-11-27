/* VILLAGE CONNECT TOGO – liens juridiques dans le pied de page et près de l'inscription.
   Ne supprime ni ne modifie aucune fonction existante. */
(function(){
  try{
    var L=[["mentions-legales.html","Mentions légales"],["charte.html","Charte communautaire"],["confidentialite.html","Politique de confidentialité"],["cgu.html","Conditions générales d’utilisation"],["propriete-intellectuelle.html","Propriété intellectuelle"],["notre-engagement.html","Notre engagement"]];
    var f=document.querySelector('footer');
    if(f && !document.getElementById('vct-pied')){
      var h='<div id="vct-pied" style="margin-top:14px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:13px;line-height:2">';
      for(var i=0;i<L.length;i++){h+='<a href="'+L[i][0]+'" style="color:#EBD08F;display:inline-block;margin:0 8px;padding:4px 0">'+L[i][1]+'</a>';}
      h+='<br>© VILLAGE CONNECT TOGO — Initiative fondée par Charles kokoroko</div>';
      f.insertAdjacentHTML('beforeend',h);
    }
    var form=document.getElementById('form');
    if(form && !document.getElementById('vct-info')){
      form.insertAdjacentHTML('afterbegin','<p id="vct-info" style="font-size:14px;margin:0 0 10px">Avant de vous inscrire, lisez la <a href="confidentialite.html" target="_blank" rel="noopener">politique de confidentialité</a>. L’inscription est volontaire.</p>');
    }
    var s=document.querySelector('.chk span');
    if(s && !document.getElementById('vct-ok')){
      s.insertAdjacentHTML('beforeend',' <span id="vct-ok">J’accepte aussi la <a href="charte.html" target="_blank" rel="noopener">charte communautaire</a> et les <a href="cgu.html" target="_blank" rel="noopener">conditions d’utilisation</a>.</span>');
    }
  }catch(e){}
})();
