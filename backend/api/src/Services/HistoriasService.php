<?php
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../Repositories/HistoriasRepository.php';
require_once __DIR__ . '/../Repositories/PacientesRepository.php';
require_once __DIR__ . '/../Utils/PDFGenerator.php';

class HistoriasService {
    private $historiasRepository;
    private $pacientesRepository;
    private $pdfGenerator;
    
    public function __construct() {
        $this->historiasRepository = new HistoriasRepository();
        $this->pacientesRepository = new PacientesRepository();
        $this->pdfGenerator = new PDFGenerator();
    }
    
    public function createHistoria($data) {
        try {
            // Validar que el paciente existe y pertenece a la óptica
            $paciente = $this->pacientesRepository->findByIdAndOptica($data['paciente_id'], $data['optica_id']);
            if (!$paciente) {
                return ['success' => false, 'message' => 'Paciente no encontrado'];
            }
            
            // Validar fecha de consulta
            if (strtotime($data['fecha_consulta']) > time()) {
                return ['success' => false, 'message' => 'La fecha de consulta no puede ser futura'];
            }
            
            $historiaId = $this->historiasRepository->create($data);
            
            if ($historiaId) {
                $historia = $this->historiasRepository->findById($historiaId);
                return ['success' => true, 'data' => $historia];
            } else {
                return ['success' => false, 'message' => 'Error al crear la historia clínica'];
            }
            
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'Error al crear historia clínica: ' . $e->getMessage()];
        }
    }
    
    public function getHistorias($opticaId, $pacienteId = null) {
        return $this->historiasRepository->getByOptica($opticaId, $pacienteId);
    }
    
    public function getHistoria($id, $opticaId) {
        return $this->historiasRepository->findByIdAndOptica($id, $opticaId);
    }
    
    public function generatePDF($historia) {
        try {
            // Obtener datos del paciente
            $paciente = $this->pacientesRepository->findById($historia['paciente_id']);
            
            // Generar PDF
            return $this->pdfGenerator->generateHistoriaPDF($historia, $paciente);
            
        } catch (Exception $e) {
            throw new Exception('Error al generar PDF: ' . $e->getMessage());
        }
    }
}
?>



