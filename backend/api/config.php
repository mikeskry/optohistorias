<?php
// Configuración de la base de datos
//variables de entorno de producción
/*
define('DB_HOST', 'localhost');
define('DB_NAME', 'u700974918_opticast');
define('DB_USER', 'u700974918_root');
define('DB_PASS', 'Opto123*');
define('DB_CHARSET', 'utf8mb4');
*/

//variables de entorno de desarrollo

define('DB_HOST', 'localhost');
define('DB_NAME', 'opticast');
define('DB_USER', 'root');
define('DB_PASS', '80901964');
define('DB_CHARSET', 'utf8mb4');

// Zona horaria por defecto del sistema
date_default_timezone_set('America/Bogota');


// Configuración del sistema
define('JWT_SECRET', 'opticast_secret_key_2024');
define('JWT_EXPIRY', 86400); // 24 horas
define('UPLOAD_PATH', __DIR__ . '/uploads/');
define('FIRMAS_PATH', UPLOAD_PATH . 'firmas/');


// Configuración CORS
if (php_sapi_name() !== 'cli') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Max-Age: 86400'); // 24 horas

    // Manejar preflight OPTIONS request
    if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // Solo establecer Content-Type para peticiones que no sean OPTIONS
    if (!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'OPTIONS') {
        header('Content-Type: application/json; charset=utf-8');
    }
}

// Conexión a la base de datos
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $pdo = new PDO($dsn, DB_USER, DB_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Error de conexión a la base de datos']);
        exit();
    }
}

// Función para validar JWT
function validateJWT($token) {
    try {
        
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return false;
        }
        
        $payload = json_decode(base64_decode($parts[1]), true);
        
        if (!$payload) {
            return false;
        }
        
        if ($payload['exp'] < time()) {
            return false;
        }
        
        return $payload;
    } catch (Exception $e) {
        return false;
    }
}

// Función para generar JWT
function generateJWT($payload) {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload['iat'] = time();
    $payload['exp'] = time() + JWT_EXPIRY;
    
    $base64Header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64Payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($payload)));
    
    $signature = hash_hmac('sha256', $base64Header . "." . $base64Payload, JWT_SECRET, true);
    $base64Signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    
    return $base64Header . "." . $base64Payload . "." . $base64Signature;
}

// Función para obtener usuario autenticado
function getAuthenticatedUser() {
    $headers = getallheaders();
    
    $token = null;
    
    if (isset($headers['Authorization'])) {
        $token = str_replace('Bearer ', '', $headers['Authorization']);
    }
    
    if (!$token) {
        errorResponse('Token no proporcionado', 401);
        exit();
    }
    
    $payload = validateJWT($token);
    if (!$payload) {
        errorResponse('Token inválido', 401);
        exit();
    }
    
    // Si el usuario es de una óptica (no admin), verificar que la óptica esté activa
    if (isset($payload['optica_id']) && $payload['rol'] !== 'admin') {
        $pdo = getDBConnection();
        $stmt = $pdo->prepare("SELECT activo FROM opticas WHERE id = ?");
        $stmt->execute([$payload['optica_id']]);
        $optica = $stmt->fetch();
        
        if (!$optica || $optica['activo'] != 1) {
            errorResponse('Su cuenta ha sido deshabilitada. Por favor, contacte al administrador.', 403);
            exit();
        }
    }
    
    return $payload;
}

// Función para respuesta exitosa
function successResponse($data, $message = 'Operación exitosa', $isSuccess = true) {
    $response = [
        'success' => $isSuccess,
        'message' => $message,
        'data' => $data
    ];
    
    echo json_encode($response);
}

// Función para respuesta de error
function errorResponse($message, $code = 400) {
    http_response_code($code);
    echo json_encode([
        'success' => false,
        'message' => $message
    ]);
}
?>

