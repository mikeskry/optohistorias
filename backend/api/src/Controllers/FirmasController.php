<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Services/FirmasService.php';

class FirmasController {
    private $firmasService;
    
    public function __construct() {
        $this->firmasService = new FirmasService();
    }
    
    public function uploadFirma($files) {
        try {
            $user = getAuthenticatedUser();
            
            if (!isset($files['firma']) || $files['firma']['error'] !== UPLOAD_ERR_OK) {
                errorResponse('Error al subir el archivo');
                return;
            }
            
            $result = $this->firmasService->uploadFirma($files['firma'], $user['optica_id']);
            
            if ($result['success']) {
                successResponse($result['data'], 'Firma subida exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse('Error al subir firma: ' . $e->getMessage(), 500);
        }
    }
    
    public function getFirma($id) {
        try {
            $firma = $this->firmasService->getFirma($id);
            
            if ($firma) {
                // Enviar imagen
                $filePath = FIRMAS_PATH . $firma['ruta_archivo'];
                if (file_exists($filePath)) {
                    $mimeType = mime_content_type($filePath);
                    header('Content-Type: ' . $mimeType);
                    header('Content-Length: ' . filesize($filePath));
                    readfile($filePath);
                    exit();
                } else {
                    errorResponse('Archivo de firma no encontrado', 404);
                }
            } else {
                errorResponse('Firma no encontrada', 404);
            }
        } catch (Exception $e) {
            errorResponse('Error al obtener firma: ' . $e->getMessage(), 500);
        }
    }
}
?>



