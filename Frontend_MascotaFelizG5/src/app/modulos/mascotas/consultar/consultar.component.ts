import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { modelMascota } from 'src/app/modelos/mascota.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  listadoMascotas: modelMascota[] = [];
  usuarioService: any;

  constructor(private mascotaService: MascotasService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
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
