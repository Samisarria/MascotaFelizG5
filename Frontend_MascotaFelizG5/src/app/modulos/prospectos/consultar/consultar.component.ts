import { Component, OnInit } from '@angular/core';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css',]
})
export class ConsultarComponent implements OnInit {

  listadoProspectos: ModeloProspecto[] = [];

  constructor(private prospectoService: ProspectoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProspectos();
  }

  ObtenerListadoProspectos() {
    this.prospectoService.ObtenerProspectos().subscribe((datos: ModeloProspecto[]) => {
      this.listadoProspectos = datos;
    })
  }

}
