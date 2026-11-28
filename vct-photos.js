(function(){
var MAP=[
['Passagers','vct-passagers.webp','Passagers dans un transport en commun'],
['Voyages','vct-voyages.webp','Route côtière bordée de palmiers'],
['Auberges et hôtels','vct-auberges.webp','Chambre d\u2019hôtel lumineuse']
];
function run(){
MAP.forEach(function(m){
var h=[].slice.call(document.querySelectorAll('body *')).find(function(y){
return y.children.length===0&&y.textContent.trim()===m[0]&&!y.closest('nav,header,footer');
});
if(!h)return;
var card=h.closest('article,li,[class*="card"]')||h.parentElement.parentElement;
if(!card||card.querySelector('img'))return;
var img=document.createElement('img');
img.src=m[1];img.alt=m[2];img.loading='lazy';
img.style.cssText='display:block;width:100%;height:156px;object-fit:cover;margin:0;border:0';
card.insertBefore(img,card.firstChild);
});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
setTimeout(run,500);
})();
