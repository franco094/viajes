import { Injectable } from '@angular/core';
import { Reserva } from './reservas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  API: string='https://github.com/franco094/apiviajes';

  constructor(
    private conexionservicio:HttpClient
  ) {}

  reservasInsertar(datos:Reserva):Observable<any>{
    return this.conexionservicio.post(this.API+"?reservasInsertar=1",datos);
  }

  reservasBorrar(id_reserva:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?reservasBorrar="+id_reserva);
  }

  reservasModificar(id_reserva:any, datos:Reserva):Observable<any>{
    return this.conexionservicio.post(this.API+"?reservasModificar="+id_reserva,datos);
  }

  reservasConsultar(id_reserva:any){
    return this.conexionservicio.get(this.API+"?reservasConsultar="+id_reserva);
  }

  reservasListar(){
    return this.conexionservicio.get(this.API+"?reservasListar=");
  }
}
