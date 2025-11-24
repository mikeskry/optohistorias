"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_citas_citas_component_ts"],{

/***/ 9897:
/*!*****************************************************!*\
  !*** ./src/app/components/citas/citas.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitasComponent: () => (/* binding */ CitasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/confirmation-modal/confirmation-modal.component */ 107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_citas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/citas.service */ 6898);
/* harmony import */ var _services_pacientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pacientes.service */ 4894);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast.service */ 8397);










function CitasComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", day_r1.dayName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, day_r1.date, "dd/MM"), " ");
  }
}
function CitasComponent_tr_34_td_3_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitasComponent_tr_34_td_3_div_1_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const timeSlot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.editCita(ctx_r4.getAppointment(day_r3.date, timeSlot_r4)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitasComponent_tr_34_td_3_div_1_div_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const timeSlot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.openDeleteModal(ctx_r4.getAppointment(day_r3.date, timeSlot_r4)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CitasComponent_tr_34_td_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " No editable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CitasComponent_tr_34_td_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CitasComponent_tr_34_td_3_div_1_div_5_Template, 5, 0, "div", 47)(6, CitasComponent_tr_34_td_3_div_1_div_6_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const timeSlot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.getAppointmentPatient(day_r3.date, timeSlot_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.getAppointmentNotes(day_r3.date, timeSlot_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.isTimeSlotPast(day_r3.date, timeSlot_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isTimeSlotPast(day_r3.date, timeSlot_r4));
  }
}
function CitasComponent_tr_34_td_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 56)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitasComponent_tr_34_td_3_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const timeSlot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.quickCreateCita(day_r3.date, timeSlot_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CitasComponent_tr_34_td_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 58)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Pasado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CitasComponent_tr_34_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CitasComponent_tr_34_td_3_div_1_Template, 7, 4, "div", 42)(2, CitasComponent_tr_34_td_3_div_2_Template, 5, 0, "div", 43)(3, CitasComponent_tr_34_td_3_div_3_Template, 5, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const timeSlot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("table-success", ctx_r4.hasAppointment(day_r3.date, timeSlot_r4))("table-warning", ctx_r4.isTimeSlotPast(day_r3.date, timeSlot_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.hasAppointment(day_r3.date, timeSlot_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.hasAppointment(day_r3.date, timeSlot_r4) && !ctx_r4.isTimeSlotPast(day_r3.date, timeSlot_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.hasAppointment(day_r3.date, timeSlot_r4) && ctx_r4.isTimeSlotPast(day_r3.date, timeSlot_r4));
  }
}
function CitasComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CitasComponent_tr_34_td_3_Template, 4, 7, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const timeSlot_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](timeSlot_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.weekDays);
  }
}
function CitasComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Nombre del paciente es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CitasComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CitasComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Hora es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class CitasComponent {
  constructor(fb, citasService, pacientesService, toastService) {
    this.fb = fb;
    this.citasService = citasService;
    this.pacientesService = pacientesService;
    this.toastService = toastService;
    this.citas = [];
    this.pacientes = [];
    this.isEditing = false;
    this.editingCitaId = null;
    this.currentWeekStart = new Date();
    this.timeSlots = [];
    this.weekDays = [];
    // Modal de confirmación
    this.showDeleteModal = false;
    this.selectedCitaForDelete = null;
    this.isDeleting = false;
    this.citaForm = this.fb.group({
      nombre_paciente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      hora: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    this.generateTimeSlots();
    this.initializeWeek();
    this.loadCitas();
    this.loadPacientes();
  }
  generateTimeSlots() {
    this.timeSlots = [];
    const horaInicio = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.citas.horaInicio;
    const horaFin = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.citas.horaFin;
    for (let hour = horaInicio; hour < horaFin; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        this.timeSlots.push(timeString);
      }
    }
  }
  initializeWeek() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    this.currentWeekStart = new Date(today.setDate(diff));
    this.updateWeekDays();
  }
  updateWeekDays() {
    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(this.currentWeekStart);
      date.setDate(date.getDate() + i);
      this.weekDays.push({
        date: date,
        dayName: date.toLocaleDateString('es-ES', {
          weekday: 'short'
        })
      });
    }
  }
  previousWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.updateWeekDays();
    this.loadCitas();
  }
  nextWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.updateWeekDays();
    this.loadCitas();
  }
  getWeekRange() {
    const endDate = new Date(this.currentWeekStart);
    endDate.setDate(endDate.getDate() + 6);
    return `${this.currentWeekStart.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long'
    })} - ${endDate.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })}`;
  }
  loadCitas() {
    const startDate = this.formatDateForAPI(this.currentWeekStart);
    const endDate = new Date(this.currentWeekStart);
    endDate.setDate(endDate.getDate() + 6);
    const endDateStr = this.formatDateForAPI(endDate);
    this.citasService.getCitasByDateRange(startDate, endDateStr).subscribe({
      next: response => {
        // Extraer el array de datos de la respuesta
        const data = response.data || response;
        this.citas = Array.isArray(data) ? data : [];
      },
      error: error => {
        this.toastService.showError('Error al cargar citas');
        console.error('Error loading citas:', error);
        this.citas = [];
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
  hasAppointment(date, timeSlot) {
    if (!Array.isArray(this.citas)) {
      return false;
    }
    const dateStr = this.formatDateForAPI(date);
    return this.citas.some(cita => {
      // Comparar fecha
      const fechaMatch = cita.fecha === dateStr;
      // Comparar hora (formato puede ser HH:MM:SS o HH:MM)
      const horaMatch = cita.hora === timeSlot || cita.hora === timeSlot + ':00';
      return fechaMatch && horaMatch;
    });
  }
  getAppointment(date, timeSlot) {
    if (!Array.isArray(this.citas)) {
      return undefined;
    }
    const dateStr = this.formatDateForAPI(date);
    return this.citas.find(cita => {
      // Comparar fecha
      const fechaMatch = cita.fecha === dateStr;
      // Comparar hora (formato puede ser HH:MM:SS o HH:MM)
      const horaMatch = cita.hora === timeSlot || cita.hora === timeSlot + ':00';
      return fechaMatch && horaMatch;
    });
  }
  getAppointmentPatient(date, timeSlot) {
    const cita = this.getAppointment(date, timeSlot);
    return cita?.nombre_paciente || '';
  }
  getAppointmentNotes(date, timeSlot) {
    const cita = this.getAppointment(date, timeSlot);
    return cita?.notas || '';
  }
  isTimeSlotPast(date, timeSlot) {
    const now = new Date();
    const appointmentDateTime = new Date(date);
    const [hours, minutes] = timeSlot.split(':');
    appointmentDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    return appointmentDateTime < now;
  }
  showCreateForm() {
    this.isEditing = false;
    this.editingCitaId = null;
    this.citaForm.reset();
    this.citaForm.patchValue({
      fecha: this.formatDateForAPI(new Date())
    });
    this.showModal();
  }
  quickCreateCita(date, timeSlot) {
    this.isEditing = false;
    this.editingCitaId = null;
    this.citaForm.reset();
    this.citaForm.patchValue({
      fecha: this.formatDateForAPI(date),
      hora: timeSlot
    });
    this.showModal();
  }
  editCita(cita) {
    this.isEditing = true;
    this.editingCitaId = cita.id;
    // Formatear la hora de HH:MM:SS a HH:MM si es necesario
    let horaFormateada = cita.hora;
    if (horaFormateada && horaFormateada.includes(':')) {
      const partesHora = horaFormateada.split(':');
      if (partesHora.length >= 2) {
        horaFormateada = `${partesHora[0]}:${partesHora[1]}`;
      }
    }
    this.citaForm.patchValue({
      nombre_paciente: cita.nombre_paciente,
      fecha: cita.fecha,
      hora: horaFormateada
    });
    this.showModal();
  }
  saveCita() {
    if (this.citaForm.invalid) return;
    const formData = this.citaForm.value;
    // Agregar duración fija de 30 minutos
    formData.duracion = 30;
    if (this.isEditing && this.editingCitaId) {
      const updateData = {
        ...formData,
        id: this.editingCitaId
      };
      this.citasService.updateCita(updateData).subscribe({
        next: () => {
          this.toastService.showSuccess('Cita actualizada correctamente');
          this.hideModal();
          this.loadCitas();
        },
        error: error => {
          this.toastService.showError('Error al actualizar cita');
          console.error('Error updating cita:', error);
        }
      });
    } else {
      const createData = formData;
      this.citasService.createCita(createData).subscribe({
        next: () => {
          this.toastService.showSuccess('Cita creada correctamente');
          this.hideModal();
          this.loadCitas();
        },
        error: error => {
          this.toastService.showError('Error al crear cita');
          console.error('Error creating cita:', error);
        }
      });
    }
  }
  deleteCita(id) {
    const cita = this.citas.find(c => c.id === id);
    if (cita) {
      this.selectedCitaForDelete = cita;
      this.showDeleteModal = true;
    }
  }
  openDeleteModal(cita) {
    this.selectedCitaForDelete = cita;
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.selectedCitaForDelete = null;
    this.isDeleting = false;
  }
  confirmDelete() {
    if (!this.selectedCitaForDelete) return;
    this.isDeleting = true;
    this.citasService.deleteCita(this.selectedCitaForDelete.id).subscribe({
      next: () => {
        this.toastService.showSuccess('Cita eliminada correctamente');
        this.loadCitas();
        this.closeDeleteModal();
      },
      error: error => {
        this.toastService.showError('Error al eliminar cita');
        console.error('Error deleting cita:', error);
        this.isDeleting = false;
      }
    });
  }
  showModal() {
    const modal = document.getElementById('citaModal');
    if (modal) {
      const bootstrapModal = new window.bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }
  hideModal() {
    const modal = document.getElementById('citaModal');
    if (modal) {
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }
  formatDateForAPI(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  static {
    this.ɵfac = function CitasComponent_Factory(t) {
      return new (t || CitasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_citas_service__WEBPACK_IMPORTED_MODULE_2__.CitasService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_pacientes_service__WEBPACK_IMPORTED_MODULE_3__.PacientesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CitasComponent,
      selectors: [["app-citas"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 72,
      vars: 19,
      consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-primary", 2, "display", "none", 3, "click"], [1, "fas", "fa-plus"], [1, "card"], [1, "card-body"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-chevron-left"], [1, "mb-0"], [1, "fas", "fa-chevron-right"], [1, "row"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "text-center", 2, "width", "120px"], ["class", "text-center", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "citaModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "formControlName", "nombre_paciente", "placeholder", "Escriba el nombre completo del paciente", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "formControlName", "fecha", 1, "form-control"], [1, "row", "mt-3"], ["type", "text", "formControlName", "hora", "readonly", "", 1, "form-control"], [1, "form-control-plaintext"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["title", "Eliminar Cita", "warningMessage", "Esta acci\u00F3n no se puede deshacer.", "confirmText", "Eliminar", "cancelText", "Cancelar", "confirmButtonClass", "btn-danger", 3, "confirm", "cancel", "isVisible", "message", "isLoading"], [1, "text-center"], [1, "text-center", "fw-bold"], ["class", "position-relative", "style", "height: 80px; vertical-align: middle;", 3, "table-success", "table-warning", 4, "ngFor", "ngForOf"], [1, "position-relative", 2, "height", "80px", "vertical-align", "middle"], ["class", "appointment-info text-center", 4, "ngIf"], ["class", "text-center text-muted", 4, "ngIf"], [1, "appointment-info", "text-center"], [1, "fw-bold"], [1, "small", "text-muted"], ["class", "mt-1", 4, "ngIf"], [1, "mt-1"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "text-muted"], [1, "fas", "fa-lock", "me-1"], [1, "text-center", "text-muted"], [1, "fas", "fa-plus-circle", "fa-2x", "mb-2"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "fas", "fa-clock", "fa-2x"], [1, "invalid-feedback"]],
      template: function CitasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Gesti\u00F3n de Citas");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitasComponent_Template_button_click_6_listener() {
            return ctx.showCreateForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Nueva Cita ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 6)(12, "div", 7)(13, "div", 3)(14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitasComponent_Template_button_click_14_listener() {
            return ctx.previousWeek();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Semana Anterior ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitasComponent_Template_button_click_19_listener() {
            return ctx.nextWeek();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Siguiente Semana ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 12)(23, "div", 2)(24, "div", 6)(25, "div", 7)(26, "div", 13)(27, "table", 14)(28, "thead")(29, "tr")(30, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Hora");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, CitasComponent_th_32_Template, 3, 5, "th", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CitasComponent_tr_34_Template, 4, 2, "tr", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 18)(36, "div", 19)(37, "div", 20)(38, "div", 21)(39, "h5", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 24)(43, "form", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CitasComponent_Template_form_ngSubmit_43_listener() {
            return ctx.saveCita();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 12)(45, "div", 26)(46, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Nombre del Paciente *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, CitasComponent_div_49_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 26)(51, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Fecha *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, CitasComponent_div_54_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 31)(56, "div", 26)(57, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Hora *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, CitasComponent_div_60_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 26)(62, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Duraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "30 minutos (fijo)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 34)(67, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Cancelar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitasComponent_Template_button_click_69_listener() {
            return ctx.saveCita();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "app-confirmation-modal", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirm", function CitasComponent_Template_app_confirmation_modal_confirm_71_listener() {
            return ctx.confirmDelete();
          })("cancel", function CitasComponent_Template_app_confirmation_modal_cancel_71_listener() {
            return ctx.closeDeleteModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.getWeekRange(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.weekDays);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.timeSlots);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.isEditing ? "Editar" : "Nueva", " Cita");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.citaForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-invalid", ((tmp_5_0 = ctx.citaForm.get("nombre_paciente")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.citaForm.get("nombre_paciente")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.citaForm.get("nombre_paciente")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.citaForm.get("nombre_paciente")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-invalid", ((tmp_7_0 = ctx.citaForm.get("fecha")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.citaForm.get("fecha")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.citaForm.get("fecha")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.citaForm.get("fecha")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.citaForm.get("hora")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.citaForm.get("hora")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.citaForm.get("hora")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.citaForm.get("hora")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.citaForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isEditing ? "Actualizar" : "Crear", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isVisible", ctx.showDeleteModal)("message", "\u00BFEst\u00E1 seguro que desea eliminar la cita de " + ((ctx.selectedCitaForDelete == null ? null : ctx.selectedCitaForDelete.nombre_paciente) || "") + "?")("isLoading", ctx.isDeleting);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent],
      styles: [".table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      background-color: #f8f9fa;\n      border-top: none;\n    }\n    \n    .appointment-info[_ngcontent-%COMP%] {\n      padding: 5px;\n    }\n    \n    .table-success[_ngcontent-%COMP%] {\n      background-color: var(--clear-grey-color) !important;\n    }\n    \n    .table-warning[_ngcontent-%COMP%] {\n      background-color: #fff3cd !important;\n    }\n    \n    .btn-sm[_ngcontent-%COMP%] {\n      padding: 0.25rem 0.5rem;\n      font-size: 0.75rem;\n    }\n    \n    .fa-2x[_ngcontent-%COMP%] {\n      font-size: 1.5em;\n    }\n    \n    .form-control[readonly][_ngcontent-%COMP%] {\n      background-color: #f8f9fa;\n      border-color: #dee2e6;\n      color: #6c757d;\n      cursor: not-allowed;\n    }\n    \n    .appointment-info[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n      font-size: 0.75rem;\n      font-style: italic;\n    }\n    \n    .table-warning[_ngcontent-%COMP%]   .appointment-info[_ngcontent-%COMP%] {\n      opacity: 0.8;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaXRhcy9jaXRhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UseUJBQXlCO01BQ3pCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLG9EQUFvRDtJQUN0RDs7SUFFQTtNQUNFLG9DQUFvQztJQUN0Qzs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2QixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLGNBQWM7TUFDZCxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsWUFBWTtJQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRhYmxlIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuYXBwb2ludG1lbnQtaW5mbyB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1zdWNjZXNzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsZWFyLWdyZXktY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS13YXJuaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2QgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmJ0bi1zbSB7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB9XG4gICAgXG4gICAgLmZhLTJ4IHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICAgIFxuICAgIC5hcHBvaW50bWVudC1pbmZvIC50ZXh0LW11dGVkIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLXdhcm5pbmcgLmFwcG9pbnRtZW50LWluZm8ge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6898:
/*!*******************************************!*\
  !*** ./src/app/services/citas.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitasService: () => (/* binding */ CitasService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class CitasService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/citas`;
  }
  getCitas() {
    return this.http.get(this.apiUrl);
  }
  getCitasByDateRange(startDate, endDate) {
    return this.http.get(`${this.apiUrl}/range?start_date=${startDate}&end_date=${endDate}`);
  }
  getCitaById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createCita(cita) {
    return this.http.post(this.apiUrl, cita);
  }
  updateCita(cita) {
    return this.http.put(`${this.apiUrl}/${cita.id}`, cita);
  }
  deleteCita(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.ɵfac = function CitasService_Factory(t) {
      return new (t || CitasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CitasService,
      factory: CitasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_citas_citas_component_ts.js.map