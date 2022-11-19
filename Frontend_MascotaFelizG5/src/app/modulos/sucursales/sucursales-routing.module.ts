import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorRolAdminGuard } from 'src/app/guardianes/validador-rol-admin.guard';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { AgregarComponent } from './agregar/agregar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [ {
  path: 'consultar',
  component: ConsultarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
}, {
  path: 'agregar',
  component: AgregarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
}, {
  path: 'editar/:id',
  component: EditarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
}, {
  path: 'eliminar/:id',
  component: EliminarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
},{
  path: '**',
  component: ConsultarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
