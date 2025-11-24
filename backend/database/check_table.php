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
        foreach ($columns as $column) {
            echo "- {$column['Field']} ({$column['Type']})\n";
        }
        
        echo "\nTotal de campos: " . count($columns) . "\n";
        
    } else {
        echo "✗ La tabla historias_clinicas NO existe\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
























