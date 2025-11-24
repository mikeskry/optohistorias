"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_admin_opticas_opticas_component_ts"],{

/***/ 4845:
/*!***************************************************************!*\
  !*** ./src/app/components/admin/opticas/opticas.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpticasComponent: () => (/* binding */ OpticasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/confirmation-modal/confirmation-modal.component */ 107);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/admin.service */ 7945);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast.service */ 8397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);











function OpticasComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OpticasComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td")(13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_tr_36_Template_button_click_13_listener() {
      const optica_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.editOptica(optica_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_tr_36_Template_button_click_15_listener() {
      const optica_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openResetPasswordModal(optica_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_tr_36_Template_button_click_17_listener() {
      const optica_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleOpticaStatus(optica_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const optica_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](optica_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](optica_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](optica_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](optica_r4.telefono || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.isOpticaActive(optica_r4) ? "bg-success" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.isOpticaActive(optica_r4) ? "Activa" : "Desactivada", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r1.isOpticaActive(optica_r4) ? "Desactivar" : "Activar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.isOpticaActive(optica_r4) ? "bi-eye-slash" : "bi-eye");
  }
}
function OpticasComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" No se encontraron \u00F3pticas que coincidan con \"", ctx_r1.searchTerm, "\" ");
  }
}
function OpticasComponent_div_38_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_div_38_div_33_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.removeLogo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.formData.logoPreview, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function OpticasComponent_div_38_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58)(1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Logo actual:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function OpticasComponent_div_38_div_34_Template_img_error_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onLogoError($event));
    })("load", function OpticasComponent_div_38_div_34_Template_img_load_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onLogoLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Si no se muestra la imagen, verifique que el archivo existe en el servidor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.getLogoUrl((ctx_r1.editingOptica == null ? null : ctx_r1.editingOptica.logo) || ""), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function OpticasComponent_div_38_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Esta \u00F3ptica no tiene logo asignado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function OpticasComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_div_38_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 40)(8, "form", 41, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function OpticasComponent_div_38_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.saveOptica());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 42)(11, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Nombre *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function OpticasComponent_div_38_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.formData.nombre, $event) || (ctx_r1.formData.nombre = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 42)(15, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function OpticasComponent_div_38_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.formData.email, $event) || (ctx_r1.formData.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 42)(19, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function OpticasComponent_div_38_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.formData.telefono, $event) || (ctx_r1.formData.telefono = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 42)(23, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function OpticasComponent_div_38_Template_textarea_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.formData.direccion, $event) || (ctx_r1.formData.direccion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 42)(27, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Logo de la \u00D3ptica");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 48, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function OpticasComponent_div_38_Template_input_change_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onLogoSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Formatos permitidos: JPG, PNG, GIF. Tama\u00F1o m\u00E1ximo: 2MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, OpticasComponent_div_38_div_33_Template, 5, 1, "div", 50)(34, OpticasComponent_div_38_div_34_Template, 6, 1, "div", 50)(35, OpticasComponent_div_38_div_35_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "hr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "h6", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Datos del Administrador de la \u00D3ptica");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 42)(41, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Nombre del administrador *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function OpticasComponent_div_38_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.formData.user_nombre, $event) || (ctx_r1.formData.user_nombre = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 42)(45, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Apellidos del administrador *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function OpticasComponent_div_38_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.formData.user_apellidos, $event) || (ctx_r1.formData.user_apellidos = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 55)(49, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_div_38_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_div_38_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.saveOptica());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const opticaForm_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx_r1.showCreateForm || ctx_r1.editingOptica)("d-block", ctx_r1.showCreateForm || ctx_r1.editingOptica);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.editingOptica ? "Editar" : "Nueva", " \u00D3ptica");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.formData.logoPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.editingOptica == null ? null : ctx_r1.editingOptica.logo) && !ctx_r1.formData.logoPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r1.editingOptica == null ? null : ctx_r1.editingOptica.logo) && ctx_r1.editingOptica);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.user_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.user_apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !opticaForm_r8.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.editingOptica ? "Actualizar" : "Crear", " ");
  }
}
function OpticasComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Restablecer Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_div_39_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.closeResetPasswordModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 40)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u00BFEst\u00E1 seguro que desea restablecer la contrase\u00F1a de la \u00F3ptica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " La contrase\u00F1a se restablecer\u00E1 a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "optica123");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " y el usuario deber\u00E1 cambiarla en su pr\u00F3ximo inicio de sesi\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 55)(20, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_div_39_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.closeResetPasswordModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_div_39_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Restablecer Contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx_r1.showResetPasswordModal)("d-block", ctx_r1.showResetPasswordModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedOpticaForReset == null ? null : ctx_r1.selectedOpticaForReset.nombre);
  }
}
class OpticasComponent {
  constructor(adminService, toastService, router, authService) {
    this.adminService = adminService;
    this.toastService = toastService;
    this.router = router;
    this.authService = authService;
    this.opticas = [];
    this.filteredOpticas = [];
    this.showCreateForm = false;
    this.showResetPasswordModal = false;
    this.showDeactivateModal = false;
    this.editingOptica = null;
    this.selectedOpticaForReset = null;
    this.selectedOpticaForDeactivate = null;
    this.formData = {};
    this.searchTerm = '';
    this.isDeactivating = false;
    this.selectedLogoFile = null;
    this.currentUser = null;
  }
  ngOnInit() {
    this.loadOpticas();
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  // Helper method para determinar si una óptica está activa
  isOpticaActive(optica) {
    return optica.activo === true || optica.activo === '1' || optica.activo === 1;
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  openCreateForm() {
    this.editingOptica = null;
    this.formData = {};
    this.selectedLogoFile = null;
    this.showCreateForm = true;
  }
  loadOpticas() {
    this.adminService.getOpticas().subscribe({
      next: response => {
        this.opticas = response.data;
        this.filterOpticas();
      },
      error: error => {
        this.toastService.showToast('Error al cargar las ópticas', 'error');
      }
    });
  }
  filterOpticas() {
    if (!this.searchTerm.trim()) {
      this.filteredOpticas = [...this.opticas];
    } else {
      const term = this.searchTerm.toLowerCase().trim();
      this.filteredOpticas = this.opticas.filter(optica => optica.nombre?.toLowerCase().includes(term) || optica.email?.toLowerCase().includes(term) || optica.telefono?.toLowerCase().includes(term));
    }
  }
  onSearchChange() {
    this.filterOpticas();
  }
  clearSearch() {
    this.searchTerm = '';
    this.filterOpticas();
  }
  editOptica(optica) {
    this.editingOptica = optica;
    this.formData = {
      nombre: optica.nombre,
      email: optica.email,
      telefono: optica.telefono || '',
      direccion: optica.direccion || '',
      user_nombre: this.currentUser?.user_nombre || optica.user_nombre || '',
      user_apellidos: this.currentUser?.user_apellidos || optica.user_apellidos || ''
    };
    this.selectedLogoFile = null;
    this.showCreateForm = true;
  }
  closeForm() {
    this.showCreateForm = false;
    this.editingOptica = null;
    this.formData = {};
    this.selectedLogoFile = null;
  }
  saveOptica() {
    if (this.editingOptica) {
      // Validar campos requeridos para edición
      if (!this.formData.nombre || !this.formData.email || !this.formData.user_nombre || !this.formData.user_apellidos) {
        this.toastService.showToast('Por favor complete todos los campos requeridos', 'error');
        return;
      }
      // Validar que el email no esté duplicado (excluyendo la óptica actual)
      const emailExists = this.opticas.some(optica => optica.email === this.formData.email && optica.id !== this.editingOptica.id);
      if (emailExists) {
        this.toastService.showToast('El email ya existe en el sistema', 'error');
        return;
      }
      const formDataToSend = {
        ...this.formData
      };
      if (this.selectedLogoFile) {
        formDataToSend.logo = this.selectedLogoFile;
      }
      this.adminService.updateOptica(this.editingOptica.id, formDataToSend).subscribe({
        next: () => {
          this.toastService.showToast('Óptica actualizada correctamente', 'success');
          this.loadOpticas();
          this.closeForm();
        },
        error: error => {
          console.error('Error updating optica:', error);
          this.toastService.showToast('Error al actualizar la óptica', 'error');
        }
      });
    } else {
      // Validar campos requeridos antes de enviar
      if (!this.formData.nombre || !this.formData.email || !this.formData.user_nombre || !this.formData.user_apellidos) {
        this.toastService.showToast('Por favor complete todos los campos requeridos', 'error');
        return;
      }
      // Validar que el email no esté duplicado
      const emailExists = this.opticas.some(optica => optica.email === this.formData.email);
      if (emailExists) {
        this.toastService.showToast('El email de la óptica ya existe en el sistema', 'error');
        return;
      }
      const formDataToSend = {
        ...this.formData
      };
      if (this.selectedLogoFile) {
        formDataToSend.logo = this.selectedLogoFile;
      }
      this.adminService.createOptica(formDataToSend).subscribe({
        next: () => {
          this.toastService.showToast('Óptica creada correctamente', 'success');
          this.loadOpticas();
          this.closeForm();
        },
        error: error => {
          console.error('Error creating optica:', error);
          console.error('Error response:', error.error);
          // Manejar errores específicos
          if (error.error?.message?.includes('Duplicate entry') && error.error?.message?.includes('email')) {
            this.toastService.showToast('El email ya existe en el sistema. Por favor use un email diferente.', 'error');
          } else {
            this.toastService.showToast(`Error al crear la óptica: ${error.error?.message || error.message}`, 'error');
          }
        }
      });
    }
  }
  toggleOpticaStatus(optica) {
    const isActive = this.isOpticaActive(optica);
    if (isActive) {
      // Si está activa, mostrar modal de confirmación para desactivar
      this.selectedOpticaForDeactivate = optica;
      this.showDeactivateModal = true;
    } else {
      // Si está inactiva, activar directamente
      this.activateOptica(optica);
    }
  }
  openDeactivateModal(optica) {
    this.selectedOpticaForDeactivate = optica;
    this.showDeactivateModal = true;
  }
  closeDeactivateModal() {
    this.showDeactivateModal = false;
    this.selectedOpticaForDeactivate = null;
    this.isDeactivating = false;
  }
  confirmDeactivate() {
    if (!this.selectedOpticaForDeactivate) return;
    this.isDeactivating = true;
    this.adminService.updateOptica(this.selectedOpticaForDeactivate.id, {
      activo: false
    }).subscribe({
      next: () => {
        this.toastService.showToast('Óptica desactivada correctamente', 'success');
        this.loadOpticas();
        this.closeDeactivateModal();
      },
      error: error => {
        this.toastService.showToast('Error al desactivar la óptica', 'error');
        this.isDeactivating = false;
      }
    });
  }
  activateOptica(optica) {
    this.adminService.updateOptica(optica.id, {
      activo: true
    }).subscribe({
      next: () => {
        this.toastService.showToast('Óptica activada correctamente', 'success');
        this.loadOpticas();
      },
      error: error => {
        this.toastService.showToast('Error al activar la óptica', 'error');
      }
    });
  }
  openResetPasswordModal(optica) {
    this.selectedOpticaForReset = optica;
    this.showResetPasswordModal = true;
  }
  closeResetPasswordModal() {
    this.showResetPasswordModal = false;
    this.selectedOpticaForReset = null;
  }
  resetPassword() {
    if (!this.selectedOpticaForReset) return;
    this.adminService.resetOpticaPassword(this.selectedOpticaForReset.id).subscribe({
      next: () => {
        this.toastService.showToast('Contraseña restablecida exitosamente a "optica123"', 'success');
        this.closeResetPasswordModal();
      },
      error: error => {
        this.toastService.showToast('Error al restablecer la contraseña', 'error');
      }
    });
  }
  onLogoSelected(event) {
    const file = event.target.files[0];
    if (file) {
      // Validar tamaño del archivo (2MB máximo)
      if (file.size > 2 * 1024 * 1024) {
        this.toastService.showToast('El archivo es demasiado grande. Tamaño máximo: 2MB', 'error');
        return;
      }
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        this.toastService.showToast('Solo se permiten archivos de imagen', 'error');
        return;
      }
      this.selectedLogoFile = file;
      // Crear vista previa
      const reader = new FileReader();
      reader.onload = e => {
        this.formData.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  removeLogo() {
    this.selectedLogoFile = null;
    this.formData.logoPreview = null;
    // Limpiar el input de archivo
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  }
  getLogoUrl(logoPath) {
    if (!logoPath) {
      return '';
    }
    // Si es una URL completa, devolverla tal como está
    if (logoPath.startsWith('http')) {
      return logoPath;
    }
    // Si es una ruta relativa, construir la URL completa
    return `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/uploads/${logoPath}`;
  }
  onLogoError(event) {
    console.error('Error al cargar la imagen del logo:', event.target.src);
  }
  onLogoLoad(event) {
    // Logo cargado exitosamente
  }
  static {
    this.ɵfac = function OpticasComponent_Factory(t) {
      return new (t || OpticasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: OpticasComponent,
      selectors: [["app-opticas"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 41,
      vars: 11,
      consts: [["opticaForm", "ngForm"], ["logoInput", ""], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Buscar por nombre, email o tel\u00E9fono...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["class", "btn btn-outline-secondary", "type", "button", "title", "Limpiar b\u00FAsqueda", 3, "click", 4, "ngIf"], [1, "col-md-6", "text-end"], [1, "text-muted"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal fade", "style", "background-color: rgba(0,0,0,0.5);", 3, "show", "d-block", 4, "ngIf"], ["title", "Desactivar \u00D3ptica", "warningMessage", "Una vez desactivada, la \u00F3ptica no podr\u00E1 acceder al sistema hasta que sea reactivada por un administrador.", "confirmText", "Desactivar", "cancelText", "Cancelar", "confirmButtonClass", "btn-danger", 3, "confirm", "cancel", "isVisible", "message", "isLoading"], ["type", "button", "title", "Limpiar b\u00FAsqueda", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x"], [1, "badge"], ["title", "Editar", 1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Restablecer contrase\u00F1a", 1, "btn", "btn-sm", "btn-outline-warning", "me-2", 3, "click"], [1, "bi", "bi-key"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "bi"], ["colspan", "6", 1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-search", "me-2"], [1, "modal", "fade", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "text", "name", "nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "telefono", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "direccion", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], [1, "form-text"], ["class", "mt-2", 4, "ngIf"], [1, "my-4"], [1, "text-muted", "mb-3"], ["type", "text", "name", "user_nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "user_apellidos", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "mt-2"], ["alt", "Vista previa del logo", 1, "img-thumbnail", 2, "max-width", "150px", "max-height", "150px", 3, "src"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "ms-2", 3, "click"], [1, "bi", "bi-trash"], [1, "form-label", "small"], ["alt", "Logo actual", 1, "img-thumbnail", 2, "max-width", "150px", "max-height", "150px", 3, "error", "load", "src"], [1, "alert", "alert-info"], [1, "bi", "bi-info-circle", "me-2"], [1, "text-warning"], [1, "bi", "bi-exclamation-triangle", "me-2"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "bi", "bi-key", "me-2"]],
      template: function OpticasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Gesti\u00F3n de \u00D3pticas");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OpticasComponent_Template_button_click_6_listener() {
            return ctx.openCreateForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Nueva \u00D3ptica ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function OpticasComponent_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function OpticasComponent_Template_input_input_14_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, OpticasComponent_button_15_Template, 2, 0, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 15)(17, "small", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 17)(20, "table", 18)(21, "thead")(22, "tr")(23, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Acciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, OpticasComponent_tr_36_Template, 19, 10, "tr", 19)(37, OpticasComponent_tr_37_Template, 4, 1, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, OpticasComponent_div_38_Template, 53, 16, "div", 21)(39, OpticasComponent_div_39_Template, 25, 5, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "app-confirmation-modal", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirm", function OpticasComponent_Template_app_confirmation_modal_confirm_40_listener() {
            return ctx.confirmDeactivate();
          })("cancel", function OpticasComponent_Template_app_confirmation_modal_cancel_40_listener() {
            return ctx.closeDeactivateModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchTerm.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.filteredOpticas.length, " de ", ctx.opticas.length, " \u00F3pticas ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredOpticas);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.filteredOpticas.length === 0 && ctx.searchTerm.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showCreateForm || ctx.editingOptica);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showResetPasswordModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isVisible", ctx.showDeactivateModal)("message", "\u00BFEst\u00E1 seguro que desea desactivar la \u00F3ptica '" + ((ctx.selectedOpticaForDeactivate == null ? null : ctx.selectedOpticaForDeactivate.nombre) || "") + "'?")("isLoading", ctx.isDeactivating);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationModalComponent],
      styles: ["\n\n\n.opticas-container[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.opticas-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.opticas-table[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.opticas-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.opticas-status-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 4px 8px;\n}\n\n.opticas-modal[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n\n.opticas-form-section[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.opticas-form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n}\n\n.opticas-required-field[_ngcontent-%COMP%]::after {\n  content: \" *\";\n  color: var(--error-color);\n}\n\n\n\n@media (max-width: 768px) {\n  .opticas-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  \n  .opticas-table[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9vcHRpY2FzL29wdGljYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzREFBc0Q7O0FBRXREO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBLHVDQUF1QztBQUN2QztFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXN0aWxvcyBlc3BlY8ODwq1maWNvcyBwYXJhIGVsIGNvbXBvbmVudGUgZGUgw4PCs3B0aWNhcyAqL1xyXG5cclxuLm9wdGljYXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5vcHRpY2FzLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm9wdGljYXMtdGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5vcHRpY2FzLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdGljYXMtc3RhdHVzLWJhZGdlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxufVxyXG5cclxuLm9wdGljYXMtbW9kYWwge1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbn1cclxuXHJcbi5vcHRpY2FzLWZvcm0tc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm9wdGljYXMtZm9ybS1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XHJcbn1cclxuXHJcbi5vcHRpY2FzLXJlcXVpcmVkLWZpZWxkOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgKlwiO1xyXG4gIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgZm9yIG9wdGljYXMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm9wdGljYXMtYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcHRpY2FzLXRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_opticas_opticas_component_ts.js.map