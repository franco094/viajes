import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SitiowebComponent } from './sitioweb/sitioweb.component';
import { ViajesComponent } from './sitioweb/ipervinculos/viajes/viajes.component';
import { FechasComponent } from './sitioweb/ipervinculos/fechas/fechas.component';
import { QuienesComponent } from './sitioweb/ipervinculos/quienes/quienes.component';
import { ReservasModificarComponent } from './dashboard/reservas-modificar/reservas-modificar.component';

const routes: Routes = [
  {path:"" ,redirectTo:"sitioweb",pathMatch:"full"},
  {path:"sitioweb", component:SitiowebComponent, pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'viajes',component:ViajesComponent},
  {path:'fechas',component:FechasComponent},
  {path:'quienes',component:QuienesComponent},
  {path:'reservasModificar',component:ReservasModificarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
