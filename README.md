Voici le fichier README en format Markdown pour ton projet :
# API REST pour la gestion des utilisateurs

Ce projet implémente une API RESTful permettant de gérer une base de données d'utilisateurs avec Node.js, Express et SQLite3. L'API supporte les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour gérer les utilisateurs dans une base de données SQLite3.

## Objectifs du projet

- Créer une API RESTful pour gérer des utilisateurs.
- Implémenter les opérations CRUD avec une base de données SQLite3.
- Organiser le code en modules (Modèles, Contrôleurs, Routes).
- Assurer la validation des données et la gestion des erreurs.
- Écrire des tests pour chaque endpoint de l'API.

## Spécifications de l'API

### Endpoints

- **POST /api/users** : Créer un utilisateur.
- **GET /api/users/:id** : Récupérer les informations d’un utilisateur par son identifiant.
- **PUT /api/users/:id** : Mettre à jour les informations d’un utilisateur.
- **DELETE /api/users/:id** : Supprimer un utilisateur.

### Format des données de l’utilisateur

Chaque utilisateur doit avoir les champs suivants :
- **id** : entier, auto-généré, utilisé comme identifiant unique.
- **name** : chaîne de caractères, non vide.
- **email** : chaîne de caractères, doit être unique et valide.
- **age** : entier, doit être supérieur à 0.

### Codes de statut HTTP

- **201** : Création réussie.
- **200** : Récupération réussie ou mise à jour réussie.
- **404** : Utilisateur non trouvé.
- **400** : Données invalides.

### Exemple de réponse JSON pour chaque endpoint

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

1. Clonez ce repository sur votre machine locale :
   ```bash
   git clone https://github.com/CynthiaStephan/project-api.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd project-api
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Lancer l'application :
   ```bash
   docker compose up -d
   ```

5. Accédez à l'API via `http://localhost:3000`.

## Structure du projet

- **models/** : Contient la configuration et les requêtes de la base de données.
- **controllers/** : Contient la logique métier des opérations CRUD.
- **routes/** : Définit les routes de l'API.
- **tests/** : Contient les tests unitaires pour chaque endpoint.

## Tests

Les tests unitaires sont écrits en utilisant Jest et Supertest. Pour lancer les tests, utilisez la commande suivante :

```bash
npm test
```

## Étapes de développement

1. Initialisez le projet en récupérant les fichiers du repository.
2. Créez la base de données SQLite3 dans `database.db` et configurez la table `users`.
3. Développez l'API en implémentant les routes et la logique CRUD.
4. Validez les données avant chaque opération.
5. Écrivez des tests unitaires pour chaque endpoint.
6. Testez manuellement l'API à l'aide de Thunder Client ou Postman.

## Ressources utilisées

- [Express Documentation](https://expressjs.com/)
- [SQLite3 for Node.js Documentation](https://www.npmjs.com/package/sqlite3)
- [Jest Documentation](https://jestjs.io/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)

## Critères de réussite du projet

- Tous les endpoints CRUD doivent être correctement implémentés et fonctionnels.
- La validation des données et la gestion des erreurs doivent être bien prises en charge.
- Les tests doivent couvrir tous les cas possibles (succès et erreurs).
- Le code doit être bien structuré et lisible.