const espectadorCtrl = require('../controllers/espectador.controller');
const ticketCtrl = require('../controllers/ticket.controller');
const express = require('express');
const router = express.Router();

//Defino las rutas para espectador
router.post("/espectador/crear",espectadorCtrl.createEspectador);
router.get("/espectador/listar",espectadorCtrl.getEspectadores);
router.get("/espectador/listar/:id",espectadorCtrl.getEspectador);

//Defino las rutas para ticket
router.post("/ticket/crear",ticketCtrl.createTicket);
router.get("/ticket/listar",ticketCtrl.getTickets);
router.delete("/ticket/eliminar/:id",ticketCtrl.deleteTicket);
router.put("/ticket/modificar/:id",ticketCtrl.editTicket);
router.get("/ticket/listarPorCategoriaEspectador",ticketCtrl.getTicketsPorEspectador);

module.exports = router;