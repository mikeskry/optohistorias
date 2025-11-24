<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Services/PacientesService.php';

class PacientesController {
    private $pacientesService;
    
    public function __construct() {
        $this->pacientesService = new PacientesService();
    }
    
    public function getPacientes($params) {
        try {
            $user = getAuthenticatedUser();
            $query = $params['query'] ?? '';
            $pacientes = $this->pacientesService->getPacientes($user['optica_id'], $query);
            successResponse($pacientes, 'Pacientes obtenidos exitosamente');
        } catch (Exception $e) {
            errorResponse('Error al obtener pacientes: ' . $e->getMessage(), 500);
        }
    }

    public function searchPacientes($params) {
        try {
            
            $user = getAuthenticatedUser();
            
            // Usar el parámetro 'query' como búsqueda general, o combinar todos los parámetros
            $query = $params['query'] ?? '';
            
            // Si no hay 'query' pero hay otros parámetros, combinarlos
            if (empty($query)) {
                $searchTerms = [];
                if (!empty($params['documento'])) $searchTerms[] = $params['documento'];
                if (!empty($params['nombre'])) $searchTerms[] = $params['nombre'];
                if (!empty($params['apellidos'])) $searchTerms[] = $params['apellidos'];
                if (!empty($params['telefono'])) $searchTerms[] = $params['telefono'];
                $query = implode(' ', $searchTerms);
            }
            
            $limit = isset($params['limit']) ? (int)$params['limit'] : 200;
            
            // Validar límite máximo
            $limit = max(1, min($limit, 200));
            
            $pacientes = $this->pacientesService->searchPacientes($user['optica_id'], $query, $limit);
            successResponse($pacientes, 'Búsqueda de pacientes completada');
        } catch (Exception $e) {
            errorResponse('Error en la búsqueda de pacientes: ' . $e->getMessage(), 500);
        }
    }
    
    public function getPaciente($id) {
        try {
            $user = getAuthenticatedUser();
            $paciente = $this->pacientesService->getPaciente($id, $user['optica_id']);
            
            if ($paciente) {
                successResponse($paciente, 'Paciente obtenido exitosamente');
            } else {
                errorResponse('Paciente no encontrado', 404);
            }
        } catch (Exception $e) {
            errorResponse('Error al obtener paciente: ' . $e->getMessage(), 500);
        }
    }
    
    public function createPaciente($data) {
        try {
            $user = getAuthenticatedUser();
            
            if (!isset($data['nombre']) || !isset($data['apellidos']) || !isset($data['documento'])) {
                errorResponse('Nombre, apellidos y documento son requeridos');
                return;
            }
            
            $data['optica_id'] = $user['optica_id'];
            $result = $this->pacientesService->createPaciente($data);
            
            if ($result['success']) {
                successResponse($result['data'], 'Paciente creado exitosamente');
            } else {
                // Para errores de validación (documento duplicado, email duplicado), devolver status 200 con error
                successResponse(null, $result['message'], false);
            }
        } catch (Exception $e) {
            errorResponse('Error al crear paciente: ' . $e->getMessage(), 500);
        }
    }
    
    public function updatePaciente($id, $data) {
        try {
            $user = getAuthenticatedUser();
            
            if (!isset($data['nombre']) || !isset($data['apellidos']) || !isset($data['documento'])) {
                errorResponse('Nombre, apellidos y documento son requeridos');
                return;
            }
            
            $result = $this->pacientesService->updatePaciente($id, $data, $user['optica_id']);
            
            if ($result['success']) {
                successResponse($result['data'], 'Paciente actualizado exitosamente');
            } else {
                // Para errores de validación (documento duplicado, email duplicado), devolver status 200 con error
                successResponse(null, $result['message'], false);
            }
        } catch (Exception $e) {
            errorResponse('Error al actualizar paciente: ' . $e->getMessage(), 500);
        }
    }
}
?>




