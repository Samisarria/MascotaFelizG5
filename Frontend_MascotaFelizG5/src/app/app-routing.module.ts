import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaComponent } from './layout/plantilla/plantilla.component';
import { MascotaComponent } from './plantilla/mascota/mascota.component';

const routes: Routes = [
  { path: 'inicio', component: PlantillaComponent},
  { path: '', pathMatch: 'full', redirectTo: '/inicio'},
  { path: 'usuarios', loadChildren: () => import("./modulos/usuarios/usuarios.module").then(x => x.UsuariosModule) },
  { path: 'prospectos', loadChildren: () => import("./modulos/prospectos/prospectos.module").then(x => x.ProspectosModule) },
  { path: 'planes', loadChildren: () => import("./modulos/planes/planes.module").then(x => x.PlanesModule) },
<<<<<<< HEAD
  { path: 'mascota', loadChildren: ()=> import("./modulos/mascotas/mascotas.module").then(x => x.MascotasModule)},
=======
  { path: 'mascotas', loadChildren: () => import("./modulos/mascotas/mascotas.module").then(x => x.MascotasModule) },
  { path: 'sucursales', loadChildren: () => import("./modulos/sucursales/sucursales.module").then(x => x.SucursalesModule) },
  { path: 'productos-servicios', loadChildren: () => import("./modulos/productoservicios/productoservicios.module").then(x => x.ProductoserviciosModule) },
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
  { path: '**', component: PlantillaComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
