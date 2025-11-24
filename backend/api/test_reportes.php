<?php
require_once 'config.php';

echo "<h2>Prueba de Datos para Reportes</h2>";

try {
    $pdo = getDBConnection();
    
    // Verificar si hay historias clínicas
    $sql = "SELECT COUNT(*) as total FROM historias_clinicas";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $total = $stmt->fetch(PDO::FETCH_ASSOC);
    echo "<p><strong>Total historias clínicas:</strong> " . $total['total'] . "</p>";
    
    // Verificar si hay pacientes
    $sql = "SELECT COUNT(*) as total FROM pacientes";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $total = $stmt->fetch(PDO::FETCH_ASSOC);
    echo "<p><strong>Total pacientes:</strong> " . $total['total'] . "</p>";
    
    // Verificar si hay ópticas
    $sql = "SELECT COUNT(*) as total FROM opticas";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $total = $stmt->fetch(PDO::FETCH_ASSOC);
    echo "<p><strong>Total ópticas:</strong> " . $total['total'] . "</p>";
    
    // Mostrar algunas historias clínicas de ejemplo
    $sql = "
        SELECT 
            hc.id,
            hc.fecha_consulta,
            p.nombre,
            p.apellidos,
            p.telefono,
            p.email,
            p.optica_id,
            o.nombre as optica_nombre
        FROM historias_clinicas hc
        INNER JOIN pacientes p ON hc.paciente_id = p.id
        LEFT JOIN opticas o ON p.optica_id = o.id
        ORDER BY hc.fecha_consulta DESC
        LIMIT 10
    ";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $historias = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<h3>Últimas 10 historias clínicas:</h3>";
    echo "<table border='1' style='border-collapse: collapse;'>";
    echo "<tr><th>ID</th><th>Fecha</th><th>Paciente</th><th>Teléfono</th><th>Email</th><th>Óptica ID</th><th>Óptica</th></tr>";
    
    foreach ($historias as $historia) {
        echo "<tr>";
        echo "<td>" . $historia['id'] . "</td>";
        echo "<td>" . $historia['fecha_consulta'] . "</td>";
        echo "<td>" . $historia['nombre'] . " " . $historia['apellidos'] . "</td>";
        echo "<td>" . ($historia['telefono'] ?? 'Sin teléfono') . "</td>";
        echo "<td>" . ($historia['email'] ?? 'Sin email') . "</td>";
        echo "<td>" . $historia['optica_id'] . "</td>";
        echo "<td>" . ($historia['optica_nombre'] ?? 'Sin óptica') . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    
    // Probar la consulta del reporte con fechas recientes
    $fechaInicial = date('Y-m-d', strtotime('-30 days'));
    $fechaFinal = date('Y-m-d');
    
    echo "<h3>Prueba de consulta de reporte (últimos 30 días):</h3>";
    echo "<p>Rango: $fechaInicial a $fechaFinal</p>";
    
    $sql = "
        SELECT 
            hc.id,
            p.nombre,
            p.apellidos,
            p.documento,
            p.telefono,
            p.email,
            p.optica_id,
            o.nombre as optica_nombre,
            hc.fecha_consulta
        FROM historias_clinicas hc
        INNER JOIN pacientes p ON hc.paciente_id = p.id
        LEFT JOIN opticas o ON p.optica_id = o.id
        WHERE DATE(hc.fecha_consulta) BETWEEN ? AND ?
        ORDER BY hc.fecha_consulta DESC
        LIMIT 5
    ";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$fechaInicial, $fechaFinal]);
    $reporte = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<p><strong>Resultados encontrados:</strong> " . count($reporte) . "</p>";
    
    if (count($reporte) > 0) {
        echo "<table border='1' style='border-collapse: collapse;'>";
        echo "<tr><th>ID</th><th>Fecha</th><th>Paciente</th><th>Documento</th><th>Teléfono</th><th>Email</th><th>Óptica ID</th><th>Óptica</th></tr>";
        
        foreach ($reporte as $fila) {
            echo "<tr>";
            echo "<td>" . $fila['id'] . "</td>";
            echo "<td>" . $fila['fecha_consulta'] . "</td>";
            echo "<td>" . $fila['nombre'] . " " . $fila['apellidos'] . "</td>";
            echo "<td>" . $fila['documento'] . "</td>";
            echo "<td>" . ($fila['telefono'] ?? 'Sin teléfono') . "</td>";
            echo "<td>" . ($fila['email'] ?? 'Sin email') . "</td>";
            echo "<td>" . $fila['optica_id'] . "</td>";
            echo "<td>" . ($fila['optica_nombre'] ?? 'Sin óptica') . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "<p style='color: red;'>No se encontraron historias clínicas en el rango de fechas especificado.</p>";
    }
    
} catch (Exception $e) {
    echo "<p style='color: red;'>Error: " . $e->getMessage() . "</p>";
}
?>
