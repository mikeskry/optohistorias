import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();
  private nextId = 1;

  showSuccess(message: string, duration: number = 5000): void {
    this.showToast(message, 'success', duration);
  }

  showWarning(message: string, duration: number = 5000): void {
    this.showToast(message, 'warning', duration);
  }

  showError(message: string, duration: number = 7000): void {
    this.showToast(message, 'error', duration);
  }

  showInfo(message: string, duration: number = 5000): void {
    this.showToast(message, 'info', duration);
  }

  showToast(message: string, type: Toast['type'], duration: number = 5000): void {
    const toast: Toast = {
      id: this.nextId++,
      message,
      type,
      duration
    };

    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.removeToast(toast.id);
      }, duration);
    }
  }

  removeToast(id: number): void {
    const currentToasts = this.toastsSubject.value;
    const filteredToasts = currentToasts.filter(toast => toast.id !== id);
    this.toastsSubject.next(filteredToasts);
  }

  clearAll(): void {
    this.toastsSubject.next([]);
  }
}

