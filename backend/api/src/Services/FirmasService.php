<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Repositories/FirmasRepository.php';

class FirmasService {
    private $firmasRepository;
    
    public function __construct() {
        $this->firmasRepository = new FirmasRepository();
    }
    
    public function uploadFirma($file, $opticaId) {
        try {
            // Validar tipo de archivo
            $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!in_array($file['type'], $allowedTypes)) {
                return ['success' => false, 'message' => 'Solo se permiten archivos JPG y PNG'];
            }
            
            // Validar tamaño (máximo 5MB)
            if ($file['size'] > 5 * 1024 * 1024) {
                return ['success' => false, 'message' => 'El archivo es demasiado grande (máximo 5MB)'];
            }
            
            // Generar nombre único
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
            $fileName = 'firma_' . $opticaId . '_' . time() . '.' . $extension;
            $filePath = FIRMAS_PATH . $fileName;
            
            // Crear directorio si no existe
            if (!is_dir(FIRMAS_PATH)) {
                mkdir(FIRMAS_PATH, 0755, true);
            }
            
            // Mover archivo
            if (!move_uploaded_file($file['tmp_name'], $filePath)) {
                return ['success' => false, 'message' => 'Error al guardar el archivo'];
            }
            
            // Guardar en base de datos
            $firmaData = [
                'optica_id' => $opticaId,
                'ruta_archivo' => $fileName,
                'nombre_archivo' => $file['name']
            ];
            
            $this->firmasRepository->saveFirma($firmaData);
            
            return [
                'success' => true,
                'data' => [
                    'ruta_archivo' => $fileName,
                    'nombre_archivo' => $file['name']
                ]
            ];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al subir firma: ' . $e->getMessage()];
        }
    }
    
    public function getFirma($opticaId) {
        return $this->firmasRepository->findByOptica($opticaId);
    }
}
?>
