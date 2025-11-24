<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Creando tabla historias_clinicas optimizada...\n\n";
    
    // Eliminar la tabla existente si existe
    echo "Eliminando tabla existente...\n";
    $pdo->exec("DROP TABLE IF EXISTS historias_clinicas");
    echo "✓ Tabla eliminada\n\n";
    
    // Crear la tabla con campos agrupados en TEXT para evitar problemas de tamaño
    echo "Creando tabla optimizada...\n";
    
    $sql = "
    CREATE TABLE `historias_clinicas` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `paciente_id` int(11) NOT NULL,
        
        -- Campos básicos
        `fecha_consulta` date NOT NULL,
        `motivo_consulta` text DEFAULT NULL,
        `tipo_examen` varchar(100) DEFAULT 'EXAMEN DE OPTROMETRIA',
        `anamnesis` text DEFAULT NULL,
        `ultima_valoracion_optometria` text DEFAULT NULL,
        `ocupacion_profesion` text DEFAULT NULL,
        `antecedentes_familiares` text DEFAULT NULL,
        `antecedentes_personales` text DEFAULT NULL,
        `antecedentes_laborales` text DEFAULT NULL,
        
        -- Campos agrupados en TEXT para evitar problemas de tamaño de fila
        `lensometria_data` text DEFAULT NULL,
        `agudeza_visual_data` text DEFAULT NULL,
        `examen_motor_data` text DEFAULT NULL,
        `examen_refractivo_data` text DEFAULT NULL,
        `examen_oftalmologico_data` text DEFAULT NULL,
        `oftalmoscopia_data` text DEFAULT NULL,
        `formula_data` text DEFAULT NULL,
        `diagnostico_data` text DEFAULT NULL,
        
        -- Campos de observaciones
        `observaciones` text DEFAULT NULL,
        
        -- Timestamps
        `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        -- Clave primaria
        PRIMARY KEY (`id`)
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
    echo "Los datos se almacenarán en campos TEXT para evitar problemas de tamaño de fila.\n";
    echo "El servicio organizará automáticamente los datos del frontend en estos campos.\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
























