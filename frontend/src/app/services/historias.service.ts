import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Historia, HistoriaCreateRequest, HistoriaSearchRequest } from '../models/historia.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriasService {
  private apiUrl = `${environment.apiUrl}/historias`;

  constructor(private http: HttpClient) {}

  getHistorias(): Observable<Historia[]> {
    return this.http.get<Historia[]>(this.apiUrl);
  }

  getHistoriaById(id: number): Observable<Historia> {
    return this.http.get<Historia>(`${this.apiUrl}/${id}`);
  }

  searchHistorias(searchData: HistoriaSearchRequest): Observable<Historia[]> {
    const params = new URLSearchParams();
    if (searchData.pacienteId) params.append('paciente_id', searchData.pacienteId.toString());
    if (searchData.fecha_desde) params.append('fecha_desde', searchData.fecha_desde);
    if (searchData.fecha_hasta) params.append('fecha_hasta', searchData.fecha_hasta);
    
    return this.http.get<Historia[]>(`${this.apiUrl}/search?${params.toString()}`);
  }

  createHistoria(historia: HistoriaCreateRequest): Observable<any> {
    return this.http.post(this.apiUrl, historia);
  }

  downloadPDF(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/pdf`, { responseType: 'blob' });
  }
}

