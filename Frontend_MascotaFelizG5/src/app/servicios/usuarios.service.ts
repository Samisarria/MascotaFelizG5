import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/usuario.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://127.0.0.1:3000'
  token: string = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerUsuarios():Observable<ModeloUsuario[]> {
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerUsuariosPorId(id: string):Observable<ModeloUsuario> {
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearUsuarios(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarUsuarios(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.http.put<ModeloUsuario>(`${this.url}/usuarios/${usuario.Id}`, usuario , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.url}/usuarios/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
