import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { AltaTransaccionComponent } from './components/alta-transaccion/alta-transaccion.component';
import { ListaTransaccionComponent } from './components/lista-transaccion/lista-transaccion.component';
import { AltaTicketComponent } from './components/alta-ticket/alta-ticket.component';
import { ListaTicketComponent } from './components/lista-ticket/lista-ticket.component';

const routes: Routes = [
  { path: 'alta-producto/:id', component: AltaProductoComponent },
  { path: 'lista-producto', component: ListaProductoComponent },
  { path: 'alta-transaccion/:id', component: AltaTransaccionComponent },
  { path: 'lista-transaccion', component: ListaTransaccionComponent },
  { path: 'alta-ticket/:id', component: AltaTicketComponent },
  { path: 'lista-ticket', component: ListaTicketComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista-producto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
