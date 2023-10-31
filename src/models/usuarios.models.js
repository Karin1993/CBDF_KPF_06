const {DataTypes} = require('sequelize')
const sequelize = require('../config/db') //Esta ya la tenemos establecida

const Usuario = sequelize.define('Usuario',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    usuarioo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    clave:{
        type:DataTypes.STRING,
        allowNull: false
    }
})

Usuario.sync()
.then(()=>{
    console.log('Tabla Usuario creada o ya existente');
})
.catch((error)=>{
    console.error('Error al crear la tabla Usuario:',error);
})

module.exports=Usuario; //Para poder usar en otro modulo