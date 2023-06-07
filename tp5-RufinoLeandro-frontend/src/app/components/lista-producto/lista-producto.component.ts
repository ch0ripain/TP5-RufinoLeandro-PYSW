import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {


  productoActivo!: any;
  arrayProductos!: Array<Producto>;

  constructor(private productoService: ProductoService, private router: Router) {
    this.arrayProductos = [];
  }

  ngOnInit(): void {
    this.getProductosDestacados();
  }

  getProductosDestacados() {
    this.productoService.getProductosDestacados().subscribe(
      result => {
        let producto = new Producto();
        result.forEach((element: any) => {
          Object.assign(producto, element);
          this.arrayProductos.push(producto);
          producto = new Producto();
        });
        this.productoActivo = this.arrayProductos[0];
      },
      error => {
        alert("Error obteniendo los productos!");
      }
    )
  }

  agregarProducto() {
    this.router.navigate(["alta-producto", 0])
  }
}
