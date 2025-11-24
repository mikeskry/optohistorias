import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { opticaGuard } from './guards/optica.guard';
import { changePasswordGuard } from './guards/change-password.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./components/auth/change-password/change-password.component').then(m => m.ChangePasswordComponent),
    canActivate: [changePasswordGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'opticas',
    loadComponent: () => import('./components/admin/opticas/opticas.component').then(m => m.OpticasComponent),
    canActivate: [adminGuard]
  },
  {
    path: 'pacientes',
    loadComponent: () => import('./components/pacientes/pacientes.component').then(m => m.PacientesComponent),
    canActivate: [opticaGuard]
  },
  {
    path: 'historias-clinicas',
    loadComponent: () => import('./components/historias-clinicas/historias-clinicas.component').then(m => m.HistoriasClinicasComponent),
    canActivate: [opticaGuard]
  },
  {
    path: 'historias',
    loadComponent: () => import('./components/historias/historias.component').then(m => m.HistoriasComponent),
    canActivate: [opticaGuard]
  },
  {
    path: 'citas',
    loadComponent: () => import('./components/citas/citas.component').then(m => m.CitasComponent),
    canActivate: [opticaGuard]
  },
  {
    path: 'firma',
    loadComponent: () => import('./components/firma/firma.component').then(m => m.FirmaComponent),
    canActivate: [opticaGuard]
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [adminGuard]
  },
  {
    path: 'reportes',
    loadComponent: () => import('./components/reportes/reportes.component').then(m => m.ReportesComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

