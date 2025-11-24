import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ToastService } from '../../services/toast.service';
import { Optica, OpticaCreateRequest, OpticaUpdateRequest } from '../../models/optica.model';
import { ApiResponse } from '../../models/api-response.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-fluid">
      <div class="row mb-4">
        <div class="col-12">
          <h2>Administración del Sistema</h2>
          <p class="text-muted">
            Gestiona las ópticas registradas en el sistema.
          </p>
        </div>
      </div>

      <!-- Ópticas Section -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <h4>Gestión de Ópticas</h4>
            <button class="btn btn-primary" (click)="showCreateOpticaForm()">
              <i class="fas fa-plus"></i> Nueva Óptica
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Teléfono</th>
                      <th>Dirección</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let optica of opticas">
                      <td>{{ optica.nombre }}</td>
                      <td>{{ optica.email }}</td>
                      <td>{{ optica.telefono }}</td>
                      <td>{{ optica.direccion }}</td>
                      <td>
                        <span class="badge" [class]="optica.activo ? 'bg-success' : 'bg-danger'">
                          {{ optica.activo ? 'Activa' : 'Inactiva' }}
                        </span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-outline-primary me-1" (click)="editOptica(optica)">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-warning me-1" (click)="resetUserPassword(optica.id)">
                          <i class="fas fa-key"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" (click)="deleteOptica(optica.id)">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr *ngIf="opticas.length === 0">
                      <td colspan="6" class="text-center text-muted">No hay ópticas registradas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create/Edit Optica Modal -->
    <div class="modal fade" id="opticaModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Editar' : 'Nueva' }} Óptica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form [formGroup]="opticaForm" (ngSubmit)="saveOptica()">
              <div class="row">
                <div class="col-md-6">
                  <label class="form-label">Nombre *</label>
                  <input type="text" class="form-control" formControlName="nombre"
                         [class.is-invalid]="opticaForm.get('nombre')?.invalid && opticaForm.get('nombre')?.touched">
                  <div class="invalid-feedback" *ngIf="opticaForm.get('nombre')?.invalid && opticaForm.get('nombre')?.touched">
                    Nombre es requerido
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email *</label>
                  <input type="email" class="form-control" formControlName="email"
                         [class.is-invalid]="opticaForm.get('email')?.invalid && opticaForm.get('email')?.touched">
                  <div class="invalid-feedback" *ngIf="opticaForm.get('email')?.invalid && opticaForm.get('email')?.touched">
                    Email válido es requerido
                  </div>
                </div>
              </div>
              
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="form-label">Teléfono</label>
                  <input type="tel" class="form-control" formControlName="telefono">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Estado</label>
                  <select class="form-select" formControlName="activo">
                    <option [value]="true">Activa</option>
                    <option [value]="false">Inactiva</option>
                  </select>
                </div>
              </div>
              
              <div class="row mt-3">
                <div class="col-12">
                  <label class="form-label">Dirección</label>
                  <textarea class="form-control" formControlName="direccion" rows="2"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" (click)="saveOptica()" [disabled]="opticaForm.invalid">
              {{ isEditing ? 'Actualizar' : 'Crear' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .table th {
      background-color: #f8f9fa;
      border-top: none;
    }
    
    .btn-sm {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }
  `]
})
export class AdminComponent implements OnInit {
  opticas: Optica[] = [];
  opticaForm: FormGroup;
  isEditing = false;
  editingOpticaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private toastService: ToastService
  ) {
    this.opticaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      direccion: [''],
      activo: [true]
    });
  }

  ngOnInit(): void {
    this.loadOpticas();
  }

  loadOpticas(): void {
    this.adminService.getOpticas().subscribe({
      next: (response) => {
        // El backend devuelve {success: true, data: [...], message: '...'}
        if (response.success && response.data) {
          this.opticas = response.data;
        } else {
          this.opticas = [];
          console.warn('Respuesta inesperada del backend:', response);
        }
      },
      error: (error) => {
        this.toastService.showError('Error al cargar ópticas');
        console.error('Error loading opticas:', error);
        this.opticas = [];
      }
    });
  }

  showCreateOpticaForm(): void {
    this.isEditing = false;
    this.editingOpticaId = null;
    this.opticaForm.reset({ activo: true });
    this.showModal();
  }

  editOptica(optica: Optica): void {
    this.isEditing = true;
    this.editingOpticaId = optica.id;
    this.opticaForm.patchValue({
      nombre: optica.nombre,
      email: optica.email,
      telefono: optica.telefono,
      direccion: optica.direccion,
      activo: optica.activo
    });
    this.showModal();
  }

  saveOptica(): void {
    if (this.opticaForm.valid) {
      const formData = this.opticaForm.value;
      
      if (this.isEditing && this.editingOpticaId) {
        this.adminService.updateOptica(this.editingOpticaId, formData).subscribe({
          next: (response) => {
            if (response.success) {
              this.toastService.showSuccess('Óptica actualizada exitosamente');
              this.loadOpticas();
              this.hideModal();
            } else {
              this.toastService.showError(response.message || 'Error al actualizar óptica');
            }
          },
          error: (error) => {
            this.toastService.showError('Error al actualizar óptica');
            console.error('Error updating optica:', error);
          }
        });
      } else {
        this.adminService.createOptica(formData).subscribe({
          next: (response) => {
            if (response.success) {
              this.toastService.showSuccess('Óptica creada exitosamente');
              this.loadOpticas();
              this.hideModal();
            } else {
              this.toastService.showError(response.message || 'Error al crear óptica');
            }
          },
          error: (error) => {
            this.toastService.showError('Error al crear óptica');
            console.error('Error creating optica:', error);
          }
        });
      }
    }
  }

  deleteOptica(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta óptica?')) {
      this.adminService.deleteOptica(id).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.showSuccess('Óptica eliminada exitosamente');
            this.loadOpticas();
          } else {
            this.toastService.showError(response.message || 'Error al eliminar óptica');
          }
        },
        error: (error) => {
          this.toastService.showError('Error al eliminar óptica');
          console.error('Error deleting optica:', error);
        }
      });
    }
  }

  resetUserPassword(opticaId: number): void {
    if (confirm('¿Estás seguro de que quieres restablecer la contraseña del usuario de esta óptica?')) {
      this.adminService.resetUserPassword(opticaId).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.showSuccess('Contraseña restablecida exitosamente');
          } else {
            this.toastService.showError(response.message || 'Error al restablecer contraseña');
          }
        },
        error: (error) => {
          this.toastService.showError('Error al restablecer contraseña');
          console.error('Error resetting password:', error);
        }
      });
    }
  }

  private showModal(): void {
    const modal = document.getElementById('opticaModal');
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  private hideModal(): void {
    const modal = document.getElementById('opticaModal');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }
}

