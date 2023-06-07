import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlProducto: string = "http://localhost:3000/api/producto/";

  constructor(private _http: HttpClient) { }

  getProductosDestacados(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        //Cabeceras
      }),
      params: new HttpParams()
        .set('destacado', true)
    }
    return this._http.get(this.urlProducto, httpOptions);
  }

  postCreateProduct(producto: any): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this._http.post(this.urlProducto, producto, httpOption);
  }

}
