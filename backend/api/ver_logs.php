<?php
// Script para ver los logs de error de PHP en tiempo real

echo "<h2>Logs de Error de PHP</h2>";
echo "<p><strong>Archivo de log:</strong> " . ini_get('error_log') . "</p>";

// Intentar leer el archivo de log
$logFile = ini_get('error_log');
if (empty($logFile)) {
    $logFile = '/var/log/php_errors.log'; // Ruta por defecto en algunos sistemas
}

if (file_exists($logFile)) {
    echo "<h3>Últimas 50 líneas del log:</h3>";
    $lines = file($logFile);
    $lastLines = array_slice($lines, -50);
    
    echo "<pre style='background: #f5f5f5; padding: 10px; border-radius: 5px; max-height: 600px; overflow-y: auto;'>";
    foreach ($lastLines as $line) {
        // Resaltar líneas de error
        if (strpos($line, 'ERROR') !== false || strpos($line, 'Fatal') !== false) {
            echo "<span style='color: red; font-weight: bold;'>" . htmlspecialchars($line) . "</span>";
        } else if (strpos($line, '=== INICIO') !== false || strpos($line, '=== FIN') !== false) {
            echo "<span style='color: blue; font-weight: bold;'>" . htmlspecialchars($line) . "</span>";
        } else {
            echo htmlspecialchars($line);
        }
    }
    echo "</pre>";
} else {
    echo "<p style='color: red;'>No se pudo encontrar el archivo de log: $logFile</p>";
    
    // Mostrar configuración de PHP
    echo "<h3>Configuración de PHP:</h3>";
    echo "<ul>";
    echo "<li>error_log: " . ini_get('error_log') . "</li>";
    echo "<li>log_errors: " . (ini_get('log_errors') ? 'On' : 'Off') . "</li>";
    echo "<li>display_errors: " . (ini_get('display_errors') ? 'On' : 'Off') . "</li>";
    echo "<li>error_reporting: " . ini_get('error_reporting') . "</li>";
    echo "</ul>";
}

// Mostrar logs recientes del sistema (si es posible)
echo "<h3>Logs del sistema (últimos 20):</h3>";
echo "<pre style='background: #f5f5f5; padding: 10px; border-radius: 5px; max-height: 400px; overflow-y: auto;'>";
$output = shell_exec('tail -20 /var/log/apache2/error.log 2>/dev/null || tail -20 /var/log/httpd/error_log 2>/dev/null || echo "No se pudo acceder a los logs del servidor web"');
echo htmlspecialchars($output);
echo "</pre>";

// Botón para refrescar
echo "<br><button onclick='location.reload()' style='padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;'>Refrescar Logs</button>";
?>
