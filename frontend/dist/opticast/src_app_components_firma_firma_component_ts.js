"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_firma_firma_component_ts"],{

/***/ 5105:
/*!*****************************************************!*\
  !*** ./src/app/components/firma/firma.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirmaComponent: () => (/* binding */ FirmaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_firma_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/firma.service */ 1981);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast.service */ 8397);







function FirmaComponent_div_9_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 26);
  }
}
function FirmaComponent_div_9_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 27);
  }
}
function FirmaComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Firma Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 23)(6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaComponent_div_9_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.deleteFirma());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FirmaComponent_div_9_i_7_Template, 1, 0, "i", 25)(8, FirmaComponent_div_9_i_8_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.getFirmaUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isDeleting ? "Eliminando..." : "Eliminar Firma", " ");
  }
}
function FirmaComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No hay firma configurada. Suba una imagen de su firma para usarla en los documentos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function FirmaComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vista Previa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 23)(6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaComponent_div_20_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.removeSelectedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Quitar Archivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.filePreview, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function FirmaComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 34);
  }
}
function FirmaComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 27);
  }
}
class FirmaComponent {
  constructor(firmaService, authService, toastService) {
    this.firmaService = firmaService;
    this.authService = authService;
    this.toastService = toastService;
    this.currentUser = null;
    this.selectedFile = null;
    this.filePreview = null;
    this.isUploading = false;
    this.isDeleting = false;
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  onFileSelected(event) {
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
      reader.onload = e => {
        this.filePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  removeSelectedFile() {
    this.selectedFile = null;
    this.filePreview = null;
    // Limpiar el input file
    const fileInput = document.getElementById('firmaFile');
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
      next: response => {
        this.toastService.showSuccess('Firma actualizada exitosamente');
        // Actualizar el usuario actual con la nueva firma
        if (this.currentUser) {
          this.currentUser.firma = response.data.firma;
          this.authService.updateCurrentUser(this.currentUser);
        }
        this.removeSelectedFile();
        this.isUploading = false;
      },
      error: error => {
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
      next: response => {
        this.toastService.showSuccess('Firma eliminada exitosamente');
        // Actualizar el usuario actual removiendo la firma
        if (this.currentUser) {
          this.currentUser.firma = undefined;
          this.authService.updateCurrentUser(this.currentUser);
        }
        this.isDeleting = false;
      },
      error: error => {
        console.error('FirmaComponent::deleteFirma - Error:', error);
        this.toastService.showError('Error al eliminar la firma: ' + (error.error?.message || 'Error desconocido'));
        this.isDeleting = false;
      }
    });
  }
  getFirmaUrl() {
    if (!this.currentUser?.firma) return '';
    return this.firmaService.getFirmaUrl(this.currentUser.firma);
  }
  static {
    this.ɵfac = function FirmaComponent_Factory(t) {
      return new (t || FirmaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_firma_service__WEBPACK_IMPORTED_MODULE_0__.FirmaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FirmaComponent,
      selectors: [["app-firma"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 39,
      vars: 8,
      consts: [[1, "container", "mt-4"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-signature", "me-2"], [1, "card-body"], ["class", "mb-4", 4, "ngIf"], [1, "mb-4"], [1, "mb-3"], ["for", "firmaFile", 1, "form-label"], ["type", "file", "id", "firmaFile", "accept", "image/*", 1, "form-control", 3, "change"], [1, "form-text"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "fas fa-upload me-1", 4, "ngIf"], ["class", "fas fa-spinner fa-spin me-1", 4, "ngIf"], [1, "alert", "alert-light"], [1, "fas", "fa-lightbulb", "me-2"], [1, "firma-preview"], ["alt", "Firma actual", 1, "img-fluid", "border", "rounded", 3, "src"], [1, "mt-2"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], ["class", "fas fa-trash me-1", 4, "ngIf"], [1, "fas", "fa-trash", "me-1"], [1, "fas", "fa-spinner", "fa-spin", "me-1"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle", "me-2"], [1, "form-label"], ["alt", "Vista previa", 1, "img-fluid", "border", "rounded", 3, "src"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fas", "fa-times", "me-1"], [1, "fas", "fa-upload", "me-1"]],
      template: function FirmaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Gesti\u00F3n de Firma ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FirmaComponent_div_9_Template, 10, 5, "div", 8)(10, FirmaComponent_div_10_Template, 4, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Seleccionar Archivo de Firma");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FirmaComponent_Template_input_change_17_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Formatos permitidos: JPG, PNG, GIF. Tama\u00F1o m\u00E1ximo: 2MB ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FirmaComponent_div_20_Template, 9, 1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaComponent_Template_button_click_22_listener() {
            return ctx.uploadFirma();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, FirmaComponent_i_23_Template, 1, 0, "i", 17)(24, FirmaComponent_i_24_Template, 1, 0, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19)(27, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Informaci\u00F3n Importante");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ul", 5)(31, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "La firma debe ser una imagen clara y legible");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Se recomienda usar fondo transparente o blanco");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "La firma se utilizar\u00E1 al generar pdf de la historia cl\u00EDnica");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Puede actualizar su firma en cualquier momento");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.firma);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.currentUser == null ? null : ctx.currentUser.firma));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.firma) ? "Actualizar Firma" : "Subir Firma");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filePreview);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.selectedFile || ctx.isUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isUploading ? "Subiendo..." : (ctx.currentUser == null ? null : ctx.currentUser.firma) ? "Actualizar Firma" : "Subir Firma", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
      styles: [".firma-preview[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n  background-color: var(--light-color);\n  border-radius: 8px;\n  border: 2px dashed var(--secondary-color);\n  overflow: hidden;\n}\n\n.firma-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  max-width: 100%;\n  max-height: 200px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n}\n\n\n\n@media (max-width: 768px) {\n  .firma-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 150px;\n    max-width: 300px;\n  }\n  \n  .firma-preview[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n\n@media (max-width: 480px) {\n  .firma-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 120px;\n    max-width: 250px;\n  }\n  \n  .firma-preview[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--hover-color);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--error-color);\n  border: none;\n  transition: all 0.3s ease;\n}\n\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-color);\n  color: white;\n  border: none;\n}\n\n.alert-light[_ngcontent-%COMP%] {\n  background: var(--light-color);\n  border: 1px solid var(--secondary-color);\n  color: var(--dark-color);\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border: none;\n  border-radius: 12px;\n  background: white;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.fa-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  \n  .col-md-8[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n  \n  .d-flex.gap-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  \n  .col-md-8[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  \n  .card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  \n  .form-label[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 0.5rem 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maXJtYS9maXJtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7O0FBR0E7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix3Q0FBd0M7RUFDeEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEM7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlybWEtcHJldmlldyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZmlybWEtcHJldmlldyBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyBmb3Igc2lnbmF0dXJlIGltYWdlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZmlybWEtcHJldmlldyBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmlybWEtcHJldmlldyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmZpcm1hLXByZXZpZXcgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZpcm1hLXByZXZpZXcge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItY29sb3IpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3ItY29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMjIwLCA1MywgNjksIDAuMyk7XHJcbn1cclxuXHJcbi5hbGVydC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYWxlcnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmZhLXNwaW5uZXIge1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciByZXNwb25zaXZlIGFkanVzdG1lbnRzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC1tZC04IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmQtZmxleC5nYXAtMiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmQtZmxleC5nYXAtMiAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sLW1kLTgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1981:
/*!*******************************************!*\
  !*** ./src/app/services/firma.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirmaService: () => (/* binding */ FirmaService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class FirmaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}`;
  }
  uploadFirma(file) {
    const formData = new FormData();
    formData.append('firma', file);
    return this.http.post(`${this.apiUrl}/optica/firma`, formData);
  }
  deleteFirma() {
    return this.http.delete(`${this.apiUrl}/optica/firma`);
  }
  getFirmaUrl(firmaPath) {
    if (!firmaPath) return '';
    return `${this.apiUrl}/uploads/${firmaPath}`;
  }
  static {
    this.ɵfac = function FirmaService_Factory(t) {
      return new (t || FirmaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FirmaService,
      factory: FirmaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_firma_firma_component_ts.js.map