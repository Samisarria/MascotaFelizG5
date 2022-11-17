import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/Identificar.modelo';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ValidadorRolAdminGuard implements CanActivate {

  rolUsuario?: string;
  constructor(private servicioSeguridad: SeguridadService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.servicioSeguridad.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
      this.rolUsuario = datos.datos?.rol;
    });

    if (this.rolUsuario === 'Administrador') {
      return true;
    } else {
      return false;
    }
  }

}
