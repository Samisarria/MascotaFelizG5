import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectosRoutingModule } from './prospectos-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ConsultarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ProspectosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProspectosModule { }
