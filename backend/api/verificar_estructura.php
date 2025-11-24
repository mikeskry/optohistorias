<?php
require_once 'config.php';

echo "<h2>Verificación de Estructura de Base de Datos</h2>";

try {
    $pdo = getDBConnection();
    
    // Verificar estructura de la tabla pacientes
    echo "<h3>Estructura de la tabla 'pacientes':</h3>";
    $sql = "DESCRIBE pacientes";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $campos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<table border='1' style='border-collapse: collapse;'>";
    echo "<tr><th>Campo</th><th>Tipo</th><th>Nulo</th><th>Clave</th><th>Default</th><th>Extra</th></tr>";
    
    foreach ($campos as $campo) {
        echo "<tr>";
        echo "<td>" . $campo['Field'] . "</td>";
        echo "<td>" . $campo['Type'] . "</td>";
        echo "<td>" . $campo['Null'] . "</td>";
        echo "<td>" . $campo['Key'] . "</td>";
        echo "<td>" . ($campo['Default'] ?? 'NULL') . "</td>";
        echo "<td>" . $campo['Extra'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    
    // Verificar estructura de la tabla historias_clinicas
    echo "<h3>Estructura de la tabla 'historias_clinicas':</h3>";
    $sql = "DESCRIBE historias_clinicas";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $campos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<table border='1' style='border-collapse: collapse;'>";
    echo "<tr><th>Campo</th><th>Tipo</th><th>Nulo</th><th>Clave</th><th>Default</th><th>Extra</th></tr>";
    
    foreach ($campos as $campo) {
        echo "<tr>";
        echo "<td>" . $campo['Field'] . "</td>";
        echo "<td>" . $campo['Type'] . "</td>";
        echo "<td>" . $campo['Null'] . "</td>";
        echo "<td>" . $campo['Key'] . "</td>";
        echo "<td>" . ($campo['Default'] ?? 'NULL') . "</td>";
        echo "<td>" . $campo['Extra'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    
    // Verificar estructura de la tabla opticas
    echo "<h3>Estructura de la tabla 'opticas':</h3>";
    $sql = "DESCRIBE opticas";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $campos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<table border='1' style='border-collapse: collapse;'>";
    echo "<tr><th>Campo</th><th>Tipo</th><th>Nulo</th><th>Clave</th><th>Default</th><th>Extra</th></tr>";
    
    foreach ($campos as $campo) {
        echo "<tr>";
        echo "<td>" . $campo['Field'] . "</td>";
        echo "<td>" . $campo['Type'] . "</td>";
        echo "<td>" . $campo['Null'] . "</td>";
        echo "<td>" . $campo['Key'] . "</td>";
        echo "<td>" . ($campo['Default'] ?? 'NULL') . "</td>";
        echo "<td>" . $campo['Extra'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    
    // Mostrar algunos registros de ejemplo
    echo "<h3>Registros de ejemplo en 'pacientes':</h3>";
    $sql = "SELECT * FROM pacientes LIMIT 3";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $pacientes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($pacientes) > 0) {
        echo "<table border='1' style='border-collapse: collapse;'>";
        $headers = array_keys($pacientes[0]);
        echo "<tr>";
        foreach ($headers as $header) {
            echo "<th>" . $header . "</th>";
        }
        echo "</tr>";
        
        foreach ($pacientes as $paciente) {
            echo "<tr>";
            foreach ($paciente as $valor) {
                echo "<td>" . ($valor ?? 'NULL') . "</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "<p>No hay registros en la tabla pacientes.</p>";
    }
    
} catch (Exception $e) {
    echo "<p style='color: red;'>Error: " . $e->getMessage() . "</p>";
}
?>
