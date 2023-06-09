import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-lista-transaccion',
  templateUrl: './lista-transaccion.component.html',
  styleUrls: ['./lista-transaccion.component.css']
})
export class ListaTransaccionComponent implements OnInit {

  arrayTransacciones: Array<Transaccion>;
  tituloTabla: boolean;
  monedaOrigen!: string;
  monedaDestino!: string;

  constructor(private transaccionService: TransaccionService, private router: Router) {
    this.tituloTabla = true;
    this.arrayTransacciones = [];
  }

  ngOnInit(): void {
    this.listarTransacciones();
  }

  listarTransacciones() {
    this.arrayTransacciones = [];
    this.monedaOrigen = "";
    this.monedaDestino = "";
    this.transaccionService.getTransacciones().subscribe(
      result => {
        let transaccion = new Transaccion();
        result.forEach((element: any) => {
          Object.assign(transaccion, element);
          this.arrayTransacciones.push(transaccion);
          transaccion = new Transaccion();
        });
      },
      error => {
        alert("Error obteniendo todas las transacciones" + error);
      }
    )
  }

  listarTransaccionesPorFiltro() {
    this.arrayTransacciones = [];
    this.transaccionService.getTransaccionesPorFiltro(this.monedaOrigen, this.monedaDestino).subscribe(
      result => {
        let transaccionFiltro = new Transaccion();
        result.forEach((element: any) => {
          Object.assign(transaccionFiltro, element);
          this.arrayTransacciones.push(transaccionFiltro);
          transaccionFiltro = new Transaccion();
        });
      },
      error => {
        alert("Error obteniendo transacciones por filtro" + error);
      }
    )

  }

  reiniciarArrayTransaccion() {
    this.arrayTransacciones = [];
  }

  volver() {
    this.router.navigate(["alta-transaccion", 0])
  }

}
