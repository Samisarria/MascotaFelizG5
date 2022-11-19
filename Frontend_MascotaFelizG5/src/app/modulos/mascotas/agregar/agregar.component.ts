import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloMascota } from 'src/app/modelos/mascota.model';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { PlanesService } from 'src/app/servicios/planes.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  planesMascota: ModeloPlan[] = [];
  validator: FormGroup = this.builder.group({
    'nombre': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'color': ['', [Validators.required]],
    'estado': ['Pendiente', [Validators.required]],
    'sexo': ['', [Validators.required]],
    'planId': ['Seleccione un plan', [Validators.required]],
    'usuarioId': [this.seguridadService.ObtenerIdUsuarioSesion(), [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private mascotaService: MascotasService,
    private router: Router,
    public modal: NgbModal,
    private seguridadService: SeguridadService,
    private planesService: PlanesService) { }

  ngOnInit(): void {
    this.ObtenerPlanes();
  }

  Regresar() {
    this.router.navigate(["/mascotas/consultar"]);
  }

  ObtenerPlanes() {
    this.planesService.ObtenerPlanes().subscribe((datos: ModeloPlan[]) => {
      this.planesMascota = datos;
    }, (error: ModeloPlan) => {
    })
  }

  GuardarMascota(contenidoModal: any) {
    let nombre = this.validator.controls["nombre"].value;
    let especie = this.validator.controls["especie"].value;
    let color = this.validator.controls["color"].value;
    let estado = this.validator.controls["estado"].value;
    let sexo = this.validator.controls["sexo"].value;
    let planId = this.validator.controls["planId"].value;
    let usuarioId = this.validator.controls["usuarioId"].value;

    let mascota = new ModeloMascota();
    mascota.Nombre = nombre;
    mascota.Especie = especie;
    mascota.Color = color;
    mascota.Estado = estado;
    mascota.Sexo = sexo;
    mascota.planId = planId;
    mascota.usuarioId = usuarioId;

    this.mascotaService.CrearMascotas(mascota).subscribe((datos: ModeloMascota) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/mascotas/consultar"])
    }, (error: any) => {
      alert('Error')
    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
