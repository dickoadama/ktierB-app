# Déploiement sur GitHub Pages

## Configuration requise

Assurez-vous d'avoir un compte GitHub et que votre repository est configuré correctement.

## Étapes de déploiement

### 1. Créer un repository GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Créez un nouveau repository nommé `ktierB` (ou le nom de votre choix)
3. Si vous avez déjà un repository, notez son nom

### 2. Préparer le code pour le déploiement

Le projet est déjà configuré pour GitHub Pages avec :
- Le bon `base` dans `vite.config.js`
- Les scripts de déploiement dans `package.json`
- Un workflow GitHub Actions dans `.github/workflows/deploy.yml`

### 3. Déploiement manuel (optionnel)

Si vous préférez déployer manuellement :

1. Construire l'application :
   ```bash
   npm run build
   ```

2. Déployer sur GitHub Pages :
   ```bash
   npm run deploy
   ```

### 4. Déploiement automatique avec GitHub Actions

Le déploiement automatique se fait à chaque push sur la branche principale :

1. Push votre code sur GitHub
2. Le workflow dans `.github/workflows/deploy.yml` s'exécutera automatiquement
3. Votre site sera disponible à l'adresse : `https://<votre-nom-d-utilisateur>.github.io/ktierB/`

### 5. Configurer GitHub Pages (si déploiement manuel)

1. Allez dans les Settings de votre repository
2. Cliquez sur "Pages" dans le menu de gauche
3. Sous "Source", sélectionnez "gh-pages" branch
4. Cliquez sur "Save"

## Résolution des problèmes

### Problèmes courants

1. **Erreur 404 après déploiement** :
   - Vérifiez que le `base` dans `vite.config.js` correspond au nom de votre repository
   - Attendez quelques minutes, le déploiement peut prendre du temps

2. **Problèmes de routage** :
   - Pour une application SPA, ajoutez un fichier `404.html` qui redirige vers `index.html`

3. **Erreurs de build** :
   - Vérifiez que toutes les dépendances sont installées : `npm install`
   - Assurez-vous que le code ne contient pas d'erreurs

## URLs importantes

- **Développement local** : http://localhost:5173/ktierB/
- **Production (après déploiement)** : https://<votre-nom-d-utilisateur>.github.io/ktierB/

## Personnalisation

Pour personnaliser l'URL de votre site :
1. Renommez votre repository en `<votre-nom-d-utilisateur>.github.io`
2. Mettez à jour le `base` dans `vite.config.js` avec `/`

Pour plus d'informations, consultez la [documentation officielle de GitHub Pages](https://docs.github.com/fr/pages).