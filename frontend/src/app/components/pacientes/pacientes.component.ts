import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';
import { ToastService } from '../../services/toast.service';
import { Paciente, PacienteCreateRequest, PacienteUpdateRequest } from '../../models/paciente.model';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  pacienteForm: FormGroup;
  searchForm: FormGroup;
  isEditing = false;
  editingPacienteId: number | null = null;
  calculatedAge: number | null = null;

  // Validador personalizado para campos select
  static selectValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value || value === '' || value === 'seleccionar') {
      return { required: true };
    }
    return null;
  }

  constructor(
    private fb: FormBuilder,
    private pacientesService: PacientesService,
    private toastService: ToastService,
    private router: Router
  ) {
    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date();
    const fechaActual = today.toISOString().split('T')[0];
    
    this.pacienteForm = this.fb.group({
      documento: ['', Validators.required],
      tipo_documento: ['CC', Validators.required],
      nombre: ['Poner nombres', Validators.required],
      apellidos: ['Poner apellidos', Validators.required],
      email: ['confirmarcorreo@confirmar.com', [Validators.required, Validators.email]],
      telefono: [''],
      fecha_nacimiento: [fechaActual, Validators.required],
      genero: ['O', PacientesComponent.selectValidator],
      rh: ['O+', PacientesComponent.selectValidator],
      nombre_acudiente: [''],
      telefono_acudiente: [''],
      direccion: [''],
      eps: [''],
      tipo_afiliacion: ['no afiliado', PacientesComponent.selectValidator]
    });

    this.searchForm = this.fb.group({
      query: ['']
    });

    // Suscribirse a cambios en la fecha de nacimiento para calcular la edad
    this.pacienteForm.get('fecha_nacimiento')?.valueChanges.subscribe(() => {
      this.calculatedAge = this.calculateAge();
    });
  }

  ngOnInit(): void {
    this.loadPacientes();
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  loadPacientes(): void {
    this.pacientesService.getPacientes().subscribe({
      next: (data: any) => {
        // Manejar tanto arrays directos como objetos que contengan arrays
        if (Array.isArray(data)) {
          this.pacientes = data;
        } else if (data && Array.isArray(data.data)) {
          this.pacientes = data.data;
        } else if (data && Array.isArray(data.pacientes)) {
          this.pacientes = data.pacientes;
        } else {
          console.warn('Formato de datos inesperado:', data);
          this.pacientes = [];
        }
      },
      error: (error) => {
        this.toastService.showError('Error al cargar pacientes');
        console.error('Error loading pacientes:', error);
        this.pacientes = [];
      }
    });
  }

  searchPacientes(): void {
    const searchData = this.searchForm.value;
    
    // Verificar si hay algún término de búsqueda
    const hasSearchTerm = searchData.query && searchData.query.trim().length > 0;
    
    if (!hasSearchTerm) {
      // Si no hay término de búsqueda, volver a la vista normal
      this.loadPacientes();
      return;
    }
    
    this.pacientesService.searchPacientes(searchData).subscribe({
      next: (data: any) => {
        // Manejar tanto arrays directos como objetos que contengan arrays
        if (Array.isArray(data)) {
          this.pacientes = data;
        } else if (data && Array.isArray(data.data)) {
          this.pacientes = data.data;
        } else if (data && Array.isArray(data.pacientes)) {
          this.pacientes = data.pacientes;
        } else {
          this.pacientes = [];
        }
        
        // Mostrar mensaje si se encontraron muchos resultados
        if (this.pacientes.length >= 200) {
          this.toastService.showInfo('Se encontraron muchos resultados. Mostrando los primeros 200.');
        }
      },
      error: (error) => {
        this.toastService.showError('Error en la búsqueda');
        console.error('Error searching pacientes:', error);
        console.error('Error response:', error.error);
        this.pacientes = [];
      }
    });
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.loadPacientes();
  }

  showCreateForm(): void {
    this.isEditing = false;
    this.editingPacienteId = null;
    
    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date();
    const fechaActual = today.toISOString().split('T')[0];
    
    this.pacienteForm.reset();
    this.pacienteForm.patchValue({ 
      tipo_documento: 'CC',
      fecha_nacimiento: fechaActual,
      nombre: 'Poner nombres',
      apellidos: 'Poner apellidos',
      email: 'confirmarcorreo@confirmar.com',
      genero: 'O',
      rh: 'O+',
      tipo_afiliacion: 'no afiliado'
    });
    this.calculatedAge = null; // Resetear la edad calculada
    this.showModal();
  }

  editPaciente(paciente: Paciente): void {
    this.isEditing = true;
    this.editingPacienteId = paciente.id || null;
    this.pacienteForm.patchValue({
      documento: paciente.documento,
      tipo_documento: paciente.tipo_documento,
      nombre: paciente.nombre,
      apellidos: paciente.apellidos,
      email: paciente.email,
      telefono: paciente.telefono,
      fecha_nacimiento: paciente.fecha_nacimiento,
      genero: paciente.genero || '',
      rh: paciente.rh || '',
      nombre_acudiente: paciente.nombre_acudiente,
      telefono_acudiente: paciente.telefono_acudiente,
      direccion: paciente.direccion,
      eps: paciente.eps,
      tipo_afiliacion: paciente.tipo_afiliacion || ''
    });
    // Calcular la edad inicial cuando se edita un paciente
    this.calculatedAge = this.calculateAge();
    this.showModal();
  }

  savePaciente(): void {
    // Marcar todos los campos como touched para mostrar errores de validación
    this.pacienteForm.markAllAsTouched();
    
    if (this.pacienteForm.invalid) {
      this.toastService.showError('Por favor, complete todos los campos requeridos correctamente');
      return;
    }

    const formData = this.pacienteForm.value;
    
    if (this.isEditing && this.editingPacienteId) {
      const updateData: PacienteUpdateRequest = {
        ...formData,
        id: this.editingPacienteId
      };
      
      this.pacientesService.updatePaciente(updateData).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.showSuccess('Paciente actualizado correctamente');
            this.hideModal();
            this.loadPacientes();
          } else {
            // Error de validación (documento duplicado, etc.)
            this.toastService.showError(response.message);
          }
        },
        error: (error) => {
          // Error de conexión o servidor
          const errorMessage = error.error?.message || 'Error al actualizar paciente';
          this.toastService.showError(errorMessage);
          console.error('Error updating paciente:', error);
        }
      });
    } else {
      const createData: PacienteCreateRequest = formData;
      
      this.pacientesService.createPaciente(createData).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.showSuccess('Paciente creado correctamente');
            this.hideModal();
            this.loadPacientes();
          } else {
            // Error de validación (documento duplicado, etc.)
            this.toastService.showError(response.message);
          }
        },
        error: (error) => {
          // Error de conexión o servidor
          const errorMessage = error.error?.message || 'Error al crear paciente';
          this.toastService.showError(errorMessage);
          console.error('Error creating paciente:', error);
          console.error('Error response:', error.error);
          console.error('Error status:', error.status);
        }
      });
    }
  }

  deletePaciente(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este paciente?')) {
      this.pacientesService.deletePaciente(id).subscribe({
        next: () => {
          this.toastService.showSuccess('Paciente eliminado correctamente');
          this.loadPacientes();
        },
        error: (error) => {
          this.toastService.showError('Error al eliminar paciente');
          console.error('Error deleting paciente:', error);
        }
      });
    }
  }

  private showModal(): void {
    const modal = document.getElementById('pacienteModal');
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  private hideModal(): void {
    const modal = document.getElementById('pacienteModal');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }

  calculateAge(): number | null {
    const fechaNacimiento = this.pacienteForm.get('fecha_nacimiento')?.value;
    if (!fechaNacimiento) return null;
    
    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  verHistoriasClinicas(paciente: Paciente): void {
    // Navegar al módulo de historias clínicas con el ID del paciente
    this.router.navigate(['/historias-clinicas'], { 
      queryParams: { pacienteId: paciente.id, pacienteNombre: `${paciente.nombre} ${paciente.apellidos}` }
    });
  }
}

