import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProspecto } from '../modelos/prospecto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {
  url = 'http://127.0.0.1:3000'
  token: string = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerProspectos():Observable<ModeloProspecto[]> {
    return this.http.get<ModeloProspecto[]>(`${this.url}/prospectos`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearProspecto(prospecto: ModeloProspecto): Observable<ModeloProspecto> {
    return this.http.post<ModeloProspecto>(`${this.url}/prospectos`, prospecto , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarProspecto(prospecto: ModeloProspecto): Observable<ModeloProspecto> {
    return this.http.put<ModeloProspecto>(`${this.url}/prospectos`, prospecto , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProspecto(id: string): Observable<any> {
    return this.http.delete(`${this.url}/prospectos/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
