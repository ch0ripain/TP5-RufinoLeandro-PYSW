import { Espectador } from "./espectador";

export class Ticket {
    _id!: string;
    precioTicket!: number;
    precioCobrado!: number;
    categoriaEspectador!: "l" | "e"; //categoría del espectador puede ser: e = Extranjero, l = local
    fechaCompra!: string; // gestionar fecha como string
    espectador!: Espectador;
}
