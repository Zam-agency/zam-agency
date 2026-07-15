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

## Contenu à vérifier avant mise en ligne

L'ancien site zamagency.com étant hors ligne, certains éléments de contact ont été repris de sources publiques externes (annuaires professionnels) et **doivent être confirmés par vous avant publication** :
- Adresse : 15 rue Martel, 75010 Paris
- Téléphone : +33 1 47 23 60 67
- Email : contact@zamagency.com

Ces informations apparaissent dans `contact.html` et dans le footer de chaque page (recherchez `(à confirmer)`).

## Formulaire de contact

Le formulaire dans `contact.html` est purement statique : sans backend, il ne peut pas envoyer d'email tel quel. Deux options simples, sans serveur à gérer :
- [Formspree](https://formspree.io) : changez juste l'attribut `action` du `<form>`.
- Netlify Forms (si vous hébergez sur Netlify) : ajoutez `data-netlify="true"` au `<form>`.

## Mise en ligne (GitHub)

Ce dossier n'est pas encore versionné avec Git. Pour l'initialiser vous-même :

```bash
cd zam-agency-site
git init
git add .
git commit -m "Premier commit — site ZAM Agence de Talents"
git remote add origin <URL_DE_VOTRE_REPO_GITHUB>
git branch -M main
git push -u origin main
```

Le site étant 100% statique, il peut être déployé tel quel sur GitHub Pages, ou simplement ouvert en local en double-cliquant sur `index.html`.

## Personnalisation rapide

- Couleurs, polices, espacements : variables CSS en haut de `assets/css/style.css` (bloc `:root`).
- Logo : actuellement du texte stylé (`.logo-mark` dans le CSS) — remplaçable par une image dans `assets/images/logo/`.
- Ajout d'un vrai favicon : déposer `favicon.ico` dans `assets/images/logo/`.
