
---

# API REST pour la gestion des utilisateurs

Ce projet implémente une API RESTful permettant de gérer une base de données d'utilisateurs avec Node.js, Express et SQLite3. L'API permet d'effectuer les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour gérer les utilisateurs dans une base de données SQLite3.

## Objectifs du projet

- Créer une API RESTful pour gérer des utilisateurs.
- Implémenter les opérations CRUD avec une base de données SQLite3.
- Organiser le code en modules (Modèles, Contrôleurs, Routes).
- Assurer la validation des données et la gestion des erreurs.
- Écrire des tests pour chaque endpoint de l'API.

## Endpoints de l'API

### Liste des routes disponibles

- **POST /api/users** : Créer un utilisateur.
- **GET /api/users/:id** : Récupérer les informations d'un utilisateur par son identifiant.
- **PUT /api/users/:id** : Mettre à jour les informations d'un utilisateur.
- **DELETE /api/users/:id** : Supprimer un utilisateur.

### Format des données utilisateur

Chaque utilisateur doit avoir les champs suivants :

- **id** : entier, auto-généré, utilisé comme identifiant unique.
- **name** : chaîne de caractères, non vide.
- **email** : chaîne de caractères, unique et valide.
- **age** : entier, doit être supérieur à 0.

### Codes de statut HTTP

- **201** : Création réussie.
- **200** : Opération réussie (récupération ou mise à jour).
- **404** : Utilisateur non trouvé.
- **400** : Données invalides.

### Exemples de réponses JSON pour chaque endpoint

#### POST /api/users
```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}
```

#### GET /api/users/:id
```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}
```

#### PUT /api/users/:id
```json
{
  "id": 1,
  "name": "Alice Updated",
  "email": "alice@example.com",
  "age": 26
}
```

#### DELETE /api/users/:id
```json
{
  "message": "User deleted"
}
```

## Installation

Voici comment configurer ce projet sur votre machine :

1. Clonez le repository :
   ```bash
   git clone https://github.com/CynthiaStephan/project-api.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd project-api
   ```

3. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

4. Lancez l'application avec Docker :
   ```bash
   docker compose up -d
   ```

5. L'API sera accessible à l'adresse `http://localhost:3000`.

## Structure du projet

Voici l'organisation des fichiers et dossiers :

- **models/** : Contient la configuration et les requêtes liées à la base de données.
- **controllers/** : Contient la logique métier pour chaque opération CRUD.
- **routes/** : Définit les routes de l'API.
- **tests/** : Contient les tests unitaires pour chaque endpoint.

## Tests

Les tests unitaires ont été écrits avec Jest et Supertest. Pour les exécuter, il vous suffit de lancer :

```bash
npm test
```

## Développement

Voici les étapes de développement pour démarrer :

1. Clonez le repository et accédez au projet.
2. Créez la base de données SQLite3 (`database.db`) et configurez la table `users`.
3. Implémentez l'API avec les routes et la logique CRUD.
4. Validez les données avant chaque opération (création, mise à jour, suppression).
5. Rédigez des tests unitaires pour chaque endpoint.
6. Testez manuellement l'API via Thunder Client ou Postman.

## Ressources utilisées

- [Documentation d'Express](https://expressjs.com/)
- [SQLite3 pour Node.js](https://www.npmjs.com/package/sqlite3)
- [Documentation de Jest](https://jestjs.io/)
- [Supertest sur GitHub](https://github.com/visionmedia/supertest)

## Critères de réussite du projet


- Les endpoints CRUD doivent être correctement implémentés et fonctionnels.
- Les données doivent être validées et les erreurs gérées de manière appropriée.
- Les tests doivent couvrir tous les scénarios possibles (succès et erreurs).
- Le code doit être bien structuré, clair et facile à maintenir.
