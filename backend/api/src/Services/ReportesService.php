<?php

require_once __DIR__ . '/../Repositories/HistoriasClinicasRepository.php';
require_once __DIR__ . '/../Utils/ExcelGenerator.php';
require_once __DIR__ . '/../../config.php';

class ReportesService {
    private $historiasRepository;
    private $excelGenerator;
    private $pdo;

    public function __construct() {
        $this->historiasRepository = new HistoriasClinicasRepository();
        $this->excelGenerator = new ExcelGenerator();
        $this->pdo = getDBConnection();
    }

    public function obtenerDatosReporte($fechaInicial, $fechaFinal, $opticaId = null) {
        try {
            $whereOptica = "";
            if($opticaId>0){
                $whereOptica = " AND p.optica_id = $opticaId";
            }

            $sql = "
                SELECT 
                    p.nombre,
                    p.apellidos,
                    p.documento,
                    p.tipo_documento,
                    p.fecha_nacimiento,
                    TIMESTAMPDIFF(YEAR, p.fecha_nacimiento, CURDATE()) as edad,
                    p.eps,
                    p.tipo_afiliacion,
                    p.genero as sexo,
                    hc.motivo_consulta,
                    c.tipo_examen,
                    (SELECT codigo FROM historias_clinicas_diagnosticos WHERE historia_clinica_id = hc.id AND orden=1) as diagnostico_principal,
                    (SELECT codigo FROM historias_clinicas_diagnosticos WHERE historia_clinica_id = hc.id AND orden=2) as diagnostico_complementario_1,
                    (SELECT codigo FROM historias_clinicas_diagnosticos WHERE historia_clinica_id = hc.id AND orden=3) as diagnostico_complementario_2,
                    (SELECT codigo FROM historias_clinicas_diagnosticos WHERE historia_clinica_id = hc.id AND orden=4) as diagnostico_complementario_3
                FROM historias_clinicas hc
                INNER JOIN pacientes p ON hc.paciente_id = p.id
                INNER JOIN historias_clinicas_cuestionario c ON hc.id=c.historia_clinica_id
                WHERE DATE(hc.fecha_consulta) BETWEEN ? AND ? $whereOptica
            ";

            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$fechaInicial, $fechaFinal]);

            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        } catch (Exception $e) {throw new Exception("Error al obtener datos del reporte: " . $e->getMessage());
        }
    }

    public function obtenerEstadisticasReporte($fechaInicial, $fechaFinal, $opticaId = null) {
        try {
            $sql = "
                SELECT 
                    COUNT(*) as total_consultas,
                    COUNT(DISTINCT p.id) as total_pacientes,
                    COUNT(DISTINCT p.optica_id) as total_opticas,
                    MIN(hc.fecha_consulta) as primera_consulta,
                    MAX(hc.fecha_consulta) as ultima_consulta,
                    AVG(TIMESTAMPDIFF(YEAR, p.fecha_nacimiento, CURDATE())) as edad_promedio
                FROM historias_clinicas hc
                INNER JOIN pacientes p ON hc.paciente_id = p.id
                WHERE DATE(hc.fecha_consulta) BETWEEN ? AND ?
            ";

            $params = [$fechaInicial, $fechaFinal];

            if ($opticaId) {
                $sql .= " AND p.optica_id = ?";
                $params[] = $opticaId;
            }

            $resultado = $this->historiasRepository->ejecutarConsulta($sql, $params);
            
            return $resultado[0] ?? [];

        } catch (Exception $e) {
            throw new Exception("Error al obtener estadísticas: " . $e->getMessage());
        }
    }
}
?>
