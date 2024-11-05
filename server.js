const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes'); // Chemin vers tes routes

const app = express();
app.use(bodyParser.json())

// Middleware pour parser le JSON
app.use(express.json());

// Utilisation des routes
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Serveur en cours d\'execution sur http:localhost:3000');
});

