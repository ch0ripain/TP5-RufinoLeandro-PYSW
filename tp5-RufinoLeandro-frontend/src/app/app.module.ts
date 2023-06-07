import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { ListaTransaccionComponent } from './components/lista-transaccion/lista-transaccion.component';
import { ListaTicketComponent } from './components/lista-ticket/lista-ticket.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { AltaTransaccionComponent } from './components/alta-transaccion/alta-transaccion.component';
import { AltaTicketComponent } from './components/alta-ticket/alta-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaProductoComponent,
    ListaTransaccionComponent,
    ListaTicketComponent,
    AltaProductoComponent,
    AltaTransaccionComponent,
    AltaTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
