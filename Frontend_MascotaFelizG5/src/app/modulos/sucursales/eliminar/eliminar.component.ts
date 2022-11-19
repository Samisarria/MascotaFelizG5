import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloSucursal } from 'src/app/modelos/sucursal.model';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

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

  EliminarSucursal(contenidoModal: any) {
    this.sucursalService.EliminarSucursal(this.id).subscribe((datos: ModeloSucursal) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/sucursales/consultar"])
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
