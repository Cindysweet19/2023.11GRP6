const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    nombreProducto: String,
    descripcion: String, 
    precio: Number,
    stock: Number, 
    categoria: Number
})
 
//Crear Modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
 
module.exports = Usuario;