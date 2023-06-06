const Espectador = require('../models/espectador');
const espectadorCtrl = {};

//Dar de alta un Espectador (POST)
espectadorCtrl.createEspectador = async (req,res) =>{
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({
          status: "1",
          msg: "Espectador guardado.",
        });
      } catch (error) {
        res.status(400).json({
          status: "0",
          msg: "Error procesando operacion.",
        });
      }
};

//Obtener todas los Espectadores (GET)
espectadorCtrl.getEspectadores = async (req,res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
};

//Obtener UN Espectador (GET)
espectadorCtrl.getEspectador = async (req,res) => {
    var espectadorBuscado = await Espectador.findById(req.params.id);
    res.json(espectadorBuscado);
}


module.exports = espectadorCtrl;