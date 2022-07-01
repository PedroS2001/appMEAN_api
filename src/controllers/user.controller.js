const Usuario = require('../models/UsuarioModel');


async function crearUsuario(datos) {
    let usuario = new Usuario({
        nombre: datos.nombre,
        email: datos.email,
        password: datos.password
    });

    return await usuario.save();
}

async function obtenerUsuarios() {
    return await Usuario.find();
}

async function editarUsuario(email, datos) {
    return await Usuario.updateOne(
        {
            email: email
        },
        {
            $set: {
                nombre: datos.nombre,
                password: datos.password,
            }
        })
}

async function eliminarUsuario(email) {
    return await Usuario.deleteOne({
        email: email
    })
}

async function modificarFoto(email, path) {
    return await Usuario.updateOne(
        {
            email: email
        },
        {
            $set: {
                imagen: path
            }
        })
}


module.exports = {
    "crearUsuario": crearUsuario,
    "obtenerUsuarios": obtenerUsuarios,
    "editarUsuario": editarUsuario,
    "eliminarUsuario": eliminarUsuario,
    "modificarFoto": modificarFoto
}