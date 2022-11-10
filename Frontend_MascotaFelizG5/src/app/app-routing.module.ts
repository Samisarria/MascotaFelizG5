import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlantillaComponent } from './layout/plantilla/plantilla.component';

const routes: Routes = [
  { path: 'inicio', component: PlantillaComponent},
  { path: '', pathMatch: 'full', redirectTo: '/inicio'},
  { path: 'usuarios', loadChildren: () => import("./modulos/usuarios/usuarios.module").then(x => x.UsuariosModule) },
  { path: '**', component: PlantillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }