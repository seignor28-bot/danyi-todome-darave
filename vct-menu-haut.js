(function(){
function go(){
var c=[].slice.call(document.querySelectorAll('a')).find(function(a){return a.textContent.trim()==='Contact'&&a.closest('nav,header')});
if(!c||document.getElementById('vct-m-annonces'))return;
var u=c.parentNode.tagName==='LI'?c.parentNode:c;
function mk(t,h,id){var x=u.cloneNode(true);var a=x.tagName==='A'?x:x.querySelector('a');a.textContent=t;a.setAttribute('href',h);a.removeAttribute('aria-current');a.classList.remove('active');x.classList.remove('active');a.id=id;return x;}
var e=mk('Nos espaces','#','vct-m-espaces');
var n=mk('Annonces','vct-annonces.html','vct-m-annonces');
u.parentNode.insertBefore(e,u);
u.parentNode.insertBefore(n,u);
e.addEventListener('click',function(ev){ev.preventDefault();var h=[].slice.call(document.querySelectorAll('h1,h2,h3')).find(function(x){return x.textContent.trim()==='Nos espaces'});if(h)h.scrollIntoView({behavior:'smooth'});});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
