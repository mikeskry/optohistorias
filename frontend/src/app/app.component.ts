import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, RouterState } from '@angular/router';
import { ToastComponent } from './components/shared/toast/toast.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AuthService } from './services/auth.service';
import { Observable, filter, map, startWith, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToastComponent, HeaderComponent],
  template: `
    <app-header *ngIf="(showHeader$ | async)"></app-header>
    <router-outlet></router-outlet>
    <app-toast></app-toast>
  `
})
export class AppComponent {
  title = 'ÓpticaCast';
  showHeader$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    const isAuthenticated$ = this.authService.isAuthenticated$;
    
    // Observable para detectar si estamos en la página de login
    const isLoginPage$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/login' || event.urlAfterRedirects === '/login'),
      startWith(this.router.url === '/login')
    );

    // Combinar ambos observables para determinar si mostrar el header
    // Solo mostrar header si está autenticado Y no está en login
    this.showHeader$ = combineLatest([isAuthenticated$, isLoginPage$]).pipe(
      map(([authenticated, isLogin]) => {
        // Si no está autenticado, nunca mostrar header
        if (!authenticated) {
          return false;
        }
        // Si está autenticado pero está en login, no mostrar header
        if (isLogin) {
          return false;
        }
        // Solo mostrar header si está autenticado y no está en login
        return true;
      })
    );
  }
}
