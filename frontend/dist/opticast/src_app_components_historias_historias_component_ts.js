"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_historias_historias_component_ts"],{

/***/ 9869:
/*!*************************************************************!*\
  !*** ./src/app/components/historias/historias.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoriasComponent: () => (/* binding */ HistoriasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_historias_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/historias.service */ 6814);
/* harmony import */ var _services_pacientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pacientes.service */ 4894);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast.service */ 8397);








function HistoriasComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const paciente_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", paciente_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", paciente_r1.nombre, " ", paciente_r1.apellidos, " - ", paciente_r1.documento, " ");
  }
}
function HistoriasComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriasComponent_tr_61_Template_button_click_16_listener() {
      const historia_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.viewHistoria(historia_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriasComponent_tr_61_Template_button_click_18_listener() {
      const historia_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.downloadPDF(historia_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const historia_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 7, historia_r3.fecha_consulta, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.getPacienteNombre(historia_r3.paciente_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](8, 10, historia_r3.motivo_consulta, 0, 50), "", (historia_r3.motivo_consulta || "").length > 50 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](11, 14, historia_r3.diagnostico, 0, 50), "", (historia_r3.diagnostico || "").length > 50 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 18, historia_r3.proxima_cita, "dd/MM/yyyy"));
  }
}
function HistoriasComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No se encontraron historias cl\u00EDnicas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HistoriasComponent_option_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const paciente_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", paciente_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", paciente_r5.nombre, " ", paciente_r5.apellidos, " - ", paciente_r5.documento, " ");
  }
}
function HistoriasComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Paciente es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HistoriasComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Fecha de consulta es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HistoriasComponent_div_228_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 32)(2, "div", 33)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Paciente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 33)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Fecha:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 82)(12, "div", 37)(13, "h2", 38)(14, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Cuestionario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 84)(17, "div", 41)(18, "p")(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Motivo de Consulta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p")(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "S\u00EDntomas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p")(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Antecedentes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p")(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Medicamentos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p")(35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Alergias:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 37)(39, "h2", 38)(40, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Agudeza Visual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 86)(43, "div", 41)(44, "div", 9)(45, "div", 33)(46, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Ojo Derecho (OD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p")(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Lejos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "p")(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Cerca:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 33)(57, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Ojo Izquierdo (OI)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p")(60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Lejos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p")(64, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Cerca:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 37)(68, "h2", 38)(69, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Examen Refractivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 88)(72, "div", 41)(73, "div", 9)(74, "div", 33)(75, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Ojo Derecho (OD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "p")(78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Esfera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p")(82, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Cilindro:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "p")(86, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Eje:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 33)(90, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Ojo Izquierdo (OI)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "p")(93, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Esfera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "p")(97, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Cilindro:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "p")(101, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Eje:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "p")(105, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Adici\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 37)(109, "h2", 38)(110, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 90)(113, "div", 41)(114, "p")(115, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Diagn\u00F3stico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "p")(119, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Tratamiento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "p")(123, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Observaciones:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "p")(127, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Pr\u00F3xima Cita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](130, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.getPacienteNombre(ctx_r3.selectedHistoria.paciente_id), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 22, ctx_r3.selectedHistoria.fecha_consulta, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.motivo_consulta || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.sintomas || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.antecedentes || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.medicamentos || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.alergias || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.av_od_lejos || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.av_od_cerca || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.av_oi_lejos || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.av_oi_cerca || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.esfera_od || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.cilindro_od || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.eje_od || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.esfera_oi || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.cilindro_oi || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.eje_oi || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.adicion || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.diagnostico || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.tratamiento || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.observaciones || "No especificado", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedHistoria.proxima_cita ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](130, 25, ctx_r3.selectedHistoria.proxima_cita, "dd/MM/yyyy") : "No programada", "");
  }
}
class HistoriasComponent {
  constructor(fb, historiasService, pacientesService, toastService) {
    this.fb = fb;
    this.historiasService = historiasService;
    this.pacientesService = pacientesService;
    this.toastService = toastService;
    this.historias = [];
    this.pacientes = [];
    this.selectedHistoria = null;
    this.historiaForm = this.fb.group({
      paciente_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      fecha_consulta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      motivo_consulta: [''],
      sintomas: [''],
      antecedentes: [''],
      medicamentos: [''],
      alergias: [''],
      av_od_lejos: [''],
      av_od_cerca: [''],
      av_oi_lejos: [''],
      av_oi_cerca: [''],
      esfera_od: [''],
      cilindro_od: [''],
      eje_od: [''],
      esfera_oi: [''],
      cilindro_oi: [''],
      eje_oi: [''],
      adicion: [''],
      observaciones: [''],
      diagnostico: [''],
      tratamiento: [''],
      proxima_cita: ['']
    });
    this.searchForm = this.fb.group({
      paciente_id: [''],
      fecha_desde: [''],
      fecha_hasta: ['']
    });
  }
  ngOnInit() {
    this.loadHistorias();
    this.loadPacientes();
  }
  loadHistorias() {
    this.historiasService.getHistorias().subscribe({
      next: data => {
        this.historias = data;
      },
      error: error => {
        this.toastService.showError('Error al cargar historias clínicas');
        console.error('Error loading historias:', error);
      }
    });
  }
  loadPacientes() {
    this.pacientesService.getPacientes().subscribe({
      next: data => {
        this.pacientes = data;
      },
      error: error => {
        console.error('Error loading pacientes:', error);
      }
    });
  }
  searchHistorias() {
    const searchData = this.searchForm.value;
    this.historiasService.searchHistorias(searchData).subscribe({
      next: data => {
        this.historias = data;
      },
      error: error => {
        this.toastService.showError('Error en la búsqueda');
        console.error('Error searching historias:', error);
      }
    });
  }
  clearSearch() {
    this.searchForm.reset();
    this.loadHistorias();
  }
  showCreateForm() {
    this.historiaForm.reset();
    this.historiaForm.patchValue({
      fecha_consulta: new Date().toISOString().split('T')[0]
    });
    this.showModal('historiaModal');
  }
  saveHistoria() {
    if (this.historiaForm.invalid) return;
    const formData = this.historiaForm.value;
    const createData = formData;
    this.historiasService.createHistoria(createData).subscribe({
      next: () => {
        this.toastService.showSuccess('Historia clínica creada correctamente');
        this.hideModal('historiaModal');
        this.loadHistorias();
      },
      error: error => {
        this.toastService.showError('Error al crear historia clínica');
        console.error('Error creating historia:', error);
      }
    });
  }
  viewHistoria(historia) {
    this.selectedHistoria = historia;
    this.showModal('viewHistoriaModal');
  }
  downloadPDF(id) {
    this.historiasService.downloadPDF(id).subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `historia_clinica_${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error: error => {
        this.toastService.showError('Error al descargar PDF');
        console.error('Error downloading PDF:', error);
      }
    });
  }
  getPacienteNombre(pacienteId) {
    const paciente = this.pacientes.find(p => p.id === pacienteId);
    return paciente ? `${paciente.nombre} ${paciente.apellidos}` : 'Paciente no encontrado';
  }
  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      const bootstrapModal = new window.bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }
  hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }
  static {
    this.ɵfac = function HistoriasComponent_Factory(t) {
      return new (t || HistoriasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_historias_service__WEBPACK_IMPORTED_MODULE_0__.HistoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_pacientes_service__WEBPACK_IMPORTED_MODULE_1__.PacientesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HistoriasComponent,
      selectors: [["app-historias"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 235,
      vars: 14,
      consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "card"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-3"], [1, "form-label"], ["formControlName", "paciente_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "fecha_desde", 1, "form-control"], ["type", "date", "formControlName", "fecha_hasta", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "me-2"], [1, "fas", "fa-search"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "historiaModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body"], [1, "row", "mb-3"], [1, "col-md-6"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "formControlName", "fecha_consulta", 1, "form-control"], ["id", "historiaAccordion", 1, "accordion"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#cuestionarioCollapse", 1, "accordion-button"], ["id", "cuestionarioCollapse", "data-bs-parent", "#historiaAccordion", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["formControlName", "motivo_consulta", "rows", "3", "placeholder", "Describa el motivo de la consulta", 1, "form-control"], [1, "row", "mt-3"], ["formControlName", "sintomas", "rows", "3", "placeholder", "Describa los s\u00EDntomas", 1, "form-control"], ["formControlName", "antecedentes", "rows", "3", "placeholder", "Antecedentes m\u00E9dicos relevantes", 1, "form-control"], ["formControlName", "medicamentos", "rows", "2", "placeholder", "Medicamentos que toma actualmente", 1, "form-control"], ["formControlName", "alergias", "rows", "2", "placeholder", "Alergias conocidas", 1, "form-control"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#agudezaCollapse", 1, "accordion-button", "collapsed"], ["id", "agudezaCollapse", "data-bs-parent", "#historiaAccordion", 1, "accordion-collapse", "collapse"], ["type", "number", "formControlName", "av_od_lejos", "step", "0.01", "min", "0", "max", "2", "placeholder", "0.00 - 2.00", 1, "form-control"], ["type", "number", "formControlName", "av_od_cerca", "step", "0.01", "min", "0", "max", "2", "placeholder", "0.00 - 2.00", 1, "form-control"], ["type", "number", "formControlName", "av_oi_lejos", "step", "0.01", "min", "0", "max", "2", "placeholder", "0.00 - 2.00", 1, "form-control"], ["type", "number", "formControlName", "av_oi_cerca", "step", "0.01", "min", "0", "max", "2", "placeholder", "0.00 - 2.00", 1, "form-control"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#refractivoCollapse", 1, "accordion-button", "collapsed"], ["id", "refractivoCollapse", "data-bs-parent", "#historiaAccordion", 1, "accordion-collapse", "collapse"], [1, "col-md-4"], ["type", "number", "formControlName", "esfera_od", "step", "0.25", "placeholder", "\u00B10.00", 1, "form-control"], ["type", "number", "formControlName", "cilindro_od", "step", "0.25", "placeholder", "\u00B10.00", 1, "form-control"], ["type", "number", "formControlName", "eje_od", "min", "0", "max", "180", "placeholder", "0-180", 1, "form-control"], ["type", "number", "formControlName", "esfera_oi", "step", "0.25", "placeholder", "\u00B10.00", 1, "form-control"], ["type", "number", "formControlName", "cilindro_oi", "step", "0.25", "placeholder", "\u00B10.00", 1, "form-control"], ["type", "number", "formControlName", "eje_oi", "min", "0", "max", "180", "placeholder", "0-180", 1, "form-control"], ["type", "number", "formControlName", "adicion", "step", "0.25", "min", "0", "max", "3", "placeholder", "0.00 - 3.00", 1, "form-control"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#observacionesCollapse", 1, "accordion-button", "collapsed"], ["id", "observacionesCollapse", "data-bs-parent", "#historiaAccordion", 1, "accordion-collapse", "collapse", "show"], ["formControlName", "diagnostico", "rows", "3", "placeholder", "Diagn\u00F3stico del paciente", 1, "form-control"], ["formControlName", "tratamiento", "rows", "3", "placeholder", "Tratamiento recomendado", 1, "form-control"], ["formControlName", "observaciones", "rows", "3", "placeholder", "Observaciones adicionales", 1, "form-control"], ["type", "date", "formControlName", "proxima_cita", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["id", "viewHistoriaModal", "tabindex", "-1", 1, "modal", "fade"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-download"], [3, "value"], [1, "btn", "btn-sm", "btn-outline-info", "me-1", 3, "click"], [1, "fas", "fa-eye"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "invalid-feedback"], ["id", "viewHistoriaAccordion", 1, "accordion"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#viewCuestionarioCollapse", 1, "accordion-button"], ["id", "viewCuestionarioCollapse", "data-bs-parent", "#viewHistoriaAccordion", 1, "accordion-collapse", "collapse", "show"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#viewAgudezaCollapse", 1, "accordion-button", "collapsed"], ["id", "viewAgudezaCollapse", "data-bs-parent", "#viewHistoriaAccordion", 1, "accordion-collapse", "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#viewRefractivoCollapse", 1, "accordion-button", "collapsed"], ["id", "viewRefractivoCollapse", "data-bs-parent", "#viewHistoriaAccordion", 1, "accordion-collapse", "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#viewObservacionesCollapse", 1, "accordion-button", "collapsed"], ["id", "viewObservacionesCollapse", "data-bs-parent", "#viewHistoriaAccordion", 1, "accordion-collapse", "collapse", "show"]],
      template: function HistoriasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Historias Cl\u00EDnicas");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriasComponent_Template_button_click_6_listener() {
            return ctx.showCreateForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Nueva Historia ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 6)(12, "div", 7)(13, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function HistoriasComponent_Template_form_ngSubmit_13_listener() {
            return ctx.searchHistorias();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Paciente");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "select", 12)(19, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Todos los pacientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, HistoriasComponent_option_21_Template, 2, 4, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10)(23, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Fecha Desde");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10)(27, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Fecha Hasta");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 10)(31, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div")(34, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Buscar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriasComponent_Template_button_click_37_listener() {
            return ctx.clearSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Limpiar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 9)(41, "div", 2)(42, "div", 6)(43, "div", 7)(44, "div", 21)(45, "table", 22)(46, "thead")(47, "tr")(48, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Paciente");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Motivo Consulta");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Diagn\u00F3stico");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Pr\u00F3xima Cita");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Acciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, HistoriasComponent_tr_61_Template, 20, 21, "tr", 23)(62, HistoriasComponent_tr_62_Template, 3, 0, "tr", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 25)(64, "div", 26)(65, "div", 27)(66, "div", 28)(67, "h5", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Nueva Historia Cl\u00EDnica");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 31)(71, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function HistoriasComponent_Template_form_ngSubmit_71_listener() {
            return ctx.saveHistoria();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 32)(73, "div", 33)(74, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Paciente *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "select", 12)(77, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Seleccionar paciente");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, HistoriasComponent_option_79_Template, 2, 4, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, HistoriasComponent_div_80_Template, 2, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 33)(82, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Fecha de Consulta *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, HistoriasComponent_div_85_Template, 2, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 36)(87, "div", 37)(88, "h2", 38)(89, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " Cuestionario ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 40)(92, "div", 41)(93, "div", 9)(94, "div", 2)(95, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Motivo de Consulta");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "textarea", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 43)(99, "div", 33)(100, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "S\u00EDntomas");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "textarea", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 33)(104, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Antecedentes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "textarea", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 43)(108, "div", 33)(109, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Medicamentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "textarea", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 33)(113, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Alergias");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "textarea", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 37)(117, "h2", 38)(118, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, " Agudeza Visual ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 49)(121, "div", 41)(122, "div", 9)(123, "div", 33)(124, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Ojo Derecho (OD)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 9)(127, "div", 33)(128, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Lejos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 33)(132, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Cerca");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 33)(136, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Ojo Izquierdo (OI)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 9)(139, "div", 33)(140, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Lejos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 33)(144, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Cerca");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 37)(148, "h2", 38)(149, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, " Examen Refractivo ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 55)(152, "div", 41)(153, "div", 9)(154, "div", 33)(155, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Ojo Derecho (OD)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 9)(158, "div", 56)(159, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Esfera");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 56)(163, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Cilindro");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 56)(167, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "Eje");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 33)(171, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Ojo Izquierdo (OI)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 9)(174, "div", 56)(175, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Esfera");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](177, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 56)(179, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Cilindro");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 56)(183, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Eje");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 43)(187, "div", 33)(188, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Adici\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 37)(192, "h2", 38)(193, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, " Observaciones ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 65)(196, "div", 41)(197, "div", 9)(198, "div", 33)(199, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "Diagn\u00F3stico");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "textarea", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 33)(203, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Tratamiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "textarea", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 43)(207, "div", 33)(208, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Observaciones Generales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](210, "textarea", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 33)(212, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "Pr\u00F3xima Cita");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "input", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 70)(216, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "Cancelar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriasComponent_Template_button_click_218_listener() {
            return ctx.saveHistoria();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, " Crear Historia ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 73)(221, "div", 26)(222, "div", 27)(223, "div", 28)(224, "h5", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Historia Cl\u00EDnica");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](228, HistoriasComponent_div_228_Template, 131, 28, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 70)(230, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "Cerrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriasComponent_Template_button_click_232_listener() {
            return ctx.downloadPDF((ctx.selectedHistoria == null ? null : ctx.selectedHistoria.id) || 0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](233, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, " Descargar PDF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.pacientes);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.historias);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.historias.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.historiaForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_5_0 = ctx.historiaForm.get("paciente_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.historiaForm.get("paciente_id")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.pacientes);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.historiaForm.get("paciente_id")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.historiaForm.get("paciente_id")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx.historiaForm.get("fecha_consulta")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.historiaForm.get("fecha_consulta")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.historiaForm.get("fecha_consulta")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.historiaForm.get("fecha_consulta")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](133);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.historiaForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedHistoria);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: [".accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n      background-color: #e7f3ff;\n      color: #0c63e4;\n    }\n    \n    .accordion-button[_ngcontent-%COMP%]:focus {\n      box-shadow: none;\n      border-color: rgba(0, 0, 0, 0.125);\n    }\n    \n    .modal-xl[_ngcontent-%COMP%] {\n      max-width: 1200px;\n    }\n    \n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      background-color: #f8f9fa;\n      border-top: none;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpYXMvaGlzdG9yaWFzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSx5QkFBeUI7TUFDekIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixrQ0FBa0M7SUFDcEM7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsZ0JBQWdCO0lBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2YzZmY7XG4gICAgICBjb2xvcjogIzBjNjNlNDtcbiAgICB9XG4gICAgXG4gICAgLmFjY29yZGlvbi1idXR0b246Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgfVxuICAgIFxuICAgIC5tb2RhbC14bCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6814:
/*!***********************************************!*\
  !*** ./src/app/services/historias.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoriasService: () => (/* binding */ HistoriasService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class HistoriasService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/historias`;
  }
  getHistorias() {
    return this.http.get(this.apiUrl);
  }
  getHistoriaById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  searchHistorias(searchData) {
    const params = new URLSearchParams();
    if (searchData.pacienteId) params.append('paciente_id', searchData.pacienteId.toString());
    if (searchData.fecha_desde) params.append('fecha_desde', searchData.fecha_desde);
    if (searchData.fecha_hasta) params.append('fecha_hasta', searchData.fecha_hasta);
    return this.http.get(`${this.apiUrl}/search?${params.toString()}`);
  }
  createHistoria(historia) {
    return this.http.post(this.apiUrl, historia);
  }
  downloadPDF(id) {
    return this.http.get(`${this.apiUrl}/${id}/pdf`, {
      responseType: 'blob'
    });
  }
  static {
    this.ɵfac = function HistoriasService_Factory(t) {
      return new (t || HistoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HistoriasService,
      factory: HistoriasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_historias_historias_component_ts.js.map