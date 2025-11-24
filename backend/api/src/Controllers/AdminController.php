<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Services/AdminService.php';

class AdminController {
    
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
    private $adminService;
    
    public function __construct() {
        $this->adminService = new AdminService();
    }
    
    public function getOpticas() {
        try {
            $user = getAuthenticatedUser();
            
            if ($user['rol'] !== 'admin') {
                errorResponse('Acceso denegado', 403);
                return;
            }
            
            $opticas = $this->adminService->getOpticas();
            successResponse($opticas, 'Ópticas obtenidas exitosamente');
        } catch (Exception $e) {
            errorResponse($this->getFriendlyErrorMessage($e), 500);
        }
    }
    
    public function createOptica($data) {
        try {
            $user = getAuthenticatedUser();
            
            if ($user['rol'] !== 'admin') {
                errorResponse('Acceso denegado', 403);
                return;
            }
            
            if (!isset($data['nombre']) || !isset($data['email'])) {
                errorResponse('Nombre y email son requeridos');
                return;
            }
            
            // Log para depuración
            error_log("AdminController::createOptica - Datos recibidos: " . json_encode($data));
            error_log("AdminController::createOptica - FILES: " . json_encode($_FILES));
            
            // Manejar subida de logo si existe
            $logoPath = null;
            if (isset($_FILES['logo']) && $_FILES['logo']['error'] === UPLOAD_ERR_OK) {
                error_log("AdminController::createOptica - Procesando logo...");
                $logoPath = $this->handleLogoUpload($_FILES['logo']);
                error_log("AdminController::createOptica - Logo guardado en: " . $logoPath);
            } else {
                error_log("AdminController::createOptica - : " . (isset($_FILES['logo']) ? $_FILES['logo']['error'] : 'No hay FILES'));
            }
            
            $result = $this->adminService->createOptica($data, $logoPath);
/*

            // Simular respuesta exitosa
            $simulatedResponse = [
                'id' => 999,
                'nombre' => $data['nombre'],
                'email' => $data['email'],
                'telefono' => $data['telefono'] ?? '',
                'direccion' => $data['direccion'] ?? '',
                'logo' => isset($_FILES['logo']) ? 'logos/simulated_logo.png' : null,
                'user_nombre' => $data['user_nombre'] ?? '',
                'user_apellidos' => $data['user_apellidos'] ?? '',
                'activo' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ];
            
            error_log("AdminController::createOptica - Respuesta simulada: " . json_encode($simulatedResponse));
            successResponse($simulatedResponse, 'Óptica creada exitosamente (SIMULACIÓN)');
            return;
            */
            
            if ($result['success']) {
                successResponse($result['data'], 'Óptica creada exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse($this->getFriendlyErrorMessage($e), 500);
        }
    }
    
    public function updateOptica($id, $data) {
        try {
            $user = getAuthenticatedUser();
            
            if ($user['rol'] !== 'admin') {
                errorResponse('Acceso denegado', 403);
                return;
            }
            
            // Log para depuración
            error_log("AdminController::updateOptica - ID: $id, Datos recibidos: " . json_encode($data));
            error_log("AdminController::updateOptica - FILES: " . json_encode($_FILES));
            
            // Manejar subida de logo si existe
            $logoPath = null;
            if (isset($_FILES['logo']) && $_FILES['logo']['error'] === UPLOAD_ERR_OK) {
                error_log("AdminController::updateOptica - Procesando logo...");
                $logoPath = $this->handleLogoUpload($_FILES['logo']);
                error_log("AdminController::updateOptica - Logo guardado en: " . $logoPath);
            } else {
                error_log("AdminController::updateOptica - No hay logo o error en subida: " . (isset($_FILES['logo']) ? $_FILES['logo']['error'] : 'No hay FILES'));
            }
            
            error_log("1");
            $result = $this->adminService->updateOptica($id, $data, $logoPath);
            error_log("10");
            if ($result['success']) {
                successResponse($result['data'], 'Óptica actualizada exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse($this->getFriendlyErrorMessage($e), 500);
        }
    }
    
    public function deleteOptica($id) {
        try {
            $user = getAuthenticatedUser();
            
            if ($user['rol'] !== 'admin') {
                errorResponse('Acceso denegado', 403);
                return;
            }
            
            $result = $this->adminService->deleteOptica($id);
            
            if ($result['success']) {
                successResponse(null, 'Óptica eliminada exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse($this->getFriendlyErrorMessage($e), 500);
        }
    }
    
    public function resetPassword($id) {
        try {
            $user = getAuthenticatedUser();
            
            if ($user['rol'] !== 'admin') {
                errorResponse('Acceso denegado', 403);
                return;
            }
            
            $result = $this->adminService->resetPassword($id);
            
            if ($result['success']) {
                successResponse(null, 'Contraseña restablecida exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse($this->getFriendlyErrorMessage($e), 500);
        }
    }
    
    private function handleLogoUpload($file) {
        error_log("handleLogoUpload - Archivo recibido: " . json_encode($file));
        
        // Validar tipo de archivo
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($file['type'], $allowedTypes)) {
            error_log("handleLogoUpload - Tipo de archivo no permitido: " . $file['type']);
            throw new Exception('Solo se permiten archivos JPG, PNG y GIF');
        }
        
        // Validar tamaño (2MB máximo)
        if ($file['size'] > 2 * 1024 * 1024) {
            error_log("handleLogoUpload - Archivo demasiado grande: " . $file['size'] . " bytes");
            throw new Exception('El archivo es demasiado grande. Tamaño máximo: 2MB');
        }
        
        // Crear directorio si no existe
        $uploadDir = dirname(__DIR__, 2) . '/uploads/logos/';
        error_log("handleLogoUpload - Directorio de destino: " . $uploadDir);
        
        if (!is_dir($uploadDir)) {
            error_log("handleLogoUpload - Creando directorio...");
            if (!mkdir($uploadDir, 0755, true)) {
                error_log("handleLogoUpload - Error al crear directorio");
                throw new Exception('Error al crear directorio de destino');
            }
        }
        
        // Generar nombre único para el archivo
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $filename = uniqid() . '_' . time() . '.' . $extension;
        $filepath = $uploadDir . $filename;
        
        error_log("handleLogoUpload - Archivo temporal: " . $file['tmp_name']);
        error_log("handleLogoUpload - Archivo destino: " . $filepath);
        
        // Verificar permisos del directorio
        if (!is_writable($uploadDir)) {
            error_log("handleLogoUpload - Directorio no tiene permisos de escritura: " . $uploadDir);
            throw new Exception('El directorio de destino no tiene permisos de escritura');
        }
        
        // Verificar que el archivo temporal existe
        if (!file_exists($file['tmp_name'])) {
            error_log("handleLogoUpload - Archivo temporal no existe: " . $file['tmp_name']);
            throw new Exception('El archivo temporal no existe');
        }
        
        // Copiar archivo (ya que no es un upload normal de PHP)
        if (copy($file['tmp_name'], $filepath)) {
            // Eliminar archivo temporal
            unlink($file['tmp_name']);
            $relativePath = 'logos/' . $filename;
            error_log("handleLogoUpload - Archivo guardado exitosamente: " . $relativePath);
            return $relativePath; // Retornar ruta relativa
        } else {
            error_log("handleLogoUpload - Error al copiar archivo de " . $file['tmp_name'] . " a " . $filepath);
            error_log("handleLogoUpload - Error: " . error_get_last()['message']);
            throw new Exception('Error al subir el archivo');
        }
    }
    
    public function uploadFirma($data) {
        try {
            $user = getAuthenticatedUser();
            
            if ($user['rol'] !== 'usuario') {
                errorResponse('Solo las ópticas pueden subir firmas', 403);
                return;
            }
            
            $optica_id = $user['optica_id'];
            
            // Log para depuración
            error_log("AdminController::uploadFirma - Óptica ID: " . $optica_id);
            error_log("AdminController::uploadFirma - FILES: " . json_encode($_FILES));
            
            if (!isset($_FILES['firma']) || $_FILES['firma']['error'] !== UPLOAD_ERR_OK) {
                errorResponse('No se recibió archivo de firma válido');
                return;
            }
            
            // Manejar subida de firma
            $firmaPath = $this->handleFirmaUpload($_FILES['firma']);
            error_log("AdminController::uploadFirma - Firma guardada en: " . $firmaPath);
            
            $result = $this->adminService->updateOpticaFirma($optica_id, $firmaPath);
            
            if ($result['success']) {
                successResponse($result['data'], 'Firma actualizada exitosamente');
            } else {
                errorResponse($result['message'], 400);
            }
        } catch (Exception $e) {
            errorResponse($this->getFriendlyErrorMessage($e), 500);
        }
    }
    
    public function deleteFirma($data) {
        try {
            $user = getAuthenticatedUser();
            
            if ($user['rol'] !== 'usuario') {
                errorResponse('Solo las ópticas pueden eliminar firmas', 403);
                return;
            }
            
            $optica_id = $user['optica_id'];
            
            error_log("AdminController::deleteFirma - Óptica ID: " . $optica_id);
            
            $result = $this->adminService->deleteOpticaFirma($optica_id);
            
            if ($result['success']) {
                successResponse($result['data'], 'Firma eliminada exitosamente');
            } else {
                errorResponse($result['message'], 400);
            }
        } catch (Exception $e) {
            errorResponse($this->getFriendlyErrorMessage($e), 500);
        }
    }
    
    private function handleFirmaUpload($file) {
        error_log("handleFirmaUpload - Archivo recibido: " . json_encode($file));
        
        // Validar tipo de archivo
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($file['type'], $allowedTypes)) {
            error_log("handleFirmaUpload - Tipo de archivo no permitido: " . $file['type']);
            throw new Exception('Solo se permiten archivos JPG, PNG y GIF');
        }
        
        // Validar tamaño (2MB máximo)
        if ($file['size'] > 2 * 1024 * 1024) {
            error_log("handleFirmaUpload - Archivo demasiado grande: " . $file['size'] . " bytes");
            throw new Exception('El archivo es demasiado grande. Tamaño máximo: 2MB');
        }
        
        // Crear directorio si no existe
        $uploadDir = dirname(__DIR__, 2) . '/uploads/firmas/';
        error_log("handleFirmaUpload - Directorio de destino: " . $uploadDir);
        
        if (!is_dir($uploadDir)) {
            error_log("handleFirmaUpload - Creando directorio...");
            if (!mkdir($uploadDir, 0755, true)) {
                error_log("handleFirmaUpload - Error al crear directorio");
                throw new Exception('Error al crear directorio de destino');
            }
        }
        
        // Generar nombre único para el archivo
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $filename = uniqid() . '_' . time() . '.' . $extension;
        $filepath = $uploadDir . $filename;
        
        error_log("handleFirmaUpload - Archivo temporal: " . $file['tmp_name']);
        error_log("handleFirmaUpload - Archivo destino: " . $filepath);
        
        // Verificar permisos del directorio
        if (!is_writable($uploadDir)) {
            error_log("handleFirmaUpload - Directorio no tiene permisos de escritura: " . $uploadDir);
            throw new Exception('El directorio de destino no tiene permisos de escritura');
        }
        
        // Verificar que el archivo temporal existe
        if (!file_exists($file['tmp_name'])) {
            error_log("handleFirmaUpload - Archivo temporal no existe: " . $file['tmp_name']);
            throw new Exception('El archivo temporal no existe');
        }
        
        // Copiar archivo (ya que no es un upload normal de PHP)
        if (copy($file['tmp_name'], $filepath)) {
            // Eliminar archivo temporal
            unlink($file['tmp_name']);
            $relativePath = 'firmas/' . $filename;
            error_log("handleFirmaUpload - Archivo guardado exitosamente: " . $relativePath);
            return $relativePath; // Retornar ruta relativa
        } else {
            error_log("handleFirmaUpload - Error al copiar archivo de " . $file['tmp_name'] . " a " . $filepath);
            error_log("handleFirmaUpload - Error: " . error_get_last()['message']);
            throw new Exception('Error al subir el archivo');
        }
    }
}
?>



