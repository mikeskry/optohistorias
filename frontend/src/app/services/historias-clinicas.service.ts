import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HistoriaClinica, HistoriaClinicaCreateRequest, HistoriaClinicaUpdateRequest, HistoriaClinicaOrganizada } from '../models/historia-clinica.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriasClinicasService {
  private apiUrl = `${environment.apiUrl}/historias-clinicas`;

  constructor(private http: HttpClient) { }

  getHistoriasClinicas(pacienteId: number): Observable<HistoriaClinica[]> {
    return this.http.get<HistoriaClinica[]>(`${this.apiUrl}?paciente_id=${pacienteId}`);
  }

  getHistoriaClinicaById(id: number): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.apiUrl}/${id}`);
  }

  createHistoriaClinica(historia: HistoriaClinicaCreateRequest): Observable<any> {
    return this.http.post(this.apiUrl, historia);
  }

  createHistoriaClinicaOrganizada(historia: HistoriaClinicaOrganizada): Observable<any> {
    return this.http.post(this.apiUrl, historia);
  }

  updateHistoriaClinica(id: number, historia: HistoriaClinicaUpdateRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, historia);
  }

  updateHistoriaClinicaOrganizada(id: number, historia: HistoriaClinicaOrganizada): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, historia);
  }

  deleteHistoriaClinica(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}




