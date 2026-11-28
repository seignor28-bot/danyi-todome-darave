(function(){
function add(){
var nav=document.getElementById('nav');
if(!nav||document.getElementById('vct-m-annonces'))return;
var last=nav.lastElementChild;
function mk(t,id,fn){
var b=document.createElement('button');
b.id=id;b.textContent=t;
if(last&&last.className)b.className=last.className.replace(/\bon\b/,'').trim();
b.addEventListener('click',fn);
return b;
}
var e1=mk('Nos espaces','vct-m-espaces',function(){
if(typeof go==='function')go('accueil');
setTimeout(function(){
var h=[].slice.call(document.querySelectorAll('h1,h2,h3')).find(function(y){return y.textContent.trim()==='Nos espaces'});
if(h)h.scrollIntoView({behavior:'smooth'});
},150);
});
var e2=mk('Annonces','vct-m-annonces',function(){location.href='vct-annonces.html';});
if(last){nav.insertBefore(e1,last);nav.insertBefore(e2,last);}
else{nav.appendChild(e1);nav.appendChild(e2);}
}
add();
setInterval(add,1000);
})();
