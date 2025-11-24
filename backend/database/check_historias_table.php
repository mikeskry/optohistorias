<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Verificando tabla historias_clinicas...\n";
    
    // Verificar si la tabla existe
    $stmt = $pdo->query("SHOW TABLES LIKE 'historias_clinicas'");
    $tableExists = $stmt->fetch();
    
    if ($tableExists) {
        echo "✓ La tabla historias_clinicas existe\n";
        
        // Verificar columnas
        $stmt = $pdo->query("DESCRIBE historias_clinicas");
        $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo "Columnas en la tabla:\n";
        foreach ($columns as $column) {
            echo "- {$column['Field']} ({$column['Type']})\n";
        }
        
        // Verificar si tiene la columna tipo_examen
        $hasTipoExamen = false;
        foreach ($columns as $column) {
            if ($column['Field'] === 'tipo_examen') {
                $hasTipoExamen = true;
                break;
            }
        }
        
        if ($hasTipoExamen) {
            echo "✓ La columna 'tipo_examen' existe\n";
        } else {
            echo "✗ La columna 'tipo_examen' NO existe\n";
        }
        
    } else {
        echo "✗ La tabla historias_clinicas NO existe\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>

