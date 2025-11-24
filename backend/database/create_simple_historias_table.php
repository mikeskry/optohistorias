<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Creando tabla historias_clinicas simplificada...\n\n";
    
    // Eliminar la tabla existente
    echo "Eliminando tabla existente...\n";
    $pdo->exec("DROP TABLE IF EXISTS historias_clinicas");
    echo "✓ Tabla eliminada\n\n";
    
    // Crear la nueva tabla con campos agrupados en JSON
    echo "Creando nueva tabla con estructura simplificada...\n";
    
    $sql = "
    CREATE TABLE `historias_clinicas` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `paciente_id` int(11) NOT NULL,
        `optica_id` int(11) NOT NULL,
        
        -- Campos básicos
        `fecha_consulta` date NOT NULL,
        `motivo_consulta` text DEFAULT NULL,
        `tipo_examen` varchar(100) DEFAULT 'EXAMEN DE OPTOMETRIA',
        `anamnesis` text DEFAULT NULL,
        `ultima_valoracion_optometria` text DEFAULT NULL,
        `ocupacion_profesion` text DEFAULT NULL,
        `antecedentes_familiares` text DEFAULT NULL,
        `antecedentes_personales` text DEFAULT NULL,
        `antecedentes_laborales` text DEFAULT NULL,
        
        -- Campos agrupados en JSON
        `lensometria` json DEFAULT NULL,
        `agudeza_visual` json DEFAULT NULL,
        `examen_motor` json DEFAULT NULL,
        `examen_refractivo` json DEFAULT NULL,
        `examen_oftalmologico` json DEFAULT NULL,
        `oftalmoscopia` json DEFAULT NULL,
        `formula` json DEFAULT NULL,
        `diagnostico` json DEFAULT NULL,
        
        -- Campos de observaciones
        `observaciones` text DEFAULT NULL,
        
        -- Timestamps
        `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        -- Claves primarias y foráneas
        PRIMARY KEY (`id`),
        KEY `idx_historias_clinicas_paciente` (`paciente_id`),
        KEY `idx_historias_clinicas_optica` (`optica_id`),
        KEY `idx_historias_clinicas_fecha` (`fecha_consulta`),
        
        CONSTRAINT `fk_historias_clinicas_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT `fk_historias_clinicas_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ";
    
    $pdo->exec($sql);
    echo "✓ Tabla creada exitosamente\n\n";
    
    // Verificar la estructura
    echo "Verificando estructura de la tabla...\n";
    $stmt = $pdo->query("DESCRIBE historias_clinicas");
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "Total de campos: " . count($columns) . "\n";
    echo "Estructura de la tabla:\n";
    foreach ($columns as $column) {
        echo "- {$column['Field']} ({$column['Type']})\n";
    }
    
    echo "\n✓ Tabla historias_clinicas creada correctamente con " . count($columns) . " campos\n";
    echo "Los datos se almacenarán en campos JSON para evitar problemas de tamaño de fila.\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
























