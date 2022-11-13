import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  validator: FormGroup = this.builder.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'departamento': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  })


  constructor(private builder: FormBuilder, private prospectoService: ProspectoService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProspecto() {
    let nombres = this.validator.controls["nombres"].value;
    let apellidos = this.validator.controls["apellidos"].value;
    let ciudad = this.validator.controls["ciudad"].value;
    let departamento = this.validator.controls["departamento"].value;
    let direccion = this.validator.controls["direccion"].value;
    let correo = this.validator.controls["correo"].value;
    let telefono = this.validator.controls["telefono"].value;
    let comentario = this.validator.controls["comentario"].value;

    let prospecto = new ModeloProspecto();
    prospecto.Nombres = nombres;
    prospecto.Apellidos = apellidos;
    prospecto.Ciudad = ciudad;
    prospecto.Departamento = departamento;
    prospecto.Direccion = direccion;
    prospecto.Correo = correo;
    prospecto.Telefono = telefono;
    prospecto.Comentario = comentario;

    this.prospectoService.CrearProspecto(prospecto).subscribe((datos: ModeloProspecto) => {
      alert('Prospecto almacenado')
      this.router.navigate(["/inicio"])
    }, (error: any) => {
      alert('Error')
    });
  }

}
