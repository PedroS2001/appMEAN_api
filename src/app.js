const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

//RUTAS
const usuarios = require('./routes/usuarios');

const app = express();

mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DB_NAME)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log('No se pudo conectar con mongodb' + err))


app.use('/usuarios', usuarios);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App listen on port...' + PORT);
})