const express = require('express');
const router = express.Router();
const fs = require('fs');

const controller = require('../controllers/user.controller');



const upload = require('../libs/storage');


router.get('/', (req, res) => {
    controller.obtenerUsuarios()
        .then((datos) => {
            res.status(200).json(datos);
        })
        .catch(err => res.status(400).json(err))
})

router.post('/', upload.single('imagen'), (req, res) => {
    let path = req.file.destination + '/' + req.file.filename;

    let datos = req.body;
    controller.crearUsuario({
        nombre: datos.nombre,
        email: datos.email,
        password: datos.password
    })
        .then((usuario) => {
            controller.modificarFoto(datos.email, path)
            res.status(200).json(usuario)
        })
        .catch(err => {
            fs.unlink(path, (err) => {
                console.log(err);
            })
            res.status(400).json(err);
        })

})

router.put('/:email', (req, res) => {
    let datos = req.body;
    let email = req.params.email;
    controller.editarUsuario(email, datos)
        .then((rta) => {
            if (rta.modifiedCount) {
                res.status(200).json({
                    'msg': "Se modifico el usuario correctamente"
                })
            } else {
                res.status(401).json({
                    'msg': "No se pudo modificar el usuario"
                })
            }
        })
        .catch(err => res.status(400).json(err))
})

router.delete('/:email', (req, res) => {
    let email = req.params.email;
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