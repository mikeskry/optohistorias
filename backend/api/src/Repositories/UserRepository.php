<?php
require_once __DIR__ . '/../../config.php';

class UserRepository {
    private $pdo;
    
    public function __construct() {
        $this->pdo = getDBConnection();
    }
    
    public function findByUsername($username) {
        $stmt = $this->pdo->prepare("
            SELECT u.*, o.nombre as optica_nombre 
            FROM usuarios u 
            LEFT JOIN opticas o ON u.optica_id = o.id 
            WHERE u.username = ? AND u.activo = 1
        ");
        $stmt->execute([$username]);
        return $stmt->fetch();
    }
    
    public function findById($id) {
        $stmt = $this->pdo->prepare("
            SELECT u.*, o.nombre as optica_nombre 
            FROM usuarios u 
            LEFT JOIN opticas o ON u.optica_id = o.id 
            WHERE u.id = ? AND u.activo = 1
        ");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
    
    public function findByOpticaId($opticaId) {
        $stmt = $this->pdo->prepare("
            SELECT u.*, o.nombre as optica_nombre 
            FROM usuarios u 
            LEFT JOIN opticas o ON u.optica_id = o.id 
            WHERE u.optica_id = ? AND u.activo = 1 AND u.rol = 'usuario' AND u.principal = 1
        ");
        $stmt->execute([$opticaId]);
        return $stmt->fetch();
    }
    
    public function updatePassword($userId, $hashedPassword) {
        $stmt = $this->pdo->prepare("
            UPDATE usuarios 
            SET password = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        ");
        return $stmt->execute([$hashedPassword, $userId]);
    }
    
    public function updatePrimerAcceso($userId, $primerAcceso) {
        $stmt = $this->pdo->prepare("
            UPDATE usuarios 
            SET primer_acceso = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        ");
        return $stmt->execute([$primerAcceso ? 1 : 0, $userId]);
    }
    
    public function create($data) {
        try {
            
            $stmt = $this->pdo->prepare("
                INSERT INTO usuarios (optica_id, username, password, nombre, apellidos, email, rol, primer_acceso, principal) 
                VALUES (?, ?, ?, ?, ?, ?, ?, 1, 1)
            ");
            
            $result = $stmt->execute([
                $data['optica_id'],
                $data['username'],
                $data['password'], // Sin hasheo, contraseña en texto plano
                $data['nombre'], // Nombre del usuario
                $data['apellidos'] ?? '', // Apellidos vacíos si no se proporcionan
                $data['email'], // Email del usuario
                $data['rol'] ?? 'usuario' // Cambiar 'optica' por 'usuario' para cumplir con el enum
            ]);
            
            if ($result) {
                return $this->pdo->lastInsertId();
            } else {
                return false;
            }
            
        } catch (PDOException $e) {
            // Re-lanzar la excepción para que el AdminService la maneje
            throw $e;
        }
    }
    
    public function update($id, $data) {
        $stmt = $this->pdo->prepare("
            UPDATE usuarios 
            SET username = ?, rol = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        ");
        return $stmt->execute([
            $data['username'],
            $data['rol'],
            $id
        ]);
    }

    public function updateUser($id, $data) {
        $fields = [];
        $values = [];
        
        if (isset($data['nombre'])) {
            $fields[] = 'nombre = ?';
            $values[] = $data['nombre'];
        }
        
        if (isset($data['apellidos'])) {
            $fields[] = 'apellidos = ?';
            $values[] = $data['apellidos'];
        }
        
        if (empty($fields)) {
            return true; // No hay campos para actualizar
        }
        
        $fields[] = 'updated_at = CURRENT_TIMESTAMP';
        $values[] = $id;
        
        $stmt = $this->pdo->prepare("
            UPDATE usuarios 
            SET " . implode(', ', $fields) . "
            WHERE id = ?
        ");
        
        return $stmt->execute($values);
    }
    
    public function delete($id) {
        $stmt = $this->pdo->prepare("UPDATE usuarios SET activo = 0 WHERE id = ?");
        return $stmt->execute([$id]);
    }
    
    public function resetPassword($id) {
        $defaultPassword = 'optica123';
        
        $stmt = $this->pdo->prepare("
            UPDATE usuarios 
            SET password = ?, primer_acceso = 1, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        ");
        return $stmt->execute([$defaultPassword, $id]);
    }
}
?>

