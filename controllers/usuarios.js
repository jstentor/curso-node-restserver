const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const  { q, nombre = "No name", apikey, page = "1", limit = "10" } = req.query;

    res.json({
       msg: 'get API controlador',
       q, nombre, apikey, page, limit
    });
};

const usuariosPost =  (req, res) => {
    const { nombre, edad } = req.body;
    const id = req.params.id;

    res.status(201).json({
       msg: 'post API controlador',
       nombre, edad, id
    });
}

const usuariosPut = (req, res) => {
    res.json({
       msg: 'put API controlador'
    });
};

const usuariosPatch = (req, res) => {
    res.json({
       msg: 'patch API controlador' 
    });
};

const usuariosDelete = (req, res) => {
    res.json({
       msg: 'delete API controlador' 
    });
}; 




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}