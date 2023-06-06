const Ticket = require('../models/ticket');
const ticketCtrl = {};

ticketCtrl.createTicket = async (req, res) => {
    try {
      const ticketData = {
        precioTicket: req.body.precioTicket,
        categoriaEspectador: req.body.categoriaEspectador,
        fechaCompra: req.body.fechaCompra,
        espectador: req.body.espectador // Pasar el atributo espectador como propiedad
      };
  
      const ticket = new Ticket(ticketData);
      await ticket.save();
  
      res.json({
        status: "1",
        msg: "Ticket guardado.",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando operacion.",
      });
    }
  };

  ticketCtrl.getTickets = async (req,res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
  };

  ticketCtrl.deleteTicket = async (req,res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
          status: "1",
          msg: "Ticket eliminado",
        });
      } catch (error) {
        res.status(400).json({
          status: "0",
          msg: "Error procesando la operacion",
        });
      }
  };

  ticketCtrl.editTicket = async (req,res) => {
    const vticket = new Ticket(req.body);
    try {
      await Ticket.updateOne({ _id: req.body._id }, vticket);
      res.json({
        status: "1",
        msg: "Ticket modificado",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando la operacion",
      });
    }
  };

  ticketCtrl.getTicketsPorEspectador = async(req,res) => {
    var ticketsEspectador = await Ticket.find({categoriaEspectador: req.query.categoriaEspectador}); //  espectador? = e - l
    res.json(ticketsEspectador);
  };

module.exports = ticketCtrl;