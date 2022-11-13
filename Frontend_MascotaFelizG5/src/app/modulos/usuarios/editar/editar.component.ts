import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string = '';
  clave: string = '';
  validator: FormGroup = this.builder.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'rol': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]
  })


  constructor(private builder: FormBuilder, private usuarioService: UsuariosService, private router: Router, private route: ActivatedRoute) { }

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
      this.validator.controls["ciudad"].setValue(datos.Ciudad);
      this.validator.controls["departamento"].setValue(datos.Departamento);
      this.validator.controls["rol"].setValue(datos.Rol);
      this.validator.controls["direccion"].setValue(datos.Direccion);
      this.validator.controls["correo"].setValue(datos.Correo);
      this.validator.controls["telefono"].setValue(datos.Telefono);
      if (datos.Clave) {
        this.clave = datos.Clave;
      }
    }, (error: ModeloUsuario) => {

    });
  }

  GuardarUsuario() {
    let nombres = this.validator.controls["nombres"].value;
    let apellidos = this.validator.controls["apellidos"].value;
    let identificacion = this.validator.controls["identificacion"].value;
    let rol = this.validator.controls["rol"].value;
    let direccion = this.validator.controls["direccion"].value;
    let correo = this.validator.controls["correo"].value;
    let telefono = this.validator.controls["telefono"].value;

    let usuario = new ModeloUsuario();
    usuario.Id = this.id;
    usuario.Nombres = nombres;
    usuario.Apellidos = apellidos;
    usuario.Identificacion = identificacion;
    usuario.Rol = rol;
    usuario.Direccion = direccion;
    usuario.Correo = correo;
    usuario.Telefono = telefono;
    usuario.Clave = this.clave;

    this.usuarioService.ActualizarUsuarios(usuario).subscribe((datos: ModeloUsuario) => {
      alert('Usuario actualizado')
      this.router.navigate(["/usuarios/consultar"])
    }, (error: any) => {
      alert('Error')
    });
  }

}
