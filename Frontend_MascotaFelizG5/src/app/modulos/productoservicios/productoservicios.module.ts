import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoserviciosRoutingModule } from './productoservicios-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ConsultarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ProductoserviciosRoutingModule
  ]
})
export class ProductoserviciosModule { }
