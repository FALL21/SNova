# Déploiement sur Railway

Ce guide décrit, étape par étape, comment préparer et déployer l'application `snova_showcase` sur Railway en mode **Node.js + Vite** sans modifier le code existant.

---

## 1. Pré-requis locaux

1. Installer le [Railway CLI](https://docs.railway.app/develop/cli) :
   ```bash
   npm install -g @railway/cli
   ```
2. Vérifier que tout compile en local (obligatoire avant push) :
   ```bash
   pnpm install --frozen-lockfile
   pnpm build
   pnpm start
   ```
   L'application doit répondre sur `http://localhost:3000`.

---

## 2. Initialiser le projet Railway

1. Se connecter : `railway login`
2. Depuis la racine du dépôt (`/Users/mac/Desktop/Obsidian/Obsidian Vault/Busness/SNova/snova_showcase`) :

   ```bash
   railway init
   ```

   - Choisir **"Create New Project"**.
   - Nommer le service (ex. `snova-showcase`).

Cette étape relie votre dépôt Git actuel au projet Railway.

---

## 3. Paramètres de build et de démarrage

Dans l'interface Railway (onglet **Deployments → Settings**) ou via `railway.toml`, configurer :

| Type            | Commande                         | Commentaire                                       |
| --------------- | -------------------------------- | ------------------------------------------------- |
| Install Command | `pnpm install --frozen-lockfile` | Respecte le `pnpm-lock.yaml`                      |
| Build Command   | `pnpm build`                     | Compile Vite (client) + bundle du serveur Express |
| Start Command   | `pnpm start`                     | Lance `node dist/index.js`                        |

> Railway définit la variable `PORT` automatiquement ; le serveur Express l'utilise déjà (`process.env.PORT || 3000`), aucune modification nécessaire.

---

## 4. Variables d'environnement

Créer un groupe **Environment Variables** dans Railway avec les clés suivantes :

| Variable   | Valeur par défaut | Utilisation                                    |
| ---------- | ----------------- | ---------------------------------------------- |
| `NODE_ENV` | `production`      | Force les chemins statiques vers `dist/public` |

S'il existe des API externes ou clés privées, les ajouter ici. Ne pas les committer.

---

## 5. Déploiement par GitHub / GitLab

1. Pousser votre dépôt vers GitHub.
2. Dans Railway, onglet **Deployments → GitHub**, connecter le repo.
3. Activer l’option **"Deploy on Push"** sur la branche désirée (ex. `main`).  
   À chaque push, Railway exécutera automatiquement les commandes des sections précédentes.

---

## 6. Validation post-déploiement

1. Suivre les logs en direct : `railway logs -s web`.
2. Vérifier le healthcheck : Railway ping `/`. Le serveur renvoie automatiquement `index.html`.
3. Quand le déploiement passe en état **Healthy**, récupérer l’URL publique affichée par Railway.

---

## 7. Tests manuels (option Docker)

Railway peut aussi utiliser l’image fournie par `Dockerfile`. Pour tester localement :

```bash
docker build -t snova-showcase:railway .
docker run -p 3000:3000 snova-showcase:railway
```

Le Dockerfile embarque déjà `pnpm build` et `pnpm start`, ce qui reflète exactement ce que Railway exécutera.

---

## 8. Astuces supplémentaires

- Mettre en place l’alerte « Restart on Failure » dans Railway pour redémarrer automatiquement l’instance Express en cas de crash.
- Pour les assets volumineux (`client/public/team/...`), vérifier que la taille reste raisonnable (Railway limite la couche build à 1 GB).
- Avant chaque déploiement majeur, lancer `pnpm check` puis `pnpm test` (si des tests existent) pour réduire les risques de rejet during build.

---

En suivant ces étapes, le projet est prêt pour un déploiement fiable sur Railway, que ce soit via GitHub ou via la CLI.
