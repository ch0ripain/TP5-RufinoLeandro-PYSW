import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-alta-ticket',
  templateUrl: './alta-ticket.component.html',
  styleUrls: ['./alta-ticket.component.css']
})
export class AltaTicketComponent implements OnInit {

  ticket: Ticket;
  arrayEspectadores: Array<Espectador>;
  accion!: string; //Tendra los valores de crear o actualizar
  espectador!: Espectador;

  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.ticket = new Ticket();
    this.arrayEspectadores = []
  }

  ngOnInit(): void {
    this.cargarEspectadores();
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.ticket = new Ticket();
        this.ticket.categoriaEspectador = "l";
      } else {
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }

  guardarTicket() {
    //Fecha de Compra
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    this.ticket.fechaCompra = formattedDate;

    console.log(this.ticket);

    //JSON
    const ticketJSON = JSON.stringify(this.ticket);

    //Guardo el objeto consumiendo el servicio POST
    this.ticketService.postCreateTicket(ticketJSON).subscribe(
      result => {
        alert("Ticket guardado correctamente!");
        this.router.navigate(["lista-ticket"]);
      },
      error => {
        alert("Error guardadon el ticket!" + error);
      }
    );

  }

  modificarTicket() {
    //JSON
    const ticketModificadoJSON = JSON.stringify(this.ticket);

    //Consumo el service para modificar
    this.ticketService.putEditTicket(ticketModificadoJSON).subscribe(
      result => {
        alert("Ticket modificado con éxito!")
        this.router.navigate(["lista-ticket"])
      },
      error => {
        alert("Error modificando el ticket!" + error);
      }
    )

  }

  cargarTicket(id: string) {
    this.ticketService.getTicketPorId(id).subscribe(
      result => {
        Object.assign(this.ticket, result);
      }
    );
  }

  cargarEspectadores() {
    this.arrayEspectadores = [];
    this.ticketService.getEspectadores().subscribe(
      result => {
        let espectador = new Espectador();
        result.forEach((element: any) => {
          Object.assign(espectador, element);
          this.arrayEspectadores.push(espectador);
          espectador = new Espectador();
        });
      },
      error => {
        alert("Error obteniendo los espectadores!" + error);
      }
    )
  }

  calcularDescuento() {

    if (this.ticket.categoriaEspectador == "e") {
      this.ticket.precioCobrado = this.ticket.precioTicket;
    } else {
      if (this.ticket.categoriaEspectador == "l") {
        this.ticket.precioCobrado = this.ticket.precioTicket * 0.8; // Descuento del 20%
      }
    }
  }

  volver() {
    this.router.navigate(["lista-ticket"]);
  }

}
