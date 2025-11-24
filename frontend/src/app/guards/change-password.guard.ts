import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const changePasswordGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    // Solo permitir acceso si es primer acceso
    if (authService.isPrimerAcceso()) {
      return true;
    } else {
      // Si no es primer acceso, redirigir al dashboard
      router.navigate(['/dashboard']);
      return false;
    }
  }

  // Si no está autenticado, redirigir al login
  router.navigate(['/login']);
  return false;
};
