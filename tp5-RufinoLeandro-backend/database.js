const mongoose = require('mongoose'); // Direccionamiento y manejo de rutas
const URI = 'mongodb://localhost/tp5bd'; // Permitir que otras apps usen la api - 127.0.0.1 - 0.0.0.0
mongoose.connect(URI)
.then(db=>console.log('DB conectada'))
.catch(err=>console.error(err))
module.exports = mongoose;