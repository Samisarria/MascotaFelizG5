import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  validator: FormGroup = this.builder.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private planesService: PlanesService,
    private router: Router,
    public modal: NgbModal) { }

  ngOnInit(): void {
  }

  Regresar() {
    this.router.navigate(["/planes/consultar"]);
  }

  GuardarPlan(contenidoModal: any) {
    let nombre = this.validator.controls["nombre"].value;
    let descripcion = this.validator.controls["descripcion"].value;
    let precio = this.validator.controls["precio"].value;

    let plan = new ModeloPlan();
    plan.Nombre = nombre;
    plan.Descripcion = descripcion;
    plan.Precio = Number.parseInt(precio);

    this.planesService.CrearPlanes(plan).subscribe((datos: ModeloPlan) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/planes/consultar"])
    }, (error: any) => {
      alert('Error')
    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
