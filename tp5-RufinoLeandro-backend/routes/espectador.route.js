const espectadorCtrl = require('../controllers/espectador.controller');
const express = require('express');
const router = express.Router();

//Defino las rutas para espectador
router.post("/",espectadorCtrl.createEspectador);
router.get("/",espectadorCtrl.getEspectadores);
router.get("/:id",espectadorCtrl.getEspectador);

//Exporto el router
module.exports = router;