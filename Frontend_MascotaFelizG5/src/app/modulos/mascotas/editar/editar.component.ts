import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloMascota } from 'src/app/modelos/mascota.model';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  planesMascota: ModeloPlan[] = [];
  id:string = '';
  validator: FormGroup = this.builder.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'color': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'sexo': ['', [Validators.required]],
    'planId': ['', [Validators.required]],
    'plan': ['', [Validators.required]],
    'usuarioId': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private mascotaService: MascotasService,
    private router: Router,
    public modal: NgbModal,
    private route: ActivatedRoute,
    private planesService: PlanesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ObtenerPlanes();
    this.BuscarMascota(this.id);
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

  ObtenerNombrePlan(id: any): any {
    return this.planesMascota.filter(x => x.Id == id)[0] ? this.planesMascota.filter(x => x.Id == id)[0].Nombre : 'Sin plan asignado';
  }

  GuardarMascota(contenidoModal: any) {
    let nombre = this.validator.controls["nombre"].value;
    let especie = this.validator.controls["especie"].value;
    let color = this.validator.controls["color"].value;
    let estado = this.validator.controls["estado"].value;
    let sexo = this.validator.controls["sexo"].value;
    let plan = this.validator.controls["planId"].value;
    let usuario = this.validator.controls["usuarioId"].value;

    let mascota = new ModeloMascota();
    mascota.Id = this.id;
    mascota.Nombre = nombre;
    mascota.Especie = especie;
    mascota.Color = color;
    mascota.Estado = estado;
    mascota.Sexo = sexo;
    mascota.planId = plan;
    mascota.usuarioId = usuario;

    this.mascotaService.ActualizarMascotas(mascota).subscribe((datos: ModeloMascota) => {
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
