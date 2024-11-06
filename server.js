const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');


app.use(bodyParser.json())
app.use(express.json());
app.use(userRoutes);


app.listen(3000, () => {
    console.log('Serveur en cours d\'execution sur http:localhost:3000');
});

