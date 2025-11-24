"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared/toast/toast.component */ 4767);
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared/header/header.component */ 6687);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 4796);









function AppComponent_app_header_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
  }
}
class AppComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = 'ÓpticaCast';
    const isAuthenticated$ = this.authService.isAuthenticated$;
    // Observable para detectar si estamos en la página de login
    const isLoginPage$ = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(event => event.url === '/login' || event.urlAfterRedirects === '/login'), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(this.router.url === '/login'));
    // Combinar ambos observables para determinar si mostrar el header
    // Solo mostrar header si está autenticado Y no está en login
    this.showHeader$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([isAuthenticated$, isLoginPage$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([authenticated, isLogin]) => {
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
    }));
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [[4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet")(3, "app-toast");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.showHeader$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent, _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 472);





const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_2__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.withInterceptors)([_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.authInterceptor])), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)()]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/admin.guard */ 9153);
/* harmony import */ var _guards_optica_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/optica.guard */ 1882);
/* harmony import */ var _guards_change_password_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/change-password.guard */ 8556);




const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_components_auth_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/auth/login/login.component */ 4860)).then(m => m.LoginComponent)
}, {
  path: 'change-password',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_components_auth_change-password_change-password_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/auth/change-password/change-password.component */ 1692)).then(m => m.ChangePasswordComponent),
  canActivate: [_guards_change_password_guard__WEBPACK_IMPORTED_MODULE_3__.changePasswordGuard]
}, {
  path: 'dashboard',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_dashboard_dashboard_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/dashboard/dashboard.component */ 4441)).then(m => m.DashboardComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard]
}, {
  path: 'opticas',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_admin_opticas_opticas_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/opticas/opticas.component */ 4845)).then(m => m.OpticasComponent),
  canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__.adminGuard]
}, {
  path: 'pacientes',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_pacientes_pacientes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/pacientes/pacientes.component */ 7977)).then(m => m.PacientesComponent),
  canActivate: [_guards_optica_guard__WEBPACK_IMPORTED_MODULE_2__.opticaGuard]
}, {
  path: 'historias-clinicas',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_historias-clinicas_historias-clinicas_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/historias-clinicas/historias-clinicas.component */ 2129)).then(m => m.HistoriasClinicasComponent),
  canActivate: [_guards_optica_guard__WEBPACK_IMPORTED_MODULE_2__.opticaGuard]
}, {
  path: 'historias',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_historias_historias_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/historias/historias.component */ 9869)).then(m => m.HistoriasComponent),
  canActivate: [_guards_optica_guard__WEBPACK_IMPORTED_MODULE_2__.opticaGuard]
}, {
  path: 'citas',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_citas_citas_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/citas/citas.component */ 9897)).then(m => m.CitasComponent),
  canActivate: [_guards_optica_guard__WEBPACK_IMPORTED_MODULE_2__.opticaGuard]
}, {
  path: 'firma',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_components_firma_firma_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/firma/firma.component */ 5105)).then(m => m.FirmaComponent),
  canActivate: [_guards_optica_guard__WEBPACK_IMPORTED_MODULE_2__.opticaGuard]
}, {
  path: 'admin',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_admin_admin_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin/admin.component */ 6273)).then(m => m.AdminComponent),
  canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__.adminGuard]
}, {
  path: 'reportes',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_reportes_reportes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/reportes/reportes.component */ 9895)).then(m => m.ReportesComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard]
}, {
  path: '**',
  redirectTo: '/login'
}];

/***/ }),

/***/ 6687:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);






function HeaderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.getOpticaLogoUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.optica_nombre) || "Logo de la \u00F3ptica");
  }
}
function HeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.goToPacientes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Pacientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/pacientes"));
  }
}
function HeaderComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.goToOpticas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D3pticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/opticas"));
  }
}
function HeaderComponent_div_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.goToCitas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Citas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/citas"));
  }
}
function HeaderComponent_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.goToFirma());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Firma");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/firma"));
  }
}
function HeaderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.goToDashboard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HeaderComponent_div_10_div_5_Template, 4, 2, "div", 19)(6, HeaderComponent_div_10_div_6_Template, 4, 2, "div", 19)(7, HeaderComponent_div_10_div_7_Template, 4, 2, "div", 19)(8, HeaderComponent_div_10_div_8_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.goToReportes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Reportes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/reportes"));
  }
}
function HeaderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleUserMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29)(5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_11_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Cerrar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.currentUser.nombre, " ", ctx_r0.currentUser.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.currentUser.rol === "admin" ? "Administrador" : "\u00D3ptica");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rotated", ctx_r0.showUserMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r0.showUserMenu);
  }
}
function HeaderComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 39)(2, "span", 39)(3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r0.goToPacientes();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Pacientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/pacientes"));
  }
}
function HeaderComponent_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r0.goToOpticas();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D3pticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/opticas"));
  }
}
function HeaderComponent_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r0.goToCitas();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Citas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/citas"));
  }
}
function HeaderComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r0.goToFirma();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Firma");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/firma"));
  }
}
function HeaderComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r0.goToDashboard();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_div_13_div_6_Template, 4, 2, "div", 43)(7, HeaderComponent_div_13_div_7_Template, 4, 2, "div", 43)(8, HeaderComponent_div_13_div_8_Template, 4, 2, "div", 43)(9, HeaderComponent_div_13_div_9_Template, 4, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r0.goToReportes();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Reportes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_div_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r0.changePassword();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cambiar Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_div_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r0.logout();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cerrar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r0.showMobileMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActiveRoute("/reportes"));
  }
}
class HeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.currentUser = null;
    this.isAdmin = false;
    this.showUserMenu = false;
    this.showMobileMenu = false;
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isAdmin = user?.rol === 'admin';
    });
  }
  onDocumentClick(event) {
    const target = event.target;
    const userMenu = document.querySelector('.navbar-user');
    if (userMenu && !userMenu.contains(target)) {
      this.closeUserMenu();
    }
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goToPacientes() {
    this.router.navigate(['/pacientes']);
  }
  goToOpticas() {
    this.router.navigate(['/opticas']);
  }
  goToCitas() {
    this.router.navigate(['/citas']);
  }
  goToFirma() {
    this.router.navigate(['/firma']);
  }
  goToReportes() {
    this.router.navigate(['/reportes']);
  }
  isActiveRoute(route) {
    return this.router.url === route;
  }
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
  closeUserMenu() {
    this.showUserMenu = false;
  }
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
  closeMobileMenu() {
    this.showMobileMenu = false;
  }
  changePassword() {
    this.router.navigate(['/change-password']);
    this.closeUserMenu();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  getOpticaLogoUrl() {
    if (!this.currentUser?.optica_logo) {
      return '';
    }
    // Si es una URL completa, devolverla tal como está
    if (this.currentUser.optica_logo.startsWith('http')) {
      return this.currentUser.optica_logo;
    }
    // Si es una ruta relativa, construir la URL completa
    const fullUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/uploads/${this.currentUser.optica_logo}`;
    return fullUrl;
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 7,
      consts: [[1, "modern-navbar"], [1, "navbar-container"], [1, "navbar-brand", 3, "click"], ["class", "optica-logo-container", 4, "ngIf"], ["class", "brand-icon", 4, "ngIf"], [1, "brand-text"], [1, "brand-name"], [1, "brand-subtitle"], ["class", "navbar-menu desktop-menu", 4, "ngIf"], ["class", "navbar-user", 4, "ngIf"], ["class", "mobile-menu-toggle", 3, "click", 4, "ngIf"], ["class", "mobile-menu", 3, "show", 4, "ngIf"], [1, "optica-logo-container"], [1, "optica-logo-image", 3, "src", "alt"], [1, "brand-icon"], [1, "fas", "fa-eye"], [1, "navbar-menu", "desktop-menu"], [1, "menu-item", 3, "click"], [1, "fas", "fa-tachometer-alt"], ["class", "menu-item", 3, "active", "click", 4, "ngIf"], [1, "fas", "fa-chart-line"], [1, "fas", "fa-users"], [1, "fas", "fa-building"], [1, "fas", "fa-calendar-alt"], [1, "fas", "fa-signature"], [1, "navbar-user"], [1, "user-info", 3, "click"], [1, "user-avatar"], [1, "fas", "fa-user-circle"], [1, "user-details"], [1, "user-name"], [1, "user-role"], [1, "dropdown-arrow"], [1, "fas", "fa-chevron-down"], [1, "user-dropdown"], [1, "dropdown-divider"], [1, "dropdown-item", "logout", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "mobile-menu-toggle", 3, "click"], [1, "hamburger-line"], [1, "mobile-menu"], [1, "mobile-menu-content"], [1, "mobile-menu-item", 3, "click"], ["class", "mobile-menu-item", 3, "active", "click", 4, "ngIf"], [1, "mobile-menu-divider"], [1, "fas", "fa-key"], [1, "mobile-menu-item", "logout", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_2_listener() {
            return ctx.goToDashboard();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_div_3_Template, 2, 2, "div", 3)(4, HeaderComponent_div_4_Template, 2, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Sistema Cl\u00EDnico");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 13, 8, "div", 8)(11, HeaderComponent_div_11_Template, 17, 7, "div", 9)(12, HeaderComponent_button_12_Template, 4, 0, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 23, 10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.optica_logo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.currentUser == null ? null : ctx.currentUser.optica_logo));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.optica_nombre) || "\u00D3pticaCast");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".modern-navbar[_ngcontent-%COMP%] {\n       position: fixed;\n       top: 0;\n       left: 0;\n       right: 0;\n       z-index: 1000;\n       background: linear-gradient(135deg, var(--primary-color) 0%, #0056b3 100%);\n       -webkit-backdrop-filter: blur(10px);\n               backdrop-filter: blur(10px);\n       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n       border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n     }\n\n    .navbar-container[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 0 2rem;\n      height: 70px;\n      margin: 0 auto;\n    }\n\n    \n\n    .navbar-brand[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      transition: transform 0.3s ease;\n    }\n\n    .navbar-brand[_ngcontent-%COMP%]:hover {\n      transform: scale(1.05);\n    }\n\n    .brand-icon[_ngcontent-%COMP%] {\n      width: 45px;\n      height: 45px;\n      background: rgba(255, 255, 255, 0.2);\n      border-radius: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-right: 12px;\n      -webkit-backdrop-filter: blur(10px);\n              backdrop-filter: blur(10px);\n    }\n\n    .brand-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 1.5rem;\n      color: white;\n    }\n\n    .optica-logo-container[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 80px;\n      width: 180px;\n      margin-right: 16px;\n      background: transparent;\n      border-radius: 8px;\n    }\n\n    .optica-logo-image[_ngcontent-%COMP%] {\n      max-width: 100%;\n      max-height: 100%;\n      width: auto;\n      height: auto;\n      object-fit: contain;\n      border-radius: 4px;\n    }\n\n    .brand-text[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .brand-name[_ngcontent-%COMP%] {\n      font-size: 1.4rem;\n      font-weight: 700;\n      color: white;\n      line-height: 1;\n      letter-spacing: -0.5px;\n    }\n\n    .brand-subtitle[_ngcontent-%COMP%] {\n      font-size: 0.75rem;\n      color: rgba(255, 255, 255, 0.8);\n      font-weight: 500;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n    }\n\n    \n\n    .desktop-menu[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .menu-item[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 12px 20px;\n      border-radius: 25px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      color: rgba(255, 255, 255, 0.9);\n      font-weight: 500;\n      position: relative;\n    }\n\n    .menu-item[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.15);\n      color: white;\n      transform: translateY(-2px);\n    }\n\n    .menu-item.active[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.2);\n      color: white;\n      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    }\n\n    .menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 1rem;\n    }\n\n    \n\n    .navbar-user[_ngcontent-%COMP%] {\n      position: relative;\n    }\n\n    .user-info[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 8px 16px;\n      border-radius: 25px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      background: rgba(255, 255, 255, 0.1);\n    }\n\n    .user-info[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.2);\n    }\n\n    .user-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 2rem;\n      color: white;\n    }\n\n    .user-details[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .user-name[_ngcontent-%COMP%] {\n      font-weight: 600;\n      color: white;\n      font-size: 0.9rem;\n    }\n\n    .user-role[_ngcontent-%COMP%] {\n      font-size: 0.75rem;\n      color: rgba(255, 255, 255, 0.7);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n\n    .dropdown-arrow[_ngcontent-%COMP%] {\n      transition: transform 0.3s ease;\n    }\n\n    .dropdown-arrow.rotated[_ngcontent-%COMP%] {\n      transform: rotate(180deg);\n    }\n\n    .dropdown-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      color: rgba(255, 255, 255, 0.8);\n      font-size: 0.8rem;\n    }\n\n    \n\n    .user-dropdown[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 100%;\n      right: 0;\n      background: white;\n      border-radius: 12px;\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n      padding: 8px 0;\n      min-width: 200px;\n      opacity: 0;\n      visibility: hidden;\n      transform: translateY(-10px);\n      transition: all 0.3s ease;\n      z-index: 1001;\n    }\n\n    .user-dropdown.show[_ngcontent-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n      transform: translateY(0);\n    }\n\n     .dropdown-item[_ngcontent-%COMP%] {\n       display: flex;\n       align-items: center;\n       gap: 12px;\n       padding: 12px 20px;\n       cursor: pointer;\n       transition: background-color 0.2s ease;\n       color: var(--dark-color);\n     }\n\n     .dropdown-item[_ngcontent-%COMP%]:hover {\n       background: var(--light-color);\n     }\n\n     .dropdown-item.logout[_ngcontent-%COMP%] {\n       color: var(--error-color);\n     }\n\n     .dropdown-item.logout[_ngcontent-%COMP%]:hover {\n       background: rgba(220, 53, 69, 0.1);\n     }\n\n     .dropdown-divider[_ngcontent-%COMP%] {\n       height: 1px;\n       background: var(--secondary-color);\n       margin: 8px 0;\n       opacity: 0.3;\n     }\n\n    \n\n    .mobile-menu-toggle[_ngcontent-%COMP%] {\n      display: none;\n      flex-direction: column;\n      gap: 4px;\n      background: none;\n      border: none;\n      cursor: pointer;\n      padding: 8px;\n    }\n\n    .hamburger-line[_ngcontent-%COMP%] {\n      width: 25px;\n      height: 3px;\n      background: white;\n      border-radius: 2px;\n      transition: all 0.3s ease;\n    }\n\n    \n\n    .mobile-menu[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 100%;\n      left: 0;\n      right: 0;\n      background: white;\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n      transform: translateY(-100%);\n      opacity: 0;\n      visibility: hidden;\n      transition: all 0.3s ease;\n    }\n\n    .mobile-menu.show[_ngcontent-%COMP%] {\n      transform: translateY(0);\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .mobile-menu-content[_ngcontent-%COMP%] {\n      padding: 20px 0;\n    }\n\n     .mobile-menu-item[_ngcontent-%COMP%] {\n       display: flex;\n       align-items: center;\n       gap: 15px;\n       padding: 15px 2rem;\n       cursor: pointer;\n       transition: background-color 0.2s ease;\n       color: var(--dark-color);\n     }\n\n     .mobile-menu-item[_ngcontent-%COMP%]:hover {\n       background: var(--light-color);\n     }\n\n     .mobile-menu-item.active[_ngcontent-%COMP%] {\n       background: rgba(0, 123, 255, 0.1);\n       color: var(--primary-color);\n       border-right: 4px solid var(--primary-color);\n     }\n\n     .mobile-menu-item.logout[_ngcontent-%COMP%] {\n       color: var(--error-color);\n     }\n\n     .mobile-menu-item.logout[_ngcontent-%COMP%]:hover {\n       background: rgba(220, 53, 69, 0.1);\n     }\n\n     .mobile-menu-divider[_ngcontent-%COMP%] {\n       height: 1px;\n       background: var(--secondary-color);\n       margin: 15px 2rem;\n       opacity: 0.3;\n     }\n\n    \n\n    @media (max-width: 768px) {\n      .navbar-container[_ngcontent-%COMP%] {\n        padding: 0 1rem;\n        height: 60px;\n      }\n\n      .desktop-menu[_ngcontent-%COMP%] {\n        display: none;\n      }\n\n      .mobile-menu-toggle[_ngcontent-%COMP%] {\n        display: flex;\n      }\n\n      .brand-name[_ngcontent-%COMP%] {\n        font-size: 1.2rem;\n      }\n\n      .brand-subtitle[_ngcontent-%COMP%] {\n        display: none;\n      }\n\n      .user-details[_ngcontent-%COMP%] {\n        display: none;\n      }\n\n      .user-info[_ngcontent-%COMP%] {\n        padding: 8px;\n      }\n    }\n\n    @media (max-width: 480px) {\n      .navbar-container[_ngcontent-%COMP%] {\n        padding: 0 0.75rem;\n      }\n\n      .brand-icon[_ngcontent-%COMP%] {\n        width: 35px;\n        height: 35px;\n        margin-right: 8px;\n      }\n\n      .brand-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 1.2rem;\n      }\n\n      .brand-name[_ngcontent-%COMP%] {\n        font-size: 1.1rem;\n      }\n    }\n\n    \n\n    [_nghost-%COMP%] {\n      display: block;\n    }\n\n    body[_nghost-%COMP%], body   [_nghost-%COMP%] {\n      padding-top: 70px;\n    }\n\n    @media (max-width: 768px) {\n      body[_nghost-%COMP%], body   [_nghost-%COMP%] {\n        padding-top: 60px;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtLQUNLO09BQ0UsZUFBZTtPQUNmLE1BQU07T0FDTixPQUFPO09BQ1AsUUFBUTtPQUNSLGFBQWE7T0FDYiwwRUFBMEU7T0FDMUUsbUNBQTJCO2VBQTNCLDJCQUEyQjtPQUMzQix5Q0FBeUM7T0FDekMsaURBQWlEO0tBQ25EOztJQUVEO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsZUFBZTtNQUNmLFlBQVk7TUFDWixjQUFjO0lBQ2hCOztJQUVBLGlCQUFpQjtJQUNqQjtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osb0NBQW9DO01BQ3BDLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsbUNBQTJCO2NBQTNCLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix1QkFBdUI7TUFDdkIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osY0FBYztNQUNkLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQiwrQkFBK0I7TUFDL0IsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixtQkFBbUI7SUFDckI7O0lBRUEsaUJBQWlCO0lBQ2pCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO0lBQ1Y7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsK0JBQStCO01BQy9CLGdCQUFnQjtNQUNoQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxxQ0FBcUM7TUFDckMsWUFBWTtNQUNaLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLG9DQUFvQztNQUNwQyxZQUFZO01BQ1oseUNBQXlDO0lBQzNDOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQSxjQUFjO0lBQ2Q7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsb0NBQW9DO0lBQ3RDOztJQUVBO01BQ0Usb0NBQW9DO0lBQ3RDOztJQUVBO01BQ0UsZUFBZTtNQUNmLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQiwrQkFBK0I7TUFDL0IseUJBQXlCO01BQ3pCLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLCtCQUErQjtNQUMvQixpQkFBaUI7SUFDbkI7O0lBRUEsa0JBQWtCO0lBQ2xCO01BQ0Usa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1IsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLDRCQUE0QjtNQUM1Qix5QkFBeUI7TUFDekIsYUFBYTtJQUNmOztJQUVBO01BQ0UsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQix3QkFBd0I7SUFDMUI7O0tBRUM7T0FDRSxhQUFhO09BQ2IsbUJBQW1CO09BQ25CLFNBQVM7T0FDVCxrQkFBa0I7T0FDbEIsZUFBZTtPQUNmLHNDQUFzQztPQUN0Qyx3QkFBd0I7S0FDMUI7O0tBRUE7T0FDRSw4QkFBOEI7S0FDaEM7O0tBRUE7T0FDRSx5QkFBeUI7S0FDM0I7O0tBRUE7T0FDRSxrQ0FBa0M7S0FDcEM7O0tBRUE7T0FDRSxXQUFXO09BQ1gsa0NBQWtDO09BQ2xDLGFBQWE7T0FDYixZQUFZO0tBQ2Q7O0lBRUQsdUJBQXVCO0lBQ3ZCO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixRQUFRO01BQ1IsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixlQUFlO01BQ2YsWUFBWTtJQUNkOztJQUVBO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLHlCQUF5QjtJQUMzQjs7SUFFQSxnQkFBZ0I7SUFDaEI7TUFDRSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULE9BQU87TUFDUCxRQUFRO01BQ1IsaUJBQWlCO01BQ2pCLDJDQUEyQztNQUMzQyw0QkFBNEI7TUFDNUIsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSx3QkFBd0I7TUFDeEIsVUFBVTtNQUNWLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0tBRUM7T0FDRSxhQUFhO09BQ2IsbUJBQW1CO09BQ25CLFNBQVM7T0FDVCxrQkFBa0I7T0FDbEIsZUFBZTtPQUNmLHNDQUFzQztPQUN0Qyx3QkFBd0I7S0FDMUI7O0tBRUE7T0FDRSw4QkFBOEI7S0FDaEM7O0tBRUE7T0FDRSxrQ0FBa0M7T0FDbEMsMkJBQTJCO09BQzNCLDRDQUE0QztLQUM5Qzs7S0FFQTtPQUNFLHlCQUF5QjtLQUMzQjs7S0FFQTtPQUNFLGtDQUFrQztLQUNwQzs7S0FFQTtPQUNFLFdBQVc7T0FDWCxrQ0FBa0M7T0FDbEMsaUJBQWlCO09BQ2pCLFlBQVk7S0FDZDs7SUFFRCxlQUFlO0lBQ2Y7TUFDRTtRQUNFLGVBQWU7UUFDZixZQUFZO01BQ2Q7O01BRUE7UUFDRSxhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO01BQ2Y7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO01BQ2Y7O01BRUE7UUFDRSxZQUFZO01BQ2Q7SUFDRjs7SUFFQTtNQUNFO1FBQ0Usa0JBQWtCO01BQ3BCOztNQUVBO1FBQ0UsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkI7SUFDRjs7SUFFQSw2Q0FBNkM7SUFDN0M7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0U7UUFDRSxpQkFBaUI7TUFDbkI7SUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAubW9kZXJuLW5hdmJhciB7XG4gICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgIHRvcDogMDtcbiAgICAgICBsZWZ0OiAwO1xuICAgICAgIHJpZ2h0OiAwO1xuICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCUsICMwMDU2YjMgMTAwJSk7XG4gICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgIH1cblxuICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLyogQnJhbmQgU3R5bGVzICovXG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cblxuICAgIC5icmFuZC1pY29uIHtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgfVxuXG4gICAgLmJyYW5kLWljb24gaSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAub3B0aWNhLWxvZ28tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG5cbiAgICAub3B0aWNhLWxvZ28taW1hZ2Uge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuYnJhbmQtdGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuYnJhbmQtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgfVxuXG4gICAgLmJyYW5kLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgLyogRGVza3RvcCBNZW51ICovXG4gICAgLmRlc2t0b3AtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0uYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0gaSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLyogVXNlciBNZW51ICovXG4gICAgLm5hdmJhci11c2VyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAudXNlci1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB9XG5cbiAgICAudXNlci1pbmZvOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB9XG5cbiAgICAudXNlci1hdmF0YXIgaSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAudXNlci1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG5cbiAgICAudXNlci1yb2xlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1hcnJvdyB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1hcnJvdy5yb3RhdGVkIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWFycm93IGkge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIC8qIERyb3Bkb3duIE1lbnUgKi9cbiAgICAudXNlci1kcm9wZG93biB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICB6LWluZGV4OiAxMDAxO1xuICAgIH1cblxuICAgIC51c2VyLWRyb3Bkb3duLnNob3cge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG4gICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgZ2FwOiAxMnB4O1xuICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgICB9XG5cbiAgICAgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICAgfVxuXG4gICAgIC5kcm9wZG93bi1pdGVtLmxvZ291dCB7XG4gICAgICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICAgfVxuXG4gICAgIC5kcm9wZG93bi1pdGVtLmxvZ291dDpob3ZlciB7XG4gICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcbiAgICAgfVxuXG4gICAgIC5kcm9wZG93bi1kaXZpZGVyIHtcbiAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgb3BhY2l0eTogMC4zO1xuICAgICB9XG5cbiAgICAvKiBNb2JpbGUgTWVudSBUb2dnbGUgKi9cbiAgICAubW9iaWxlLW1lbnUtdG9nZ2xlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cblxuICAgIC5oYW1idXJnZXItbGluZSB7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgIC8qIE1vYmlsZSBNZW51ICovXG4gICAgLm1vYmlsZS1tZW51IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAubW9iaWxlLW1lbnUuc2hvdyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAubW9iaWxlLW1lbnUtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgIC5tb2JpbGUtbWVudS1pdGVtIHtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgZ2FwOiAxNXB4O1xuICAgICAgIHBhZGRpbmc6IDE1cHggMnJlbTtcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgICB9XG5cbiAgICAgLm1vYmlsZS1tZW51LWl0ZW06aG92ZXIge1xuICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICAgfVxuXG4gICAgIC5tb2JpbGUtbWVudS1pdGVtLmFjdGl2ZSB7XG4gICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgIH1cblxuICAgICAubW9iaWxlLW1lbnUtaXRlbS5sb2dvdXQge1xuICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XG4gICAgIH1cblxuICAgICAubW9iaWxlLW1lbnUtaXRlbS5sb2dvdXQ6aG92ZXIge1xuICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XG4gICAgIH1cblxuICAgICAubW9iaWxlLW1lbnUtZGl2aWRlciB7XG4gICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICBtYXJnaW46IDE1cHggMnJlbTtcbiAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgIH1cblxuICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXNrdG9wLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubW9iaWxlLW1lbnUtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmJyYW5kLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cblxuICAgICAgLmJyYW5kLXN1YnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnVzZXItZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAubmF2YmFyLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcbiAgICAgIH1cblxuICAgICAgLmJyYW5kLWljb24ge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgLmJyYW5kLWljb24gaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuXG4gICAgICAuYnJhbmQtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEJvZHkgcGFkZGluZyB0byBhY2NvdW50IGZvciBmaXhlZCBoZWFkZXIgKi9cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICA6aG9zdC1jb250ZXh0KGJvZHkpIHtcbiAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgOmhvc3QtY29udGV4dChib2R5KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4767:
/*!************************************************************!*\
  !*** ./src/app/components/shared/toast/toast.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastComponent: () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/toast.service */ 8397);





function ToastComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastComponent_div_1_Template_button_click_8_listener() {
      const toast_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeToast(toast_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.getToastClasses(toast_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.getToastIcon(toast_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getToastTitle(toast_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r2.timestamp ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 7, toast_r2.timestamp, "HH:mm") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", toast_r2.message, " ");
  }
}
class ToastComponent {
  constructor(toastService) {
    this.toastService = toastService;
    this.toasts = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    this.subscription = this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  removeToast(id) {
    this.toastService.removeToast(id);
  }
  getToastClasses(type) {
    return `toast-${type}`;
  }
  getToastIcon(type) {
    switch (type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      case 'error':
        return 'fas fa-times-circle';
      case 'info':
        return 'fas fa-info-circle';
      default:
        return 'fas fa-bell';
    }
  }
  getToastTitle(type) {
    switch (type) {
      case 'success':
        return 'Éxito';
      case 'warning':
        return 'Advertencia';
      case 'error':
        return 'Error';
      case 'info':
        return 'Información';
      default:
        return 'Notificación';
    }
  }
  static {
    this.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["app-toast"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3", 2, "z-index", "1055"], ["class", "toast show", "role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "toast", "show"], [1, "toast-header"], [1, "me-2"], [1, "me-auto"], ["type", "button", 1, "btn-close", 3, "click"], [1, "toast-body"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastComponent_div_1_Template, 11, 10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toasts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".toast-container[_ngcontent-%COMP%] {\n      max-width: 400px;\n    }\n    \n    .toast[_ngcontent-%COMP%] {\n      margin-bottom: 0.5rem;\n      border: none;\n      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n    }\n    \n    .toast-success[_ngcontent-%COMP%] {\n      background-color: var(--success-color);\n      color: white;\n    }\n    \n    .toast-warning[_ngcontent-%COMP%] {\n      background-color: var(--warning-color);\n      color: white;\n    }\n    \n    .toast-error[_ngcontent-%COMP%] {\n      background-color: var(--error-color);\n      color: white;\n    }\n    \n    .toast-info[_ngcontent-%COMP%] {\n      background-color: var(--info-color);\n      color: white;\n    }\n    \n    .toast-header[_ngcontent-%COMP%] {\n      background-color: rgba(255, 255, 255, 0.1);\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n      color: white;\n    }\n    \n    .toast-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n      filter: invert(1);\n    }\n    \n    .toast-body[_ngcontent-%COMP%] {\n      padding: 0.75rem 1rem;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osNkNBQTZDO0lBQy9DOztJQUVBO01BQ0Usc0NBQXNDO01BQ3RDLFlBQVk7SUFDZDs7SUFFQTtNQUNFLHNDQUFzQztNQUN0QyxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxvQ0FBb0M7TUFDcEMsWUFBWTtJQUNkOztJQUVBO01BQ0UsbUNBQW1DO01BQ25DLFlBQVk7SUFDZDs7SUFFQTtNQUNFLDBDQUEwQztNQUMxQyxpREFBaUQ7TUFDakQsWUFBWTtJQUNkOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRvYXN0LWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgICBcbiAgICAudG9hc3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cbiAgICBcbiAgICAudG9hc3Qtc3VjY2VzcyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLnRvYXN0LXdhcm5pbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZy1jb2xvcik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC50b2FzdC1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC50b2FzdC1pbmZvIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8tY29sb3IpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAudG9hc3QtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC50b2FzdC1oZWFkZXIgLmJ0bi1jbG9zZSB7XG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB9XG4gICAgXG4gICAgLnRvYXN0LWJvZHkge1xuICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9153:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminGuard: () => (/* binding */ adminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);



const adminGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isAuthenticated() && authService.isAdmin()) {
    return true;
  }
  router.navigate(['/dashboard']);
  return false;
};

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);



const authGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isAuthenticated()) {
    // Solo usuarios de óptica (rol = 'optica') deben cambiar contraseña en primer acceso
    // El administrador (rol = 'admin') puede acceder directamente
    if (authService.isPrimerAcceso()) {
      router.navigate(['/change-password']);
      return false;
    }
    return true;
  }
  router.navigate(['/login']);
  return false;
};

/***/ }),

/***/ 8556:
/*!*************************************************!*\
  !*** ./src/app/guards/change-password.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePasswordGuard: () => (/* binding */ changePasswordGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);



const changePasswordGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isAuthenticated()) {
    // Solo permitir acceso si es primer acceso
    if (authService.isPrimerAcceso()) {
      return true;
    } else {
      // Si no es primer acceso, redirigir al dashboard
      router.navigate(['/dashboard']);
      return false;
    }
  }
  // Si no está autenticado, redirigir al login
  router.navigate(['/login']);
  return false;
};

/***/ }),

/***/ 1882:
/*!****************************************!*\
  !*** ./src/app/guards/optica.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   opticaGuard: () => (/* binding */ opticaGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);



const opticaGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isAuthenticated()) {
    // Solo usuarios de óptica (rol = 'usuario') pueden acceder
    if (!authService.isAdmin()) {
      return true;
    } else {
      // Si es administrador, redirigir al dashboard
      router.navigate(['/dashboard']);
      return false;
    }
  }
  // Si no está autenticado, redirigir al login
  router.navigate(['/login']);
  return false;
};

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);



const authInterceptor = (req, next) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  // Obtener el token del localStorage
  const token = localStorage.getItem('token');
  if (token) {
    // Clonar la request y agregar el header Authorization
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      // Si el error es 401 (Unauthorized), el token está vencido
      if (error.status === 401) {
        authService.handleTokenExpired();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  return next(req);
};

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);





class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isAuthenticated$ = this.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(user => this.isAuthenticated()));
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.loadUserFromStorage();
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this.setCurrentUser(response.data.user, response.data.token);
    }));
  }
  changePassword(request) {
    return this.http.post(`${this.apiUrl}/auth/change-password`, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      // Actualizar el estado del usuario para marcar que ya no es primer acceso
      const currentUser = this.getCurrentUser();
      if (currentUser) {
        currentUser.primer_acceso = false;
        this.setCurrentUser(currentUser, this.getToken() || '');
      }
    }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
  handleTokenExpired() {
    console.warn('Token expirado, redirigiendo al login...');
    this.logout();
    this.router.navigate(['/login']);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated() {
    const token = this.getToken();
    const user = this.getCurrentUser();
    return !!token && !!user && !!user.id && user.id > 0 && !!user.username && !!user.rol;
  }
  isAdmin() {
    const user = this.getCurrentUser();
    return user?.rol === 'admin' && !!user.id && user.id > 0 && !!user.username;
  }
  isPrimerAcceso() {
    const user = this.getCurrentUser();
    // Solo usuarios de óptica (rol = 'usuario') pueden tener primer acceso obligatorio
    // El administrador (rol = 'admin') nunca debe tener cambio de contraseña obligatorio
    if (user?.rol === 'admin') {
      return false;
    }
    // Para usuarios de óptica, verificar si es primer acceso
    // Manejar diferentes tipos de datos que pueden venir del backend
    const isFirstAccess = user?.primer_acceso === true || user?.primer_acceso === '1' || user?.primer_acceso === 1;
    return user?.rol === 'usuario' && isFirstAccess;
  }
  setCurrentUser(user, token) {
    // Asegurar que el usuario tenga todas las propiedades necesarias
    const userWithDefaults = {
      id: user.id || 0,
      username: user.username || '',
      nombre: user.nombre || '',
      apellidos: user.apellidos || '',
      rol: user.rol || 'usuario',
      optica_id: user.optica_id || undefined,
      // El administrador nunca debe tener primer acceso obligatorio
      // Para ópticas, respetar el valor del backend (manejar diferentes tipos)
      primer_acceso: user.rol === 'admin' ? false : user.primer_acceso === true || user.primer_acceso === '1' || user.primer_acceso === 1,
      optica_nombre: user.optica_nombre || '',
      optica_logo: user.optica_logo || undefined,
      user_nombre: user.user_nombre || undefined,
      user_apellidos: user.user_apellidos || undefined,
      firma: user.optica_firma || user.firma || undefined // Firma de la óptica
    };
    // Solo establecer si tenemos datos válidos
    if (userWithDefaults.id > 0 && userWithDefaults.username && userWithDefaults.rol) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userWithDefaults));
      this.currentUserSubject.next(userWithDefaults);
    } else {
      console.error('Invalid user data:', userWithDefaults);
      this.logout();
    }
  }
  updateCurrentUser(updatedUser) {
    const token = this.getToken();
    if (token && updatedUser) {
      this.setCurrentUser(updatedUser, token);
    }
  }
  loadUserFromStorage() {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (userStr && token) {
      try {
        const user = JSON.parse(userStr);
        // Verificar que el usuario tenga las propiedades mínimas necesarias
        if (user && user.id && user.id > 0 && user.username && user.rol) {
          this.currentUserSubject.next(user);
        } else {
          console.warn('Invalid user data in storage, clearing...');
          this.logout();
        }
      } catch (e) {
        console.error('Error parsing user from storage:', e);
        this.logout();
      }
    } else {
      this.currentUserSubject.next(null);
    }
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8397:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ToastService {
  constructor() {
    this.toastsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.toasts$ = this.toastsSubject.asObservable();
    this.nextId = 1;
  }
  showSuccess(message, duration = 5000) {
    this.showToast(message, 'success', duration);
  }
  showWarning(message, duration = 5000) {
    this.showToast(message, 'warning', duration);
  }
  showError(message, duration = 7000) {
    this.showToast(message, 'error', duration);
  }
  showInfo(message, duration = 5000) {
    this.showToast(message, 'info', duration);
  }
  showToast(message, type, duration = 5000) {
    const toast = {
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
  removeToast(id) {
    const currentToasts = this.toastsSubject.value;
    const filteredToasts = currentToasts.filter(toast => toast.id !== id);
    this.toastsSubject.next(filteredToasts);
  }
  clearAll() {
    this.toastsSubject.next([]);
  }
  static {
    this.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  apiUrl: 'https://optohistorias.com/backend/api',
  citas: {
    horaInicio: 6,
    horaFin: 20 // 8:00 PM (20:00)
  }
};
/*
export const environment = {
  production: false,
  apiUrl: 'http://localhost/opticast/backend/api',
  citas: {
    horaInicio: 6, // 6:00 AM
    horaFin: 20    // 8:00 PM (20:00)
  }
};
*/

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map