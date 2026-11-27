(function () {
  function ajouter() {
    if (document.getElementById("vct-annonces-bloc")) return;
    var bloc = document.createElement("div");
    bloc.id = "vct-annonces-bloc";
    bloc.style.cssText = "max-width:760px;margin:24px auto;padding:0 16px;text-align:center;font-family:Georgia,serif";
    bloc.innerHTML =
      '<div style="background:#143d26;border:2px solid #c9a227;border-radius:12px;padding:16px">' +
      '<div style="color:#c9a227;font-weight:bold;font-size:1.1rem;margin-bottom:6px">Publicités, avis et communiqués</div>' +
      '<div style="color:#fff;font-size:.95rem;margin-bottom:12px">Faites connaître votre activité ou publiez votre avis.</div>' +
      '<a href="vct-annonces.html" style="display:inline-block;background:#c9a227;color:#143d26;font-weight:bold;text-decoration:none;padding:12px 20px;border-radius:8px">Voir les espaces et tarifs</a>' +
      '</div>';
    var pied = document.querySelector("footer");
    if (pied && pied.parentNode) {
      pied.parentNode.insertBefore(bloc, pied);
    } else {
      document.body.appendChild(bloc);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ajouter);
  } else {
    ajouter();
  }
})();
