const express = require('express');
const router = express.Router();
const fs = require('fs');
const verificarToken = require('../middlewares/auth');

const controller = require('../controllers/user.controller');

const upload = require('../libs/storage');


router.get('/', (req, res) => {
    controller.obtenerUsuarios()
        .then((datos) => {
            res.status(200).json(datos);
        })
        .catch(err => res.status(400).json(err))
})

router.post('/', verificarToken, upload.single('imagen'), (req, res) => {

    let datos = req.body;
    controller.crearUsuario({
        nombre: datos.nombre,
        email: datos.email,
        password: datos.password
    })
        .then((usuario) => {
            if (req.file) {
                let path = req.file.destination.substring(8) + '/' + req.file.filename;
                controller.modificarFoto(datos.email, path)
            }
            res.status(200).json(usuario)
        })
        .catch(err => {
            if (req.file) {
                let path = req.file.destination.substring(8) + '/' + req.file.filename;
                fs.unlink(path, (err) => {
                    console.log(err);
                })
            }
            res.status(400).json(err);
        })

})

router.put('/', verificarToken, upload.single('imagen'), (req, res) => {

    let datos = req.body;
    controller.editarUsuario(datos.email, datos)
        .then((rta) => {
            if (rta.value != null) {
                if (req.file) {
                    let path = req.file.destination.substring(8) + '/' + req.file.filename;
                    controller.modificarFoto(datos.email, path);
                    let old = './public/' + rta.value.imagen;
                    fs.unlink(old, (err) => {
                        console.log(err);
                    })
                }
                res.status(200).json({
                    'msg': "Se modifico el usuario correctamente"
                })
            } else {
                if (req.file) {
                    let path = './public/' + req.file.destination.substring(8) + '/' + req.file.filename;
                    fs.unlink(path, (err) => {
                        console.log(err);
                    })
                }
                res.status(401).json({
                    'msg': "No se pudo modificar el usuario"
                })
            }
        })
        .catch(err => res.status(400).json(err))
})

router.delete('/', verificarToken, (req, res) => {
    let email = req.body.email;

    controller.traerUnUsuario(email)
        .then(user => {
            let path = './public' + user.imagen
            console.log(path);
            fs.unlink(path, (err) => {
                console.log(err);
            })
        })
        .catch(err => console.log('No tiene imagen'));

    controller.eliminarUsuario(email)
        .then((rta) => {
            if (rta.deletedCount) {
                res.status(200).json({
                    'msg': "Se elimino el usuario correctamente"
                })
            } else {
                res.status(401).json({
                    'msg': "No se pudo eliminar el usuario"
                })
            }
        })
        .catch(err => res.status(400).json(err))
})


module.exports = router;