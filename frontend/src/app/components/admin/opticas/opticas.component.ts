import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Optica } from '../../../models/optica.model';
import { AdminService } from '../../../services/admin.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmationModalComponent } from '../../shared/confirmation-modal/confirmation-modal.component';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-opticas',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmationModalComponent],
  templateUrl: './opticas.component.html',
  styleUrls: ['./opticas.component.css']
})
export class OpticasComponent implements OnInit {
  opticas: Optica[] = [];
  filteredOpticas: Optica[] = [];
  showCreateForm = false;
  showResetPasswordModal = false;
  showDeactivateModal = false;
  editingOptica: Optica | null = null;
  selectedOpticaForReset: Optica | null = null;
  selectedOpticaForDeactivate: Optica | null = null;
  formData: any = {};
  searchTerm: string = '';
  isDeactivating = false;
  selectedLogoFile: File | null = null;
  currentUser: User | null = null;

  constructor(
    private adminService: AdminService,
    private toastService: ToastService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadOpticas();
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  // Helper method para determinar si una óptica está activa
  isOpticaActive(optica: Optica): boolean {
    return optica.activo === true || optica.activo === '1' || optica.activo === 1;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  openCreateForm() {
    this.editingOptica = null;
    this.formData = {};
    this.selectedLogoFile = null;
    this.showCreateForm = true;
  }

  loadOpticas() {
    this.adminService.getOpticas().subscribe({
      next: (response) => {
        this.opticas = response.data;
        this.filterOpticas();
      },
      error: (error) => {
        this.toastService.showToast('Error al cargar las ópticas', 'error');
      }
    });
  }

  filterOpticas() {
    if (!this.searchTerm.trim()) {
      this.filteredOpticas = [...this.opticas];
    } else {
      const term = this.searchTerm.toLowerCase().trim();
      this.filteredOpticas = this.opticas.filter(optica => 
        optica.nombre?.toLowerCase().includes(term) ||
        optica.email?.toLowerCase().includes(term) ||
        optica.telefono?.toLowerCase().includes(term)
      );
    }
  }

  onSearchChange() {
    this.filterOpticas();
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterOpticas();
  }

  editOptica(optica: Optica) {
    this.editingOptica = optica;
    this.formData = { 
      nombre: optica.nombre,
      email: optica.email,
      telefono: optica.telefono || '',
      direccion: optica.direccion || '',
      user_nombre: this.currentUser?.user_nombre || optica.user_nombre || '',
      user_apellidos: this.currentUser?.user_apellidos || optica.user_apellidos || ''
    };
    
    this.selectedLogoFile = null;
    this.showCreateForm = true;
  }

  closeForm() {
    this.showCreateForm = false;
    this.editingOptica = null;
    this.formData = {};
    this.selectedLogoFile = null;
  }

  saveOptica() {
    if (this.editingOptica) {
             // Validar campos requeridos para edición
       if (!this.formData.nombre || !this.formData.email || 
           !this.formData.user_nombre || !this.formData.user_apellidos) {
         this.toastService.showToast('Por favor complete todos los campos requeridos', 'error');
         return;
       }

      // Validar que el email no esté duplicado (excluyendo la óptica actual)
      const emailExists = this.opticas.some(optica => 
        optica.email === this.formData.email && optica.id !== this.editingOptica!.id
      );
      if (emailExists) {
        this.toastService.showToast('El email ya existe en el sistema', 'error');
        return;
      }

      const formDataToSend = { ...this.formData };
      if (this.selectedLogoFile) {
        formDataToSend.logo = this.selectedLogoFile;
      }
      
      this.adminService.updateOptica(this.editingOptica.id, formDataToSend).subscribe({
        next: () => {
          this.toastService.showToast('Óptica actualizada correctamente', 'success');
          this.loadOpticas();
          this.closeForm();
        },
        error: (error) => {
          console.error('Error updating optica:', error);
          this.toastService.showToast('Error al actualizar la óptica', 'error');
        }
      });
    } else {
             // Validar campos requeridos antes de enviar
       if (!this.formData.nombre || !this.formData.email || 
           !this.formData.user_nombre || !this.formData.user_apellidos) {
         this.toastService.showToast('Por favor complete todos los campos requeridos', 'error');
         return;
       }

       // Validar que el email no esté duplicado
       const emailExists = this.opticas.some(optica => optica.email === this.formData.email);
       if (emailExists) {
         this.toastService.showToast('El email de la óptica ya existe en el sistema', 'error');
         return;
       }

      const formDataToSend = { ...this.formData };
      if (this.selectedLogoFile) {
        formDataToSend.logo = this.selectedLogoFile;
      }
      
      this.adminService.createOptica(formDataToSend).subscribe({
        next: () => {
          this.toastService.showToast('Óptica creada correctamente', 'success');
          this.loadOpticas();
          this.closeForm();
        },
        error: (error) => {
          console.error('Error creating optica:', error);
          console.error('Error response:', error.error);
          
          // Manejar errores específicos
          if (error.error?.message?.includes('Duplicate entry') && error.error?.message?.includes('email')) {
            this.toastService.showToast('El email ya existe en el sistema. Por favor use un email diferente.', 'error');
          } else {
            this.toastService.showToast(`Error al crear la óptica: ${error.error?.message || error.message}`, 'error');
          }
        }
      });
    }
  }

  toggleOpticaStatus(optica: Optica) {
    const isActive = this.isOpticaActive(optica);
    
    if (isActive) {
      // Si está activa, mostrar modal de confirmación para desactivar
      this.selectedOpticaForDeactivate = optica;
      this.showDeactivateModal = true;
    } else {
      // Si está inactiva, activar directamente
      this.activateOptica(optica);
    }
  }

  openDeactivateModal(optica: Optica) {
    this.selectedOpticaForDeactivate = optica;
    this.showDeactivateModal = true;
  }

  closeDeactivateModal() {
    this.showDeactivateModal = false;
    this.selectedOpticaForDeactivate = null;
    this.isDeactivating = false;
  }

  confirmDeactivate() {
    if (!this.selectedOpticaForDeactivate) return;
    
    this.isDeactivating = true;
    this.adminService.updateOptica(this.selectedOpticaForDeactivate.id, { activo: false }).subscribe({
      next: () => {
        this.toastService.showToast('Óptica desactivada correctamente', 'success');
        this.loadOpticas();
        this.closeDeactivateModal();
      },
      error: (error) => {
        this.toastService.showToast('Error al desactivar la óptica', 'error');
        this.isDeactivating = false;
      }
    });
  }

  activateOptica(optica: Optica) {
    this.adminService.updateOptica(optica.id, { activo: true }).subscribe({
      next: () => {
        this.toastService.showToast('Óptica activada correctamente', 'success');
        this.loadOpticas();
      },
      error: (error) => {
        this.toastService.showToast('Error al activar la óptica', 'error');
      }
    });
  }

  openResetPasswordModal(optica: Optica) {
    this.selectedOpticaForReset = optica;
    this.showResetPasswordModal = true;
  }

  closeResetPasswordModal() {
    this.showResetPasswordModal = false;
    this.selectedOpticaForReset = null;
  }

  resetPassword() {
    if (!this.selectedOpticaForReset) return;

    this.adminService.resetOpticaPassword(this.selectedOpticaForReset.id).subscribe({
      next: () => {
        this.toastService.showToast('Contraseña restablecida exitosamente a "optica123"', 'success');
        this.closeResetPasswordModal();
      },
      error: (error) => {
        this.toastService.showToast('Error al restablecer la contraseña', 'error');
      }
    });
  }

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    
    if (file) {
      // Validar tamaño del archivo (2MB máximo)
      if (file.size > 2 * 1024 * 1024) {
        this.toastService.showToast('El archivo es demasiado grande. Tamaño máximo: 2MB', 'error');
        return;
      }

      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        this.toastService.showToast('Solo se permiten archivos de imagen', 'error');
        return;
      }

      this.selectedLogoFile = file;
      
      // Crear vista previa
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeLogo(): void {
    this.selectedLogoFile = null;
    this.formData.logoPreview = null;
    
    // Limpiar el input de archivo
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  getLogoUrl(logoPath: string): string {
    if (!logoPath) {
      return '';
    }
    
    // Si es una URL completa, devolverla tal como está
    if (logoPath.startsWith('http')) {
      return logoPath;
    }
    
    // Si es una ruta relativa, construir la URL completa
    return `${environment.apiUrl}/uploads/${logoPath}`;
  }

  onLogoError(event: any): void {
    console.error('Error al cargar la imagen del logo:', event.target.src);
  }

  onLogoLoad(event: any): void {
    // Logo cargado exitosamente
  }
}

