/* VILLAGE CONNECT TOGO - correctif page annonces */
(function () {
  function run() {
    if (document.getElementById('vct-annonces-fix-style')) return;

    var css = document.createElement('style');
    css.id = 'vct-annonces-fix-style';
    css.textContent =
      '#vct-retour-accueil{display:block;max-width:960px;margin:0 auto;padding:12px 16px 0;box-sizing:border-box}' +
      '#vct-retour-accueil a{display:inline-block;background:#0f4d2a;color:#d4a82a;' +
      'font-weight:bold;text-decoration:none;padding:10px 16px;border-radius:8px;' +
      'border:1px solid #c9a227;font-size:15px}' +
      'h1+ul,h1+ol,h2+ul,h2+ol,h3+ul,h3+ol,h2+div,h3+div,h2+p,h3+p{margin-top:16px}' +
      'ul,ol{margin-top:14px;padding-left:24px;line-height:1.6}' +
      'li{margin-bottom:8px}' +
      'h2,h3{margin-bottom:16px;padding-bottom:8px}';
    document.head.appendChild(css);

    if (!document.getElementById('vct-retour-accueil')) {
      var bar = document.createElement('div');
      bar.id = 'vct-retour-accueil';
      bar.innerHTML = '<a href="index.html">\u2190 Retour \u00e0 l\u2019accueil</a>';
      document.body.insertBefore(bar, document.body.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
