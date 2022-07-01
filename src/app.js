const express = require('express');
require('dotenv').config()

const mongoose = require('mongoose');

const app = express();


mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DB_NAME  )
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log('No se pudo conectar con mongodb' + err))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App listen on port...' + PORT);
})