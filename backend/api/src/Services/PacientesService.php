<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Repositories/PacientesRepository.php';

class PacientesService {
    private $pacientesRepository;
    
    public function __construct() {
        $this->pacientesRepository = new PacientesRepository();
    }
    
    public function getPacientes($opticaId, $query = '') {
        return $this->pacientesRepository->getByOptica($opticaId, $query);
    }

    public function searchPacientes($opticaId, $query = '', $limit = 200) {
        return $this->pacientesRepository->searchByOptica($opticaId, $query, $limit);
    }
    
    public function getPaciente($id, $opticaId) {
        return $this->pacientesRepository->findByIdAndOptica($id, $opticaId);
    }
    
    public function createPaciente($data) {
        try {
            // Validaciones básicas
            if (empty($data['nombre']) || empty($data['apellidos']) || empty($data['documento'])) {
                return ['success' => false, 'message' => 'Nombre, apellidos y documento son requeridos'];
            }
            
            // Validar documento único
            if ($this->pacientesRepository->findByDocumento($data['documento'])) {
                return ['success' => false, 'message' => 'El número de documento ya existe'];
            }
            
            // Quitada validación de email único - permitir emails duplicados
            
            $pacienteId = $this->pacientesRepository->create($data);
            
            if ($pacienteId) {
                $paciente = $this->pacientesRepository->findById($pacienteId);
                return ['success' => true, 'data' => $paciente];
            } else {
                return ['success' => false, 'message' => 'Error al crear el paciente'];
            }
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al crear paciente: ' . $e->getMessage()];
        }
    }
    
    public function updatePaciente($id, $data, $opticaId) {
        try {
            // Verificar que el paciente pertenece a la óptica
            $paciente = $this->pacientesRepository->findByIdAndOptica($id, $opticaId);
            if (!$paciente) {
                return ['success' => false, 'message' => 'Paciente no encontrado'];
            }
            
            // Validar documento único (excluyendo el paciente actual)
            if (isset($data['documento']) && $data['documento'] !== $paciente['documento']) {
                if ($this->pacientesRepository->findByDocumento($data['documento'])) {
                    return ['success' => false, 'message' => 'El número de documento ya existe'];
                }
            }
            
            // Quitada validación de email único - permitir emails duplicados
            
            $this->pacientesRepository->update($id, $data);
            $paciente = $this->pacientesRepository->findById($id);
            
            return ['success' => true, 'data' => $paciente];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al actualizar paciente: ' . $e->getMessage()];
        }
    }
}
?>



