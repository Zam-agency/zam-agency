/* ZAM Agence de Talents — script principal (vanilla JS, sans dépendance) */
(function () {
  "use strict";

  // Active l'animation d'apparition UNIQUEMENT si ce script s'exécute.
  // Sans cette classe, le CSS affiche tout le contenu par défaut (voir style.css) :
  // si le JS est bloqué, lent à charger ou en erreur, rien ne doit rester invisible.
  document.documentElement.classList.add("js-reveal");

  // Année dynamique dans le footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Header solide au scroll
  var header = document.querySelector("[data-header]");
  if (header) {
    var toggleSolid = function () {
      if (window.scrollY > 40) {
        header.classList.add("is-solid");
      } else {
        header.classList.remove("is-solid");
      }
    };
    toggleSolid();
    window.addEventListener("scroll", toggleSolid, { passive: true });
  }

  // Menu mobile
  var navToggle = document.querySelector("[data-nav-toggle]");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.querySelectorAll("[data-nav] a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Apparition progressive des blocs au scroll
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
