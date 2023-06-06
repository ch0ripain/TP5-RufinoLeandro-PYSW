const moongose = require('mongoose');
const {Schema} = moongose;

const EspectadorSchema = new Schema({
    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    dni: {type: String, required: true},
    email: {type: String, required: true}
})

module.exports = moongose.model.Espectador || moongose.model('Espectador',EspectadorSchema);