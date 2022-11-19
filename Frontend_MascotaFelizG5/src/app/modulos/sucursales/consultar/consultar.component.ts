import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.model';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  listadoSucursales: ModeloSucursal[] = [];

  constructor(private sucursaleService: SucursalesService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoSucursales();
  }

  AgregarUsuario() {
    this.router.navigate(["sucursales/agregar"]);
  }

  ObtenerListadoSucursales() {
    this.sucursaleService.ObtenerSucursales().subscribe((datos: ModeloSucursal[]) => {
      this.listadoSucursales = datos;
    })
  }

}
