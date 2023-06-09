const Ticket = require('../models/ticket');
const ticketCtrl = {};

ticketCtrl.createTicket = async (req, res) => {
  var ticket = new Ticket(req.body);  
  try {
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

    let criteria = {};
    if(req.query.categoria != null && req.query.categoria != ""){
      criteria.categoriaEspectador = req.query.categoria;
    }
    var tickets = await Ticket.find(criteria).populate("espectador");
    res.json(tickets);
  };

  ticketCtrl.getTicketById = async (req, res) => {
      const ticket = await Ticket.findById(req.params.id).populate("espectador");
      res.json(ticket);  
  }

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

module.exports = ticketCtrl;