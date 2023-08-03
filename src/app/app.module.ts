import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SitiowebComponent } from './sitioweb/sitioweb.component';
import { ViajesComponent } from './sitioweb/ipervinculos/viajes/viajes.component';
import { FechasComponent } from './sitioweb/ipervinculos/fechas/fechas.component';
import { QuienesComponent } from './sitioweb/ipervinculos/quienes/quienes.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SitiowebComponent,
    ViajesComponent,
    FechasComponent,
    QuienesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
