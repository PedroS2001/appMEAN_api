const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/UsuarioModel');
const router = express.Router();

const jwt = require('jsonwebtoken');


//Seria un Login
router.post('/', (req, res) => {
    console.log(req.body);
    Usuario.findOne({ "email": req.body.email })
        .then((datos) => {
            if (datos) {
                let passwordValidada = bcrypt.compareSync(req.body.password, datos.password);
                if (passwordValidada) {
                    //Entra a la app, le genero un JWT
                    const jwToken = jwt.sign(
                        {
                            nombre: datos.nombre,
                            email: datos.email
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.EXP_TIME
                        }
                    )
                    res.status(200).json({
                        'jwt': jwToken,
                        'usuario': {
                            nombre: datos.nombre,
                            email: datos.email
                        }
                    });

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