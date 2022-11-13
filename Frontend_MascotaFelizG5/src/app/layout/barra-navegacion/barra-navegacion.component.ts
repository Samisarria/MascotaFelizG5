import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/Identificar.modelo';
import { SeguridadService } from '../../servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css','../../../shared/css/bootstrap.min.css',
  '../../../shared/css/font-awesome.min.css','../../../shared/css/nivo-lightbox.css',
  '../../../shared/css/nivo_themes/default/default.css','../../../shared/css/templatemo-style.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
      this.seInicioSesion = datos.estaIdentificado;
    });
  }

  ingresar = () => {
    this.router.navigateByUrl('/usuarios/login');
  };

  salir = () => {
    this.router.navigateByUrl('/usuarios/cerrarsesion');
  };

}
