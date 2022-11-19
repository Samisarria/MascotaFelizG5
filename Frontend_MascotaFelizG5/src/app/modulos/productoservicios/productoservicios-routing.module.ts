import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorRolAdminGuard } from 'src/app/guardianes/validador-rol-admin.guard';
import { ValidadorRolAsesorAdminGuard } from 'src/app/guardianes/validador-rol-asesor.guard';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { AgregarComponent } from './agregar/agregar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [ {
  path: 'consultar',
  component: ConsultarComponent,
  canActivate: [ValidadorSesionGuard]
}, {
  path: 'agregar',
  component: AgregarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAsesorAdminGuard]
}, {
  path: 'editar/:id',
  component: EditarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAsesorAdminGuard]
}, {
  path: 'eliminar/:id',
  component: EliminarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
},{
  path: '**',
  component: ConsultarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAsesorAdminGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoserviciosRoutingModule { }
