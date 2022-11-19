import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorRolAdminGuard } from 'src/app/guardianes/validador-rol-admin.guard';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { AgregarComponent } from './agregar/agregar.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'registro',
    component: RegistroComponent
  }, {
    path: 'recuperarClave',
    component: RecuperarClaveComponent
  }, {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [ValidadorSesionGuard]
  }, {
    path: 'cerrarsesion',
    component: CerrarsesionComponent,
    canActivate: [ValidadorSesionGuard]
  }, {
    path: 'agregar',
    component: AgregarComponent,
    canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
  }, {
    path: 'editar/:id',
    component: EditarComponent,
    canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
  }, {
    path: 'consultar',
    component: ConsultarComponent,
    canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
  }, {
    path: 'eliminar/:id',
    component: EliminarComponent,
    canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
  }, {
    path: '**',
    component: ConsultarComponent,
    canActivate: [ValidadorSesionGuard, ValidadorRolAdminGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
