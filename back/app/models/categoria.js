const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    nombreCategoria: String,
    estado: Boolean,
    subCategorias: [
        {
            nombreSubCategoria: String,
            estado: Boolean,
            imagenNombre: String
        }
    ]
})
 
//Crear Modelo
const Categoria = mongoose.model('Categoria', categoriaSchema);
 
module.exports = Categoria;