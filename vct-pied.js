(function () {
  var remplacements = [
    ["EGBETOKE Kokoroko A Dodzi", "EGBETOKE K Anku Dodzi"],
    ["EGBETOKE kokoroko A Dodzi", "EGBETOKE K Anku Dodzi"],
    ["© Danyi Todomé Daravé", "© VILLAGE CONNECT TOGO"]
  ];

  function corriger() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var noeud;
    while ((noeud = walker.nextNode())) {
      var texte = noeud.nodeValue;
      var nouveau = texte;
      for (var i = 0; i < remplacements.length; i++) {
        nouveau = nouveau.split(remplacements[i][0]).join(remplacements[i][1]);
      }
      if (nouveau !== texte) noeud.nodeValue = nouveau;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      corriger();
      setTimeout(corriger, 800);
    });
  } else {
    corriger();
    setTimeout(corriger, 800);
  }
})();
