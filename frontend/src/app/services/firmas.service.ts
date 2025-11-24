import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SignatureResponse {
  signature_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirmasService {
  private apiUrl = `${environment.apiUrl}/firmas`;

  constructor(private http: HttpClient) {}

  getSignature(): Observable<SignatureResponse> {
    return this.http.get<SignatureResponse>(this.apiUrl);
  }

  uploadSignature(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('signature', file);
    
    return this.http.post(this.apiUrl, formData);
  }

  deleteSignature(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }
}



