const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

//Dar de alta una Transaccion(POST)
transaccionCtrl.createTransaccion = async (req, res) => {
    try {
      const { monedaOrigen, cantidadOrigen, monedaDestino, emailCliente, tasaConversion } = req.body;
  
      const cantidadDestino = cantidadOrigen * tasaConversion;
  
      const transaccion = new Transaccion({
        monedaOrigen,
        cantidadOrigen,
        monedaDestino,
        cantidadDestino,
        emailCliente,
        tasaConversion
      });
  
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
    var transaccionesRegistradas = await Transaccion.find();
    res.json(transaccionesRegistradas);
};

//Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
transaccionCtrl.getTransaccionesPorCliente = async (req, res) => {
    var transaccionesCliente = await Transaccion.find({emailCliente: req.params.email})
    res.json(transaccionesCliente);
  };
  

//Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como parámetro (GET). Utilice el concepto de PARAMS
transaccionCtrl.getTransaccionesPorDivisas = async (req, res) => {
    try {
      const transaccionesDivisas = await Transaccion.find({ monedaOrigen: req.query.monedaOrigen, monedaDestino: req.query.monedaDestino});
      res.json(transaccionesDivisas);
    } catch (error) {
      res.status(400).json({ status: "0", msg: "Error procesando operacion." });
    }
  };

module.exports = transaccionCtrl;