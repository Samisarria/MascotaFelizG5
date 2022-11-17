import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { AprobarSolicitudComponent } from './aprobar-solicitud/aprobar-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarSolicitudesComponent } from './consultar-solicitudes/consultar-solicitudes.component';


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ConsultarComponent,
    EliminarComponent,
    AprobarSolicitudComponent,
    ConsultarSolicitudesComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MascotasModule { }
