# Mechkawaii San 三

Jeu de fusion en pixel art dans l'univers Mechkawaii : alignez 3 pièces identiques pour monter d'un palier
(Boulon → Panneau solaire → Petit bâtiment → Usine → Base → Tour), piégez les Prodromes et reconquérez Erret.

- Un seul fichier de jeu : `index.html` (JavaScript vanilla, canvas, sprites générés par code).
- Polices embarquées dans `fonts/` (Press Start 2P, VT323 — licence OFL).
- Installable sur l'écran d'accueil (iPhone / Android) grâce à `manifest.webmanifest` et aux icônes de `icons/`.
- La progression est sauvegardée dans le `localStorage` du navigateur.

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```
python3 -m http.server 8000
```

## Déployer

Site statique, aucune étape de build : Vercel (framework « Other », sans commande de build) ou GitHub Pages (branche `main`, dossier racine).
