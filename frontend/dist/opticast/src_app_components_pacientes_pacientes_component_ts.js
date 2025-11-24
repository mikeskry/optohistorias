"use strict";
(self["webpackChunkopticast"] = self["webpackChunkopticast"] || []).push([["src_app_components_pacientes_pacientes_component_ts"],{

/***/ 7977:
/*!*************************************************************!*\
  !*** ./src/app/components/pacientes/pacientes.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PacientesComponent: () => (/* binding */ PacientesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_pacientes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/pacientes.service */ 4894);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast.service */ 8397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);








const _forTrack0 = ($index, $item) => $item.id;
function PacientesComponent_Conditional_33_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const paciente_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paciente_r2.telefono, " ");
  }
}
function PacientesComponent_Conditional_33_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sin tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_Conditional_33_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PacientesComponent_Conditional_33_For_11_Template_div_click_0_listener() {
      const paciente_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.verHistoriasClinicas(paciente_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PacientesComponent_Conditional_33_For_11_Conditional_8_Template, 2, 1)(9, PacientesComponent_Conditional_33_For_11_Conditional_9_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 72)(11, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PacientesComponent_Conditional_33_For_11_Template_button_click_11_listener($event) {
      const paciente_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r2.editPaciente(paciente_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PacientesComponent_Conditional_33_For_11_Template_button_click_13_listener($event) {
      const paciente_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r2.verHistoriasClinicas(paciente_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const paciente_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paciente_r2.documento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", paciente_r2.nombre, " ", paciente_r2.apellidos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](8, paciente_r2.telefono ? 8 : 9);
  }
}
function PacientesComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 64)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nombre Completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](10, PacientesComponent_Conditional_33_For_11_Template, 15, 4, "div", 66, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.pacientes);
  }
}
function PacientesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No hay pacientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No se encontraron pacientes con los criterios de b\u00FAsqueda.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PacientesComponent_Conditional_34_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.showCreateForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Crear Primer Paciente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PacientesComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Documento es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nombre es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Apellidos son requeridos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email v\u00E1lido es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha de nacimiento es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Debe seleccionar un g\u00E9nero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Debe seleccionar un tipo de sangre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PacientesComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Debe seleccionar un tipo de afiliaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class PacientesComponent {
  // Validador personalizado para campos select
  static selectValidator(control) {
    const value = control.value;
    if (!value || value === '' || value === 'seleccionar') {
      return {
        required: true
      };
    }
    return null;
  }
  constructor(fb, pacientesService, toastService, router) {
    this.fb = fb;
    this.pacientesService = pacientesService;
    this.toastService = toastService;
    this.router = router;
    this.pacientes = [];
    this.isEditing = false;
    this.editingPacienteId = null;
    this.calculatedAge = null;
    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date();
    const fechaActual = today.toISOString().split('T')[0];
    this.pacienteForm = this.fb.group({
      documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      tipo_documento: ['CC', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nombre: ['Poner nombres', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      apellidos: ['Poner apellidos', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['confirmarcorreo@confirmar.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      telefono: [''],
      fecha_nacimiento: [fechaActual, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      genero: ['O', PacientesComponent.selectValidator],
      rh: ['O+', PacientesComponent.selectValidator],
      nombre_acudiente: [''],
      telefono_acudiente: [''],
      direccion: [''],
      eps: [''],
      tipo_afiliacion: ['no afiliado', PacientesComponent.selectValidator]
    });
    this.searchForm = this.fb.group({
      query: ['']
    });
    // Suscribirse a cambios en la fecha de nacimiento para calcular la edad
    this.pacienteForm.get('fecha_nacimiento')?.valueChanges.subscribe(() => {
      this.calculatedAge = this.calculateAge();
    });
  }
  ngOnInit() {
    this.loadPacientes();
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  loadPacientes() {
    this.pacientesService.getPacientes().subscribe({
      next: data => {
        // Manejar tanto arrays directos como objetos que contengan arrays
        if (Array.isArray(data)) {
          this.pacientes = data;
        } else if (data && Array.isArray(data.data)) {
          this.pacientes = data.data;
        } else if (data && Array.isArray(data.pacientes)) {
          this.pacientes = data.pacientes;
        } else {
          console.warn('Formato de datos inesperado:', data);
          this.pacientes = [];
        }
      },
      error: error => {
        this.toastService.showError('Error al cargar pacientes');
        console.error('Error loading pacientes:', error);
        this.pacientes = [];
      }
    });
  }
  searchPacientes() {
    const searchData = this.searchForm.value;
    // Verificar si hay algún término de búsqueda
    const hasSearchTerm = searchData.query && searchData.query.trim().length > 0;
    if (!hasSearchTerm) {
      // Si no hay término de búsqueda, volver a la vista normal
      this.loadPacientes();
      return;
    }
    this.pacientesService.searchPacientes(searchData).subscribe({
      next: data => {
        // Manejar tanto arrays directos como objetos que contengan arrays
        if (Array.isArray(data)) {
          this.pacientes = data;
        } else if (data && Array.isArray(data.data)) {
          this.pacientes = data.data;
        } else if (data && Array.isArray(data.pacientes)) {
          this.pacientes = data.pacientes;
        } else {
          this.pacientes = [];
        }
        // Mostrar mensaje si se encontraron muchos resultados
        if (this.pacientes.length >= 200) {
          this.toastService.showInfo('Se encontraron muchos resultados. Mostrando los primeros 200.');
        }
      },
      error: error => {
        this.toastService.showError('Error en la búsqueda');
        console.error('Error searching pacientes:', error);
        console.error('Error response:', error.error);
        this.pacientes = [];
      }
    });
  }
  clearSearch() {
    this.searchForm.reset();
    this.loadPacientes();
  }
  showCreateForm() {
    this.isEditing = false;
    this.editingPacienteId = null;
    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date();
    const fechaActual = today.toISOString().split('T')[0];
    this.pacienteForm.reset();
    this.pacienteForm.patchValue({
      tipo_documento: 'CC',
      fecha_nacimiento: fechaActual,
      nombre: 'Poner nombres',
      apellidos: 'Poner apellidos',
      email: 'confirmarcorreo@confirmar.com',
      genero: 'O',
      rh: 'O+',
      tipo_afiliacion: 'no afiliado'
    });
    this.calculatedAge = null; // Resetear la edad calculada
    this.showModal();
  }
  editPaciente(paciente) {
    this.isEditing = true;
    this.editingPacienteId = paciente.id || null;
    this.pacienteForm.patchValue({
      documento: paciente.documento,
      tipo_documento: paciente.tipo_documento,
      nombre: paciente.nombre,
      apellidos: paciente.apellidos,
      email: paciente.email,
      telefono: paciente.telefono,
      fecha_nacimiento: paciente.fecha_nacimiento,
      genero: paciente.genero || '',
      rh: paciente.rh || '',
      nombre_acudiente: paciente.nombre_acudiente,
      telefono_acudiente: paciente.telefono_acudiente,
      direccion: paciente.direccion,
      eps: paciente.eps,
      tipo_afiliacion: paciente.tipo_afiliacion || ''
    });
    // Calcular la edad inicial cuando se edita un paciente
    this.calculatedAge = this.calculateAge();
    this.showModal();
  }
  savePaciente() {
    // Marcar todos los campos como touched para mostrar errores de validación
    this.pacienteForm.markAllAsTouched();
    if (this.pacienteForm.invalid) {
      this.toastService.showError('Por favor, complete todos los campos requeridos correctamente');
      return;
    }
    const formData = this.pacienteForm.value;
    if (this.isEditing && this.editingPacienteId) {
      const updateData = {
        ...formData,
        id: this.editingPacienteId
      };
      this.pacientesService.updatePaciente(updateData).subscribe({
        next: response => {
          if (response.success) {
            this.toastService.showSuccess('Paciente actualizado correctamente');
            this.hideModal();
            this.loadPacientes();
          } else {
            // Error de validación (documento duplicado, etc.)
            this.toastService.showError(response.message);
          }
        },
        error: error => {
          // Error de conexión o servidor
          const errorMessage = error.error?.message || 'Error al actualizar paciente';
          this.toastService.showError(errorMessage);
          console.error('Error updating paciente:', error);
        }
      });
    } else {
      const createData = formData;
      this.pacientesService.createPaciente(createData).subscribe({
        next: response => {
          if (response.success) {
            this.toastService.showSuccess('Paciente creado correctamente');
            this.hideModal();
            this.loadPacientes();
          } else {
            // Error de validación (documento duplicado, etc.)
            this.toastService.showError(response.message);
          }
        },
        error: error => {
          // Error de conexión o servidor
          const errorMessage = error.error?.message || 'Error al crear paciente';
          this.toastService.showError(errorMessage);
          console.error('Error creating paciente:', error);
          console.error('Error response:', error.error);
          console.error('Error status:', error.status);
        }
      });
    }
  }
  deletePaciente(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este paciente?')) {
      this.pacientesService.deletePaciente(id).subscribe({
        next: () => {
          this.toastService.showSuccess('Paciente eliminado correctamente');
          this.loadPacientes();
        },
        error: error => {
          this.toastService.showError('Error al eliminar paciente');
          console.error('Error deleting paciente:', error);
        }
      });
    }
  }
  showModal() {
    const modal = document.getElementById('pacienteModal');
    if (modal) {
      const bootstrapModal = new window.bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }
  hideModal() {
    const modal = document.getElementById('pacienteModal');
    if (modal) {
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }
  calculateAge() {
    const fechaNacimiento = this.pacienteForm.get('fecha_nacimiento')?.value;
    if (!fechaNacimiento) return null;
    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  verHistoriasClinicas(paciente) {
    // Navegar al módulo de historias clínicas con el ID del paciente
    this.router.navigate(['/historias-clinicas'], {
      queryParams: {
        pacienteId: paciente.id,
        pacienteNombre: `${paciente.nombre} ${paciente.apellidos}`
      }
    });
  }
  static {
    this.ɵfac = function PacientesComponent_Factory(t) {
      return new (t || PacientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_pacientes_service__WEBPACK_IMPORTED_MODULE_0__.PacientesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PacientesComponent,
      selectors: [["app-pacientes"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 161,
      vars: 32,
      consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "card"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-8"], [1, "form-label"], ["type", "text", "formControlName", "query", "placeholder", "Buscar por documento, nombre, apellidos o tel\u00E9fono...", 1, "form-control"], [1, "col-md-4"], ["type", "submit", 1, "btn", "btn-primary", "me-2"], [1, "fas", "fa-search"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times"], [1, "historias-container", "pacientes-container"], [1, "empty-state"], ["id", "pacienteModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body"], [1, "col-md-6"], ["type", "text", "formControlName", "documento", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "tipo_documento", 1, "form-control"], [1, "row", "mt-3"], ["type", "text", "formControlName", "nombre", 1, "form-control"], ["type", "text", "formControlName", "apellidos", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "tel", "formControlName", "telefono", 1, "form-control"], ["type", "date", "formControlName", "fecha_nacimiento", 1, "form-control"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["formControlName", "genero", 1, "form-select"], ["value", "", "selected", ""], ["value", "M"], ["value", "F"], ["value", "O"], ["formControlName", "rh", 1, "form-select"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], ["type", "text", "formControlName", "nombre_acudiente", "placeholder", "Nombre completo del acudiente", 1, "form-control"], ["type", "tel", "formControlName", "telefono_acudiente", "placeholder", "Tel\u00E9fono del acudiente", 1, "form-control"], ["type", "text", "formControlName", "direccion", "placeholder", "Direcci\u00F3n de residencia", 1, "form-control"], ["type", "text", "formControlName", "eps", "placeholder", "Entidad Promotora de Salud", 1, "form-control"], ["formControlName", "tipo_afiliacion", 1, "form-select"], ["value", "Contributivo"], ["value", "Subsidiado"], ["value", "Excepci\u00F3n"], ["value", "no afiliado"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "historias-header"], [1, "historia-cell"], [1, "historia-row"], [1, "historia-row", 3, "click"], [1, "historia-cell", "fecha-cell"], [1, "fas", "fa-id-card", "me-2"], [1, "historia-cell", "motivo-cell"], [1, "fas", "fa-user", "me-2"], [1, "historia-cell", "acciones-cell"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "fas", "fa-file-medical"], [1, "fas", "fa-phone", "me-2"], [1, "text-muted"], [1, "fas", "fa-users", "fa-4x", "mb-4"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "invalid-feedback"]],
      template: function PacientesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Gesti\u00F3n de Pacientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PacientesComponent_Template_button_click_6_listener() {
            return ctx.showCreateForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Nuevo Paciente ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 6)(12, "div", 7)(13, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PacientesComponent_Template_form_ngSubmit_13_listener() {
            return ctx.searchPacientes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Buscar paciente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Buscar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PacientesComponent_Template_button_click_26_listener() {
            return ctx.clearSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Limpiar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "div", 2)(31, "div", 6)(32, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, PacientesComponent_Conditional_33_Template, 12, 0, "div", 18)(34, PacientesComponent_Conditional_34_Template, 9, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 20)(36, "div", 21)(37, "div", 22)(38, "div", 23)(39, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26)(43, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PacientesComponent_Template_form_ngSubmit_43_listener() {
            return ctx.savePaciente();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 9)(45, "div", 27)(46, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Documento *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, PacientesComponent_div_49_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 27)(51, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Tipo de Documento *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 31)(55, "div", 27)(56, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Nombre *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, PacientesComponent_div_59_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 27)(61, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Apellidos *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, PacientesComponent_div_64_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 31)(66, "div", 27)(67, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Email *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, PacientesComponent_div_70_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 27)(72, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 31)(76, "div", 13)(77, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Fecha de Nacimiento *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, PacientesComponent_div_80_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 13)(82, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Edad");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 13)(86, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "G\u00E9nero *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "select", 38)(89, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Seleccionar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Masculino");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Femenino");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Otro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, PacientesComponent_div_97_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 31)(99, "div", 27)(100, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "RH *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "select", 43)(103, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Seleccionar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "A+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "A-");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "B+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "B-");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "AB+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "AB-");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "O+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "O-");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](121, PacientesComponent_div_121_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 27)(123, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Nombre del Acudiente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 31)(127, "div", 2)(128, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Tel\u00E9fono del Acudiente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 31)(132, "div", 2)(133, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Direcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 31)(137, "div", 27)(138, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "EPS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 27)(142, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Tipo de Afiliaci\u00F3n *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "select", 56)(145, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Seleccionar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "option", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Contributivo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "option", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Subsidiado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Excepci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "option", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "no afiliado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](155, PacientesComponent_div_155_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 61)(157, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Cancelar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PacientesComponent_Template_button_click_159_listener() {
            return ctx.savePaciente();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_11_0;
          let tmp_12_0;
          let tmp_13_0;
          let tmp_14_0;
          let tmp_16_0;
          let tmp_17_0;
          let tmp_18_0;
          let tmp_19_0;
          let tmp_20_0;
          let tmp_21_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](33, ctx.pacientes.length > 0 ? 33 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](34, ctx.pacientes.length === 0 ? 34 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.isEditing ? "Editar" : "Nuevo", " Paciente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.pacienteForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_5_0 = ctx.pacienteForm.get("documento")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.pacienteForm.get("documento")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.pacienteForm.get("documento")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.pacienteForm.get("documento")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_7_0 = ctx.pacienteForm.get("nombre")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.pacienteForm.get("nombre")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.pacienteForm.get("nombre")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.pacienteForm.get("nombre")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.pacienteForm.get("apellidos")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.pacienteForm.get("apellidos")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.pacienteForm.get("apellidos")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.pacienteForm.get("apellidos")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_11_0 = ctx.pacienteForm.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.pacienteForm.get("email")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.pacienteForm.get("email")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.pacienteForm.get("email")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_13_0 = ctx.pacienteForm.get("fecha_nacimiento")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.pacienteForm.get("fecha_nacimiento")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.pacienteForm.get("fecha_nacimiento")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.pacienteForm.get("fecha_nacimiento")) == null ? null : tmp_14_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.calculatedAge ? ctx.calculatedAge + " a\u00F1os" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_16_0 = ctx.pacienteForm.get("genero")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.pacienteForm.get("genero")) == null ? null : tmp_16_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.pacienteForm.get("genero")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.pacienteForm.get("genero")) == null ? null : tmp_17_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_18_0 = ctx.pacienteForm.get("rh")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.pacienteForm.get("rh")) == null ? null : tmp_18_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_19_0 = ctx.pacienteForm.get("rh")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx.pacienteForm.get("rh")) == null ? null : tmp_19_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_20_0 = ctx.pacienteForm.get("tipo_afiliacion")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.pacienteForm.get("tipo_afiliacion")) == null ? null : tmp_20_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.pacienteForm.get("tipo_afiliacion")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx.pacienteForm.get("tipo_afiliacion")) == null ? null : tmp_21_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.pacienteForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isEditing ? "Actualizar" : "Crear", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: ["\n\n\n.pacientes-container[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.pacientes-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.pacientes-search-form[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.pacientes-table[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.pacientes-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.pacientes-form-section[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.pacientes-form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n}\n\n.pacientes-required-field[_ngcontent-%COMP%]::after {\n  content: \" *\";\n  color: var(--error-color);\n}\n\n.pacientes-modal-lg[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\n.pacientes-search-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-end;\n}\n\n\n\n@media (max-width: 768px) {\n  .pacientes-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  \n  .pacientes-search-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  \n  .pacientes-table[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  \n  .pacientes-modal-lg[_ngcontent-%COMP%] {\n    max-width: 95%;\n    margin: 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWNpZW50ZXMvcGFjaWVudGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEOztBQUV4RDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBLHlDQUF5QztBQUN6QztFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFc3RpbG9zIGVzcGVjw4PCrWZpY29zIHBhcmEgZWwgY29tcG9uZW50ZSBkZSBwYWNpZW50ZXMgKi9cclxuXHJcbi5wYWNpZW50ZXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5wYWNpZW50ZXMtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucGFjaWVudGVzLXNlYXJjaC1mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5wYWNpZW50ZXMtdGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWNpZW50ZXMtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGFjaWVudGVzLWZvcm0tc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnBhY2llbnRlcy1mb3JtLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcclxufVxyXG5cclxuLnBhY2llbnRlcy1yZXF1aXJlZC1maWVsZDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiICpcIjtcclxuICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xyXG59XHJcblxyXG4ucGFjaWVudGVzLW1vZGFsLWxnIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4ucGFjaWVudGVzLXNlYXJjaC1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgZm9yIHBhY2llbnRlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucGFjaWVudGVzLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG4gIH1cclxuICBcclxuICAucGFjaWVudGVzLXNlYXJjaC1idXR0b25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhY2llbnRlcy10YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxuICBcclxuICAucGFjaWVudGVzLW1vZGFsLWxnIHtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_pacientes_pacientes_component_ts.js.map