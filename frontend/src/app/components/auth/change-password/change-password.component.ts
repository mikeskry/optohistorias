import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div class="card shadow-lg" style="max-width: 500px;">
        <div class="card-header text-center">
          <h3 class="mb-0">
            <i class="fas fa-key text-warning me-2"></i>
            Cambio de Contraseña Obligatorio
          </h3>
          <p class="text-muted mb-0">Por seguridad, debe cambiar su contraseña</p>
        </div>
        <div class="card-body p-4">
          <form [formGroup]="passwordForm" (ngSubmit)="onSubmit()">
            <div class="mb-3">
              <label for="newPassword" class="form-label">Nueva Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="newPassword"
                formControlName="newPassword"
                [class.is-invalid]="isFieldInvalid('newPassword')"
                placeholder="Ingrese su nueva contraseña"
              >
              <div class="invalid-feedback" *ngIf="isFieldInvalid('newPassword')">
                La nueva contraseña es requerida y debe tener al menos 8 caracteres
              </div>
            </div>

            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirmar Nueva Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                formControlName="confirmPassword"
                [class.is-invalid]="isFieldInvalid('confirmPassword')"
                placeholder="Confirme su nueva contraseña"
              >
              <div class="invalid-feedback" *ngIf="isFieldInvalid('confirmPassword')">
                Las contraseñas no coinciden
              </div>
            </div>

            <div class="d-grid">
              <button
                type="submit"
                class="btn btn-warning btn-lg"
                [disabled]="passwordForm.invalid || loading"
              >
                <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? 'Cambiando contraseña...' : 'Cambiar Contraseña' }}
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer text-center text-muted">
          <small>Esta acción es obligatoria para continuar</small>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      border-radius: 15px;
    }
    
    .card-header {
      background: linear-gradient(135deg, var(--warning-color), #e0a800);
      color: var(--dark-color);
      border-radius: 15px 15px 0 0 !important;
      padding: 2rem 1.5rem;
    }
    
    .btn-warning {
      background: linear-gradient(135deg, var(--warning-color), #e0a800);
      border: none;
      border-radius: 10px;
      padding: 12px;
      font-weight: 600;
      color: var(--dark-color);
    }
    
    .btn-warning:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255,193,7,0.3);
    }
    
    .form-control {
      border-radius: 8px;
      padding: 12px;
      border: 2px solid #e9ecef;
      transition: all 0.3s ease;
    }
    
    .form-control:focus {
      border-color: var(--warning-color);
      box-shadow: 0 0 0 0.2rem rgba(255,193,7,0.25);
    }
  `]
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      this.loading = true;
      
      const request = {
        newPassword: this.passwordForm.get('newPassword')?.value
      };

      this.authService.changePassword(request).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.showSuccess('Contraseña cambiada exitosamente');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.loading = false;
          this.toastService.showError(error.error?.message || 'Error al cambiar contraseña');
        }
      });
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.passwordForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  private passwordMatchValidator(form: FormGroup): {[key: string]: any} | null {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    
    return null;
  }
}



