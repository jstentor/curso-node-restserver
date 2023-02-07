const { Router }  = require('express');
const { 
  usuariosGet, 
  usuariosPut, 
  usuariosPost, 
  usuariosPatch, 
  usuariosDelete } = require('../controllers/usuarios');

const router = new Router();


router.get('/', usuariosGet );
  
router.put('/', usuariosPut );
  
router.post('/:id', usuariosPost );

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;