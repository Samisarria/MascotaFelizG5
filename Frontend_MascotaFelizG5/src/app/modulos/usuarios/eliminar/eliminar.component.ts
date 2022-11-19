import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloUsuario } from 'src/app/modelos/usuario.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  id:string = '';
  validator: FormGroup = this.builder.group({
    'id': [''],
    'nombres': [''],
    'apellidos': [''],
    'identificacion': [''],
    'rol': [''],
    'direccion': [''],
    'correo': [''],
    'telefono': ['']
  })

  constructor(private builder: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute,
    public modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarUsuario(this.id);
  }

  Regresar() {
    this.router.navigate(["/usuarios/consultar"]);
  }

  BuscarUsuario(id: string) {
    this.usuarioService.ObtenerUsuariosPorId(id).subscribe((datos: ModeloUsuario) => {
      this.validator.controls["id"].setValue(this.id);
      this.validator.controls["nombres"].setValue(datos.Nombres);
      this.validator.controls["apellidos"].setValue(datos.Apellidos);
      this.validator.controls["identificacion"].setValue(datos.Identificacion);
      this.validator.controls["rol"].setValue(datos.Rol);
      this.validator.controls["direccion"].setValue(datos.Direccion);
      this.validator.controls["correo"].setValue(datos.Correo);
      this.validator.controls["telefono"].setValue(datos.Telefono);
    }, (error: ModeloUsuario) => {

    });
  }

  EliminarUsuario(contenidoModal: any) {
    this.usuarioService.EliminarUsuario(this.id).subscribe((datos: ModeloUsuario) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/usuarios/consultar"])
    }, (error: any) => {
      alert('Error')
    });
  }

  ConsultarModal(contenidoModal: any) {
    this.modal.open(contenidoModal, {centered: true});
  }

  CerrarModal() {
    this.modal.dismissAll();
  }
}
