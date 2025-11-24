<?php
require_once __DIR__ . '/../../config.php';

class PacientesRepository {
    private $pdo;
    
    public function __construct() {
        $this->pdo = getDBConnection();
    }
    
    public function getByOptica($opticaId, $query = '') {
        $sql = "
            SELECT * FROM pacientes 
            WHERE optica_id = ? 
            AND (nombre LIKE ? OR apellidos LIKE ? OR documento LIKE ? OR email LIKE ? OR telefono LIKE ?)
            ORDER BY id DESC
            LIMIT 100
        ";
        
        $searchTerm = '%' . $query . '%';
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$opticaId, $searchTerm, $searchTerm, $searchTerm, $searchTerm, $searchTerm]);
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function searchByOptica($opticaId, $query = '', $limit = 200) {
        $limit = (int)$limit;
        $limit = max(1, min($limit, 200)); // Limitar entre 1 y 200
        
        
        // Dividir la consulta en palabras individuales
        $words = array_filter(explode(' ', trim($query)));
        
        if (empty($words)) {
            return [];
        }
        
        // Construir la consulta SQL dinámicamente para cada palabra
        $conditions = [];
        $params = [$opticaId];
        
        foreach ($words as $word) {
            $searchTerm = '%' . $word . '%';
            $conditions[] = "(nombre LIKE ? OR apellidos LIKE ? OR documento LIKE ? OR email LIKE ? OR telefono LIKE ?)";
            $params[] = $searchTerm; // nombre
            $params[] = $searchTerm; // apellidos
            $params[] = $searchTerm; // documento
            $params[] = $searchTerm; // email
            $params[] = $searchTerm; // telefono
        }
        
        $sql = "SELECT * FROM pacientes WHERE optica_id = ? AND " . implode(' AND ', $conditions) . " ORDER BY nombre, apellidos LIMIT ?";
        
        $stmt = $this->pdo->prepare($sql);
        
        // Bind optica_id
        $stmt->bindParam(1, $opticaId, PDO::PARAM_INT);
        
        // Bind parámetros de búsqueda
        $paramIndex = 2;
        foreach ($words as $word) {
            $searchTerm = '%' . $word . '%';
            $stmt->bindParam($paramIndex++, $searchTerm, PDO::PARAM_STR); // nombre
            $stmt->bindParam($paramIndex++, $searchTerm, PDO::PARAM_STR); // apellidos
            $stmt->bindParam($paramIndex++, $searchTerm, PDO::PARAM_STR); // documento
            $stmt->bindParam($paramIndex++, $searchTerm, PDO::PARAM_STR); // email
            $stmt->bindParam($paramIndex++, $searchTerm, PDO::PARAM_STR); // telefono
        }
        
        // Bind limit como entero
        $stmt->bindParam($paramIndex, $limit, PDO::PARAM_INT);
        
        $stmt->execute();
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function findById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM pacientes WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
    
    public function findByIdAndOptica($id, $opticaId) {
        $stmt = $this->pdo->prepare("SELECT * FROM pacientes WHERE id = ? AND optica_id = ?");
        $stmt->execute([$id, $opticaId]);
        return $stmt->fetch();
    }
    
    public function findByDocumento($documento) {
        $stmt = $this->pdo->prepare("SELECT * FROM pacientes WHERE documento = ?");
        $stmt->execute([$documento]);
        return $stmt->fetch();
    }
    
    public function findByEmail($email) {
        $stmt = $this->pdo->prepare("SELECT * FROM pacientes WHERE email = ?");
        $stmt->execute([$email]);
        return $stmt->fetch();
    }
    
    public function create($data) {

        try {
            $sql = "INSERT INTO pacientes 
                    (
                        optica_id, 
                        documento, 
                        tipo_documento, 
                        nombre, 
                        apellidos, 
                        email, 
                        telefono, 
                        fecha_nacimiento, 
                        genero, 
                        rh, 
                        nombre_acudiente, 
                        telefono_acudiente, 
                        direccion, 
                        eps, 
                        tipo_afiliacion
                    ) 
                VALUES 
                    (
                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                    )";        

        $stmt = $this->pdo->prepare($sql);

        $stmt->execute([
            $data['optica_id'],
            $data['documento'],
            $data['tipo_documento'],
            $data['nombre'],
            $data['apellidos'],
            $data['email'],
            $data['telefono'],
            $data['fecha_nacimiento'],
            $data['genero'],
            $data['rh'],
            $data['nombre_acudiente'],
            $data['telefono_acudiente'],
            $data['direccion'],
            $data['eps'],
            $data['tipo_afiliacion']
        ]);

        return $this->pdo->lastInsertId();
        } catch (Exception $e) {
            return false;
        }
        
    }
    
    public function update($id, $data) {
        // Verificar qué campos existen en la tabla
        $stmt = $this->pdo->query("DESCRIBE pacientes");
        $columns = $stmt->fetchAll(PDO::FETCH_COLUMN);
        
        // Construir la consulta dinámicamente
        $fields = [];
        $values = [];
        
        // Campos que se pueden actualizar
        $updatableFields = [
            'nombre' => $data['nombre'],
            'apellidos' => $data['apellidos'],
            'documento' => $data['documento'],
            'tipo_documento' => $data['tipo_documento'],
            'fecha_nacimiento' => $data['fecha_nacimiento'] ?? null,
            'telefono' => $data['telefono'] ?? null,
            'email' => $data['email'] ?? null,
            'genero' => $data['genero'] ?? null,
            'rh' => $data['rh'] ?? null,
            'nombre_acudiente' => $data['nombre_acudiente'] ?? null,
            'telefono_acudiente' => $data['telefono_acudiente'] ?? null,
            'direccion' => $data['direccion'] ?? null,
            'eps' => $data['eps'] ?? null,
            'tipo_afiliacion' => $data['tipo_afiliacion'] ?? null
        ];
        
        // Agregar campos que existen en la tabla
        foreach ($updatableFields as $field => $value) {
            if (in_array($field, $columns)) {
                $fields[] = "$field = ?";
                $values[] = $value;
            }
        }
        
        // Agregar updated_at si existe
        if (in_array('updated_at', $columns)) {
            $fields[] = "updated_at = CURRENT_TIMESTAMP";
        }
        
        $sql = "UPDATE pacientes SET " . implode(', ', $fields) . " WHERE id = ?";
        $values[] = $id;
        
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($values);
    }
    
    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM pacientes WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>



