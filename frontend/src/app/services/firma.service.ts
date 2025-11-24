import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  uploadFirma(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('firma', file);
    
    return this.http.post(`${this.apiUrl}/optica/firma`, formData);
  }

  deleteFirma(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/optica/firma`);
  }

  getFirmaUrl(firmaPath: string): string {
    if (!firmaPath) return '';
    return `${this.apiUrl}/uploads/${firmaPath}`;
  }
}
