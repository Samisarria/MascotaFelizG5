import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloSucursal } from 'src/app/modelos/sucursal.model';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string = '';
  validator: FormGroup = this.builder.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'departamento': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private sucursalService: SucursalesService,
    private router: Router,
    public modal: NgbModal,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarSucursal(this.id);
  }

  Regresar() {
    this.router.navigate(["/sucursales/consultar"]);
  }

  BuscarSucursal(id: string) {
    this.sucursalService.ObtenerSucursalesPorId(id).subscribe((datos: ModeloSucursal) => {
      this.validator.controls["id"].setValue(this.id);
      this.validator.controls["nombre"].setValue(datos.Nombre);
      this.validator.controls["direccion"].setValue(datos.Direccion);
      this.validator.controls["ciudad"].setValue(datos.Ciudad);
      this.validator.controls["departamento"].setValue(datos.Departamento);
    }, (error: ModeloSucursal) => {

    });
  }

  GuardarSucursal(contenidoModal: any) {
    let nombre = this.validator.controls["nombre"].value;
    let direccion = this.validator.controls["direccion"].value;
    let ciudad = this.validator.controls["ciudad"].value;
    let departamento = this.validator.controls["departamento"].value;

    let sucursal = new ModeloSucursal();
    sucursal.Id = this.id;
    sucursal.Nombre = nombre;
    sucursal.Direccion = direccion;
    sucursal.Ciudad = ciudad;
    sucursal.Departamento = departamento;

    this.sucursalService.ActualizarSucursales(sucursal).subscribe((datos: ModeloSucursal) => {
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
