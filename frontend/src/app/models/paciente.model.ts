export interface Paciente {
  id?: number;
  optica_id: number;
  nombre: string;
  apellidos: string;
  documento: string;
  tipo_documento: string;
  genero: string;
  fecha_nacimiento?: string;
  telefono?: string;
  email?: string;
  rh?: string;
  nombre_acudiente?: string;
  telefono_acudiente?: string;
  direccion?: string;
  eps?: string;
  tipo_afiliacion?: string;
  created_at?: string;
  updated_at?: string;
}

export interface PacienteSearchRequest {
  query?: string;
}

export interface PacienteCreateRequest extends Omit<Paciente, 'id' | 'optica_id' | 'created_at' | 'updated_at'> {}
export interface PacienteUpdateRequest extends Partial<Omit<Paciente, 'id' | 'optica_id' | 'created_at' | 'updated_at'>> {
  id?: number;
}

