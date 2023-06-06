const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    descripción: {type: String, required: true},
    imagen: {type: String, required: true}, //url de una imagen para mostrar
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    destacado: {type: Boolean, required: true}// solo algunos productos son destacados
})

module.exports = mongoose.model.Producto || mongoose.model('Producto', ProductoSchema);