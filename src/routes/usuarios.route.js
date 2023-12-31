const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuarios.controller')

//Definir las rutas 

router.get('/',usuariosController.obtenerTodosLosUsuarios);
router.get('/:id',usuariosController.obtenerUsuarioPorId);
router.post('/',usuariosController.crearUsuario);
router.put('/:id',usuariosController.actualizarUsuario);
router.delete('/:id',usuariosController.eliminarUsuario);

module.exports=router;