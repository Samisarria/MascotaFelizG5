import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloProductoServicio } from 'src/app/modelos/productoservicio.model';
import { ProductoserviciosService } from 'src/app/servicios/productoservicios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  validator: FormGroup = this.builder.group({
    'tipo': ['Seleccione el tipo', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private productoServicioService: ProductoserviciosService,
    private router: Router,
    public modal: NgbModal) { }

  ngOnInit(): void {
  }

  Regresar() {
    this.router.navigate(["/productos-servicios/consultar"]);
  }

  GuardarProductoServicio(contenidoModal: any) {
    let tipo = this.validator.controls["tipo"].value;
    let descripcion = this.validator.controls["descripcion"].value;
    let precio = this.validator.controls["precio"].value;

    let producto = new ModeloProductoServicio();
    producto.Tipo = tipo;
    producto.Descripcion = descripcion;
    producto.Precio = Number.parseInt(precio);

    this.productoServicioService.CrearProductosServicios(producto).subscribe((datos: ModeloProductoServicio) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/productos-servicios/consultar"])
    }, (error: any) => {
      alert('Error')
    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
