<?php

require_once __DIR__ . '/../Repositories/HistoriasClinicasRepository.php';

class HistoriasClinicasService {
    private $repository;

    public function __construct($pdo = null, $repository = null) {
        $this->repository = $repository ?? new HistoriasClinicasRepository($pdo);
    }

    public function getHistoriasClinicas($pacienteId, $opticaId) {
        try {
            $historias = $this->repository->getByPaciente($pacienteId, $opticaId);
            return $historias;
        } catch (Exception $e) {
            throw new Exception("Error al obtener historias clínicas: " . $e->getMessage());
        }
    }

    public function getHistoriaClinica($id, $opticaId) {
        try {
            $historia = $this->repository->findById($id, $opticaId);
            
            if (!$historia) {
                throw new Exception("Historia clínica no encontrada");
            }
            
            // Obtener todos los datos de las tablas relacionadas
            $datosCompletos = $this->repository->getHistoriaCompleta($id);
            
            // Combinar datos principales con datos de tablas relacionadas
            $historiaCompleta = array_merge($historia, $datosCompletos);
            
            return $historiaCompleta;
        } catch (Exception $e) {
            throw new Exception("Error al obtener historia clínica: " . $e->getMessage());
        }
    }

    public function createHistoriaClinica($data) {
        try {
            // Validar datos requeridos
            $this->validateHistoriaData($data);
            
            // Iniciar transacción
            $this->repository->beginTransaction();
            
            try {
                // 1. Crear historia clínica principal
                error_log('🔵 Service createHistoriaClinica - Organizando datos...');
                $historiaData = $this->organizeHistoriaData($data);
                error_log('🔵 Service createHistoriaClinica - Datos organizados: ' . json_encode($historiaData));
                
                error_log('🔵 Service createHistoriaClinica - Creando historia principal...');
                $historiaId = $this->repository->createHistoria($historiaData);
                error_log('🔵 Service createHistoriaClinica - Historia principal creada con ID: ' . $historiaId);
                
                // 2. Crear cuestionario
                if (isset($data['cuestionario'])) {
                    error_log('🔵 Service createHistoriaClinica - Creando cuestionario...');
                    $this->repository->createCuestionario($historiaId, $data['cuestionario']);
                    error_log('🔵 Service createHistoriaClinica - Cuestionario creado');
                }
                
                // 3. Crear lensometría
                if (isset($data['lensometria'])) {
                    error_log('🔵 Service createHistoriaClinica - Creando lensometría...');
                    $this->repository->createLensometria($historiaId, $data['lensometria']);
                    error_log('🔵 Service createHistoriaClinica - Lensometría creada');
                }
                
                // 4. Crear agudeza visual
                if (isset($data['agudeza_visual'])) {
                    error_log('🔵 Service createHistoriaClinica - Creando agudeza visual...');
                    $this->repository->createAgudezaVisual($historiaId, $data['agudeza_visual']);
                    error_log('🔵 Service createHistoriaClinica - Agudeza visual creada');
                }
                
                // 5. Crear examen motor
                if (isset($data['examen_motor'])) {
                    error_log('🔵 Service createHistoriaClinica - Creando examen motor...');
                    error_log('🔵 Service createHistoriaClinica - Datos examen motor: ' . json_encode($data['examen_motor']));
                    $this->repository->createExamenMotor($historiaId, $data['examen_motor']);
                    error_log('🔵 Service createHistoriaClinica - Examen motor creado');
                }
                
                // 6. Crear examen refractivo
                if (isset($data['examen_refractivo'])) {
                    $this->repository->createExamenRefractivo($historiaId, $data['examen_refractivo']);
                }
                
                // 7. Crear examen oftalmológico
                if (isset($data['examen_oftalmologico'])) {
                    $this->repository->createExamenOftalmologico($historiaId, $data['examen_oftalmologico']);
                }
                
                // 8. Crear oftalmoscopia
                if (isset($data['oftalmoscopia'])) {
                    $this->repository->createOftalmoscopia($historiaId, $data['oftalmoscopia']);
                }
                
                // 9. Crear fórmula final
                if (isset($data['formula_final'])) {
                    $this->repository->createFormulaFinal($historiaId, $data['formula_final']);
                }
                
                // 10. Crear observaciones
                if (isset($data['observaciones'])) {
                    $this->repository->createObservaciones($historiaId, $data['observaciones']);
                }
                
                // 11. Crear diagnósticos
                if (isset($data['diagnostico'])) {
                    $this->repository->createDiagnosticos($historiaId, $data['diagnostico']);
                }
                
                // Confirmar transacción
                error_log('🔵 Service createHistoriaClinica - Confirmando transacción...');
                $this->repository->commit();
                error_log('🔵 Service createHistoriaClinica - Transacción confirmada');
                
                error_log('🔵 Service createHistoriaClinica - Obteniendo historia completa...');
                $result = $this->getHistoriaClinica($historiaId, $historiaData['optica_id']);
                error_log('🔵 Service createHistoriaClinica - Historia completa obtenida');
                
                return $result;
                
            } catch (Exception $e) {
                error_log('🔵 Service createHistoriaClinica - ERROR en transacción: ' . $e->getMessage());
                error_log('🔵 Service createHistoriaClinica - Stack trace: ' . $e->getTraceAsString());
                // Revertir transacción en caso de error
                $this->repository->rollback();
                throw $e;
            }
            
        } catch (Exception $e) {
            error_log('🔵 Service createHistoriaClinica - ERROR GENERAL: ' . $e->getMessage());
            error_log('🔵 Service createHistoriaClinica - Stack trace: ' . $e->getTraceAsString());
            throw new Exception("Error al crear historia clínica: " . $e->getMessage());
        }
    }

    public function updateHistoriaClinica($id, $data) {
        try {
            $opticaId = $data['optica_id'] ?? null;

            if (!$opticaId) {
                throw new Exception("Optica no especificada para la actualización");
            }

            $historiaExistente = $this->repository->findById($id, $opticaId);

            if (!$historiaExistente) {
                throw new Exception("Historia clínica no encontrada");
            }

            if (!empty($historiaExistente['created_at'])) {
                $fechaCreacion = new DateTime($historiaExistente['created_at']);
                $ahora = new DateTime();

                if (($ahora->getTimestamp() - $fechaCreacion->getTimestamp()) > 86400) {
                    throw new Exception("La historia clínica solo puede editarse dentro de las primeras 24 horas desde su creación");
                }
            }

            $this->repository->beginTransaction();

            try {
                $organizedData = $this->organizeHistoriaData($data);

                if (empty($organizedData['usuario_id'])) {
                    $organizedData['usuario_id'] = $historiaExistente['usuario_id'] ?? null;
                }

                if (empty($organizedData['optica_id'])) {
                    $organizedData['optica_id'] = $historiaExistente['optica_id'] ?? null;
                }

                if (empty($organizedData['paciente_id'])) {
                    $organizedData['paciente_id'] = $historiaExistente['paciente_id'] ?? null;
                }

                $this->repository->update($id, $organizedData);

                if (array_key_exists('cuestionario', $data)) {
                    $this->repository->replaceCuestionario($id, $data['cuestionario']);
                }

                if (array_key_exists('lensometria', $data)) {
                    $this->repository->replaceLensometria($id, $data['lensometria']);
                }

                if (array_key_exists('agudeza_visual', $data)) {
                    $this->repository->replaceAgudezaVisual($id, $data['agudeza_visual']);
                }

                if (array_key_exists('examen_motor', $data)) {
                    $this->repository->replaceExamenMotor($id, $data['examen_motor']);
                }

                if (array_key_exists('examen_refractivo', $data)) {
                    $this->repository->replaceExamenRefractivo($id, $data['examen_refractivo']);
                }

                if (array_key_exists('examen_oftalmologico', $data)) {
                    $this->repository->replaceExamenOftalmologico($id, $data['examen_oftalmologico']);
                }

                if (array_key_exists('oftalmoscopia', $data)) {
                    $this->repository->replaceOftalmoscopia($id, $data['oftalmoscopia']);
                }

                if (array_key_exists('formula_final', $data)) {
                    $this->repository->replaceFormulaFinal($id, $data['formula_final']);
                }

                if (array_key_exists('observaciones', $data)) {
                    $this->repository->replaceObservaciones($id, $data['observaciones']);
                }

                if (array_key_exists('diagnostico', $data)) {
                    $this->repository->replaceDiagnosticos($id, $data['diagnostico']);
                }

                $this->repository->commit();
            } catch (Exception $innerException) {
                $this->repository->rollback();
                throw $innerException;
            }

            return $this->getHistoriaClinica($id, $opticaId);
        } catch (Exception $e) {
            throw new Exception("Error al actualizar historia clínica: " . $e->getMessage());
        }
    }

    public function deleteHistoriaClinica($id, $opticaId) {
        try {
            return $this->repository->delete($id, $opticaId);
        } catch (Exception $e) {
            throw new Exception("Error al eliminar historia clínica: " . $e->getMessage());
        }
    }

    private function validateHistoriaData($data) {
        $required = ['paciente_id', 'fecha_consulta', 'usuario_id', 'optica_id'];
        
        foreach ($required as $field) {
            if (!isset($data[$field]) || empty($data[$field])) {
                throw new Exception("El campo $field es requerido");
            }
        }
        
        // Validar que motivo_consulta esté presente pero puede estar vacío
        if (!isset($data['motivo_consulta'])) {
            throw new Exception("El campo motivo_consulta es requerido");
        }
    }

    private function calculateAge($birthDate) {
        $today = new DateTime();
        $birth = new DateTime($birthDate);
        $age = $today->diff($birth);
        return $age->y;
    }

    private function organizeHistoriaData($data) {
        // Crear la estructura base para la tabla principal
        $organized = [
            'optica_id' => $data['optica_id'] ?? null,
            'paciente_id' => $data['paciente_id'] ?? null,
            'usuario_id' => $data['usuario_id'] ?? null,
            'fecha_consulta' => $data['fecha_consulta'] ?? null,
            'motivo_consulta' => $data['motivo_consulta'] ?? null
        ];

        return $organized;
    }

    private function extractFieldsByPrefix($data, ...$prefixes) {
        $extracted = [];
        
        foreach ($data as $key => $value) {
            foreach ($prefixes as $prefix) {
                if (strpos($key, $prefix) === 0) {
                    $fieldName = substr($key, strlen($prefix));
                    $extracted[$fieldName] = $value;
                    break;
                }
            }
        }
        
        return $extracted;
    }
}
