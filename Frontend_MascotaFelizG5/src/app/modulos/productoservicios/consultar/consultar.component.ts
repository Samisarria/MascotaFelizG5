import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloProductoServicio } from 'src/app/modelos/productoservicio.model';
import { ProductoserviciosService } from 'src/app/servicios/productoservicios.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  listadoProductosServicios: ModeloProductoServicio[] = [];

  constructor(private productoServicioService: ProductoserviciosService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoProductosServicios();
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
