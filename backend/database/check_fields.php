<?php
require_once '../api/config.php';

try {
    $pdo = getDBConnection();
    $stmt = $pdo->query("DESCRIBE pacientes");
    $columns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo "Campos en la tabla pacientes:\n";
    foreach ($columns as $column) {
        echo "- $column\n";
    }
    
    // Verificar específicamente los nuevos campos
    $newFields = ['rh', 'nombre_acudiente', 'telefono_acudiente'];
    echo "\nVerificación de nuevos campos:\n";
    foreach ($newFields as $field) {
        if (in_array($field, $columns)) {
            echo "✓ $field - EXISTE\n";
        } else {
            echo "✗ $field - NO EXISTE\n";
        }
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
