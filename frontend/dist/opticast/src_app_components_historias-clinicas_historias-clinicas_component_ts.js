"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_historias-clinicas_historias-clinicas_component_ts"],{

/***/ 2129:
/*!*******************************************************************************!*\
  !*** ./src/app/components/historias-clinicas/historias-clinicas.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoriasClinicasComponent: () => (/* binding */ HistoriasClinicasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _directives_prefix_input_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/prefix-input.directive */ 3495);
/* harmony import */ var _directives_axis_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/axis-input.directive */ 2410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_historias_clinicas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/historias-clinicas.service */ 1889);
/* harmony import */ var _services_pacientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pacientes.service */ 4894);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ 8397);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ 4796);













const _forTrack0 = ($index, $item) => $item.id;
function HistoriasClinicasComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Paciente: ", ctx_r0.pacienteNombre, "");
  }
}
function HistoriasClinicasComponent_Conditional_15_Conditional_4_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_15_Conditional_4_For_11_Template_div_click_0_listener() {
      const historia_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.editHistoria(historia_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 24)(12, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_15_Conditional_4_For_11_Template_button_click_12_listener($event) {
      const historia_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      ctx_r0.editHistoria(historia_r3, "view");
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_15_Conditional_4_For_11_Template_button_click_15_listener($event) {
      const historia_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      ctx_r0.generatePDF(historia_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const historia_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 3, historia_r3.fecha_consulta, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", historia_r3.hora || "Sin hora especificada", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", historia_r3.motivo_consulta || "Sin motivo especificado", " ");
  }
}
function HistoriasClinicasComponent_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Fecha Consulta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Motivo Consulta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](10, HistoriasClinicasComponent_Conditional_15_Conditional_4_For_11_Template, 18, 6, "div", 16, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r0.historias);
  }
}
function HistoriasClinicasComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No hay historias cl\u00EDnicas");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Este paciente a\u00FAn no tiene historias cl\u00EDnicas registradas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_15_Conditional_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.showCreateFormModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Crear Primera Historia Cl\u00EDnica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function HistoriasClinicasComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 2)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HistoriasClinicasComponent_Conditional_15_Conditional_4_Template, 12, 0, "div", 12)(5, HistoriasClinicasComponent_Conditional_15_Conditional_5_Template, 9, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](4, ctx_r0.historias.length > 0 ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](5, ctx_r0.historias.length === 0 ? 5 : -1);
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.generatePDFFromView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Generar PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r0.selectedHistoriaEditable ? "alert-info" : "alert-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-info-circle", ctx_r0.selectedHistoriaEditable)("fa-exclamation-triangle", !ctx_r0.selectedHistoriaEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedHistoriaEditMessage);
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 9)(2, "div", 47)(3, "div", 48)(4, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Fecha de la Consulta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function HistoriasClinicasComponent_Conditional_16_Conditional_17_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onFechaConsultaChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 47)(8, "div", 48)(9, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 47)(13, "div", 48)(14, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 9)(18, "div", 47)(19, "div", 48)(20, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Tipo de Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 47)(24, "div", 48)(25, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "N\u00FAmero de Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 47)(29, "div", 48)(30, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Fecha de Nacimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 9)(35, "div", 53)(36, "div", 48)(37, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Edad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 53)(41, "div", 48)(42, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "G\u00E9nero");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 53)(46, "div", 48)(47, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "RH");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 53)(51, "div", 48)(52, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 9)(56, "div", 53)(57, "div", 48)(58, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 53)(62, "div", 48)(63, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Acudiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 53)(67, "div", 48)(68, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Fecha Estimada del Pr\u00F3ximo Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 53)(72, "div", 48)(73, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.nombre) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.apellidos) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.tipo_documento) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.documento) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.fecha_nacimiento) ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](33, 11, ctx_r0.paciente == null ? null : ctx_r0.paciente.fecha_nacimiento, "dd/MM/yyyy") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.calcularEdad(ctx_r0.paciente == null ? null : ctx_r0.paciente.fecha_nacimiento));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.genero) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.rh) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.telefono) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.email) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", (ctx_r0.paciente == null ? null : ctx_r0.paciente.nombre_acudiente) || "");
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 57)(2, "div", 58)(3, "div", 59)(4, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Motivo de Consulta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 58)(8, "div", 59)(9, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Tipo de Examen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 57)(13, "div", 58)(14, "div", 59)(15, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Anamnesis");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 58)(19, "div", 59)(20, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u00DAltima Valoraci\u00F3n de Optometr\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 59)(24, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Ocupaci\u00F3n/Profesi\u00F3n/Actividades");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 10)(28, "div", 31)(29, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Antecedentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 11)(32, "div", 57)(33, "div", 58)(34, "div", 59)(35, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Familiares");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 58)(39, "div", 59)(40, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Personales");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 58)(44, "div", 59)(45, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Laborales");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "FORMULA DE CERCA O ADICIONAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 72)(4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "LATERALIDAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "ESFERA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "CILINDRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "EJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "ADICI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 74)(15, "div", 75)(16, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 75)(19, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 75)(21, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 75)(23, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEjeField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateEjeField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 75)(25, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatLensometriaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 74)(27, "div", 75)(28, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 75)(31, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 75)(33, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 75)(35, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEjeField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateEjeField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 75)(37, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_blur_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatLensometriaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template_input_input_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 68)(2, "div", 69)(3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " FORMULA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleFila("lensometriaFormulaCerca"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 72)(8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "LATERALIDAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "ESFERA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "CILINDRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "EJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "ADICI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "PRISMA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 74)(21, "div", 75)(22, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 75)(25, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 75)(27, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 75)(29, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEjeField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateEjeField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 75)(31, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatLensometriaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 74)(35, "div", 75)(36, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 75)(39, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 75)(41, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 75)(43, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEjeField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateEjeField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 75)(45, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_blur_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatLensometriaField($event));
    })("input", function HistoriasClinicasComponent_Conditional_16_Conditional_29_Template_input_input_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateLensometriaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, HistoriasClinicasComponent_Conditional_16_Conditional_29_Conditional_48_Template, 38, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 57)(50, "div", 58)(51, "div", 59)(52, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "textarea", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-plus", !ctx_r0.isFilaVisible("lensometriaFormulaCerca"))("fa-minus", ctx_r0.isFilaVisible("lensometriaFormulaCerca"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](48, ctx_r0.isFilaVisible("lensometriaFormulaCerca") ? 48 : -1);
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_35_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 102)(2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Con Correcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 68)(2, "div", 96)(3, "div", 97)(4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Test Usado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Agudeza Visual Lejos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Agudeza Visual Cerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 97)(11, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Distancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Lateralidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Ambos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Observaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 97)(30, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Lejos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Sin Correcci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_35_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleFila("agudezaVisualConCorreccion"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, HistoriasClinicasComponent_Conditional_16_Conditional_35_Conditional_50_Template, 17, 0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 97)(52, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Cerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Pin Hole");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "div", 102)(63, "div", 102)(64, "div", 102)(65, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-plus", !ctx_r0.isFilaVisible("agudezaVisualConCorreccion"))("fa-minus", ctx_r0.isFilaVisible("agudezaVisualConCorreccion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](50, ctx_r0.isFilaVisible("agudezaVisualConCorreccion") ? 50 : -1);
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 68)(2, "div", 120)(3, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Dominancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Mano");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Ojo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Punto Pr\u00F3ximo de Convergencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "D.P.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Lejos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Cerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Ojo derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Ojo izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Ducciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "KAPPA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Ojo derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Ojo izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Versiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Ojo derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Ojo izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 131)(56, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "svg", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "line", 138)(59, "line", 139)(60, "line", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "text", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "derecho"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "derecho", "top-left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "text", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "derecho"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "derecho", "top-right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "text", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "derecho"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "derecho", "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "text", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "derecho"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "derecho", "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "text", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "derecho"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "derecho", "bottom-left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "text", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_71_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "derecho"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_71_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "derecho", "bottom-right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 131)(74, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "svg", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](76, "line", 138)(77, "line", 139)(78, "line", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "text", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "izquierdo"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "izquierdo", "top-left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "text", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "izquierdo"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "izquierdo", "top-right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "text", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_83_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "izquierdo"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_83_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "izquierdo", "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "text", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "izquierdo"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "izquierdo", "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "text", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_87_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "izquierdo"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_87_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "izquierdo", "bottom-left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "text", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_click_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesVClick($event, "izquierdo"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_41_Template_text_keydown_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onVersionesKeyDown($event, "izquierdo", "bottom-right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Hirschberg");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 155)(96, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Medici\u00F3n de Desviaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Con correcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Sin correcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Observaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Test Utilizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](107, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Distancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "Vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](119, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, "6 Metros");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](123, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](125, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](127, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](129, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "30 A 40 cms");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](133, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](135, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](137, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](139, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "Test de Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "Ojo Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](145, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147, "Ojos Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](149, "input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "Estereopsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153, "Tipo de Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](155, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157, "Resultado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](159, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161, "Segundos de Arco");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Radio de K");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Retinoscopia Din\u00E1mica");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Otra Refracci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Lateralidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Esfera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Cilindro");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Eje");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Sombras");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Lateralidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Esfera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Cilindro");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Eje");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Sombras");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 124)(33, "input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 124)(35, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 124)(43, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 124)(45, "input", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "input", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 124)(55, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 124)(57, "input", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 124)(65, "input", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 124)(67, "input", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template_input_blur_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "input", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 176)(2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Keratometr\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Retinoscopia Estatica");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Lateralidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Plano");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Curvo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Eje");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Miras");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Corn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Lateralidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Esfera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Cilindro");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Eje");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Sombras");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 124)(31, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatKeratometriaOnBlur("examen_refractivo_keratometria_derecho_plano"));
    })("keypress", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_keypress_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onKeratometriaKeyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 124)(33, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatKeratometriaOnBlur("examen_refractivo_keratometria_derecho_curvo"));
    })("keypress", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_keypress_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onKeratometriaKeyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 124)(43, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 124)(45, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 124)(53, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatKeratometriaOnBlur("examen_refractivo_keratometria_izquierdo_plano"));
    })("keypress", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_keypress_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onKeratometriaKeyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 124)(55, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatKeratometriaOnBlur("examen_refractivo_keratometria_izquierdo_curvo"));
    })("keypress", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_keypress_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onKeratometriaKeyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 124)(65, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 124)(67, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 197)(73, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleFila("examenRefractivoRetinoscopia"));
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_button_keydown_73_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onToggleButtonKeyDown($event, "examenRefractivoRetinoscopia"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, HistoriasClinicasComponent_Conditional_16_Conditional_47_Conditional_75_Template, 72, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Subjetivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "En estado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Cycloplejia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Otra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Distancia al vertice de:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "AV de Retinoscopia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Lateralidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Esfera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Cilindro");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Eje");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "AV LEJOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "AV CERCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "DNP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "div", 124)(113, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_input_113_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onDistanciaChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "mm");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Est\u00E1tica");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "Din\u00E1mica");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div", 124)(123, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_input_123_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onEsferaDerechaChange($event));
    })("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_123_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 124)(125, "input", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_input_125_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onCilindroDerechoChange($event));
    })("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_125_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](127, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](129, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](131, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](133, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](135, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](137, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](139, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](141, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](143, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "div", 124)(147, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_input_147_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onEsferaIzquierdaChange($event));
    })("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_147_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "div", 124)(149, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_input_149_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onCilindroIzquierdoChange($event));
    })("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_47_Template_input_blur_149_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](151, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](153, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](155, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](157, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](159, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](161, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](163, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](165, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](167, "input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-plus", !ctx_r0.isFilaVisible("examenRefractivoRetinoscopia"))("fa-minus", ctx_r0.isFilaVisible("examenRefractivoRetinoscopia"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](75, ctx_r0.isFilaVisible("examenRefractivoRetinoscopia") ? 75 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appAxisInputZeroToMax", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appAxisInputZeroToMax", true);
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 57)(2, "div", 58)(3, "div", 59)(4, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Pupila Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 58)(8, "div", 59)(9, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Pupila Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 57)(13, "div", 58)(14, "div", 59)(15, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "P\u00E1rpado Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 58)(19, "div", 59)(20, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "P\u00E1rpado Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 57)(24, "div", 58)(25, "div", 59)(26, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Pel\u00EDcula Lagrimal Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 58)(30, "div", 59)(31, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Pel\u00EDcula Lagrimal Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 57)(35, "div", 58)(36, "div", 59)(37, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Conjuntiva Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 58)(41, "div", 59)(42, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Conjuntiva Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 57)(46, "div", 58)(47, "div", 59)(48, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "C\u00F3rnea Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 58)(52, "div", 59)(53, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "C\u00F3rnea Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "input", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 57)(57, "div", 58)(58, "div", 59)(59, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Cristalino Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 58)(63, "div", 59)(64, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Cristalino Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "input", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 57)(68, "div", 58)(69, "div", 59)(70, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "C\u00E1mara Anterior Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "input", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 58)(74, "div", 59)(75, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "C\u00E1mara Anterior Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 57)(79, "div", 58)(80, "div", 59)(81, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "Iris Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "input", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 58)(85, "div", 59)(86, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Iris Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 57)(90, "div", 58)(91, "div", 59)(92, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Bruckner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "input", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 263)(2, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Fondo de ojo derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Fondo de ojo izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Fondo de ojo derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Fondo de ojo izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "textarea", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "textarea", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 68)(2, "div", 268)(3, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Ojo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Esfera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Cilindro");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Eje");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "AV Lejos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "AC Cerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "DNP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Recomendaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 124)(24, "input", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_65_Template_input_blur_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 124)(26, "input", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_65_Template_input_blur_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "textarea", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 124)(42, "input", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_65_Template_input_blur_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatEsferaField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 124)(44, "input", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function HistoriasClinicasComponent_Conditional_16_Conditional_65_Template_input_blur_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCilindroField($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "input", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "input", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "input", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 57)(2, "div", 58)(3, "div", 59)(4, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Observaciones Generales");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "textarea", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 68)(2, "div", 286)(3, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Diagn\u00F3stico");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Ojo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "input", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "input", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "input", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "input", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "input", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "input", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "input", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "input", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Guardar Historia Cl\u00EDnica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function HistoriasClinicasComponent_Conditional_16_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Actualizar Historia Cl\u00EDnica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function HistoriasClinicasComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 2)(2, "div", 10)(3, "div", 31)(4, "div", 3)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HistoriasClinicasComponent_Conditional_16_Conditional_7_Template, 3, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 11)(9, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function HistoriasClinicasComponent_Conditional_16_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.saveHistoria());
    })("keydown", function HistoriasClinicasComponent_Conditional_16_Template_form_keydown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, HistoriasClinicasComponent_Conditional_16_Conditional_10_Template, 4, 6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 35)(12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("datosPaciente"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 38)(15, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " DATOS DEL PACIENTE (Solo Consulta) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, HistoriasClinicasComponent_Conditional_16_Conditional_17_Template, 76, 14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 35)(19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("cuestionario"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " CUESTIONARIO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, HistoriasClinicasComponent_Conditional_16_Conditional_23_Template, 48, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 35)(25, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("lensometria"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " LENSOMETR\u00CDA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, HistoriasClinicasComponent_Conditional_16_Conditional_29_Template, 55, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 35)(31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("agudezaVisual"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " AGUDEZA VISUAL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, HistoriasClinicasComponent_Conditional_16_Conditional_35_Template, 66, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 35)(37, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("examenMotor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " EXAMEN MOTOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, HistoriasClinicasComponent_Conditional_16_Conditional_41_Template, 162, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 35)(43, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("examenRefractivo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " EXAMEN REFRACTIVO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, HistoriasClinicasComponent_Conditional_16_Conditional_47_Template, 168, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 35)(49, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("examenOftalmologico"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " EXAMEN OFTALMOL\u00D3GICO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, HistoriasClinicasComponent_Conditional_16_Conditional_53_Template, 95, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 35)(55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("oftalmoscopia"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, " OFTALMOSCOPIA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, HistoriasClinicasComponent_Conditional_16_Conditional_59_Template, 18, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 35)(61, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("formula"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, " F\u00D3RMULA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, HistoriasClinicasComponent_Conditional_16_Conditional_65_Template, 55, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 35)(67, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("observaciones"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, " OBSERVACIONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, HistoriasClinicasComponent_Conditional_16_Conditional_71_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 35)(73, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_div_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.toggleSeccion("diagnostico"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, " DIAGN\u00D3STICO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, HistoriasClinicasComponent_Conditional_16_Conditional_77_Template, 63, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 9)(79, "div", 2)(80, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Conditional_16_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, HistoriasClinicasComponent_Conditional_16_Conditional_83_Template, 3, 0, "button", 43)(84, HistoriasClinicasComponent_Conditional_16_Conditional_84_Template, 3, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r0.editingHistoriaId ? "Ver" : "Nueva", " Historia Cl\u00EDnica");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](7, ctx_r0.editingHistoriaId ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.historiaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](10, ctx_r0.editingHistoriaId && ctx_r0.selectedHistoriaEditable && ctx_r0.selectedHistoriaEditMessage ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["datosPaciente"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["datosPaciente"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](17, ctx_r0.seccionesDesplegadas["datosPaciente"] ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["cuestionario"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["cuestionario"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](23, ctx_r0.seccionesDesplegadas["cuestionario"] ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["lensometria"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["lensometria"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](29, ctx_r0.seccionesDesplegadas["lensometria"] ? 29 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["agudezaVisual"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["agudezaVisual"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](35, ctx_r0.seccionesDesplegadas["agudezaVisual"] ? 35 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["examenMotor"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["examenMotor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](41, ctx_r0.seccionesDesplegadas["examenMotor"] ? 41 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["examenRefractivo"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["examenRefractivo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](47, ctx_r0.seccionesDesplegadas["examenRefractivo"] ? 47 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["examenOftalmologico"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["examenOftalmologico"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](53, ctx_r0.seccionesDesplegadas["examenOftalmologico"] ? 53 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["oftalmoscopia"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["oftalmoscopia"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](59, ctx_r0.seccionesDesplegadas["oftalmoscopia"] ? 59 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["formula"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["formula"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](65, ctx_r0.seccionesDesplegadas["formula"] ? 65 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["observaciones"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["observaciones"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](71, ctx_r0.seccionesDesplegadas["observaciones"] ? 71 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fa-chevron-down", ctx_r0.seccionesDesplegadas["diagnostico"])("fa-chevron-right", !ctx_r0.seccionesDesplegadas["diagnostico"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](77, ctx_r0.seccionesDesplegadas["diagnostico"] ? 77 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.editingHistoriaId ? "Cerrar" : "Cancelar", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](83, !ctx_r0.editingHistoriaId ? 83 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](84, ctx_r0.editingHistoriaId && ctx_r0.isEditing ? 84 : -1);
  }
}
class HistoriasClinicasComponent {
  constructor(fb, route, router, historiasClinicasService, pacientesService, toastService, authService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.historiasClinicasService = historiasClinicasService;
    this.pacientesService = pacientesService;
    this.toastService = toastService;
    this.authService = authService;
    this.historias = [];
    this.pacienteId = null;
    this.pacienteNombre = '';
    this.paciente = null;
    this.showCreateForm = false;
    this.isEditing = false;
    this.editingHistoriaId = null;
    this.selectedHistoriaEditable = false;
    this.selectedHistoriaEditMessage = '';
    this.selectedHistoriaEditableUntil = null;
    this.selectedHistoriaCreatedAt = null;
    this.EDIT_WINDOW_MS = 24 * 60 * 60 * 1000;
    // Secciones desplegables
    this.seccionesDesplegadas = {
      datosPaciente: true,
      cuestionario: true,
      lensometria: false,
      agudezaVisual: true,
      examenMotor: false,
      examenRefractivo: true,
      examenOftalmologico: false,
      oftalmoscopia: true,
      formula: true,
      observaciones: true,
      diagnostico: true
    };
    // Filas ocultas/visibles en tablas (reutilizable)
    this.filasVisibles = {
      agudezaVisualConCorreccion: false,
      lensometriaFormulaCerca: false,
      examenRefractivoRetinoscopia: false
      // Se pueden agregar más filas aquí para otras secciones
    };
    // Orden de navegación Tab por campo
    this.tabOrder = [
    // DATOS DEL PACIENTE
    'fecha_consulta', 'fecha_control', 'hora',
    // CUESTIONARIO
    'motivo_consulta', 'tipo_examen', 'anamnesis', 'ultima_valoracion_optometria', 'ocupacion_profesion', 'antecedentes_familiares', 'antecedentes_personales', 'antecedentes_laborales',
    // LENSOMETRÍA
    'lensometria_formula_lejos_derecho_esfera', 'lensometria_formula_lejos_derecho_cilindro', 'lensometria_formula_lejos_derecho_eje', 'lensometria_formula_lejos_izquierdo_esfera', 'lensometria_formula_lejos_izquierdo_cilindro', 'lensometria_formula_lejos_izquierdo_eje', 'lensometria_formula_lejos_derecho_adicion', 'lensometria_formula_lejos_izquierdo_adicion', 'lensometria_formula_lejos_derecho_prisma', 'lensometria_formula_lejos_izquierdo_prisma', 'lensometria_formula_cerca_derecho_esfera', 'lensometria_formula_cerca_izquierdo_esfera', 'lensometria_formula_cerca_derecho_cilindro', 'lensometria_formula_cerca_izquierdo_cilindro', 'lensometria_formula_cerca_derecho_eje', 'lensometria_formula_cerca_izquierdo_eje', 'lensometria_formula_cerca_derecho_adicion', 'lensometria_formula_cerca_izquierdo_adicion', 'lensometria_observaciones',
    // AGUDEZA VISUAL
    'lejos_test_usado', 'sin_correccion_lejos_derecho', 'sin_correccion_lejos_izquierdo', 'sin_correccion_lejos_ambos', 'sin_correccion_cerca_derecho', 'sin_correccion_cerca_izquierdo', 'sin_correccion_cerca_observacion', 'con_correccion_lejos_derecho', 'con_correccion_lejos_izquierdo', 'con_correccion_lejos_ambos', 'con_correccion_cerca_derecho', 'con_correccion_cerca_izquierdo', 'con_correccion_cerca_observacion', 'cerca_test_usado', 'pin_hole_lejos_derecho', 'pin_hole_lejos_izquierdo',
    // EXAMEN MOTOR - Orden según imagen
    'examen_motor_mano_dominante', 'examen_motor_ojo_dominante', 'examen_motor_punto_proximo_valor', 'examen_motor_dp_lejos', 'examen_motor_dp_cerca', 'examen_motor_ducciones_derecho', 'examen_motor_ducciones_izquierdo', 'examen_motor_kappa_derecho', 'examen_motor_kappa_izquierdo',
    // Versiones ojo derecho (10-15)
    'versiones-derecho-top-left', 'versiones-derecho-top-right', 'versiones-derecho-left', 'versiones-derecho-right', 'versiones-derecho-bottom-left', 'versiones-derecho-bottom-right',
    // Versiones ojo izquierdo (16-21)
    'versiones-izquierdo-top-left', 'versiones-izquierdo-top-right', 'versiones-izquierdo-left', 'versiones-izquierdo-right', 'versiones-izquierdo-bottom-left', 'versiones-izquierdo-bottom-right', 'examen_motor_hirschberg',
    // Medición de Desviación
    'examen_motor_test_utilizado', 'examen_motor_cover_test_con_correccion_horizontal', 'examen_motor_cover_test_con_correccion_vertical', 'examen_motor_cover_test_sin_correccion_horizontal', 'examen_motor_cover_test_sin_correccion_vertical', 'examen_motor_prisma_con_correccion_horizontal', 'examen_motor_prisma_con_correccion_vertical', 'examen_motor_prisma_sin_correccion_horizontal', 'examen_motor_prisma_sin_correccion_vertical', 'examen_motor_observaciones',
    // Test de Color
    'examen_motor_por_confirmar_derecho', 'examen_motor_por_confirmar_izquierdo',
    // Estereopsis
    'examen_motor_estereopsis_tipo', 'examen_motor_estereopsis_resultado',
    // EXAMEN REFRACTIVO - Orden según imagen (números escritos)
    // Keratometria (1-10)
    'examen_refractivo_keratometria_derecho_plano', 'examen_refractivo_keratometria_derecho_curvo', 'examen_refractivo_keratometria_derecho_eje', 'examen_refractivo_keratometria_izquierdo_plano', 'examen_refractivo_keratometria_izquierdo_curvo', 'examen_refractivo_keratometria_izquierdo_eje', 'examen_refractivo_keratometria_derecho_miras', 'examen_refractivo_keratometria_izquierdo_miras', 'examen_refractivo_keratometria_derecho_corn', 'examen_refractivo_keratometria_izquierdo_corn',
    // Retinoscopia Estatica (11-18)
    'examen_refractivo_retinoscopia_estatica_derecho_esfera', 'examen_refractivo_retinoscopia_estatica_derecho_cilindro', 'examen_refractivo_retinoscopia_estatica_derecho_eje', 'examen_refractivo_retinoscopia_estatica_izquierdo_esfera', 'examen_refractivo_retinoscopia_estatica_izquierdo_cilindro', 'examen_refractivo_retinoscopia_estatica_izquierdo_eje', 'examen_refractivo_retinoscopia_estatica_derecho_sombras', 'examen_refractivo_retinoscopia_estatica_izquierdo_sombras', 'toggle-retinoscopia',
    // Items 20-39: Retinoscopia Dinamica, Otra Refracción y Subjetivo
    'examen_refractivo_radio_k_1', 'examen_refractivo_radio_k_2', 'examen_refractivo_retinoscopia_dinamica_derecho_esfera', 'examen_refractivo_retinoscopia_dinamica_derecho_cilindro', 'examen_refractivo_retinoscopia_dinamica_derecho_eje', 'examen_refractivo_retinoscopia_dinamica_izquierdo_esfera', 'examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro', 'examen_refractivo_retinoscopia_dinamica_izquierdo_eje', 'examen_refractivo_retinoscopia_dinamica_derecho_sombras', 'examen_refractivo_retinoscopia_dinamica_izquierdo_sombras', 'examen_refractivo_otra_refraccion_derecho_esfera', 'examen_refractivo_otra_refraccion_derecho_cilindro', 'examen_refractivo_otra_refraccion_derecho_eje', 'examen_refractivo_otra_refraccion_izquierdo_esfera', 'examen_refractivo_otra_refraccion_izquierdo_cilindro', 'examen_refractivo_otra_refraccion_izquierdo_eje', 'examen_refractivo_otra_refraccion_derecho_sombras', 'examen_refractivo_otra_refraccion_izquierdo_sombras', 'examen_refractivo_subjetivo_normal', 'examen_refractivo_subjetivo_cycloplejia', 'examen_refractivo_subjetivo_otra', 'examen_refractivo_subjetivo_derecho_esfera', 'examen_refractivo_subjetivo_derecho_cilindro', 'examen_refractivo_subjetivo_derecho_eje', 'examen_refractivo_subjetivo_izquierdo_esfera', 'examen_refractivo_subjetivo_izquierdo_cilindro', 'examen_refractivo_subjetivo_izquierdo_eje', 'examen_refractivo_subjetivo_derecho_av_lejos', 'examen_refractivo_subjetivo_izquierdo_av_lejos', 'examen_refractivo_subjetivo_derecho_add', 'examen_refractivo_subjetivo_izquierdo_add', 'examen_refractivo_subjetivo_derecho_av_cerca', 'examen_refractivo_subjetivo_izquierdo_av_cerca', 'examen_refractivo_subjetivo_derecho_dnp', 'examen_refractivo_subjetivo_izquierdo_dnp', 'examen_refractivo_subjetivo_distancia_al', 'examen_refractivo_subjetivo_derecho_estatica', 'examen_refractivo_subjetivo_izquierdo_estatica', 'examen_refractivo_subjetivo_derecho_dinamica', 'examen_refractivo_subjetivo_izquierdo_dinamica', 'examen_refractivo_subjetivo_derecho_vortice', 'examen_refractivo_subjetivo_derecho_mm', 'examen_refractivo_subjetivo_izquierdo_vortice', 'examen_refractivo_subjetivo_izquierdo_mm',
    // EXAMEN OFTALMOLÓGICO
    'examen_oftalmologico_pupila_derecho', 'examen_oftalmologico_pupila_izquierdo', 'examen_oftalmologico_parpados_derecho', 'examen_oftalmologico_parpados_izquierdo', 'examen_oftalmologico_pelicula_lagrimal_derecho', 'examen_oftalmologico_pelicula_lagrimal_izquierdo', 'examen_oftalmologico_conjuntiva_derecho', 'examen_oftalmologico_conjuntiva_izquierdo', 'examen_oftalmologico_cornea_derecho', 'examen_oftalmologico_cornea_izquierdo', 'examen_oftalmologico_cristalino_derecho', 'examen_oftalmologico_cristalino_izquierdo', 'examen_oftalmologico_camara_anterior_derecho', 'examen_oftalmologico_camara_anterior_izquierdo', 'examen_oftalmologico_iris_derecho', 'examen_oftalmologico_iris_izquierdo', 'examen_oftalmologico_bruckner',
    // OFTALMOSCOPIA
    'oftalmoscopia_derecho_excavacion', 'oftalmoscopia_derecho_descripcion', 'oftalmoscopia_izquierdo_excavacion', 'oftalmoscopia_izquierdo_descripcion',
    // FÓRMULA
    'formula_derecho_esfera', 'formula_derecho_cilindro', 'formula_derecho_eje', 'formula_izquierdo_esfera', 'formula_izquierdo_cilindro', 'formula_izquierdo_eje', 'formula_derecho_av_lejos', 'formula_izquierdo_av_lejos', 'formula_derecho_add', 'formula_izquierdo_add', 'formula_derecho_av_cerca', 'formula_izquierdo_av_cerca', 'formula_derecho_dnp', 'formula_izquierdo_dnp', 'formula_derecho_recomendacion',
    // OBSERVACIONES
    'observaciones',
    // DIAGNÓSTICO
    'diagnostico_codigo_1', 'diagnostico_diagnostico_1', 'diagnostico_descripcion_1', 'diagnostico_ojo_1', 'diagnostico_principal_1', 'diagnostico_codigo_2', 'diagnostico_diagnostico_2', 'diagnostico_descripcion_2', 'diagnostico_ojo_2', 'diagnostico_principal_2', 'diagnostico_codigo_3', 'diagnostico_diagnostico_3', 'diagnostico_descripcion_3', 'diagnostico_ojo_3', 'diagnostico_principal_3', 'diagnostico_codigo_4', 'diagnostico_diagnostico_4', 'diagnostico_descripcion_4', 'diagnostico_ojo_4', 'diagnostico_principal_4', 'diagnostico_codigo_5', 'diagnostico_diagnostico_5', 'diagnostico_descripcion_5', 'diagnostico_ojo_5', 'diagnostico_principal_5'];
    // Mapa de campos a secciones
    this.campoASeccionMap = {
      // DATOS DEL PACIENTE
      'fecha_consulta': 'datosPaciente',
      'fecha_control': 'datosPaciente',
      'hora': 'datosPaciente',
      // CUESTIONARIO
      'motivo_consulta': 'cuestionario',
      'tipo_examen': 'cuestionario',
      'anamnesis': 'cuestionario',
      'ultima_valoracion_optometria': 'cuestionario',
      'ocupacion_profesion': 'cuestionario',
      'antecedentes_familiares': 'cuestionario',
      'antecedentes_personales': 'cuestionario',
      'antecedentes_laborales': 'cuestionario',
      // LENSOMETRÍA
      'lensometria_formula_lejos_derecho_esfera': 'lensometria',
      'lensometria_formula_lejos_derecho_cilindro': 'lensometria',
      'lensometria_formula_lejos_derecho_eje': 'lensometria',
      'lensometria_formula_lejos_derecho_adicion': 'lensometria',
      'lensometria_formula_lejos_derecho_prisma': 'lensometria',
      'lensometria_formula_lejos_izquierdo_esfera': 'lensometria',
      'lensometria_formula_lejos_izquierdo_cilindro': 'lensometria',
      'lensometria_formula_lejos_izquierdo_eje': 'lensometria',
      'lensometria_formula_lejos_izquierdo_adicion': 'lensometria',
      'lensometria_formula_lejos_izquierdo_prisma': 'lensometria',
      'lensometria_formula_cerca_derecho_esfera': 'lensometria',
      'lensometria_formula_cerca_derecho_cilindro': 'lensometria',
      'lensometria_formula_cerca_derecho_eje': 'lensometria',
      'lensometria_formula_cerca_derecho_adicion': 'lensometria',
      'lensometria_formula_cerca_izquierdo_esfera': 'lensometria',
      'lensometria_formula_cerca_izquierdo_cilindro': 'lensometria',
      'lensometria_formula_cerca_izquierdo_eje': 'lensometria',
      'lensometria_formula_cerca_izquierdo_adicion': 'lensometria',
      'lensometria_observaciones': 'lensometria',
      // AGUDEZA VISUAL
      'lejos_test_usado': 'agudezaVisual',
      'sin_correccion_lejos_derecho': 'agudezaVisual',
      'sin_correccion_lejos_izquierdo': 'agudezaVisual',
      'sin_correccion_lejos_ambos': 'agudezaVisual',
      'sin_correccion_cerca_derecho': 'agudezaVisual',
      'sin_correccion_cerca_izquierdo': 'agudezaVisual',
      'sin_correccion_cerca_observacion': 'agudezaVisual',
      'con_correccion_lejos_derecho': 'agudezaVisual',
      'con_correccion_lejos_izquierdo': 'agudezaVisual',
      'con_correccion_lejos_ambos': 'agudezaVisual',
      'con_correccion_cerca_derecho': 'agudezaVisual',
      'con_correccion_cerca_izquierdo': 'agudezaVisual',
      'con_correccion_cerca_observacion': 'agudezaVisual',
      'cerca_test_usado': 'agudezaVisual',
      'pin_hole_lejos_derecho': 'agudezaVisual',
      'pin_hole_lejos_izquierdo': 'agudezaVisual',
      // EXAMEN MOTOR
      'examen_motor_mano_dominante': 'examenMotor',
      'examen_motor_ojo_dominante': 'examenMotor',
      'examen_motor_punto_proximo_valor': 'examenMotor',
      'examen_motor_dp_lejos': 'examenMotor',
      'examen_motor_dp_cerca': 'examenMotor',
      'examen_motor_ducciones_derecho': 'examenMotor',
      'examen_motor_ducciones_izquierdo': 'examenMotor',
      'examen_motor_kappa_derecho': 'examenMotor',
      'examen_motor_kappa_izquierdo': 'examenMotor',
      // Versiones SVG ojo derecho
      'versiones-derecho-top-left': 'examenMotor',
      'versiones-derecho-top-right': 'examenMotor',
      'versiones-derecho-left': 'examenMotor',
      'versiones-derecho-right': 'examenMotor',
      'versiones-derecho-bottom-left': 'examenMotor',
      'versiones-derecho-bottom-right': 'examenMotor',
      // Versiones SVG ojo izquierdo
      'versiones-izquierdo-top-left': 'examenMotor',
      'versiones-izquierdo-top-right': 'examenMotor',
      'versiones-izquierdo-left': 'examenMotor',
      'versiones-izquierdo-right': 'examenMotor',
      'versiones-izquierdo-bottom-left': 'examenMotor',
      'versiones-izquierdo-bottom-right': 'examenMotor',
      'examen_motor_hirschberg': 'examenMotor',
      'examen_motor_test_utilizado': 'examenMotor',
      'examen_motor_cover_test_con_correccion_horizontal': 'examenMotor',
      'examen_motor_cover_test_con_correccion_vertical': 'examenMotor',
      'examen_motor_cover_test_sin_correccion_horizontal': 'examenMotor',
      'examen_motor_cover_test_sin_correccion_vertical': 'examenMotor',
      'examen_motor_prisma_con_correccion_horizontal': 'examenMotor',
      'examen_motor_prisma_con_correccion_vertical': 'examenMotor',
      'examen_motor_prisma_sin_correccion_horizontal': 'examenMotor',
      'examen_motor_prisma_sin_correccion_vertical': 'examenMotor',
      'examen_motor_observaciones': 'examenMotor',
      'examen_motor_por_confirmar_derecho': 'examenMotor',
      'examen_motor_por_confirmar_izquierdo': 'examenMotor',
      'examen_motor_estereopsis_tipo': 'examenMotor',
      'examen_motor_estereopsis_resultado': 'examenMotor',
      // EXAMEN REFRACTIVO
      'examen_refractivo_keratometria_derecho_plano': 'examenRefractivo',
      'examen_refractivo_keratometria_derecho_curvo': 'examenRefractivo',
      'examen_refractivo_keratometria_derecho_eje': 'examenRefractivo',
      'examen_refractivo_keratometria_derecho_miras': 'examenRefractivo',
      'examen_refractivo_keratometria_derecho_corn': 'examenRefractivo',
      'examen_refractivo_keratometria_izquierdo_plano': 'examenRefractivo',
      'examen_refractivo_keratometria_izquierdo_curvo': 'examenRefractivo',
      'examen_refractivo_keratometria_izquierdo_eje': 'examenRefractivo',
      'examen_refractivo_keratometria_izquierdo_miras': 'examenRefractivo',
      'examen_refractivo_keratometria_izquierdo_corn': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_derecho_esfera': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_derecho_cilindro': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_derecho_eje': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_derecho_sombras': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_izquierdo_esfera': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_izquierdo_cilindro': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_izquierdo_eje': 'examenRefractivo',
      'examen_refractivo_retinoscopia_estatica_izquierdo_sombras': 'examenRefractivo',
      'toggle-retinoscopia': 'examenRefractivo',
      // Retinoscopia Dinamica
      'examen_refractivo_radio_k_1': 'examenRefractivo',
      'examen_refractivo_radio_k_2': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_derecho_esfera': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_derecho_cilindro': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_derecho_eje': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_izquierdo_esfera': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_izquierdo_eje': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_derecho_sombras': 'examenRefractivo',
      'examen_refractivo_retinoscopia_dinamica_izquierdo_sombras': 'examenRefractivo',
      // Otra Refracción
      'examen_refractivo_otra_refraccion_derecho_esfera': 'examenRefractivo',
      'examen_refractivo_otra_refraccion_derecho_cilindro': 'examenRefractivo',
      'examen_refractivo_otra_refraccion_derecho_eje': 'examenRefractivo',
      'examen_refractivo_otra_refraccion_izquierdo_esfera': 'examenRefractivo',
      'examen_refractivo_otra_refraccion_izquierdo_cilindro': 'examenRefractivo',
      'examen_refractivo_otra_refraccion_izquierdo_eje': 'examenRefractivo',
      'examen_refractivo_otra_refraccion_derecho_sombras': 'examenRefractivo',
      'examen_refractivo_otra_refraccion_izquierdo_sombras': 'examenRefractivo',
      'examen_refractivo_subjetivo_normal': 'examenRefractivo',
      'examen_refractivo_subjetivo_cycloplejia': 'examenRefractivo',
      'examen_refractivo_subjetivo_otra': 'examenRefractivo',
      'examen_refractivo_subjetivo_distancia_al': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_esfera': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_cilindro': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_eje': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_av_lejos': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_add': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_av_cerca': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_dnp': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_vortice': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_mm': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_estatica': 'examenRefractivo',
      'examen_refractivo_subjetivo_derecho_dinamica': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_esfera': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_cilindro': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_eje': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_av_lejos': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_add': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_av_cerca': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_dnp': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_vortice': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_mm': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_estatica': 'examenRefractivo',
      'examen_refractivo_subjetivo_izquierdo_dinamica': 'examenRefractivo',
      // EXAMEN OFTALMOLÓGICO
      'examen_oftalmologico_pupila_derecho': 'examenOftalmologico',
      'examen_oftalmologico_pupila_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_parpados_derecho': 'examenOftalmologico',
      'examen_oftalmologico_parpados_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_pelicula_lagrimal_derecho': 'examenOftalmologico',
      'examen_oftalmologico_pelicula_lagrimal_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_conjuntiva_derecho': 'examenOftalmologico',
      'examen_oftalmologico_conjuntiva_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_cornea_derecho': 'examenOftalmologico',
      'examen_oftalmologico_cornea_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_cristalino_derecho': 'examenOftalmologico',
      'examen_oftalmologico_cristalino_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_camara_anterior_derecho': 'examenOftalmologico',
      'examen_oftalmologico_camara_anterior_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_iris_derecho': 'examenOftalmologico',
      'examen_oftalmologico_iris_izquierdo': 'examenOftalmologico',
      'examen_oftalmologico_bruckner': 'examenOftalmologico',
      // OFTALMOSCOPIA
      'oftalmoscopia_derecho_excavacion': 'oftalmoscopia',
      'oftalmoscopia_derecho_descripcion': 'oftalmoscopia',
      'oftalmoscopia_izquierdo_excavacion': 'oftalmoscopia',
      'oftalmoscopia_izquierdo_descripcion': 'oftalmoscopia',
      // FÓRMULA
      'formula_derecho_esfera': 'formula',
      'formula_derecho_cilindro': 'formula',
      'formula_derecho_eje': 'formula',
      'formula_derecho_av_lejos': 'formula',
      'formula_derecho_add': 'formula',
      'formula_derecho_av_cerca': 'formula',
      'formula_derecho_dnp': 'formula',
      'formula_derecho_recomendacion': 'formula',
      'formula_izquierdo_esfera': 'formula',
      'formula_izquierdo_cilindro': 'formula',
      'formula_izquierdo_eje': 'formula',
      'formula_izquierdo_av_lejos': 'formula',
      'formula_izquierdo_add': 'formula',
      'formula_izquierdo_av_cerca': 'formula',
      'formula_izquierdo_dnp': 'formula',
      // OBSERVACIONES
      'observaciones': 'observaciones',
      // DIAGNÓSTICO
      'diagnostico_codigo_1': 'diagnostico',
      'diagnostico_diagnostico_1': 'diagnostico',
      'diagnostico_descripcion_1': 'diagnostico',
      'diagnostico_ojo_1': 'diagnostico',
      'diagnostico_principal_1': 'diagnostico',
      'diagnostico_codigo_2': 'diagnostico',
      'diagnostico_diagnostico_2': 'diagnostico',
      'diagnostico_descripcion_2': 'diagnostico',
      'diagnostico_ojo_2': 'diagnostico',
      'diagnostico_principal_2': 'diagnostico',
      'diagnostico_codigo_3': 'diagnostico',
      'diagnostico_diagnostico_3': 'diagnostico',
      'diagnostico_descripcion_3': 'diagnostico',
      'diagnostico_ojo_3': 'diagnostico',
      'diagnostico_principal_3': 'diagnostico',
      'diagnostico_codigo_4': 'diagnostico',
      'diagnostico_diagnostico_4': 'diagnostico',
      'diagnostico_descripcion_4': 'diagnostico',
      'diagnostico_ojo_4': 'diagnostico',
      'diagnostico_principal_4': 'diagnostico',
      'diagnostico_codigo_5': 'diagnostico',
      'diagnostico_diagnostico_5': 'diagnostico',
      'diagnostico_descripcion_5': 'diagnostico',
      'diagnostico_ojo_5': 'diagnostico',
      'diagnostico_principal_5': 'diagnostico'
    };
    this.historiaForm = this.createForm();
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pacienteId = params['pacienteId'] ? +params['pacienteId'] : null;
      this.pacienteNombre = params['pacienteNombre'] || '';
      // Cargar datos del paciente desde los parámetros si están disponibles
      this.loadPacienteFromParams(params);
      if (this.pacienteId) {
        this.loadHistoriasClinicas();
        // Solo cargar desde API si no tenemos los datos completos
        if (!this.paciente) {
          this.loadPacienteData();
        }
      }
    });
    // Configurar cálculos automáticos de keratometría después de un breve delay
    setTimeout(() => {
      this.setupKeratometriaCalculations();
      this.setupExamenRefractivoSync();
      this.setupFechaControlSync();
    }, 100);
  }
  createForm() {
    return this.fb.group({
      fecha_consulta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      motivo_consulta: [''],
      fecha_control: [''],
      hora: [''],
      // CUESTIONARIO
      tipo_examen: ['EXAMEN DE OPTROMETRIA'],
      anamnesis: [''],
      ultima_valoracion_optometria: [''],
      ocupacion_profesion: [''],
      // Antecedentes
      antecedentes_familiares: ['NO REFIERE'],
      antecedentes_personales: ['NO REFIERE'],
      antecedentes_laborales: ['NO REFIERE'],
      // LENSOMETRÍA - Campos vacíos por defecto excepto Prisma
      lensometria_formula_lejos_derecho_esfera: [''],
      lensometria_formula_lejos_derecho_cilindro: [''],
      lensometria_formula_lejos_derecho_eje: [''],
      lensometria_formula_lejos_derecho_adicion: [''],
      lensometria_formula_lejos_derecho_prisma: ['NO APLICA'],
      lensometria_formula_lejos_izquierdo_esfera: [''],
      lensometria_formula_lejos_izquierdo_cilindro: [''],
      lensometria_formula_lejos_izquierdo_eje: [''],
      lensometria_formula_lejos_izquierdo_adicion: [''],
      lensometria_formula_lejos_izquierdo_prisma: ['NO APLICA'],
      lensometria_formula_cerca_derecho_esfera: [''],
      lensometria_formula_cerca_derecho_cilindro: [''],
      lensometria_formula_cerca_derecho_eje: [''],
      lensometria_formula_cerca_derecho_adicion: [''],
      lensometria_formula_cerca_izquierdo_esfera: [''],
      lensometria_formula_cerca_izquierdo_cilindro: [''],
      lensometria_formula_cerca_izquierdo_eje: [''],
      lensometria_formula_cerca_izquierdo_adicion: [''],
      lensometria_observaciones: [''],
      // AGUDEZA VISUAL - Estructura de tabla
      lejos_test_usado: ['LETRAS'],
      cerca_test_usado: ['LETRAS'],
      // Lejos - Sin corrección
      sin_correccion_lejos_derecho: ['20/'],
      sin_correccion_lejos_izquierdo: ['20/'],
      sin_correccion_lejos_ambos: ['20/'],
      // Lejos - Con corrección
      con_correccion_lejos_derecho: ['20/'],
      con_correccion_lejos_izquierdo: ['20/'],
      con_correccion_lejos_ambos: ['20/'],
      // Lejos - Pin hole
      pin_hole_lejos_derecho: ['20/'],
      pin_hole_lejos_izquierdo: ['20/'],
      // Cerca - Sin corrección
      sin_correccion_cerca_derecho: ['M'],
      sin_correccion_cerca_izquierdo: ['M'],
      sin_correccion_cerca_ambos: [''],
      sin_correccion_cerca_observacion: [''],
      // Cerca - Con corrección
      con_correccion_cerca_derecho: ['M'],
      con_correccion_cerca_izquierdo: ['M'],
      con_correccion_cerca_ambos: [''],
      con_correccion_cerca_observacion: [''],
      // Cerca - Pin hole
      pin_hole_cerca_derecho: ['20/'],
      pin_hole_cerca_izquierdo: ['20/'],
      // Campos adicionales del formulario
      agudeza_visual_cerca_distancia: ['Cerca'],
      agudeza_visual_cerca_descripcion: ['LETRAS'],
      agudeza_visual_cerca_derecho_sin_correccion: ['M'],
      agudeza_visual_cerca_izquierdo_sin_correccion: ['M'],
      agudeza_visual_cerca_observacion_sin_correccion: [''],
      agudeza_visual_cerca_derecho_con_correccion: ['M'],
      agudeza_visual_cerca_izquierdo_con_correccion: ['M'],
      agudeza_visual_cerca_observacion_con_correccion: [''],
      // EXAMEN MOTOR - Simplificado
      examen_motor_mano_dominante: ['DERECHA'],
      examen_motor_ojo_dominante: ['DERECHO'],
      examen_motor_punto_proximo_valor: ['1 cm'],
      examen_motor_dp_lejos: ['30/30'],
      examen_motor_dp_cerca: ['30/30'],
      examen_motor_ducciones_derecho: ['Normal'],
      examen_motor_ducciones_izquierdo: ['Normal'],
      examen_motor_kappa_derecho: ['0°'],
      examen_motor_kappa_izquierdo: ['0°'],
      examen_motor_hirschberg: ['CENTRADO AMBOS OJOS'],
      examen_motor_test_utilizado: ['COVER TEST PRISMA'],
      examen_motor_cover_test_con_correccion_horizontal: ['ORTHO'],
      examen_motor_cover_test_con_correccion_vertical: ['ORTHO'],
      examen_motor_cover_test_sin_correccion_horizontal: ['ORTHO'],
      examen_motor_cover_test_sin_correccion_vertical: ['ORTHO'],
      examen_motor_prisma_con_correccion_horizontal: ['ORTHO'],
      examen_motor_prisma_con_correccion_vertical: ['ORTHO'],
      examen_motor_prisma_sin_correccion_horizontal: ['ORTHO'],
      examen_motor_prisma_sin_correccion_vertical: ['ORTHO'],
      examen_motor_observaciones: ['TOMADO CON OBJETO REAL'],
      examen_motor_por_confirmar_derecho: ['POR CONFIRMAR'],
      examen_motor_por_confirmar_izquierdo: ['POR CONFIRMAR'],
      examen_motor_estereopsis_tipo: ['TIMUS'],
      examen_motor_estereopsis_resultado: ['-'],
      // FormControls para gráficos de versiones - Ojo Derecho
      examen_motor_versiones_derecho_left: ['✓'],
      examen_motor_versiones_derecho_right: ['✓'],
      examen_motor_versiones_derecho_top_left: ['✓'],
      examen_motor_versiones_derecho_bottom_left: ['✓'],
      examen_motor_versiones_derecho_top_right: ['✓'],
      examen_motor_versiones_derecho_bottom_right: ['✓'],
      // FormControls para gráficos de versiones - Ojo Izquierdo
      examen_motor_versiones_izquierdo_left: ['✓'],
      examen_motor_versiones_izquierdo_right: ['✓'],
      examen_motor_versiones_izquierdo_top_left: ['✓'],
      examen_motor_versiones_izquierdo_bottom_left: ['✓'],
      examen_motor_versiones_izquierdo_top_right: ['✓'],
      examen_motor_versiones_izquierdo_bottom_right: ['✓'],
      // EXAMEN REFRACTIVO - Simplificado
      examen_refractivo_keratometria_derecho_plano: ['42.00'],
      examen_refractivo_keratometria_derecho_curvo: ['43.00'],
      examen_refractivo_keratometria_derecho_eje: ['0'],
      examen_refractivo_keratometria_derecho_miras: ['REDONDA'],
      examen_refractivo_keratometria_derecho_corn: ['-4.00'],
      examen_refractivo_keratometria_izquierdo_plano: ['42.00'],
      examen_refractivo_keratometria_izquierdo_curvo: ['43.00'],
      examen_refractivo_keratometria_izquierdo_eje: ['0'],
      examen_refractivo_keratometria_izquierdo_miras: ['REDONDA'],
      examen_refractivo_keratometria_izquierdo_corn: ['-6.00'],
      examen_refractivo_retinoscopia_estatica_derecho_esfera: [''],
      examen_refractivo_retinoscopia_estatica_derecho_cilindro: [''],
      examen_refractivo_retinoscopia_estatica_derecho_eje: [''],
      examen_refractivo_retinoscopia_estatica_derecho_sombras: ['CLARO Y DEFINIDO'],
      examen_refractivo_retinoscopia_estatica_izquierdo_esfera: [''],
      examen_refractivo_retinoscopia_estatica_izquierdo_cilindro: [''],
      examen_refractivo_retinoscopia_estatica_izquierdo_eje: [''],
      examen_refractivo_retinoscopia_estatica_izquierdo_sombras: ['CLARO Y DEFINIDO'],
      examen_refractivo_retinoscopia_dinamica_derecho_esfera: [''],
      examen_refractivo_retinoscopia_dinamica_derecho_cilindro: [''],
      examen_refractivo_retinoscopia_dinamica_derecho_eje: [''],
      examen_refractivo_retinoscopia_dinamica_derecho_sombras: ['OMITIDA'],
      examen_refractivo_retinoscopia_dinamica_izquierdo_esfera: [''],
      examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro: [''],
      examen_refractivo_retinoscopia_dinamica_izquierdo_eje: [''],
      examen_refractivo_retinoscopia_dinamica_izquierdo_sombras: ['OMITIDA'],
      examen_refractivo_otra_refraccion: [''],
      examen_refractivo_radio_k_1: ['7.67'],
      examen_refractivo_radio_k_2: ['7.85'],
      examen_refractivo_otra_refraccion_derecho_esfera: [''],
      examen_refractivo_otra_refraccion_derecho_cilindro: [''],
      examen_refractivo_otra_refraccion_derecho_eje: [''],
      examen_refractivo_otra_refraccion_derecho_sombras: ['NO APLICA'],
      examen_refractivo_otra_refraccion_izquierdo_esfera: [''],
      examen_refractivo_otra_refraccion_izquierdo_cilindro: [''],
      examen_refractivo_otra_refraccion_izquierdo_eje: [''],
      examen_refractivo_otra_refraccion_izquierdo_sombras: ['NO APLICA'],
      examen_refractivo_subjetivo_normal: ['SI'],
      examen_refractivo_subjetivo_cycloplejia: ['NO'],
      examen_refractivo_subjetivo_otra: ['-'],
      examen_refractivo_subjetivo_distancia_al: ['14'],
      examen_refractivo_subjetivo_derecho_esfera: [''],
      examen_refractivo_subjetivo_derecho_cilindro: [''],
      examen_refractivo_subjetivo_derecho_eje: [''],
      examen_refractivo_subjetivo_derecho_av_lejos: ['20/20'],
      examen_refractivo_subjetivo_derecho_add: [''],
      examen_refractivo_subjetivo_derecho_av_cerca: ['0.50 M'],
      examen_refractivo_subjetivo_derecho_dnp: ['31'],
      examen_refractivo_subjetivo_derecho_vortice: ['+0.00'],
      examen_refractivo_subjetivo_derecho_mm: ['-0.00'],
      examen_refractivo_subjetivo_derecho_estatica: ['20/25'],
      examen_refractivo_subjetivo_derecho_dinamica: ['20/'],
      examen_refractivo_subjetivo_izquierdo_esfera: [''],
      examen_refractivo_subjetivo_izquierdo_cilindro: [''],
      examen_refractivo_subjetivo_izquierdo_eje: [''],
      examen_refractivo_subjetivo_izquierdo_av_lejos: ['20/20'],
      examen_refractivo_subjetivo_izquierdo_add: [''],
      examen_refractivo_subjetivo_izquierdo_av_cerca: ['0.50 M'],
      examen_refractivo_subjetivo_izquierdo_dnp: ['31'],
      examen_refractivo_subjetivo_izquierdo_vortice: ['+0.00'],
      examen_refractivo_subjetivo_izquierdo_mm: ['-0.00'],
      examen_refractivo_subjetivo_izquierdo_estatica: ['20/25'],
      examen_refractivo_subjetivo_izquierdo_dinamica: ['20/'],
      // FormControls adicionales para EXAMEN REFRACTIVO
      examen_refractivo_av_retinoscopia_derecho_estatica: ['20/'],
      examen_refractivo_av_retinoscopia_derecho_dinamica: ['20/'],
      examen_refractivo_av_retinoscopia_izquierdo_estatica: ['20/'],
      examen_refractivo_av_retinoscopia_izquierdo_dinamica: ['20/'],
      // EXAMEN OFTALMOLÓGICO - Simplificado
      examen_oftalmologico_pupila_derecho: ['NORMOREACTIVA'],
      examen_oftalmologico_pupila_izquierdo: ['NORMOREACTIVA'],
      examen_oftalmologico_parpados_derecho: ['SANOS'],
      examen_oftalmologico_parpados_izquierdo: ['SANOS'],
      examen_oftalmologico_pelicula_lagrimal_derecho: ['ESTABLE'],
      examen_oftalmologico_pelicula_lagrimal_izquierdo: ['ESTABLE'],
      examen_oftalmologico_conjuntiva_derecho: ['HIPEREMIA 1° GENERALIZADA'],
      examen_oftalmologico_conjuntiva_izquierdo: ['HIPEREMIA 1° GENERALIZADA'],
      examen_oftalmologico_cornea_derecho: ['TRANSPARENTE'],
      examen_oftalmologico_cornea_izquierdo: ['TRANSPARENTE'],
      examen_oftalmologico_cristalino_derecho: ['TRANSPARENTE'],
      examen_oftalmologico_cristalino_izquierdo: ['TRANSPARENTE'],
      examen_oftalmologico_camara_anterior_derecho: ['VAN HERICK IV'],
      examen_oftalmologico_camara_anterior_izquierdo: ['VAN HERICK IV'],
      examen_oftalmologico_iris_derecho: ['CAFÉ'],
      examen_oftalmologico_iris_izquierdo: ['CAFÉ'],
      examen_oftalmologico_bruckner: ['SIMÉTRICO'],
      // OFTALMOSCOPIA - Simplificado
      oftalmoscopia_derecho_excavacion: [0.3],
      oftalmoscopia_derecho_descripcion: ['FONDO DE OJO NARANJA ROJIZO, RELACIÓN ARTERIA VENA 2/3, FIJACIÓN CENTRAL Y ESTABLE CON BRILLO FOVEOLAR PRESENTE'],
      oftalmoscopia_izquierdo_excavacion: [0.3],
      oftalmoscopia_izquierdo_descripcion: ['FONDO DE OJO NARANJA ROJIZO, RELACIÓN ARTERIA VENA 2/3, FIJACIÓN CENTRAL Y ESTABLE CON BRILLO FOVEOLAR PRESENTE'],
      // FÓRMULA - Simplificado
      formula_derecho_esfera: ['N'],
      formula_derecho_cilindro: ['-'],
      formula_derecho_eje: ['-0'],
      formula_derecho_av_lejos: ['20/20'],
      formula_derecho_add: ['+'],
      formula_derecho_av_cerca: ['0,50 M'],
      formula_derecho_dnp: [31],
      formula_derecho_recomendacion: [''],
      formula_izquierdo_esfera: ['N'],
      formula_izquierdo_cilindro: ['-'],
      formula_izquierdo_eje: ['-0'],
      formula_izquierdo_av_lejos: ['20/20'],
      formula_izquierdo_add: ['+'],
      formula_izquierdo_av_cerca: ['0,50 M'],
      formula_izquierdo_dnp: [31],
      formula_izquierdo_recomendacion: [''],
      // OBSERVACIONES
      observaciones: ['EXAMEN MOTOR NORMAL, EXAMEN ESTERNO NORMAL Y EXAMEN FOTALMOLOGICO NORMAL.'],
      // DIAGNÓSTICO - Simplificado
      diagnostico: this.fb.array([]),
      diagnostico_seguridad: ['NO'],
      diagnostico_maltrato: ['no'],
      diagnostico_maltrato_x: [true],
      diagnostico_violencia: ['no'],
      diagnostico_violencia_x: [true],
      // Campos individuales de diagnóstico
      diagnostico_codigo_1: [''],
      diagnostico_diagnostico_1: [''],
      diagnostico_descripcion_1: [''],
      diagnostico_ojo_1: [''],
      diagnostico_principal_1: [''],
      diagnostico_codigo_2: [''],
      diagnostico_diagnostico_2: [''],
      diagnostico_descripcion_2: [''],
      diagnostico_ojo_2: [''],
      diagnostico_principal_2: [''],
      diagnostico_codigo_3: [''],
      diagnostico_diagnostico_3: [''],
      diagnostico_descripcion_3: [''],
      diagnostico_ojo_3: [''],
      diagnostico_principal_3: [''],
      diagnostico_codigo_4: [''],
      diagnostico_diagnostico_4: [''],
      diagnostico_descripcion_4: [''],
      diagnostico_ojo_4: [''],
      diagnostico_principal_4: [''],
      diagnostico_codigo_5: [''],
      diagnostico_diagnostico_5: [''],
      diagnostico_descripcion_5: [''],
      diagnostico_ojo_5: [''],
      diagnostico_principal_5: ['']
    });
  }
  loadHistoriasClinicas() {
    if (!this.pacienteId) return;
    this.historiasClinicasService.getHistoriasClinicas(this.pacienteId).subscribe({
      next: data => {
        if (Array.isArray(data)) {
          this.historias = data;
        } else if (data && Array.isArray(data.data)) {
          this.historias = data.data;
        } else {
          this.historias = [];
        }
      },
      error: error => {
        console.error('Error loading historias clinicas:', error);
        // Solo mostrar error si no es un error de respuesta vacía
        if (error.status !== 200) {
          this.toastService.showError('Error al cargar historias clínicas');
        } else {
          // Si es status 200 pero hay error, probablemente es respuesta vacía
          this.historias = [];
        }
      }
    });
  }
  loadPacienteFromParams(params) {
    // Intentar extraer datos del paciente desde los parámetros de la ruta
    const pacienteData = {
      id: this.pacienteId || undefined,
      nombre: params['pacienteNombre'] || params['nombre'] || '',
      apellidos: params['pacienteApellidos'] || params['apellidos'] || '',
      documento: params['pacienteDocumento'] || params['documento'] || '',
      tipo_documento: params['pacienteTipoDocumento'] || params['tipo_documento'] || '',
      genero: params['pacienteGenero'] || params['genero'] || '',
      fecha_nacimiento: params['pacienteFechaNacimiento'] || params['fecha_nacimiento'] || '',
      telefono: params['pacienteTelefono'] || params['telefono'] || '',
      email: params['pacienteEmail'] || params['email'] || '',
      rh: params['pacienteRH'] || params['rh'] || '',
      nombre_acudiente: params['pacienteAcudiente'] || params['nombre_acudiente'] || ''
    };
    // Si tenemos al menos el ID y nombre, crear el objeto paciente
    if (pacienteData.id && (pacienteData.nombre || pacienteData.apellidos)) {
      this.paciente = pacienteData;
    }
  }
  loadPacienteData() {
    if (this.pacienteId) {
      this.pacientesService.getPacienteById(this.pacienteId).subscribe({
        next: response => {
          // Los datos vienen dentro de un objeto 'data'
          const paciente = response.data || response;
          this.paciente = paciente;
        },
        error: error => {
          console.error('Error al cargar datos del paciente:', error);
          this.toastService.showError('Error al cargar los datos del paciente');
        }
      });
    }
  }
  calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) return '-';
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || mes === 0 && hoy.getDate() < nacimiento.getDate()) {
      edad--;
    }
    return edad >= 0 ? `${edad} años` : '-';
  }
  isHistoriaEditable(historia) {
    const state = this.computeHistoriaEditState(historia);
    return state.isEditable;
  }
  getHistoriaEditableSummary(historia) {
    const {
      isEditable,
      createdAt,
      editableUntil
    } = this.computeHistoriaEditState(historia);
    if (isEditable) {
      if (editableUntil) {
        return `Editable hasta ${this.formatDateTime(editableUntil)}`;
      }
      return 'Editable';
    }
    if (createdAt) {
      return `No editable (creada el ${this.formatDateTime(createdAt)})`;
    }
    return 'No editable (sin fecha de creación)';
  }
  computeHistoriaEditState(historia) {
    const createdAt = this.parseDateTimeString(historia.created_at) ?? this.parseDateTimeString(historia.fecha_consulta);
    const editableUntil = createdAt ? new Date(createdAt.getTime() + this.EDIT_WINDOW_MS) : null;
    const now = new Date();
    const isEditable = editableUntil ? now.getTime() <= editableUntil.getTime() : true;
    return {
      isEditable,
      createdAt,
      editableUntil
    };
  }
  parseDateTimeString(dateTime) {
    if (!dateTime) {
      return null;
    }
    const trimmed = dateTime.trim();
    let parsed = new Date(trimmed);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
    parsed = new Date(trimmed.replace(' ', 'T'));
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
    return null;
  }
  formatDateTime(date) {
    if (!date) {
      return 'fecha desconocida';
    }
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }
  updateSelectedHistoriaEditState(historia) {
    const {
      isEditable,
      createdAt,
      editableUntil
    } = this.computeHistoriaEditState(historia);
    this.selectedHistoriaEditable = isEditable;
    this.selectedHistoriaCreatedAt = createdAt;
    this.selectedHistoriaEditableUntil = editableUntil;
    if (isEditable) {
      if (editableUntil) {
        this.selectedHistoriaEditMessage = `Esta historia clínica puede editarse hasta ${this.formatDateTime(editableUntil)}.`;
      } else {
        this.selectedHistoriaEditMessage = 'Esta historia clínica se puede editar.';
      }
    } else {
      this.selectedHistoriaEditMessage = '';
    }
  }
  showCreateFormModal() {
    this.isEditing = false;
    this.editingHistoriaId = null;
    this.selectedHistoriaEditable = false;
    this.selectedHistoriaEditMessage = '';
    this.selectedHistoriaEditableUntil = null;
    this.selectedHistoriaCreatedAt = null;
    // Crear un nuevo formulario para asegurar que esté limpio
    this.historiaForm = this.createForm();
    // Obtener fecha local (sin conversión UTC para evitar problemas de zona horaria)
    const fechaConsulta = this.getFechaLocal();
    const fechaControl = this.calcularFechaControl(fechaConsulta);
    this.historiaForm.patchValue({
      fecha_consulta: fechaConsulta,
      fecha_control: fechaControl,
      // CUESTIONARIO
      tipo_examen: 'EXAMEN DE OPTROMETRIA',
      // Antecedentes
      antecedentes_familiares: 'NO REFIERE',
      antecedentes_personales: 'NO REFIERE',
      antecedentes_laborales: 'NO REFIERE',
      // LENSOMETRÍA - Campos vacíos por defecto excepto Prisma
      lensometria_formula_lejos_derecho_esfera: '',
      lensometria_formula_lejos_derecho_cilindro: '',
      lensometria_formula_lejos_derecho_eje: '',
      lensometria_formula_lejos_derecho_adicion: '',
      lensometria_formula_lejos_derecho_prisma: 'NO APLICA',
      lensometria_formula_lejos_izquierdo_esfera: '',
      lensometria_formula_lejos_izquierdo_cilindro: '',
      lensometria_formula_lejos_izquierdo_eje: '',
      lensometria_formula_lejos_izquierdo_adicion: '',
      lensometria_formula_lejos_izquierdo_prisma: 'NO APLICA',
      lensometria_formula_cerca_derecho_esfera: '',
      lensometria_formula_cerca_derecho_cilindro: '',
      lensometria_formula_cerca_derecho_eje: '',
      lensometria_formula_cerca_derecho_adicion: '',
      lensometria_formula_cerca_izquierdo_esfera: '',
      lensometria_formula_cerca_izquierdo_cilindro: '',
      lensometria_formula_cerca_izquierdo_eje: '',
      lensometria_formula_cerca_izquierdo_adicion: '',
      // AGUDEZA VISUAL
      lejos_test_usado: 'LETRAS',
      cerca_test_usado: 'LETRAS',
      sin_correccion_lejos_derecho: '20/',
      sin_correccion_lejos_izquierdo: '20/',
      sin_correccion_lejos_ambos: '20/',
      sin_correccion_cerca_derecho: 'M',
      sin_correccion_cerca_izquierdo: 'M',
      sin_correccion_cerca_observacion: '',
      con_correccion_lejos_derecho: '20/',
      con_correccion_lejos_izquierdo: '20/',
      con_correccion_lejos_ambos: '20/',
      con_correccion_cerca_derecho: 'M',
      con_correccion_cerca_izquierdo: 'M',
      con_correccion_cerca_observacion: '',
      pin_hole_lejos_derecho: '20/',
      pin_hole_lejos_izquierdo: '20/',
      agudeza_visual_cerca_distancia: 'Cerca',
      agudeza_visual_cerca_descripcion: 'LETRAS',
      agudeza_visual_cerca_sin_correccion_derecho: 'M',
      agudeza_visual_cerca_sin_correccion_izquierdo: 'M',
      agudeza_visual_cerca_sin_correccion_ambos: '',
      agudeza_visual_cerca_con_correccion_derecho: 'M',
      agudeza_visual_cerca_con_correccion_izquierdo: 'M',
      agudeza_visual_cerca_con_correccion_ambos: '',
      agudeza_visual_cerca_pin_hole_derecho: '20/20',
      agudeza_visual_cerca_pin_hole_izquierdo: '20/20',
      // Campos adicionales para las filas de cerca
      // EXAMEN MOTOR
      examen_motor_mano_dominante: 'DERECHA',
      examen_motor_ojo_dominante: 'DERECHO',
      examen_motor_punto_proximo_valor: '1 cm',
      examen_motor_dp_lejos: '30/30',
      examen_motor_dp_cerca: '30/30',
      examen_motor_ducciones_derecho: 'Normal',
      examen_motor_ducciones_izquierdo: 'Normal',
      examen_motor_kappa_derecho: '0°',
      examen_motor_kappa_izquierdo: '0°',
      examen_motor_hirschberg: 'CENTRADO AMBOS OJOS',
      examen_motor_test_utilizado: 'COVER TEST PRISMA',
      examen_motor_cover_test_con_correccion_horizontal: 'ORTHO',
      examen_motor_cover_test_con_correccion_vertical: 'ORTHO',
      examen_motor_cover_test_sin_correccion_horizontal: 'ORTHO',
      examen_motor_cover_test_sin_correccion_vertical: 'ORTHO',
      examen_motor_prisma_con_correccion_horizontal: 'ORTHO',
      examen_motor_prisma_con_correccion_vertical: 'ORTHO',
      examen_motor_prisma_sin_correccion_horizontal: 'ORTHO',
      examen_motor_prisma_sin_correccion_vertical: 'ORTHO',
      examen_motor_observaciones: 'TOMADO CON OBJETO REAL',
      examen_motor_por_confirmar_derecho: 'POR CONFIRMAR',
      examen_motor_por_confirmar_izquierdo: 'POR CONFIRMAR',
      examen_motor_estereopsis_tipo: 'TIMUS',
      examen_motor_estereopsis_resultado: '-',
      // EXAMEN REFRACTIVO
      examen_refractivo_keratometria_derecho_plano: '42.00',
      examen_refractivo_keratometria_derecho_curvo: '43.00',
      examen_refractivo_keratometria_derecho_eje: '0',
      examen_refractivo_keratometria_derecho_miras: 'REDONDA',
      examen_refractivo_keratometria_derecho_corn: '-4.00',
      examen_refractivo_keratometria_izquierdo_plano: '42.00',
      examen_refractivo_keratometria_izquierdo_curvo: '43.00',
      examen_refractivo_keratometria_izquierdo_eje: '0',
      examen_refractivo_keratometria_izquierdo_miras: 'REDONDA',
      examen_refractivo_keratometria_izquierdo_corn: '-6.00',
      examen_refractivo_retinoscopia_estatica_derecho_esfera: '',
      examen_refractivo_retinoscopia_estatica_derecho_cilindro: '',
      examen_refractivo_retinoscopia_estatica_derecho_eje: '',
      examen_refractivo_retinoscopia_estatica_derecho_sombras: 'CLARO Y DEFINIDO',
      examen_refractivo_retinoscopia_estatica_izquierdo_esfera: '',
      examen_refractivo_retinoscopia_estatica_izquierdo_cilindro: '',
      examen_refractivo_retinoscopia_estatica_izquierdo_eje: '',
      examen_refractivo_retinoscopia_estatica_izquierdo_sombras: 'CLARO Y DEFINIDO',
      examen_refractivo_retinoscopia_dinamica_derecho_esfera: '',
      examen_refractivo_retinoscopia_dinamica_derecho_cilindro: '',
      examen_refractivo_retinoscopia_dinamica_derecho_eje: '',
      examen_refractivo_retinoscopia_dinamica_derecho_sombras: 'OMITIDA',
      examen_refractivo_retinoscopia_dinamica_izquierdo_esfera: '',
      examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro: '',
      examen_refractivo_retinoscopia_dinamica_izquierdo_eje: '',
      examen_refractivo_retinoscopia_dinamica_izquierdo_sombras: 'OMITIDA',
      examen_refractivo_otra_refraccion: '',
      examen_refractivo_radio_k_1: '7.67',
      examen_refractivo_radio_k_2: '7.85',
      examen_refractivo_otra_refraccion_derecho_esfera: '',
      examen_refractivo_otra_refraccion_derecho_cilindro: '',
      examen_refractivo_otra_refraccion_derecho_eje: '',
      examen_refractivo_otra_refraccion_derecho_sombras: 'NO APLICA',
      examen_refractivo_otra_refraccion_izquierdo_esfera: '',
      examen_refractivo_otra_refraccion_izquierdo_cilindro: '',
      examen_refractivo_otra_refraccion_izquierdo_eje: '',
      examen_refractivo_otra_refraccion_izquierdo_sombras: 'NO APLICA',
      examen_refractivo_subjetivo_normal: 'SI',
      examen_refractivo_subjetivo_cycloplejia: 'NO',
      examen_refractivo_subjetivo_otra: '-',
      examen_refractivo_subjetivo_distancia_al: '14',
      examen_refractivo_subjetivo_derecho_esfera: '',
      examen_refractivo_subjetivo_derecho_cilindro: '',
      examen_refractivo_subjetivo_derecho_eje: '',
      examen_refractivo_subjetivo_derecho_av_lejos: '20/20',
      examen_refractivo_subjetivo_derecho_add: '',
      examen_refractivo_subjetivo_derecho_av_cerca: '0.50 M',
      examen_refractivo_subjetivo_derecho_dnp: '31',
      examen_refractivo_subjetivo_derecho_vortice: '+0.00',
      examen_refractivo_subjetivo_derecho_mm: '-0.00',
      examen_refractivo_subjetivo_derecho_estatica: '20/25',
      examen_refractivo_subjetivo_derecho_dinamica: '20/',
      examen_refractivo_subjetivo_izquierdo_esfera: '',
      examen_refractivo_subjetivo_izquierdo_cilindro: '',
      examen_refractivo_subjetivo_izquierdo_eje: '',
      examen_refractivo_subjetivo_izquierdo_av_lejos: '20/20',
      examen_refractivo_subjetivo_izquierdo_add: '',
      examen_refractivo_subjetivo_izquierdo_av_cerca: '0.50 M',
      examen_refractivo_subjetivo_izquierdo_dnp: '31',
      examen_refractivo_subjetivo_izquierdo_vortice: '+0.00',
      examen_refractivo_subjetivo_izquierdo_mm: '-0.00',
      examen_refractivo_subjetivo_izquierdo_estatica: '20/25',
      examen_refractivo_subjetivo_izquierdo_dinamica: '20/',
      // EXAMEN OFTALMOLÓGICO
      examen_oftalmologico_pupila_derecho: 'NORMOREACTIVA',
      examen_oftalmologico_pupila_izquierdo: 'NORMOREACTIVA',
      examen_oftalmologico_parpados_derecho: 'SANOS',
      examen_oftalmologico_parpados_izquierdo: 'SANOS',
      examen_oftalmologico_pelicula_lagrimal_derecho: 'ESTABLE',
      examen_oftalmologico_pelicula_lagrimal_izquierdo: 'ESTABLE',
      examen_oftalmologico_conjuntiva_derecho: 'HIPEREMIA 1° GENERALIZADA',
      examen_oftalmologico_conjuntiva_izquierdo: 'HIPEREMIA 1° GENERALIZADA',
      examen_oftalmologico_cornea_derecho: 'TRANSPARENTE',
      examen_oftalmologico_cornea_izquierdo: 'TRANSPARENTE',
      examen_oftalmologico_cristalino_derecho: 'TRANSPARENTE',
      examen_oftalmologico_cristalino_izquierdo: 'TRANSPARENTE',
      examen_oftalmologico_camara_anterior_derecho: 'VAN HERICK IV',
      examen_oftalmologico_camara_anterior_izquierdo: 'VAN HERICK IV',
      examen_oftalmologico_iris_derecho: 'CAFÉ',
      examen_oftalmologico_iris_izquierdo: 'CAFÉ',
      examen_oftalmologico_bruckner: 'SIMÉTRICO',
      // OFTALMOSCOPIA
      oftalmoscopia_derecho_excavacion: 0.3,
      oftalmoscopia_derecho_descripcion: 'FONDO DE OJO NARANJA ROJIZO, RELACIÓN ARTERIA VENA 2/3, FIJACIÓN CENTRAL Y ESTABLE CON BRILLO FOVEOLAR PRESENTE',
      oftalmoscopia_izquierdo_excavacion: 0.3,
      oftalmoscopia_izquierdo_descripcion: 'FONDO DE OJO NARANJA ROJIZO, RELACIÓN ARTERIA VENA 2/3, FIJACIÓN CENTRAL Y ESTABLE CON BRILLO FOVEOLAR PRESENTE',
      // FÓRMULA
      formula_derecho_esfera: 'N',
      formula_derecho_cilindro: '-',
      formula_derecho_eje: '-0',
      formula_derecho_av_lejos: '20/20',
      formula_derecho_add: '+',
      formula_derecho_av_cerca: '0,50 M',
      formula_derecho_dnp: 31,
      formula_derecho_recomendacion: '',
      formula_izquierdo_esfera: 'N',
      formula_izquierdo_cilindro: '-',
      formula_izquierdo_eje: '-0',
      formula_izquierdo_av_lejos: '20/20',
      formula_izquierdo_add: '+',
      formula_izquierdo_av_cerca: '0,50 M',
      formula_izquierdo_dnp: 31,
      formula_izquierdo_recomendacion: '',
      // OBSERVACIONES
      observaciones: 'EXAMEN MOTOR NORMAL, EXAMEN ESTERNO NORMAL Y EXAMEN FOTALMOLOGICO NORMAL.',
      // DIAGNÓSTICO
      diagnostico_seguridad: 'NO',
      diagnostico_maltrato: 'no',
      diagnostico_maltrato_x: true,
      diagnostico_violencia: 'no',
      diagnostico_violencia_x: true,
      // Campos individuales de diagnóstico
      diagnostico_codigo_1: '',
      diagnostico_diagnostico_1: '',
      diagnostico_descripcion_1: '',
      diagnostico_ojo_1: '',
      diagnostico_principal_1: '',
      diagnostico_codigo_2: '',
      diagnostico_diagnostico_2: '',
      diagnostico_descripcion_2: '',
      diagnostico_ojo_2: '',
      diagnostico_principal_2: '',
      diagnostico_codigo_3: '',
      diagnostico_diagnostico_3: '',
      diagnostico_descripcion_3: '',
      diagnostico_ojo_3: '',
      diagnostico_principal_3: '',
      diagnostico_codigo_4: '',
      diagnostico_diagnostico_4: '',
      diagnostico_descripcion_4: '',
      diagnostico_ojo_4: '',
      diagnostico_principal_4: '',
      diagnostico_codigo_5: '',
      diagnostico_diagnostico_5: '',
      diagnostico_descripcion_5: '',
      diagnostico_ojo_5: '',
      diagnostico_principal_5: ''
    });
    this.initializeDiagnosticoArray();
    this.showCreateForm = true;
    // Cargar datos del paciente
    this.loadPacienteData();
    // Configurar cálculos automáticos de keratometría después de crear el formulario
    setTimeout(() => {
      this.setupKeratometriaCalculations();
      this.setupExamenRefractivoSync();
      // Sincronizar valores del formulario al SVG para nueva historia
      this.syncVersionesToSVG();
    }, 100);
  }
  editHistoria(historia, mode = 'view') {
    this.editingHistoriaId = historia.id;
    this.updateSelectedHistoriaEditState(historia);
    this.isEditing = this.selectedHistoriaEditable;
    if (mode === 'edit' && !this.selectedHistoriaEditable) {
      this.toastService.showWarning('Esta historia clínica ya no se puede editar porque han pasado más de 24 horas desde su creación.');
    }
    // Console.log para ver qué está devolviendo el backend
    // Desorganizar los datos para el formulario
    const formData = this.flattenDataForForm(historia);
    this.historiaForm.patchValue(formData);
    // Cargar datos del paciente
    this.loadPacienteData();
    // Sincronizar valores del formulario al SVG después de cargar datos
    setTimeout(() => {
      this.syncVersionesToSVG();
    }, 100);
    this.showCreateForm = true;
    // Configurar cálculos automáticos de keratometría después de cargar los datos
    setTimeout(() => {
      this.setupKeratometriaCalculations();
      this.setupExamenRefractivoSync();
    }, 100);
  }
  flattenDataForForm(data) {
    const formData = {
      fecha_consulta: data.fecha_consulta,
      motivo_consulta: data.motivo_consulta,
      observaciones: data.observaciones?.observaciones || ''
    };
    // CUESTIONARIO
    if (data.cuestionario) {
      Object.assign(formData, {
        tipo_examen: data.cuestionario.tipo_examen,
        anamnesis: data.cuestionario.anamnesis,
        ultima_valoracion_optometria: data.cuestionario.ultima_valoracion_optometria,
        ocupacion_profesion: data.cuestionario.ocupacion_profesion,
        antecedentes_familiares: data.cuestionario.antecedentes_familiares,
        antecedentes_personales: data.cuestionario.antecedentes_personales,
        antecedentes_laborales: data.cuestionario.antecedentes_laborales,
        fecha_control: data.cuestionario.fecha_control,
        hora: data.cuestionario.hora
      });
    }
    // LENSOMETRÍA
    if (data.lensometria) {
      Object.assign(formData, {
        lensometria_formula_lejos_derecho_esfera: data.lensometria.formula_lejos_derecho_esfera,
        lensometria_formula_lejos_derecho_cilindro: data.lensometria.formula_lejos_derecho_cilindro,
        lensometria_formula_lejos_derecho_eje: data.lensometria.formula_lejos_derecho_eje,
        lensometria_formula_lejos_derecho_adicion: data.lensometria.formula_lejos_derecho_adicion,
        lensometria_formula_lejos_derecho_prisma: data.lensometria.formula_lejos_derecho_prisma,
        lensometria_formula_lejos_izquierdo_esfera: data.lensometria.formula_lejos_izquierdo_esfera,
        lensometria_formula_lejos_izquierdo_cilindro: data.lensometria.formula_lejos_izquierdo_cilindro,
        lensometria_formula_lejos_izquierdo_eje: data.lensometria.formula_lejos_izquierdo_eje,
        lensometria_formula_lejos_izquierdo_adicion: data.lensometria.formula_lejos_izquierdo_adicion,
        lensometria_formula_lejos_izquierdo_prisma: data.lensometria.formula_lejos_izquierdo_prisma,
        lensometria_formula_cerca_derecho_esfera: data.lensometria.formula_cerca_derecho_esfera,
        lensometria_formula_cerca_derecho_cilindro: data.lensometria.formula_cerca_derecho_cilindro,
        lensometria_formula_cerca_derecho_eje: data.lensometria.formula_cerca_derecho_eje,
        lensometria_formula_cerca_derecho_adicion: data.lensometria.formula_cerca_derecho_adicion,
        lensometria_formula_cerca_izquierdo_esfera: data.lensometria.formula_cerca_izquierdo_esfera,
        lensometria_formula_cerca_izquierdo_cilindro: data.lensometria.formula_cerca_izquierdo_cilindro,
        lensometria_formula_cerca_izquierdo_eje: data.lensometria.formula_cerca_izquierdo_eje,
        lensometria_formula_cerca_izquierdo_adicion: data.lensometria.formula_cerca_izquierdo_adicion,
        lensometria_observaciones: data.lensometria.observaciones
      });
    }
    // AGUDEZA VISUAL
    if (data.agudeza_visual) {
      const av = data.agudeza_visual;
      Object.assign(formData, {
        lejos_test_usado: av.lejos_test_usado || '',
        cerca_test_usado: av.cerca_test_usado || '',
        // Lejos - datos planos del backend
        sin_correccion_lejos_derecho: av.sin_correccion_lejos_derecho || '',
        sin_correccion_lejos_izquierdo: av.sin_correccion_lejos_izquierdo || '',
        sin_correccion_lejos_ambos: av.sin_correccion_lejos_ambos || '',
        con_correccion_lejos_derecho: av.con_correccion_lejos_derecho || '',
        con_correccion_lejos_izquierdo: av.con_correccion_lejos_izquierdo || '',
        con_correccion_lejos_ambos: av.con_correccion_lejos_ambos || '',
        pin_hole_lejos_derecho: av.pin_hole_lejos_derecho || '',
        pin_hole_lejos_izquierdo: av.pin_hole_lejos_izquierdo || '',
        // Cerca - datos planos del backend
        sin_correccion_cerca_derecho: av.sin_correccion_cerca_derecho || '',
        sin_correccion_cerca_izquierdo: av.sin_correccion_cerca_izquierdo || '',
        sin_correccion_cerca_ambos: av.sin_correccion_cerca_ambos || '',
        sin_correccion_cerca_observacion: av.sin_correccion_cerca_observacion || '',
        con_correccion_cerca_derecho: av.con_correccion_cerca_derecho || '',
        con_correccion_cerca_izquierdo: av.con_correccion_cerca_izquierdo || '',
        con_correccion_cerca_ambos: av.con_correccion_cerca_ambos || '',
        con_correccion_cerca_observacion: av.con_correccion_cerca_observacion || '',
        pin_hole_cerca_derecho: av.pin_hole_cerca_derecho || '',
        pin_hole_cerca_izquierdo: av.pin_hole_cerca_izquierdo || '',
        // Campos adicionales
        agudeza_visual_cerca_distancia: av.cerca_distancia || '',
        agudeza_visual_cerca_descripcion: av.cerca_descripcion || '',
        agudeza_visual_cerca_derecho_sin_correccion: av.cerca_derecho_sin_correccion || '',
        agudeza_visual_cerca_izquierdo_sin_correccion: av.cerca_izquierdo_sin_correccion || '',
        agudeza_visual_cerca_observacion_sin_correccion: av.cerca_observacion_sin_correccion || '',
        agudeza_visual_cerca_derecho_con_correccion: av.cerca_derecho_con_correccion || '',
        agudeza_visual_cerca_izquierdo_con_correccion: av.cerca_izquierdo_con_correccion || '',
        agudeza_visual_cerca_observacion_con_correccion: av.cerca_observacion_con_correccion || ''
      });
    }
    // EXAMEN MOTOR
    if (data.examen_motor) {
      Object.assign(formData, {
        examen_motor_mano_dominante: data.examen_motor.mano_dominante,
        examen_motor_ojo_dominante: data.examen_motor.ojo_dominante,
        examen_motor_punto_proximo_valor: data.examen_motor.punto_proximo_valor,
        examen_motor_dp_lejos: data.examen_motor.dp_lejos,
        examen_motor_dp_cerca: data.examen_motor.dp_cerca,
        examen_motor_ducciones_derecho: data.examen_motor.ducciones_derecho,
        examen_motor_ducciones_izquierdo: data.examen_motor.ducciones_izquierdo,
        examen_motor_kappa_derecho: data.examen_motor.kappa_derecho,
        examen_motor_kappa_izquierdo: data.examen_motor.kappa_izquierdo,
        examen_motor_hirschberg: data.examen_motor.hirschberg,
        examen_motor_test_utilizado: data.examen_motor.test_utilizado,
        examen_motor_cover_test_con_correccion_horizontal: data.examen_motor.cover_test_con_correccion_horizontal,
        examen_motor_cover_test_con_correccion_vertical: data.examen_motor.cover_test_con_correccion_vertical,
        examen_motor_cover_test_sin_correccion_horizontal: data.examen_motor.cover_test_sin_correccion_horizontal,
        examen_motor_cover_test_sin_correccion_vertical: data.examen_motor.cover_test_sin_correccion_vertical,
        examen_motor_prisma_con_correccion_horizontal: data.examen_motor.prisma_con_correccion_horizontal,
        examen_motor_prisma_con_correccion_vertical: data.examen_motor.prisma_con_correccion_vertical,
        examen_motor_prisma_sin_correccion_horizontal: data.examen_motor.prisma_sin_correccion_horizontal,
        examen_motor_prisma_sin_correccion_vertical: data.examen_motor.prisma_sin_correccion_vertical,
        examen_motor_observaciones: data.examen_motor.observaciones,
        examen_motor_por_confirmar_derecho: data.examen_motor.por_confirmar_derecho,
        examen_motor_por_confirmar_izquierdo: data.examen_motor.por_confirmar_izquierdo,
        examen_motor_estereopsis_tipo: data.examen_motor.estereopsis_tipo,
        examen_motor_estereopsis_resultado: data.examen_motor.estereopsis_resultado,
        // Campos de versiones (chulitos verdes)
        examen_motor_versiones_derecho_left: data.examen_motor.versiones_derecho_left || '✓',
        examen_motor_versiones_derecho_right: data.examen_motor.versiones_derecho_right || '✓',
        examen_motor_versiones_derecho_top_left: data.examen_motor.versiones_derecho_top_left || '✓',
        examen_motor_versiones_derecho_bottom_left: data.examen_motor.versiones_derecho_bottom_left || '✓',
        examen_motor_versiones_derecho_top_right: data.examen_motor.versiones_derecho_top_right || '✓',
        examen_motor_versiones_derecho_bottom_right: data.examen_motor.versiones_derecho_bottom_right || '✓',
        examen_motor_versiones_izquierdo_left: data.examen_motor.versiones_izquierdo_left || '✓',
        examen_motor_versiones_izquierdo_right: data.examen_motor.versiones_izquierdo_right || '✓',
        examen_motor_versiones_izquierdo_top_left: data.examen_motor.versiones_izquierdo_top_left || '✓',
        examen_motor_versiones_izquierdo_bottom_left: data.examen_motor.versiones_izquierdo_bottom_left || '✓',
        examen_motor_versiones_izquierdo_top_right: data.examen_motor.versiones_izquierdo_top_right || '✓',
        examen_motor_versiones_izquierdo_bottom_right: data.examen_motor.versiones_izquierdo_bottom_right || '✓'
      });
    }
    // EXAMEN REFRACTIVO
    if (data.examen_refractivo) {
      const er = data.examen_refractivo;
      Object.assign(formData, {
        // Keratometría derecho - datos planos del backend
        examen_refractivo_keratometria_derecho_plano: er.keratometria_derecho_plano || '',
        examen_refractivo_keratometria_derecho_curvo: er.keratometria_derecho_curvo || '',
        examen_refractivo_keratometria_derecho_eje: er.keratometria_derecho_eje || '',
        examen_refractivo_keratometria_derecho_miras: er.keratometria_derecho_miras || '',
        examen_refractivo_keratometria_derecho_corn: er.keratometria_derecho_corn || '',
        // Keratometría izquierdo - datos planos del backend
        examen_refractivo_keratometria_izquierdo_plano: er.keratometria_izquierdo_plano || '',
        examen_refractivo_keratometria_izquierdo_curvo: er.keratometria_izquierdo_curvo || '',
        examen_refractivo_keratometria_izquierdo_eje: er.keratometria_izquierdo_eje || '',
        examen_refractivo_keratometria_izquierdo_miras: er.keratometria_izquierdo_miras || '',
        examen_refractivo_keratometria_izquierdo_corn: er.keratometria_izquierdo_corn || '',
        // Retinoscopía estática derecho - datos planos del backend
        examen_refractivo_retinoscopia_estatica_derecho_esfera: er.retinoscopia_estatica_derecho_esfera || '',
        examen_refractivo_retinoscopia_estatica_derecho_cilindro: er.retinoscopia_estatica_derecho_cilindro || '',
        examen_refractivo_retinoscopia_estatica_derecho_eje: er.retinoscopia_estatica_derecho_eje || '',
        examen_refractivo_retinoscopia_estatica_derecho_sombras: er.retinoscopia_estatica_derecho_sombras || '',
        // Retinoscopía estática izquierdo - datos planos del backend
        examen_refractivo_retinoscopia_estatica_izquierdo_esfera: er.retinoscopia_estatica_izquierdo_esfera || '',
        examen_refractivo_retinoscopia_estatica_izquierdo_cilindro: er.retinoscopia_estatica_izquierdo_cilindro || '',
        examen_refractivo_retinoscopia_estatica_izquierdo_eje: er.retinoscopia_estatica_izquierdo_eje || '',
        examen_refractivo_retinoscopia_estatica_izquierdo_sombras: er.retinoscopia_estatica_izquierdo_sombras || '',
        // Retinoscopía dinámica derecho - datos planos del backend
        examen_refractivo_retinoscopia_dinamica_derecho_esfera: er.retinoscopia_dinamica_derecho_esfera || '',
        examen_refractivo_retinoscopia_dinamica_derecho_cilindro: er.retinoscopia_dinamica_derecho_cilindro || '',
        examen_refractivo_retinoscopia_dinamica_derecho_eje: er.retinoscopia_dinamica_derecho_eje || '',
        examen_refractivo_retinoscopia_dinamica_derecho_sombras: er.retinoscopia_dinamica_derecho_sombras || '',
        // Retinoscopía dinámica izquierdo - datos planos del backend
        examen_refractivo_retinoscopia_dinamica_izquierdo_esfera: er.retinoscopia_dinamica_izquierdo_esfera || '',
        examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro: er.retinoscopia_dinamica_izquierdo_cilindro || '',
        examen_refractivo_retinoscopia_dinamica_izquierdo_eje: er.retinoscopia_dinamica_izquierdo_eje || '',
        examen_refractivo_retinoscopia_dinamica_izquierdo_sombras: er.retinoscopia_dinamica_izquierdo_sombras || '',
        // Subjetivo derecho - datos planos del backend
        examen_refractivo_subjetivo_derecho_esfera: er.subjetivo_derecho_esfera || '',
        examen_refractivo_subjetivo_derecho_cilindro: er.subjetivo_derecho_cilindro || '',
        examen_refractivo_subjetivo_derecho_eje: er.subjetivo_derecho_eje || '',
        examen_refractivo_subjetivo_derecho_av_lejos: er.subjetivo_derecho_av_lejos || '',
        examen_refractivo_subjetivo_derecho_add: er.subjetivo_derecho_add || '',
        examen_refractivo_subjetivo_derecho_av_cerca: er.subjetivo_derecho_av_cerca || '',
        examen_refractivo_subjetivo_derecho_dnp: er.subjetivo_derecho_dnp || '',
        examen_refractivo_subjetivo_derecho_vortice: er.subjetivo_derecho_vortice || '',
        examen_refractivo_subjetivo_derecho_mm: er.subjetivo_derecho_mm || '',
        examen_refractivo_subjetivo_derecho_estatica: er.subjetivo_derecho_estatica || '',
        examen_refractivo_subjetivo_derecho_dinamica: er.subjetivo_derecho_dinamica || '',
        // Subjetivo izquierdo - datos planos del backend
        examen_refractivo_subjetivo_izquierdo_esfera: er.subjetivo_izquierdo_esfera || '',
        examen_refractivo_subjetivo_izquierdo_cilindro: er.subjetivo_izquierdo_cilindro || '',
        examen_refractivo_subjetivo_izquierdo_eje: er.subjetivo_izquierdo_eje || '',
        examen_refractivo_subjetivo_izquierdo_av_lejos: er.subjetivo_izquierdo_av_lejos || '',
        examen_refractivo_subjetivo_izquierdo_add: er.subjetivo_izquierdo_add || '',
        examen_refractivo_subjetivo_izquierdo_av_cerca: er.subjetivo_izquierdo_av_cerca || '',
        examen_refractivo_subjetivo_izquierdo_dnp: er.subjetivo_izquierdo_dnp || '',
        examen_refractivo_subjetivo_izquierdo_vortice: er.subjetivo_izquierdo_vortice || '',
        examen_refractivo_subjetivo_izquierdo_mm: er.subjetivo_izquierdo_mm || '',
        examen_refractivo_subjetivo_izquierdo_estatica: er.subjetivo_izquierdo_estatica || '',
        examen_refractivo_subjetivo_izquierdo_dinamica: er.subjetivo_izquierdo_dinamica || '',
        // Campos adicionales de examen refractivo
        examen_refractivo_otra_refraccion: er.otra_refraccion || '',
        examen_refractivo_radio_k_1: er.radio_k_1 || '',
        examen_refractivo_radio_k_2: er.radio_k_2 || '',
        examen_refractivo_otra_refraccion_derecho_esfera: er.otra_refraccion_derecho_esfera || '',
        examen_refractivo_otra_refraccion_derecho_cilindro: er.otra_refraccion_derecho_cilindro || '',
        examen_refractivo_otra_refraccion_derecho_eje: er.otra_refraccion_derecho_eje || '',
        examen_refractivo_otra_refraccion_derecho_sombras: er.otra_refraccion_derecho_sombras || '',
        examen_refractivo_otra_refraccion_izquierdo_esfera: er.otra_refraccion_izquierdo_esfera || '',
        examen_refractivo_otra_refraccion_izquierdo_cilindro: er.otra_refraccion_izquierdo_cilindro || '',
        examen_refractivo_otra_refraccion_izquierdo_eje: er.otra_refraccion_izquierdo_eje || '',
        examen_refractivo_otra_refraccion_izquierdo_sombras: er.otra_refraccion_izquierdo_sombras || '',
        examen_refractivo_subjetivo_normal: er.subjetivo_normal || '',
        examen_refractivo_subjetivo_cycloplejia: er.subjetivo_cycloplejia || '',
        examen_refractivo_subjetivo_otra: er.subjetivo_otra || '',
        examen_refractivo_subjetivo_distancia_al: er.subjetivo_distancia_al || ''
      });
    }
    // EXAMEN OFTALMOLÓGICO
    if (data.examen_oftalmologico) {
      Object.assign(formData, {
        examen_oftalmologico_pupila_derecho: data.examen_oftalmologico.pupila_derecho,
        examen_oftalmologico_pupila_izquierdo: data.examen_oftalmologico.pupila_izquierdo,
        examen_oftalmologico_parpados_derecho: data.examen_oftalmologico.parpados_derecho,
        examen_oftalmologico_parpados_izquierdo: data.examen_oftalmologico.parpados_izquierdo,
        examen_oftalmologico_pelicula_lagrimal_derecho: data.examen_oftalmologico.pelicula_lagrimal_derecho,
        examen_oftalmologico_pelicula_lagrimal_izquierdo: data.examen_oftalmologico.pelicula_lagrimal_izquierdo,
        examen_oftalmologico_conjuntiva_derecho: data.examen_oftalmologico.conjuntiva_derecho,
        examen_oftalmologico_conjuntiva_izquierdo: data.examen_oftalmologico.conjuntiva_izquierdo,
        examen_oftalmologico_cornea_derecho: data.examen_oftalmologico.cornea_derecho,
        examen_oftalmologico_cornea_izquierdo: data.examen_oftalmologico.cornea_izquierdo,
        examen_oftalmologico_cristalino_derecho: data.examen_oftalmologico.cristalino_derecho,
        examen_oftalmologico_cristalino_izquierdo: data.examen_oftalmologico.cristalino_izquierdo,
        examen_oftalmologico_camara_anterior_derecho: data.examen_oftalmologico.camara_anterior_derecho,
        examen_oftalmologico_camara_anterior_izquierdo: data.examen_oftalmologico.camara_anterior_izquierdo,
        examen_oftalmologico_iris_derecho: data.examen_oftalmologico.iris_derecho,
        examen_oftalmologico_iris_izquierdo: data.examen_oftalmologico.iris_izquierdo,
        examen_oftalmologico_bruckner: data.examen_oftalmologico.bruckner
      });
    }
    // OFTALMOSCOPIA
    if (data.oftalmoscopia) {
      Object.assign(formData, {
        oftalmoscopia_derecho_excavacion: data.oftalmoscopia.derecho_excavacion,
        oftalmoscopia_derecho_descripcion: data.oftalmoscopia.derecho_descripcion,
        oftalmoscopia_izquierdo_excavacion: data.oftalmoscopia.izquierdo_excavacion,
        oftalmoscopia_izquierdo_descripcion: data.oftalmoscopia.izquierdo_descripcion
      });
    }
    // FÓRMULA FINAL
    if (data.formula_final) {
      Object.assign(formData, {
        formula_derecho_esfera: data.formula_final.derecho_esfera,
        formula_derecho_cilindro: data.formula_final.derecho_cilindro,
        formula_derecho_eje: data.formula_final.derecho_eje,
        formula_derecho_av_lejos: data.formula_final.derecho_av_lejos,
        formula_derecho_add: data.formula_final.derecho_add,
        formula_derecho_av_cerca: data.formula_final.derecho_av_cerca,
        formula_derecho_dnp: data.formula_final.derecho_dnp,
        formula_derecho_recomendacion: data.formula_final.derecho_recomendacion,
        formula_izquierdo_esfera: data.formula_final.izquierdo_esfera,
        formula_izquierdo_cilindro: data.formula_final.izquierdo_cilindro,
        formula_izquierdo_eje: data.formula_final.izquierdo_eje,
        formula_izquierdo_av_lejos: data.formula_final.izquierdo_av_lejos,
        formula_izquierdo_add: data.formula_final.izquierdo_add,
        formula_izquierdo_av_cerca: data.formula_final.izquierdo_av_cerca,
        formula_izquierdo_dnp: data.formula_final.izquierdo_dnp,
        formula_izquierdo_recomendacion: data.formula_final.izquierdo_recomendacion
      });
    }
    // OBSERVACIONES - Ya se asignó correctamente arriba, no sobrescribir
    // DIAGNÓSTICO
    if (data.diagnosticos && Array.isArray(data.diagnosticos)) {
      data.diagnosticos.forEach((diag, index) => {
        const num = index + 1;
        Object.assign(formData, {
          [`diagnostico_codigo_${num}`]: diag.codigo || '',
          [`diagnostico_diagnostico_${num}`]: diag.diagnostico || '',
          [`diagnostico_descripcion_${num}`]: diag.descripcion || '',
          [`diagnostico_ojo_${num}`]: diag.ojo || '',
          [`diagnostico_principal_${num}`]: diag.principal || ''
        });
      });
    }
    return formData;
  }
  saveHistoria() {
    if (this.historiaForm.valid) {
      // Verificar autenticación antes de enviar
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      if (!token || !user) {
        this.toastService.showError('No estás autenticado. Por favor, inicia sesión nuevamente.');
        return;
      }
      // Sincronizar valores del SVG con el formulario antes de guardar
      this.syncVersionesFromSVG();
      const formData = this.historiaForm.value;
      const organizedData = this.organizeDataBySections(formData);
      const historiaData = {
        ...organizedData,
        paciente_id: this.pacienteId
      };
      if (this.isEditing && this.editingHistoriaId) {
        this.historiasClinicasService.updateHistoriaClinicaOrganizada(this.editingHistoriaId, historiaData).subscribe({
          next: () => {
            this.toastService.showSuccess('Historia clínica actualizada exitosamente');
            this.loadHistoriasClinicas();
            this.closeForm();
          },
          error: error => {
            this.toastService.showError('Error al actualizar historia clínica');
            console.error('Error updating historia clinica:', error);
          }
        });
      } else {
        this.historiasClinicasService.createHistoriaClinicaOrganizada(historiaData).subscribe({
          next: () => {
            this.toastService.showSuccess('Historia clínica creada exitosamente');
            this.loadHistoriasClinicas();
            this.closeForm();
          },
          error: error => {
            this.toastService.showError('Error al crear historia clínica');
            console.error('Error creating historia clinica:', error);
          }
        });
      }
    } else {
      this.toastService.showError('Por favor complete todos los campos requeridos');
    }
  }
  organizeDataBySections(formData) {
    return {
      // Datos básicos
      fecha_consulta: formData.fecha_consulta,
      motivo_consulta: formData.motivo_consulta,
      // CUESTIONARIO
      cuestionario: {
        tipo_examen: formData.tipo_examen,
        anamnesis: formData.anamnesis,
        ultima_valoracion_optometria: formData.ultima_valoracion_optometria,
        ocupacion_profesion: formData.ocupacion_profesion,
        antecedentes_familiares: formData.antecedentes_familiares,
        antecedentes_personales: formData.antecedentes_personales,
        antecedentes_laborales: formData.antecedentes_laborales,
        fecha_control: formData.fecha_control,
        hora: formData.hora
      },
      // LENSOMETRÍA
      lensometria: {
        formula_lejos_derecho_esfera: formData.lensometria_formula_lejos_derecho_esfera,
        formula_lejos_derecho_cilindro: formData.lensometria_formula_lejos_derecho_cilindro,
        formula_lejos_derecho_eje: formData.lensometria_formula_lejos_derecho_eje,
        formula_lejos_derecho_adicion: formData.lensometria_formula_lejos_derecho_adicion,
        formula_lejos_derecho_prisma: formData.lensometria_formula_lejos_derecho_prisma,
        formula_lejos_izquierdo_esfera: formData.lensometria_formula_lejos_izquierdo_esfera,
        formula_lejos_izquierdo_cilindro: formData.lensometria_formula_lejos_izquierdo_cilindro,
        formula_lejos_izquierdo_eje: formData.lensometria_formula_lejos_izquierdo_eje,
        formula_lejos_izquierdo_adicion: formData.lensometria_formula_lejos_izquierdo_adicion,
        formula_lejos_izquierdo_prisma: formData.lensometria_formula_lejos_izquierdo_prisma,
        formula_cerca_derecho_esfera: formData.lensometria_formula_cerca_derecho_esfera,
        formula_cerca_derecho_cilindro: formData.lensometria_formula_cerca_derecho_cilindro,
        formula_cerca_derecho_eje: formData.lensometria_formula_cerca_derecho_eje,
        formula_cerca_derecho_adicion: formData.lensometria_formula_cerca_derecho_adicion,
        formula_cerca_izquierdo_esfera: formData.lensometria_formula_cerca_izquierdo_esfera,
        formula_cerca_izquierdo_cilindro: formData.lensometria_formula_cerca_izquierdo_cilindro,
        formula_cerca_izquierdo_eje: formData.lensometria_formula_cerca_izquierdo_eje,
        formula_cerca_izquierdo_adicion: formData.lensometria_formula_cerca_izquierdo_adicion,
        observaciones: formData.lensometria_observaciones
      },
      // AGUDEZA VISUAL
      agudeza_visual: {
        lejos_test_usado: formData.lejos_test_usado,
        cerca_test_usado: formData.cerca_test_usado,
        sin_correccion_lejos_derecho: formData.sin_correccion_lejos_derecho,
        sin_correccion_lejos_izquierdo: formData.sin_correccion_lejos_izquierdo,
        sin_correccion_lejos_ambos: formData.sin_correccion_lejos_ambos,
        con_correccion_lejos_derecho: formData.con_correccion_lejos_derecho,
        con_correccion_lejos_izquierdo: formData.con_correccion_lejos_izquierdo,
        con_correccion_lejos_ambos: formData.con_correccion_lejos_ambos,
        pin_hole_lejos_derecho: formData.pin_hole_lejos_derecho,
        pin_hole_lejos_izquierdo: formData.pin_hole_lejos_izquierdo,
        sin_correccion_cerca_derecho: formData.sin_correccion_cerca_derecho,
        sin_correccion_cerca_izquierdo: formData.sin_correccion_cerca_izquierdo,
        sin_correccion_cerca_ambos: formData.sin_correccion_cerca_ambos,
        sin_correccion_cerca_observacion: formData.sin_correccion_cerca_observacion,
        con_correccion_cerca_derecho: formData.con_correccion_cerca_derecho,
        con_correccion_cerca_izquierdo: formData.con_correccion_cerca_izquierdo,
        con_correccion_cerca_ambos: formData.con_correccion_cerca_ambos,
        con_correccion_cerca_observacion: formData.con_correccion_cerca_observacion,
        pin_hole_cerca_derecho: formData.pin_hole_cerca_derecho,
        pin_hole_cerca_izquierdo: formData.pin_hole_cerca_izquierdo,
        // Campos adicionales del formulario
        cerca_distancia: formData.agudeza_visual_cerca_distancia,
        cerca_descripcion: formData.agudeza_visual_cerca_descripcion,
        cerca_derecho_sin_correccion: formData.agudeza_visual_cerca_derecho_sin_correccion,
        cerca_izquierdo_sin_correccion: formData.agudeza_visual_cerca_izquierdo_sin_correccion,
        cerca_observacion_sin_correccion: formData.agudeza_visual_cerca_observacion_sin_correccion,
        cerca_derecho_con_correccion: formData.agudeza_visual_cerca_derecho_con_correccion,
        cerca_izquierdo_con_correccion: formData.agudeza_visual_cerca_izquierdo_con_correccion,
        cerca_observacion_con_correccion: formData.agudeza_visual_cerca_observacion_con_correccion
      },
      // EXAMEN MOTOR
      examen_motor: {
        mano_dominante: formData.examen_motor_mano_dominante,
        ojo_dominante: formData.examen_motor_ojo_dominante,
        punto_proximo_valor: formData.examen_motor_punto_proximo_valor,
        dp_lejos: formData.examen_motor_dp_lejos,
        dp_cerca: formData.examen_motor_dp_cerca,
        ducciones_derecho: formData.examen_motor_ducciones_derecho,
        ducciones_izquierdo: formData.examen_motor_ducciones_izquierdo,
        kappa_derecho: formData.examen_motor_kappa_derecho,
        kappa_izquierdo: formData.examen_motor_kappa_izquierdo,
        hirschberg: formData.examen_motor_hirschberg,
        test_utilizado: formData.examen_motor_test_utilizado,
        cover_test_con_correccion_horizontal: formData.examen_motor_cover_test_con_correccion_horizontal,
        cover_test_con_correccion_vertical: formData.examen_motor_cover_test_con_correccion_vertical,
        cover_test_sin_correccion_horizontal: formData.examen_motor_cover_test_sin_correccion_horizontal,
        cover_test_sin_correccion_vertical: formData.examen_motor_cover_test_sin_correccion_vertical,
        prisma_con_correccion_horizontal: formData.examen_motor_prisma_con_correccion_horizontal,
        prisma_con_correccion_vertical: formData.examen_motor_prisma_con_correccion_vertical,
        prisma_sin_correccion_horizontal: formData.examen_motor_prisma_sin_correccion_horizontal,
        prisma_sin_correccion_vertical: formData.examen_motor_prisma_sin_correccion_vertical,
        observaciones: formData.examen_motor_observaciones,
        por_confirmar_derecho: formData.examen_motor_por_confirmar_derecho,
        por_confirmar_izquierdo: formData.examen_motor_por_confirmar_izquierdo,
        estereopsis_tipo: formData.examen_motor_estereopsis_tipo,
        estereopsis_resultado: formData.examen_motor_estereopsis_resultado,
        // Campos de versiones (chulitos verdes)
        versiones_derecho_left: formData.examen_motor_versiones_derecho_left,
        versiones_derecho_right: formData.examen_motor_versiones_derecho_right,
        versiones_derecho_top_left: formData.examen_motor_versiones_derecho_top_left,
        versiones_derecho_bottom_left: formData.examen_motor_versiones_derecho_bottom_left,
        versiones_derecho_top_right: formData.examen_motor_versiones_derecho_top_right,
        versiones_derecho_bottom_right: formData.examen_motor_versiones_derecho_bottom_right,
        versiones_izquierdo_left: formData.examen_motor_versiones_izquierdo_left,
        versiones_izquierdo_right: formData.examen_motor_versiones_izquierdo_right,
        versiones_izquierdo_top_left: formData.examen_motor_versiones_izquierdo_top_left,
        versiones_izquierdo_bottom_left: formData.examen_motor_versiones_izquierdo_bottom_left,
        versiones_izquierdo_top_right: formData.examen_motor_versiones_izquierdo_top_right,
        versiones_izquierdo_bottom_right: formData.examen_motor_versiones_izquierdo_bottom_right
      },
      // EXAMEN REFRACTIVO
      examen_refractivo: {
        keratometria_derecho_plano: formData.examen_refractivo_keratometria_derecho_plano,
        keratometria_derecho_curvo: formData.examen_refractivo_keratometria_derecho_curvo,
        keratometria_derecho_eje: formData.examen_refractivo_keratometria_derecho_eje,
        keratometria_derecho_miras: formData.examen_refractivo_keratometria_derecho_miras,
        keratometria_derecho_corn: formData.examen_refractivo_keratometria_derecho_corn,
        keratometria_derecho_esfera: formData.examen_refractivo_keratometria_derecho_esfera,
        keratometria_derecho_cilindro: formData.examen_refractivo_keratometria_derecho_cilindro,
        keratometria_derecho_sombras: formData.examen_refractivo_keratometria_derecho_sombras,
        keratometria_derecho_av_lejos: formData.examen_refractivo_keratometria_derecho_av_lejos,
        keratometria_derecho_add: formData.examen_refractivo_keratometria_derecho_add,
        keratometria_derecho_av_cerca: formData.examen_refractivo_keratometria_derecho_av_cerca,
        keratometria_derecho_dnp: formData.examen_refractivo_keratometria_derecho_dnp,
        keratometria_derecho_vortice: formData.examen_refractivo_keratometria_derecho_vortice,
        keratometria_derecho_mm: formData.examen_refractivo_keratometria_derecho_mm,
        keratometria_derecho_estatica: formData.examen_refractivo_keratometria_derecho_estatica,
        keratometria_derecho_dinamica: formData.examen_refractivo_keratometria_derecho_dinamica,
        keratometria_derecho_normal: formData.examen_refractivo_keratometria_derecho_normal,
        keratometria_derecho_cycloplejia: formData.examen_refractivo_keratometria_derecho_cycloplejia,
        keratometria_derecho_otra: formData.examen_refractivo_keratometria_derecho_otra,
        keratometria_derecho_distancia_al: formData.examen_refractivo_keratometria_derecho_distancia_al,
        keratometria_derecho_radio_k_1: formData.examen_refractivo_keratometria_derecho_radio_k_1,
        keratometria_derecho_radio_k_2: formData.examen_refractivo_keratometria_derecho_radio_k_2,
        keratometria_derecho_otra_refraccion: formData.examen_refractivo_keratometria_derecho_otra_refraccion,
        keratometria_izquierdo_plano: formData.examen_refractivo_keratometria_izquierdo_plano,
        keratometria_izquierdo_curvo: formData.examen_refractivo_keratometria_izquierdo_curvo,
        keratometria_izquierdo_eje: formData.examen_refractivo_keratometria_izquierdo_eje,
        keratometria_izquierdo_miras: formData.examen_refractivo_keratometria_izquierdo_miras,
        keratometria_izquierdo_corn: formData.examen_refractivo_keratometria_izquierdo_corn,
        keratometria_izquierdo_esfera: formData.examen_refractivo_keratometria_izquierdo_esfera,
        keratometria_izquierdo_cilindro: formData.examen_refractivo_keratometria_izquierdo_cilindro,
        keratometria_izquierdo_sombras: formData.examen_refractivo_keratometria_izquierdo_sombras,
        keratometria_izquierdo_av_lejos: formData.examen_refractivo_keratometria_izquierdo_av_lejos,
        keratometria_izquierdo_add: formData.examen_refractivo_keratometria_izquierdo_add,
        keratometria_izquierdo_av_cerca: formData.examen_refractivo_keratometria_izquierdo_av_cerca,
        keratometria_izquierdo_dnp: formData.examen_refractivo_keratometria_izquierdo_dnp,
        keratometria_izquierdo_vortice: formData.examen_refractivo_keratometria_izquierdo_vortice,
        keratometria_izquierdo_mm: formData.examen_refractivo_keratometria_izquierdo_mm,
        keratometria_izquierdo_estatica: formData.examen_refractivo_keratometria_izquierdo_estatica,
        keratometria_izquierdo_dinamica: formData.examen_refractivo_keratometria_izquierdo_dinamica,
        keratometria_izquierdo_normal: formData.examen_refractivo_keratometria_izquierdo_normal,
        keratometria_izquierdo_cycloplejia: formData.examen_refractivo_keratometria_izquierdo_cycloplejia,
        keratometria_izquierdo_otra: formData.examen_refractivo_keratometria_izquierdo_otra,
        keratometria_izquierdo_distancia_al: formData.examen_refractivo_keratometria_izquierdo_distancia_al,
        keratometria_izquierdo_radio_k_1: formData.examen_refractivo_keratometria_izquierdo_radio_k_1,
        keratometria_izquierdo_radio_k_2: formData.examen_refractivo_keratometria_izquierdo_radio_k_2,
        keratometria_izquierdo_otra_refraccion: formData.examen_refractivo_keratometria_izquierdo_otra_refraccion,
        retinoscopia_estatica_derecho_plano: formData.examen_refractivo_retinoscopia_estatica_derecho_plano,
        retinoscopia_estatica_derecho_curvo: formData.examen_refractivo_retinoscopia_estatica_derecho_curvo,
        retinoscopia_estatica_derecho_eje: formData.examen_refractivo_retinoscopia_estatica_derecho_eje,
        retinoscopia_estatica_derecho_miras: formData.examen_refractivo_retinoscopia_estatica_derecho_miras,
        retinoscopia_estatica_derecho_corn: formData.examen_refractivo_retinoscopia_estatica_derecho_corn,
        retinoscopia_estatica_derecho_esfera: formData.examen_refractivo_retinoscopia_estatica_derecho_esfera,
        retinoscopia_estatica_derecho_cilindro: formData.examen_refractivo_retinoscopia_estatica_derecho_cilindro,
        retinoscopia_estatica_derecho_sombras: formData.examen_refractivo_retinoscopia_estatica_derecho_sombras,
        retinoscopia_estatica_derecho_av_lejos: formData.examen_refractivo_retinoscopia_estatica_derecho_av_lejos,
        retinoscopia_estatica_derecho_add: formData.examen_refractivo_retinoscopia_estatica_derecho_add,
        retinoscopia_estatica_derecho_av_cerca: formData.examen_refractivo_retinoscopia_estatica_derecho_av_cerca,
        retinoscopia_estatica_derecho_dnp: formData.examen_refractivo_retinoscopia_estatica_derecho_dnp,
        retinoscopia_estatica_derecho_vortice: formData.examen_refractivo_retinoscopia_estatica_derecho_vortice,
        retinoscopia_estatica_derecho_mm: formData.examen_refractivo_retinoscopia_estatica_derecho_mm,
        retinoscopia_estatica_derecho_estatica: formData.examen_refractivo_retinoscopia_estatica_derecho_estatica,
        retinoscopia_estatica_derecho_dinamica: formData.examen_refractivo_retinoscopia_estatica_derecho_dinamica,
        retinoscopia_estatica_derecho_normal: formData.examen_refractivo_retinoscopia_estatica_derecho_normal,
        retinoscopia_estatica_derecho_cycloplejia: formData.examen_refractivo_retinoscopia_estatica_derecho_cycloplejia,
        retinoscopia_estatica_derecho_otra: formData.examen_refractivo_retinoscopia_estatica_derecho_otra,
        retinoscopia_estatica_derecho_distancia_al: formData.examen_refractivo_retinoscopia_estatica_derecho_distancia_al,
        retinoscopia_estatica_derecho_radio_k_1: formData.examen_refractivo_retinoscopia_estatica_derecho_radio_k_1,
        retinoscopia_estatica_derecho_radio_k_2: formData.examen_refractivo_retinoscopia_estatica_derecho_radio_k_2,
        retinoscopia_estatica_derecho_otra_refraccion: formData.examen_refractivo_retinoscopia_estatica_derecho_otra_refraccion,
        retinoscopia_estatica_izquierdo_plano: formData.examen_refractivo_retinoscopia_estatica_izquierdo_plano,
        retinoscopia_estatica_izquierdo_curvo: formData.examen_refractivo_retinoscopia_estatica_izquierdo_curvo,
        retinoscopia_estatica_izquierdo_eje: formData.examen_refractivo_retinoscopia_estatica_izquierdo_eje,
        retinoscopia_estatica_izquierdo_miras: formData.examen_refractivo_retinoscopia_estatica_izquierdo_miras,
        retinoscopia_estatica_izquierdo_corn: formData.examen_refractivo_retinoscopia_estatica_izquierdo_corn,
        retinoscopia_estatica_izquierdo_esfera: formData.examen_refractivo_retinoscopia_estatica_izquierdo_esfera,
        retinoscopia_estatica_izquierdo_cilindro: formData.examen_refractivo_retinoscopia_estatica_izquierdo_cilindro,
        retinoscopia_estatica_izquierdo_sombras: formData.examen_refractivo_retinoscopia_estatica_izquierdo_sombras,
        retinoscopia_estatica_izquierdo_av_lejos: formData.examen_refractivo_retinoscopia_estatica_izquierdo_av_lejos,
        retinoscopia_estatica_izquierdo_add: formData.examen_refractivo_retinoscopia_estatica_izquierdo_add,
        retinoscopia_estatica_izquierdo_av_cerca: formData.examen_refractivo_retinoscopia_estatica_izquierdo_av_cerca,
        retinoscopia_estatica_izquierdo_dnp: formData.examen_refractivo_retinoscopia_estatica_izquierdo_dnp,
        retinoscopia_estatica_izquierdo_vortice: formData.examen_refractivo_retinoscopia_estatica_izquierdo_vortice,
        retinoscopia_estatica_izquierdo_mm: formData.examen_refractivo_retinoscopia_estatica_izquierdo_mm,
        retinoscopia_estatica_izquierdo_estatica: formData.examen_refractivo_retinoscopia_estatica_izquierdo_estatica,
        retinoscopia_estatica_izquierdo_dinamica: formData.examen_refractivo_retinoscopia_estatica_izquierdo_dinamica,
        retinoscopia_estatica_izquierdo_normal: formData.examen_refractivo_retinoscopia_estatica_izquierdo_normal,
        retinoscopia_estatica_izquierdo_cycloplejia: formData.examen_refractivo_retinoscopia_estatica_izquierdo_cycloplejia,
        retinoscopia_estatica_izquierdo_otra: formData.examen_refractivo_retinoscopia_estatica_izquierdo_otra,
        retinoscopia_estatica_izquierdo_distancia_al: formData.examen_refractivo_retinoscopia_estatica_izquierdo_distancia_al,
        retinoscopia_estatica_izquierdo_radio_k_1: formData.examen_refractivo_retinoscopia_estatica_izquierdo_radio_k_1,
        retinoscopia_estatica_izquierdo_radio_k_2: formData.examen_refractivo_retinoscopia_estatica_izquierdo_radio_k_2,
        retinoscopia_estatica_izquierdo_otra_refraccion: formData.examen_refractivo_retinoscopia_estatica_izquierdo_otra_refraccion,
        retinoscopia_dinamica_derecho_plano: formData.examen_refractivo_retinoscopia_dinamica_derecho_plano,
        retinoscopia_dinamica_derecho_curvo: formData.examen_refractivo_retinoscopia_dinamica_derecho_curvo,
        retinoscopia_dinamica_derecho_eje: formData.examen_refractivo_retinoscopia_dinamica_derecho_eje,
        retinoscopia_dinamica_derecho_miras: formData.examen_refractivo_retinoscopia_dinamica_derecho_miras,
        retinoscopia_dinamica_derecho_corn: formData.examen_refractivo_retinoscopia_dinamica_derecho_corn,
        retinoscopia_dinamica_derecho_esfera: formData.examen_refractivo_retinoscopia_dinamica_derecho_esfera,
        retinoscopia_dinamica_derecho_cilindro: formData.examen_refractivo_retinoscopia_dinamica_derecho_cilindro,
        retinoscopia_dinamica_derecho_sombras: formData.examen_refractivo_retinoscopia_dinamica_derecho_sombras,
        retinoscopia_dinamica_derecho_av_lejos: formData.examen_refractivo_retinoscopia_dinamica_derecho_av_lejos,
        retinoscopia_dinamica_derecho_add: formData.examen_refractivo_retinoscopia_dinamica_derecho_add,
        retinoscopia_dinamica_derecho_av_cerca: formData.examen_refractivo_retinoscopia_dinamica_derecho_av_cerca,
        retinoscopia_dinamica_derecho_dnp: formData.examen_refractivo_retinoscopia_dinamica_derecho_dnp,
        retinoscopia_dinamica_derecho_vortice: formData.examen_refractivo_retinoscopia_dinamica_derecho_vortice,
        retinoscopia_dinamica_derecho_mm: formData.examen_refractivo_retinoscopia_dinamica_derecho_mm,
        retinoscopia_dinamica_derecho_estatica: formData.examen_refractivo_retinoscopia_dinamica_derecho_estatica,
        retinoscopia_dinamica_derecho_dinamica: formData.examen_refractivo_retinoscopia_dinamica_derecho_dinamica,
        retinoscopia_dinamica_derecho_normal: formData.examen_refractivo_retinoscopia_dinamica_derecho_normal,
        retinoscopia_dinamica_derecho_cycloplejia: formData.examen_refractivo_retinoscopia_dinamica_derecho_cycloplejia,
        retinoscopia_dinamica_derecho_otra: formData.examen_refractivo_retinoscopia_dinamica_derecho_otra,
        retinoscopia_dinamica_derecho_distancia_al: formData.examen_refractivo_retinoscopia_dinamica_derecho_distancia_al,
        retinoscopia_dinamica_derecho_radio_k_1: formData.examen_refractivo_retinoscopia_dinamica_derecho_radio_k_1,
        retinoscopia_dinamica_derecho_radio_k_2: formData.examen_refractivo_retinoscopia_dinamica_derecho_radio_k_2,
        retinoscopia_dinamica_derecho_otra_refraccion: formData.examen_refractivo_retinoscopia_dinamica_derecho_otra_refraccion,
        retinoscopia_dinamica_izquierdo_plano: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_plano,
        retinoscopia_dinamica_izquierdo_curvo: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_curvo,
        retinoscopia_dinamica_izquierdo_eje: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_eje,
        retinoscopia_dinamica_izquierdo_miras: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_miras,
        retinoscopia_dinamica_izquierdo_corn: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_corn,
        retinoscopia_dinamica_izquierdo_esfera: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_esfera,
        retinoscopia_dinamica_izquierdo_cilindro: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro,
        retinoscopia_dinamica_izquierdo_sombras: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_sombras,
        retinoscopia_dinamica_izquierdo_av_lejos: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_av_lejos,
        retinoscopia_dinamica_izquierdo_add: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_add,
        retinoscopia_dinamica_izquierdo_av_cerca: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_av_cerca,
        retinoscopia_dinamica_izquierdo_dnp: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_dnp,
        retinoscopia_dinamica_izquierdo_vortice: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_vortice,
        retinoscopia_dinamica_izquierdo_mm: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_mm,
        retinoscopia_dinamica_izquierdo_estatica: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_estatica,
        retinoscopia_dinamica_izquierdo_dinamica: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_dinamica,
        retinoscopia_dinamica_izquierdo_normal: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_normal,
        retinoscopia_dinamica_izquierdo_cycloplejia: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_cycloplejia,
        retinoscopia_dinamica_izquierdo_otra: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_otra,
        retinoscopia_dinamica_izquierdo_distancia_al: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_distancia_al,
        retinoscopia_dinamica_izquierdo_radio_k_1: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_radio_k_1,
        retinoscopia_dinamica_izquierdo_radio_k_2: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_radio_k_2,
        retinoscopia_dinamica_izquierdo_otra_refraccion: formData.examen_refractivo_retinoscopia_dinamica_izquierdo_otra_refraccion,
        subjetivo_derecho_plano: formData.examen_refractivo_subjetivo_derecho_plano,
        subjetivo_derecho_curvo: formData.examen_refractivo_subjetivo_derecho_curvo,
        subjetivo_derecho_eje: formData.examen_refractivo_subjetivo_derecho_eje,
        subjetivo_derecho_miras: formData.examen_refractivo_subjetivo_derecho_miras,
        subjetivo_derecho_corn: formData.examen_refractivo_subjetivo_derecho_corn,
        subjetivo_derecho_esfera: formData.examen_refractivo_subjetivo_derecho_esfera,
        subjetivo_derecho_cilindro: formData.examen_refractivo_subjetivo_derecho_cilindro,
        subjetivo_derecho_sombras: formData.examen_refractivo_subjetivo_derecho_sombras,
        subjetivo_derecho_av_lejos: formData.examen_refractivo_subjetivo_derecho_av_lejos,
        subjetivo_derecho_add: formData.examen_refractivo_subjetivo_derecho_add,
        subjetivo_derecho_av_cerca: formData.examen_refractivo_subjetivo_derecho_av_cerca,
        subjetivo_derecho_dnp: formData.examen_refractivo_subjetivo_derecho_dnp,
        subjetivo_derecho_vortice: formData.examen_refractivo_subjetivo_derecho_vortice,
        subjetivo_derecho_mm: formData.examen_refractivo_subjetivo_derecho_mm,
        subjetivo_derecho_estatica: formData.examen_refractivo_subjetivo_derecho_estatica,
        subjetivo_derecho_dinamica: formData.examen_refractivo_subjetivo_derecho_dinamica,
        subjetivo_derecho_normal: formData.examen_refractivo_subjetivo_derecho_normal,
        subjetivo_derecho_cycloplejia: formData.examen_refractivo_subjetivo_derecho_cycloplejia,
        subjetivo_derecho_otra: formData.examen_refractivo_subjetivo_derecho_otra,
        subjetivo_derecho_distancia_al: formData.examen_refractivo_subjetivo_derecho_distancia_al,
        subjetivo_derecho_radio_k_1: formData.examen_refractivo_subjetivo_derecho_radio_k_1,
        subjetivo_derecho_radio_k_2: formData.examen_refractivo_subjetivo_derecho_radio_k_2,
        subjetivo_derecho_otra_refraccion: formData.examen_refractivo_subjetivo_derecho_otra_refraccion,
        subjetivo_izquierdo_plano: formData.examen_refractivo_subjetivo_izquierdo_plano,
        subjetivo_izquierdo_curvo: formData.examen_refractivo_subjetivo_izquierdo_curvo,
        subjetivo_izquierdo_eje: formData.examen_refractivo_subjetivo_izquierdo_eje,
        subjetivo_izquierdo_miras: formData.examen_refractivo_subjetivo_izquierdo_miras,
        subjetivo_izquierdo_corn: formData.examen_refractivo_subjetivo_izquierdo_corn,
        subjetivo_izquierdo_esfera: formData.examen_refractivo_subjetivo_izquierdo_esfera,
        subjetivo_izquierdo_cilindro: formData.examen_refractivo_subjetivo_izquierdo_cilindro,
        subjetivo_izquierdo_sombras: formData.examen_refractivo_subjetivo_izquierdo_sombras,
        subjetivo_izquierdo_av_lejos: formData.examen_refractivo_subjetivo_izquierdo_av_lejos,
        subjetivo_izquierdo_add: formData.examen_refractivo_subjetivo_izquierdo_add,
        subjetivo_izquierdo_av_cerca: formData.examen_refractivo_subjetivo_izquierdo_av_cerca,
        subjetivo_izquierdo_dnp: formData.examen_refractivo_subjetivo_izquierdo_dnp,
        subjetivo_izquierdo_vortice: formData.examen_refractivo_subjetivo_izquierdo_vortice,
        subjetivo_izquierdo_mm: formData.examen_refractivo_subjetivo_izquierdo_mm,
        subjetivo_izquierdo_estatica: formData.examen_refractivo_subjetivo_izquierdo_estatica,
        subjetivo_izquierdo_dinamica: formData.examen_refractivo_subjetivo_izquierdo_dinamica,
        subjetivo_izquierdo_normal: formData.examen_refractivo_subjetivo_izquierdo_normal,
        subjetivo_izquierdo_cycloplejia: formData.examen_refractivo_subjetivo_izquierdo_cycloplejia,
        subjetivo_izquierdo_otra: formData.examen_refractivo_subjetivo_izquierdo_otra,
        subjetivo_izquierdo_distancia_al: formData.examen_refractivo_subjetivo_izquierdo_distancia_al,
        subjetivo_izquierdo_radio_k_1: formData.examen_refractivo_subjetivo_izquierdo_radio_k_1,
        subjetivo_izquierdo_radio_k_2: formData.examen_refractivo_subjetivo_izquierdo_radio_k_2,
        subjetivo_izquierdo_otra_refraccion: formData.examen_refractivo_subjetivo_izquierdo_otra_refraccion,
        subjetivo_normal: formData.examen_refractivo_subjetivo_normal,
        subjetivo_cycloplejia: formData.examen_refractivo_subjetivo_cycloplejia,
        subjetivo_otra: formData.examen_refractivo_subjetivo_otra,
        subjetivo_distancia_al: formData.examen_refractivo_subjetivo_distancia_al,
        // Campos adicionales de examen refractivo
        otra_refraccion: formData.examen_refractivo_otra_refraccion,
        radio_k_1: formData.examen_refractivo_radio_k_1,
        radio_k_2: formData.examen_refractivo_radio_k_2,
        otra_refraccion_derecho_esfera: formData.examen_refractivo_otra_refraccion_derecho_esfera,
        otra_refraccion_derecho_cilindro: formData.examen_refractivo_otra_refraccion_derecho_cilindro,
        otra_refraccion_derecho_eje: formData.examen_refractivo_otra_refraccion_derecho_eje,
        otra_refraccion_derecho_sombras: formData.examen_refractivo_otra_refraccion_derecho_sombras,
        otra_refraccion_izquierdo_esfera: formData.examen_refractivo_otra_refraccion_izquierdo_esfera,
        otra_refraccion_izquierdo_cilindro: formData.examen_refractivo_otra_refraccion_izquierdo_cilindro,
        otra_refraccion_izquierdo_eje: formData.examen_refractivo_otra_refraccion_izquierdo_eje,
        otra_refraccion_izquierdo_sombras: formData.examen_refractivo_otra_refraccion_izquierdo_sombras
      },
      // EXAMEN OFTALMOLÓGICO
      examen_oftalmologico: {
        pupila_derecho: formData.examen_oftalmologico_pupila_derecho,
        pupila_izquierdo: formData.examen_oftalmologico_pupila_izquierdo,
        parpados_derecho: formData.examen_oftalmologico_parpados_derecho,
        parpados_izquierdo: formData.examen_oftalmologico_parpados_izquierdo,
        pelicula_lagrimal_derecho: formData.examen_oftalmologico_pelicula_lagrimal_derecho,
        pelicula_lagrimal_izquierdo: formData.examen_oftalmologico_pelicula_lagrimal_izquierdo,
        conjuntiva_derecho: formData.examen_oftalmologico_conjuntiva_derecho,
        conjuntiva_izquierdo: formData.examen_oftalmologico_conjuntiva_izquierdo,
        cornea_derecho: formData.examen_oftalmologico_cornea_derecho,
        cornea_izquierdo: formData.examen_oftalmologico_cornea_izquierdo,
        cristalino_derecho: formData.examen_oftalmologico_cristalino_derecho,
        cristalino_izquierdo: formData.examen_oftalmologico_cristalino_izquierdo,
        camara_anterior_derecho: formData.examen_oftalmologico_camara_anterior_derecho,
        camara_anterior_izquierdo: formData.examen_oftalmologico_camara_anterior_izquierdo,
        iris_derecho: formData.examen_oftalmologico_iris_derecho,
        iris_izquierdo: formData.examen_oftalmologico_iris_izquierdo,
        bruckner: formData.examen_oftalmologico_bruckner
      },
      // OFTALMOSCOPIA
      oftalmoscopia: {
        derecho_excavacion: formData.oftalmoscopia_derecho_excavacion,
        derecho_descripcion: formData.oftalmoscopia_derecho_descripcion,
        izquierdo_excavacion: formData.oftalmoscopia_izquierdo_excavacion,
        izquierdo_descripcion: formData.oftalmoscopia_izquierdo_descripcion
      },
      // FÓRMULA FINAL
      formula_final: {
        derecho_esfera: formData.formula_derecho_esfera,
        derecho_cilindro: formData.formula_derecho_cilindro,
        derecho_eje: formData.formula_derecho_eje,
        derecho_av_lejos: formData.formula_derecho_av_lejos,
        derecho_add: formData.formula_derecho_add,
        derecho_av_cerca: formData.formula_derecho_av_cerca,
        derecho_dnp: formData.formula_derecho_dnp,
        derecho_recomendacion: formData.formula_derecho_recomendacion,
        izquierdo_esfera: formData.formula_izquierdo_esfera,
        izquierdo_cilindro: formData.formula_izquierdo_cilindro,
        izquierdo_eje: formData.formula_izquierdo_eje,
        izquierdo_av_lejos: formData.formula_izquierdo_av_lejos,
        izquierdo_add: formData.formula_izquierdo_add,
        izquierdo_av_cerca: formData.formula_izquierdo_av_cerca,
        izquierdo_dnp: formData.formula_izquierdo_dnp,
        izquierdo_recomendacion: formData.formula_izquierdo_recomendacion
      },
      // OBSERVACIONES
      observaciones: {
        observaciones: formData.observaciones
      },
      // DIAGNÓSTICO
      diagnostico: {
        diagnosticos: [{
          codigo: formData.diagnostico_codigo_1,
          diagnostico: formData.diagnostico_diagnostico_1,
          descripcion: formData.diagnostico_descripcion_1,
          ojo: formData.diagnostico_ojo_1,
          principal: formData.diagnostico_principal_1
        }, {
          codigo: formData.diagnostico_codigo_2,
          diagnostico: formData.diagnostico_diagnostico_2,
          descripcion: formData.diagnostico_descripcion_2,
          ojo: formData.diagnostico_ojo_2,
          principal: formData.diagnostico_principal_2
        }, {
          codigo: formData.diagnostico_codigo_3,
          diagnostico: formData.diagnostico_diagnostico_3,
          descripcion: formData.diagnostico_descripcion_3,
          ojo: formData.diagnostico_ojo_3,
          principal: formData.diagnostico_principal_3
        }, {
          codigo: formData.diagnostico_codigo_4,
          diagnostico: formData.diagnostico_diagnostico_4,
          descripcion: formData.diagnostico_descripcion_4,
          ojo: formData.diagnostico_ojo_4,
          principal: formData.diagnostico_principal_4
        }, {
          codigo: formData.diagnostico_codigo_5,
          diagnostico: formData.diagnostico_diagnostico_5,
          descripcion: formData.diagnostico_descripcion_5,
          ojo: formData.diagnostico_ojo_5,
          principal: formData.diagnostico_principal_5
        }].filter(d => d.codigo || d.diagnostico || d.descripcion) // Solo incluir diagnósticos con datos
      }
    };
  }
  closeForm() {
    this.showCreateForm = false;
    this.isEditing = false;
    this.editingHistoriaId = null;
    this.historiaForm.reset();
    this.selectedHistoriaEditable = false;
    this.selectedHistoriaEditMessage = '';
    this.selectedHistoriaEditableUntil = null;
    this.selectedHistoriaCreatedAt = null;
  }
  toggleSeccion(seccion) {
    this.seccionesDesplegadas[seccion] = !this.seccionesDesplegadas[seccion];
  }
  // Método reutilizable para alternar visibilidad de filas en tablas
  toggleFila(filaKey) {
    this.filasVisibles[filaKey] = !this.filasVisibles[filaKey];
  }
  // Método para verificar si una fila está visible
  isFilaVisible(filaKey) {
    return this.filasVisibles[filaKey] || false;
  }
  volverAPacientes() {
    this.router.navigate(['/pacientes']);
  }
  // Métodos para manejar el array de diagnósticos
  getDiagnosticoArray() {
    return this.historiaForm.get('diagnostico');
  }
  addDiagnostico() {
    const diagnosticoGroup = this.fb.group({
      codigo: [''],
      diagnostico: [''],
      descripcion: [''],
      ojo: [''],
      principal: [false]
    });
    this.getDiagnosticoArray().push(diagnosticoGroup);
  }
  removeDiagnostico(index) {
    this.getDiagnosticoArray().removeAt(index);
  }
  // Método para inicializar diagnósticos vacíos
  initializeDiagnosticoArray() {
    const diagnosticoArray = this.getDiagnosticoArray();
    diagnosticoArray.clear();
    // Agregar 5 diagnósticos vacíos como en la imagen
    for (let i = 0; i < 5; i++) {
      this.addDiagnostico();
    }
  }
  // Métodos para validación y formateo de campos de lensometría
  validateLensometriaField(event) {
    const input = event.target;
    const value = input.value;
    const pattern = /^[+-]?(\d+\.?\d{0,2}|\.\d{1,2})$/;
    if (value && !pattern.test(value)) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }
  formatLensometriaField(event) {
    const input = event.target;
    let value = input.value.trim();
    if (!value) {
      input.classList.remove('invalid');
      return;
    }
    // Remover caracteres no válidos excepto +, -, números y punto
    value = value.replace(/[^+\-0-9.]/g, '');
    // Validar formato
    const pattern = /^[+-]?(\d+\.?\d{0,2}|\.\d{1,2})$/;
    if (!pattern.test(value)) {
      input.classList.add('invalid');
      return;
    }
    // Convertir a número para formateo
    let numValue = parseFloat(value);
    if (isNaN(numValue)) {
      input.classList.add('invalid');
      return;
    }
    // Formatear con 2 decimales
    let formattedValue = numValue.toFixed(2);
    // Agregar signo + si es positivo
    if (numValue > 0) {
      formattedValue = '+' + formattedValue;
    }
    // Actualizar el valor en el input
    input.value = formattedValue;
    input.classList.remove('invalid');
    // Actualizar el FormControl
    const controlName = input.getAttribute('formControlName');
    if (controlName) {
      this.historiaForm.get(controlName)?.setValue(formattedValue);
    }
  }
  // Métodos para formateo específico de campos de esfera
  formatEsferaField(event) {
    const input = event.target;
    let value = input.value.trim();
    if (!value) {
      input.classList.remove('invalid');
      return;
    }
    // Remover caracteres no válidos excepto +, -, números y punto
    value = value.replace(/[^+\-0-9.]/g, '');
    // Validar formato
    const pattern = /^[+-]?(\d+\.?\d{0,2}|\.\d{1,2})$/;
    if (!pattern.test(value)) {
      input.classList.add('invalid');
      return;
    }
    // Convertir a número para formateo
    let numValue = parseFloat(value);
    if (isNaN(numValue)) {
      input.classList.add('invalid');
      return;
    }
    // Verificar si el valor original tenía signo negativo
    const tieneSignoNegativo = value.trim().startsWith('-');
    // Formatear con 2 decimales y agregar signo según corresponda
    // Si tiene signo negativo, mantenerlo; si no, agregar signo +
    let formattedValue = tieneSignoNegativo ? '-' + Math.abs(numValue).toFixed(2) : '+' + Math.abs(numValue).toFixed(2);
    // Actualizar el valor en el input
    input.value = formattedValue;
    input.classList.remove('invalid');
    // Actualizar el FormControl
    const controlName = input.getAttribute('formControlName');
    if (controlName) {
      this.historiaForm.get(controlName)?.setValue(formattedValue);
    }
  }
  // Métodos para formateo específico de campos de cilindro
  formatCilindroField(event) {
    const input = event.target;
    let value = input.value.trim();
    if (!value) {
      input.classList.remove('invalid');
      return;
    }
    // Remover caracteres no válidos excepto +, -, números y punto
    value = value.replace(/[^+\-0-9.]/g, '');
    // Validar formato
    const pattern = /^[+-]?(\d+\.?\d{0,2}|\.\d{1,2})$/;
    if (!pattern.test(value)) {
      input.classList.add('invalid');
      return;
    }
    // Convertir a número para formateo
    let numValue = parseFloat(value);
    if (isNaN(numValue)) {
      input.classList.add('invalid');
      return;
    }
    // Formatear con 2 decimales y siempre agregar signo -
    let formattedValue = '-' + Math.abs(numValue).toFixed(2);
    // Actualizar el valor en el input
    input.value = formattedValue;
    input.classList.remove('invalid');
    // Actualizar el FormControl
    const controlName = input.getAttribute('formControlName');
    if (controlName) {
      this.historiaForm.get(controlName)?.setValue(formattedValue);
    }
  }
  // Métodos para validación y formateo de campos de eje
  validateEjeField(event) {
    const input = event.target;
    const value = input.value;
    const pattern = /^\d+$/;
    if (value && !pattern.test(value)) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }
  formatEjeField(event) {
    const input = event.target;
    let value = input.value.trim();
    if (!value) {
      input.classList.remove('invalid');
      return;
    }
    // Remover caracteres no válidos excepto números
    value = value.replace(/[^0-9]/g, '');
    // Validar que solo contenga números enteros positivos
    const pattern = /^\d+$/;
    if (!pattern.test(value)) {
      input.classList.add('invalid');
      return;
    }
    // Convertir a número para validar que sea entero positivo
    let numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 0) {
      input.classList.add('invalid');
      return;
    }
    // Mantener el valor tal como está (sin signo +, sin decimales)
    input.value = value;
    input.classList.remove('invalid');
    // Actualizar el FormControl
    const controlName = input.getAttribute('formControlName');
    if (controlName) {
      this.historiaForm.get(controlName)?.setValue(value);
    }
  }
  // Métodos para manejar la edición de gráficos de versiones
  onVersionesVClick(event, ojo) {
    const target = event.target;
    const position = target.getAttribute('data-position');
    if (!position) return;
    // Remover clase editing de otros elementos
    const svg = target.closest('svg');
    if (svg) {
      svg.querySelectorAll('.versiones-v.editing').forEach(el => {
        el.classList.remove('editing');
      });
    }
    // Agregar clase editing al elemento actual
    target.classList.add('editing');
    // Crear input temporal para edición
    this.createTemporaryInput(target, ojo, position);
  }
  onVersionesKeyDown(event, ojo, position) {
    // Enter o Espacio para editar
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // Simular click
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      const target = event.target;
      target.dispatchEvent(clickEvent);
    } else if (event.key === 'Tab') {
      // Tab debe funcionar normalmente para navegar
      // El sistema de navegación Tab ya lo maneja automáticamente
    }
  }
  onToggleButtonKeyDown(event, filaKey) {
    // Enter o Espacio para toggle
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleFila(filaKey);
    } else if (event.key === 'Tab') {
      // Tab debe funcionar normalmente para navegar
      // El sistema de navegación Tab ya lo maneja automáticamente
    }
  }
  createTemporaryInput(textElement, ojo, position) {
    const svg = textElement.closest('svg');
    if (!svg) return;
    const rect = textElement.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    // Crear input temporal
    const input = document.createElement('input');
    input.type = 'text';
    input.value = textElement.textContent || '✓';
    input.className = 'versiones-input-temp';
    input.style.cssText = `
      position: absolute;
      left: ${rect.left - svgRect.left}px;
      top: ${rect.top - svgRect.top - 2}px;
      width: 30px;
      height: 20px;
      font-size: 16px;
      font-family: 'Courier New', monospace;
      text-align: center;
      border: 2px solid #0d6efd;
      border-radius: 4px;
      background: white;
      z-index: 1000;
    `;
    // Agregar al contenedor del SVG
    const container = svg.parentElement;
    if (container) {
      container.style.position = 'relative';
      container.appendChild(input);
      // Seleccionar texto y enfocar
      input.focus();
      input.select();
      // Manejar eventos
      input.addEventListener('blur', () => {
        this.saveVersionesValue(input, textElement, ojo, position);
      });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.saveVersionesValue(input, textElement, ojo, position);
        } else if (e.key === 'Escape') {
          this.cancelVersionesEdit(input, textElement);
        }
      });
    }
  }
  saveVersionesValue(input, textElement, ojo, position) {
    let value = input.value.trim();
    // Validar valor (solo permitir -, --, ---, +, ++, +++, ✓)
    const validValues = ['-', '--', '---', '+', '++', '+++', '✓'];
    if (!validValues.includes(value)) {
      value = '✓'; // Valor por defecto si no es válido
    }
    // Actualizar el texto en el SVG
    textElement.textContent = value;
    textElement.classList.remove('editing');
    // Convertir posición de guiones a guiones bajos para coincidir con FormControls
    const positionFormatted = position.replace(/-/g, '_');
    // Actualizar el FormControl correspondiente
    const controlName = `examen_motor_versiones_${ojo}_${positionFormatted}`;
    this.historiaForm.get(controlName)?.setValue(value);
    // Remover input temporal
    input.remove();
  }
  cancelVersionesEdit(input, textElement) {
    textElement.classList.remove('editing');
    input.remove();
  }
  // Función para sincronizar valores del SVG con el formulario
  syncVersionesFromSVG() {
    const svgs = document.querySelectorAll('.versiones-svg');
    svgs.forEach((svg, svgIndex) => {
      const ojo = svgIndex === 0 ? 'derecho' : 'izquierdo';
      const textElements = svg.querySelectorAll('.versiones-v');
      textElements.forEach(textElement => {
        const position = textElement.getAttribute('data-position');
        const value = textElement.textContent || '✓';
        if (position) {
          // Convertir posición de guiones a guiones bajos para coincidir con FormControls
          const positionFormatted = position.replace(/-/g, '_');
          const controlName = `examen_motor_versiones_${ojo}_${positionFormatted}`;
          this.historiaForm.get(controlName)?.setValue(value);
        }
      });
    });
  }
  // Función para sincronizar valores del formulario al SVG
  syncVersionesToSVG() {
    const svgs = document.querySelectorAll('.versiones-svg');
    svgs.forEach((svg, svgIndex) => {
      const ojo = svgIndex === 0 ? 'derecho' : 'izquierdo';
      const textElements = svg.querySelectorAll('.versiones-v');
      textElements.forEach(textElement => {
        const position = textElement.getAttribute('data-position');
        if (position) {
          // Convertir posición de guiones a guiones bajos para coincidir con FormControls
          const positionFormatted = position.replace(/-/g, '_');
          const controlName = `examen_motor_versiones_${ojo}_${positionFormatted}`;
          const value = this.historiaForm.get(controlName)?.value || '✓';
          textElement.textContent = value;
        }
      });
    });
  }
  // Métodos para cálculo automático de keratometría
  setupKeratometriaCalculations() {
    // Listener para ojo derecho
    this.historiaForm.get('examen_refractivo_keratometria_derecho_plano')?.valueChanges.subscribe(() => {
      this.calculateKeratometriaDerecho();
    });
    this.historiaForm.get('examen_refractivo_keratometria_derecho_curvo')?.valueChanges.subscribe(() => {
      this.calculateKeratometriaDerecho();
    });
    // Listener para ojo izquierdo
    this.historiaForm.get('examen_refractivo_keratometria_izquierdo_plano')?.valueChanges.subscribe(() => {
      this.calculateKeratometriaIzquierdo();
    });
    this.historiaForm.get('examen_refractivo_keratometria_izquierdo_curvo')?.valueChanges.subscribe(() => {
      this.calculateKeratometriaIzquierdo();
    });
  }
  // Configurar sincronización unidireccional: Examen Refractivo → Fórmula
  setupExamenRefractivoSync() {
    const syncFieldsForEye = eye => {
      const fieldMappings = [{
        from: `examen_refractivo_subjetivo_${eye}_esfera`,
        to: `formula_${eye}_esfera`
      }, {
        from: `examen_refractivo_subjetivo_${eye}_cilindro`,
        to: `formula_${eye}_cilindro`
      }, {
        from: `examen_refractivo_subjetivo_${eye}_eje`,
        to: `formula_${eye}_eje`
      }, {
        from: `examen_refractivo_subjetivo_${eye}_av_lejos`,
        to: `formula_${eye}_av_lejos`
      }, {
        from: `examen_refractivo_subjetivo_${eye}_add`,
        to: `formula_${eye}_add`
      }, {
        from: `examen_refractivo_subjetivo_${eye}_av_cerca`,
        to: `formula_${eye}_av_cerca`
      }, {
        from: `examen_refractivo_subjetivo_${eye}_dnp`,
        to: `formula_${eye}_dnp`
      }];
      fieldMappings.forEach(mapping => {
        const sourceControl = this.historiaForm.get(mapping.from);
        const targetControl = this.historiaForm.get(mapping.to);
        if (sourceControl && targetControl) {
          sourceControl.valueChanges.subscribe(value => {
            targetControl.setValue(value, {
              emitEvent: false
            });
          });
        }
      });
    };
    syncFieldsForEye('derecho');
    syncFieldsForEye('izquierdo');
  }
  // Configurar actualización automática de fecha_control basado en fecha_consulta
  setupFechaControlSync() {
    const fechaConsultaControl = this.historiaForm.get('fecha_consulta');
    const fechaControlControl = this.historiaForm.get('fecha_control');
    if (fechaConsultaControl && fechaControlControl) {
      fechaConsultaControl.valueChanges.subscribe(fechaConsulta => {
        if (fechaConsulta) {
          const fechaControl = this.calcularFechaControl(fechaConsulta);
          fechaControlControl.setValue(fechaControl, {
            emitEvent: false
          });
        }
      });
      // Inicializar fecha_control solo si fecha_consulta tiene valor y fecha_control está vacío
      // Esto evita sobrescribir fecha_control cuando se carga un formulario existente
      if (fechaConsultaControl.value && !fechaControlControl.value) {
        const fechaControl = this.calcularFechaControl(fechaConsultaControl.value);
        fechaControlControl.setValue(fechaControl, {
          emitEvent: false
        });
      }
    }
  }
  // Obtener fecha local en formato YYYY-MM-DD (sin conversión UTC)
  getFechaLocal() {
    const ahora = new Date();
    const año = ahora.getFullYear();
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const dia = String(ahora.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  }
  // Calcular fecha_control (fecha_consulta + 1 año)
  calcularFechaControl(fechaConsulta) {
    if (!fechaConsulta) {
      return '';
    }
    // Parsear la fecha manualmente para evitar problemas de zona horaria
    // El formato esperado es YYYY-MM-DD
    const partes = fechaConsulta.split('-');
    if (partes.length !== 3) {
      return '';
    }
    const año = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const dia = parseInt(partes[2], 10);
    // Sumar 1 año
    const nuevoAño = año + 1;
    // Formatear la fecha resultante
    const mesFormateado = String(mes).padStart(2, '0');
    const diaFormateado = String(dia).padStart(2, '0');
    return `${nuevoAño}-${mesFormateado}-${diaFormateado}`;
  }
  // Formatear valor de keratometría cuando pierde el foco
  formatKeratometriaOnBlur(fieldName) {
    const control = this.historiaForm.get(fieldName);
    if (control) {
      const value = control.value;
      if (value && value !== '') {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          const formattedValue = numValue.toFixed(2);
          control.setValue(formattedValue, {
            emitEvent: false
          });
        }
      }
    }
  }
  // Permitir solo números y punto decimal en campos de keratometría
  onKeratometriaKeyPress(event) {
    const char = event.key;
    const currentValue = event.target.value;
    // Permitir teclas de control (backspace, delete, tab, escape, enter, etc.)
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    // Permitir teclas de navegación
    if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(char)) {
      return;
    }
    // Permitir solo números y un punto decimal
    if (!/^[0-9.]$/.test(char)) {
      event.preventDefault();
      return;
    }
    // Permitir solo un punto decimal
    if (char === '.' && currentValue.includes('.')) {
      event.preventDefault();
      return;
    }
    // No permitir punto al inicio
    if (char === '.' && currentValue === '') {
      event.preventDefault();
      return;
    }
  }
  calculateKeratometriaDerecho() {
    const plano = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_derecho_plano')?.value || '0');
    const curvo = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_derecho_curvo')?.value || '0');
    const corn = plano - curvo;
    const cornFormatted = corn.toFixed(2);
    this.historiaForm.get('examen_refractivo_keratometria_derecho_corn')?.setValue(cornFormatted, {
      emitEvent: false
    });
  }
  calculateKeratometriaIzquierdo() {
    const plano = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_izquierdo_plano')?.value || '0');
    const curvo = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_izquierdo_curvo')?.value || '0');
    const corn = plano - curvo;
    const cornFormatted = corn.toFixed(2);
    this.historiaForm.get('examen_refractivo_keratometria_izquierdo_corn')?.setValue(cornFormatted, {
      emitEvent: false
    });
  }
  // Función única para calcular vórtice (basada en la función proporcionada)
  calcular_vortice_1(esfera, distancia) {
    // Paso 1: calcular valor base
    let base;
    try {
      base = 1 / (1 / esfera - distancia / 1000);
      if (!isFinite(base)) base = 0; // similar a IFERROR
    } catch {
      base = 0;
    }
    // Paso 2: determinar signo
    const sign = Math.sign(base);
    // Paso 3: definir múltiplo (0.25 con signo)
    const multiple = sign * 0.25;
    // Paso 4: función para imitar MROUND de Excel
    function mround(value, multiple) {
      if (multiple === 0) return 0;
      return Math.round(value / multiple) * multiple;
    }
    // Paso 5: devolver resultado
    return mround(base, multiple);
  }
  // Función para calcular MM (basada en la función proporcionada)
  calcFormula(esfera, distancia, cilindro) {
    try {
      const dist = distancia / 1000; // convertir a metros, como en Excel (M68/1000)
      if (!isFinite(esfera) || esfera === 0) return 0;
      // Primer valor: (1 / ((1 / esfera) - dist))
      const val1Raw = 1 / (1 / esfera - dist);
      const val1 = isFinite(val1Raw) ? val1Raw : 0;
      // Segundo valor: (1 / ((1 / (esfera - ABS(cilindro))) - dist))
      // En Excel: (1 / (B70 + ABS(C70)*-1))  →  (esfera - ABS(cilindro))
      const val2Raw = 1 / (1 / (esfera - Math.abs(cilindro)) - dist);
      const val2 = isFinite(val2Raw) ? val2Raw : 0;
      // Diferencia absoluta
      const diffAbs = Math.abs(val1 - val2);
      // Determinar signo según Excel
      const signCheck = diffAbs * -1 < 0 ? -1 : 1;
      // Aplicar signo al número antes de redondear (corrige el error anterior)
      const numberToRound = diffAbs * signCheck;
      // Redondear al múltiplo más cercano de 0.25 (MROUND)
      const rounded = Math.round(numberToRound / 0.25) * 0.25;
      return rounded;
    } catch {
      return 0;
    }
  }
  // Función única para recalcular ambos vórtices
  recalcularVortices() {
    // Obtener valores del formulario
    const esferaDerechaStr = this.historiaForm.get('examen_refractivo_subjetivo_derecho_esfera')?.value || '';
    const esferaIzquierdaStr = this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_esfera')?.value || '';
    const distanciaStr = this.historiaForm.get('examen_refractivo_subjetivo_distancia_al')?.value || '';
    const distancia = parseFloat(distanciaStr);
    // Calcular vórtice derecho
    if (esferaDerechaStr && !isNaN(distancia)) {
      const esfera = parseFloat(esferaDerechaStr);
      if (!isNaN(esfera)) {
        const resultado = this.calcular_vortice_1(esfera, distancia);
        const resultadoFormateado = resultado >= 0 ? `+${resultado.toFixed(2)}` : resultado.toFixed(2);
        this.historiaForm.get('examen_refractivo_subjetivo_derecho_vortice')?.setValue(resultadoFormateado, {
          emitEvent: false
        });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_derecho_vortice')?.setValue('+0.00', {
        emitEvent: false
      });
    }
    // Calcular vórtice izquierdo
    if (esferaIzquierdaStr && !isNaN(distancia)) {
      const esfera = parseFloat(esferaIzquierdaStr);
      if (!isNaN(esfera)) {
        const resultado = this.calcular_vortice_1(esfera, distancia);
        const resultadoFormateado = resultado >= 0 ? `+${resultado.toFixed(2)}` : resultado.toFixed(2);
        this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_vortice')?.setValue(resultadoFormateado, {
          emitEvent: false
        });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_vortice')?.setValue('+0.00', {
        emitEvent: false
      });
    }
  }
  // Función única para recalcular ambos campos MM
  recalcularMM() {
    // Obtener valores del formulario
    const esferaDerechaStr = this.historiaForm.get('examen_refractivo_subjetivo_derecho_esfera')?.value || '';
    const cilindroDerechoStr = this.historiaForm.get('examen_refractivo_subjetivo_derecho_cilindro')?.value || '';
    const esferaIzquierdaStr = this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_esfera')?.value || '';
    const cilindroIzquierdoStr = this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_cilindro')?.value || '';
    const distanciaStr = this.historiaForm.get('examen_refractivo_subjetivo_distancia_al')?.value || '';
    const distancia = parseFloat(distanciaStr);
    // Calcular MM derecho
    if (esferaDerechaStr !== '' && cilindroDerechoStr !== '' && !isNaN(distancia)) {
      const esfera = parseFloat(esferaDerechaStr);
      const cilindro = parseFloat(cilindroDerechoStr);
      if (!isNaN(esfera) && !isNaN(cilindro)) {
        const resultado = this.calcFormula(esfera, distancia, cilindro);
        const resultadoFormateado = resultado >= 0 ? `+${resultado.toFixed(2)}` : resultado.toFixed(2);
        this.historiaForm.get('examen_refractivo_subjetivo_derecho_mm')?.setValue(resultadoFormateado, {
          emitEvent: false
        });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_derecho_mm')?.setValue('0.00', {
        emitEvent: false
      });
    }
    // Calcular MM izquierdo
    if (esferaIzquierdaStr !== '' && cilindroIzquierdoStr !== '' && !isNaN(distancia)) {
      const esfera = parseFloat(esferaIzquierdaStr);
      const cilindro = parseFloat(cilindroIzquierdoStr);
      if (!isNaN(esfera) && !isNaN(cilindro)) {
        const resultado = this.calcFormula(esfera, distancia, cilindro);
        const resultadoFormateado = resultado >= 0 ? `+${resultado.toFixed(2)}` : resultado.toFixed(2);
        this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_mm')?.setValue(resultadoFormateado, {
          emitEvent: false
        });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_mm')?.setValue('0.00', {
        emitEvent: false
      });
    }
  }
  // Métodos para manejar cambios directos en los inputs
  onFechaConsultaChange() {
    const fechaConsultaControl = this.historiaForm.get('fecha_consulta');
    const fechaControlControl = this.historiaForm.get('fecha_control');
    if (fechaConsultaControl && fechaControlControl) {
      const fechaConsulta = fechaConsultaControl.value;
      if (fechaConsulta) {
        const fechaControl = this.calcularFechaControl(fechaConsulta);
        fechaControlControl.setValue(fechaControl, {
          emitEvent: false
        });
      }
    }
  }
  onEsferaDerechaChange(event) {
    this.recalcularVortices();
    this.recalcularMM();
  }
  onEsferaIzquierdaChange(event) {
    this.recalcularVortices();
    this.recalcularMM();
  }
  onCilindroDerechoChange(event) {
    this.recalcularMM();
  }
  onCilindroIzquierdoChange(event) {
    this.recalcularMM();
  }
  onDistanciaChange(event) {
    this.recalcularVortices();
    this.recalcularMM();
  }
  // Prevenir envío del formulario al presionar Enter y manejar Tab
  onKeyDown(event) {
    const keyboardEvent = event;
    const target = event.target;
    // Manejar Tab para inputs, textareas, selects y botones con tabindex
    if (keyboardEvent.key === 'Tab' && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.tagName === 'BUTTON' && target.getAttribute('tabindex') !== null)) {
      this.handleTabNavigation(keyboardEvent);
    } else if (keyboardEvent.key === 'Enter') {
      // Solo permitir envío si se presiona Enter en el botón de guardar
      if (target.tagName !== 'BUTTON' || !target.textContent?.includes('Guardar')) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
  handleTabNavigation(event) {
    const currentElement = event.target;
    // Identificar campo actual (por formControlName o por ID)
    let campoActual = '';
    if (currentElement.tagName === 'text') {
      // Es un elemento SVG
      campoActual = currentElement.id || '';
    } else if (currentElement.tagName === 'BUTTON') {
      // Es un botón
      campoActual = currentElement.id || '';
    } else {
      // Es un input/textarea/select
      campoActual = currentElement.getAttribute('formControlName') || currentElement.id || '';
    }
    if (!campoActual) return;
    const indiceActual = this.tabOrder.indexOf(campoActual);
    if (indiceActual === -1) return;
    // Obtener el formulario para las búsquedas
    const formElement = currentElement.closest('form');
    if (!formElement) return;
    // Determinar el índice del siguiente campo
    const siguienteIndice = event.shiftKey ? indiceActual - 1 : indiceActual + 1;
    // Buscar el siguiente campo válido (con sección abierta y visible en DOM)
    const siguienteCampo = this.encontrarSiguienteCampoValido(siguienteIndice, event.shiftKey, formElement);
    if (siguienteCampo) {
      event.preventDefault();
      // Buscar el elemento - puede ser por formControlName o por ID
      let siguienteElemento = null;
      // Intentar buscar por formControlName primero
      siguienteElemento = formElement.querySelector(`[formControlName="${siguienteCampo}"]`);
      // Si no se encuentra, buscar por ID (para elementos SVG o botones)
      if (!siguienteElemento) {
        siguienteElemento = document.getElementById(siguienteCampo);
      }
      if (siguienteElemento && (siguienteElemento instanceof HTMLInputElement || siguienteElemento instanceof HTMLTextAreaElement || siguienteElemento instanceof HTMLSelectElement || siguienteElemento instanceof SVGTextElement || siguienteElemento instanceof HTMLButtonElement)) {
        setTimeout(() => {
          siguienteElemento.focus();
          if (siguienteElemento instanceof HTMLInputElement || siguienteElemento instanceof HTMLTextAreaElement) {
            siguienteElemento.select();
          }
        }, 10);
      }
    }
    // Si no hay siguiente campo válido, dejar que el navegador maneje la navegación normal
  }
  encontrarSiguienteCampoValido(indice, retroceder, formElement) {
    // Buscar en la dirección especificada
    let i = indice;
    if (retroceder) {
      // Buscar retrocediendo
      while (i >= 0) {
        const campo = this.tabOrder[i];
        if (this.esSeccionAbierta(campo) && this.esCampoVisible(campo, formElement)) {
          return campo;
        }
        i--;
      }
    } else {
      // Buscar avanzando
      while (i < this.tabOrder.length) {
        const campo = this.tabOrder[i];
        if (this.esSeccionAbierta(campo) && this.esCampoVisible(campo, formElement)) {
          return campo;
        }
        i++;
      }
    }
    return null;
  }
  esCampoVisible(campo, formElement) {
    // Verificar si el campo existe y es visible en el DOM
    let elemento = null;
    // Buscar por formControlName primero
    elemento = formElement.querySelector(`[formControlName="${campo}"]`);
    // Si no se encuentra, buscar por ID (para elementos SVG)
    if (!elemento) {
      elemento = document.getElementById(campo);
    }
    if (!elemento) return false; // Campo no existe en el DOM
    // Verificar si el elemento es visible
    const estilo = window.getComputedStyle(elemento);
    const visible = estilo.display !== 'none' && estilo.visibility !== 'hidden';
    const enDOM = elemento.offsetParent !== null;
    return visible && enDOM;
  }
  esSeccionAbierta(campo) {
    const seccion = this.campoASeccionMap[campo];
    if (!seccion) return true; // Si no tiene sección asignada, considerar abierta
    return this.seccionesDesplegadas[seccion] === true;
  }
  // Generar PDF de la historia clínica
  generatePDF(historia) {
    if (!historia.id) {
      this.toastService.showError('No se encontró el ID de la historia clínica');
      return;
    }
    // Generar URL del endpoint
    const token = localStorage.getItem('token');
    const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/historias-clinicas/${historia.id}/pdf`;
    // Crear enlace para descargar el PDF
    const link = document.createElement('a');
    link.href = url;
    link.download = `historia-clinica-${historia.id}.pdf`;
    // Agregar token de autorización
    if (token) {
      link.href += `?token=${token}`;
    }
    // Simular click para descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.toastService.showSuccess('PDF generado exitosamente');
  }
  // Generar PDF desde la vista de consulta
  generatePDFFromView() {
    if (!this.editingHistoriaId) {
      this.toastService.showError('No hay historia clínica seleccionada');
      return;
    }
    // Buscar la historia actual
    const historia = this.historias.find(h => h.id === this.editingHistoriaId);
    if (!historia) {
      this.toastService.showError('No se encontró la historia clínica');
      return;
    }
    this.generatePDF(historia);
  }
  static {
    this.ɵfac = function HistoriasClinicasComponent_Factory(t) {
      return new (t || HistoriasClinicasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_historias_clinicas_service__WEBPACK_IMPORTED_MODULE_3__.HistoriasClinicasService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_pacientes_service__WEBPACK_IMPORTED_MODULE_4__.PacientesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: HistoriasClinicasComponent,
      selectors: [["app-historias-clinicas"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "mb-0"], [1, "btn", "btn-secondary", "me-2", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "row"], [1, "card"], [1, "card-body"], [1, "historias-container"], [1, "empty-state"], [1, "historias-header"], [1, "historia-cell"], [1, "historia-row"], [1, "historia-row", 3, "click"], [1, "historia-cell", "fecha-cell"], [1, "fas", "fa-calendar-alt", "me-2"], [1, "historia-cell", "hora-cell"], [1, "fas", "fa-clock", "me-2"], [1, "historia-cell", "motivo-cell"], [1, "fas", "fa-stethoscope", "me-2"], [1, "historia-cell", "acciones-cell"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "fas", "fa-eye"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "fas", "fa-file-pdf"], [1, "fas", "fa-file-medical", "fa-4x", "mb-4"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "card-header"], [1, "btn", "btn-success"], [3, "ngSubmit", "keydown", "formGroup"], [1, "alert", 3, "ngClass"], [1, "card", "mb-4"], [1, "card-header", "section-header", "bg-info", "text-white", 3, "click"], [1, "mb-0"], [1, "fas"], [1, "fas", "fa-user", "ms-2"], [1, "card-header", "section-header", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click"], [1, "fas", "fa-times"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-success"], [1, "btn", "btn-success", 3, "click"], [1, "ms-2"], [1, "col-md-4"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "date", "formControlName", "fecha_consulta", "id", "input-fecha_consulta", 1, "form-control", 3, "change"], [1, "form-label", "text-muted"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], [1, "col-md-3"], ["type", "email", "readonly", "", 1, "form-control", 3, "value"], ["type", "date", "formControlName", "fecha_control", 1, "form-control"], ["type", "time", "formControlName", "hora", "id", "input-hora", 1, "form-control"], [1, "row-flex"], [1, "col-flex"], [1, "field-flex"], ["type", "text", "formControlName", "motivo_consulta", 1, "form-control"], ["type", "text", "formControlName", "tipo_examen", 1, "form-control"], ["formControlName", "anamnesis", "rows", "4", 1, "form-control"], ["type", "text", "formControlName", "ultima_valoracion_optometria", 1, "form-control"], ["type", "text", "formControlName", "ocupacion_profesion", 1, "form-control"], ["type", "text", "formControlName", "antecedentes_familiares", 1, "form-control"], ["type", "text", "formControlName", "antecedentes_personales", 1, "form-control"], ["type", "text", "formControlName", "antecedentes_laborales", 1, "form-control"], [1, "table-responsive-container"], [1, "table-container"], [1, "table-title"], ["type", "button", "title", "Mostrar/Ocultar F\u00F3rmula de Cerca", 1, "btn", "btn-sm", "btn-outline-secondary", "ms-2", 3, "click"], [1, "table-header"], [1, "table-header-cell"], [1, "table-row"], [1, "table-cell"], [1, "table-cell-label"], ["type", "text", "formControlName", "lensometria_formula_lejos_derecho_esfera", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_derecho_cilindro", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_derecho_eje", "appAxisInput", "", "pattern", "^[0-9]+$", 1, "table-cell-input", "eje-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_derecho_adicion", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_derecho_prisma", "value", "NO APLICA", 1, "table-cell-input"], ["type", "text", "formControlName", "lensometria_formula_lejos_izquierdo_esfera", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_izquierdo_cilindro", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_izquierdo_eje", "appAxisInput", "", "pattern", "^[0-9]+$", 1, "table-cell-input", "eje-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_izquierdo_adicion", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_lejos_izquierdo_prisma", "value", "NO APLICA", 1, "table-cell-input"], ["formControlName", "lensometria_observaciones", "rows", "4", 1, "form-control"], ["type", "text", "formControlName", "lensometria_formula_cerca_derecho_esfera", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_cerca_derecho_cilindro", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_cerca_derecho_eje", "appAxisInput", "", "pattern", "^[0-9]+$", 1, "table-cell-input", "eje-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_cerca_derecho_adicion", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_cerca_izquierdo_esfera", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_cerca_izquierdo_cilindro", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_cerca_izquierdo_eje", "appAxisInput", "", "pattern", "^[0-9]+$", 1, "table-cell-input", "eje-field", 3, "blur", "input"], ["type", "text", "formControlName", "lensometria_formula_cerca_izquierdo_adicion", "pattern", "[\\+\\-]?[0-9]+([.][0-9]{1,2})?", 1, "table-cell-input", "lensometria-field", 3, "blur", "input"], [1, "agudeza-table"], [1, "agudeza-row"], [1, "agudeza-cell", "color-azul", 2, "flex", "2"], [1, "agudeza-cell", "color-azul", 2, "flex", "4"], [1, "agudeza-cell", "color-azul", 2, "flex", "3"], [1, "agudeza-cell", "color-azul-medio", 2, "flex", "1"], [1, "agudeza-cell", 2, "flex", "1"], ["type", "text", "formControlName", "lejos_test_usado", "value", "LETRAS", 1, "agudeza-cell-input"], ["type", "button", "title", "Mostrar/Ocultar fila Con Correcci\u00F3n", 1, "btn", "btn-sm", "btn-outline-secondary", "ms-2", 3, "click"], ["type", "text", "formControlName", "sin_correccion_lejos_derecho", "value", "20/25", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "sin_correccion_lejos_izquierdo", "value", "20/30", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "sin_correccion_lejos_ambos", "value", "20/", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "sin_correccion_cerca_derecho", "value", "M", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "sin_correccion_cerca_izquierdo", "value", "M", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "sin_correccion_cerca_observacion", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "cerca_test_usado", "value", "LETRAS", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "pin_hole_lejos_derecho", "value", "20/", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "pin_hole_lejos_izquierdo", "value", "20/", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "con_correccion_lejos_derecho", "value", "20/", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "con_correccion_lejos_izquierdo", "value", "20/", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "con_correccion_lejos_ambos", "value", "20/", "appPrefixInput", "20/", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "con_correccion_cerca_derecho", "value", "M", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "con_correccion_cerca_izquierdo", "value", "M", 1, "agudeza-cell-input"], ["type", "text", "formControlName", "con_correccion_cerca_observacion", 1, "agudeza-cell-input"], [1, "grid-table", "table-examen-motor-parte-1"], [1, "cell", "span-rows-2", "background-azul"], [1, "cell", "background-azul-claro"], [1, "cell", "background-azul"], [1, "cell"], ["type", "text", "formControlName", "examen_motor_mano_dominante", "value", "DERECHA"], ["type", "text", "formControlName", "examen_motor_ojo_dominante", "value", "DERECHO"], ["type", "text", "formControlName", "examen_motor_punto_proximo_valor"], ["type", "text", "formControlName", "examen_motor_dp_lejos", "value", "30/30"], ["type", "text", "formControlName", "examen_motor_dp_cerca", "value", "30/30"], [1, "cell", "span-cols-3", "background-azul-claro"], [1, "cell", "span-cols-3"], ["type", "text", "formControlName", "examen_motor_ducciones_derecho", "value", "Normal"], ["type", "text", "formControlName", "examen_motor_ducciones_izquierdo", "value", "Normal"], ["type", "text", "formControlName", "examen_motor_kappa_derecho", "value", "0\u00B0"], ["type", "text", "formControlName", "examen_motor_kappa_izquierdo", "value", "0\u00B0"], [1, "versiones-grafico"], ["width", "312", "height", "104", "viewBox", "0 0 312 104", 1, "versiones-svg"], ["x1", "26", "y1", "52", "x2", "286", "y2", "52", "stroke", "var(--dark-color)", "stroke-width", "2"], ["x1", "78", "y1", "26", "x2", "78", "y2", "78", "stroke", "var(--dark-color)", "stroke-width", "2"], ["x1", "234", "y1", "26", "x2", "234", "y2", "78", "stroke", "var(--dark-color)", "stroke-width", "2"], ["id", "versiones-derecho-top-left", "x", "78", "y", "15", "data-position", "top-left", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-derecho-top-right", "x", "234", "y", "15", "data-position", "top-right", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-derecho-left", "x", "26", "y", "65", "data-position", "left", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-derecho-right", "x", "286", "y", "65", "data-position", "right", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-derecho-bottom-left", "x", "78", "y", "89", "data-position", "bottom-left", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-derecho-bottom-right", "x", "234", "y", "89", "data-position", "bottom-right", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-izquierdo-top-left", "x", "78", "y", "15", "data-position", "top-left", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-izquierdo-top-right", "x", "234", "y", "15", "data-position", "top-right", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-izquierdo-left", "x", "26", "y", "65", "data-position", "left", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-izquierdo-right", "x", "286", "y", "65", "data-position", "right", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-izquierdo-bottom-left", "x", "78", "y", "89", "data-position", "bottom-left", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], ["id", "versiones-izquierdo-bottom-right", "x", "234", "y", "89", "data-position", "bottom-right", "tabindex", "0", "text-anchor", "middle", 1, "versiones-v", 3, "click", "keydown"], [1, "cell", "span-cols-6"], ["type", "text", "formControlName", "examen_motor_hirschberg", "value", "CENTRADO AMBOS OJOS"], [1, "grid-table", "table-examen-motor-parte-2"], [1, "cell", "span-cols-2", "background-azul"], [1, "cell", "span-cols-3", "background-azul"], [1, "cell", "span-rows-3", "background-azul-claro"], [1, "cell", "span-rows-3"], ["type", "text", "formControlName", "examen_motor_test_utilizado", "value", "COVER TEST PRISMA"], ["type", "text", "formControlName", "examen_motor_observaciones", "value", "TOMADO CON OBJETO REAL"], ["type", "text", "formControlName", "examen_motor_cover_test_con_correccion_horizontal", "value", "ORTHO"], ["type", "text", "formControlName", "examen_motor_cover_test_con_correccion_vertical", "value", "ORTHO"], ["type", "text", "formControlName", "examen_motor_cover_test_sin_correccion_horizontal", "value", "ORTHO"], ["type", "text", "formControlName", "examen_motor_cover_test_sin_correccion_vertical", "value", "ORTHO"], ["type", "text", "formControlName", "examen_motor_prisma_con_correccion_horizontal", "value", "ORTHO"], ["type", "text", "formControlName", "examen_motor_prisma_con_correccion_vertical", "value", "ORTHO"], ["type", "text", "formControlName", "examen_motor_prisma_sin_correccion_horizontal", "value", "ORTHO"], ["type", "text", "formControlName", "examen_motor_prisma_sin_correccion_vertical", "value", "ORTHO"], [1, "cell", "span-cols-2"], ["type", "text", "formControlName", "examen_motor_por_confirmar_derecho", "value", "POR CONFIRMAR"], ["type", "text", "formControlName", "examen_motor_por_confirmar_izquierdo", "value", "POR CONFIRMAR"], ["type", "text", "formControlName", "examen_motor_estereopsis_tipo", "value", "TIMUS"], [1, "cell", "span-cols-2", "background-azul-claro"], ["type", "text", "formControlName", "examen_motor_estereopsis_resultado", "value", "-"], [1, "grid-table", "table-examen-refractivo-keratometria"], [1, "cell", "span-cols-7", "background-azul"], [1, "cell", "span-cols-5", "background-azul"], ["type", "text", "formControlName", "examen_refractivo_keratometria_derecho_plano", "value", "44.00", 3, "blur", "keypress"], ["type", "text", "formControlName", "examen_refractivo_keratometria_derecho_curvo", "value", "48.00", 3, "blur", "keypress"], ["type", "text", "formControlName", "examen_refractivo_keratometria_derecho_eje", "value", "0", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_keratometria_derecho_miras", "value", "REDONDA"], ["type", "text", "formControlName", "examen_refractivo_keratometria_derecho_corn", "readonly", ""], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_derecho_esfera", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_derecho_cilindro", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_derecho_eje", "value", "", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_derecho_sombras", "value", "CLARO Y DEFINIDO"], ["type", "text", "formControlName", "examen_refractivo_keratometria_izquierdo_plano", "value", "43.00", 3, "blur", "keypress"], ["type", "text", "formControlName", "examen_refractivo_keratometria_izquierdo_curvo", "value", "49.00", 3, "blur", "keypress"], ["type", "text", "formControlName", "examen_refractivo_keratometria_izquierdo_eje", "value", "0", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_keratometria_izquierdo_miras", "value", "REDONDA"], ["type", "text", "formControlName", "examen_refractivo_keratometria_izquierdo_corn", "readonly", ""], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_izquierdo_esfera", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_izquierdo_cilindro", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_izquierdo_eje", "value", "", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_estatica_izquierdo_sombras", "value", "CLARO Y DEFINIDO"], [1, "floating-toggle-btn"], ["id", "toggle-retinoscopia", "type", "button", "tabindex", "0", "title", "Mostrar/Ocultar Retinoscopia Din\u00E1mica y Otra Refracci\u00F3n", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "keydown"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_normal", "value", "SI"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_cycloplejia", "value", "NO"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_otra", "value", "-"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_distancia_al", "value", "14", 3, "input"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_esfera", "value", "", 3, "input", "blur"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_cilindro", "value", "", 3, "input", "blur"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_eje", "value", "", "appAxisInput", "", 3, "appAxisInputZeroToMax"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_av_lejos", "value", "20/20", "appPrefixInput", "20/"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_add", "value", ""], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_av_cerca", "value", "0.50 M"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_dnp", "value", "31"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_vortice", "value", "+0.00", "readonly", ""], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_mm", "value", "-0.00", "readonly", ""], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_estatica", "value", "20/", "appPrefixInput", "20/"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_derecho_dinamica", "value", "20/", "appPrefixInput", "20/"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_esfera", "value", "", 3, "input", "blur"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_cilindro", "value", "", 3, "input", "blur"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_eje", "value", "", "appAxisInput", "", 3, "appAxisInputZeroToMax"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_av_lejos", "value", "20/20", "appPrefixInput", "20/"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_add", "value", ""], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_av_cerca", "value", "0.50 M"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_dnp", "value", "31"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_vortice", "value", "+0.00", "readonly", ""], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_mm", "value", "-0.00", "readonly", ""], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_estatica", "value", "20/", "appPrefixInput", "20/"], ["type", "text", "formControlName", "examen_refractivo_subjetivo_izquierdo_dinamica", "value", "20/", "appPrefixInput", "20/"], [1, "cell", "span-rows-2", "background-azul-claro"], [1, "cell", "span-cols-5"], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion", "value", ""], ["type", "text", "formControlName", "examen_refractivo_radio_k_1", "value", "7.67"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_derecho_esfera", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_derecho_cilindro", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_derecho_eje", "value", "", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_derecho_sombras", "value", "OMITIDA"], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_derecho_esfera", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_derecho_cilindro", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_derecho_eje", "value", "", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_derecho_sombras", "value", "NO APLICA"], ["type", "text", "formControlName", "examen_refractivo_radio_k_2", "value", "7.85"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_izquierdo_esfera", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_izquierdo_eje", "value", "", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_retinoscopia_dinamica_izquierdo_sombras", "value", "OMITIDA"], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_izquierdo_esfera", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_izquierdo_cilindro", "value", "", 3, "blur"], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_izquierdo_eje", "value", "", "appAxisInput", ""], ["type", "text", "formControlName", "examen_refractivo_otra_refraccion_izquierdo_sombras", "value", "NO APLICA"], ["type", "text", "formControlName", "examen_oftalmologico_pupila_derecho", "value", "NORMOREACTIVA", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_pupila_izquierdo", "value", "NORMOREACTIVA", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_parpados_derecho", "value", "SANOS", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_parpados_izquierdo", "value", "SANOS", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_pelicula_lagrimal_derecho", "value", "ESTABLE", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_pelicula_lagrimal_izquierdo", "value", "ESTABLE", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_conjuntiva_derecho", "value", "HIPEREMIA 1\u00B0 GENERALIZADA", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_conjuntiva_izquierdo", "value", "HIPEREMIA 1\u00B0 GENERALIZADA", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_cornea_derecho", "value", "TRANSPARENTE", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_cornea_izquierdo", "value", "TRANSPARENTE", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_cristalino_derecho", "value", "TRANSPARENTE", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_cristalino_izquierdo", "value", "TRANSPARENTE", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_camara_anterior_derecho", "value", "VAN HERICK IV", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_camara_anterior_izquierdo", "value", "VAN HERICK IV", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_iris_derecho", "value", "CAF\u00C9", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_iris_izquierdo", "value", "CAF\u00C9", 1, "form-control"], ["type", "text", "formControlName", "examen_oftalmologico_bruckner", "value", "SIM\u00C9TRICO", 1, "form-control"], [1, "grid-table", "table-examen-oftalmoscopia"], ["type", "number", "formControlName", "oftalmoscopia_derecho_excavacion", "value", "0.3", 1, "form-control"], ["type", "number", "formControlName", "oftalmoscopia_izquierdo_excavacion", "value", "0.3", 1, "form-control"], ["formControlName", "oftalmoscopia_derecho_descripcion", "rows", "2", 1, "form-control"], ["formControlName", "oftalmoscopia_izquierdo_descripcion", "rows", "2", 1, "form-control"], [1, "grid-table", "table-examen-formula"], ["type", "text", "formControlName", "formula_derecho_esfera", "value", "N", 1, "form-control", 3, "blur"], ["type", "text", "formControlName", "formula_derecho_cilindro", "value", "-", 1, "form-control", 3, "blur"], ["type", "text", "formControlName", "formula_derecho_eje", "value", "-\u00B0", "appAxisInput", "", 1, "form-control"], ["type", "text", "formControlName", "formula_derecho_av_lejos", "value", "20/20", "appPrefixInput", "20/", 1, "form-control"], ["type", "text", "formControlName", "formula_derecho_add", "value", "+", 1, "form-control"], ["type", "text", "formControlName", "formula_derecho_av_cerca", "value", "0.50 M", 1, "form-control"], ["type", "text", "formControlName", "formula_derecho_dnp", "value", "31", 1, "form-control"], [1, "cell", "span-rows-2"], ["formControlName", "formula_derecho_recomendacion", "rows", "2", 1, "form-control"], ["type", "text", "formControlName", "formula_izquierdo_esfera", "value", "N", 1, "form-control", 3, "blur"], ["type", "text", "formControlName", "formula_izquierdo_cilindro", "value", "-", 1, "form-control", 3, "blur"], ["type", "text", "formControlName", "formula_izquierdo_eje", "value", "-\u00B0", "appAxisInput", "", 1, "form-control"], ["type", "text", "formControlName", "formula_izquierdo_av_lejos", "value", "20/20", "appPrefixInput", "20/", 1, "form-control"], ["type", "text", "formControlName", "formula_izquierdo_add", "value", "+", 1, "form-control"], ["type", "text", "formControlName", "formula_izquierdo_av_cerca", "value", "0.50 M", 1, "form-control"], ["type", "text", "formControlName", "formula_izquierdo_dnp", "value", "31", 1, "form-control"], ["formControlName", "observaciones", "rows", "6", 1, "form-control"], [1, "grid-table", "table-examen-diagnostico"], ["type", "text", "formControlName", "diagnostico_codigo_1", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_diagnostico_1", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_descripcion_1", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_ojo_1", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_principal_1", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_codigo_2", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_diagnostico_2", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_descripcion_2", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_ojo_2", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_principal_2", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_codigo_3", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_diagnostico_3", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_descripcion_3", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_ojo_3", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_principal_3", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_codigo_4", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_diagnostico_4", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_descripcion_4", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_ojo_4", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_principal_4", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_codigo_5", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_diagnostico_5", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_descripcion_5", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_ojo_5", 1, "form-control"], ["type", "text", "formControlName", "diagnostico_principal_5", 1, "form-control"], [1, "fas", "fa-save"]],
      template: function HistoriasClinicasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Historias Cl\u00EDnicas");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HistoriasClinicasComponent_Conditional_7_Template, 2, 1, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div")(9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Template_button_click_9_listener() {
            return ctx.volverAPacientes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Volver a Pacientes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HistoriasClinicasComponent_Template_button_click_12_listener() {
            return ctx.showCreateFormModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Nueva Historia Cl\u00EDnica ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, HistoriasClinicasComponent_Conditional_15_Template, 6, 2, "div", 9)(16, HistoriasClinicasComponent_Conditional_16_Template, 85, 62, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](7, ctx.pacienteNombre ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](15, !ctx.showCreateForm ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](16, ctx.showCreateForm ? 16 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _directives_prefix_input_directive__WEBPACK_IMPORTED_MODULE_1__.PrefixInputDirective, _directives_axis_input_directive__WEBPACK_IMPORTED_MODULE_2__.AxisInputDirective],
      styles: ["table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black; \n\n  padding: 6px;            \n\n}\n\n.grid-table[_ngcontent-%COMP%] {\n  display: grid;\n  border: 1px solid var(--secondary-color);\n  border-radius: 0.375rem;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  background-color: var(--secondary-color);\n  gap: 1px;\n}\n\n.cell[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid var(--secondary-color);\n  padding: 8px 12px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  font-size: 0.9rem;\n}\n\n.cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background: transparent;\n  padding: 4px 8px;\n  font-size: 0.9rem;\n  text-align: center;\n  font-family: 'Courier New', monospace;\n  outline: none;\n}\n\n.cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: white;\n  border: 1px solid var(--primary-color);\n  border-radius: 0.25rem;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n\n\n.span-cols-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.span-cols-3[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n\n.span-cols-4[_ngcontent-%COMP%] {\n  grid-column: span 4;\n}\n\n.span-cols-5[_ngcontent-%COMP%] {\n  grid-column: span 5;\n}\n\n.span-cols-6[_ngcontent-%COMP%] {\n  grid-column: span 6;\n}\n\n.span-cols-7[_ngcontent-%COMP%] {\n  grid-column: span 7;\n}\n\n.span-cols-8[_ngcontent-%COMP%] {\n  grid-column: span 8;\n}\n\n.span-cols-9[_ngcontent-%COMP%] {\n  grid-column: span 9;\n}\n\n.span-cols-10[_ngcontent-%COMP%] {\n  grid-column: span 10;\n}\n\n\n.span-cols-11[_ngcontent-%COMP%] {\n  grid-column: span 11;\n}\n\n.span-cols-12[_ngcontent-%COMP%] {\n  grid-column: span 12;\n}\n\n\n\n.span-rows-2[_ngcontent-%COMP%] {\n  grid-row: span 2;\n}\n\n.span-rows-3[_ngcontent-%COMP%] {\n  grid-row: span 3;\n}\n\n.span-rows-4[_ngcontent-%COMP%] {\n  grid-row: span 4;\n}\n\n.grid-table.table-examen-motor-parte-1[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(7, auto);\n}\n\n.grid-table.table-examen-motor-parte-2[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(6, auto);\n}\n\n.grid-table.table-examen-refractivo-keratometria[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, auto);\n}\n\n.table-examen-oftalmoscopia[_ngcontent-%COMP%]{\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, auto);\n  \n}\n\n.table-examen-formula[_ngcontent-%COMP%]{\n  grid-template-columns: repeat(9, 1fr);\n  grid-template-rows: repeat(9, auto);\n}\n\n.table-examen-diagnostico[_ngcontent-%COMP%]{\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(5, auto);\n}\n\n\n\n.background-azul[_ngcontent-%COMP%] {\n  background-color: var(--blue-color);\n  color: white;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.background-azul[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  font-size: 0.7rem;\n  border-radius: 3px;\n  min-width: 24px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.background-azul[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n\n\n\n.floating-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n}\n\n.floating-toggle-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {  \n  margin-bottom: 10px;\n  background: #ebebeb;\n  padding: 2px 6px;\n  font-size: 0.7rem;\n  border-radius: 3px;\n  min-width: 24px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.floating-toggle-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n\n\n\n.grid-table[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n\n\n.background-azul-claro[_ngcontent-%COMP%] {\n  background-color: var(--blue-clear-color) !important;\n  color: var(--blue-color) !important;\n  font-weight: bold;\n}\n\n\n\n.row-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n\n\n.col-flex[_ngcontent-%COMP%] {\n  flex: 1;                \n\n  display: flex;          \n\n  gap: 16px;              \n\n  flex-direction: column;\n}\n\n\n\n.field-flex[_ngcontent-%COMP%] {\n  flex: 1;                \n\n  display: flex;\n  flex-direction: column;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  color: #000 !important;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.card-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n\n.card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  transition: transform 0.2s;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n  margin-bottom: 4px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n  border-color: #0056b3;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  border-color: var(--secondary-color);\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.btn-outline-info[_ngcontent-%COMP%] {\n  color: var(--info-color);\n  border-color: var(--info-color);\n}\n\n.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background-color: var(--info-color);\n  border-color: var(--info-color);\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-top: none;\n  font-weight: 600;\n  color: var(--dark-color);\n}\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--secondary-color) !important;\n}\n\n\n\n.card-body[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n\n\ninput[type=\"number\"][_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n\n\n.lensometria-field[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: 'Courier New', monospace;\n  font-weight: 500;\n}\n\n.lensometria-field[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.lensometria-field.invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n\n\n.eje-field[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: 'Courier New', monospace;\n  font-weight: 500;\n}\n\n.eje-field[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.eje-field.invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--secondary-color);\n  border-radius: 0.375rem;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n\n\n\n.table-responsive-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  margin-bottom: 1rem;\n}\n\n.table-responsive-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  min-width: max-content;\n  width: 100%;\n}\n\n.table-responsive-container[_ngcontent-%COMP%]   .agudeza-table[_ngcontent-%COMP%] {\n  min-width: max-content;\n  width: 100%;\n}\n\n.table-responsive-container[_ngcontent-%COMP%]   .grid-table[_ngcontent-%COMP%] {\n  min-width: max-content;\n  width: 100%;\n}\n\n\n\n.card-body[_ngcontent-%COMP%]:has(.table-examen-refractivo-keratometria) {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: thin;\n  scrollbar-color: var(--secondary-color) transparent;\n}\n\n.card-body[_ngcontent-%COMP%]:has(.table-examen-refractivo-keratometria)::-webkit-scrollbar {\n  height: 8px;\n}\n\n.card-body[_ngcontent-%COMP%]:has(.table-examen-refractivo-keratometria)::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n\n.card-body[_ngcontent-%COMP%]:has(.table-examen-refractivo-keratometria)::-webkit-scrollbar-thumb {\n  background: var(--secondary-color);\n  border-radius: 4px;\n}\n\n.card-body[_ngcontent-%COMP%]:has(.table-examen-refractivo-keratometria)::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-color);\n}\n\n.table-examen-refractivo-keratometria[_ngcontent-%COMP%] {\n  min-width: max-content;\n  width: 100%;\n}\n\n\n\n.table-responsive-container[_ngcontent-%COMP%] {\n  -webkit-overflow-scrolling: touch; \n\n  scrollbar-width: thin; \n\n  scrollbar-color: var(--secondary-color) transparent; \n\n}\n\n.table-responsive-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n\n.table-responsive-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n\n.table-responsive-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--secondary-color);\n  border-radius: 4px;\n}\n\n.table-responsive-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-color);\n}\n\n.table-title[_ngcontent-%COMP%] {\n  background-color: var(--blue-color);\n  color: white;\n  text-align: center;\n  padding: 12px;\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  font-size: 0.7rem;\n  border-radius: 3px;\n  min-width: 24px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: rgba(0, 123, 255, 0.1);\n  color: var(--blue-color);\n  font-weight: bold;\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.table-header-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  text-align: center;\n  border-right: 1px solid var(--secondary-color);\n  font-size: 0.9rem;\n}\n\n.table-header-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--secondary-color);\n  background-color: white;\n}\n\n.table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border-right: 1px solid var(--secondary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n}\n\n.table-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.table-cell-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--dark-color);\n}\n\n.table-cell-input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 4px 8px;\n  font-size: 0.9rem;\n  width: 100%;\n  text-align: center;\n  font-family: 'Courier New', monospace;\n}\n\n.table-cell-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: white;\n  border: 1px solid var(--primary-color);\n  border-radius: 0.25rem;\n}\n\n.table-cell-text[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-style: italic;\n  font-size: 0.85rem;\n}\n\n.table-cell-prefix[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n\n.table-cell-prefix[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border: 1px solid var(--secondary-color);\n  border-right: none;\n  padding: 4px 8px;\n  font-size: 0.9rem;\n  color: var(--secondary-color);\n  border-radius: 0.25rem 0 0 0.25rem;\n  white-space: nowrap;\n  font-family: 'Courier New', monospace;\n}\n\n.table-cell-suffix[_ngcontent-%COMP%] {\n  border: 1px solid var(--secondary-color);\n  border-left: none;\n  border-radius: 0 0.25rem 0.25rem 0;\n  padding: 4px 8px;\n  font-size: 0.9rem;\n  flex: 1;\n  text-align: center;\n  font-family: 'Courier New', monospace;\n}\n\n.table-cell-suffix[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n\n\n\n.form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.25em;\n}\n\n\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  background-color: #f8f9fa;\n  padding: 20px 0;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n\n\n.text-center[_ngcontent-%COMP%]   i.fa-file-medical[_ngcontent-%COMP%] {\n  color: #dee2e6;\n}\n\n\n\n.color-azul[_ngcontent-%COMP%] {\n  background-color: var(--blue-color) !important;\n  color: white !important;\n  font-weight: bold;\n  text-align: center;\n  padding: 12px 8px;\n  border: 1px solid var(--blue-color);\n}\n\n.color-azul-medio[_ngcontent-%COMP%] {\n  background-color: rgba(0, 123, 255, 0.1) !important;\n  color: var(--blue-color) !important;\n  font-weight: bold;\n  text-align: center;\n  padding: 8px;\n  border: 1px solid var(--secondary-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n\n.agudeza-cell[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  font-size: 0.7rem;\n  border-radius: 3px;\n  min-width: 24px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.agudeza-cell[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n\n\n\n.agudeza-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--secondary-color);\n  border-radius: 0.375rem;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\n.agudeza-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.agudeza-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.agudeza-cell[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-right: 1px solid var(--secondary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n}\n\n.agudeza-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.card-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--secondary-color);\n  border-radius: 0.25rem;\n  padding: 4px 8px;\n  font-size: 0.9rem;\n  text-align: center;\n}\n\n.card-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n\n\n.versiones-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.versiones-grafico[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.versiones-svg[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.versiones-v[_ngcontent-%COMP%] {\n  font-family: 'Courier New', monospace;\n  font-size: 16px;\n  font-weight: bold;\n  fill: var(--success-color);\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  text-anchor: middle;\n  dominant-baseline: middle;\n  transition: all 0.2s ease;\n}\n\n.versiones-v[_ngcontent-%COMP%]:hover {\n  fill: var(--primary-color);\n  font-size: 18px;\n}\n\n.versiones-v[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--primary-color);\n  outline-offset: 2px;\n  fill: var(--primary-color);\n  font-size: 18px;\n}\n\n.versiones-v.editing[_ngcontent-%COMP%] {\n  fill: var(--error-color);\n  font-size: 18px;\n}\n\n\n\n.table-examen-refractivo-keratometria[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(3, auto);\n}\n\n.table-examen-refractivo-retinoscopia-estatica[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(3, auto);\n}\n\n.table-examen-refractivo-retinoscopia-dinamica[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(3, auto);\n}\n\n.table-examen-refractivo-otra-refraccion[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(3, auto);\n}\n\n.table-examen-refractivo-radio-k[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, auto);\n}\n\n.table-examen-refractivo-subjetivo[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(4, auto);\n}\n\n.table-examen-refractivo-av-retinoscopia[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, auto);\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: var(--blue-color) !important;\n  color: white !important;\n}\n\n\n\n@media (max-width: 768px) {\n  .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 0.375rem 0.75rem;\n  }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpYXMtY2xpbmljYXMvaGlzdG9yaWFzLWNsaW5pY2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBRSw4QkFBOEI7RUFDdkQsWUFBWSxhQUFhLG9CQUFvQjtBQUMvQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLGdEQUFnRDtBQUNsRDs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQ0FBbUM7O0FBRXJDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQ0FBbUM7QUFDckM7O0FBRUEsbURBQW1EO0FBQ25EO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHFFQUFxRTtBQUNyRTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxvREFBb0Q7RUFDcEQsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsT0FBTyxpQkFBaUIsd0NBQXdDO0VBQ2hFLGFBQWEsV0FBVywyQ0FBMkM7RUFDbkUsU0FBUyxlQUFlLHlCQUF5QjtFQUNqRCxzQkFBc0I7QUFDeEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsT0FBTyxpQkFBaUIseURBQXlEO0VBQ2pGLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHVDQUF1QztBQUN2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnREFBZ0Q7QUFDbEQ7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdEQUFnRDtBQUNsRDs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQSxxREFBcUQ7QUFDckQ7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUEsbURBQW1EO0FBQ25EO0VBQ0UsaUNBQWlDLEVBQUUsd0JBQXdCO0VBQzNELHFCQUFxQixFQUFFLFlBQVk7RUFDbkMsbURBQW1ELEVBQUUsWUFBWTtBQUNuRTs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBLDhDQUE4QztBQUM5QztFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxnREFBZ0Q7QUFDbEQ7OztBQUdBLDRCQUE0QjtBQUM1QjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1EQUFtRDtFQUNuRCxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBLDZDQUE2QztBQUM3QztFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOENBQThDO0VBQzlDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxnREFBZ0Q7QUFDbEQ7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUEsNkRBQTZEO0FBQzdEO0VBQ0UscUNBQXFDO0VBQ3JDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1DQUFtQztBQUNyQzs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxlQUFlO0VBQ2YsOENBQThDO0VBQzlDLHVCQUF1QjtBQUN6Qjs7QUFFQSxtRUFBbUU7QUFDbkU7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAvKiBib3JkZSBlbiB0b2RhcyBsYXMgY2VsZGFzICovXG4gIHBhZGRpbmc6IDZweDsgICAgICAgICAgICAvKiBlc3BhY2lvIGludGVybm8gKi9cbn1cblxuLmdyaWQtdGFibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZ2FwOiAxcHg7XG59XG5cbi5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmNlbGwgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNlbGwgaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cblxuLyogQ29tYmluYXIgY29sdW1uYXMgKi9cbi5zcGFuLWNvbHMtMiB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cbi5zcGFuLWNvbHMtMyB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XG59XG5cbi5zcGFuLWNvbHMtNCB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XG59XG5cbi5zcGFuLWNvbHMtNSB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDU7XG59XG5cbi5zcGFuLWNvbHMtNiB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDY7XG59XG5cbi5zcGFuLWNvbHMtNyB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDc7XG59XG5cbi5zcGFuLWNvbHMtOCB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDg7XG59XG5cbi5zcGFuLWNvbHMtOSB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDk7XG59XG5cbi5zcGFuLWNvbHMtMTAge1xuICBncmlkLWNvbHVtbjogc3BhbiAxMDtcbn1cblxuXG4uc3Bhbi1jb2xzLTExIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTE7XG59XG5cbi5zcGFuLWNvbHMtMTIge1xuICBncmlkLWNvbHVtbjogc3BhbiAxMjtcbn1cblxuLyogQ29tYmluYXIgZmlsYXMgKi9cbi5zcGFuLXJvd3MtMiB7XG4gIGdyaWQtcm93OiBzcGFuIDI7XG59XG5cbi5zcGFuLXJvd3MtMyB7XG4gIGdyaWQtcm93OiBzcGFuIDM7XG59XG5cbi5zcGFuLXJvd3MtNCB7XG4gIGdyaWQtcm93OiBzcGFuIDQ7XG59XG5cbi5ncmlkLXRhYmxlLnRhYmxlLWV4YW1lbi1tb3Rvci1wYXJ0ZS0xIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgYXV0byk7XG59XG5cbi5ncmlkLXRhYmxlLnRhYmxlLWV4YW1lbi1tb3Rvci1wYXJ0ZS0yIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgYXV0byk7XG59XG5cbi5ncmlkLXRhYmxlLnRhYmxlLWV4YW1lbi1yZWZyYWN0aXZvLWtlcmF0b21ldHJpYSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgYXV0byk7XG59XG5cbi50YWJsZS1leGFtZW4tb2Z0YWxtb3Njb3BpYXtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG4gIFxufVxuXG4udGFibGUtZXhhbWVuLWZvcm11bGF7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIGF1dG8pO1xufVxuXG4udGFibGUtZXhhbWVuLWRpYWdub3N0aWNve1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGhlYWRlcnMgcHJpbmNpcGFsZXMgKGF6dWwgb3NjdXJvKSAqL1xuLmJhY2tncm91bmQtYXp1bCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGJvdG9uZXMgZW4gaGVhZGVycyBkZSBncmlkICovXG4uYmFja2dyb3VuZC1henVsIC5idG4ge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLWF6dWwgLmJ0biBpIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi8qIEJvdMODwrNuIGZsb3RhbnRlIHBhcmEgdG9nZ2xlIGVuIHRhYmxhcyAqL1xuLmZsb2F0aW5nLXRvZ2dsZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5mbG9hdGluZy10b2dnbGUtYnRuIC5idG4geyAgXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsb2F0aW5nLXRvZ2dsZS1idG4gLmJ0biBpIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi8qIENvbnRlbmVkb3IgZGUgdGFibGEgY29uIHBvc2ljacODwrNuIHJlbGF0aXZhIHBhcmEgZWwgYm90w4PCs24gZmxvdGFudGUgKi9cbi5ncmlkLXRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgc3ViLWhlYWRlcnMgKGF6dWwgY2xhcm8pICovXG4uYmFja2dyb3VuZC1henVsLWNsYXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jbGVhci1jb2xvcikgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBGaWxhcyAqL1xuLnJvdy1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi8qIENvbHVtbmFzICovXG4uY29sLWZsZXgge1xuICBmbGV4OiAxOyAgICAgICAgICAgICAgICAvKiBjYWRhIGNvbHVtbmEgb2N1cGEgZWwgbWlzbW8gZXNwYWNpbyAqL1xuICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAvKiBwYXJhIGRpc3RyaWJ1aXIgbG9zIC5maWVsZC1mbGV4IGRlbnRybyAqL1xuICBnYXA6IDE2cHg7ICAgICAgICAgICAgICAvKiBlc3BhY2lvIGVudHJlIGNhbXBvcyAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBDYW1wb3MgKi9cbi5maWVsZC1mbGV4IHtcbiAgZmxleDogMTsgICAgICAgICAgICAgICAgLyogY2FkYSBjYW1wbyBvY3VwYSBlbCBtaXNtbyBhbmNobyBkZW50cm8gZGUgbGEgY29sdW1uYSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5jYXJkLWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbi5jYXJkLWhlYWRlciBoNSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcmQtaGVhZGVyIGkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG5cbi5idG4ge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICBib3JkZXItY29sb3I6ICMwMDU2YjM7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzYzNmE7XG4gIGJvcmRlci1jb2xvcjogIzU2NWU2NDtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5idG4tb3V0bGluZS1pbmZvIHtcbiAgY29sb3I6IHZhcigtLWluZm8tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWluZm8tY29sb3IpO1xufVxuXG4uYnRuLW91dGxpbmUtaW5mbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWluZm8tY29sb3IpO1xufVxuXG4udGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbn1cblxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG5cbi50ZXh0LW11dGVkIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLyogQW5pbWFjaW9uZXMgcGFyYSBzZWNjaW9uZXMgZGVzcGxlZ2FibGVzICovXG4uY2FyZC1ib2R5IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGNhbXBvcyBudW3Dg8Kpcmljb3MgKi9cbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGNhbXBvcyBkZSBsZW5zb21ldHLDg8KtYSAqL1xuLmxlbnNvbWV0cmlhLWZpZWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sZW5zb21ldHJpYS1maWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cblxuLmxlbnNvbWV0cmlhLWZpZWxkLmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgY2FtcG9zIGRlIGVqZSAqL1xuLmVqZS1maWVsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZWplLWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xufVxuXG4uZWplLWZpZWxkLmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgdGV4dGFyZWFzICovXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSB0YWJsYXMgY29uIGRpdnMgLSBDbGFzZXMgcmV1dGlsaXphYmxlcyAqL1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4vKiBDb250ZW5lZG9yIHJlc3BvbnNpdmUgcGFyYSB0YWJsYXMgY29uIHNjcm9sbCBsYXRlcmFsICovXG4udGFibGUtcmVzcG9uc2l2ZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUtY29udGFpbmVyIC50YWJsZS1jb250YWluZXIge1xuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUtY29udGFpbmVyIC5hZ3VkZXphLXRhYmxlIHtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lciAuZ3JpZC10YWJsZSB7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBTY3JvbGwgbGF0ZXJhbCBwYXJhIHNlY2Npw4PCs24gZGUgZXhhbWVuIHJlZnJhY3Rpdm8gKi9cbi5jYXJkLWJvZHk6aGFzKC50YWJsZS1leGFtZW4tcmVmcmFjdGl2by1rZXJhdG9tZXRyaWEpIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmQtYm9keTpoYXMoLnRhYmxlLWV4YW1lbi1yZWZyYWN0aXZvLWtlcmF0b21ldHJpYSk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5jYXJkLWJvZHk6aGFzKC50YWJsZS1leGFtZW4tcmVmcmFjdGl2by1rZXJhdG9tZXRyaWEpOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNhcmQtYm9keTpoYXMoLnRhYmxlLWV4YW1lbi1yZWZyYWN0aXZvLWtlcmF0b21ldHJpYSk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2FyZC1ib2R5OmhhcygudGFibGUtZXhhbWVuLXJlZnJhY3Rpdm8ta2VyYXRvbWV0cmlhKTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnRhYmxlLWV4YW1lbi1yZWZyYWN0aXZvLWtlcmF0b21ldHJpYSB7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbWVqb3JhciBsYSBleHBlcmllbmNpYSBkZWwgc2Nyb2xsICovXG4udGFibGUtcmVzcG9uc2l2ZS1jb250YWluZXIge1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IC8qIFNjcm9sbCBzdWF2ZSBlbiBpT1MgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBGaXJlZm94ICovXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSB0cmFuc3BhcmVudDsgLyogRmlyZWZveCAqL1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnRhYmxlLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBib3RvbmVzIGVuIHTDg8KtdHVsb3MgZGUgdGFibGFzICovXG4udGFibGUtdGl0bGUgLmJ0biB7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlLXRpdGxlIC5idG4gaSB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi50YWJsZS1oZWFkZXItY2VsbCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udGFibGUtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnRhYmxlLWNlbGwge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi50YWJsZS1jZWxsOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi50YWJsZS1jZWxsLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbn1cblxuLnRhYmxlLWNlbGwtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbn1cblxuLnRhYmxlLWNlbGwtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi50YWJsZS1jZWxsLXRleHQge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi50YWJsZS1jZWxsLXByZWZpeCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlLWNlbGwtcHJlZml4IC5wcmVmaXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xufVxuXG4udGFibGUtY2VsbC1zdWZmaXgge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbn1cblxuLnRhYmxlLWNlbGwtc3VmZml4OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xufVxuXG5cbi8qIEVzdGlsb3MgcGFyYSBjaGVja2JveGVzICovXG4uZm9ybS1jaGVjay1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDAuMjVlbTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGVsIGhlYWRlciAqL1xuLmNvbnRhaW5lci1mbHVpZCAucm93OmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBsYSB0YWJsYSB2YWPDg8KtYSAqL1xuLnRleHQtY2VudGVyIGkuZmEtZmlsZS1tZWRpY2FsIHtcbiAgY29sb3I6ICNkZWUyZTY7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBsYSB0YWJsYSBkZSBhZ3VkZXphIHZpc3VhbCAqL1xuLmNvbG9yLWF6dWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUtY29sb3IpO1xufVxuXG4uY29sb3ItYXp1bC1tZWRpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgYm90b25lcyBkZSB0b2dnbGUgZW4gdGFibGFzICovXG4uYWd1ZGV6YS1jZWxsIC5idG4ge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZ3VkZXphLWNlbGwgLmJ0biBpIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBsYSB0YWJsYSBjb252ZXJ0aWRhIGEgZGl2cyAqL1xuLmFndWRlemEtdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZ3VkZXphLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uYWd1ZGV6YS1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5hZ3VkZXphLWNlbGwge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uYWd1ZGV6YS1jZWxsOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5jYXJkLWJvZHkgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtYm9keSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGxvcyBncsODwqFmaWNvcyBkZSB2ZXJzaW9uZXMgKi9cbi52ZXJzaW9uZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnZlcnNpb25lcy1ncmFmaWNvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52ZXJzaW9uZXMtc3ZnIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi52ZXJzaW9uZXMtdiB7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZpbGw6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBkb21pbmFudC1iYXNlbGluZTogbWlkZGxlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4udmVyc2lvbmVzLXY6aG92ZXIge1xuICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udmVyc2lvbmVzLXY6Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi52ZXJzaW9uZXMtdi5lZGl0aW5nIHtcbiAgZmlsbDogdmFyKC0tZXJyb3ItY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIEVzdGlsb3MgZXNwZWPDg8KtZmljb3MgcGFyYSBsYXMgdGFibGFzIGRlIEVYQU1FTiBSRUZSQUNUSVZPICovXG4udGFibGUtZXhhbWVuLXJlZnJhY3Rpdm8ta2VyYXRvbWV0cmlhIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XG59XG5cbi50YWJsZS1leGFtZW4tcmVmcmFjdGl2by1yZXRpbm9zY29waWEtZXN0YXRpY2Ege1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbn1cblxuLnRhYmxlLWV4YW1lbi1yZWZyYWN0aXZvLXJldGlub3Njb3BpYS1kaW5hbWljYSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xufVxuXG4udGFibGUtZXhhbWVuLXJlZnJhY3Rpdm8tb3RyYS1yZWZyYWNjaW9uIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XG59XG5cbi50YWJsZS1leGFtZW4tcmVmcmFjdGl2by1yYWRpby1rIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XG59XG5cbi50YWJsZS1leGFtZW4tcmVmcmFjdGl2by1zdWJqZXRpdm8ge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG59XG5cbi50YWJsZS1leGFtZW4tcmVmcmFjdGl2by1hdi1yZXRpbm9zY29waWEge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGhlYWRlcnMgZGUgc2VjY2lvbmVzICovXG4uc2VjdGlvbi1oZWFkZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBSZXNwb25zaXZlIGVzcGVjw4PCrWZpY28gcGFyYSBlbCBjb21wb25lbnRlIGRlIGhpc3RvcmlhcyBjbMODwq1uaWNhcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLWhlYWRlciBoNSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2410:
/*!****************************************************!*\
  !*** ./src/app/directives/axis-input.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxisInputDirective: () => (/* binding */ AxisInputDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AxisInputDirective {
  constructor(el) {
    this.el = el;
    this.maxAxisValue = 180;
    this.zeroToMax = false;
    this.isInternalUpdate = false;
  }
  onKeyDown(event) {
    if (this.isPermittedKey(event)) {
      return;
    }
    if (this.isNumericKey(event)) {
      const nextValue = this.getNextValue(event.key);
      if (!this.isValueInRange(nextValue)) {
        event.preventDefault();
      }
      return;
    }
    event.preventDefault();
  }
  onInput() {
    if (this.isInternalUpdate) {
      this.isInternalUpdate = false;
      return;
    }
    const input = this.el.nativeElement;
    const digitsOnly = input.value.replace(/\D+/g, '');
    if (digitsOnly === '') {
      this.updateInputValue('');
      return;
    }
    const numericValue = parseInt(digitsOnly, 10);
    if (isNaN(numericValue)) {
      this.updateInputValue('');
      return;
    }
    this.updateInputValue(Math.min(numericValue, this.maxAxisValue).toString());
  }
  onPaste(event) {
    const pastedData = event.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pastedData)) {
      event.preventDefault();
      return;
    }
    const combinedValue = pastedData.slice(0, 3);
    const numericValue = parseInt(combinedValue, 10);
    if (numericValue > this.maxAxisValue) {
      event.preventDefault();
      this.el.nativeElement.value = this.maxAxisValue.toString();
      this.dispatchInputEvent();
      return;
    }
  }
  onBlur() {
    if (!this.zeroToMax) {
      return;
    }
    const value = this.el.nativeElement.value.trim();
    if (value === '0') {
      this.updateInputValue(this.maxAxisValue.toString());
    }
  }
  isPermittedKey(event) {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Home', 'End'];
    if (allowedKeys.includes(event.key)) {
      return true;
    }
    if (event.ctrlKey || event.metaKey) {
      return ['c', 'v', 'x', 'a'].includes(event.key.toLowerCase());
    }
    return false;
  }
  isNumericKey(event) {
    return /^[0-9]$/.test(event.key);
  }
  getNextValue(addedDigit) {
    const input = this.el.nativeElement;
    const {
      selectionStart,
      selectionEnd,
      value
    } = input;
    if (selectionStart === null || selectionEnd === null) {
      return value + addedDigit;
    }
    return value.substring(0, selectionStart) + addedDigit + value.substring(selectionEnd);
  }
  isValueInRange(value) {
    if (!/^\d{1,3}$/.test(value)) {
      return false;
    }
    const numericValue = parseInt(value, 10);
    return numericValue >= 0 && numericValue <= this.maxAxisValue;
  }
  updateInputValue(value) {
    if (this.el.nativeElement.value === value) {
      return;
    }
    this.isInternalUpdate = true;
    this.el.nativeElement.value = value;
    this.dispatchInputEvent();
  }
  dispatchInputEvent() {
    const event = new Event('input', {
      bubbles: true
    });
    this.el.nativeElement.dispatchEvent(event);
  }
  static {
    this.ɵfac = function AxisInputDirective_Factory(t) {
      return new (t || AxisInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AxisInputDirective,
      selectors: [["", "appAxisInput", ""]],
      hostBindings: function AxisInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AxisInputDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("input", function AxisInputDirective_input_HostBindingHandler() {
            return ctx.onInput();
          })("paste", function AxisInputDirective_paste_HostBindingHandler($event) {
            return ctx.onPaste($event);
          })("blur", function AxisInputDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
      },
      inputs: {
        zeroToMax: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "appAxisInputZeroToMax", "zeroToMax"]
      },
      standalone: true
    });
  }
}

/***/ }),

/***/ 3495:
/*!******************************************************!*\
  !*** ./src/app/directives/prefix-input.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrefixInputDirective: () => (/* binding */ PrefixInputDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class PrefixInputDirective {
  constructor(el) {
    this.el = el;
    this.appPrefixInput = '';
    this.onChange = value => {};
    this.onTouched = () => {};
    this.currentValue = '';
  }
  ngOnInit() {
    // Establecer el valor inicial con el prefijo
    if (this.appPrefixInput && !this.currentValue) {
      this.currentValue = this.appPrefixInput;
      this.el.nativeElement.value = this.currentValue;
    }
  }
  onInput(event) {
    const input = event.target;
    let value = input.value;
    // Si el valor no comienza con el prefijo, restaurar el prefijo
    if (this.appPrefixInput && !value.startsWith(this.appPrefixInput)) {
      // Si el usuario está intentando borrar el prefijo, mantenerlo
      if (value.length < this.appPrefixInput.length) {
        value = this.appPrefixInput;
      } else {
        // Si el usuario está escribiendo después del prefijo, mantener el prefijo
        value = this.appPrefixInput + value.substring(this.appPrefixInput.length);
      }
    }
    this.currentValue = value;
    input.value = value;
    this.onChange(value);
  }
  onKeyDown(event) {
    const input = event.target;
    const cursorPosition = input.selectionStart || 0;
    // Si el cursor está antes del prefijo y el usuario presiona una tecla de borrado
    if (this.appPrefixInput && cursorPosition < this.appPrefixInput.length) {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        // Mover el cursor al final del prefijo
        setTimeout(() => {
          input.setSelectionRange(this.appPrefixInput.length, this.appPrefixInput.length);
        }, 0);
      }
    }
  }
  onClick(event) {
    const input = event.target;
    const cursorPosition = input.selectionStart || 0;
    // Si el usuario hace clic antes del prefijo, mover el cursor al final del prefijo
    if (this.appPrefixInput && cursorPosition < this.appPrefixInput.length) {
      setTimeout(() => {
        input.setSelectionRange(this.appPrefixInput.length, this.appPrefixInput.length);
      }, 0);
    }
  }
  onFocus(event) {
    const input = event.target;
    // Al enfocar, posicionar el cursor al final del prefijo
    if (this.appPrefixInput) {
      setTimeout(() => {
        input.setSelectionRange(this.appPrefixInput.length, this.appPrefixInput.length);
      }, 0);
    }
  }
  onBlur() {
    this.onTouched();
  }
  // ControlValueAccessor implementation
  writeValue(value) {
    this.currentValue = value || this.appPrefixInput;
    this.el.nativeElement.value = this.currentValue;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.el.nativeElement.disabled = isDisabled;
  }
  static {
    this.ɵfac = function PrefixInputDirective_Factory(t) {
      return new (t || PrefixInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PrefixInputDirective,
      selectors: [["", "appPrefixInput", ""]],
      hostBindings: function PrefixInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PrefixInputDirective_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          })("keydown", function PrefixInputDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("click", function PrefixInputDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("focus", function PrefixInputDirective_focus_HostBindingHandler($event) {
            return ctx.onFocus($event);
          })("blur", function PrefixInputDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
      },
      inputs: {
        appPrefixInput: "appPrefixInput"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: PrefixInputDirective,
        multi: true
      }])]
    });
  }
}

/***/ }),

/***/ 1889:
/*!********************************************************!*\
  !*** ./src/app/services/historias-clinicas.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoriasClinicasService: () => (/* binding */ HistoriasClinicasService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class HistoriasClinicasService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/historias-clinicas`;
  }
  getHistoriasClinicas(pacienteId) {
    return this.http.get(`${this.apiUrl}?paciente_id=${pacienteId}`);
  }
  getHistoriaClinicaById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createHistoriaClinica(historia) {
    return this.http.post(this.apiUrl, historia);
  }
  createHistoriaClinicaOrganizada(historia) {
    return this.http.post(this.apiUrl, historia);
  }
  updateHistoriaClinica(id, historia) {
    return this.http.put(`${this.apiUrl}/${id}`, historia);
  }
  updateHistoriaClinicaOrganizada(id, historia) {
    return this.http.put(`${this.apiUrl}/${id}`, historia);
  }
  deleteHistoriaClinica(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.ɵfac = function HistoriasClinicasService_Factory(t) {
      return new (t || HistoriasClinicasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HistoriasClinicasService,
      factory: HistoriasClinicasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_historias-clinicas_historias-clinicas_component_ts.js.map