"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_reportes_reportes_component_ts"],{

/***/ 9895:
/*!***********************************************************!*\
  !*** ./src/app/components/reportes/reportes.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportesComponent: () => (/* binding */ ReportesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_reportes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/reportes.service */ 3136);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ 7945);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast.service */ 8397);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 4796);









function ReportesComponent_div_11_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optica_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", optica_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", optica_r1.nombre, " ");
  }
}
function ReportesComponent_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Debe seleccionar una \u00F3ptica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReportesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00D3ptica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 27)(6, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Seleccionar \u00F3ptica...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ReportesComponent_div_11_option_8_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReportesComponent_div_11_div_9_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_1_0 = ctx_r1.reporteForm.get("optica_id")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r1.reporteForm.get("optica_id")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.opticas);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.reporteForm.get("optica_id")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.reporteForm.get("optica_id")) == null ? null : tmp_3_0.touched));
  }
}
function ReportesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fecha inicial es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReportesComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fecha final es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReportesComponent_div_26_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" para la \u00F3ptica: ", ctx_r1.getOpticaNombre(), " ");
  }
}
function ReportesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 18)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Rango seleccionado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReportesComponent_div_26_span_9_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Desde ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 3, (tmp_1_0 = ctx_r1.reporteForm.get("fecha_inicial")) == null ? null : tmp_1_0.value, "dd/MM/yyyy"), " hasta ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 6, (tmp_1_0 = ctx_r1.reporteForm.get("fecha_final")) == null ? null : tmp_1_0.value, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin && ((tmp_2_0 = ctx_r1.reporteForm.get("optica_id")) == null ? null : tmp_2_0.value));
  }
}
function ReportesComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 35);
  }
}
function ReportesComponent_i_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 36);
  }
}
class ReportesComponent {
  constructor(fb, reportesService, adminService, toastService, authService) {
    this.fb = fb;
    this.reportesService = reportesService;
    this.adminService = adminService;
    this.toastService = toastService;
    this.authService = authService;
    this.opticas = [];
    this.isAdmin = false;
    this.loading = false;
    this.reporteForm = this.fb.group({
      optica_id: [''],
      fecha_inicial: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      fecha_final: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    if (this.isAdmin) {
      this.reporteForm.get('optica_id')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cargarOpticas();
    } else {
      // Para usuarios de óptica, establecer su óptica automáticamente
      const currentUser = this.authService.getCurrentUser();
      if (currentUser?.optica_id) {
        this.reporteForm.patchValue({
          optica_id: currentUser.optica_id
        });
      }
    }
    // Validación de fechas
    this.reporteForm.get('fecha_final')?.valueChanges.subscribe(() => {
      this.validarFechas();
    });
    this.reporteForm.get('fecha_inicial')?.valueChanges.subscribe(() => {
      this.validarFechas();
    });
  }
  cargarOpticas() {
    this.adminService.getOpticas().subscribe({
      next: response => {
        if (response.success && response.data) {
          this.opticas = response.data.filter(optica => optica.activo);
        }
      },
      error: error => {
        console.error('Error cargando ópticas:', error);
      }
    });
  }
  validarFechas() {
    const fechaInicial = this.reporteForm.get('fecha_inicial')?.value;
    const fechaFinal = this.reporteForm.get('fecha_final')?.value;
    if (fechaInicial && fechaFinal) {
      if (new Date(fechaInicial) > new Date(fechaFinal)) {
        this.reporteForm.get('fecha_final')?.setErrors({
          fechaInvalida: true
        });
      } else {
        this.reporteForm.get('fecha_final')?.setErrors(null);
      }
    }
  }
  generarReporte() {
    if (this.reporteForm.valid) {
      this.loading = true;
      const formData = this.reporteForm.value;
      this.reportesService.generarReporteExcel(formData).subscribe({
        next: response => {
          this.loading = false;
          this.toastService.showSuccess('Reporte generado exitosamente');
          // Determinar tipo de archivo basado en el Content-Type de la respuesta
          const contentType = response.headers?.get('content-type') || '';
          const isExcel = contentType.includes('spreadsheetml');
          // Crear enlace de descarga
          const blob = new Blob([response.body], {
            type: isExcel ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'text/csv;charset=utf-8'
          });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          // Nombre del archivo con fecha
          const fechaInicial = formData.fecha_inicial;
          const fechaFinal = formData.fecha_final;
          const nombreOptica = this.isAdmin ? this.getOpticaNombre() : 'Mi-Optica';
          const extension = isExcel ? 'xlsx' : 'csv';
          link.download = `Reporte_Historias_Clinicas_${nombreOptica}_${fechaInicial}_a_${fechaFinal}.${extension}`;
          // Descargar archivo
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        },
        error: error => {
          this.loading = false;
          this.toastService.showError('Error al generar el reporte');
          console.error('Error generando reporte:', error);
        }
      });
    } else {
      this.toastService.showError('Por favor complete todos los campos requeridos');
    }
  }
  getOpticaNombre() {
    const opticaId = this.reporteForm.get('optica_id')?.value;
    const optica = this.opticas.find(o => o.id === opticaId);
    return optica ? optica.nombre : '';
  }
  limpiarFormulario() {
    this.reporteForm.reset();
    if (!this.isAdmin) {
      const currentUser = this.authService.getCurrentUser();
      if (currentUser?.optica_id) {
        this.reporteForm.patchValue({
          optica_id: currentUser.optica_id
        });
      }
    }
  }
  establecerRangoUltimos30Dias() {
    const fechaFinal = new Date();
    const fechaInicial = new Date();
    fechaInicial.setDate(fechaFinal.getDate() - 30);
    this.reporteForm.patchValue({
      fecha_inicial: fechaInicial.toISOString().split('T')[0],
      fecha_final: fechaFinal.toISOString().split('T')[0]
    });
  }
  static {
    this.ɵfac = function ReportesComponent_Factory(t) {
      return new (t || ReportesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_reportes_service__WEBPACK_IMPORTED_MODULE_0__.ReportesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ReportesComponent,
      selectors: [["app-reportes"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 21,
      consts: [[1, "container", "mt-4"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card", "shadow-sm"], [1, "card-header", "bg-primary", "text-white"], [1, "mb-0"], [1, "fas", "fa-filter", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], ["class", "col-md-6 mb-3", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "date", "formControlName", "fecha_inicial", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "formControlName", "fecha_final", 1, "form-control"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-file-excel me-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-eraser", "me-2"], ["type", "button", 1, "btn", "btn-outline-info", 3, "click"], [1, "fas", "fa-calendar-week", "me-2"], ["formControlName", "optica_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "invalid-feedback"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle", "me-2"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-file-excel", "me-2"]],
      template: function ReportesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Reportes de Historias Cl\u00EDnicas ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ReportesComponent_Template_form_ngSubmit_9_listener() {
            return ctx.generarReporte();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ReportesComponent_div_11_Template, 10, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Fecha Inicial ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ReportesComponent_div_18_Template, 2, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Fecha Final ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ReportesComponent_div_25_Template, 2, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ReportesComponent_div_26_Template, 10, 9, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9)(28, "div", 18)(29, "div", 19)(30, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ReportesComponent_span_31_Template, 1, 0, "span", 21)(32, ReportesComponent_i_32_Template, 1, 0, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportesComponent_Template_button_click_34_listener() {
            return ctx.limpiarFormulario();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Limpiar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportesComponent_Template_button_click_37_listener() {
            return ctx.establecerRangoUltimos30Dias();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " \u00DAltimos 30 d\u00EDas ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_5_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.reporteForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("col-md-6", !ctx.isAdmin)("col-md-3", ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx.reporteForm.get("fecha_inicial")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.reporteForm.get("fecha_inicial")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.reporteForm.get("fecha_inicial")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.reporteForm.get("fecha_inicial")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("col-md-6", !ctx.isAdmin)("col-md-3", ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx.reporteForm.get("fecha_final")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.reporteForm.get("fecha_final")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.reporteForm.get("fecha_final")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.reporteForm.get("fecha_final")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.reporteForm.get("fecha_inicial")) == null ? null : tmp_10_0.value) && ((tmp_10_0 = ctx.reporteForm.get("fecha_final")) == null ? null : tmp_10_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.reporteForm.invalid || ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Generando..." : "Generar Reporte", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
      styles: [".report-icon[_ngcontent-%COMP%] {\n      opacity: 0.7;\n    }\n\n    .card[_ngcontent-%COMP%] {\n      border: none;\n      box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n      border-radius: 10px;\n    }\n\n    .card-header[_ngcontent-%COMP%] {\n      border-radius: 10px 10px 0 0 !important;\n    }\n\n    .form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n      border-radius: 8px;\n      border: 2px solid #e9ecef;\n      transition: all 0.3s ease;\n    }\n\n    .form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n      border-color: var(--primary-color);\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n    }\n\n    .btn[_ngcontent-%COMP%] {\n      border-radius: 8px;\n      padding: 10px 20px;\n      font-weight: 500;\n      transition: all 0.3s ease;\n    }\n\n    .btn[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 4px 8px rgba(0,0,0,0.15);\n    }\n\n    .alert[_ngcontent-%COMP%] {\n      border-radius: 8px;\n      border: none;\n    }\n\n    .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      padding: 5px 0;\n      font-size: 0.95rem;\n    }\n\n    .spinner-border-sm[_ngcontent-%COMP%] {\n      width: 1rem;\n      height: 1rem;\n    }\n\n    @media (max-width: 768px) {\n      .d-flex.gap-2[_ngcontent-%COMP%] {\n        flex-direction: column;\n      }\n      \n      .btn[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXBvcnRlcy9yZXBvcnRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsWUFBWTtNQUNaLHNDQUFzQztNQUN0QyxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSx1Q0FBdUM7SUFDekM7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLGtDQUFrQztNQUNsQyxnREFBZ0Q7SUFDbEQ7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSwyQkFBMkI7TUFDM0Isc0NBQXNDO0lBQ3hDOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGNBQWM7TUFDZCxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkOztJQUVBO01BQ0U7UUFDRSxzQkFBc0I7TUFDeEI7O01BRUE7UUFDRSxtQkFBbUI7TUFDckI7SUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5yZXBvcnQtaWNvbiB7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCwgLmZvcm0tc2VsZWN0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgLmJ0bjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICB9XG5cbiAgICAuYWxlcnQge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5saXN0LXVuc3R5bGVkIGxpIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIH1cblxuICAgIC5zcGlubmVyLWJvcmRlci1zbSB7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5kLWZsZXguZ2FwLTIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYnRuIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3136:
/*!**********************************************!*\
  !*** ./src/app/services/reportes.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportesService: () => (/* binding */ ReportesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class ReportesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  generarReporteExcel(request) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('fecha_inicial', request.fecha_inicial).set('fecha_final', request.fecha_final);
    if (request.optica_id) {
      params = params.set('optica_id', request.optica_id.toString());
    }
    return this.http.get(`${this.apiUrl}/reportes/historias-clinicas/excel`, {
      params: params,
      responseType: 'blob',
      observe: 'response'
    });
  }
  obtenerEstadisticasReporte(request) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('fecha_inicial', request.fecha_inicial).set('fecha_final', request.fecha_final);
    if (request.optica_id) {
      params = params.set('optica_id', request.optica_id.toString());
    }
    return this.http.get(`${this.apiUrl}/reportes/historias-clinicas/estadisticas`, {
      params: params
    });
  }
  static {
    this.ɵfac = function ReportesService_Factory(t) {
      return new (t || ReportesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ReportesService,
      factory: ReportesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_reportes_reportes_component_ts.js.map