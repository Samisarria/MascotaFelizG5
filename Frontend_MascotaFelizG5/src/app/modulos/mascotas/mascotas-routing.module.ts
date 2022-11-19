import { NgModule } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ValidadorSesionGuard } from 'src/app/guadianes/validador-sesion.guard';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegitrarMascotaComponent } from './regitrar-mascota/regitrar-mascota.component';

const routes: Routes = [
  {
    path: 'registrar-mascota', component: RegitrarMascotaComponent, canActivate: [ValidadorSesionGuard]

  },
  {
    path: 'consultar-mascota', component: ConsultarComponent, canActivate: [ValidadorSesionGuard]
    
=======
import { ValidadorRolAdminGuard } from 'src/app/guardianes/validador-rol-admin.guard';
import { ValidadorRolAsesorAdminGuard } from 'src/app/guardianes/validador-rol-asesor.guard';
import { ValidadorRolClienteAdminGuard } from 'src/app/guardianes/validador-rol-cliente.guard';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { AgregarComponent } from './agregar/agregar.component';
import { AprobarSolicitudComponent } from './aprobar-solicitud/aprobar-solicitud.component';
import { ConsultarSolicitudesComponent } from './consultar-solicitudes/consultar-solicitudes.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [
  {
    path:'aprobar-solicitudes/:id',
    component: AprobarSolicitudComponent,
    canActivate : [ValidadorSesionGuard, ValidadorRolAsesorAdminGuard]
  },{
    path:'consultar-solicitudes',
    component: ConsultarSolicitudesComponent,
    canActivate : [ValidadorSesionGuard, ValidadorRolAsesorAdminGuard]
  },{
    path:'consultar',
    component: ConsultarComponent,
    canActivate : [ValidadorSesionGuard]
  },{
    path:'agregar',
    component: AgregarComponent,
    canActivate : [ValidadorSesionGuard, ValidadorRolClienteAdminGuard]
  },{
    path:'editar/:id',
    component: EditarComponent,
    canActivate : [ValidadorSesionGuard, ValidadorRolClienteAdminGuard]
  },{
    path:'eliminar/:id',
    component: EliminarComponent,
    canActivate : [ValidadorSesionGuard, ValidadorRolClienteAdminGuard]
  }, {
    path:'**',
    component: ConsultarComponent,
    canActivate : [ValidadorSesionGuard]
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
