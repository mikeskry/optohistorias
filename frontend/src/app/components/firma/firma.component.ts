import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirmaService } from '../../services/firma.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-firma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent implements OnInit {
  currentUser: User | null = null;
  selectedFile: File | null = null;
  filePreview: string | null = null;
  isUploading = false;
  isDeleting = false;

  constructor(
    private firmaService: FirmaService,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Validar tipo de archivo
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.showError('Solo se permiten archivos JPG, PNG y GIF');
        return;
      }
      
      // Validar tamaño (2MB máximo)
      if (file.size > 2 * 1024 * 1024) {
        this.toastService.showError('El archivo es demasiado grande. Tamaño máximo: 2MB');
        return;
      }
      
      this.selectedFile = file;
      
      // Crear preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeSelectedFile() {
    this.selectedFile = null;
    this.filePreview = null;
    // Limpiar el input file
    const fileInput = document.getElementById('firmaFile') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  uploadFirma() {
    if (!this.selectedFile) {
      this.toastService.showError('Por favor seleccione un archivo');
      return;
    }

    this.isUploading = true;

    this.firmaService.uploadFirma(this.selectedFile).subscribe({
      next: (response) => {
        this.toastService.showSuccess('Firma actualizada exitosamente');
        
        // Actualizar el usuario actual con la nueva firma
        if (this.currentUser) {
          this.currentUser.firma = response.data.firma;
          this.authService.updateCurrentUser(this.currentUser);
        }
        
        this.removeSelectedFile();
        this.isUploading = false;
      },
      error: (error) => {
        console.error('FirmaComponent::uploadFirma - Error:', error);
        this.toastService.showError('Error al subir la firma: ' + (error.error?.message || 'Error desconocido'));
        this.isUploading = false;
      }
    });
  }

  deleteFirma() {
    if (!this.currentUser?.firma) {
      this.toastService.showError('No hay firma para eliminar');
      return;
    }

    if (!confirm('¿Está seguro que desea eliminar la firma actual?')) {
      return;
    }

    this.isDeleting = true;

    this.firmaService.deleteFirma().subscribe({
      next: (response) => {
        this.toastService.showSuccess('Firma eliminada exitosamente');
        
        // Actualizar el usuario actual removiendo la firma
        if (this.currentUser) {
          this.currentUser.firma = undefined;
          this.authService.updateCurrentUser(this.currentUser);
        }
        
        this.isDeleting = false;
      },
      error: (error) => {
        console.error('FirmaComponent::deleteFirma - Error:', error);
        this.toastService.showError('Error al eliminar la firma: ' + (error.error?.message || 'Error desconocido'));
        this.isDeleting = false;
      }
    });
  }

  getFirmaUrl(): string {
    if (!this.currentUser?.firma) return '';
    return this.firmaService.getFirmaUrl(this.currentUser.firma);
  }
}