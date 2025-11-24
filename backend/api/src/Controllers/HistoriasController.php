<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Services/HistoriasService.php';

class HistoriasController {
    private $historiasService;
    
    public function __construct() {
        $this->historiasService = new HistoriasService();
    }
    
    public function createHistoria($data) {
        try {
            $user = getAuthenticatedUser();
            
            if (!isset($data['paciente_id']) || !isset($data['fecha_consulta'])) {
                errorResponse('Paciente y fecha de consulta son requeridos');
                return;
            }
            
            $data['optica_id'] = $user['optica_id'];
            $result = $this->historiasService->createHistoria($data);
            
            if ($result['success']) {
                successResponse($result['data'], 'Historia clínica creada exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse('Error al crear historia clínica: ' . $e->getMessage(), 500);
        }
    }
    
    public function getHistorias($params) {
        try {
            $user = getAuthenticatedUser();
            $pacienteId = $params['pacienteId'] ?? null;
            $historias = $this->historiasService->getHistorias($user['optica_id'], $pacienteId);
            successResponse($historias, 'Historias obtenidas exitosamente');
        } catch (Exception $e) {
            errorResponse('Error al obtener historias: ' . $e->getMessage(), 500);
        }
    }
    
    public function getHistoria($id) {
        try {
            $user = getAuthenticatedUser();
            $historia = $this->historiasService->getHistoria($id, $user['optica_id']);
            
            if ($historia) {
                successResponse($historia, 'Historia clínica obtenida exitosamente');
            } else {
                errorResponse('Historia clínica no encontrada', 404);
            }
        } catch (Exception $e) {
            errorResponse('Error al obtener historia clínica: ' . $e->getMessage(), 500);
        }
    }
    
    public function generatePDF($id) {
        try {
            $user = getAuthenticatedUser();
            $historia = $this->historiasService->getHistoria($id, $user['optica_id']);
            
            if (!$historia) {
                errorResponse('Historia clínica no encontrada', 404);
                return;
            }
            
            $pdf = $this->historiasService->generatePDF($historia);
            
            // Enviar PDF como descarga
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="historia_clinica_' . $id . '.pdf"');
            header('Content-Length: ' . strlen($pdf));
            echo $pdf;
            exit();
            
        } catch (Exception $e) {
            errorResponse('Error al generar PDF: ' . $e->getMessage(), 500);
        }
    }
}
?>



