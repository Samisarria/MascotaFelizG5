import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloIdentificar } from 'src/app/modelos/Identificar.modelo';
import { ModeloMascota } from 'src/app/modelos/mascota.model';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { PlanesService } from 'src/app/servicios/planes.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

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
  }

}
