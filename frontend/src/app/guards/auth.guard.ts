import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    // Solo usuarios de óptica (rol = 'optica') deben cambiar contraseña en primer acceso
    // El administrador (rol = 'admin') puede acceder directamente
    if (authService.isPrimerAcceso()) {
      router.navigate(['/change-password']);
      return false;
    }
    return true;
  }

  router.navigate(['/login']);
  return false;
};

