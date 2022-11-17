import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProductoServicio } from '../modelos/productoservicio.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoserviciosService {

  url = 'http://127.0.0.1:3000'
  token: string = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerProductosServicios():Observable<ModeloProductoServicio[]> {
    return this.http.get<ModeloProductoServicio[]>(`${this.url}/productos-servicios`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerProductosServiciosPorId(id: string):Observable<ModeloProductoServicio> {
    return this.http.get<ModeloProductoServicio>(`${this.url}/productos-servicios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearProductosServicios(productoServicio: ModeloProductoServicio): Observable<ModeloProductoServicio> {
    return this.http.post<ModeloProductoServicio>(`${this.url}/productos-servicios`, productoServicio , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarProductosServicios(productoServicio: ModeloProductoServicio): Observable<ModeloProductoServicio> {
    return this.http.put<ModeloProductoServicio>(`${this.url}/productos-servicios/${productoServicio.Id}`, productoServicio , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProductosServicios(id: string): Observable<any> {
    return this.http.delete(`${this.url}/productos-servicios/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
