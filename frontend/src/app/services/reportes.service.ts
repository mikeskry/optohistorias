import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ReporteRequest {
  optica_id?: number;
  fecha_inicial: string;
  fecha_final: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  generarReporteExcel(request: ReporteRequest): Observable<any> {
    let params = new HttpParams()
      .set('fecha_inicial', request.fecha_inicial)
      .set('fecha_final', request.fecha_final);

    if (request.optica_id) {
      params = params.set('optica_id', request.optica_id.toString());
    }

    return this.http.get(`${this.apiUrl}/reportes/historias-clinicas/excel`, {
      params: params,
      responseType: 'blob',
      observe: 'response'
    });
  }

  obtenerEstadisticasReporte(request: ReporteRequest): Observable<any> {
    let params = new HttpParams()
      .set('fecha_inicial', request.fecha_inicial)
      .set('fecha_final', request.fecha_final);

    if (request.optica_id) {
      params = params.set('optica_id', request.optica_id.toString());
    }

    return this.http.get(`${this.apiUrl}/reportes/historias-clinicas/estadisticas`, {
      params: params
    });
  }
}
