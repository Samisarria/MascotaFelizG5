import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css','../../../../assets/bootstrap-5.2.2/css/bootstrap.min.css',
  '../../../../assets/bootstrap-5.2.2/css/bootstrap-utilities.css','../../../../assets/bootstrap-5.2.2/css/bootstrap-reboot.css',
  '../../../../assets/bootstrap-5.2.2/css/bootstrap-grid.css']
})
export class ConsultarComponent implements OnInit {

  listadoUsuarios: ModeloUsuario[] = [];

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoProspectos();
  }

  AgregarUsuario() {
    this.router.navigate(["usuarios/agregar"]);
  }

  ObtenerListadoProspectos() {
    this.usuarioService.ObtenerUsuarios().subscribe((datos: ModeloUsuario[]) => {
      this.listadoUsuarios = datos;
    })
  }

}
