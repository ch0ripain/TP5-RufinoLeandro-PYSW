const transaccionCtrl = require('../controllers/transaccion.controller');
const express = require("express");
const router = express.Router();

//Definir las rutas para las transacciones
router.post("/",transaccionCtrl.createTransaccion);
router.get("/",transaccionCtrl.getTransacciones);

module.exports = router;
