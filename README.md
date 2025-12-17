# Application de Gestion d'Association ktierB

Une application web moderne pour la gestion des membres d'une association, avec système d'authentification, gestion des événements et des cotisations.

## Fonctionnalités

- Inscription et connexion des membres
- Gestion du profil utilisateur
- Visualisation des événements à venir
- Suivi des cotisations et paiements
- Interface responsive avec animations

## Technologies utilisées

- React.js
- Vite
- CSS3 avec animations

## Déploiement sur GitHub Pages

1. Construisez l'application :
   ```bash
   npm run build
   ```

2. Déployez sur GitHub Pages :
   ```bash
   # Installer gh-pages si ce n'est pas déjà fait
   npm install gh-pages --save-dev
   
   # Ajouter les scripts de déploiement dans package.json
   # "predeploy": "npm run build",
   # "deploy": "gh-pages -d dist"
   
   # Déployer
   npm run deploy
   ```

## Structure du projet

```
src/
├── components/
│   ├── Header.jsx
│   ├── Menu.jsx
│   ├── Login.jsx
│   ├── Registration.jsx
│   └── Dashboard.jsx
├── assets/
│   └── logo.svg
├── App.jsx
├── main.jsx
└── styles/
```

## Développement local

1. Installation des dépendances :
   ```bash
   npm install
   ```

2. Lancement du serveur de développement :
   ```bash
   npm run dev
   ```

3. Construction pour la production :
   ```bash
   npm run build
   ```