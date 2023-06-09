import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Divisa } from 'src/app/models/divisa';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-alta-transaccion',
  templateUrl: './alta-transaccion.component.html',
  styleUrls: ['./alta-transaccion.component.css']
})
export class AltaTransaccionComponent implements OnInit {

  transaccionNueva!: Transaccion;

  arrayCodigos: Array<Divisa> = [];

  constructor(private transaccionService: TransaccionService, private router: Router) {
    this.transaccionNueva = new Transaccion();
  }

  ngOnInit(): void {
    this.transaccionNueva.cantidadDestino = 0;
    this.transaccionNueva.monedaOrigen = "USD";
    this.transaccionNueva.monedaDestino = "ARS";
    this.cargarMonedas();
  }

  obtenerConversion() {
    this.transaccionService.obtenerConversion(this.transaccionNueva.monedaOrigen, this.transaccionNueva.monedaDestino, this.transaccionNueva.cantidadOrigen).subscribe(
      result => {
        this.transaccionNueva.cantidadDestino = result.result.convertedAmount;
        this.transaccionNueva.tasaConversion = this.transaccionNueva.cantidadDestino / this.transaccionNueva.cantidadOrigen;
        this.guardarTransaccion();
      },
      error => {
        alert("Error en la peticion de conversion" + error);
      }
    )
  }



  cargarMonedas() {
    this.transaccionService.obtenerCodigos().subscribe(
      result => {
        this.arrayCodigos.push(new Divisa(result[0].symbol, result[0].name)); //USD
        this.arrayCodigos.push(new Divisa(result[4].symbol, result[4].name)); //ARS
        this.arrayCodigos.push(new Divisa(result[17].symbol, result[17].name)); //BOB
        this.arrayCodigos.push(new Divisa(result[20].symbol, result[20].name)); //BRL
        this.arrayCodigos.push(new Divisa(result[28].symbol, result[28].name)); //CLP
        this.arrayCodigos.push(new Divisa(result[47].symbol, result[47].name)); //EUR
      },
      error => {
        alert("Error cargando monedas" + error);
      }
    )
  }

  guardarTransaccion() {
    const transaccionJSON = JSON.stringify(this.transaccionNueva);
    this.transaccionService.postCreateTransaccion(transaccionJSON).subscribe(
      result => {
        alert("Transaccion guardada correctamente!")
      },
      error => {
        alert("Error guardando la transaccion" + error);
      }
    );
  }

  reiniciarTransaccion() {

  }


}
