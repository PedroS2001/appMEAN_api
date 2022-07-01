const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')

//IMPORT DE RUTAS
const usuarios = require('./routes/usuarios');

const corsOptions = {
    origin: "*"
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

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