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

## Déployer sur Vercel
Ce projet est une app React + Vite "statique" : Vercel lance un build puis sert le dossier `dist/`.

### Option A — via l'interface Vercel (recommandé)
1. Push le repo sur GitHub/GitLab.
2. Sur Vercel: **New Project** → importe le repo.
3. Vérifie les settings:
	- **Build Command**: `npm run build`
	- **Output Directory**: `dist`
4. Deploy.

### Option B — via la CLI Vercel
1. Dans le dossier du projet:
	- `npx vercel`
2. La CLI te demande de te connecter et de lier le projet.
3. Pour déployer en production ensuite:
	- `npx vercel --prod`

Note: un fichier `vercel.json` est déjà présent pour fixer `buildCommand` / `outputDirectory`.

