import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validator: FormGroup = this.builder.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private builder: FormBuilder,
    private servicioSeguridad: SeguridadService, private router: Router) {

  }

  ngOnInit(): void {
  }


  IdentificarUsuario(){
    let usuario = this.validator.controls["usuario"].value;
    let clave = this.validator.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();

    this.servicioSeguridad.IdentificarUsuario(usuario, claveCifrada).subscribe((datos: any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
    });
  }

}
