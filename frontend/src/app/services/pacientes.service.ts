import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Paciente, PacienteCreateRequest, PacienteUpdateRequest, PacienteSearchRequest } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private apiUrl = `${environment.apiUrl}/pacientes`;

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }

  getPacienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  searchPacientes(searchData: PacienteSearchRequest): Observable<Paciente[]> {
    const params = new URLSearchParams();
    if (searchData.query) params.append('query', searchData.query);
    
    // Usar el endpoint separado de búsqueda
    return this.http.get<Paciente[]>(`${this.apiUrl}/search?${params.toString()}`);
  }

  createPaciente(paciente: PacienteCreateRequest): Observable<any> {
    return this.http.post(this.apiUrl, paciente);
  }

  updatePaciente(paciente: PacienteUpdateRequest): Observable<any> {
    if (!paciente.id) {
      throw new Error('ID is required for update');
    }
    return this.http.put(`${this.apiUrl}/${paciente.id}`, paciente);
  }

  deletePaciente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

