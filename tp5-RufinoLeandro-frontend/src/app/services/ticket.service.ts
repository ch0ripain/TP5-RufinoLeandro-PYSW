import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlTicket: string = "http://localhost:3000/api/ticket/";
  urlEspectador: string = "http://localhost:3000/api/espectador/";

  constructor(private _http: HttpClient) { }

  //El servicio GET: Recuperar todos los tickets, indicando el espectador involucrado.
  getTickets(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        //Cabeceras
      })
    }
    return this._http.get(this.urlTicket, httpOption);
  }

  //El servicio GET: Recupere SOLO los tiket de determinada categoría de espectador
  getTicketsPorEspectador(categoria: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        //Cabeceras
      }),
      params: new HttpParams()
        .set('categoria', categoria)
    }
    return this._http.get(this.urlTicket, httpOption);
  }

  //Recuperar ticket por id
  getTicketPorId(id: string): Observable<any> {
    return this._http.get(this.urlTicket + id);
  }

  //POST: Dar de alta un ticket. Se debería poder elegir el espectador que compre el ticket, ej desde listado.
  postCreateTicket(ticket: any): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this._http.post(this.urlTicket, ticket, httpOption);
  }

  //PUT: Modificar un ticket.
  putEditTicket(ticketModificado: any): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this._http.put(this.urlTicket + ticketModificado._id, ticketModificado, httpOption);
  }

  //El servicio DELETE: Eliminar un ticket.
  deleteTicket(_id: string): Observable<any> {
    return this._http.delete(this.urlTicket + _id);
  }

  //Recuperar los espectadores
  getEspectadores(): Observable<any> {
    return this._http.get(this.urlEspectador);
  }




}
