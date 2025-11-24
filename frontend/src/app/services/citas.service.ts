import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cita, CitaCreateRequest, CitaUpdateRequest } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = `${environment.apiUrl}/citas`;

  constructor(private http: HttpClient) {}

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.apiUrl);
  }

  getCitasByDateRange(startDate: string, endDate: string): Observable<{success: boolean, message: string, data: Cita[]}> {
    return this.http.get<{success: boolean, message: string, data: Cita[]}>(`${this.apiUrl}/range?start_date=${startDate}&end_date=${endDate}`);
  }

  getCitaById(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.apiUrl}/${id}`);
  }

  createCita(cita: CitaCreateRequest): Observable<any> {
    return this.http.post(this.apiUrl, cita);
  }

  updateCita(cita: CitaUpdateRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cita.id}`, cita);
  }

  deleteCita(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}



