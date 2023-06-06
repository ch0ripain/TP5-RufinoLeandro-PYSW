const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.route'));
app.use('/api/transaccion', require('./routes/transaccion.route'));
app.use('/api/teatro', require('./routes/teatro.route'));
//setting
app.set('port', process.env.PORT || 3000); // Puerto estandar de express
//starting the server
app.listen(app.get('port'), () => {
console.log(`Servidor iniciado en puerto`, app.get('port'));
});
