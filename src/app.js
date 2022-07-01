const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

//IMPORT DE RUTAS
const usuarios = require('./routes/usuarios');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CONECCION A BASE DE DATOS
mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DB_NAME)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log('No se pudo conectar con mongodb' + err))


//RUTAS
app.use('/api/usuarios', usuarios);


//APP
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App running on port...' + PORT);
})