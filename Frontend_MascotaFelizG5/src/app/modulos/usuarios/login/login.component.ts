import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

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
    private servicioSeguridad: SeguridadService,
    private router: Router,
    public modal: NgbModal) {

  }

  ngOnInit(): void {
  }


  IdentificarUsuario(contenidoModal: any){
    let usuario = this.validator.controls["usuario"].value;
    let clave = this.validator.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();

    this.servicioSeguridad.IdentificarUsuario(usuario, claveCifrada).subscribe((datos: any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/productos-servicios/consultar"]);
    }, (error: any) => {
      this.validator.controls['usuario'].setValue('');
      this.validator.controls['clave'].setValue('');
      this.modal.open(contenidoModal, {centered: true});
    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
