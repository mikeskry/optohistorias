<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Creando tabla historias_clinicas simple...\n";
    
    // Eliminar tabla existente
    $pdo->exec("DROP TABLE IF EXISTS historias_clinicas");
    echo "Tabla anterior eliminada\n";
    
    // Crear tabla simple
    $sql = "CREATE TABLE historias_clinicas (
        id int(11) NOT NULL AUTO_INCREMENT,
        paciente_id int(11) NOT NULL,
        fecha_consulta date NOT NULL,
        motivo_consulta text DEFAULT NULL,
        tipo_examen varchar(100) DEFAULT 'EXAMEN DE OPTROMETRIA',
        anamnesis text DEFAULT NULL,
        ultima_valoracion_optometria text DEFAULT NULL,
        ocupacion_profesion text DEFAULT NULL,
        antecedentes_familiares text DEFAULT NULL,
        antecedentes_personales text DEFAULT NULL,
        antecedentes_laborales text DEFAULT NULL,
        lensometria_data text DEFAULT NULL,
        agudeza_visual_data text DEFAULT NULL,
        examen_motor_data text DEFAULT NULL,
        examen_refractivo_data text DEFAULT NULL,
        examen_oftalmologico_data text DEFAULT NULL,
        oftalmoscopia_data text DEFAULT NULL,
        formula_data text DEFAULT NULL,
        diagnostico_data text DEFAULT NULL,
        observaciones text DEFAULT NULL,
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    $pdo->exec($sql);
    echo "Tabla creada exitosamente\n";
    
    // Verificar
    $stmt = $pdo->query("DESCRIBE historias_clinicas");
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "Total de campos: " . count($columns) . "\n";
    
    foreach ($columns as $column) {
        echo "- {$column['Field']}\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
























