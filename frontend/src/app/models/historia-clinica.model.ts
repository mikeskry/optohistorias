export interface HistoriaClinica {
  id?: number;
  paciente_id: number;
  fecha_consulta: string;
  motivo_consulta: string;
  hora?: string;
  
  // Datos del paciente
  nombre_paciente?: string;
  apellidos_paciente?: string;
  documento_paciente?: string;
  edad_paciente?: number;
  telefono_paciente?: string;
  email_paciente?: string;
  
  // CUESTIONARIO
  tipo_examen: string;
  anamnesis: string;
  ultima_valoracion_optometria: string;
  antecedentes_familiares: string;
  antecedentes_personales: string;
  antecedentes_laborales: string;
  ocupacion_profesion: string;
  
  // LENSOMETRÍA
  lensometria_formula_lejos: LensometriaFormula;
  lensometria_formula_cerca: LensometriaFormulaCerca;
  lensometria_observaciones: string;
  
  // AGUDEZA VISUAL
  agudeza_visual_lejos: AgudezaVisual;
  agudeza_visual_cerca: AgudezaVisualCerca;
  
  // EXAMEN MOTOR
  examen_motor: ExamenMotor;
  
  // EXAMEN REFRACTIVO
  examen_refractivo: ExamenRefractivo;
  
  // EXAMEN OFTALMOLÓGICO
  examen_oftalmologico: ExamenOftalmologico;
  
  // OFTALMOSCOPIA
  oftalmoscopia: Oftalmoscopia;
  
  // FORMULA FINAL
  formula_final: FormulaFinal;
  
  // DIAGNÓSTICO
  diagnostico: DiagnosticoItem[];
  
  // Observaciones
  observaciones: string;
  
  // Datos del profesional
  profesional_id: number;
  nombre_profesional?: string;
  
  created_at?: string;
  updated_at?: string;
}

// Interfaces para los campos específicos

export interface LensometriaFormula {
  derecho: {
    esfera: number;
    cilindro: number;
    eje: number;
    adicion: number;
    prisma: string;
  };
  izquierdo: {
    esfera: number;
    cilindro: number;
    eje: number;
    adicion: number;
    prisma: string;
  };
}

export interface LensometriaFormulaCerca {
  derecho: {
    esfera: number;
    cilindro: number;
    eje: number;
    adicion: number;
  };
  izquierdo: {
    esfera: number;
    cilindro: number;
    eje: number;
    adicion: number;
  };
}

export interface AgudezaVisual {
  test_usado: {
    distancia: string;
    descripcion: string;
  };
  lateralidad: {
    sin_correccion: {
      derecho: string;
      izquierdo: string;
      ambos: string;
    };
    con_correccion: {
      derecho: string;
      izquierdo: string;
      ambos: string;
    };
  };
}

export interface AgudezaVisualCerca {
  test_usado: {
    distancia: string;
    descripcion: string;
  };
  lateralidad: {
    sin_correccion: {
      derecho: string;
      izquierdo: string;
      ambos: string;
    };
    con_correccion: {
      derecho: string;
      izquierdo: string;
      ambos: string;
    };
    pin_hole: {
      derecho: string;
      izquierdo: string;
    };
  };
}

export interface ExamenMotor {
  dominancia: {
    mano: string;
    ojo: string;
  };
  punto_proximo_convergencia: {
    valor: string;
    dp_lejos: string;
    dp_cerca: string;
  };
  ducciones: {
    ojo_derecho: string;
    ojo_izquierdo: string;
  };
  versiones: {
    ojo_derecho: string;
    ojo_izquierdo: string;
  };
  kappa: {
    ojo_derecho: string;
    ojo_izquierdo: string;
  };
  hirschberg: string;
  medicion_desviacion: {
    test_utilizado: string;
    con_correccion: {
      distancia: {
        metros_6: { horizontal: string; vertical: string };
        metros_30_40: { horizontal: string; vertical: string };
      };
    };
    sin_correccion: {
      distancia: {
        metros_6: { horizontal: string; vertical: string };
        metros_30_40: { horizontal: string; vertical: string };
      };
    };
    observaciones: string;
  };
  test_color: {
    ojo_derecho: string;
    ojo_izquierdo: string;
  };
  estereopsis: {
    tipo_test: string;
    resultado: string;
  };
}

export interface ExamenRefractivo {
  keratometria: {
    derecho: {
      plano: number;
      curvo: number;
      eje: number;
      miras: string;
      corn: number;
    };
    izquierdo: {
      plano: number;
      curvo: number;
      eje: number;
      miras: string;
      corn: number;
    };
  };
  retinoscopia_estatica: {
    derecho: {
      esfera: number;
      cilindro: number;
      eje: number;
      sombras: string;
    };
    izquierdo: {
      esfera: number;
      cilindro: number;
      eje: number;
      sombras: string;
    };
  };
  retinoscopia_dinamica: {
    radio_k: {
      valor_767: { derecho: string; izquierdo: string };
      valor_785: { derecho: string; izquierdo: string };
    };
    lateralidad: {
      derecho: {
        esfera: number;
        cilindro: number;
        eje: number;
        sombras: string;
      };
      izquierdo: {
        esfera: number;
        cilindro: number;
        eje: number;
        sombras: string;
      };
    };
  };
  otra_refraccion: {
    lateralidad: string;
    esfera: number;
    cilindro: number;
    eje: number;
    sombras: string;
  };
  subjetivo: {
    en_estado: string;
    cycloplejia: boolean;
    otra: boolean;
    derecho: {
      esfera: number;
      cilindro: number;
      eje: number;
      av_lejos: string;
      add: string;
      av_cerca: string;
      dnp: number;
    };
    izquierdo: {
      esfera: number;
      cilindro: number;
      eje: number;
      av_lejos: string;
      add: string;
      av_cerca: string;
      dnp: number;
    };
  };
  distancia_vertice: {
    valor: number;
    derecho: number;
    izquierdo: number;
  };
  av_retinoscopia: {
    estatica: {
      derecho: string;
      izquierdo: string;
    };
    dinamica: {
      derecho: string;
      izquierdo: string;
    };
  };
}

export interface ExamenOftalmologico {
  pupila: {
    derecho: string;
    izquierdo: string;
  };
  parpados: {
    derecho: string;
    izquierdo: string;
  };
  pelicula_lagrimal: {
    derecho: string;
    izquierdo: string;
  };
  conjuntiva: {
    derecho: string;
    izquierdo: string;
  };
  cornea: {
    derecho: string;
    izquierdo: string;
  };
  cristalino: {
    derecho: string;
    izquierdo: string;
  };
  camara_anterior: {
    derecho: string;
    izquierdo: string;
  };
  iris: {
    derecho: string;
    izquierdo: string;
  };
  bruckner: string;
}

export interface Oftalmoscopia {
  fondo_ojo_derecho: {
    excavacion: number;
    descripcion: string;
  };
  fondo_ojo_izquierdo: {
    excavacion: number;
    descripcion: string;
  };
}

export interface FormulaFinal {
  derecho: {
    esfera: string;
    cilindro: string;
    eje: string;
    av_lejos: string;
    add: string;
    av_cerca: string;
    dnp: number;
    recomendacion: string;
  };
  izquierdo: {
    esfera: string;
    cilindro: string;
    eje: string;
    av_lejos: string;
    add: string;
    av_cerca: string;
    dnp: number;
    recomendacion: string;
  };
}

export interface DiagnosticoItem {
  codigo: string;
  diagnostico: string;
  descripcion: string;
  ojo: string;
  principal: boolean;
}

export interface HistoriaClinicaCreateRequest extends Omit<HistoriaClinica, 'id' | 'created_at' | 'updated_at'> {}

// Nueva interfaz para datos organizados por secciones
export interface HistoriaClinicaOrganizada {
  paciente_id: number;
  fecha_consulta: string;
  motivo_consulta: string;
  
  cuestionario?: {
    tipo_examen?: string;
    anamnesis?: string;
    ultima_valoracion_optometria?: string;
    ocupacion_profesion?: string;
    antecedentes_familiares?: string;
    antecedentes_personales?: string;
    antecedentes_laborales?: string;
  };
  
  lensometria?: {
    formula_lejos_derecho_esfera?: string;
    formula_lejos_derecho_cilindro?: string;
    formula_lejos_derecho_eje?: string;
    formula_lejos_derecho_adicion?: string;
    formula_lejos_derecho_prisma?: string;
    formula_lejos_izquierdo_esfera?: string;
    formula_lejos_izquierdo_cilindro?: string;
    formula_lejos_izquierdo_eje?: string;
    formula_lejos_izquierdo_adicion?: string;
    formula_lejos_izquierdo_prisma?: string;
    formula_cerca_derecho_esfera?: string;
    formula_cerca_derecho_cilindro?: string;
    formula_cerca_derecho_eje?: string;
    formula_cerca_derecho_adicion?: string;
    formula_cerca_izquierdo_esfera?: string;
    formula_cerca_izquierdo_cilindro?: string;
    formula_cerca_izquierdo_eje?: string;
    formula_cerca_izquierdo_adicion?: string;
    observaciones?: string;
  };
  
  agudeza_visual?: {
    lejos_test_usado?: string;
    cerca_test_usado?: string;
    lejos?: {
      sin_correccion?: {
        derecho?: string;
        izquierdo?: string;
        ambos?: string;
      };
      con_correccion?: {
        derecho?: string;
        izquierdo?: string;
        ambos?: string;
      };
      pin_hole?: {
        derecho?: string;
        izquierdo?: string;
      };
    };
    cerca?: {
      sin_correccion?: {
        derecho?: string;
        izquierdo?: string;
        ambos?: string;
        observacion?: string;
      };
      con_correccion?: {
        derecho?: string;
        izquierdo?: string;
        ambos?: string;
        observacion?: string;
      };
      pin_hole?: {
        derecho?: string;
        izquierdo?: string;
      };
    };
    cerca_distancia?: string;
    cerca_descripcion?: string;
    cerca_derecho_sin_correccion?: string;
    cerca_izquierdo_sin_correccion?: string;
    cerca_observacion_sin_correccion?: string;
    cerca_derecho_con_correccion?: string;
    cerca_izquierdo_con_correccion?: string;
    cerca_observacion_con_correccion?: string;
  };
  
  examen_motor?: any;
  examen_refractivo?: any;
  examen_oftalmologico?: any;
  oftalmoscopia?: any;
  formula_final?: any;
  observaciones?: {
    observaciones?: string;
  };
  diagnostico?: {
    diagnosticos?: any[];
    seguridad?: any;
  };
}

export interface HistoriaClinicaUpdateRequest extends Partial<Omit<HistoriaClinica, 'id' | 'created_at' | 'updated_at'>> {
  id?: number;
}

