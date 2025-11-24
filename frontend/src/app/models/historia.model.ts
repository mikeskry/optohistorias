export interface Historia {
  id?: number;
  paciente_id: number;
  optica_id: number;
  fecha_consulta: string;
  
  // Cuestionario
  motivo_consulta?: string;
  sintomas?: string;
  antecedentes?: string;
  medicamentos?: string;
  alergias?: string;
  
  // Agudeza Visual
  av_od_lejos?: number;
  av_od_cerca?: number;
  av_oi_lejos?: number;
  av_oi_cerca?: number;
  
  // Examen Refractivo
  esfera_od?: number;
  cilindro_od?: number;
  eje_od?: number;
  esfera_oi?: number;
  cilindro_oi?: number;
  eje_oi?: number;
  adicion?: number;
  
  // Observaciones
  observaciones?: string;
  diagnostico?: string;
  tratamiento?: string;
  proxima_cita?: string;
  
  // Datos del paciente (join)
  paciente_nombre?: string;
  paciente_apellidos?: string;
  paciente_documento?: string;
  
  created_at?: string;
}

export interface HistoriaCreateRequest extends Omit<Historia, 'id' | 'created_at' | 'paciente_nombre' | 'paciente_apellidos' | 'paciente_documento'> {}
export interface HistoriaSearchRequest {
  pacienteId?: number;
  paciente_id?: number;
  fecha_desde?: string;
  fecha_hasta?: string;
}

