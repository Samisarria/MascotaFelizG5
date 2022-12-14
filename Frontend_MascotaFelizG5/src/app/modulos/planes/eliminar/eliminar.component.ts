import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { PlanesService } from 'src/app/servicios/planes.service';

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
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private planesService: PlanesService,
    private router: Router,
    private route: ActivatedRoute,
    public modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarPlan(this.id);
  }

  Regresar() {
    this.router.navigate(["/planes/consultar"]);
  }

  BuscarPlan(id: string) {
    this.planesService.ObtenerPlanesPorId(id).subscribe((datos: ModeloPlan) => {
      this.validator.controls["id"].setValue(this.id);
      this.validator.controls["nombre"].setValue(datos.Nombre);
      this.validator.controls["descripcion"].setValue(datos.Descripcion);
      this.validator.controls["precio"].setValue(datos.Precio);
    }, (error: ModeloPlan) => {

    });
  }

  EliminarPlan(contenidoModal: any) {
    this.planesService.EliminarPlanes(this.id).subscribe((datos: ModeloPlan) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/planes/consultar"])
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
