import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloMascota } from 'src/app/modelos/mascota.model';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { ModeloUsuario } from 'src/app/modelos/usuario.model';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { PlanesService } from 'src/app/servicios/planes.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  listaMascotas: ModeloMascota[] = [];
  planesMascota: ModeloPlan[] = [];
  id:string = '';
  clave: string = '';
  validator: FormGroup = this.builder.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'rol': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    private servicioSeguridad: SeguridadService,
    private mascotaService: MascotasService,
    public modal: NgbModal,
    private planesService: PlanesService) { }

  ngOnInit(): void {
    this.id = this.servicioSeguridad.ObtenerIdUsuarioSesion();
    this.BuscarUsuario(this.id);
    this.ObtenerMascotasUsuario(this.id);
    this.ObtenerPlanes();
  }

  BuscarUsuario(id: string) {
    this.usuarioService.ObtenerUsuariosPorId(id).subscribe((datos: ModeloUsuario) => {
      this.validator.controls["id"].setValue(this.id);
      this.validator.controls["nombres"].setValue(datos.Nombres);
      this.validator.controls["apellidos"].setValue(datos.Apellidos);
      this.validator.controls["identificacion"].setValue(datos.Identificacion);
      this.validator.controls["rol"].setValue(datos.Rol);
      this.validator.controls["direccion"].setValue(datos.Direccion);
      this.validator.controls["correo"].setValue(datos.Correo);
      this.validator.controls["telefono"].setValue(datos.Telefono);
      if (datos.Clave) {
        this.clave = datos.Clave;
      }
    }, (error: ModeloUsuario) => {

    });
  }

  ObtenerMascotasUsuario(id: string){
    this.mascotaService.ObtenerMascotasPorUsuario(id).subscribe((datos: ModeloMascota[]) => {
      this.listaMascotas = datos.filter(x => x.Estado == "Aprobada");
    }, (error: ModeloMascota[]) => {

    })
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

  VerMascota(id: any) {
    this.router.navigate([`/mascotas/editar/${id}`])
  }


  AbrirModalDatos(contenido: any) {
    this.modal.open(contenido, {centered:true});
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
