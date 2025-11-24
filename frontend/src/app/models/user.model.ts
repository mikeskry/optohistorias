export interface User {
  id: number;
  username: string;
  nombre: string;
  apellidos: string;
  email?: string;
  rol: 'admin' | 'usuario';
  optica_id?: number;
  primer_acceso: boolean | string | number; // Puede venir como boolean, string o number desde el backend
  activo?: boolean;
  optica_nombre?: string;
  optica_logo?: string; // URL o ruta del logo de la óptica
  user_nombre?: string; // Nombre del administrador principal de la óptica
  user_apellidos?: string; // Apellidos del administrador principal de la óptica
  firma?: string; // URL o ruta de la firma de la óptica
  optica_firma?: string; // Firma de la óptica (viene del backend)
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export interface ChangePasswordRequest {
  newPassword: string;
}

