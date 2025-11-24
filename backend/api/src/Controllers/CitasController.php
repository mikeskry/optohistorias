<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Services/CitasService.php';

class CitasController {
    private $citasService;
    
    public function __construct() {
        $this->citasService = new CitasService();
    }
    
    public function getCitas($params) {
        try {
            $user = getAuthenticatedUser();
            $fecha = $params['fecha'] ?? date('Y-m-d');
            $citas = $this->citasService->getCitas($user['optica_id'], $fecha);
            successResponse($citas, 'Citas obtenidas exitosamente');
        } catch (Exception $e) {
            errorResponse('Error al obtener citas: ' . $e->getMessage(), 500);
        }
    }
    
    public function getCitasByDateRange($params) {
        try {
            $user = getAuthenticatedUser();
            $startDate = $params['start_date'] ?? date('Y-m-d');
            $endDate = $params['end_date'] ?? date('Y-m-d');
            $citas = $this->citasService->getCitasByDateRange($user['optica_id'], $startDate, $endDate);
            successResponse($citas, 'Citas obtenidas exitosamente');
        } catch (Exception $e) {
            errorResponse('Error al obtener citas: ' . $e->getMessage(), 500);
        }
    }
    
    public function createCita($data) {
        try {
            $user = getAuthenticatedUser();
            
            if (!isset($data['nombre_paciente']) || !isset($data['fecha']) || !isset($data['hora'])) {
                errorResponse('Nombre del paciente, fecha y hora son requeridos');
                return;
            }
            
            $data['optica_id'] = $user['optica_id'];
            $result = $this->citasService->createCita($data);
            
            if ($result['success']) {
                successResponse($result['data'], 'Cita creada exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse('Error al crear cita: ' . $e->getMessage(), 500);
        }
    }
    
    public function updateCita($id, $data) {
        try {
            $user = getAuthenticatedUser();
            $result = $this->citasService->updateCita($id, $data, $user['optica_id']);
            
            if ($result['success']) {
                successResponse($result['data'], 'Cita actualizada exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse('Error al actualizar cita: ' . $e->getMessage(), 500);
        }
    }
    
    public function deleteCita($id) {
        try {
            $user = getAuthenticatedUser();
            $result = $this->citasService->deleteCita($id, $user['optica_id']);
            
            if ($result['success']) {
                successResponse(null, 'Cita eliminada exitosamente');
            } else {
                errorResponse($result['message']);
            }
        } catch (Exception $e) {
            errorResponse('Error al eliminar cita: ' . $e->getMessage(), 500);
        }
    }
    
}
?>



