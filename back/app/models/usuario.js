const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    primerNombre: String,
    segundoNombre: String, 
    primerApellido: String,
    segundoApellido: String, 
    fechaNacimiento: Date,
    email: String,
    dni: Number,
    credenciales:{
        usuario: String,
        contrasena: String
    }
})
 
//Crear Modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
 
module.exports = Usuario;