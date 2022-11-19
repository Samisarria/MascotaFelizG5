import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloSucursal } from 'src/app/modelos/sucursal.model';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  validator: FormGroup = this.builder.group({
    'nombre': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'departamento': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private sucursalService: SucursalesService,
    private router: Router,
    public modal: NgbModal) { }

  ngOnInit(): void {
  }

  Regresar() {
    this.router.navigate(["/sucursales/consultar"]);
  }

  GuardarSucursal(contenidoModal: any) {
    let nombre = this.validator.controls["nombre"].value;
    let direccion = this.validator.controls["direccion"].value;
    let ciudad = this.validator.controls["ciudad"].value;
    let departamento = this.validator.controls["departamento"].value;

    let sucursal = new ModeloSucursal();
    sucursal.Nombre = nombre;
    sucursal.Direccion = direccion;
    sucursal.Ciudad = ciudad;
    sucursal.Departamento = departamento;

    this.sucursalService.CrearSucursales(sucursal).subscribe((datos: ModeloSucursal) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/sucursales/consultar"])
    }, (error: any) => {
      alert('Error')
    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
