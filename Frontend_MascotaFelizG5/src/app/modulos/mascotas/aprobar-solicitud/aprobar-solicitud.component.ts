import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloMascota } from 'src/app/modelos/mascota.model';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-aprobar-solicitud',
  templateUrl: './aprobar-solicitud.component.html',
  styleUrls: ['./aprobar-solicitud.component.css']
})
export class AprobarSolicitudComponent implements OnInit {

  planesMascota: ModeloPlan[] = [];
  id:string = '';
  validator: FormGroup = this.builder.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'color': ['', [Validators.required]],
    'sexo': ['', [Validators.required]],
    'planId': ['', [Validators.required]],
    'plan': ['', [Validators.required]],
    'usuarioId': ['', [Validators.required]],
    'estado': ['', [Validators.required]]
  })


  constructor(private builder: FormBuilder, private mascotaService: MascotasService,
     private router: Router, private route: ActivatedRoute, private modal: NgbModal,
     private planesService: PlanesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ObtenerPlanes();
    this.BuscarMascota(this.id);
  }

  Regresar() {
    this.router.navigate(["/mascotas/consultar-solicitudes"]);
  }

  BuscarMascota(id: string) {
    this.mascotaService.ObtenerMascotasPorId(id).subscribe((datos: ModeloMascota) => {
      this.validator.controls["id"].setValue(this.id);
      this.validator.controls["nombre"].setValue(datos.Nombre);
      this.validator.controls["especie"].setValue(datos.Especie);
      this.validator.controls["color"].setValue(datos.Color);
      this.validator.controls["estado"].setValue(datos.Estado);
      this.validator.controls["sexo"].setValue(datos.Sexo);
      this.validator.controls["planId"].setValue(datos.planId);
      this.validator.controls["plan"].setValue(this.ObtenerNombrePlan(datos.planId));
      this.validator.controls["usuarioId"].setValue(datos.usuarioId);

    }, (error: ModeloMascota) => {

    });
  }

  GuardarMascota(estadoAfiliacion: string) {
    let nombre = this.validator.controls["nombre"].value;
    let especie = this.validator.controls["especie"].value;
    let color = this.validator.controls["color"].value;
    let estado = estadoAfiliacion;
    let sexo = this.validator.controls["sexo"].value;
    let planId = this.validator.controls["planId"].value;
    let usuarioId = this.validator.controls["usuarioId"].value;

    let mascota = new ModeloMascota();
    mascota.Id = this.id;
    mascota.Nombre = nombre;
    mascota.Especie = especie;
    mascota.Color = color;
    mascota.Sexo = sexo;
    mascota.Estado = estado;
    mascota.planId = planId;
    mascota.usuarioId = usuarioId;

    this.mascotaService.ActualizarMascotas(mascota).subscribe((datos: ModeloMascota) => {

    }, (error: any) => {
      alert('Error')
    });

  }

  ObtenerPlanes() {
    this.planesService.ObtenerPlanes().subscribe((datos: ModeloPlan[]) => {
      this.planesMascota = datos;
    }, (error: ModeloPlan) => {
    })
  }

  ObtenerNombrePlan(id: any): any {
    return this.planesMascota.filter(x => x.Id == id)[0] ? this.planesMascota.filter(x => x.Id == id)[0].Nombre : 'Sin plan asignado';
  }

  RespuestaSolicitud(contenido:any, tipo: string)
  {
    this.GuardarMascota(tipo);
    this.modal.open(contenido,{centered:true })
    this.router.navigate(["/mascotas/consultar-solicitudes"])
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
