import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/Identificar.modelo';
import { ModeloProductoServicio } from 'src/app/modelos/productoservicio.model';
import { ProductoserviciosService } from 'src/app/servicios/productoservicios.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  rolUsuario?: string = '';
  subs: Subscription = new Subscription();
  listadoProductosServicios: ModeloProductoServicio[] = [];

  constructor(private productoServicioService: ProductoserviciosService, private router: Router, private seguridadServicio: SeguridadService,) { }

  ngOnInit(): void {
    this.ObtenerListadoProductosServicios();
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
      this.rolUsuario = datos.datos?.rol;
    });
  }

  AgregarProductoServicio() {
    this.router.navigate(["productos-servicios/agregar"]);
  }

  ObtenerListadoProductosServicios() {
    this.productoServicioService.ObtenerProductosServicios().subscribe((datos: ModeloProductoServicio[]) => {
      this.listadoProductosServicios = datos;
    })
  }

}
