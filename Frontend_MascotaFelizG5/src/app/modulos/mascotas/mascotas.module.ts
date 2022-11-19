import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
<<<<<<< HEAD
import { RegitrarMascotaComponent } from './regitrar-mascota/regitrar-mascota.component';
=======
import { AprobarSolicitudComponent } from './aprobar-solicitud/aprobar-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarSolicitudesComponent } from './consultar-solicitudes/consultar-solicitudes.component';
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ConsultarComponent,
    EliminarComponent,
<<<<<<< HEAD
    RegitrarMascotaComponent
=======
    AprobarSolicitudComponent,
    ConsultarSolicitudesComponent
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MascotasModule { }
