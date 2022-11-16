import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { RegitrarMascotaComponent } from './regitrar-mascota/regitrar-mascota.component';


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ConsultarComponent,
    EliminarComponent,
    RegitrarMascotaComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule
  ]
})
export class MascotasModule { }
