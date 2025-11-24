import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div class="card shadow-lg login-card">
        <div class="card-header text-center">
          <p class=" mb-0">Sistema de Historias Clínicas</p>
        </div>
        <div class="card-body p-4">
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="mb-3">
              <label for="username" class="form-label">Usuario</label>
              <input
                type="text"
                class="form-control"
                id="username"
                formControlName="username"
                [class.is-invalid]="isFieldInvalid('username')"
                placeholder="Ingrese su usuario"
              >
              <div class="invalid-feedback" *ngIf="isFieldInvalid('username')">
                El usuario es requerido
              </div>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="password"
                formControlName="password"
                [class.is-invalid]="isFieldInvalid('password')"
                placeholder="Ingrese su contraseña"
              >
              <div class="invalid-feedback" *ngIf="isFieldInvalid('password')">
                La contraseña es requerida
              </div>
            </div>

            <div class="d-grid">
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                [disabled]="loginForm.invalid || loading"
              >
                <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer text-center text-muted">
          <small>Sistema de gestión para ópticas</small>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-card {
      border: none;
      border-radius: 15px;
      width: 100%;
      max-width: 400px;
      min-width: 400px;
    }
    
    .card-header {
      background: linear-gradient(135deg, var(--primary-color), #0056b3);
      color: white;
      border-radius: 15px 15px 0 0 !important;
      padding: 2rem 1.5rem;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, var(--primary-color), #0056b3);
      border: none;
      border-radius: 10px;
      padding: 12px;
      font-weight: 600;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,123,255,0.3);
    }
    
    .form-control {
      border-radius: 8px;
      padding: 12px;
      border: 2px solid #e9ecef;
      transition: all 0.3s ease;
    }
    
    .form-control:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.loading = false;
          this.toastService.showToast('Login exitoso', 'success');
          
          // Solo usuarios de óptica (rol = 'usuario') deben cambiar contraseña en primer acceso
          // El administrador (rol = 'admin') puede acceder directamente al dashboard
          if (response.data?.user?.rol === 'usuario' && response.data?.user?.primer_acceso === true) {
            this.router.navigate(['/change-password']);
          } else {
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error) => {
          this.loading = false;
          this.toastService.showError(error.error?.message || 'Error en el login');
        }
      });
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}

