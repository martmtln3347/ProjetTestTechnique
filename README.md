# Recherche d'adresses (BAN) — React + Vite (JavaScript)

Petit projet frontend qui :
- effectue une requête HTTP GET vers l'API publique française de géocodage (Base Adresse Nationale / BAN)
- permet à l'utilisateur de rechercher une ville / rue / code postal
- affiche les résultats sous forme de liste
- gère les états : chargement / erreur / données

## Tech
- React 18
- Vite
- JavaScript (ESM)
- CSS Modules
- ESLint (flat config)

## Démarrer
```bash
npm install
npm run dev
```

## Structure (clean-ish)
- `src/app`: layout + composition de l'app
- `src/views`: vues (pages + composants UI)
- `src/controllers`: logique d'orchestration + état (hooks "controller")
- `src/services`: appels externes (API BAN)
- `src/models`: normalisation/transformations de données
- `src/shared`: briques réutilisables (api, ui, utils, config)

## API utilisée
- Endpoint : `https://api-adresse.data.gouv.fr/search/?q=...`
- Docs : https://www.data.gouv.fr/dataservices/api-adresse-base-adresse-nationale-ban

## À propos du “score”
Le champ “score” affiché dans la liste correspond à `properties.score` renvoyé par l’API BAN pour chaque résultat.
Il s’agit d’un indicateur de pertinence/confiance du matching entre ta requête (`q`) et l’adresse retournée : plus il est élevé, plus le résultat est jugé pertinent.
(En pratique, c’est généralement une valeur entre 0 et 1, affichée ici avec 2 décimales.)

