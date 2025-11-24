<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Completando tabla historias_clinicas con todos los campos necesarios...\n\n";
    
    // Campos que necesitan ser agregados basándose en los datos enviados
    $fieldsToAdd = [
        // Campos básicos
        'tipo_examen' => "varchar(100) DEFAULT 'EXAMEN DE OPTOMETRIA'",
        'anamnesis' => "text DEFAULT NULL",
        'ultima_valoracion_optometria' => "text DEFAULT NULL",
        'antecedentes_familiares' => "text DEFAULT 'NO REFIERE'",
        'antecedentes_personales' => "text DEFAULT 'NO REFIERE'",
        'antecedentes_laborales' => "text DEFAULT 'NO REFIERE'",
        'ocupacion_profesion' => "text DEFAULT NULL",
        
        // Campos de lensometría
        'lensometria_formula_lejos' => "json DEFAULT NULL",
        'lensometria_formula_cerca' => "json DEFAULT NULL",
        'lensometria_observaciones' => "text DEFAULT NULL",
        
        // Campos de agudeza visual
        'agudeza_visual_lejos' => "json DEFAULT NULL",
        'agudeza_visual_cerca' => "json DEFAULT NULL",
        
        // Campos de examen motor
        'examen_motor' => "json DEFAULT NULL",
        
        // Campos de examen refractivo
        'examen_refractivo' => "json DEFAULT NULL",
        
        // Campos de examen oftalmológico
        'examen_oftalmologico' => "json DEFAULT NULL",
        
        // Campos de oftalmoscopia
        'oftalmoscopia' => "json DEFAULT NULL",
        
        // Campos de fórmula final
        'formula_final' => "json DEFAULT NULL",
        
        // Campos de diagnóstico
        'diagnostico' => "json DEFAULT NULL",
        
        // Campos de observaciones
        'observaciones' => "text DEFAULT NULL"
    ];
    
    // Verificar qué campos ya existen
    $stmt = $pdo->query("DESCRIBE historias_clinicas");
    $existingColumns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo "Campos existentes: " . implode(', ', $existingColumns) . "\n\n";
    
    $addedCount = 0;
    
    foreach ($fieldsToAdd as $fieldName => $fieldDefinition) {
        if (!in_array($fieldName, $existingColumns)) {
            try {
                $sql = "ALTER TABLE historias_clinicas ADD COLUMN `$fieldName` $fieldDefinition";
                $pdo->exec($sql);
                echo "✓ Agregado: $fieldName\n";
                $addedCount++;
            } catch (Exception $e) {
                echo "✗ Error agregando $fieldName: " . $e->getMessage() . "\n";
            }
        } else {
            echo "- Ya existe: $fieldName\n";
        }
    }
    
    echo "\nResumen:\n";
    echo "- Campos agregados: $addedCount\n";
    echo "- Total de campos en la tabla: " . count($existingColumns) + $addedCount . "\n";
    
    // Verificar la estructura final
    echo "\nEstructura final de la tabla:\n";
    $stmt = $pdo->query("DESCRIBE historias_clinicas");
    $finalColumns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    foreach ($finalColumns as $column) {
        echo "- {$column['Field']} ({$column['Type']})\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
























