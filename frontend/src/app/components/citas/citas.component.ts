import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitasService } from '../../services/citas.service';
import { PacientesService } from '../../services/pacientes.service';
import { ToastService } from '../../services/toast.service';
import { Cita, CitaCreateRequest, CitaUpdateRequest } from '../../models/cita.model';
import { Paciente } from '../../models/paciente.model';
import { environment } from '../../../environments/environment';
import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ConfirmationModalComponent],
  template: `
    <div class="container-fluid">
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Gestión de Citas</h2>
            <button class="btn btn-primary" (click)="showCreateForm()" style="display: none;">
              <i class="fas fa-plus"></i> Nueva Cita
            </button>
          </div>
        </div>
      </div>

      <!-- Date Navigation -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <button class="btn btn-outline-secondary" (click)="previousWeek()">
                  <i class="fas fa-chevron-left"></i> Semana Anterior
                </button>
                <h5 class="mb-0">
                  {{ getWeekRange() }}
                </h5>
                <button class="btn btn-outline-secondary" (click)="nextWeek()">
                  Siguiente Semana <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weekly Calendar -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th class="text-center" style="width: 120px;">Hora</th>
                      <th *ngFor="let day of weekDays" class="text-center">
                        {{ day.dayName }} {{ day.date | date:'dd/MM' }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let timeSlot of timeSlots">
                      <td class="text-center fw-bold">{{ timeSlot }}</td>
                      <td *ngFor="let day of weekDays" 
                          [class.table-success]="hasAppointment(day.date, timeSlot)"
                          [class.table-warning]="isTimeSlotPast(day.date, timeSlot)"
                          class="position-relative"
                          style="height: 80px; vertical-align: middle;">
                        
                        <div *ngIf="hasAppointment(day.date, timeSlot)" 
                             class="appointment-info text-center">
                          <div class="fw-bold">{{ getAppointmentPatient(day.date, timeSlot) }}</div>
                          <div class="small text-muted">{{ getAppointmentNotes(day.date, timeSlot) }}</div>
                          <div class="mt-1" *ngIf="!isTimeSlotPast(day.date, timeSlot)">
                            <button class="btn btn-sm btn-outline-primary me-1" 
                                    (click)="editCita(getAppointment(day.date, timeSlot)!)">
                              <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger" 
                                    (click)="openDeleteModal(getAppointment(day.date, timeSlot)!)">
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                          <div class="mt-1" *ngIf="isTimeSlotPast(day.date, timeSlot)">
                            <small class="text-muted">
                              <i class="fas fa-lock me-1"></i>
                              No editable
                            </small>
                          </div>
                        </div>
                        
                        <div *ngIf="!hasAppointment(day.date, timeSlot) && !isTimeSlotPast(day.date, timeSlot)" 
                             class="text-center text-muted">
                          <i class="fas fa-plus-circle fa-2x mb-2"></i>
                          <br>
                          <button class="btn btn-sm btn-outline-success" 
                                  (click)="quickCreateCita(day.date, timeSlot)">
                            Agregar
                          </button>
                        </div>
                        
                        <div *ngIf="!hasAppointment(day.date, timeSlot) && isTimeSlotPast(day.date, timeSlot)" 
                             class="text-center text-muted">
                          <i class="fas fa-clock fa-2x"></i>
                          <br>
                          <small>Pasado</small>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create/Edit Appointment Modal -->
    <div class="modal fade" id="citaModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Editar' : 'Nueva' }} Cita</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form [formGroup]="citaForm" (ngSubmit)="saveCita()">
              <div class="row">
                <div class="col-md-6">
                  <label class="form-label">Nombre del Paciente *</label>
                  <input type="text" class="form-control" formControlName="nombre_paciente"
                         placeholder="Escriba el nombre completo del paciente"
                         [class.is-invalid]="citaForm.get('nombre_paciente')?.invalid && citaForm.get('nombre_paciente')?.touched">
                  <div class="invalid-feedback" *ngIf="citaForm.get('nombre_paciente')?.invalid && citaForm.get('nombre_paciente')?.touched">
                    Nombre del paciente es requerido
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Fecha *</label>
                  <input type="date" class="form-control" formControlName="fecha"
                         [class.is-invalid]="citaForm.get('fecha')?.invalid && citaForm.get('fecha')?.touched">
                  <div class="invalid-feedback" *ngIf="citaForm.get('fecha')?.invalid && citaForm.get('fecha')?.touched">
                    Fecha es requerida
                  </div>
                </div>
              </div>
              
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="form-label">Hora *</label>
                  <input type="text" class="form-control" formControlName="hora" readonly
                         [class.is-invalid]="citaForm.get('hora')?.invalid && citaForm.get('hora')?.touched">
                  <div class="invalid-feedback" *ngIf="citaForm.get('hora')?.invalid && citaForm.get('hora')?.touched">
                    Hora es requerida
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-label">Duración</div>
                  <div class="form-control-plaintext">30 minutos (fijo)</div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" (click)="saveCita()" [disabled]="citaForm.invalid">
              {{ isEditing ? 'Actualizar' : 'Crear' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación para eliminar cita -->
    <app-confirmation-modal
      [isVisible]="showDeleteModal"
      title="Eliminar Cita"
      [message]="'¿Está seguro que desea eliminar la cita de ' + (selectedCitaForDelete?.nombre_paciente || '') + '?'"
      warningMessage="Esta acción no se puede deshacer."
      confirmText="Eliminar"
      cancelText="Cancelar"
      confirmButtonClass="btn-danger"
      [isLoading]="isDeleting"
      (confirm)="confirmDelete()"
      (cancel)="closeDeleteModal()">
    </app-confirmation-modal>
  `,
  styles: [`
    .table th {
      background-color: #f8f9fa;
      border-top: none;
    }
    
    .appointment-info {
      padding: 5px;
    }
    
    .table-success {
      background-color: var(--clear-grey-color) !important;
    }
    
    .table-warning {
      background-color: #fff3cd !important;
    }
    
    .btn-sm {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }
    
    .fa-2x {
      font-size: 1.5em;
    }
    
    .form-control[readonly] {
      background-color: #f8f9fa;
      border-color: #dee2e6;
      color: #6c757d;
      cursor: not-allowed;
    }
    
    .appointment-info .text-muted {
      font-size: 0.75rem;
      font-style: italic;
    }
    
    .table-warning .appointment-info {
      opacity: 0.8;
    }
  `]
})
export class CitasComponent implements OnInit {
  citas: Cita[] = [];
  pacientes: Paciente[] = [];
  citaForm: FormGroup;
  isEditing = false;
  editingCitaId: number | null = null;
  currentWeekStart: Date = new Date();
  
  timeSlots: string[] = [];
  weekDays: { date: Date; dayName: string }[] = [];

  // Modal de confirmación
  showDeleteModal = false;
  selectedCitaForDelete: Cita | null = null;
  isDeleting = false;

  constructor(
    private fb: FormBuilder,
    private citasService: CitasService,
    private pacientesService: PacientesService,
    private toastService: ToastService
  ) {
    this.citaForm = this.fb.group({
      nombre_paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.generateTimeSlots();
    this.initializeWeek();
    this.loadCitas();
    this.loadPacientes();
  }

  generateTimeSlots(): void {
    this.timeSlots = [];
    const horaInicio = environment.citas.horaInicio;
    const horaFin = environment.citas.horaFin;
    
    for (let hour = horaInicio; hour < horaFin; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        this.timeSlots.push(timeString);
      }
    }
  }

  initializeWeek(): void {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    
    this.currentWeekStart = new Date(today.setDate(diff));
    this.updateWeekDays();
  }

  updateWeekDays(): void {
    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(this.currentWeekStart);
      date.setDate(date.getDate() + i);
      this.weekDays.push({
        date: date,
        dayName: date.toLocaleDateString('es-ES', { weekday: 'short' })
      });
    }
  }

  previousWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.updateWeekDays();
    this.loadCitas();
  }

  nextWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.updateWeekDays();
    this.loadCitas();
  }

  getWeekRange(): string {
    const endDate = new Date(this.currentWeekStart);
    endDate.setDate(endDate.getDate() + 6);
    
    return `${this.currentWeekStart.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })} - ${endDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  }

  loadCitas(): void {
    const startDate = this.formatDateForAPI(this.currentWeekStart);
    const endDate = new Date(this.currentWeekStart);
    endDate.setDate(endDate.getDate() + 6);
    const endDateStr = this.formatDateForAPI(endDate);
    
    this.citasService.getCitasByDateRange(startDate, endDateStr).subscribe({
      next: (response) => {
        // Extraer el array de datos de la respuesta
        const data = response.data || response;
        this.citas = Array.isArray(data) ? data : [];
      },
      error: (error) => {
        this.toastService.showError('Error al cargar citas');
        console.error('Error loading citas:', error);
        this.citas = [];
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

  hasAppointment(date: Date, timeSlot: string): boolean {
    if (!Array.isArray(this.citas)) {
      return false;
    }
    const dateStr = this.formatDateForAPI(date);
    return this.citas.some(cita => {
      // Comparar fecha
      const fechaMatch = cita.fecha === dateStr;
      // Comparar hora (formato puede ser HH:MM:SS o HH:MM)
      const horaMatch = cita.hora === timeSlot || cita.hora === timeSlot + ':00';
      return fechaMatch && horaMatch;
    });
  }

  getAppointment(date: Date, timeSlot: string): Cita | undefined {
    if (!Array.isArray(this.citas)) {
      return undefined;
    }
    const dateStr = this.formatDateForAPI(date);
    return this.citas.find(cita => {
      // Comparar fecha
      const fechaMatch = cita.fecha === dateStr;
      // Comparar hora (formato puede ser HH:MM:SS o HH:MM)
      const horaMatch = cita.hora === timeSlot || cita.hora === timeSlot + ':00';
      return fechaMatch && horaMatch;
    });
  }

  getAppointmentPatient(date: Date, timeSlot: string): string {
    const cita = this.getAppointment(date, timeSlot);
    return cita?.nombre_paciente || '';
  }

  getAppointmentNotes(date: Date, timeSlot: string): string {
    const cita = this.getAppointment(date, timeSlot);
    return cita?.notas || '';
  }

  isTimeSlotPast(date: Date, timeSlot: string): boolean {
    const now = new Date();
    const appointmentDateTime = new Date(date);
    const [hours, minutes] = timeSlot.split(':');
    appointmentDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    return appointmentDateTime < now;
  }

  showCreateForm(): void {
    this.isEditing = false;
    this.editingCitaId = null;
    this.citaForm.reset();
    this.citaForm.patchValue({
      fecha: this.formatDateForAPI(new Date())
    });
    this.showModal();
  }

  quickCreateCita(date: Date, timeSlot: string): void {
    this.isEditing = false;
    this.editingCitaId = null;
    this.citaForm.reset();
    this.citaForm.patchValue({
      fecha: this.formatDateForAPI(date),
      hora: timeSlot
    });
    this.showModal();
  }

  editCita(cita: Cita): void {
    this.isEditing = true;
    this.editingCitaId = cita.id;
    
    // Formatear la hora de HH:MM:SS a HH:MM si es necesario
    let horaFormateada = cita.hora;
    if (horaFormateada && horaFormateada.includes(':')) {
      const partesHora = horaFormateada.split(':');
      if (partesHora.length >= 2) {
        horaFormateada = `${partesHora[0]}:${partesHora[1]}`;
      }
    }
    
    this.citaForm.patchValue({
      nombre_paciente: cita.nombre_paciente,
      fecha: cita.fecha,
      hora: horaFormateada
    });
    this.showModal();
  }

  saveCita(): void {
    if (this.citaForm.invalid) return;

    const formData = this.citaForm.value;
    // Agregar duración fija de 30 minutos
    formData.duracion = 30;
    
    if (this.isEditing && this.editingCitaId) {
      const updateData: CitaUpdateRequest = {
        ...formData,
        id: this.editingCitaId
      };
      
      this.citasService.updateCita(updateData).subscribe({
        next: () => {
          this.toastService.showSuccess('Cita actualizada correctamente');
          this.hideModal();
          this.loadCitas();
        },
        error: (error) => {
          this.toastService.showError('Error al actualizar cita');
          console.error('Error updating cita:', error);
        }
      });
    } else {
      const createData: CitaCreateRequest = formData;
      
      this.citasService.createCita(createData).subscribe({
        next: () => {
          this.toastService.showSuccess('Cita creada correctamente');
          this.hideModal();
          this.loadCitas();
        },
        error: (error) => {
          this.toastService.showError('Error al crear cita');
          console.error('Error creating cita:', error);
        }
      });
    }
  }

  deleteCita(id: number): void {
    const cita = this.citas.find(c => c.id === id);
    if (cita) {
      this.selectedCitaForDelete = cita;
      this.showDeleteModal = true;
    }
  }

  openDeleteModal(cita: Cita): void {
    this.selectedCitaForDelete = cita;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedCitaForDelete = null;
    this.isDeleting = false;
  }

  confirmDelete(): void {
    if (!this.selectedCitaForDelete) return;
    
    this.isDeleting = true;
    this.citasService.deleteCita(this.selectedCitaForDelete.id).subscribe({
      next: () => {
        this.toastService.showSuccess('Cita eliminada correctamente');
        this.loadCitas();
        this.closeDeleteModal();
      },
      error: (error) => {
        this.toastService.showError('Error al eliminar cita');
        console.error('Error deleting cita:', error);
        this.isDeleting = false;
      }
    });
  }

  private showModal(): void {
    const modal = document.getElementById('citaModal');
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  private hideModal(): void {
    const modal = document.getElementById('citaModal');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }

  private formatDateForAPI(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

