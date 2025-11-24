import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  
  // Obtener el token del localStorage
  const token = localStorage.getItem('token');
  
  if (token) {
    // Clonar la request y agregar el header Authorization
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Si el error es 401 (Unauthorized), el token está vencido
        if (error.status === 401) {
          authService.handleTokenExpired();
        }
        
        return throwError(() => error);
      })
    );
  }
  
  return next(req);
};

