import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guadianes/validador-sesion.guard';
import { AgregarComponent } from './agregar/agregar.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'registro',
    component: RegistroComponent
  }, {
    path: 'cerrarsesion',
    component: CerrarsesionComponent,
    canActivate: [ValidadorSesionGuard]
  }, {
    path: 'agregar',
    component: AgregarComponent,
    canActivate: [ValidadorSesionGuard]
  }, {
    path: 'editar/:id',
    component: EditarComponent,
    canActivate: [ValidadorSesionGuard]
  }, {
    path: 'consultar',
    component: ConsultarComponent,
    canActivate: [ValidadorSesionGuard]
  }, {
    path: 'eliminar/:id',
    component: EliminarComponent,
    canActivate: [ValidadorSesionGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
