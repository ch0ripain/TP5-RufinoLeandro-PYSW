import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  apiKey: string = "4e47861337mshe1f0ee70eec1fbfp1dc9ecjsn6a3497c7eefc";
  private urlTransaccion: string = "http://localhost:3000/api/transaccion/";

  constructor(private _http: HttpClient) { }

  public obtenerConversion(from: string, to: string, amount: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }),
      params: new HttpParams()
        .set('from', from)
        .set('to', to)
        .set('amount', amount)
    }
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/convert", httpOptions);
  }

  public obtenerCodigos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }),
    }
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies", httpOptions);
  }

  postCreateTransaccion(transaccion: any): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this._http.post(this.urlTransaccion, transaccion, httpOption);
  }

  getTransacciones(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        //Cabeceras
      })
    }
    return this._http.get(this.urlTransaccion, httpOption);
  }

  getTransaccionesPorFiltro(monedaOrigen: string, monedaDestino: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        //Cabeceras
      }),
      params: new HttpParams()
        .set('monedaOrigen', monedaOrigen)
        .set('monedaDestino', monedaDestino)
    }
    return this._http.get(this.urlTransaccion, httpOption);
  }

}
