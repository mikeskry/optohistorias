import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Optica, OpticaCreateRequest, OpticaUpdateRequest } from '../models/optica.model';
import { User } from '../models/user.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `${environment.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  getOpticas(): Observable<ApiResponse<Optica[]>> {
    return this.http.get<ApiResponse<Optica[]>>(`${this.apiUrl}/opticas`);
  }

  getOpticaById(id: number): Observable<Optica> {
    return this.http.get<Optica>(`${this.apiUrl}/opticas/${id}`);
  }

  createOptica(optica: OpticaCreateRequest): Observable<ApiResponse<any>> {
    // Si hay un archivo de logo, usar FormData
    if (optica.logo) {
      const formData = new FormData();
      formData.append('nombre', optica.nombre || '');
      formData.append('email', optica.email || '');
      if (optica.telefono) formData.append('telefono', optica.telefono);
      if (optica.direccion) formData.append('direccion', optica.direccion);
      if (optica.activo !== undefined) formData.append('activo', optica.activo.toString());
      formData.append('user_nombre', optica.user_nombre || '');
      formData.append('user_apellidos', optica.user_apellidos || '');
      formData.append('logo', optica.logo);
      
      return this.http.post<ApiResponse<any>>(`${this.apiUrl}/opticas`, formData);
    }
    
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/opticas`, optica);
  }

  updateOptica(id: number, optica: Partial<OpticaUpdateRequest>): Observable<ApiResponse<any>> {
    // Si hay un archivo de logo, usar FormData
    if (optica.logo) {
      const formData = new FormData();
      formData.append('nombre', optica.nombre || '');
      formData.append('email', optica.email || '');
      if (optica.telefono) formData.append('telefono', optica.telefono);
      if (optica.direccion) formData.append('direccion', optica.direccion);
      if (optica.activo !== undefined) formData.append('activo', optica.activo.toString());
      formData.append('user_nombre', optica.user_nombre || '');
      formData.append('user_apellidos', optica.user_apellidos || '');
      formData.append('logo', optica.logo);
      
      return this.http.put<ApiResponse<any>>(`${this.apiUrl}/opticas/${id}`, formData);
    }
    
    return this.http.put<ApiResponse<any>>(`${this.apiUrl}/opticas/${id}`, optica);
  }

  deleteOptica(id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/opticas/${id}`);
  }

  resetUserPassword(userId: number): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/opticas/${userId}/reset-password`, {});
  }

  resetOpticaPassword(opticaId: number): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/opticas/${opticaId}/reset-password`, {});
  }
}

