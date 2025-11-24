<?php
require_once '../api/config.php';

try {
    $pdo = getDBConnection();
    
    echo "Ejecutando migración de campos de pacientes...\n";
    
    // Verificar si los campos ya existen
    $stmt = $pdo->query("DESCRIBE pacientes");
    $columns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo "Campos actuales en la tabla pacientes: " . implode(', ', $columns) . "\n";
    
    // Agregar nuevos campos si no existen
    if (!in_array('rh', $columns)) {
        echo "Agregando campo 'rh'...\n";
        $pdo->exec("ALTER TABLE `pacientes` ADD COLUMN `rh` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') DEFAULT NULL AFTER `genero`");
    } else {
        echo "Campo 'rh' ya existe.\n";
    }
    
    if (!in_array('nombre_acudiente', $columns)) {
        echo "Agregando campo 'nombre_acudiente'...\n";
        $pdo->exec("ALTER TABLE `pacientes` ADD COLUMN `nombre_acudiente` varchar(255) DEFAULT NULL AFTER `rh`");
    } else {
        echo "Campo 'nombre_acudiente' ya existe.\n";
    }
    
    if (!in_array('telefono_acudiente', $columns)) {
        echo "Agregando campo 'telefono_acudiente'...\n";
        $pdo->exec("ALTER TABLE `pacientes` ADD COLUMN `telefono_acudiente` varchar(20) DEFAULT NULL AFTER `nombre_acudiente`");
    } else {
        echo "Campo 'telefono_acudiente' ya existe.\n";
    }
    
    // Eliminar campo direccion si existe
    if (in_array('direccion', $columns)) {
        echo "Eliminando campo 'direccion'...\n";
        $pdo->exec("ALTER TABLE `pacientes` DROP COLUMN `direccion`");
    } else {
        echo "Campo 'direccion' no existe.\n";
    }
    
    // Verificar campos finales
    $stmt = $pdo->query("DESCRIBE pacientes");
    $finalColumns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo "\nMigración completada exitosamente!\n";
    echo "Campos finales en la tabla pacientes: " . implode(', ', $finalColumns) . "\n";
    
} catch (Exception $e) {
    echo "Error durante la migración: " . $e->getMessage() . "\n";
}
?>
