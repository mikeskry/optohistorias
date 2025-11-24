"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_auth_change-password_change-password_component_ts"],{

/***/ 1692:
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/change-password/change-password.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/toast.service */ 8397);








function ChangePasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La nueva contrase\u00F1a es requerida y debe tener al menos 8 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 19);
  }
}
class ChangePasswordComponent {
  constructor(fb, authService, router, toastService) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.toastService = toastService;
    this.loading = false;
    this.passwordForm = this.fb.group({
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  onSubmit() {
    if (this.passwordForm.valid) {
      this.loading = true;
      const request = {
        newPassword: this.passwordForm.get('newPassword')?.value
      };
      this.authService.changePassword(request).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.showSuccess('Contraseña cambiada exitosamente');
          this.router.navigate(['/dashboard']);
        },
        error: error => {
          this.loading = false;
          this.toastService.showError(error.error?.message || 'Error al cambiar contraseña');
        }
      });
    }
  }
  isFieldInvalid(fieldName) {
    const field = this.passwordForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  passwordMatchValidator(form) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return {
        'passwordMismatch': true
      };
    }
    return null;
  }
  static {
    this.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 27,
      vars: 10,
      consts: [[1, "container-fluid", "vh-100", "d-flex", "align-items-center", "justify-content-center", "bg-light"], [1, "card", "shadow-lg", 2, "max-width", "500px"], [1, "card-header", "text-center"], [1, "mb-0"], [1, "fas", "fa-key", "text-warning", "me-2"], [1, "text-muted", "mb-0"], [1, "card-body", "p-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "newPassword", 1, "form-label"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", "placeholder", "Ingrese su nueva contrase\u00F1a", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirme su nueva contrase\u00F1a", 1, "form-control"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-warning", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card-footer", "text-center", "text-muted"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Cambio de Contrase\u00F1a Obligatorio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Por seguridad, debe cambiar su contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Nueva Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChangePasswordComponent_div_14_Template, 2, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Confirmar Nueva Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ChangePasswordComponent_div_19_Template, 2, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ChangePasswordComponent_span_22_Template, 1, 0, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Esta acci\u00F3n es obligatoria para continuar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("newPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("newPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.passwordForm.invalid || ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Cambiando contrase\u00F1a..." : "Cambiar Contrase\u00F1a", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".card[_ngcontent-%COMP%] {\n      border: none;\n      border-radius: 15px;\n    }\n    \n    .card-header[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, var(--warning-color), #e0a800);\n      color: var(--dark-color);\n      border-radius: 15px 15px 0 0 !important;\n      padding: 2rem 1.5rem;\n    }\n    \n    .btn-warning[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, var(--warning-color), #e0a800);\n      border: none;\n      border-radius: 10px;\n      padding: 12px;\n      font-weight: 600;\n      color: var(--dark-color);\n    }\n    \n    .btn-warning[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 4px 8px rgba(255,193,7,0.3);\n    }\n    \n    .form-control[_ngcontent-%COMP%] {\n      border-radius: 8px;\n      padding: 12px;\n      border: 2px solid #e9ecef;\n      transition: all 0.3s ease;\n    }\n    \n    .form-control[_ngcontent-%COMP%]:focus {\n      border-color: var(--warning-color);\n      box-shadow: 0 0 0 0.2rem rgba(255,193,7,0.25);\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLFlBQVk7TUFDWixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxrRUFBa0U7TUFDbEUsd0JBQXdCO01BQ3hCLHVDQUF1QztNQUN2QyxvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxrRUFBa0U7TUFDbEUsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLHdCQUF3QjtJQUMxQjs7SUFFQTtNQUNFLDJCQUEyQjtNQUMzQix5Q0FBeUM7SUFDM0M7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLHlCQUF5QjtNQUN6Qix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxrQ0FBa0M7TUFDbEMsNkNBQTZDO0lBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNhcmQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXdhcm5pbmctY29sb3IpLCAjZTBhODAwKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDAgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICAgIH1cbiAgICBcbiAgICAuYnRuLXdhcm5pbmcge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0td2FybmluZy1jb2xvciksICNlMGE4MDApO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIH1cbiAgICBcbiAgICAuYnRuLXdhcm5pbmc6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMjU1LDE5Myw3LDAuMyk7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0td2FybmluZy1jb2xvcik7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsMTkzLDcsMC4yNSk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_auth_change-password_change-password_component_ts.js.map