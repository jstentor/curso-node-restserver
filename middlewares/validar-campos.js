const { validationResult } = require('express-validator');
const usuario = require('../models/usuario');


const validarCampos = ( req, res, next ) => {
    const errors = validationResult(req);

    //console.log(errors);
    if ( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }

    next();

}

const existeUsuarioPorId = async( id ) => {
    const existeUsuario = await usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id ${ id } no existe.`)
    }
}

module.exports = {
     validarCampos,
     existeUsuarioPorId
}