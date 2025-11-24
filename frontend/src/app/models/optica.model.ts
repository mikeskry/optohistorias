export interface Optica {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
  activo: boolean | string | number; // Puede venir como boolean, string o number desde el backend
  logo?: string; // URL o ruta del logo de la óptica
  created_at: string;
  updated_at?: string;
  total_usuarios?: number;
  user_nombre?: string;
  user_apellidos?: string;
}

export interface OpticaCreateRequest {
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
  activo?: boolean;
  logo?: File; // Archivo de imagen del logo
  // User fields for creating the optical's admin user
  user_nombre: string;
  user_apellidos: string;
}

export interface OpticaUpdateRequest {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
  activo?: boolean;
  logo?: File; // Archivo de imagen del logo
  user_nombre: string;
  user_apellidos: string;
}



