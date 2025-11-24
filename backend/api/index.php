<?php
require_once 'config.php';

// Obtener la ruta de la petición
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Extraer solo la parte después de /api
if (strpos($path, '/api') !== false) {
    $parts = explode('/api', $path);
    $path = isset($parts[1]) ? $parts[1] : '';
} else {
    $path = '';
}
$path = trim($path, '/');

// Obtener el método HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Obtener el cuerpo de la petición
$input = json_decode(file_get_contents('php://input'), true);

// Log de depuración para todas las peticiones (excepto PDF)
if (strpos($path, '/pdf') === false) {
    // Debug logging removed for production
}

// Función para procesar multipart/form-data en peticiones PUT
function parseMultipartPutData() {
    $data = [];
    $files = [];
    
    // Leer el contenido raw
    $rawData = file_get_contents('php://input');
    
    if (empty($rawData)) {
        return ['data' => [], 'files' => []];
    }
    
    // Obtener el boundary del Content-Type
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (preg_match('/boundary=(.+)$/', $contentType, $matches)) {
        $boundary = $matches[1];
        
        // Dividir por el boundary
        $parts = explode('--' . $boundary, $rawData);
        
        foreach ($parts as $part) {
            if (empty($part) || $part === "\r\n" || $part === "--\r\n") {
                continue;
            }
            
            // Buscar el header y el contenido
            if (preg_match('/\r\n\r\n(.*)$/s', $part, $matches)) {
                $content = $matches[1];
                $header = substr($part, 0, strpos($part, "\r\n\r\n"));
                
                // Verificar si es un archivo - buscar filename en el header
                if (preg_match('/filename="([^"]+)"/', $header, $fileMatches)) {
                    // Buscar el nombre del campo
                    if (preg_match('/name="([^"]+)"/', $header, $nameMatches)) {
                        $fieldName = $nameMatches[1];
                        $fileName = $fileMatches[1];
                    
                        // Detectar tipo MIME basado en la extensión
                        $extension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
                        $mimeType = 'application/octet-stream';
                        switch ($extension) {
                            case 'jpg':
                            case 'jpeg':
                                $mimeType = 'image/jpeg';
                                break;
                            case 'png':
                                $mimeType = 'image/png';
                                break;
                            case 'gif':
                                $mimeType = 'image/gif';
                                break;
                        }
                        
                        // Crear archivo temporal
                        $tempFile = tempnam(sys_get_temp_dir(), 'upload_');
                        file_put_contents($tempFile, $content);
                        
                        $files[$fieldName] = [
                            'name' => $fileName,
                            'type' => $mimeType,
                            'tmp_name' => $tempFile,
                            'error' => UPLOAD_ERR_OK,
                            'size' => strlen($content)
                        ];
                    }
                } else if (preg_match('/name="([^"]+)"/', $header, $fieldMatches)) {
                    $fieldName = $fieldMatches[1];
                    $data[$fieldName] = trim($content);
                }
            }
        }
    }
    
    return ['data' => $data, 'files' => $files];
}

// Para rutas que manejan archivos, usar $_POST en lugar de $input
$data = $input;

// Si es PUT con multipart/form-data, procesar manualmente
if ($method === 'PUT' && strpos($_SERVER['CONTENT_TYPE'] ?? '', 'multipart/form-data') !== false) {
    $parsed = parseMultipartPutData();
    $data = $parsed['data'];
    $_FILES = array_merge($_FILES, $parsed['files']);
}

// Enrutamiento básico
try {
    switch ($path) {
        case 'auth/login':
            if ($method === 'POST') {
                require_once 'src/Controllers/AuthController.php';
                $controller = new AuthController();
                $controller->login($input);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'auth/change-password':
            if ($method === 'POST') {
                require_once 'src/Controllers/AuthController.php';
                $controller = new AuthController();
                $controller->changePassword($input);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'admin/opticas':
            if ($method === 'GET') {
                require_once 'src/Controllers/AdminController.php';
                $controller = new AdminController();
                $controller->getOpticas();
            } elseif ($method === 'POST') {
                require_once 'src/Controllers/AdminController.php';
                $controller = new AdminController();
                $controller->createOptica($data);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^admin\/opticas\/(\d+)$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'PUT') {
                require_once 'src/Controllers/AdminController.php';
                $controller = new AdminController();
                $controller->updateOptica($id, $data);
            } elseif ($method === 'DELETE') {
                require_once 'src/Controllers/AdminController.php';
                $controller = new AdminController();
                $controller->deleteOptica($id);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^admin\/opticas\/(\d+)\/reset-password$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'POST') {
                require_once 'src/Controllers/AdminController.php';
                $controller = new AdminController();
                $controller->resetPassword($id);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'optica/firma':
            if ($method === 'POST') {
                require_once 'src/Controllers/AdminController.php';
                $controller = new AdminController();
                $controller->uploadFirma($data);
            } elseif ($method === 'DELETE') {
                require_once 'src/Controllers/AdminController.php';
                $controller = new AdminController();
                $controller->deleteFirma($data);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'pacientes':
            if ($method === 'GET') {
                require_once 'src/Controllers/PacientesController.php';
                $controller = new PacientesController();
                $controller->getPacientes($_GET);
            } elseif ($method === 'POST') {
                require_once 'src/Controllers/PacientesController.php';
                $controller = new PacientesController();
                $controller->createPaciente($input);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'pacientes/search':
            if ($method === 'GET') {
                require_once 'src/Controllers/PacientesController.php';
                $controller = new PacientesController();
                $controller->searchPacientes($_GET);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^pacientes\/(\d+)$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'GET') {
                require_once 'src/Controllers/PacientesController.php';
                $controller = new PacientesController();
                $controller->getPaciente($id);
            } elseif ($method === 'PUT') {
                require_once 'src/Controllers/PacientesController.php';
                $controller = new PacientesController();
                $controller->updatePaciente($id, $input);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'historias-clinicas':
            if ($method === 'GET') {
                require_once 'src/Controllers/HistoriasClinicasController.php';
                $controller = new HistoriasClinicasController($pdo);
                $controller->getHistoriasClinicas($_GET);
            } elseif ($method === 'POST') {
                require_once 'src/Controllers/HistoriasClinicasController.php';
                $controller = new HistoriasClinicasController($pdo);
                $controller->createHistoriaClinica($input);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^historias-clinicas\/(\d+)$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'GET') {
                require_once 'src/Controllers/HistoriasClinicasController.php';
                $controller = new HistoriasClinicasController($pdo);
                $controller->getHistoriaClinica($id);
            } elseif ($method === 'PUT') {
                require_once 'src/Controllers/HistoriasClinicasController.php';
                $controller = new HistoriasClinicasController($pdo);
                $controller->updateHistoriaClinica($id, $input);
            } elseif ($method === 'DELETE') {
                require_once 'src/Controllers/HistoriasClinicasController.php';
                $controller = new HistoriasClinicasController($pdo);
                $controller->deleteHistoriaClinica($id);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
       case (preg_match('/^historias-clinicas\/(\d+)\/pdf$/', $path, $matches) ? true : false):
           $id = $matches[1];
           if ($method === 'GET') {
               require_once 'src/Controllers/PdfController.php';
               $controller = new PdfController();
               $controller->generateHistoriaClinicaPDF($id);
           } else {
               errorResponse('Método no permitido', 405);
           }
           break;
            
        case 'historias':
            if ($method === 'POST') {
                require_once 'src/Controllers/HistoriasController.php';
                $controller = new HistoriasController();
                $controller->createHistoria($input);
            } elseif ($method === 'GET') {
                require_once 'src/Controllers/HistoriasController.php';
                $controller = new HistoriasController();
                $controller->getHistorias($_GET);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^historias\/(\d+)$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'GET') {
                require_once 'src/Controllers/HistoriasController.php';
                $controller = new HistoriasController();
                $controller->getHistoria($id);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^historias\/(\d+)\/pdf$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'GET') {
                require_once 'src/Controllers/HistoriasController.php';
                $controller = new HistoriasController();
                $controller->generatePDF($id);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'firmas':
            if ($method === 'POST') {
                require_once 'src/Controllers/FirmasController.php';
                $controller = new FirmasController();
                $controller->uploadFirma($_FILES);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^firmas\/(\d+)$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'GET') {
                require_once 'src/Controllers/FirmasController.php';
                $controller = new FirmasController();
                $controller->getFirma($id);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'citas':
            if ($method === 'GET') {
                require_once 'src/Controllers/CitasController.php';
                $controller = new CitasController();
                $controller->getCitas($_GET);
            } elseif ($method === 'POST') {
                require_once 'src/Controllers/CitasController.php';
                $controller = new CitasController();
                $controller->createCita($input);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'citas/range':
            if ($method === 'GET') {
                require_once 'src/Controllers/CitasController.php';
                $controller = new CitasController();
                $controller->getCitasByDateRange($_GET);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case (preg_match('/^citas\/(\d+)$/', $path, $matches) ? true : false):
            $id = $matches[1];
            if ($method === 'PUT') {
                require_once 'src/Controllers/CitasController.php';
                $controller = new CitasController();
                $controller->updateCita($id, $input);
            } elseif ($method === 'DELETE') {
                require_once 'src/Controllers/CitasController.php';
                $controller = new CitasController();
                $controller->deleteCita($id);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
            
        case 'reportes/historias-clinicas/excel':
            if ($method === 'GET') {
                require_once 'src/Controllers/ReportesController.php';
                $controller = new ReportesController();
                $controller->generarReporteExcel($_GET);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        case 'reportes/historias-clinicas/estadisticas':
            if ($method === 'GET') {
                require_once 'src/Controllers/ReportesController.php';
                $controller = new ReportesController();
                $controller->obtenerEstadisticas($_GET);
            } else {
                errorResponse('Método no permitido', 405);
            }
            break;
            
        default:
            errorResponse('Ruta no encontrada', 404);
            break;
    }
} catch (Exception $e) {
    errorResponse('Error interno del servidor: ' . $e->getMessage(), 500);
}
?>

