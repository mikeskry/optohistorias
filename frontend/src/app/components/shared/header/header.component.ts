import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="modern-navbar">
      <div class="navbar-container">
        <!-- Logo/Brand -->
        <div class="navbar-brand" (click)="goToDashboard()">
          <!-- Logo personalizado de la óptica -->
          <div *ngIf="currentUser?.optica_logo" class="optica-logo-container">
            <img [src]="getOpticaLogoUrl()" 
                 [alt]="currentUser?.optica_nombre || 'Logo de la óptica'"
                 class="optica-logo-image">
          </div>
          
          <!-- Logo por defecto del sistema -->
          <div *ngIf="!currentUser?.optica_logo" class="brand-icon">
            <i class="fas fa-eye"></i>
          </div>
          
          <div class="brand-text">
            <span class="brand-name">{{ currentUser?.optica_nombre || 'ÓpticaCast' }}</span>
            <span class="brand-subtitle">Sistema Clínico</span>
          </div>
        </div>

        <!-- Navigation Menu (Desktop) -->
        <div class="navbar-menu desktop-menu" *ngIf="currentUser">
          <div class="menu-item" [class.active]="isActiveRoute('/dashboard')" (click)="goToDashboard()">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
          
          <div class="menu-item" [class.active]="isActiveRoute('/pacientes')" (click)="goToPacientes()" *ngIf="!isAdmin">
            <i class="fas fa-users"></i>
            <span>Pacientes</span>
          </div>
          
          <div class="menu-item" [class.active]="isActiveRoute('/opticas')" (click)="goToOpticas()" *ngIf="isAdmin">
            <i class="fas fa-building"></i>
            <span>Ópticas</span>
          </div>
          
          <div class="menu-item" [class.active]="isActiveRoute('/citas')" (click)="goToCitas()" *ngIf="!isAdmin">
            <i class="fas fa-calendar-alt"></i>
            <span>Citas</span>
          </div>
          
          <div class="menu-item" [class.active]="isActiveRoute('/firma')" (click)="goToFirma()" *ngIf="!isAdmin">
            <i class="fas fa-signature"></i>
            <span>Firma</span>
          </div>
          
          <div class="menu-item" [class.active]="isActiveRoute('/reportes')" (click)="goToReportes()">
            <i class="fas fa-chart-line"></i>
            <span>Reportes</span>
          </div>
        </div>

        <!-- User Menu -->
        <div class="navbar-user" *ngIf="currentUser">
          <div class="user-info" (click)="toggleUserMenu()">
            <div class="user-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="user-details">
              <span class="user-name">{{ currentUser.nombre }} {{ currentUser.apellidos }}</span>
              <span class="user-role">{{ currentUser.rol === 'admin' ? 'Administrador' : 'Óptica' }}</span>
            </div>
            <div class="dropdown-arrow" [class.rotated]="showUserMenu">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          
          <!-- Dropdown Menu -->
          <div class="user-dropdown" [class.show]="showUserMenu">
            <div class="dropdown-divider"></div>
            <div class="dropdown-item logout" (click)="logout()">
              <i class="fas fa-sign-out-alt"></i>
              <span>Cerrar Sesión</span>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" *ngIf="currentUser">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.show]="showMobileMenu" *ngIf="currentUser">
        <div class="mobile-menu-content">
          <div class="mobile-menu-item" [class.active]="isActiveRoute('/dashboard')" (click)="goToDashboard(); closeMobileMenu()">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
          
          <div class="mobile-menu-item" [class.active]="isActiveRoute('/pacientes')" (click)="goToPacientes(); closeMobileMenu()" *ngIf="!isAdmin">
            <i class="fas fa-users"></i>
            <span>Pacientes</span>
          </div>
          
          <div class="mobile-menu-item" [class.active]="isActiveRoute('/opticas')" (click)="goToOpticas(); closeMobileMenu()" *ngIf="isAdmin">
            <i class="fas fa-building"></i>
            <span>Ópticas</span>
          </div>
          
          <div class="mobile-menu-item" [class.active]="isActiveRoute('/citas')" (click)="goToCitas(); closeMobileMenu()" *ngIf="!isAdmin">
            <i class="fas fa-calendar-alt"></i>
            <span>Citas</span>
          </div>
          
          <div class="mobile-menu-item" [class.active]="isActiveRoute('/firma')" (click)="goToFirma(); closeMobileMenu()" *ngIf="!isAdmin">
            <i class="fas fa-signature"></i>
            <span>Firma</span>
          </div>
          
          <div class="mobile-menu-item" [class.active]="isActiveRoute('/reportes')" (click)="goToReportes(); closeMobileMenu()">
            <i class="fas fa-chart-line"></i>
            <span>Reportes</span>
          </div>
          
          <div class="mobile-menu-divider"></div>
          
          <div class="mobile-menu-item" (click)="changePassword(); closeMobileMenu()">
            <i class="fas fa-key"></i>
            <span>Cambiar Contraseña</span>
          </div>
          
          <div class="mobile-menu-item logout" (click)="logout(); closeMobileMenu()">
            <i class="fas fa-sign-out-alt"></i>
            <span>Cerrar Sesión</span>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
     .modern-navbar {
       position: fixed;
       top: 0;
       left: 0;
       right: 0;
       z-index: 1000;
       background: linear-gradient(135deg, var(--primary-color) 0%, #0056b3 100%);
       backdrop-filter: blur(10px);
       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
       border-bottom: 1px solid rgba(255, 255, 255, 0.1);
     }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      height: 70px;
      margin: 0 auto;
    }

    /* Brand Styles */
    .navbar-brand {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .navbar-brand:hover {
      transform: scale(1.05);
    }

    .brand-icon {
      width: 45px;
      height: 45px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      backdrop-filter: blur(10px);
    }

    .brand-icon i {
      font-size: 1.5rem;
      color: white;
    }

    .optica-logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      width: 180px;
      margin-right: 16px;
      background: transparent;
      border-radius: 8px;
    }

    .optica-logo-image {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 4px;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 1.4rem;
      font-weight: 700;
      color: white;
      line-height: 1;
      letter-spacing: -0.5px;
    }

    .brand-subtitle {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* Desktop Menu */
    .desktop-menu {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
      position: relative;
    }

    .menu-item:hover {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      transform: translateY(-2px);
    }

    .menu-item.active {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .menu-item i {
      font-size: 1rem;
    }

    /* User Menu */
    .navbar-user {
      position: relative;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.1);
    }

    .user-info:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .user-avatar i {
      font-size: 2rem;
      color: white;
    }

    .user-details {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      font-weight: 600;
      color: white;
      font-size: 0.9rem;
    }

    .user-role {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .dropdown-arrow {
      transition: transform 0.3s ease;
    }

    .dropdown-arrow.rotated {
      transform: rotate(180deg);
    }

    .dropdown-arrow i {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.8rem;
    }

    /* Dropdown Menu */
    .user-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      padding: 8px 0;
      min-width: 200px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      z-index: 1001;
    }

    .user-dropdown.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

     .dropdown-item {
       display: flex;
       align-items: center;
       gap: 12px;
       padding: 12px 20px;
       cursor: pointer;
       transition: background-color 0.2s ease;
       color: var(--dark-color);
     }

     .dropdown-item:hover {
       background: var(--light-color);
     }

     .dropdown-item.logout {
       color: var(--error-color);
     }

     .dropdown-item.logout:hover {
       background: rgba(220, 53, 69, 0.1);
     }

     .dropdown-divider {
       height: 1px;
       background: var(--secondary-color);
       margin: 8px 0;
       opacity: 0.3;
     }

    /* Mobile Menu Toggle */
    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
    }

    .hamburger-line {
      width: 25px;
      height: 3px;
      background: white;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    /* Mobile Menu */
    .mobile-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .mobile-menu.show {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .mobile-menu-content {
      padding: 20px 0;
    }

     .mobile-menu-item {
       display: flex;
       align-items: center;
       gap: 15px;
       padding: 15px 2rem;
       cursor: pointer;
       transition: background-color 0.2s ease;
       color: var(--dark-color);
     }

     .mobile-menu-item:hover {
       background: var(--light-color);
     }

     .mobile-menu-item.active {
       background: rgba(0, 123, 255, 0.1);
       color: var(--primary-color);
       border-right: 4px solid var(--primary-color);
     }

     .mobile-menu-item.logout {
       color: var(--error-color);
     }

     .mobile-menu-item.logout:hover {
       background: rgba(220, 53, 69, 0.1);
     }

     .mobile-menu-divider {
       height: 1px;
       background: var(--secondary-color);
       margin: 15px 2rem;
       opacity: 0.3;
     }

    /* Responsive */
    @media (max-width: 768px) {
      .navbar-container {
        padding: 0 1rem;
        height: 60px;
      }

      .desktop-menu {
        display: none;
      }

      .mobile-menu-toggle {
        display: flex;
      }

      .brand-name {
        font-size: 1.2rem;
      }

      .brand-subtitle {
        display: none;
      }

      .user-details {
        display: none;
      }

      .user-info {
        padding: 8px;
      }
    }

    @media (max-width: 480px) {
      .navbar-container {
        padding: 0 0.75rem;
      }

      .brand-icon {
        width: 35px;
        height: 35px;
        margin-right: 8px;
      }

      .brand-icon i {
        font-size: 1.2rem;
      }

      .brand-name {
        font-size: 1.1rem;
      }
    }

    /* Body padding to account for fixed header */
    :host {
      display: block;
    }

    :host-context(body) {
      padding-top: 70px;
    }

    @media (max-width: 768px) {
      :host-context(body) {
        padding-top: 60px;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  currentUser: User | null = null;
  isAdmin = false;
  showUserMenu = false;
  showMobileMenu = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isAdmin = user?.rol === 'admin';
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const userMenu = document.querySelector('.navbar-user');
    
    if (userMenu && !userMenu.contains(target)) {
      this.closeUserMenu();
    }
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  goToPacientes(): void {
    this.router.navigate(['/pacientes']);
  }

  goToOpticas(): void {
    this.router.navigate(['/opticas']);
  }

  goToCitas(): void {
    this.router.navigate(['/citas']);
  }

  goToFirma(): void {
    this.router.navigate(['/firma']);
  }

  goToReportes(): void {
    this.router.navigate(['/reportes']);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  closeUserMenu(): void {
    this.showUserMenu = false;
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  closeMobileMenu(): void {
    this.showMobileMenu = false;
  }

  changePassword(): void {
    this.router.navigate(['/change-password']);
    this.closeUserMenu();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getOpticaLogoUrl(): string {
    
    if (!this.currentUser?.optica_logo) {
      return '';
    }
    
    // Si es una URL completa, devolverla tal como está
    if (this.currentUser.optica_logo.startsWith('http')) {
      return this.currentUser.optica_logo;
    }
    
    // Si es una ruta relativa, construir la URL completa
    const fullUrl = `${environment.apiUrl}/uploads/${this.currentUser.optica_logo}`;
    return fullUrl;
  }
}
