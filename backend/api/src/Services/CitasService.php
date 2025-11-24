<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Repositories/CitasRepository.php';
require_once __DIR__ . '/../Repositories/PacientesRepository.php';

class CitasService {
    private $citasRepository;
    private $pacientesRepository;
    
    public function __construct() {
        $this->citasRepository = new CitasRepository();
        $this->pacientesRepository = new PacientesRepository();
    }
    
    public function getCitas($opticaId, $fecha) {
        return $this->citasRepository->getByOpticaAndFecha($opticaId, $fecha);
    }
    
    public function getCitasByDateRange($opticaId, $startDate, $endDate) {
        return $this->citasRepository->getByOpticaAndDateRange($opticaId, $startDate, $endDate);
    }
    
    public function createCita($data) {
        try {
            // Validar campos requeridos
            if (empty($data['nombre_paciente'])) {
                return ['success' => false, 'message' => 'Nombre del paciente es requerido'];
            }
            
            // Validar fecha y hora
            $fechaHora = $data['fecha'] . ' ' . $data['hora'];
            if (strtotime($fechaHora) < time()) {
                return ['success' => false, 'message' => 'No se pueden crear citas en el pasado'];
            }
            
            // Validar solapamiento - bloquear tramos de 30 minutos completos
            if ($this->hasOverlap($data['optica_id'], $data['fecha'], $data['hora'])) {
                return ['success' => false, 'message' => 'Existe un conflicto de horario - este tramo de 30 minutos ya está ocupado'];
            }
            
            $citaId = $this->citasRepository->create($data);
            
            if ($citaId) {
                $cita = $this->citasRepository->findById($citaId);
                return ['success' => true, 'data' => $cita];
            } else {
                return ['success' => false, 'message' => 'Error al crear la cita'];
            }
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al crear cita: ' . $e->getMessage()];
        }
    }
    
    public function updateCita($id, $data, $opticaId) {
        try {
            // Verificar que la cita existe y pertenece a la óptica
            $cita = $this->citasRepository->findByIdAndOptica($id, $opticaId);
            if (!$cita) {
                return ['success' => false, 'message' => 'Cita no encontrada'];
            }
            
            // Validar solapamiento si se cambia fecha/hora
            if (isset($data['fecha']) || isset($data['hora'])) {
                $fecha = $data['fecha'] ?? $cita['fecha'];
                $hora = $data['hora'] ?? $cita['hora'];
                
                if ($this->hasOverlap($opticaId, $fecha, $hora, $id)) {
                    return ['success' => false, 'message' => 'Existe un conflicto de horario - este tramo de 30 minutos ya está ocupado'];
                }
            }
            
            $this->citasRepository->update($id, $data);
            $cita = $this->citasRepository->findById($id);
            
            return ['success' => true, 'data' => $cita];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al actualizar cita: ' . $e->getMessage()];
        }
    }
    
    public function deleteCita($id, $opticaId) {
        try {
            // Verificar que la cita existe y pertenece a la óptica
            $cita = $this->citasRepository->findByIdAndOptica($id, $opticaId);
            if (!$cita) {
                return ['success' => false, 'message' => 'Cita no encontrada'];
            }
            
            $this->citasRepository->delete($id);
            return ['success' => true, 'message' => 'Cita eliminada exitosamente'];
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al eliminar cita: ' . $e->getMessage()];
        }
    }
    
    private function hasOverlap($opticaId, $fecha, $hora, $excludeId = null) {
        // Todas las citas tienen duración fija de 30 minutos
        $duracion = 30;
        $startTime = strtotime($fecha . ' ' . $hora);
        $endTime = $startTime + ($duracion * 60);
        
        $existingCitas = $this->citasRepository->getByOpticaAndFecha($opticaId, $fecha);
        
        foreach ($existingCitas as $cita) {
            if ($excludeId && $cita['id'] == $excludeId) {
                continue;
            }
            
            $citaStart = strtotime($fecha . ' ' . $cita['hora']);
            $citaEnd = $citaStart + ($duracion * 60);
            
            // Verificar si hay solapamiento en el tramo de 30 minutos
            if (($startTime < $citaEnd) && ($endTime > $citaStart)) {
                return true;
            }
        }
        
        return false;
    }
}
?>



