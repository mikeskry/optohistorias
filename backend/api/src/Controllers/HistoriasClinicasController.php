<?php

require_once __DIR__ . '/../Services/HistoriasClinicasService.php';

class HistoriasClinicasController {
    private $historiasClinicasService;

    public function __construct($pdo) {
        $this->historiasClinicasService = new HistoriasClinicasService($pdo);
    }

    public function getHistoriasClinicas($params) {
        try {
            $user = getAuthenticatedUser();
            $pacienteId = $params['paciente_id'] ?? null;
            
            if (!$pacienteId) {
                errorResponse('ID de paciente requerido', 400);
                return;
            }
            
            $opticaId = $user['optica_id'];
            $historias = $this->historiasClinicasService->getHistoriasClinicas($pacienteId, $opticaId);
            successResponse($historias, 'Historias clínicas obtenidas exitosamente');
        } catch (Exception $e) {
            errorResponse('Error al obtener historias clínicas: ' . $e->getMessage(), 500);
        }
    }

    public function getHistoriaClinica($id) {
        try {
            $user = getAuthenticatedUser();
            $historia = $this->historiasClinicasService->getHistoriaClinica($id, $user['optica_id']);
            successResponse($historia, 'Historia clínica obtenida exitosamente');
        } catch (Exception $e) {
            errorResponse('Error al obtener historia clínica: ' . $e->getMessage(), 500);
        }
    }

    public function createHistoriaClinica($data) {
        try {
            $user = getAuthenticatedUser();
            
            // Agregar datos del usuario y óptica
            $data['usuario_id'] = $user['user_id'];
            $data['optica_id'] = $user['optica_id'];
            
            $historia = $this->historiasClinicasService->createHistoriaClinica($data);
            
            successResponse($historia, 'Historia clínica creada exitosamente');
        } catch (Exception $e) {
            errorResponse('Error al crear historia clínica: ' . $e->getMessage(), 500);
        }
    }

    public function updateHistoriaClinica($id, $data) {
        try {
            $user = getAuthenticatedUser();
            $data['optica_id'] = $user['optica_id'];
            $data['usuario_id'] = $user['user_id'] ?? $user['id'] ?? null;
            error_log("🟡 Controller::updateHistoriaClinica - ID: {$id}");
            error_log("🟡 Controller::updateHistoriaClinica - Payload: " . json_encode($data));
            
            $historia = $this->historiasClinicasService->updateHistoriaClinica($id, $data);
            error_log("🟢 Controller::updateHistoriaClinica - Actualización exitosa para ID {$id}");
            successResponse($historia, 'Historia clínica actualizada exitosamente');
        } catch (Exception $e) {
            error_log("🔴 Controller::updateHistoriaClinica - Error: " . $e->getMessage());
            error_log("🔴 Controller::updateHistoriaClinica - Trace: " . $e->getTraceAsString());
            errorResponse('Error al actualizar historia clínica: ' . $e->getMessage(), 500);
        }
    }

    public function deleteHistoriaClinica($id) {
        try {
            $user = getAuthenticatedUser();
            $result = $this->historiasClinicasService->deleteHistoriaClinica($id, $user['optica_id']);
            
            if ($result > 0) {
                successResponse(null, 'Historia clínica eliminada exitosamente');
            } else {
                errorResponse('Historia clínica no encontrada', 404);
            }
        } catch (Exception $e) {
            errorResponse('Error al eliminar historia clínica: ' . $e->getMessage(), 500);
        }
    }
}