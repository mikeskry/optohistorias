<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Ejecutando migración de historias clínicas...\n";
    
    // Leer el archivo de migración
    $sql = file_get_contents('migration_historias_fixed.sql');
    
    if ($sql === false) {
        throw new Exception("No se pudo leer el archivo de migración");
    }
    
    // Ejecutar la migración
    $result = $pdo->exec($sql);
    
    echo "Migración de historias clínicas completada exitosamente!\n";
    echo "Filas afectadas: $result\n";
    
    // Verificar que la tabla existe y tiene las columnas correctas
    $stmt = $pdo->query("DESCRIBE historias_clinicas");
    $columns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo "Columnas en la tabla historias_clinicas:\n";
    foreach ($columns as $column) {
        echo "- $column\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
