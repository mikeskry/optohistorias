import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriasClinicasService } from '../../services/historias-clinicas.service';
import { PacientesService } from '../../services/pacientes.service';
import { ToastService } from '../../services/toast.service';
import { HistoriaClinica, HistoriaClinicaCreateRequest, HistoriaClinicaOrganizada } from '../../models/historia-clinica.model';
import { Paciente } from '../../models/paciente.model';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { PrefixInputDirective } from '../../directives/prefix-input.directive';
import { AxisInputDirective } from '../../directives/axis-input.directive';

@Component({
  selector: 'app-historias-clinicas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PrefixInputDirective, AxisInputDirective],
  templateUrl: './historias-clinicas.component.html',
  styleUrls: ['./historias-clinicas.component.css']
})
export class HistoriasClinicasComponent implements OnInit {
  historias: HistoriaClinica[] = [];
  pacienteId: number | null = null;
  pacienteNombre: string = '';
  paciente: Paciente | null = null;
  showCreateForm = false;
  isEditing = false;
  editingHistoriaId: number | null = null;
  selectedHistoriaEditable = false;
  selectedHistoriaEditMessage = '';
  selectedHistoriaEditableUntil: Date | null = null;
  selectedHistoriaCreatedAt: Date | null = null;
  private readonly EDIT_WINDOW_MS = 24 * 60 * 60 * 1000;
  
  // Secciones desplegables
  seccionesDesplegadas: { [key: string]: boolean } = {
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
  filasVisibles: { [key: string]: boolean } = {
    agudezaVisualConCorreccion: false,
    lensometriaFormulaCerca: false,
    examenRefractivoRetinoscopia: false,
    // Se pueden agregar más filas aquí para otras secciones
  };

  // Orden de navegación Tab por campo
  tabOrder: string[] = [
    // DATOS DEL PACIENTE
    'fecha_consulta', 'fecha_control', 'hora',
    
    // CUESTIONARIO
    'motivo_consulta', 'tipo_examen', 'anamnesis', 'ultima_valoracion_optometria',
    'ocupacion_profesion', 'antecedentes_familiares', 'antecedentes_personales', 'antecedentes_laborales',
    
    // LENSOMETRÍA
    'lensometria_formula_lejos_derecho_esfera', 'lensometria_formula_lejos_derecho_cilindro', 'lensometria_formula_lejos_derecho_eje',
    'lensometria_formula_lejos_izquierdo_esfera', 'lensometria_formula_lejos_izquierdo_cilindro', 'lensometria_formula_lejos_izquierdo_eje',
    'lensometria_formula_lejos_derecho_adicion', 'lensometria_formula_lejos_izquierdo_adicion',
    'lensometria_formula_lejos_derecho_prisma', 'lensometria_formula_lejos_izquierdo_prisma',

    'lensometria_formula_cerca_derecho_esfera', 'lensometria_formula_cerca_izquierdo_esfera', 
    'lensometria_formula_cerca_derecho_cilindro', 'lensometria_formula_cerca_izquierdo_cilindro',
    'lensometria_formula_cerca_derecho_eje', 'lensometria_formula_cerca_izquierdo_eje',
    'lensometria_formula_cerca_derecho_adicion', 'lensometria_formula_cerca_izquierdo_adicion',
    'lensometria_observaciones',
    
    // AGUDEZA VISUAL
    'lejos_test_usado', 'sin_correccion_lejos_derecho', 'sin_correccion_lejos_izquierdo',
    'sin_correccion_lejos_ambos', 'sin_correccion_cerca_derecho', 'sin_correccion_cerca_izquierdo',
    'sin_correccion_cerca_observacion',
    'con_correccion_lejos_derecho', 'con_correccion_lejos_izquierdo', 'con_correccion_lejos_ambos',
    'con_correccion_cerca_derecho', 'con_correccion_cerca_izquierdo', 'con_correccion_cerca_observacion',
    'cerca_test_usado', 'pin_hole_lejos_derecho', 'pin_hole_lejos_izquierdo',
    
    // EXAMEN MOTOR - Orden según imagen
    'examen_motor_mano_dominante', 'examen_motor_ojo_dominante', 'examen_motor_punto_proximo_valor',
    'examen_motor_dp_lejos', 'examen_motor_dp_cerca', 'examen_motor_ducciones_derecho',
    'examen_motor_ducciones_izquierdo', 'examen_motor_kappa_derecho', 'examen_motor_kappa_izquierdo',
    // Versiones ojo derecho (10-15)
    'versiones-derecho-top-left', 'versiones-derecho-top-right', 'versiones-derecho-left',
    'versiones-derecho-right', 'versiones-derecho-bottom-left', 'versiones-derecho-bottom-right',
    // Versiones ojo izquierdo (16-21)
    'versiones-izquierdo-top-left', 'versiones-izquierdo-top-right', 'versiones-izquierdo-left',
    'versiones-izquierdo-right', 'versiones-izquierdo-bottom-left', 'versiones-izquierdo-bottom-right',
    'examen_motor_hirschberg',
    // Medición de Desviación
    'examen_motor_test_utilizado', 
    'examen_motor_cover_test_con_correccion_horizontal', 'examen_motor_cover_test_con_correccion_vertical',
    'examen_motor_cover_test_sin_correccion_horizontal', 'examen_motor_cover_test_sin_correccion_vertical',
    'examen_motor_prisma_con_correccion_horizontal', 'examen_motor_prisma_con_correccion_vertical',
    'examen_motor_prisma_sin_correccion_horizontal', 'examen_motor_prisma_sin_correccion_vertical',
    'examen_motor_observaciones',
    // Test de Color
    'examen_motor_por_confirmar_derecho', 'examen_motor_por_confirmar_izquierdo',
    // Estereopsis
    'examen_motor_estereopsis_tipo', 'examen_motor_estereopsis_resultado',
    
    // EXAMEN REFRACTIVO - Orden según imagen (números escritos)
    // Keratometria (1-10)
    'examen_refractivo_keratometria_derecho_plano', 'examen_refractivo_keratometria_derecho_curvo', // 1, 2
    'examen_refractivo_keratometria_derecho_eje', // 3
    'examen_refractivo_keratometria_izquierdo_plano', 'examen_refractivo_keratometria_izquierdo_curvo', // 4, 5
    'examen_refractivo_keratometria_izquierdo_eje', // 6
    'examen_refractivo_keratometria_derecho_miras', // 7
    'examen_refractivo_keratometria_izquierdo_miras', // 8
    'examen_refractivo_keratometria_derecho_corn', // 9
    'examen_refractivo_keratometria_izquierdo_corn', // 10
    // Retinoscopia Estatica (11-18)
    'examen_refractivo_retinoscopia_estatica_derecho_esfera', 'examen_refractivo_retinoscopia_estatica_derecho_cilindro', // 11, 12
    'examen_refractivo_retinoscopia_estatica_derecho_eje', // 13
    'examen_refractivo_retinoscopia_estatica_izquierdo_esfera', 'examen_refractivo_retinoscopia_estatica_izquierdo_cilindro', // 14, 15
    'examen_refractivo_retinoscopia_estatica_izquierdo_eje', // 16
    'examen_refractivo_retinoscopia_estatica_derecho_sombras', 'examen_refractivo_retinoscopia_estatica_izquierdo_sombras', // 17, 18
    'toggle-retinoscopia', // 19 - Botón para expandir/colapsar Retinoscopia Dinamica
    // Items 20-39: Retinoscopia Dinamica, Otra Refracción y Subjetivo
    'examen_refractivo_radio_k_1', 'examen_refractivo_radio_k_2',
    'examen_refractivo_retinoscopia_dinamica_derecho_esfera', 'examen_refractivo_retinoscopia_dinamica_derecho_cilindro',
    'examen_refractivo_retinoscopia_dinamica_derecho_eje', 'examen_refractivo_retinoscopia_dinamica_izquierdo_esfera',
    'examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro', 'examen_refractivo_retinoscopia_dinamica_izquierdo_eje',
    'examen_refractivo_retinoscopia_dinamica_derecho_sombras', 'examen_refractivo_retinoscopia_dinamica_izquierdo_sombras',
    'examen_refractivo_otra_refraccion_derecho_esfera', 'examen_refractivo_otra_refraccion_derecho_cilindro',
    'examen_refractivo_otra_refraccion_derecho_eje', 'examen_refractivo_otra_refraccion_izquierdo_esfera',
    'examen_refractivo_otra_refraccion_izquierdo_cilindro', 'examen_refractivo_otra_refraccion_izquierdo_eje',
    'examen_refractivo_otra_refraccion_derecho_sombras', 'examen_refractivo_otra_refraccion_izquierdo_sombras',
    'examen_refractivo_subjetivo_normal', 'examen_refractivo_subjetivo_cycloplejia', 'examen_refractivo_subjetivo_otra',
    'examen_refractivo_subjetivo_derecho_esfera', 'examen_refractivo_subjetivo_derecho_cilindro', 'examen_refractivo_subjetivo_derecho_eje',
    'examen_refractivo_subjetivo_izquierdo_esfera', 'examen_refractivo_subjetivo_izquierdo_cilindro', 'examen_refractivo_subjetivo_izquierdo_eje',
    'examen_refractivo_subjetivo_derecho_av_lejos', 'examen_refractivo_subjetivo_izquierdo_av_lejos',
    'examen_refractivo_subjetivo_derecho_add', 'examen_refractivo_subjetivo_izquierdo_add',
    'examen_refractivo_subjetivo_derecho_av_cerca', 'examen_refractivo_subjetivo_izquierdo_av_cerca',
    'examen_refractivo_subjetivo_derecho_dnp', 'examen_refractivo_subjetivo_izquierdo_dnp', 'examen_refractivo_subjetivo_distancia_al', 
    'examen_refractivo_subjetivo_derecho_estatica', 'examen_refractivo_subjetivo_izquierdo_estatica',
    'examen_refractivo_subjetivo_derecho_dinamica', 'examen_refractivo_subjetivo_izquierdo_dinamica',
    'examen_refractivo_subjetivo_derecho_vortice',
    'examen_refractivo_subjetivo_derecho_mm', 'examen_refractivo_subjetivo_izquierdo_vortice', 'examen_refractivo_subjetivo_izquierdo_mm',
    
    // EXAMEN OFTALMOLÓGICO
    'examen_oftalmologico_pupila_derecho', 'examen_oftalmologico_pupila_izquierdo',
    'examen_oftalmologico_parpados_derecho', 'examen_oftalmologico_parpados_izquierdo',
    'examen_oftalmologico_pelicula_lagrimal_derecho', 'examen_oftalmologico_pelicula_lagrimal_izquierdo',
    'examen_oftalmologico_conjuntiva_derecho', 'examen_oftalmologico_conjuntiva_izquierdo',
    'examen_oftalmologico_cornea_derecho', 'examen_oftalmologico_cornea_izquierdo',
    'examen_oftalmologico_cristalino_derecho', 'examen_oftalmologico_cristalino_izquierdo',
    'examen_oftalmologico_camara_anterior_derecho', 'examen_oftalmologico_camara_anterior_izquierdo',
    'examen_oftalmologico_iris_derecho', 'examen_oftalmologico_iris_izquierdo',
    'examen_oftalmologico_bruckner',
    
    // OFTALMOSCOPIA
    'oftalmoscopia_derecho_excavacion', 'oftalmoscopia_derecho_descripcion',
    'oftalmoscopia_izquierdo_excavacion', 'oftalmoscopia_izquierdo_descripcion',
    
    // FÓRMULA
    'formula_derecho_esfera', 'formula_derecho_cilindro', 'formula_derecho_eje',
    'formula_izquierdo_esfera', 'formula_izquierdo_cilindro', 'formula_izquierdo_eje',
    'formula_derecho_av_lejos', 'formula_izquierdo_av_lejos',
    'formula_derecho_add', 'formula_izquierdo_add',
    'formula_derecho_av_cerca', 'formula_izquierdo_av_cerca',
    'formula_derecho_dnp', 'formula_izquierdo_dnp',
    'formula_derecho_recomendacion',
    
    // OBSERVACIONES
    'observaciones',
    
    // DIAGNÓSTICO
    'diagnostico_codigo_1', 'diagnostico_diagnostico_1', 'diagnostico_descripcion_1',
    'diagnostico_ojo_1', 'diagnostico_principal_1',
    'diagnostico_codigo_2', 'diagnostico_diagnostico_2', 'diagnostico_descripcion_2',
    'diagnostico_ojo_2', 'diagnostico_principal_2',
    'diagnostico_codigo_3', 'diagnostico_diagnostico_3', 'diagnostico_descripcion_3',
    'diagnostico_ojo_3', 'diagnostico_principal_3',
    'diagnostico_codigo_4', 'diagnostico_diagnostico_4', 'diagnostico_descripcion_4',
    'diagnostico_ojo_4', 'diagnostico_principal_4',
    'diagnostico_codigo_5', 'diagnostico_diagnostico_5', 'diagnostico_descripcion_5',
    'diagnostico_ojo_5', 'diagnostico_principal_5'
  ];

  // Mapa de campos a secciones
  campoASeccionMap: { [key: string]: string } = {
    // DATOS DEL PACIENTE
    'fecha_consulta': 'datosPaciente', 'fecha_control': 'datosPaciente', 'hora': 'datosPaciente',
    
    // CUESTIONARIO
    'motivo_consulta': 'cuestionario', 'tipo_examen': 'cuestionario', 'anamnesis': 'cuestionario',
    'ultima_valoracion_optometria': 'cuestionario', 'ocupacion_profesion': 'cuestionario',
    'antecedentes_familiares': 'cuestionario', 'antecedentes_personales': 'cuestionario',
    'antecedentes_laborales': 'cuestionario',
    
    // LENSOMETRÍA
    'lensometria_formula_lejos_derecho_esfera': 'lensometria', 'lensometria_formula_lejos_derecho_cilindro': 'lensometria',
    'lensometria_formula_lejos_derecho_eje': 'lensometria', 'lensometria_formula_lejos_derecho_adicion': 'lensometria',
    'lensometria_formula_lejos_derecho_prisma': 'lensometria',
    'lensometria_formula_lejos_izquierdo_esfera': 'lensometria', 'lensometria_formula_lejos_izquierdo_cilindro': 'lensometria',
    'lensometria_formula_lejos_izquierdo_eje': 'lensometria', 'lensometria_formula_lejos_izquierdo_adicion': 'lensometria',
    'lensometria_formula_lejos_izquierdo_prisma': 'lensometria',
    'lensometria_formula_cerca_derecho_esfera': 'lensometria', 'lensometria_formula_cerca_derecho_cilindro': 'lensometria',
    'lensometria_formula_cerca_derecho_eje': 'lensometria', 'lensometria_formula_cerca_derecho_adicion': 'lensometria',
    'lensometria_formula_cerca_izquierdo_esfera': 'lensometria', 'lensometria_formula_cerca_izquierdo_cilindro': 'lensometria',
    'lensometria_formula_cerca_izquierdo_eje': 'lensometria', 'lensometria_formula_cerca_izquierdo_adicion': 'lensometria',
    'lensometria_observaciones': 'lensometria',
    
    // AGUDEZA VISUAL
    'lejos_test_usado': 'agudezaVisual', 'sin_correccion_lejos_derecho': 'agudezaVisual',
    'sin_correccion_lejos_izquierdo': 'agudezaVisual', 'sin_correccion_lejos_ambos': 'agudezaVisual',
    'sin_correccion_cerca_derecho': 'agudezaVisual', 'sin_correccion_cerca_izquierdo': 'agudezaVisual',
    'sin_correccion_cerca_observacion': 'agudezaVisual',
    'con_correccion_lejos_derecho': 'agudezaVisual', 'con_correccion_lejos_izquierdo': 'agudezaVisual',
    'con_correccion_lejos_ambos': 'agudezaVisual', 'con_correccion_cerca_derecho': 'agudezaVisual',
    'con_correccion_cerca_izquierdo': 'agudezaVisual', 'con_correccion_cerca_observacion': 'agudezaVisual',
    'cerca_test_usado': 'agudezaVisual', 'pin_hole_lejos_derecho': 'agudezaVisual',
    'pin_hole_lejos_izquierdo': 'agudezaVisual',
    
    // EXAMEN MOTOR
    'examen_motor_mano_dominante': 'examenMotor', 'examen_motor_ojo_dominante': 'examenMotor',
    'examen_motor_punto_proximo_valor': 'examenMotor', 'examen_motor_dp_lejos': 'examenMotor',
    'examen_motor_dp_cerca': 'examenMotor', 'examen_motor_ducciones_derecho': 'examenMotor',
    'examen_motor_ducciones_izquierdo': 'examenMotor', 'examen_motor_kappa_derecho': 'examenMotor',
    'examen_motor_kappa_izquierdo': 'examenMotor',
    // Versiones SVG ojo derecho
    'versiones-derecho-top-left': 'examenMotor', 'versiones-derecho-top-right': 'examenMotor',
    'versiones-derecho-left': 'examenMotor', 'versiones-derecho-right': 'examenMotor',
    'versiones-derecho-bottom-left': 'examenMotor', 'versiones-derecho-bottom-right': 'examenMotor',
    // Versiones SVG ojo izquierdo
    'versiones-izquierdo-top-left': 'examenMotor', 'versiones-izquierdo-top-right': 'examenMotor',
    'versiones-izquierdo-left': 'examenMotor', 'versiones-izquierdo-right': 'examenMotor',
    'versiones-izquierdo-bottom-left': 'examenMotor', 'versiones-izquierdo-bottom-right': 'examenMotor',
    'examen_motor_hirschberg': 'examenMotor',
    'examen_motor_test_utilizado': 'examenMotor', 'examen_motor_cover_test_con_correccion_horizontal': 'examenMotor',
    'examen_motor_cover_test_con_correccion_vertical': 'examenMotor', 'examen_motor_cover_test_sin_correccion_horizontal': 'examenMotor',
    'examen_motor_cover_test_sin_correccion_vertical': 'examenMotor', 'examen_motor_prisma_con_correccion_horizontal': 'examenMotor',
    'examen_motor_prisma_con_correccion_vertical': 'examenMotor', 'examen_motor_prisma_sin_correccion_horizontal': 'examenMotor',
    'examen_motor_prisma_sin_correccion_vertical': 'examenMotor', 'examen_motor_observaciones': 'examenMotor',
    'examen_motor_por_confirmar_derecho': 'examenMotor', 'examen_motor_por_confirmar_izquierdo': 'examenMotor',
    'examen_motor_estereopsis_tipo': 'examenMotor', 'examen_motor_estereopsis_resultado': 'examenMotor',
    
    // EXAMEN REFRACTIVO
    'examen_refractivo_keratometria_derecho_plano': 'examenRefractivo', 'examen_refractivo_keratometria_derecho_curvo': 'examenRefractivo',
    'examen_refractivo_keratometria_derecho_eje': 'examenRefractivo', 'examen_refractivo_keratometria_derecho_miras': 'examenRefractivo',
    'examen_refractivo_keratometria_derecho_corn': 'examenRefractivo',
    'examen_refractivo_keratometria_izquierdo_plano': 'examenRefractivo', 'examen_refractivo_keratometria_izquierdo_curvo': 'examenRefractivo',
    'examen_refractivo_keratometria_izquierdo_eje': 'examenRefractivo', 'examen_refractivo_keratometria_izquierdo_miras': 'examenRefractivo',
    'examen_refractivo_keratometria_izquierdo_corn': 'examenRefractivo',
    'examen_refractivo_retinoscopia_estatica_derecho_esfera': 'examenRefractivo', 'examen_refractivo_retinoscopia_estatica_derecho_cilindro': 'examenRefractivo',
    'examen_refractivo_retinoscopia_estatica_derecho_eje': 'examenRefractivo', 'examen_refractivo_retinoscopia_estatica_derecho_sombras': 'examenRefractivo',
    'examen_refractivo_retinoscopia_estatica_izquierdo_esfera': 'examenRefractivo', 'examen_refractivo_retinoscopia_estatica_izquierdo_cilindro': 'examenRefractivo',
    'examen_refractivo_retinoscopia_estatica_izquierdo_eje': 'examenRefractivo', 'examen_refractivo_retinoscopia_estatica_izquierdo_sombras': 'examenRefractivo',
    'toggle-retinoscopia': 'examenRefractivo', // Botón para expandir/colapsar Retinoscopia Dinamica
    // Retinoscopia Dinamica
    'examen_refractivo_radio_k_1': 'examenRefractivo', 'examen_refractivo_radio_k_2': 'examenRefractivo',
    'examen_refractivo_retinoscopia_dinamica_derecho_esfera': 'examenRefractivo', 'examen_refractivo_retinoscopia_dinamica_derecho_cilindro': 'examenRefractivo',
    'examen_refractivo_retinoscopia_dinamica_derecho_eje': 'examenRefractivo', 'examen_refractivo_retinoscopia_dinamica_izquierdo_esfera': 'examenRefractivo',
    'examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro': 'examenRefractivo', 'examen_refractivo_retinoscopia_dinamica_izquierdo_eje': 'examenRefractivo',
    'examen_refractivo_retinoscopia_dinamica_derecho_sombras': 'examenRefractivo', 'examen_refractivo_retinoscopia_dinamica_izquierdo_sombras': 'examenRefractivo',
    // Otra Refracción
    'examen_refractivo_otra_refraccion_derecho_esfera': 'examenRefractivo', 'examen_refractivo_otra_refraccion_derecho_cilindro': 'examenRefractivo',
    'examen_refractivo_otra_refraccion_derecho_eje': 'examenRefractivo', 'examen_refractivo_otra_refraccion_izquierdo_esfera': 'examenRefractivo',
    'examen_refractivo_otra_refraccion_izquierdo_cilindro': 'examenRefractivo', 'examen_refractivo_otra_refraccion_izquierdo_eje': 'examenRefractivo',
    'examen_refractivo_otra_refraccion_derecho_sombras': 'examenRefractivo', 'examen_refractivo_otra_refraccion_izquierdo_sombras': 'examenRefractivo',
    'examen_refractivo_subjetivo_normal': 'examenRefractivo',
    'examen_refractivo_subjetivo_cycloplejia': 'examenRefractivo', 'examen_refractivo_subjetivo_otra': 'examenRefractivo',
    'examen_refractivo_subjetivo_distancia_al': 'examenRefractivo', 'examen_refractivo_subjetivo_derecho_esfera': 'examenRefractivo',
    'examen_refractivo_subjetivo_derecho_cilindro': 'examenRefractivo', 'examen_refractivo_subjetivo_derecho_eje': 'examenRefractivo',
    'examen_refractivo_subjetivo_derecho_av_lejos': 'examenRefractivo', 'examen_refractivo_subjetivo_derecho_add': 'examenRefractivo',
    'examen_refractivo_subjetivo_derecho_av_cerca': 'examenRefractivo', 'examen_refractivo_subjetivo_derecho_dnp': 'examenRefractivo',
    'examen_refractivo_subjetivo_derecho_vortice': 'examenRefractivo', 'examen_refractivo_subjetivo_derecho_mm': 'examenRefractivo',
    'examen_refractivo_subjetivo_derecho_estatica': 'examenRefractivo', 'examen_refractivo_subjetivo_derecho_dinamica': 'examenRefractivo',
    'examen_refractivo_subjetivo_izquierdo_esfera': 'examenRefractivo', 'examen_refractivo_subjetivo_izquierdo_cilindro': 'examenRefractivo',
    'examen_refractivo_subjetivo_izquierdo_eje': 'examenRefractivo', 'examen_refractivo_subjetivo_izquierdo_av_lejos': 'examenRefractivo',
    'examen_refractivo_subjetivo_izquierdo_add': 'examenRefractivo', 'examen_refractivo_subjetivo_izquierdo_av_cerca': 'examenRefractivo',
    'examen_refractivo_subjetivo_izquierdo_dnp': 'examenRefractivo', 'examen_refractivo_subjetivo_izquierdo_vortice': 'examenRefractivo',
    'examen_refractivo_subjetivo_izquierdo_mm': 'examenRefractivo', 'examen_refractivo_subjetivo_izquierdo_estatica': 'examenRefractivo',
    'examen_refractivo_subjetivo_izquierdo_dinamica': 'examenRefractivo',
    
    // EXAMEN OFTALMOLÓGICO
    'examen_oftalmologico_pupila_derecho': 'examenOftalmologico', 'examen_oftalmologico_pupila_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_parpados_derecho': 'examenOftalmologico', 'examen_oftalmologico_parpados_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_pelicula_lagrimal_derecho': 'examenOftalmologico', 'examen_oftalmologico_pelicula_lagrimal_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_conjuntiva_derecho': 'examenOftalmologico', 'examen_oftalmologico_conjuntiva_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_cornea_derecho': 'examenOftalmologico', 'examen_oftalmologico_cornea_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_cristalino_derecho': 'examenOftalmologico', 'examen_oftalmologico_cristalino_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_camara_anterior_derecho': 'examenOftalmologico', 'examen_oftalmologico_camara_anterior_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_iris_derecho': 'examenOftalmologico', 'examen_oftalmologico_iris_izquierdo': 'examenOftalmologico',
    'examen_oftalmologico_bruckner': 'examenOftalmologico',
    
    // OFTALMOSCOPIA
    'oftalmoscopia_derecho_excavacion': 'oftalmoscopia', 'oftalmoscopia_derecho_descripcion': 'oftalmoscopia',
    'oftalmoscopia_izquierdo_excavacion': 'oftalmoscopia', 'oftalmoscopia_izquierdo_descripcion': 'oftalmoscopia',
    
    // FÓRMULA
    'formula_derecho_esfera': 'formula', 'formula_derecho_cilindro': 'formula', 'formula_derecho_eje': 'formula',
    'formula_derecho_av_lejos': 'formula', 'formula_derecho_add': 'formula', 'formula_derecho_av_cerca': 'formula',
    'formula_derecho_dnp': 'formula', 'formula_derecho_recomendacion': 'formula',
    'formula_izquierdo_esfera': 'formula', 'formula_izquierdo_cilindro': 'formula', 'formula_izquierdo_eje': 'formula',
    'formula_izquierdo_av_lejos': 'formula', 'formula_izquierdo_add': 'formula', 'formula_izquierdo_av_cerca': 'formula',
    'formula_izquierdo_dnp': 'formula',
    
    // OBSERVACIONES
    'observaciones': 'observaciones',
    
    // DIAGNÓSTICO
    'diagnostico_codigo_1': 'diagnostico', 'diagnostico_diagnostico_1': 'diagnostico', 'diagnostico_descripcion_1': 'diagnostico',
    'diagnostico_ojo_1': 'diagnostico', 'diagnostico_principal_1': 'diagnostico',
    'diagnostico_codigo_2': 'diagnostico', 'diagnostico_diagnostico_2': 'diagnostico', 'diagnostico_descripcion_2': 'diagnostico',
    'diagnostico_ojo_2': 'diagnostico', 'diagnostico_principal_2': 'diagnostico',
    'diagnostico_codigo_3': 'diagnostico', 'diagnostico_diagnostico_3': 'diagnostico', 'diagnostico_descripcion_3': 'diagnostico',
    'diagnostico_ojo_3': 'diagnostico', 'diagnostico_principal_3': 'diagnostico',
    'diagnostico_codigo_4': 'diagnostico', 'diagnostico_diagnostico_4': 'diagnostico', 'diagnostico_descripcion_4': 'diagnostico',
    'diagnostico_ojo_4': 'diagnostico', 'diagnostico_principal_4': 'diagnostico',
    'diagnostico_codigo_5': 'diagnostico', 'diagnostico_diagnostico_5': 'diagnostico', 'diagnostico_descripcion_5': 'diagnostico',
    'diagnostico_ojo_5': 'diagnostico', 'diagnostico_principal_5': 'diagnostico'
  };

  historiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private historiasClinicasService: HistoriasClinicasService,
    private pacientesService: PacientesService,
    private toastService: ToastService,
    private authService: AuthService
  ) {
    this.historiaForm = this.createForm();
  }

  ngOnInit(): void {
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

  createForm(): FormGroup {
    return this.fb.group({
      fecha_consulta: ['', Validators.required],
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

  loadHistoriasClinicas(): void {
    if (!this.pacienteId) return;
    
    this.historiasClinicasService.getHistoriasClinicas(this.pacienteId).subscribe({
      next: (data: any) => {
        
        if (Array.isArray(data)) {
          this.historias = data;
        } else if (data && Array.isArray(data.data)) {
          this.historias = data.data;
        } else {
          this.historias = [];
        }
      },
      error: (error) => {
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

  loadPacienteFromParams(params: any): void {
    // Intentar extraer datos del paciente desde los parámetros de la ruta
    const pacienteData: Partial<Paciente> = {
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
      this.paciente = pacienteData as Paciente;
    }
  }

  loadPacienteData(): void {
    if (this.pacienteId) {
      this.pacientesService.getPacienteById(this.pacienteId).subscribe({
        next: (response: any) => {
          // Los datos vienen dentro de un objeto 'data'
          const paciente = response.data || response;
          this.paciente = paciente;
        },
        error: (error: any) => {
          console.error('Error al cargar datos del paciente:', error);
          this.toastService.showError('Error al cargar los datos del paciente');
        }
      });
    }
  }

  calcularEdad(fechaNacimiento?: string): string {
    if (!fechaNacimiento) return '-';
    
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    
    return edad >= 0 ? `${edad} años` : '-';
  }

  isHistoriaEditable(historia: HistoriaClinica): boolean {
    const state = this.computeHistoriaEditState(historia);
    return state.isEditable;
  }

  getHistoriaEditableSummary(historia: HistoriaClinica): string {
    const { isEditable, createdAt, editableUntil } = this.computeHistoriaEditState(historia);

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

  private computeHistoriaEditState(historia: HistoriaClinica): { isEditable: boolean; createdAt: Date | null; editableUntil: Date | null } {
    const createdAt = this.parseDateTimeString(historia.created_at) ?? this.parseDateTimeString(historia.fecha_consulta);
    const editableUntil = createdAt ? new Date(createdAt.getTime() + this.EDIT_WINDOW_MS) : null;
    const now = new Date();
    const isEditable = editableUntil ? now.getTime() <= editableUntil.getTime() : true;

    return { isEditable, createdAt, editableUntil };
  }

  private parseDateTimeString(dateTime?: string | null): Date | null {
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

  private formatDateTime(date: Date | null): string {
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

  private updateSelectedHistoriaEditState(historia: HistoriaClinica): void {
    const { isEditable, createdAt, editableUntil } = this.computeHistoriaEditState(historia);

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


  showCreateFormModal(): void {
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

  editHistoria(historia: HistoriaClinica, mode: 'view' | 'edit' = 'view'): void {
    this.editingHistoriaId = historia.id!;
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

  private flattenDataForForm(data: any) {
    const formData: any = {
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
      data.diagnosticos.forEach((diag: any, index: number) => {
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

  saveHistoria(): void {
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
      const historiaData: HistoriaClinicaOrganizada = {
        ...organizedData,
        paciente_id: this.pacienteId!
      };


      if (this.isEditing && this.editingHistoriaId) {
        this.historiasClinicasService.updateHistoriaClinicaOrganizada(this.editingHistoriaId, historiaData).subscribe({
          next: () => {
            this.toastService.showSuccess('Historia clínica actualizada exitosamente');
            this.loadHistoriasClinicas();
            this.closeForm();
          },
          error: (error) => {
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
          error: (error) => {
            this.toastService.showError('Error al crear historia clínica');
            console.error('Error creating historia clinica:', error);
          }
        });
      }
    } else {
      this.toastService.showError('Por favor complete todos los campos requeridos');
    }
  }

  private organizeDataBySections(formData: any) {
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
        diagnosticos: [
          {
            codigo: formData.diagnostico_codigo_1,
            diagnostico: formData.diagnostico_diagnostico_1,
            descripcion: formData.diagnostico_descripcion_1,
            ojo: formData.diagnostico_ojo_1,
            principal: formData.diagnostico_principal_1
          },
          {
            codigo: formData.diagnostico_codigo_2,
            diagnostico: formData.diagnostico_diagnostico_2,
            descripcion: formData.diagnostico_descripcion_2,
            ojo: formData.diagnostico_ojo_2,
            principal: formData.diagnostico_principal_2
          },
          {
            codigo: formData.diagnostico_codigo_3,
            diagnostico: formData.diagnostico_diagnostico_3,
            descripcion: formData.diagnostico_descripcion_3,
            ojo: formData.diagnostico_ojo_3,
            principal: formData.diagnostico_principal_3
          },
          {
            codigo: formData.diagnostico_codigo_4,
            diagnostico: formData.diagnostico_diagnostico_4,
            descripcion: formData.diagnostico_descripcion_4,
            ojo: formData.diagnostico_ojo_4,
            principal: formData.diagnostico_principal_4
          },
          {
            codigo: formData.diagnostico_codigo_5,
            diagnostico: formData.diagnostico_diagnostico_5,
            descripcion: formData.diagnostico_descripcion_5,
            ojo: formData.diagnostico_ojo_5,
            principal: formData.diagnostico_principal_5
          }
        ].filter(d => d.codigo || d.diagnostico || d.descripcion) // Solo incluir diagnósticos con datos
      }
    };
  }

  closeForm(): void {
    this.showCreateForm = false;
    this.isEditing = false;
    this.editingHistoriaId = null;
    this.historiaForm.reset();
    this.selectedHistoriaEditable = false;
    this.selectedHistoriaEditMessage = '';
    this.selectedHistoriaEditableUntil = null;
    this.selectedHistoriaCreatedAt = null;
  }

  toggleSeccion(seccion: string): void {
    this.seccionesDesplegadas[seccion] = !this.seccionesDesplegadas[seccion];
  }

  // Método reutilizable para alternar visibilidad de filas en tablas
  toggleFila(filaKey: string): void {
    this.filasVisibles[filaKey] = !this.filasVisibles[filaKey];
  }

  // Método para verificar si una fila está visible
  isFilaVisible(filaKey: string): boolean {
    return this.filasVisibles[filaKey] || false;
  }

  volverAPacientes(): void {
    this.router.navigate(['/pacientes']);
  }

  // Métodos para manejar el array de diagnósticos
  getDiagnosticoArray(): FormArray {
    return this.historiaForm.get('diagnostico') as FormArray;
  }

  addDiagnostico(): void {
    const diagnosticoGroup = this.fb.group({
      codigo: [''],
      diagnostico: [''],
      descripcion: [''],
      ojo: [''],
      principal: [false]
    });
    this.getDiagnosticoArray().push(diagnosticoGroup);
  }

  removeDiagnostico(index: number): void {
    this.getDiagnosticoArray().removeAt(index);
  }

  // Método para inicializar diagnósticos vacíos
  initializeDiagnosticoArray(): void {
    const diagnosticoArray = this.getDiagnosticoArray();
    diagnosticoArray.clear();
    // Agregar 5 diagnósticos vacíos como en la imagen
    for (let i = 0; i < 5; i++) {
      this.addDiagnostico();
    }
  }

  // Métodos para validación y formateo de campos de lensometría
  validateLensometriaField(event: any): void {
    const input = event.target;
    const value = input.value;
    const pattern = /^[+-]?(\d+\.?\d{0,2}|\.\d{1,2})$/;
    
    if (value && !pattern.test(value)) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }

  formatLensometriaField(event: any): void {
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
  formatEsferaField(event: any): void {
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
    let formattedValue = tieneSignoNegativo 
      ? '-' + Math.abs(numValue).toFixed(2)
      : '+' + Math.abs(numValue).toFixed(2);
    
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
  formatCilindroField(event: any): void {
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
  validateEjeField(event: any): void {
    const input = event.target;
    const value = input.value;
    const pattern = /^\d+$/;
    
    if (value && !pattern.test(value)) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }

  formatEjeField(event: any): void {
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
  onVersionesVClick(event: Event, ojo: 'derecho' | 'izquierdo'): void {
    const target = event.target as SVGTextElement;
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

  onVersionesKeyDown(event: KeyboardEvent, ojo: 'derecho' | 'izquierdo', position: string): void {
    // Enter o Espacio para editar
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // Simular click
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      const target = event.target as SVGTextElement;
      target.dispatchEvent(clickEvent);
    } else if (event.key === 'Tab') {
      // Tab debe funcionar normalmente para navegar
      // El sistema de navegación Tab ya lo maneja automáticamente
    }
  }

  onToggleButtonKeyDown(event: KeyboardEvent, filaKey: string): void {
    // Enter o Espacio para toggle
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleFila(filaKey);
    } else if (event.key === 'Tab') {
      // Tab debe funcionar normalmente para navegar
      // El sistema de navegación Tab ya lo maneja automáticamente
    }
  }

  private createTemporaryInput(textElement: SVGTextElement, ojo: string, position: string): void {
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
      
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.saveVersionesValue(input, textElement, ojo, position);
        } else if (e.key === 'Escape') {
          this.cancelVersionesEdit(input, textElement);
        }
      });
    }
  }

  private saveVersionesValue(input: HTMLInputElement, textElement: SVGTextElement, ojo: string, position: string): void {
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

  private cancelVersionesEdit(input: HTMLInputElement, textElement: SVGTextElement): void {
    textElement.classList.remove('editing');
    input.remove();
  }

  // Función para sincronizar valores del SVG con el formulario
  private syncVersionesFromSVG(): void {
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
  private syncVersionesToSVG(): void {
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
  private setupKeratometriaCalculations(): void {
    
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
  private setupExamenRefractivoSync(): void {
    const syncFieldsForEye = (eye: 'derecho' | 'izquierdo') => {
      const fieldMappings = [
        { from: `examen_refractivo_subjetivo_${eye}_esfera`, to: `formula_${eye}_esfera` },
        { from: `examen_refractivo_subjetivo_${eye}_cilindro`, to: `formula_${eye}_cilindro` },
        { from: `examen_refractivo_subjetivo_${eye}_eje`, to: `formula_${eye}_eje` },
        { from: `examen_refractivo_subjetivo_${eye}_av_lejos`, to: `formula_${eye}_av_lejos` },
        { from: `examen_refractivo_subjetivo_${eye}_add`, to: `formula_${eye}_add` },
        { from: `examen_refractivo_subjetivo_${eye}_av_cerca`, to: `formula_${eye}_av_cerca` },
        { from: `examen_refractivo_subjetivo_${eye}_dnp`, to: `formula_${eye}_dnp` }
      ];

      fieldMappings.forEach(mapping => {
        const sourceControl = this.historiaForm.get(mapping.from);
        const targetControl = this.historiaForm.get(mapping.to);
        
        if (sourceControl && targetControl) {
          sourceControl.valueChanges.subscribe(value => {
            targetControl.setValue(value, { emitEvent: false });
          });
        }
      });
    };

    syncFieldsForEye('derecho');
    syncFieldsForEye('izquierdo');
  }

  // Configurar actualización automática de fecha_control basado en fecha_consulta
  private setupFechaControlSync(): void {
    const fechaConsultaControl = this.historiaForm.get('fecha_consulta');
    const fechaControlControl = this.historiaForm.get('fecha_control');
    
    if (fechaConsultaControl && fechaControlControl) {
      fechaConsultaControl.valueChanges.subscribe(fechaConsulta => {
        if (fechaConsulta) {
          const fechaControl = this.calcularFechaControl(fechaConsulta);
          fechaControlControl.setValue(fechaControl, { emitEvent: false });
        }
      });
      
      // Inicializar fecha_control solo si fecha_consulta tiene valor y fecha_control está vacío
      // Esto evita sobrescribir fecha_control cuando se carga un formulario existente
      if (fechaConsultaControl.value && !fechaControlControl.value) {
        const fechaControl = this.calcularFechaControl(fechaConsultaControl.value);
        fechaControlControl.setValue(fechaControl, { emitEvent: false });
      }
    }
  }

  // Obtener fecha local en formato YYYY-MM-DD (sin conversión UTC)
  private getFechaLocal(): string {
    const ahora = new Date();
    const año = ahora.getFullYear();
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const dia = String(ahora.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  }

  // Calcular fecha_control (fecha_consulta + 1 año)
  private calcularFechaControl(fechaConsulta: string): string {
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
  formatKeratometriaOnBlur(fieldName: string): void {
    const control = this.historiaForm.get(fieldName);
    if (control) {
      const value = control.value;
      if (value && value !== '') {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          const formattedValue = numValue.toFixed(2);
          control.setValue(formattedValue, { emitEvent: false });
        }
      }
    }
  }

  // Permitir solo números y punto decimal en campos de keratometría
  onKeratometriaKeyPress(event: KeyboardEvent): void {
    const char = event.key;
    const currentValue = (event.target as HTMLInputElement).value;
    
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

  private calculateKeratometriaDerecho(): void {
    const plano = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_derecho_plano')?.value || '0');
    const curvo = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_derecho_curvo')?.value || '0');
    
    
    const corn = plano - curvo;
    const cornFormatted = corn.toFixed(2);
    
    
    this.historiaForm.get('examen_refractivo_keratometria_derecho_corn')?.setValue(cornFormatted, { emitEvent: false });
  }

  private calculateKeratometriaIzquierdo(): void {
    const plano = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_izquierdo_plano')?.value || '0');
    const curvo = parseFloat(this.historiaForm.get('examen_refractivo_keratometria_izquierdo_curvo')?.value || '0');
    
    
    const corn = plano - curvo;
    const cornFormatted = corn.toFixed(2);
    
    
    this.historiaForm.get('examen_refractivo_keratometria_izquierdo_corn')?.setValue(cornFormatted, { emitEvent: false });
  }


  // Función única para calcular vórtice (basada en la función proporcionada)
  private calcular_vortice_1(esfera: number, distancia: number): number {
    // Paso 1: calcular valor base
    let base: number;
    try {
      base = 1 / (1 / esfera - (distancia / 1000));
      if (!isFinite(base)) base = 0; // similar a IFERROR
    } catch {
      base = 0;
    }

    // Paso 2: determinar signo
    const sign = Math.sign(base);

    // Paso 3: definir múltiplo (0.25 con signo)
    const multiple = sign * 0.25;

    // Paso 4: función para imitar MROUND de Excel
    function mround(value: number, multiple: number): number {
      if (multiple === 0) return 0;
      return Math.round(value / multiple) * multiple;
    }

    // Paso 5: devolver resultado
    return mround(base, multiple);
  }

  // Función para calcular MM (basada en la función proporcionada)
  private calcFormula(esfera: number, distancia: number, cilindro: number): number {
    try {
      const dist = distancia / 1000; // convertir a metros, como en Excel (M68/1000)
  
      if (!isFinite(esfera) || esfera === 0) return 0;
  
      // Primer valor: (1 / ((1 / esfera) - dist))
      const val1Raw = 1 / ((1 / esfera) - dist);
      const val1 = isFinite(val1Raw) ? val1Raw : 0;
  
      // Segundo valor: (1 / ((1 / (esfera - ABS(cilindro))) - dist))
      // En Excel: (1 / (B70 + ABS(C70)*-1))  →  (esfera - ABS(cilindro))
      const val2Raw = 1 / ((1 / (esfera - Math.abs(cilindro))) - dist);
      const val2 = isFinite(val2Raw) ? val2Raw : 0;
  
      // Diferencia absoluta
      const diffAbs = Math.abs(val1 - val2);
  
      // Determinar signo según Excel
      const signCheck = (diffAbs * -1) < 0 ? -1 : 1;
  
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
  recalcularVortices(): void {
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
        this.historiaForm.get('examen_refractivo_subjetivo_derecho_vortice')?.setValue(resultadoFormateado, { emitEvent: false });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_derecho_vortice')?.setValue('+0.00', { emitEvent: false });
    }

    // Calcular vórtice izquierdo
    if (esferaIzquierdaStr && !isNaN(distancia)) {
      const esfera = parseFloat(esferaIzquierdaStr);
      if (!isNaN(esfera)) {
        const resultado = this.calcular_vortice_1(esfera, distancia);
        const resultadoFormateado = resultado >= 0 ? `+${resultado.toFixed(2)}` : resultado.toFixed(2);
        this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_vortice')?.setValue(resultadoFormateado, { emitEvent: false });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_vortice')?.setValue('+0.00', { emitEvent: false });
    }
  }

  // Función única para recalcular ambos campos MM
  recalcularMM(): void {
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
        this.historiaForm.get('examen_refractivo_subjetivo_derecho_mm')?.setValue(resultadoFormateado, { emitEvent: false });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_derecho_mm')?.setValue('0.00', { emitEvent: false });
    }

    // Calcular MM izquierdo
    if (esferaIzquierdaStr !== '' && cilindroIzquierdoStr !== '' && !isNaN(distancia)) {
      const esfera = parseFloat(esferaIzquierdaStr);
      const cilindro = parseFloat(cilindroIzquierdoStr);
      if (!isNaN(esfera) && !isNaN(cilindro)) {
        const resultado = this.calcFormula(esfera, distancia, cilindro);
        const resultadoFormateado = resultado >= 0 ? `+${resultado.toFixed(2)}` : resultado.toFixed(2);
        this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_mm')?.setValue(resultadoFormateado, { emitEvent: false });
      }
    } else {
      this.historiaForm.get('examen_refractivo_subjetivo_izquierdo_mm')?.setValue('0.00', { emitEvent: false });
    }
  }

  
  // Métodos para manejar cambios directos en los inputs
  onFechaConsultaChange(): void {
    const fechaConsultaControl = this.historiaForm.get('fecha_consulta');
    const fechaControlControl = this.historiaForm.get('fecha_control');
    
    if (fechaConsultaControl && fechaControlControl) {
      const fechaConsulta = fechaConsultaControl.value;
      if (fechaConsulta) {
        const fechaControl = this.calcularFechaControl(fechaConsulta);
        fechaControlControl.setValue(fechaControl, { emitEvent: false });
      }
    }
  }

  onEsferaDerechaChange(event: any): void {
    this.recalcularVortices();
    this.recalcularMM();
  }

  onEsferaIzquierdaChange(event: any): void {
    this.recalcularVortices();
    this.recalcularMM();
  }

  onCilindroDerechoChange(event: any): void {
    this.recalcularMM();
  }

  onCilindroIzquierdoChange(event: any): void {
    this.recalcularMM();
  }

  onDistanciaChange(event: any): void {
    this.recalcularVortices();
    this.recalcularMM();
  }

  // Prevenir envío del formulario al presionar Enter y manejar Tab
  onKeyDown(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    const target = event.target as HTMLElement;
    
    // Manejar Tab para inputs, textareas, selects y botones con tabindex
    if (keyboardEvent.key === 'Tab' && 
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || 
         (target.tagName === 'BUTTON' && target.getAttribute('tabindex') !== null))) {
      this.handleTabNavigation(keyboardEvent);
    } else if (keyboardEvent.key === 'Enter') {
      // Solo permitir envío si se presiona Enter en el botón de guardar
      if (target.tagName !== 'BUTTON' || !target.textContent?.includes('Guardar')) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  handleTabNavigation(event: KeyboardEvent): void {
    const currentElement = event.target as HTMLElement;
    
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
      let siguienteElemento: HTMLElement | null = null;
      
      // Intentar buscar por formControlName primero
      siguienteElemento = formElement.querySelector(`[formControlName="${siguienteCampo}"]`);
      
      // Si no se encuentra, buscar por ID (para elementos SVG o botones)
      if (!siguienteElemento) {
        siguienteElemento = document.getElementById(siguienteCampo);
      }
      
      if (siguienteElemento && (siguienteElemento instanceof HTMLInputElement || siguienteElemento instanceof HTMLTextAreaElement || siguienteElemento instanceof HTMLSelectElement || siguienteElemento instanceof SVGTextElement || siguienteElemento instanceof HTMLButtonElement)) {
        setTimeout(() => {
          siguienteElemento!.focus();
          if (siguienteElemento instanceof HTMLInputElement || siguienteElemento instanceof HTMLTextAreaElement) {
            siguienteElemento.select();
          }
        }, 10);
      }
    }
    // Si no hay siguiente campo válido, dejar que el navegador maneje la navegación normal
  }

  encontrarSiguienteCampoValido(indice: number, retroceder: boolean, formElement: Element): string | null {
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

  esCampoVisible(campo: string, formElement: Element): boolean {
    // Verificar si el campo existe y es visible en el DOM
    let elemento: Element | null = null;
    
    // Buscar por formControlName primero
    elemento = formElement.querySelector(`[formControlName="${campo}"]`);
    
    // Si no se encuentra, buscar por ID (para elementos SVG)
    if (!elemento) {
      elemento = document.getElementById(campo);
    }
    
    if (!elemento) return false; // Campo no existe en el DOM
    
    // Verificar si el elemento es visible
    const estilo = window.getComputedStyle(elemento as HTMLElement);
    const visible = estilo.display !== 'none' && estilo.visibility !== 'hidden';
    const enDOM = (elemento as HTMLElement).offsetParent !== null;
    
    return visible && enDOM;
  }

  esSeccionAbierta(campo: string): boolean {
    const seccion = this.campoASeccionMap[campo];
    if (!seccion) return true; // Si no tiene sección asignada, considerar abierta
    
    return this.seccionesDesplegadas[seccion] === true;
  }

  // Generar PDF de la historia clínica
  generatePDF(historia: HistoriaClinica): void {
    if (!historia.id) {
      this.toastService.showError('No se encontró el ID de la historia clínica');
      return;
    }

    // Generar URL del endpoint
    const token = localStorage.getItem('token');
    const url = `${environment.apiUrl}/historias-clinicas/${historia.id}/pdf`;
    
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
  generatePDFFromView(): void {
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
}
