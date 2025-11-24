<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Repositories/UserRepository.php';

class AuthService {
    private $userRepository;
    
    public function __construct() {
        $this->userRepository = new UserRepository();
    }
    
    public function login($username, $password) {
        try {
            $user = $this->userRepository->findByUsername($username);
            
            if (!$user) {
                return ['success' => false, 'message' => 'Usuario no encontrado'];
            }
            
            if (!$user['activo']) {
                return ['success' => false, 'message' => 'Usuario inactivo'];
            }
            
            if (!password_verify($password, $user['password'])) {
                return ['success' => false, 'message' => 'Contraseña incorrecta'];
            }
            
            // Generar JWT
            $payload = [
                'user_id' => $user['id'],
                'username' => $user['username'],
                'rol' => $user['rol'],
                'optica_id' => $user['optica_id'],
                'primer_acceso' => $user['primer_acceso']
            ];
            
            $token = generateJWT($payload);
            
            return [
                'success' => true,
                'data' => [
                    'token' => $token,
                    'user' => [
                        'id' => $user['id'],
                        'username' => $user['username'],
                        'rol' => $user['rol'],
                        'optica_id' => $user['optica_id'],
                        'primer_acceso' => $user['primer_acceso']
                    ]
                ]
            ];
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error en el login: ' . $e->getMessage()];
        }
    }
    
    public function changePassword($userId, $currentPassword, $newPassword) {
        try {
            $user = $this->userRepository->findById($userId);
            
            if (!$user) {
                return ['success' => false, 'message' => 'Usuario no encontrado'];
            }
            
            if (!password_verify($currentPassword, $user['password'])) {
                return ['success' => false, 'message' => 'Contraseña actual incorrecta'];
            }
            
            $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
            $this->userRepository->updatePassword($userId, $hashedPassword);
            
            // Marcar que no es primer acceso
            $this->userRepository->updatePrimerAcceso($userId, false);
            
            return ['success' => true, 'message' => 'Contraseña cambiada exitosamente'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al cambiar contraseña: ' . $e->getMessage()];
        }
    }
}
?>




