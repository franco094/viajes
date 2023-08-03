import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-reservas-modificar',
  templateUrl: './reservas-modificar.component.html',
  styleUrls: ['./reservas-modificar.component.css']
})
export class ReservasModificarComponent implements OnInit{
  @Input() set reserva(valor: { nombre: any; apellido: any; dni: any; destino: any; fecha: any, pasajeros: any, correo: any}){
    this.crearForm();
    if(valor){
      this.reservaRegistroOriginal = valor;
      this.formEditarReserva.patchValue({
        nombre: valor.nombre,
        apellido: valor.apellido,
        dni: valor.dni,
        destino: valor.destino,
        fecha: valor.fecha,
        pasajeros: valor.pasajeros,
        correo: valor.correo
      })
    }
  }

  @Output() cerrar=new EventEmitter();

  formEditarReserva!: FormGroup;
  reservaRegistroOriginal: any;

  constructor (private servicio: ReservasService, private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.formEditarReserva=this.fb.group({
      nombre: '',
      apellido: '',
      dni:  '',
      destino: '',
      fecha: '',
      pasajeros: '',
      correo: '',
    })
  }

  onGuardarModificacion(){
    this.servicio.reservasModificar(this.reservaRegistroOriginal.$id_reserva,this.formEditarReserva.value);
  }

}
