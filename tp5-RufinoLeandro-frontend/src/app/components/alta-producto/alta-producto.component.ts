import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  productoNuevo: Producto;

  constructor(private productoService: ProductoService, private router: Router) {
    this.productoNuevo = new Producto();
    this.productoNuevo.destacado = true;
  }

  ngOnInit(): void {
  }

  guardarProducto() {
    const productoJSON = JSON.stringify(this.productoNuevo);

    this.productoService.postCreateProduct(productoJSON).subscribe(
      result => {
        alert("Producto cargado correctamente!")
        this.router.navigate(["lista-producto"])
      },
      error => {
        alert("Error guardando el producto" + error);
      }
    );
  }

  volver() {
    this.router.navigate(["lista-producto"])
  }

}
