<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Repositories/OpticaRepository.php';
require_once __DIR__ . '/../Repositories/UserRepository.php';

class AdminService {
    private $opticaRepository;
    private $userRepository;
    
    public function __construct() {
        $this->opticaRepository = new OpticaRepository();
        $this->userRepository = new UserRepository();
    }
    
    private function getFriendlyErrorMessage($exception) {
        $message = $exception->getMessage();
        
        // Error de email duplicado
        if (strpos($message, "Duplicate entry") !== false && strpos($message, "opticas.email") !== false) {
            preg_match("/Duplicate entry '([^']+)' for key 'opticas.email'/", $message, $matches);
            $email = $matches[1] ?? 'el correo';
            return "El correo '$email' ya se encuentra asignado a otra óptica";
        }
        
        // Error de nombre duplicado
        if (strpos($message, "Duplicate entry") !== false && strpos($message, "opticas.nombre") !== false) {
            preg_match("/Duplicate entry '([^']+)' for key 'opticas.nombre'/", $message, $matches);
            $nombre = $matches[1] ?? 'el nombre';
            return "El nombre '$nombre' ya se encuentra registrado";
        }
        
        // Error de usuario duplicado
        if (strpos($message, "Duplicate entry") !== false && strpos($message, "usuarios.username") !== false) {
            preg_match("/Duplicate entry '([^']+)' for key 'usuarios.username'/", $message, $matches);
            $username = $matches[1] ?? 'el usuario';
            return "El usuario '$username' ya se encuentra registrado";
        }
        
        // Error de email duplicado en usuarios
        if (strpos($message, "Duplicate entry") !== false && strpos($message, "usuarios.email") !== false) {
            preg_match("/Duplicate entry '([^']+)' for key 'usuarios.email'/", $message, $matches);
            $email = $matches[1] ?? 'el correo';
            return "El correo '$email' ya se encuentra registrado en otro usuario";
        }
        
        // Error de clave foránea
        if (strpos($message, "Cannot add or update a child row") !== false) {
            return "No se puede realizar la operación porque hay datos relacionados que impiden esta acción";
        }
        
        // Error de conexión a base de datos
        if (strpos($message, "SQLSTATE[HY000]") !== false) {
            return "Error de conexión con la base de datos. Intente nuevamente";
        }
        
        // Error de sintaxis SQL
        if (strpos($message, "SQL syntax") !== false) {
            return "Error interno del sistema. Contacte al administrador";
        }
        
        // Error de tabla no encontrada
        if (strpos($message, "Table") !== false && strpos($message, "doesn't exist") !== false) {
            return "Error interno del sistema. Contacte al administrador";
        }
        
        // Error de columna no encontrada
        if (strpos($message, "Unknown column") !== false) {
            return "Error interno del sistema. Contacte al administrador";
        }
        
        // Si no coincide con ningún patrón conocido, devolver mensaje genérico
        return "Ha ocurrido un error inesperado. Intente nuevamente";
    }
    
    public function getOpticas() {
        return $this->opticaRepository->getAll();
    }
    
    public function createOptica($data, $logoPath = null) {
        try {
            
            // Validar datos requeridos
            if (empty($data['nombre']) || empty($data['email']) || 
                empty($data['user_nombre']) || empty($data['user_apellidos'])) {
                return ['success' => false, 'message' => 'Nombre, email, nombre del administrador y apellidos del administrador son requeridos'];
            }
            
            // Crear óptica con todos los campos requeridos
            $opticaData = [
                'nombre' => $data['nombre'],
                'direccion' => $data['direccion'] ?? '',
                'telefono' => $data['telefono'] ?? '',
                'email' => $data['email'],
                'logo' => $logoPath // Agregar logo
            ];
            
            $opticaId = $this->opticaRepository->create($data);
                        
            $optica = $this->opticaRepository->findById($opticaId);
            return ['success' => true, 'data' => $optica];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => $this->getFriendlyErrorMessage($e)];
        }
    }
    
    public function updateOptica($id, $data, $logoPath = null) {
        try {
            if (!$this->opticaRepository->findById($id)) {
                return ['success' => false, 'message' => 'Óptica no encontrada'];
            }
            
            // Si hay nuevo logo, agregarlo a los datos
            if ($logoPath !== null) {
                $data['logo'] = $logoPath;
            }
            
            // Actualizar óptica
            $this->opticaRepository->update($id, $data);
            
            // Si se desactiva la óptica, también desactivar todos los usuarios asociados
            if (isset($data['activo']) && !$data['activo']) {
                $this->deactivateOpticaUsers($id);
            }
            
            // Si se proporcionan datos del usuario, actualizar también el usuario
            if (isset($data['user_nombre']) || isset($data['user_apellidos'])) {
                $user = $this->userRepository->findByOpticaId($id);
                if ($user) {
                    $userUpdateData = [];
                    if (isset($data['user_nombre'])) {
                        $userUpdateData['nombre'] = $data['user_nombre'];
                    }
                    if (isset($data['user_apellidos'])) {
                        $userUpdateData['apellidos'] = $data['user_apellidos'];
                    }
                    
                    if (!empty($userUpdateData)) {
                        $this->userRepository->updateUser($user['id'], $userUpdateData);
                    }
                }
            }
            
            $optica = $this->opticaRepository->findById($id);
            return ['success' => true, 'data' => $optica];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => $this->getFriendlyErrorMessage($e)];
        }
    }
    
    private function deactivateOpticaUsers($opticaId) {
        try {
            $pdo = getDBConnection();
            $stmt = $pdo->prepare("UPDATE usuarios SET activo = 0 WHERE optica_id = ?");
            $stmt->execute([$opticaId]);
        } catch (Exception $e) {
            // Error silencioso al desactivar usuarios
        }
    }
    
    public function deleteOptica($id) {
        try {
            if (!$this->opticaRepository->findById($id)) {
                return ['success' => false, 'message' => 'Óptica no encontrada'];
            }
            
            $this->opticaRepository->delete($id);
            return ['success' => true, 'message' => 'Óptica eliminada exitosamente'];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => $this->getFriendlyErrorMessage($e)];
        }
    }
    
    public function resetPassword($opticaId) {
        try {
            // Buscar el usuario principal de la óptica
            $user = $this->userRepository->findByOpticaId($opticaId);
            if (!$user) {
                return ['success' => false, 'message' => 'Usuario de la óptica no encontrado'];
            }
            
            $this->userRepository->resetPassword($user['id']);
            return ['success' => true, 'message' => 'Contraseña restablecida exitosamente a "optica123"'];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => $this->getFriendlyErrorMessage($e)];
        }
    }
    
    public function updateOpticaFirma($opticaId, $firmaPath) {
        try {
            error_log("AdminService::updateOpticaFirma - Óptica ID: " . $opticaId . ", Firma: " . $firmaPath);
            
            $result = $this->opticaRepository->updateFirma($opticaId, $firmaPath);
            
            if ($result) {
                $optica = $this->opticaRepository->findById($opticaId);
                return ['success' => true, 'data' => $optica];
            } else {
                return ['success' => false, 'message' => 'Error al actualizar la firma'];
            }
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => $this->getFriendlyErrorMessage($e)];
        }
    }
    
    public function deleteOpticaFirma($opticaId) {
        try {
            error_log("AdminService::deleteOpticaFirma - Óptica ID: " . $opticaId);
            
            $result = $this->opticaRepository->deleteFirma($opticaId);
            
            if ($result) {
                $optica = $this->opticaRepository->findById($opticaId);
                return ['success' => true, 'data' => $optica];
            } else {
                return ['success' => false, 'message' => 'Error al eliminar la firma'];
            }
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => $this->getFriendlyErrorMessage($e)];
        }
    }
}
?>

