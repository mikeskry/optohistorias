import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportesService } from 'src/app/services/reportes.service';
import { AdminService } from '../../services/admin.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { Optica } from '../../models/optica.model';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mt-4">
      <!-- Formulario de filtros -->
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">
                <i class="fas fa-filter me-2"></i>
                Reportes de Historias Clínicas
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="reporteForm" (ngSubmit)="generarReporte()">
                <div class="row">
                  <!-- Selector de Óptica (Solo para Administradores) -->
                  <div class="col-md-6 mb-3" *ngIf="isAdmin">
                    <label class="form-label">Óptica <span class="text-danger">*</span></label>
                    <select class="form-select" formControlName="optica_id" 
                            [class.is-invalid]="reporteForm.get('optica_id')?.invalid && reporteForm.get('optica_id')?.touched">
                      <option value="">Seleccionar óptica...</option>
                      <option *ngFor="let optica of opticas" [value]="optica.id">
                        {{ optica.nombre }}
                      </option>
                    </select>
                    <div class="invalid-feedback" *ngIf="reporteForm.get('optica_id')?.invalid && reporteForm.get('optica_id')?.touched">
                      Debe seleccionar una óptica
                    </div>
                  </div>

                  <!-- Fecha Inicial -->
                  <div class="col-md-6 mb-3" [class.col-md-6]="!isAdmin" [class.col-md-3]="isAdmin">
                    <label class="form-label">Fecha Inicial <span class="text-danger">*</span></label>
                    <input type="date" class="form-control" formControlName="fecha_inicial"
                           [class.is-invalid]="reporteForm.get('fecha_inicial')?.invalid && reporteForm.get('fecha_inicial')?.touched">
                    <div class="invalid-feedback" *ngIf="reporteForm.get('fecha_inicial')?.invalid && reporteForm.get('fecha_inicial')?.touched">
                      Fecha inicial es requerida
                    </div>
                  </div>

                  <!-- Fecha Final -->
                  <div class="col-md-6 mb-3" [class.col-md-6]="!isAdmin" [class.col-md-3]="isAdmin">
                    <label class="form-label">Fecha Final <span class="text-danger">*</span></label>
                    <input type="date" class="form-control" formControlName="fecha_final"
                           [class.is-invalid]="reporteForm.get('fecha_final')?.invalid && reporteForm.get('fecha_final')?.touched">
                    <div class="invalid-feedback" *ngIf="reporteForm.get('fecha_final')?.invalid && reporteForm.get('fecha_final')?.touched">
                      Fecha final es requerida
                    </div>
                  </div>
                </div>

                <!-- Información del rango -->
                <div class="row" *ngIf="reporteForm.get('fecha_inicial')?.value && reporteForm.get('fecha_final')?.value">
                  <div class="col-12">
                    <div class="alert alert-info">
                      <i class="fas fa-info-circle me-2"></i>
                      <strong>Rango seleccionado:</strong> 
                      Desde {{ reporteForm.get('fecha_inicial')?.value | date:'dd/MM/yyyy' }} 
                      hasta {{ reporteForm.get('fecha_final')?.value | date:'dd/MM/yyyy' }}
                      <span *ngIf="isAdmin && reporteForm.get('optica_id')?.value">
                        para la óptica: {{ getOpticaNombre() }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Botones de acción -->
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex gap-2">
                      <button type="submit" class="btn btn-primary" [disabled]="reporteForm.invalid || loading">
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                        <i class="fas fa-file-excel me-2" *ngIf="!loading"></i>
                        {{ loading ? 'Generando...' : 'Generar Reporte' }}
                      </button>
                      <button type="button" class="btn btn-secondary" (click)="limpiarFormulario()">
                        <i class="fas fa-eraser me-2"></i>
                        Limpiar
                      </button>
                      <button type="button" class="btn btn-outline-info" (click)="establecerRangoUltimos30Dias()">
                        <i class="fas fa-calendar-week me-2"></i>
                        Últimos 30 días
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .report-icon {
      opacity: 0.7;
    }

    .card {
      border: none;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      border-radius: 10px;
    }

    .card-header {
      border-radius: 10px 10px 0 0 !important;
    }

    .form-control, .form-select {
      border-radius: 8px;
      border: 2px solid #e9ecef;
      transition: all 0.3s ease;
    }

    .form-control:focus, .form-select:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .btn {
      border-radius: 8px;
      padding: 10px 20px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    .alert {
      border-radius: 8px;
      border: none;
    }

    .list-unstyled li {
      padding: 5px 0;
      font-size: 0.95rem;
    }

    .spinner-border-sm {
      width: 1rem;
      height: 1rem;
    }

    @media (max-width: 768px) {
      .d-flex.gap-2 {
        flex-direction: column;
      }
      
      .btn {
        margin-bottom: 10px;
      }
    }
  `]
})
export class ReportesComponent implements OnInit {
  reporteForm: FormGroup;
  opticas: Optica[] = [];
  isAdmin = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private reportesService: ReportesService,
    private adminService: AdminService,
    private toastService: ToastService,
    private authService: AuthService
  ) {
    this.reporteForm = this.fb.group({
      optica_id: [''],
      fecha_inicial: ['', [Validators.required]],
      fecha_final: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    
    if (this.isAdmin) {
      this.reporteForm.get('optica_id')?.setValidators([Validators.required]);
      this.cargarOpticas();
    } else {
      // Para usuarios de óptica, establecer su óptica automáticamente
      const currentUser = this.authService.getCurrentUser();
      if (currentUser?.optica_id) {
        this.reporteForm.patchValue({ optica_id: currentUser.optica_id });
      }
    }

    // Validación de fechas
    this.reporteForm.get('fecha_final')?.valueChanges.subscribe(() => {
      this.validarFechas();
    });

    this.reporteForm.get('fecha_inicial')?.valueChanges.subscribe(() => {
      this.validarFechas();
    });
  }

  cargarOpticas(): void {
    this.adminService.getOpticas().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.opticas = response.data.filter(optica => optica.activo);
        }
      },
      error: (error) => {
        console.error('Error cargando ópticas:', error);
      }
    });
  }

  validarFechas(): void {
    const fechaInicial = this.reporteForm.get('fecha_inicial')?.value;
    const fechaFinal = this.reporteForm.get('fecha_final')?.value;

    if (fechaInicial && fechaFinal) {
      if (new Date(fechaInicial) > new Date(fechaFinal)) {
        this.reporteForm.get('fecha_final')?.setErrors({ fechaInvalida: true });
      } else {
        this.reporteForm.get('fecha_final')?.setErrors(null);
      }
    }
  }

  generarReporte(): void {
    if (this.reporteForm.valid) {
      this.loading = true;
      
      const formData = this.reporteForm.value;
      
      this.reportesService.generarReporteExcel(formData).subscribe({
        next: (response) => {
          this.loading = false;
          this.toastService.showSuccess('Reporte generado exitosamente');
          
          // Determinar tipo de archivo basado en el Content-Type de la respuesta
          const contentType = response.headers?.get('content-type') || '';
          const isExcel = contentType.includes('spreadsheetml');
          
          // Crear enlace de descarga
          const blob = new Blob([response.body], { 
            type: isExcel ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'text/csv;charset=utf-8'
          });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          
          // Nombre del archivo con fecha
          const fechaInicial = formData.fecha_inicial;
          const fechaFinal = formData.fecha_final;
          const nombreOptica = this.isAdmin ? this.getOpticaNombre() : 'Mi-Optica';
          const extension = isExcel ? 'xlsx' : 'csv';
          link.download = `Reporte_Historias_Clinicas_${nombreOptica}_${fechaInicial}_a_${fechaFinal}.${extension}`;
          
          // Descargar archivo
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        },
        error: (error) => {
          this.loading = false;
          this.toastService.showError('Error al generar el reporte');
          console.error('Error generando reporte:', error);
        }
      });
    } else {
      this.toastService.showError('Por favor complete todos los campos requeridos');
    }
  }

  getOpticaNombre(): string {
    const opticaId = this.reporteForm.get('optica_id')?.value;
    const optica = this.opticas.find(o => o.id === opticaId);
    return optica ? optica.nombre : '';
  }

  limpiarFormulario(): void {
    this.reporteForm.reset();
    if (!this.isAdmin) {
      const currentUser = this.authService.getCurrentUser();
      if (currentUser?.optica_id) {
        this.reporteForm.patchValue({ optica_id: currentUser.optica_id });
      }
    }
  }

  establecerRangoUltimos30Dias(): void {
    const fechaFinal = new Date();
    const fechaInicial = new Date();
    fechaInicial.setDate(fechaFinal.getDate() - 30);

    this.reporteForm.patchValue({
      fecha_inicial: fechaInicial.toISOString().split('T')[0],
      fecha_final: fechaFinal.toISOString().split('T')[0]
    });
  }
}
