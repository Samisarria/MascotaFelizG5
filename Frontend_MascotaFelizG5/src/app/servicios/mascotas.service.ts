import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelMascota } from '../modelos/mascota.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  url = 'http://127.0.0.1:3000'
  token: string = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerMascotas():Observable<modelMascota[]> {
    return this.http.get<modelMascota[]>(`${this.url}/mascotas`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerMascotaPorId(id: string):Observable<modelMascota> {
    return this.http.get<modelMascota>(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearMascotas(mascota: modelMascota): Observable<modelMascota> {
    return this.http.post<modelMascota>(`${this.url}/mascotas`, mascota , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarMascotas(mascota: modelMascota): Observable<modelMascota> {
    return this.http.put<modelMascota>(`${this.url}/mascotas/${mascota.Id}`, mascota , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  Eliminarmascotas(id: string): Observable<any> {
    return this.http.delete(`${this.url}/mascotas/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
