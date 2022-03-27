import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grado } from './grado';

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  private baseURL = "http://localhost:8080/api/grados"
  constructor(private HttpClient : HttpClient) { }

  obtenerListaDeGrados():Observable<Grado[]>{
    return this.HttpClient.get<Grado[]>(`${this.baseURL}`);
  }

  registrarGrado(grado:Grado):Observable<Object>{
    return this.HttpClient.post(this.baseURL, grado);
  }

  eliminarGrado(id:number | undefined): Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerGradoPorId(id:number | undefined): Observable<Grado>{
    return this.HttpClient.get<Grado>(`${this.baseURL}/${id}`);
  }

  actualizarGrado(id:number | undefined, grado:Grado): Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/${id}`, grado);
  }
}
