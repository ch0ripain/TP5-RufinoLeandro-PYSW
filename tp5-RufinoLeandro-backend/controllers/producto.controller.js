const Producto = require('../models/producto');
const productoCtrl = {};
//Dar de alta un Producto (POST)
productoCtrl.createProducto = async (req,res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
          status: "1",
          msg: "Producto guardado.",
        });
      } catch (error) {
        res.status(400).json({
          status: "0",
          msg: "Error procesando operacion.",
        });
      }
};

//Recuperar TODOS los productos (GET) y Recuperar los productos DESTACADOS (GET)
productoCtrl.getProductos = async (req,res) => {
    let criteria = {};
    if((req.query.destacado != null) && (req.query.destacado != "")){
      criteria.destacado = req.query.destacado;
    }
    var productos = await Producto.find(criteria);
    res.json(productos);
};

//Eliminar un producto (DELETE)
productoCtrl.deleteProducto = async (req,res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
          status: "1",
          msg: "Producto eliminado",
        });
      } catch (error) {
        res.status(400).json({
          status: "0",
          msg: "Error procesando la operacion",
        });
      }
};

//Modificar un producto (PUT)
productoCtrl.editProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
      await Producto.updateOne({ _id: req.body._id }, vproducto);
      res.json({
        status: "1",
        msg: "Producto modificado",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando la operacion",
      });
    }
  };

//Exporto el ctrl
module.exports = productoCtrl;

