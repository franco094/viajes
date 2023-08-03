import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReservasService } from './reservas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  reservas:any;
  
  constructor(
    public formulario: FormBuilder,
    private servicio: ReservasService
  ) {}

  ngOnInit(): void {
    this.servicio.reservasListar().subscribe(respuesta=>{
      this.reservas=respuesta;
    });
  }

  reservasBorrar(id_reserva:any, iControl:any){
    if(window.confirm("¿Seguro que quiere borrar esta reserva?")){
      this.servicio.reservasBorrar(id_reserva).subscribe(
        (respuesta)=>{
          this.reservas.splice(iControl,1);
        }
      );
    }
}
}
