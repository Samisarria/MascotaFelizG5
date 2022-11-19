import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloUsuario } from 'src/app/modelos/usuario.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css','../../../../assets/bootstrap-5.2.2/css/bootstrap.css']
})
export class AgregarComponent implements OnInit {

  validator: FormGroup = this.builder.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'rol': ['Seleccione el rol del usuario', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    public modal: NgbModal) { }

  ngOnInit(): void {
  }

  Regresar() {
    this.router.navigate(["/usuarios/consultar"]);
  }

  GuardarUsuario(contenidoModal: any) {
    let nombres = this.validator.controls["nombres"].value;
    let apellidos = this.validator.controls["apellidos"].value;
    let identificacion = this.validator.controls["identificacion"].value;
    let rol = this.validator.controls["rol"].value;
    let direccion = this.validator.controls["direccion"].value;
    let correo = this.validator.controls["correo"].value;
    let telefono = this.validator.controls["telefono"].value;

    let usuario = new ModeloUsuario();
    usuario.Nombres = nombres;
    usuario.Apellidos = apellidos;
    usuario.Identificacion = identificacion;
    usuario.Rol = rol;
    usuario.Direccion = direccion;
    usuario.Correo = correo;
    usuario.Telefono = telefono;

    this.usuarioService.CrearUsuarios(usuario).subscribe((datos: ModeloUsuario) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/usuarios/consultar"])
    }, (error: any) => {
      alert('Error')
    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }
}
