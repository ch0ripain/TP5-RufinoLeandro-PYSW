const productoCtrl = require('../controllers/producto.controller');
const express = require("express");
const router = express.Router();
//Defino las rutas para producto
router.post("/",productoCtrl.createProducto);
router.get("/",productoCtrl.getProductos);
router.delete("/:id",productoCtrl.deleteProducto);
router.put("/:id",productoCtrl.editProducto);

module.exports = router;