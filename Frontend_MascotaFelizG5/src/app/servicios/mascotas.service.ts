import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { modelMascota } from '../modelos/mascota.model';
=======
import { ModeloMascota } from '../modelos/mascota.model';
import { ModeloPlan } from '../modelos/plan.model';
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
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

<<<<<<< HEAD
  ObtenerMascotas():Observable<modelMascota[]> {
    return this.http.get<modelMascota[]>(`${this.url}/mascotas`, {
=======
  ObtenerMascotas():Observable<ModeloMascota[]> {
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`, {
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

<<<<<<< HEAD
  ObtenerMascotaPorId(id: string):Observable<modelMascota> {
    return this.http.get<modelMascota>(`${this.url}/mascotas/${id}`, {
=======
  ObtenerMascotasPorUsuario(id: string):Observable<ModeloMascota[]> {
    return this.http.get<ModeloMascota[]>(`${this.url}/usuarios/${id}/mascotas`, {
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

<<<<<<< HEAD
  CrearMascotas(mascota: modelMascota): Observable<modelMascota> {
    return this.http.post<modelMascota>(`${this.url}/mascotas`, mascota , {
=======
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
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

<<<<<<< HEAD
  ActualizarMascotas(mascota: modelMascota): Observable<modelMascota> {
    return this.http.put<modelMascota>(`${this.url}/mascotas/${mascota.Id}`, mascota , {
=======
  ActualizarMascotas(mascota: ModeloMascota): Observable<ModeloMascota> {
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.Id}`, mascota , {
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

<<<<<<< HEAD
  Eliminarmascotas(id: string): Observable<any> {
=======
  EliminarMascota(id: string): Observable<any> {
>>>>>>> 1fd1c4a6ac19b5757a2d824173a741ff19eb6334
    return this.http.delete(`${this.url}/mascotas/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
