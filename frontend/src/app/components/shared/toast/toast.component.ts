import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../services/toast.service';
import { Toast } from '../../../models/toast.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1055;">
      <div *ngFor="let toast of toasts" 
           class="toast show" 
           [class]="getToastClasses(toast.type)"
           role="alert">
        <div class="toast-header">
          <i [class]="getToastIcon(toast.type)" class="me-2"></i>
          <strong class="me-auto">{{ getToastTitle(toast.type) }}</strong>
          <small>{{ toast.timestamp ? (toast.timestamp | date:'HH:mm') : '' }}</small>
          <button type="button" class="btn-close" (click)="removeToast(toast.id)"></button>
        </div>
        <div class="toast-body">
          {{ toast.message }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      max-width: 400px;
    }
    
    .toast {
      margin-bottom: 0.5rem;
      border: none;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
    
    .toast-success {
      background-color: var(--success-color);
      color: white;
    }
    
    .toast-warning {
      background-color: var(--warning-color);
      color: white;
    }
    
    .toast-error {
      background-color: var(--error-color);
      color: white;
    }
    
    .toast-info {
      background-color: var(--info-color);
      color: white;
    }
    
    .toast-header {
      background-color: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
    }
    
    .toast-header .btn-close {
      filter: invert(1);
    }
    
    .toast-body {
      padding: 0.75rem 1rem;
    }
  `]
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.subscription = this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeToast(id: number): void {
    this.toastService.removeToast(id);
  }

  getToastClasses(type: string): string {
    return `toast-${type}`;
  }

  getToastIcon(type: string): string {
    switch (type) {
      case 'success': return 'fas fa-check-circle';
      case 'warning': return 'fas fa-exclamation-triangle';
      case 'error': return 'fas fa-times-circle';
      case 'info': return 'fas fa-info-circle';
      default: return 'fas fa-bell';
    }
  }

  getToastTitle(type: string): string {
    switch (type) {
      case 'success': return 'Éxito';
      case 'warning': return 'Advertencia';
      case 'error': return 'Error';
      case 'info': return 'Información';
      default: return 'Notificación';
    }
  }
}

