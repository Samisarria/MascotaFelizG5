import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ValidadorRolAdminGuard } from 'src/app/guardianes/validador-rol-admin.guard';
import { ValidadorRolAsesorAdminGuard } from 'src/app/guardianes/validador-rol-asesor.guard';

const routes: Routes = [ {
  path: 'consultar',
  component: ConsultarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAsesorAdminGuard]
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
}, {
  path: '**',
  component: ConsultarComponent,
  canActivate: [ValidadorSesionGuard, ValidadorRolAsesorAdminGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
