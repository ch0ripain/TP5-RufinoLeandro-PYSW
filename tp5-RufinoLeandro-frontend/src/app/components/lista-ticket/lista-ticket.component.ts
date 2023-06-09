import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-lista-ticket',
  templateUrl: './lista-ticket.component.html',
  styleUrls: ['./lista-ticket.component.css']
})
export class ListaTicketComponent implements OnInit {

  tituloTabla: boolean;
  arrayTickets: Array<Ticket>;
  categoriaFiltro!: string;

  //Resumen de venta
  cantidadLocal!: number;
  cantidadExtranjero!: number;
  totalLocal!: number;
  totalExtranjero!: number;
  mostrarLocal!: boolean;
  mostrarExtranjero!: boolean;

  constructor(private ticketService: TicketService, private router: Router) {
    this.tituloTabla = true;
    this.categoriaFiltro = "l";
    this.arrayTickets = [];
    this.mostrarLocal = false;
    this.mostrarExtranjero = false;
  }

  ngOnInit(): void {
    this.listarTickets(); //Mostrar todos los tickets al cargar la página
  }

  listarTickets() {
    this.mostrarLocal = true;
    this.mostrarExtranjero = true;
    this.reiniciarResumen();
    this.reiniciarArrayTickets();
    this.ticketService.getTickets().subscribe(
      result => {
        let ticket = new Ticket();
        result.forEach((element: any) => {
          Object.assign(ticket, element);
          this.arrayTickets.push(ticket);
          //Resumen venta
          if (ticket.categoriaEspectador == "e") {
            this.cantidadExtranjero++;
            this.totalExtranjero += ticket.precioTicket; // No tiene descuento
          } else {
            if (ticket.categoriaEspectador == "l") {
              this.cantidadLocal++;
              this.totalLocal += ticket.precioCobrado; // 20% descuento
            }
          }

          //Nuevo ticket para seguir el recorrido
          ticket = new Ticket();
        });
      },
      error => {
        alert("Error obteniendo todos los tickets!" + error);
      }
    )

  }

  reiniciarArrayTickets() {
    this.arrayTickets = [];
  }

  listarTicketsPorCategoria() {
    this.mostrarLocal = false;
    this.mostrarExtranjero = false;

    if (this.categoriaFiltro == "l") {
      this.mostrarLocal = true;
    } else {
      if (this.categoriaFiltro == "e") {
        this.mostrarExtranjero = true;
      }
    }
    this.reiniciarResumen();
    this.reiniciarArrayTickets();
    this.ticketService.getTicketsPorEspectador(this.categoriaFiltro).subscribe(
      result => {
        let ticketFiltrado = new Ticket();
        result.forEach((element: any) => {
          Object.assign(ticketFiltrado, element);
          this.arrayTickets.push(ticketFiltrado);
          //Resumen venta
          if (ticketFiltrado.categoriaEspectador == "e") {
            this.cantidadExtranjero++;
            this.totalExtranjero += ticketFiltrado.precioTicket; // No tiene descuento
          } else {
            if (ticketFiltrado.categoriaEspectador == "l") {
              this.cantidadLocal++;
              this.totalLocal += ticketFiltrado.precioCobrado; // 20% descuento
            }
          }

          //Reinicio ticket para el recorrido
          ticketFiltrado = new Ticket();
        });
      },
      error => {
        alert("Error filtrando los tickets por categoria" + error);
      }
    )
  }

  volver() {
    this.router.navigate(["alta-ticket", 0])

  }

  modificarTicket(ticketModificado: Ticket) {
    this.router.navigate(["alta-ticket", ticketModificado._id])
  }

  eliminarTicket(id: string) {
    this.ticketService.deleteTicket(id).subscribe(
      result => {
        alert("Ticket eliminado correctamente!");
        if (this.tituloTabla) {
          this.listarTickets(); //Actualizo la lista de todos los tickets
        } else {
          if (!this.tituloTabla) {
            this.listarTicketsPorCategoria(); //Actualizo la lista por categoria
          }
        }
      },
      error => {
        alert("Error eliminando el ticket!" + error);
      }
    )
  }

  reiniciarResumen() {
    //Resumen de venta
    this.cantidadLocal = 0;
    this.cantidadExtranjero = 0;
    this.totalLocal = 0;
    this.totalExtranjero = 0;
  }


}
