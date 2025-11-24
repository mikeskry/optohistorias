import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, map, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User, LoginRequest, LoginResponse, ChangePasswordRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  public isAuthenticated$ = this.currentUser$.pipe(
    map(user => this.isAuthenticated())
  );
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromStorage();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(response => {
          this.setCurrentUser(response.data.user, response.data.token);
        })
      );
  }

  changePassword(request: ChangePasswordRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/change-password`, request)
      .pipe(
        tap(() => {
          // Actualizar el estado del usuario para marcar que ya no es primer acceso
          const currentUser = this.getCurrentUser();
          if (currentUser) {
            currentUser.primer_acceso = false;
            this.setCurrentUser(currentUser, this.getToken() || '');
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  handleTokenExpired(): void {
    console.warn('Token expirado, redirigiendo al login...');
    this.logout();
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const user = this.getCurrentUser();
    return !!token && !!user && !!user.id && user.id > 0 && !!user.username && !!user.rol;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.rol === 'admin' && !!user.id && user.id > 0 && !!user.username;
  }

  isPrimerAcceso(): boolean {
    const user = this.getCurrentUser();
    // Solo usuarios de óptica (rol = 'usuario') pueden tener primer acceso obligatorio
    // El administrador (rol = 'admin') nunca debe tener cambio de contraseña obligatorio
    if (user?.rol === 'admin') {
      return false;
    }
    // Para usuarios de óptica, verificar si es primer acceso
    // Manejar diferentes tipos de datos que pueden venir del backend
    const isFirstAccess = user?.primer_acceso === true || 
                         user?.primer_acceso === '1' || 
                         user?.primer_acceso === 1;
    return user?.rol === 'usuario' && isFirstAccess;
  }

  private setCurrentUser(user: User, token: string): void {
    // Asegurar que el usuario tenga todas las propiedades necesarias
    const userWithDefaults: User = {
      id: user.id || 0,
      username: user.username || '',
      nombre: user.nombre || '',
      apellidos: user.apellidos || '',
      rol: user.rol || 'usuario',
      optica_id: user.optica_id || undefined,
      // El administrador nunca debe tener primer acceso obligatorio
      // Para ópticas, respetar el valor del backend (manejar diferentes tipos)
      primer_acceso: user.rol === 'admin' ? false : (
        user.primer_acceso === true || 
        user.primer_acceso === '1' || 
        user.primer_acceso === 1
      ),
      optica_nombre: user.optica_nombre || '',
      optica_logo: user.optica_logo || undefined, // Agregar optica_logo
      user_nombre: user.user_nombre || undefined, // Nombre del administrador principal
      user_apellidos: user.user_apellidos || undefined, // Apellidos del administrador principal
      firma: user.optica_firma || user.firma || undefined // Firma de la óptica
    };
    
    // Solo establecer si tenemos datos válidos
    if (userWithDefaults.id > 0 && userWithDefaults.username && userWithDefaults.rol) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userWithDefaults));
      this.currentUserSubject.next(userWithDefaults);
    } else {
      console.error('Invalid user data:', userWithDefaults);
      this.logout();
    }
  }

  public updateCurrentUser(updatedUser: User): void {
    const token = this.getToken();
    if (token && updatedUser) {
      this.setCurrentUser(updatedUser, token);
    }
  }

  private loadUserFromStorage(): void {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (userStr && token) {
      try {
        const user = JSON.parse(userStr);
        // Verificar que el usuario tenga las propiedades mínimas necesarias
        if (user && user.id && user.id > 0 && user.username && user.rol) {
          this.currentUserSubject.next(user);
        } else {
          console.warn('Invalid user data in storage, clearing...');
          this.logout();
        }
      } catch (e) {
        console.error('Error parsing user from storage:', e);
        this.logout();
      }
    } else {
      this.currentUserSubject.next(null);
    }
  }
}

