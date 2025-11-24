import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistoriasService } from '../../services/historias.service';
import { PacientesService } from '../../services/pacientes.service';
import { ToastService } from '../../services/toast.service';
import { Historia, HistoriaCreateRequest } from '../../models/historia.model';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-fluid">
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Historias Clínicas</h2>
            <button class="btn btn-primary" (click)="showCreateForm()">
              <i class="fas fa-plus"></i> Nueva Historia
            </button>
          </div>
        </div>
      </div>

      <!-- Search Form -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <form [formGroup]="searchForm" (ngSubmit)="searchHistorias()">
                <div class="row">
                  <div class="col-md-3">
                    <label class="form-label">Paciente</label>
                    <select class="form-select" formControlName="paciente_id">
                      <option value="">Todos los pacientes</option>
                      <option *ngFor="let paciente of pacientes" [value]="paciente.id">
                        {{ paciente.nombre }} {{ paciente.apellidos }} - {{ paciente.documento }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label">Fecha Desde</label>
                    <input type="date" class="form-control" formControlName="fecha_desde">
                  </div>
                  <div class="col-md-3">
                    <label class="form-label">Fecha Hasta</label>
                    <input type="date" class="form-control" formControlName="fecha_hasta">
                  </div>
                  <div class="col-md-3">
                    <label class="form-label">&nbsp;</label>
                    <div>
                      <button type="submit" class="btn btn-primary me-2">
                        <i class="fas fa-search"></i> Buscar
                      </button>
                      <button type="button" class="btn btn-secondary" (click)="clearSearch()">
                        <i class="fas fa-times"></i> Limpiar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Histories Table -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Paciente</th>
                      <th>Motivo Consulta</th>
                      <th>Diagnóstico</th>
                      <th>Próxima Cita</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let historia of historias">
                      <td>{{ historia.fecha_consulta | date:'dd/MM/yyyy' }}</td>
                      <td>{{ getPacienteNombre(historia.paciente_id) }}</td>
                      <td>{{ historia.motivo_consulta | slice:0:50 }}{{ (historia.motivo_consulta || '').length > 50 ? '...' : '' }}</td>
                      <td>{{ historia.diagnostico | slice:0:50 }}{{ (historia.diagnostico || '').length > 50 ? '...' : '' }}</td>
                      <td>{{ historia.proxima_cita | date:'dd/MM/yyyy' }}</td>
                      <td>
                        <button class="btn btn-sm btn-outline-info me-1" (click)="viewHistoria(historia)">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-success" (click)="downloadPDF(historia.id!)">
                          <i class="fas fa-download"></i>
                        </button>
                      </td>
                    </tr>
                    <tr *ngIf="historias.length === 0">
                      <td colspan="6" class="text-center text-muted">No se encontraron historias clínicas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create History Modal -->
    <div class="modal fade" id="historiaModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nueva Historia Clínica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form [formGroup]="historiaForm" (ngSubmit)="saveHistoria()">
              <!-- Patient Selection -->
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">Paciente *</label>
                  <select class="form-select" formControlName="paciente_id"
                          [class.is-invalid]="historiaForm.get('paciente_id')?.invalid && historiaForm.get('paciente_id')?.touched">
                    <option value="">Seleccionar paciente</option>
                    <option *ngFor="let paciente of pacientes" [value]="paciente.id">
                      {{ paciente.nombre }} {{ paciente.apellidos }} - {{ paciente.documento }}
                    </option>
                  </select>
                  <div class="invalid-feedback" *ngIf="historiaForm.get('paciente_id')?.invalid && historiaForm.get('paciente_id')?.touched">
                    Paciente es requerido
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Fecha de Consulta *</label>
                  <input type="date" class="form-control" formControlName="fecha_consulta"
                         [class.is-invalid]="historiaForm.get('fecha_consulta')?.invalid && historiaForm.get('fecha_consulta')?.touched">
                  <div class="invalid-feedback" *ngIf="historiaForm.get('fecha_consulta')?.invalid && historiaForm.get('fecha_consulta')?.touched">
                    Fecha de consulta es requerida
                  </div>
                </div>
              </div>

              <!-- Accordion for History Sections -->
              <div class="accordion" id="historiaAccordion">
                <!-- Cuestionario Section -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cuestionarioCollapse">
                      Cuestionario
                    </button>
                  </h2>
                  <div id="cuestionarioCollapse" class="accordion-collapse collapse show" data-bs-parent="#historiaAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-12">
                          <label class="form-label">Motivo de Consulta</label>
                          <textarea class="form-control" formControlName="motivo_consulta" rows="3" 
                                    placeholder="Describa el motivo de la consulta"></textarea>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-6">
                          <label class="form-label">Síntomas</label>
                          <textarea class="form-control" formControlName="sintomas" rows="3" 
                                    placeholder="Describa los síntomas"></textarea>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label">Antecedentes</label>
                          <textarea class="form-control" formControlName="antecedentes" rows="3" 
                                    placeholder="Antecedentes médicos relevantes"></textarea>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-6">
                          <label class="form-label">Medicamentos</label>
                          <textarea class="form-control" formControlName="medicamentos" rows="2" 
                                    placeholder="Medicamentos que toma actualmente"></textarea>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label">Alergias</label>
                          <textarea class="form-control" formControlName="alergias" rows="2" 
                                    placeholder="Alergias conocidas"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Agudeza Visual Section -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#agudezaCollapse">
                      Agudeza Visual
                    </button>
                  </h2>
                  <div id="agudezaCollapse" class="accordion-collapse collapse" data-bs-parent="#historiaAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h6>Ojo Derecho (OD)</h6>
                          <div class="row">
                            <div class="col-md-6">
                              <label class="form-label">Lejos</label>
                              <input type="number" class="form-control" formControlName="av_od_lejos" 
                                     step="0.01" min="0" max="2" placeholder="0.00 - 2.00">
                            </div>
                            <div class="col-md-6">
                              <label class="form-label">Cerca</label>
                              <input type="number" class="form-control" formControlName="av_od_cerca" 
                                     step="0.01" min="0" max="2" placeholder="0.00 - 2.00">
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <h6>Ojo Izquierdo (OI)</h6>
                          <div class="row">
                            <div class="col-md-6">
                              <label class="form-label">Lejos</label>
                              <input type="number" class="form-control" formControlName="av_oi_lejos" 
                                     step="0.01" min="0" max="2" placeholder="0.00 - 2.00">
                            </div>
                            <div class="col-md-6">
                              <label class="form-label">Cerca</label>
                              <input type="number" class="form-control" formControlName="av_oi_cerca" 
                                     step="0.01" min="0" max="2" placeholder="0.00 - 2.00">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Examen Refractivo Section -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#refractivoCollapse">
                      Examen Refractivo
                    </button>
                  </h2>
                  <div id="refractivoCollapse" class="accordion-collapse collapse" data-bs-parent="#historiaAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h6>Ojo Derecho (OD)</h6>
                          <div class="row">
                            <div class="col-md-4">
                              <label class="form-label">Esfera</label>
                              <input type="number" class="form-control" formControlName="esfera_od" 
                                     step="0.25" placeholder="±0.00">
                            </div>
                            <div class="col-md-4">
                              <label class="form-label">Cilindro</label>
                              <input type="number" class="form-control" formControlName="cilindro_od" 
                                     step="0.25" placeholder="±0.00">
                            </div>
                            <div class="col-md-4">
                              <label class="form-label">Eje</label>
                              <input type="number" class="form-control" formControlName="eje_od" 
                                     min="0" max="180" placeholder="0-180">
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <h6>Ojo Izquierdo (OI)</h6>
                          <div class="row">
                            <div class="col-md-4">
                              <label class="form-label">Esfera</label>
                              <input type="number" class="form-control" formControlName="esfera_oi" 
                                     step="0.25" placeholder="±0.00">
                            </div>
                            <div class="col-md-4">
                              <label class="form-label">Cilindro</label>
                              <input type="number" class="form-control" formControlName="cilindro_oi" 
                                     step="0.25" placeholder="±0.00">
                            </div>
                            <div class="col-md-4">
                              <label class="form-label">Eje</label>
                              <input type="number" class="form-control" formControlName="eje_oi" 
                                     min="0" max="180" placeholder="0-180">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-6">
                          <label class="form-label">Adición</label>
                          <input type="number" class="form-control" formControlName="adicion" 
                                 step="0.25" min="0" max="3" placeholder="0.00 - 3.00">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Observaciones Section -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#observacionesCollapse">
                      Observaciones
                    </button>
                  </h2>
                  <div id="observacionesCollapse" class="accordion-collapse collapse show" data-bs-parent="#historiaAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <label class="form-label">Diagnóstico</label>
                          <textarea class="form-control" formControlName="diagnostico" rows="3" 
                                    placeholder="Diagnóstico del paciente"></textarea>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label">Tratamiento</label>
                          <textarea class="form-control" formControlName="tratamiento" rows="3" 
                                    placeholder="Tratamiento recomendado"></textarea>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-6">
                          <label class="form-label">Observaciones Generales</label>
                          <textarea class="form-control" formControlName="observaciones" rows="3" 
                                    placeholder="Observaciones adicionales"></textarea>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label">Próxima Cita</label>
                          <input type="date" class="form-control" formControlName="proxima_cita">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" (click)="saveHistoria()" [disabled]="historiaForm.invalid">
              Crear Historia
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- View History Modal -->
    <div class="modal fade" id="viewHistoriaModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Historia Clínica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div *ngIf="selectedHistoria">
              <div class="row mb-3">
                <div class="col-md-6">
                  <strong>Paciente:</strong> {{ getPacienteNombre(selectedHistoria.paciente_id) }}
                </div>
                <div class="col-md-6">
                  <strong>Fecha:</strong> {{ selectedHistoria.fecha_consulta | date:'dd/MM/yyyy' }}
                </div>
              </div>
              
              <div class="accordion" id="viewHistoriaAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#viewCuestionarioCollapse">
                      Cuestionario
                    </button>
                  </h2>
                  <div id="viewCuestionarioCollapse" class="accordion-collapse collapse show" data-bs-parent="#viewHistoriaAccordion">
                    <div class="accordion-body">
                      <p><strong>Motivo de Consulta:</strong> {{ selectedHistoria.motivo_consulta || 'No especificado' }}</p>
                      <p><strong>Síntomas:</strong> {{ selectedHistoria.sintomas || 'No especificado' }}</p>
                      <p><strong>Antecedentes:</strong> {{ selectedHistoria.antecedentes || 'No especificado' }}</p>
                      <p><strong>Medicamentos:</strong> {{ selectedHistoria.medicamentos || 'No especificado' }}</p>
                      <p><strong>Alergias:</strong> {{ selectedHistoria.alergias || 'No especificado' }}</p>
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#viewAgudezaCollapse">
                      Agudeza Visual
                    </button>
                  </h2>
                  <div id="viewAgudezaCollapse" class="accordion-collapse collapse" data-bs-parent="#viewHistoriaAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h6>Ojo Derecho (OD)</h6>
                          <p><strong>Lejos:</strong> {{ selectedHistoria.av_od_lejos || 'No especificado' }}</p>
                          <p><strong>Cerca:</strong> {{ selectedHistoria.av_od_cerca || 'No especificado' }}</p>
                        </div>
                        <div class="col-md-6">
                          <h6>Ojo Izquierdo (OI)</h6>
                          <p><strong>Lejos:</strong> {{ selectedHistoria.av_oi_lejos || 'No especificado' }}</p>
                          <p><strong>Cerca:</strong> {{ selectedHistoria.av_oi_cerca || 'No especificado' }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#viewRefractivoCollapse">
                      Examen Refractivo
                    </button>
                  </h2>
                  <div id="viewRefractivoCollapse" class="accordion-collapse collapse" data-bs-parent="#viewHistoriaAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h6>Ojo Derecho (OD)</h6>
                          <p><strong>Esfera:</strong> {{ selectedHistoria.esfera_od || 'No especificado' }}</p>
                          <p><strong>Cilindro:</strong> {{ selectedHistoria.cilindro_od || 'No especificado' }}</p>
                          <p><strong>Eje:</strong> {{ selectedHistoria.eje_od || 'No especificado' }}</p>
                        </div>
                        <div class="col-md-6">
                          <h6>Ojo Izquierdo (OI)</h6>
                          <p><strong>Esfera:</strong> {{ selectedHistoria.esfera_oi || 'No especificado' }}</p>
                          <p><strong>Cilindro:</strong> {{ selectedHistoria.cilindro_oi || 'No especificado' }}</p>
                          <p><strong>Eje:</strong> {{ selectedHistoria.eje_oi || 'No especificado' }}</p>
                        </div>
                      </div>
                      <p><strong>Adición:</strong> {{ selectedHistoria.adicion || 'No especificado' }}</p>
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#viewObservacionesCollapse">
                      Observaciones
                    </button>
                  </h2>
                  <div id="viewObservacionesCollapse" class="accordion-collapse collapse show" data-bs-parent="#viewHistoriaAccordion">
                    <div class="accordion-body">
                      <p><strong>Diagnóstico:</strong> {{ selectedHistoria.diagnostico || 'No especificado' }}</p>
                      <p><strong>Tratamiento:</strong> {{ selectedHistoria.tratamiento || 'No especificado' }}</p>
                      <p><strong>Observaciones:</strong> {{ selectedHistoria.observaciones || 'No especificado' }}</p>
                      <p><strong>Próxima Cita:</strong> {{ selectedHistoria.proxima_cita ? (selectedHistoria.proxima_cita | date:'dd/MM/yyyy') : 'No programada' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success" (click)="downloadPDF(selectedHistoria?.id || 0)">
              <i class="fas fa-download"></i> Descargar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .accordion-button:not(.collapsed) {
      background-color: #e7f3ff;
      color: #0c63e4;
    }
    
    .accordion-button:focus {
      box-shadow: none;
      border-color: rgba(0, 0, 0, 0.125);
    }
    
    .modal-xl {
      max-width: 1200px;
    }
    
    .table th {
      background-color: #f8f9fa;
      border-top: none;
    }
  `]
})
export class HistoriasComponent implements OnInit {
  historias: Historia[] = [];
  pacientes: Paciente[] = [];
  historiaForm: FormGroup;
  searchForm: FormGroup;
  selectedHistoria: Historia | null = null;

  constructor(
    private fb: FormBuilder,
    private historiasService: HistoriasService,
    private pacientesService: PacientesService,
    private toastService: ToastService
  ) {
    this.historiaForm = this.fb.group({
      paciente_id: ['', Validators.required],
      fecha_consulta: ['', Validators.required],
      motivo_consulta: [''],
      sintomas: [''],
      antecedentes: [''],
      medicamentos: [''],
      alergias: [''],
      av_od_lejos: [''],
      av_od_cerca: [''],
      av_oi_lejos: [''],
      av_oi_cerca: [''],
      esfera_od: [''],
      cilindro_od: [''],
      eje_od: [''],
      esfera_oi: [''],
      cilindro_oi: [''],
      eje_oi: [''],
      adicion: [''],
      observaciones: [''],
      diagnostico: [''],
      tratamiento: [''],
      proxima_cita: ['']
    });

    this.searchForm = this.fb.group({
      paciente_id: [''],
      fecha_desde: [''],
      fecha_hasta: ['']
    });
  }

  ngOnInit(): void {
    this.loadHistorias();
    this.loadPacientes();
  }

  loadHistorias(): void {
    this.historiasService.getHistorias().subscribe({
      next: (data) => {
        this.historias = data;
      },
      error: (error) => {
        this.toastService.showError('Error al cargar historias clínicas');
        console.error('Error loading historias:', error);
      }
    });
  }

  loadPacientes(): void {
    this.pacientesService.getPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (error) => {
        console.error('Error loading pacientes:', error);
      }
    });
  }

  searchHistorias(): void {
    const searchData = this.searchForm.value;
    this.historiasService.searchHistorias(searchData).subscribe({
      next: (data) => {
        this.historias = data;
      },
      error: (error) => {
        this.toastService.showError('Error en la búsqueda');
        console.error('Error searching historias:', error);
      }
    });
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.loadHistorias();
  }

  showCreateForm(): void {
    this.historiaForm.reset();
    this.historiaForm.patchValue({
      fecha_consulta: new Date().toISOString().split('T')[0]
    });
    this.showModal('historiaModal');
  }

  saveHistoria(): void {
    if (this.historiaForm.invalid) return;

    const formData = this.historiaForm.value;
    const createData: HistoriaCreateRequest = formData;
    
    this.historiasService.createHistoria(createData).subscribe({
      next: () => {
        this.toastService.showSuccess('Historia clínica creada correctamente');
        this.hideModal('historiaModal');
        this.loadHistorias();
      },
      error: (error) => {
        this.toastService.showError('Error al crear historia clínica');
        console.error('Error creating historia:', error);
      }
    });
  }

  viewHistoria(historia: Historia): void {
    this.selectedHistoria = historia;
    this.showModal('viewHistoriaModal');
  }

  downloadPDF(id: number): void {
    this.historiasService.downloadPDF(id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `historia_clinica_${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error: (error) => {
        this.toastService.showError('Error al descargar PDF');
        console.error('Error downloading PDF:', error);
      }
    });
  }

  getPacienteNombre(pacienteId: number): string {
    const paciente = this.pacientes.find(p => p.id === pacienteId);
    return paciente ? `${paciente.nombre} ${paciente.apellidos}` : 'Paciente no encontrado';
  }

  private showModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  private hideModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }
}

