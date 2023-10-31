//Requerimos y declaraciones
const express = require('express');
const routesUsuarios = require('./src/routes/usuarios.route');
const app = express();
const puerto = process.env.PORT || 3000;

//Configuracion del servidor
app.use(express.json())
app.use('/socios/v2/usuarios',routesUsuarios);

//Ejecutar servidor 
app.listen(puerto,()=>{
console.log("Servidor escuchando en el puerto:",puerto);
})