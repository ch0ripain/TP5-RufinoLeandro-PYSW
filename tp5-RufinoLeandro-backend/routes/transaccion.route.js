const transaccionCtrl = require('../controllers/transaccion.controller');
const express = require("express");
const router = express.Router();

//Definir las rutas para las transacciones
router.post("/crear",transaccionCtrl.createTransaccion);
router.get("/listar",transaccionCtrl.getTransacciones);
router.get("/listarPorCliente/:email",transaccionCtrl.getTransaccionesPorCliente);
router.get("/listarPorDivisas",transaccionCtrl.getTransaccionesPorDivisas);

module.exports = router;
