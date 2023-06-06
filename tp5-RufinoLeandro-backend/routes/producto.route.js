const productoCtrl = require('../controllers/producto.controller');
const express = require("express");
const router = express.Router();
//Defino las rutas para producto
router.post("/crear",productoCtrl.createProducto);
router.get("/listar",productoCtrl.getProductos);
router.delete("/borrar/:id",productoCtrl.deleteProducto);
router.put("/modificar/:id",productoCtrl.editProducto);
router.get("/listarDestacados",productoCtrl.getProductosDestacados);

module.exports = router;