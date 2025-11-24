<?php
require_once __DIR__ . '/../../config.php';

class CitasRepository {
    private $pdo;
    
    public function __construct() {
        $this->pdo = getDBConnection();
    }
    
    public function getByOpticaAndFecha($opticaId, $fecha) {
        $stmt = $this->pdo->prepare("
            SELECT c.*
            FROM citas c
            WHERE c.optica_id = ? AND c.fecha = ?
            ORDER BY c.hora
        ");
        $stmt->execute([$opticaId, $fecha]);
        return $stmt->fetchAll();
    }
    
    public function getByOpticaAndDateRange($opticaId, $startDate, $endDate) {
        $stmt = $this->pdo->prepare("
            SELECT c.*
            FROM citas c
            WHERE c.optica_id = ? AND c.fecha BETWEEN ? AND ?
            ORDER BY c.fecha, c.hora
        ");
        $stmt->execute([$opticaId, $startDate, $endDate]);
        return $stmt->fetchAll();
    }
    
    public function findById($id) {
        $stmt = $this->pdo->prepare("
            SELECT c.*
            FROM citas c
            WHERE c.id = ?
        ");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
    
    public function findByIdAndOptica($id, $opticaId) {
        $stmt = $this->pdo->prepare("
            SELECT c.*
            FROM citas c
            WHERE c.id = ? AND c.optica_id = ?
        ");
        $stmt->execute([$id, $opticaId]);
        return $stmt->fetch();
    }
    
    public function create($data) {
        $stmt = $this->pdo->prepare("
            INSERT INTO citas (nombre_paciente, optica_id, fecha, hora, duracion, motivo, estado) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ");
        
        if ($stmt->execute([
            $data['nombre_paciente'],
            $data['optica_id'],
            $data['fecha'],
            $data['hora'],
            $data['duracion'] ?? 30,
            $data['motivo'] ?? null,
            $data['estado'] ?? 'programada'
        ])) {
            return $this->pdo->lastInsertId();
        }
        
        return false;
    }
    
    public function update($id, $data) {
        $sql = "UPDATE citas SET ";
        $params = [];
        $updates = [];
        
        if (isset($data['nombre_paciente'])) {
            $updates[] = "nombre_paciente = ?";
            $params[] = $data['nombre_paciente'];
        }
        if (isset($data['fecha'])) {
            $updates[] = "fecha = ?";
            $params[] = $data['fecha'];
        }
        if (isset($data['hora'])) {
            $updates[] = "hora = ?";
            $params[] = $data['hora'];
        }
        if (isset($data['duracion'])) {
            $updates[] = "duracion = ?";
            $params[] = $data['duracion'];
        }
        if (isset($data['motivo'])) {
            $updates[] = "motivo = ?";
            $params[] = $data['motivo'];
        }
        if (isset($data['estado'])) {
            $updates[] = "estado = ?";
            $params[] = $data['estado'];
        }
        
        if (empty($updates)) {
            return false;
        }
        
        $sql .= implode(', ', $updates);
        $sql .= ", updated_at = CURRENT_TIMESTAMP WHERE id = ?";
        $params[] = $id;
        
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($params);
    }
    
    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM citas WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>



