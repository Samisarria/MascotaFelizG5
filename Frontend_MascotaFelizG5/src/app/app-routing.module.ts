import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaComponent } from './layout/plantilla/plantilla.component';

const routes: Routes = [
  { path: 'inicio', component: PlantillaComponent},
  { path: '', pathMatch: 'full', redirectTo: '/inicio'},
  { path: 'usuarios', loadChildren: () => import("./modulos/usuarios/usuarios.module").then(x => x.UsuariosModule) },
  { path: 'prospectos', loadChildren: () => import("./modulos/prospectos/prospectos.module").then(x => x.ProspectosModule) },
  { path: 'planes', loadChildren: () => import("./modulos/planes/planes.module").then(x => x.PlanesModule) },
  { path: 'mascotas', loadChildren: () => import("./modulos/mascotas/mascotas.module").then(x => x.MascotasModule) },
  { path: 'sucursales', loadChildren: () => import("./modulos/sucursales/sucursales.module").then(x => x.SucursalesModule) },
  { path: 'productos-servicios', loadChildren: () => import("./modulos/productoservicios/productoservicios.module").then(x => x.ProductoserviciosModule) },
  { path: '**', component: PlantillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
