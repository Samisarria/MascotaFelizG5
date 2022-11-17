import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSucursal } from '../modelos/sucursal.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  url = 'http://127.0.0.1:3000'
  token: string = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerSucursales():Observable<ModeloSucursal[]> {
    return this.http.get<ModeloSucursal[]>(`${this.url}/sucursales`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerSucursalesPorId(id: string):Observable<ModeloSucursal> {
    return this.http.get<ModeloSucursal>(`${this.url}/sucursales/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearSucursales(sucursal: ModeloSucursal): Observable<ModeloSucursal> {
    return this.http.post<ModeloSucursal>(`${this.url}/sucursales`, sucursal , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarSucursales(sucursal: ModeloSucursal): Observable<ModeloSucursal> {
    return this.http.put<ModeloSucursal>(`${this.url}/sucursales/${sucursal.Id}`, sucursal , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarSucursal(id: string): Observable<any> {
    return this.http.delete(`${this.url}/sucursales/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
