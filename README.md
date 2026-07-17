# ZAM Agence de Talents — nouveau site

Site statique, HTML/CSS/JS pur (zéro build, zéro dépendance serveur). Palette noir / blanc / doré, typographies Playfair Display (titres) + Inter (texte courant), chargées depuis Google Fonts.

## Structure

```
zam-agency-site/
├── index.html                 accueil (FR)
├── notre-metier.html          Agent de Talent + Agent d'architectes et designers
├── talents-management.html    représentation de célébrités et d'experts
├── influence-marketing.html   stratégies d'influence pour les marques
├── nos-clients.html           liste des marques clientes
├── contact.html                coordonnées + formulaire
├── robots.txt
├── sitemap.xml
├── build.py                    régénère le footer partagé (voir plus bas)
├── partials/
│   └── footer.html             source unique du footer
├── assets/
│   ├── css/style.css          feuille de style unique
│   ├── js/main.js             menu mobile, header au scroll, animations
│   └── images/
│       ├── logo/              favicon + logo (voir README du dossier)
│       ├── talents/           photos des talents (voir README du dossier)
│       └── clients/           logos des clients si besoin (voir README du dossier)
├── en/                        squelette anglais (pages "en cours de traduction")
└── es/                        squelette espagnol (pages "en cours de traduction")
```

## Pourquoi FR d'abord, EN/ES en squelette

Les pages `/en/` et `/es/` existent déjà, avec la même structure de navigation et les bonnes balises `hreflang` pointant vers leurs équivalents FR — mais leur contenu n'est pas encore traduit (mention "en cours de traduction"). Elles sont volontairement marquées `noindex` (balise meta + `robots.txt`) pour ne pas être indexées par Google tant qu'elles sont vides.

**Quand vous serez prête à traduire :**
1. Remplacez le contenu de chaque page dans `/en/` ou `/es/` (structure HTML identique aux pages FR, juste le texte à traduire).
2. Retirez `<meta name="robots" content="noindex, follow">` de chaque page traduite.
3. Retirez les lignes `Disallow: /en/` et `Disallow: /es/` du `robots.txt`.
4. Ajoutez les URLs traduites dans `sitemap.xml`.

## Le footer : une seule source, pas de fichier par page

Le site reste du HTML pur (pas de moteur de templating), donc le footer est physiquement dupliqué dans les 6 pages FR — c'est nécessaire pour que chaque fichier .html reste lisible tel quel par les moteurs de recherche (rien ne dépend du JS pour le contenu, donc rien à perdre côté SEO).

Pour ne pas avoir à modifier 6 fichiers à la main à chaque changement :
1. Modifiez uniquement `partials/footer.html`.
2. Lancez `python3 build.py` à la racine du projet.
3. Le script recopie ce footer dans les 6 pages FR automatiquement.

Ce script est un outil de confort pour vous, pas une dépendance du site : une fois exécuté, les fichiers `.html` livrés restent 100 % statiques.

## Contenu à vérifier avant mise en ligne

L'ancien site zamagency.com étant hors ligne, certains éléments de contact ont été repris de sources publiques externes (annuaires professionnels) et **doivent être confirmés par vous avant publication** :
- Adresse : 15 rue Martel, 75010 Paris
- Téléphone : +33 1 47 23 60 67
- Email : contact@zamagency.com

Ces informations apparaissent dans `contact.html`, dans `partials/footer.html`, et dans le balisage structuré (JSON-LD `Organization`) en haut de `index.html` — recherchez `(à confirmer)` ou mettez à jour les 3 emplacements ensemble.

## SEO technique déjà en place

- Titre et meta description propres à chaque page, longueur maîtrisée.
- `cano