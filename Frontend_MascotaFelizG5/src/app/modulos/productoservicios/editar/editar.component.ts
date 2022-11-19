import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloProductoServicio } from 'src/app/modelos/productoservicio.model';
import { ProductoserviciosService } from 'src/app/servicios/productoservicios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string = '';
  validator: FormGroup = this.builder.group({
    'id': ['', [Validators.required]],
    'tipo': ['Seleccione el tipo', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private productoServicioService: ProductoserviciosService,
    private router: Router,
    private route: ActivatedRoute,
    public modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarProductoServicio(this.id);
  }

  Regresar() {
    this.router.navigate(["/productos-servicios/consultar"]);
  }

  BuscarProductoServicio(id: string) {
    this.productoServicioService.ObtenerProductosServiciosPorId(id).subscribe((datos: ModeloProductoServicio) => {
      this.validator.controls["id"].setValue(this.id);
      this.validator.controls["tipo"].setValue(datos.Tipo);
      this.validator.controls["descripcion"].setValue(datos.Descripcion);
      this.validator.controls["precio"].setValue(datos.Precio);
    }, (error: ModeloProductoServicio) => {

    });
  }

  GuardarProductoServicio(contenidoModal: any) {
    let tipo = this.validator.controls["tipo"].value;
    let descripcion = this.validator.controls["descripcion"].value;
    let precio = this.validator.controls["precio"].value;

    let producto = new ModeloProductoServicio();
    producto.Id = this.id;
    producto.Tipo = tipo;
    producto.Descripcion = descripcion;
    producto.Precio = Number.parseInt(precio);

    this.productoServicioService.ActualizarProductosServicios(producto).subscribe((datos: ModeloProductoServicio) => {
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
