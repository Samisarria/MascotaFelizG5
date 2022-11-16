import { NgModule } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guadianes/validador-sesion.guard';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegitrarMascotaComponent } from './regitrar-mascota/regitrar-mascota.component';

const routes: Routes = [
  {
    path: 'registrar-mascota', component: RegitrarMascotaComponent, canActivate: [ValidadorSesionGuard]

  },
  {
    path: 'consultar-mascota', component: ConsultarComponent, canActivate: [ValidadorSesionGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
