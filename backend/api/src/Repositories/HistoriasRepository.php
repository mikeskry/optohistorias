<?php
require_once __DIR__ . '/../../config.php';

class HistoriasRepository {
    private $pdo;
    
    public function __construct() {
        $this->pdo = getDBConnection();
    }
    
    public function getByOptica($opticaId, $pacienteId = null) {
        $sql = "
            SELECT h.*, p.nombre as paciente_nombre, p.apellidos as paciente_apellidos, p.documento as paciente_documento
            FROM historias h
            JOIN pacientes p ON h.paciente_id = p.id
            WHERE h.optica_id = ?
        ";
        
        $params = [$opticaId];
        
        if ($pacienteId) {
            $sql .= " AND h.paciente_id = ?";
            $params[] = $pacienteId;
        }
        
        $sql .= " ORDER BY h.fecha_consulta DESC";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }
    
    public function findById($id) {
        $stmt = $this->pdo->prepare("
            SELECT h.*, p.nombre as paciente_nombre, p.apellidos as paciente_apellidos, p.documento as paciente_documento
            FROM historias h
            JOIN pacientes p ON h.paciente_id = p.id
            WHERE h.id = ?
        ");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
    
    public function findByIdAndOptica($id, $opticaId) {
        $stmt = $this->pdo->prepare("
            SELECT h.*, p.nombre as paciente_nombre, p.apellidos as paciente_apellidos, p.documento as paciente_documento
            FROM historias h
            JOIN pacientes p ON h.paciente_id = p.id
            WHERE h.id = ? AND h.optica_id = ?
        ");
        $stmt->execute([$id, $opticaId]);
        return $stmt->fetch();
    }
    
    public function create($data) {
        $stmt = $this->pdo->prepare("
            INSERT INTO historias (
                paciente_id, optica_id, fecha_consulta, motivo_consulta, sintomas, antecedentes, 
                medicamentos, alergias, av_od_lejos, av_od_cerca, av_oi_lejos, av_oi_cerca,
                esfera_od, cilindro_od, eje_od, esfera_oi, cilindro_oi, eje_oi, adicion,
                observaciones, diagnostico, tratamiento, proxima_cita
            ) VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
            )
        ");
        
        if ($stmt->execute([
            $data['paciente_id'],
            $data['optica_id'],
            $data['fecha_consulta'],
            $data['motivo_consulta'] ?? null,
            $data['sintomas'] ?? null,
            $data['antecedentes'] ?? null,
            $data['medicamentos'] ?? null,
            $data['alergias'] ?? null,
            $data['av_od_lejos'] ?? null,
            $data['av_od_cerca'] ?? null,
            $data['av_oi_lejos'] ?? null,
            $data['av_oi_cerca'] ?? null,
            $data['esfera_od'] ?? null,
            $data['cilindro_od'] ?? null,
            $data['eje_od'] ?? null,
            $data['esfera_oi'] ?? null,
            $data['cilindro_oi'] ?? null,
            $data['eje_oi'] ?? null,
            $data['adicion'] ?? null,
            $data['observaciones'] ?? null,
            $data['diagnostico'] ?? null,
            $data['tratamiento'] ?? null,
            $data['proxima_cita'] ?? null
        ])) {
            return $this->pdo->lastInsertId();
        }
        
        return false;
    }
}
?>



