import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { modelMascota } from 'src/app/modelos/mascota.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';
=======
import { ModeloIdentificar } from 'src/app/modelos/Identificar.modelo';
import { ModeloMascota } from 'src/app/modelos/mascota.model';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { PlanesService } from 'src/app/servicios/planes.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

<<<<<<< HEAD
  listadoMascotas: modelMascota[] = [];
  usuarioService: any;

  constructor(private mascotaService: MascotasService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
=======
  id: string = '';
  rolUsuario?: string;
  listadoMascotas: ModeloMascota[] = [];
  planesMascota: ModeloPlan[] = [];
  usuarioService: any;

  constructor(private mascotaService: MascotasService,
    private router: Router,
    private planesService: PlanesService,
    private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.id = this.seguridadService.ObtenerIdUsuarioSesion();
    this.ObtenerMascotasUsuario(this.id);
    //this.ObtenerListadoMascotas();
    this.ObtenerPlanes();
    this.ObtenerRolUsuario();
  }

  AgregarMascota() {
    this.router.navigate(["mascotas/agregar"]);
  }

  ObtenerMascotasUsuario(id: string){
    this.mascotaService.ObtenerMascotasPorUsuario(id).subscribe((datos: ModeloMascota[]) => {
      this.listadoMascotas = datos;
    }, (error: ModeloMascota[]) => {

    })
  }

  ObtenerRolUsuario() {
    this.seguridadService.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
      this.rolUsuario = datos.datos?.rol;
    });
  }

  ObtenerListadoMascotas() {
    this.mascotaService.ObtenerMascotas().subscribe((datos: ModeloMascota[]) => {
      this.listadoMascotas = datos;
    })
  }

  ObtenerPlanes() {
    this.planesService.ObtenerPlanes().subscribe((datos: ModeloPlan[]) => {
      this.planesMascota = datos;
    }, (error: ModeloPlan) => {
    })
  }

  ObtenerNombrePlan(id: any): any {
    return this.planesMascota.filter(x => x.Id == id)[0] ? this.planesMascota.filter(x => x.Id == id)[0].Nombre : 'Sin plan asignado';
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
  }

  AgregarMascota() {
    this.router.navigate(["mascota/agregar"]);
  }

  ObtenerListadoMascotas() {
    this.mascotaService.ObtenerMascotas().subscribe((datos: modelMascota[]) => {
      this.listadoMascotas = datos;
    })
  }


}
