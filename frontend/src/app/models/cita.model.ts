export interface Cita {
  id: number;
  nombre_paciente: string;
  optica_id: number;
  fecha: string;
  hora: string;
  duracion?: number;
  notas?: string;
  created_at: string;
}

export interface CitaCreateRequest {
  nombre_paciente: string;
  fecha: string;
  hora: string;
  duracion?: number;
  notas?: string;
}

export interface CitaUpdateRequest extends CitaCreateRequest {
  id: number;
}



