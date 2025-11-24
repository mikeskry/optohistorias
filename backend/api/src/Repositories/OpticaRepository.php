<?php
require_once __DIR__ . '/../../config.php';

class OpticaRepository {
    private $pdo;
    
    public function __construct() {
        $this->pdo = getDBConnection();
    }
    
    public function getAll() {
        $stmt = $this->pdo->prepare("
            SELECT o.*, 
                   (SELECT COUNT(*) FROM usuarios u WHERE u.optica_id = o.id AND u.activo = 1) as total_usuarios,
                   u_principal.nombre as user_nombre, u_principal.apellidos as user_apellidos
            FROM opticas o 
            LEFT JOIN usuarios u_principal ON o.id = u_principal.optica_id AND u_principal.principal = 1
            ORDER BY o.id DESC
        ");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    public function findById($id) {
        $stmt = $this->pdo->prepare("
            SELECT o.*, u.nombre as user_nombre, u.apellidos as user_apellidos
            FROM opticas o 
            LEFT JOIN usuarios u ON o.id = u.optica_id AND u.principal = 1
            WHERE o.id = ?
        ");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
    
    public function create($data) {
        try {
            error_log("*************************************");
            error_log(json_encode($data));
            $stmt = $this->pdo->prepare("
                INSERT INTO opticas (nombre, direccion, telefono, email, logo) 
                VALUES (?, ?, ?, ?, ?)
            ");
            error_log("INSERT INTO opticas (nombre, direccion, telefono, email, logo) VALUES (?, ?, ?, ?, ?)");
            error_log($data['nombre']);
            error_log($data['direccion']);
            error_log($data['telefono']);
            error_log($data['email']);
            error_log($data['logo']);
            
            $stmt->execute([
                $data['nombre'],
                $data['direccion'],
                $data['telefono'],
                $data['email'],
                $data['logo'] ?? ''
            ]);

            $data['optica_id'] = $this->pdo->lastInsertId();

            $this->createUser($data);

            return $data['optica_id'];
            
            
            return false;
        } catch (PDOException $e) {
            // Re-lanzar la excepción para que el AdminService la maneje
            error_log("Error creating optica: " . $e->getMessage());
            throw $e;
        }
    }

    public function createUser($data) {
        try {
            $stmt = $this->pdo->prepare("
                INSERT INTO usuarios (optica_id, username, nombre, apellidos, email, principal) 
                VALUES (?, ?, ?, ?, ?, ?)
            ");     
            return $stmt->execute([$data['optica_id'], $data['email'], $data['user_nombre'], $data['user_apellidos'], $data['email'], 1]);
        } catch (PDOException $e) {
            // Re-lanzar la excepción para que el AdminService la maneje
            throw $e;
            error_log("Error creating user: " . $e->getMessage());
        }
        return false;
    }
    
    public function update($id, $data) {
        // Construir la consulta dinámicamente basada en los campos proporcionados
        $fields = [];
        $values = [];
        
        error_log("*************************************");
        error_log(json_encode($data));
        if (isset($data['nombre'])) {
            $fields[] = "nombre = ?";
            $values[] = $data['nombre'];
        }
        
        if (isset($data['direccion'])) {
            $fields[] = "direccion = ?";
            $values[] = $data['direccion'];
        }
        
        if (isset($data['telefono'])) {
            $fields[] = "telefono = ?";
            $values[] = $data['telefono'];
        }
        
        if (isset($data['email'])) {
            $fields[] = "email = ?";
            $values[] = $data['email'];
        }
        
        if (isset($data['activo'])) {
            $fields[] = "activo = ?";
            $values[] = $data['activo'] ? 1 : 0;
        }
        
        // Agregar manejo de logo
        if (isset($data['logo'])) {
            $fields[] = "logo = ?";
            $values[] = $data['logo'];
        }
        
        if (empty($fields)) {
            return true; // No hay nada que actualizar
        }
        
        $fields[] = "updated_at = CURRENT_TIMESTAMP";
        $values[] = $id;
        error_log("3");
        $sql = "UPDATE opticas SET " . implode(", ", $fields) . " WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute($values);
        error_log("4");
        // Si se actualiza el email, también actualizar en la tabla de usuarios


        try {
            $userStmt = $this->pdo->prepare("
                UPDATE usuarios 
                SET 
                    email = ?,
                    nombre = ?,
                    apellidos = ?
                WHERE optica_id = ? AND principal = 1
            ");
            $userStmt->execute([$data['email'], $data['user_nombre'], $data['user_apellidos'], $id]);
        } catch (Exception $e) {
            error_log("Error updating user: " . $e->getMessage());
        }

        
        
        error_log("5");
        
        return $result;
    }
    
    public function delete($id) {
        $stmt = $this->pdo->prepare("UPDATE opticas SET activo = 0 WHERE id = ?");
        return $stmt->execute([$id]);
    }
    
    public function findByEmail($email) {
        $stmt = $this->pdo->prepare("
            SELECT * FROM opticas WHERE email = ? AND activo = 1
        ");
        $stmt->execute([$email]);
        return $stmt->fetch();
    }
    
    public function updateFirma($opticaId, $firmaPath) {
        try {
            error_log("OpticaRepository::updateFirma - Óptica ID: " . $opticaId . ", Firma: " . $firmaPath);
            
            $stmt = $this->pdo->prepare("UPDATE opticas SET firma = ? WHERE id = ?");
            $result = $stmt->execute([$firmaPath, $opticaId]);
            
            error_log("OpticaRepository::updateFirma - Resultado: " . ($result ? 'true' : 'false'));
            return $result;
            
        } catch (PDOException $e) {
            error_log("OpticaRepository::updateFirma - Error: " . $e->getMessage());
            throw $e;
        }
    }
    
    public function deleteFirma($opticaId) {
        try {
            error_log("OpticaRepository::deleteFirma - Óptica ID: " . $opticaId);
            
            // Primero obtener la ruta de la firma actual para eliminarla del sistema de archivos
            $optica = $this->findById($opticaId);
            if ($optica && !empty($optica['firma'])) {
                $firmaPath = dirname(__DIR__, 2) . '/uploads/' . $optica['firma'];
                if (file_exists($firmaPath)) {
                    unlink($firmaPath);
                    error_log("OpticaRepository::deleteFirma - Archivo eliminado: " . $firmaPath);
                }
            }
            
            $stmt = $this->pdo->prepare("UPDATE opticas SET firma = NULL WHERE id = ?");
            $result = $stmt->execute([$opticaId]);
            
            error_log("OpticaRepository::deleteFirma - Resultado: " . ($result ? 'true' : 'false'));
            return $result;
            
        } catch (PDOException $e) {
            error_log("OpticaRepository::deleteFirma - Error: " . $e->getMessage());
            throw $e;
        }
    }
}
?>

