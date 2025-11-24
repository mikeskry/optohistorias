<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Verificando tabla historias_clinicas...\n\n";
    
    // Verificar si la tabla existe
    $stmt = $pdo->query("SHOW TABLES LIKE 'historias_clinicas'");
    $tableExists = $stmt->fetch();
    
    if ($tableExists) {
        echo "✓ La tabla historias_clinicas existe\n\n";
        
        // Verificar estructura
        $stmt = $pdo->query("DESCRIBE historias_clinicas");
        $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo "Estructura de la tabla:\n";
        echo "Total de campos: " . count($columns) . "\n\n";
        
        foreach ($columns as $column) {
            echo "- {$column['Field']} ({$column['Type']})\n";
        }
        
        // Verificar claves foráneas
        echo "\nClaves foráneas:\n";
        $stmt = $pdo->query("
            SELECT 
                COLUMN_NAME, 
                REFERENCED_TABLE_NAME, 
                REFERENCED_COLUMN_NAME 
            FROM 
                INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
            WHERE 
                TABLE_SCHEMA = 'opticast' 
                AND TABLE_NAME = 'historias_clinicas' 
                AND REFERENCED_TABLE_NAME IS NOT NULL
        ");
        $foreignKeys = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($foreignKeys as $fk) {
            echo "- {$fk['COLUMN_NAME']} -> {$fk['REFERENCED_TABLE_NAME']}.{$fk['REFERENCED_COLUMN_NAME']}\n";
        }
        
    } else {
        echo "✗ La tabla historias_clinicas NO existe\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>

