(function(){
function go(){
if(document.getElementById('vct-m-annonces'))return;
var c=null;
var els=[].slice.call(document.querySelectorAll('a,button,li,span,div'));
for(var i=0;i<els.length;i++){var e=els[i];if(e.children.length===0&&e.textContent.trim()==='Contact'&&e.getBoundingClientRect().top<250){c=e;break;}}
if(!c)return;
var u=c;
if(c.parentNode.tagName==='LI'&&c.parentNode.children.length===1)u=c.parentNode;
function mk(t,id,fn){
var x=u.cloneNode(true);
[x].concat([].slice.call(x.querySelectorAll('*'))).forEach(function(n){
[].slice.call(n.attributes).forEach(function(a){if(/^(data-|on|href|aria-|id)/i.test(a.name))n.removeAttribute(a.name);});
n.classList.remove('active');
});
var l=x;while(l.children.length)l=l.children[0];
l.textContent=t;x.id=id;x.style.cursor='pointer';
x.addEventListener('click',function(ev){ev.preventDefault();ev.stopPropagation();fn();},true);
return x;
}
var e1=mk('Nos espaces','vct-m-espaces',function(){
var h=[].slice.call(document.querySelectorAll('h1,h2,h3')).find(function(y){return y.textContent.trim()==='Nos espaces'});
if(h)h.scrollIntoView({behavior:'smooth'});
});
var e2=mk('Annonces','vct-m-annonces',function(){location.href='vct-annonces.html';});
u.parentNode.insertBefore(e1,u);
u.parentNode.insertBefore(e2,u);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(go,300)});else setTimeout(go,300);
})();
