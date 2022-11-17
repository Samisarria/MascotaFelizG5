import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.model';
import { ModeloPlan } from '../modelos/plan.model';
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

  ObtenerMascotas():Observable<ModeloMascota[]> {
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerMascotasPorUsuario(id: string):Observable<ModeloMascota[]> {
    return this.http.get<ModeloMascota[]>(`${this.url}/usuarios/${id}/mascotas`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerPlanPorMascota(id: string):Observable<ModeloPlan> {
    return this.http.get<ModeloPlan>(`${this.url}/mascotas/${id}/plan`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerMascotasPorId(id: string):Observable<ModeloMascota> {
    return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearMascotas(mascota: ModeloMascota): Observable<ModeloMascota> {
    return this.http.post<ModeloMascota>(`${this.url}/mascotas`, mascota , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarMascotas(mascota: ModeloMascota): Observable<ModeloMascota> {
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.Id}`, mascota , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarMascota(id: string): Observable<any> {
    return this.http.delete(`${this.url}/mascotas/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
