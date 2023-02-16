const { Router }  = require('express');
const { check } = require('express-validator');
const { 
  usuariosGet, 
  usuariosPut, 
  usuariosPost, 
  usuariosPatch, 
  usuariosDelete } = require('../controllers/usuarios');
const Role = require('../models/role');

const { validarCampos, existeUsuarioPorId } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste } = require('../helpers/db-validators');

const router = new Router();


router.get('/', usuariosGet );
  
router.put('/:id',  [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  check('rol').custom(esRolValido),
  validarCampos
], usuariosPut );
  
router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password es obligatorio y de 6 letras o más').isLength({ min: 6 }),
  check('correo', 'El correo no es válido').isEmail(),
  check('correo').custom(emailExiste),
  check('rol').custom(esRolValido),
  //check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  validarCampos,
], usuariosPost );

router.delete('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos

],usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;