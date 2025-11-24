# SNova Showcase

Site vitrine moderne présentant Smart Nova : entreprise d'innovation numérique spécialisée dans l'IA, la blockchain et la transformation digitale. Le projet se compose d'un front-end React + Vite et d'un micro-serveur Express pour servir les pages statiques en production.

## Sommaire

1. [Stack technique](#stack-technique)
2. [Structure du dépôt](#structure-du-dépôt)
3. [Scripts npm utiles](#scripts-npm-utiles)
4. [Variables d'environnement](#variables-denvironnement)
5. [Développement](#développement)
6. [Docker](#docker)
7. [Déploiement Railway](#déploiement-railway)
8. [Contenu fonctionnel](#contenu-fonctionnel)

---

## Stack technique

- **React 18 + TypeScript** (client)
- **Vite 7** pour le bundling et le dev-server
- **Tailwind CSS 4 + Radix UI** pour le design system
- **Express 4** pour servir les assets buildés
- **PNPM** comme gestionnaire de dépendances

## Structure du dépôt

```
snova_showcase/
├── client/                # Code React / Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   └── hooks/
│   ├── public/
│   └── index.html
├── server/
│   └── index.ts           # Serveur Express pour la prod
├── shared/                # Constantes partagées
├── Dockerfile
├── docker-compose.yml
├── DEPLOYMENT_RAILWAY.md  # Guide Railway existant
└── README.md
```

## Scripts npm utiles

> Tous les scripts se lancent avec `pnpm <script>`

| Script      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `dev`       | Lance Vite en mode développement sur `http://localhost:3000`                |
| `build`     | Build client + bundle du serveur Express dans `dist/`                       |
| `start`     | Lance le serveur Express (après build)                                      |
| `preview`   | Pré-visualisation prod via Vite                                             |
| `check`     | Vérification TypeScript                                                     |
| `format`    | Formatage Prettier                                                          |

## Variables d'environnement

Créer un fichier `.env` à la racine (mêmes clés pour Railway) :

```
VITE_APP_TITLE=SNova
VITE_APP_LOGO=/snova_logo.png
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
VITE_OAUTH_PORTAL_URL=
VITE_APP_ID=
```

> Ajouter d'autres secrets/API keys si nécessaires selon vos intégrations.

## Développement

1. Installer PNPM si besoin : `npm i -g pnpm@10.4.1`
2. Installer les dépendances : `pnpm install`
3. Lancer le client : `pnpm dev`
4. Visiter `http://localhost:7001`

Le code source se trouve dans `client/src`. Les pages principales sont :

- `pages/Home.tsx` : section Hero, projets, expertise, équipe, contact
- `pages/NotFound.tsx` : fallback 404

## Docker

Build & run (multi-stage, Node 20 Alpine) :

```bash
docker-compose build
docker-compose up -d
# Accès : http://localhost:7001 (reverse proxy vers le port 3000 interne)
```

Le fichier `docker-start.sh` automatise build + lancement + healthcheck.

## Déploiement Railway

Un guide détaillé est disponible dans `DEPLOYMENT_RAILWAY.md`. Rappel rapide :

1. Créer un projet Railway (service Node)
2. Configurer les variables d'env identiques à `.env`
3. Activer le build `pnpm install` puis `pnpm build`
4. Commande de démarrage Railway : `pnpm start`

## Contenu fonctionnel

Le site met en avant :

- **SmartEdu** : plateforme phare (IA, blockchain, données)
- **Offres complémentaires** : solutions IA, plateforme de données sécurisée, conseil, innovation lab
- **Section Expertise** : IA, blockchain, développement, stratégie
- **Section Équipe** : Mame Bou FALL, Maire Alioune Awa SENE, Serigne Modou THIAM
- **Contact** : formulaire + coordonnées directes (email/téléphones)

Le contenu éditorial est documenté dans `SITE_CONTENT.md` et peut être enrichi pour maintenir la cohérence marketing.

---

Pour toute contribution :

1. Créer une branche
2. Ouvrir une PR détaillant les changements UX/UI
3. Mettre à jour cette documentation si vous ajoutez des pages ou des scripts

Bon développement 🚀

