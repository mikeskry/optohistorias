"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_admin_admin_component_ts"],{

/***/ 6273:
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 7945);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast.service */ 8397);







function AdminComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_tr_36_Template_button_click_13_listener() {
      const optica_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.editOptica(optica_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_tr_36_Template_button_click_15_listener() {
      const optica_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.resetUserPassword(optica_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_tr_36_Template_button_click_17_listener() {
      const optica_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteOptica(optica_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const optica_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](optica_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](optica_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](optica_r2.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](optica_r2.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](optica_r2.activo ? "bg-success" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", optica_r2.activo ? "Activa" : "Inactiva", " ");
  }
}
function AdminComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No hay \u00F3pticas registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nombre es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email v\u00E1lido es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AdminComponent {
  constructor(fb, adminService, toastService) {
    this.fb = fb;
    this.adminService = adminService;
    this.toastService = toastService;
    this.opticas = [];
    this.isEditing = false;
    this.editingOpticaId = null;
    this.opticaForm = this.fb.group({
      nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      telefono: [''],
      direccion: [''],
      activo: [true]
    });
  }
  ngOnInit() {
    this.loadOpticas();
  }
  loadOpticas() {
    this.adminService.getOpticas().subscribe({
      next: response => {
        // El backend devuelve {success: true, data: [...], message: '...'}
        if (response.success && response.data) {
          this.opticas = response.data;
        } else {
          this.opticas = [];
          console.warn('Respuesta inesperada del backend:', response);
        }
      },
      error: error => {
        this.toastService.showError('Error al cargar ópticas');
        console.error('Error loading opticas:', error);
        this.opticas = [];
      }
    });
  }
  showCreateOpticaForm() {
    this.isEditing = false;
    this.editingOpticaId = null;
    this.opticaForm.reset({
      activo: true
    });
    this.showModal();
  }
  editOptica(optica) {
    this.isEditing = true;
    this.editingOpticaId = optica.id;
    this.opticaForm.patchValue({
      nombre: optica.nombre,
      email: optica.email,
      telefono: optica.telefono,
      direccion: optica.direccion,
      activo: optica.activo
    });
    this.showModal();
  }
  saveOptica() {
    if (this.opticaForm.valid) {
      const formData = this.opticaForm.value;
      if (this.isEditing && this.editingOpticaId) {
        this.adminService.updateOptica(this.editingOpticaId, formData).subscribe({
          next: response => {
            if (response.success) {
              this.toastService.showSuccess('Óptica actualizada exitosamente');
              this.loadOpticas();
              this.hideModal();
            } else {
              this.toastService.showError(response.message || 'Error al actualizar óptica');
            }
          },
          error: error => {
            this.toastService.showError('Error al actualizar óptica');
            console.error('Error updating optica:', error);
          }
        });
      } else {
        this.adminService.createOptica(formData).subscribe({
          next: response => {
            if (response.success) {
              this.toastService.showSuccess('Óptica creada exitosamente');
              this.loadOpticas();
              this.hideModal();
            } else {
              this.toastService.showError(response.message || 'Error al crear óptica');
            }
          },
          error: error => {
            this.toastService.showError('Error al crear óptica');
            console.error('Error creating optica:', error);
          }
        });
      }
    }
  }
  deleteOptica(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta óptica?')) {
      this.adminService.deleteOptica(id).subscribe({
        next: response => {
          if (response.success) {
            this.toastService.showSuccess('Óptica eliminada exitosamente');
            this.loadOpticas();
          } else {
            this.toastService.showError(response.message || 'Error al eliminar óptica');
          }
        },
        error: error => {
          this.toastService.showError('Error al eliminar óptica');
          console.error('Error deleting optica:', error);
        }
      });
    }
  }
  resetUserPassword(opticaId) {
    if (confirm('¿Estás seguro de que quieres restablecer la contraseña del usuario de esta óptica?')) {
      this.adminService.resetUserPassword(opticaId).subscribe({
        next: response => {
          if (response.success) {
            this.toastService.showSuccess('Contraseña restablecida exitosamente');
          } else {
            this.toastService.showError(response.message || 'Error al restablecer contraseña');
          }
        },
        error: error => {
          this.toastService.showError('Error al restablecer contraseña');
          console.error('Error resetting password:', error);
        }
      });
    }
  }
  showModal() {
    const modal = document.getElementById('opticaModal');
    if (modal) {
      const bootstrapModal = new window.bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }
  hideModal() {
    const modal = document.getElementById('opticaModal');
    if (modal) {
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 81,
      vars: 14,
      consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "text-muted"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "row"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "opticaModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "formControlName", "nombre", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "row", "mt-3"], ["type", "tel", "formControlName", "telefono", 1, "form-control"], ["formControlName", "activo", 1, "form-select"], [3, "value"], ["formControlName", "direccion", "rows", "2", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-warning", "me-1", 3, "click"], [1, "fas", "fa-key"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "invalid-feedback"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Administraci\u00F3n del Sistema");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Gestiona las \u00F3pticas registradas en el sistema. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "div", 4)(10, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Gesti\u00F3n de \u00D3pticas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_12_listener() {
            return ctx.showCreateOpticaForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Nueva \u00D3ptica ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7)(16, "div", 2)(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "table", 11)(21, "thead")(22, "tr")(23, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Direcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Acciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, AdminComponent_tr_36_Template, 19, 7, "tr", 12)(37, AdminComponent_tr_37_Template, 3, 0, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 14)(39, "div", 15)(40, "div", 16)(41, "div", 17)(42, "h5", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 20)(46, "form", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_46_listener() {
            return ctx.saveOptica();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 7)(48, "div", 22)(49, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Nombre *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, AdminComponent_div_52_Template, 2, 0, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 22)(54, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Email *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, AdminComponent_div_57_Template, 2, 0, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 27)(59, "div", 22)(60, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 22)(64, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "select", 29)(67, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Activa");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Inactiva");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 27)(72, "div", 2)(73, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Direcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "textarea", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 32)(77, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Cancelar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_79_listener() {
            return ctx.saveOptica();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.opticas);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.opticas.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.isEditing ? "Editar" : "Nueva", " \u00D3ptica");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.opticaForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx.opticaForm.get("nombre")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.opticaForm.get("nombre")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.opticaForm.get("nombre")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.opticaForm.get("nombre")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.opticaForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.opticaForm.get("email")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.opticaForm.get("email")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.opticaForm.get("email")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.opticaForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isEditing ? "Actualizar" : "Crear", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      background-color: #f8f9fa;\n      border-top: none;\n    }\n    \n    .btn-sm[_ngcontent-%COMP%] {\n      padding: 0.25rem 0.5rem;\n      font-size: 0.75rem;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UseUJBQXlCO01BQ3pCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2QixrQkFBa0I7SUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGFibGUgdGgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5idG4tc20ge1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_admin_component_ts.js.map