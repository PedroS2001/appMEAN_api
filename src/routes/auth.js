const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/UsuarioModel');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    Usuario.findOne({ "email": req.body.email })
        .then((datos) => {
            if (datos) {
                let passwordValidada = bcrypt.compareSync(req.body.password, datos.password);
                if (passwordValidada) {
                    res.status(200).json('validado perro');
                } else {
                    res.status(400).json({
                        error: 'ok',
                        msj: 'Usuario o contrasena incorrectos'
                    });
                }
            }
            else {
                res.status(400).json({
                    error: 'ok',
                    msj: 'Usuario o contrasena incorrectos'
                });
            }
        })
})

module.exports = router