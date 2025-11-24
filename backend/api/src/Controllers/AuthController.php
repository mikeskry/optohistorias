<?php
require_once __DIR__ . '/../../config.php';

class AuthController {
    
    public function login($input) {
        try {
            // Validar datos de entrada
            if (!isset($input['username']) || !isset($input['password'])) {
                errorResponse('Username y password son requeridos', 400);
                return;
            }
            
            $username = $input['username'];
            $password = $input['password'];
            
            // Conectar a la base de datos
            $pdo = getDBConnection();
            
            // Buscar usuario con datos del administrador principal de la óptica
            $stmt = $pdo->prepare("
                SELECT u.*, o.nombre as optica_nombre, o.logo as optica_logo, o.firma as optica_firma, o.activo as optica_activa,
                       admin.nombre as user_nombre, admin.apellidos as user_apellidos
                FROM usuarios u 
                LEFT JOIN opticas o ON u.optica_id = o.id 
                LEFT JOIN usuarios admin ON o.id = admin.optica_id AND admin.principal = 1
                WHERE u.username = ?
            ");
            $stmt->execute([$username]);
            $user = $stmt->fetch();
            
            if (!$user) {
                errorResponse('Usuario no encontrado', 401);
                return;
            }
            
            // Verificar password (comparación directa sin hasheo)
            if ($password !== $user['password']) {
                errorResponse('Password incorrecto', 401);
                return;
            }
            
            // Verificar que la óptica esté activa (solo para usuarios no admin)
            if (isset($user['optica_id']) && isset($user['optica_activa']) && $user['optica_activa'] != 1) {
                errorResponse('Su cuenta ha sido deshabilitada. Por favor, contacte al administrador.', 403);
                return;
            }
            
            // Generar JWT
            $payload = [
                'user_id' => $user['id'],
                'username' => $user['username'],
                'rol' => $user['rol'],
                'optica_id' => $user['optica_id']
            ];
            
            $token = generateJWT($payload);
            
            // Preparar respuesta del usuario (sin password)
            unset($user['password']);
            
            // Log para depuración
            error_log("AuthController::login - Usuario obtenido: " . json_encode($user));
            error_log("AuthController::login - optica_logo: " . ($user['optica_logo'] ?? 'NULL'));
            
            // Respuesta exitosa
            echo json_encode([
                'success' => true,
                'message' => 'Login exitoso',
                'data' => [
                    'token' => $token,
                    'user' => $user
                ]
            ]);
            
        } catch (Exception $e) {
            errorResponse('Error interno del servidor', 500);
        }
    }
    
    public function changePassword($input) {
        try {
            // Obtener usuario autenticado
            $user = getAuthenticatedUser();
            
            // Validar datos de entrada
            if (!isset($input['newPassword'])) {
                errorResponse('Nuevo password es requerido', 400);
                return;
            }
            
            $newPassword = $input['newPassword'];
            
            // Conectar a la base de datos
            $pdo = getDBConnection();
            
            // Verificar si es primer acceso
            $stmt = $pdo->prepare("SELECT primer_acceso FROM usuarios WHERE id = ?");
            $stmt->execute([$user['user_id']]);
            $currentUser = $stmt->fetch();
            
            // Solo permitir cambio de contraseña si es primer acceso
            if (!$currentUser || $currentUser['primer_acceso'] != 1) {
                errorResponse('No se puede cambiar la contraseña. Solo disponible para primer acceso.', 403);
                return;
            }
            
            // Actualizar password y marcar que ya no es primer acceso
            $stmt = $pdo->prepare("UPDATE usuarios SET password = ?, primer_acceso = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?");
            $stmt->execute([$newPassword, $user['user_id']]);
            
            // Respuesta exitosa
            successResponse(null, 'Password actualizado correctamente');
            
        } catch (Exception $e) {
            errorResponse('Error interno del servidor', 500);
        }
    }
}
?>
