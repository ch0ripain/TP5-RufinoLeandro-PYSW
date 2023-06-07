const ticketCtrl = require('../controllers/ticket.controller');
const express = require('express');
const router = express.Router();

//Defino las rutas para ticket
router.post("/",ticketCtrl.createTicket);
router.get("/",ticketCtrl.getTickets);
router.delete("/:id",ticketCtrl.deleteTicket);
router.put("/:id",ticketCtrl.editTicket);

//Exporto el router
module.exports = router;