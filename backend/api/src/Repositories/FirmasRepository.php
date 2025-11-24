<?php
require_once __DIR__ . '/../../config.php';

class FirmasRepository {
    private $pdo;
    
    public function __construct() {
        $this->pdo = getDBConnection();
    }
    
    public function findByOptica($opticaId) {
        $stmt = $this->pdo->prepare("SELECT * FROM firmas_optica WHERE optica_id = ?");
        $stmt->execute([$opticaId]);
        return $stmt->fetch();
    }
    
    public function saveFirma($data) {
        // Verificar si ya existe una firma para esta óptica
        $existing = $this->findByOptica($data['optica_id']);
        
        if ($existing) {
            // Actualizar firma existente
            $stmt = $this->pdo->prepare("
                UPDATE firmas_optica 
                SET ruta_archivo = ?, nombre_archivo = ?, updated_at = CURRENT_TIMESTAMP 
                WHERE optica_id = ?
            ");
            return $stmt->execute([
                $data['ruta_archivo'],
                $data['nombre_archivo'],
                $data['optica_id']
            ]);
        } else {
            // Crear nueva firma
            $stmt = $this->pdo->prepare("
                INSERT INTO firmas_optica (optica_id, ruta_archivo, nombre_archivo) 
                VALUES (?, ?, ?)
            ");
            return $stmt->execute([
                $data['optica_id'],
                $data['ruta_archivo'],
                $data['nombre_archivo']
            ]);
        }
    }
    
    public function deleteFirma($opticaId) {
        $stmt = $this->pdo->prepare("DELETE FROM firmas_optica WHERE optica_id = ?");
        return $stmt->execute([$opticaId]);
    }
}
?>



