const mongoose = require('mongoose');
const {Schema} = mongoose;
const Espectador = require('../models/espectador');

const TicketSchema = new Schema({
    precioTicket: {type: Number, required: true},
    categoriaEspectador: { 
        type: String,
        required: true,
        enum: ['e', 'l']
      }, //categoría del espectador puede ser: e = Extranjero, l = local
    fechaCompra: {type: String, required: true}, // gestionar fecha como string
    espectador: {type: Schema.Types.ObjectId, ref: Espectador, required: true},
    
})

module.exports = mongoose.model.Ticket || mongoose.model('Ticket',TicketSchema);