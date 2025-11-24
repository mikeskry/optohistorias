import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal fade" [class.show]="isVisible" [class.d-block]="isVisible" 
         style="background-color: rgba(0,0,0,0.5);" *ngIf="isVisible">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" (click)="onCancel()"></button>
          </div>
          <div class="modal-body">
            <p>{{ message }}</p>
            <div *ngIf="warningMessage" class="alert alert-warning">
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ warningMessage }}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="onCancel()">
              {{ cancelText }}
            </button>
            <button type="button" class="btn" [class]="confirmButtonClass" (click)="onConfirm()" [disabled]="isLoading">
              <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal.show {
      display: block !important;
    }
  `]
})
export class ConfirmationModalComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = 'Confirmar acción';
  @Input() message: string = '¿Está seguro de que desea continuar?';
  @Input() warningMessage: string = '';
  @Input() confirmText: string = 'Confirmar';
  @Input() cancelText: string = 'Cancelar';
  @Input() confirmButtonClass: string = 'btn-danger';
  @Input() isLoading: boolean = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
