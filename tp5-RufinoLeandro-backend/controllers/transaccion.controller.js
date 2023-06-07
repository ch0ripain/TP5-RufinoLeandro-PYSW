const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

//Dar de alta una Transaccion(POST)
transaccionCtrl.createTransaccion = async (req, res) => {
  var transaccion = new Transaccion(req.body);
    transaccion.cantidadDestino = transaccion.cantidadOrigen * transaccion.tasaConversion;
  try {
      await transaccion.save();
      res.json({
        status: "1",
        msg: "Transaccion guardada.",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando operacion.",
      });
    }
  };
  

//Recuperar TODAS las Transacciones Registradas (GET)
transaccionCtrl.getTransacciones = async (req,res) => {

    let criteria = {};

    //Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
    if((req.query.email != null) && (req.query.email != "")){
      criteria.emailCliente = req.query.email;
    }

    //Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como parámetro (GET). Utilice el concepto de PARAMS
    if((req.query.monedaOrigen != null && req.query.monedaOrigen != "") && (req.query.monedaDestino != null && req.query.monedaDestino != "")){
      criteria.monedaOrigen = req.query.monedaOrigen;
      criteria.monedaDestino = req.query.monedaDestino;
    }

    var transaccionesRegistradas = await Transaccion.find(criteria);
    res.json(transaccionesRegistradas);
};

module.exports = transaccionCtrl;