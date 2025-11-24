<?php
require_once 'config.php';

echo "<h2>Creando Datos de Prueba para Reportes</h2>";

try {
    $pdo = getDBConnection();
    
    // Verificar si ya existen datos
    $sql = "SELECT COUNT(*) as total FROM historias_clinicas";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $total = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($total['total'] > 0) {
        echo "<p>Ya existen " . $total['total'] . " historias clínicas en la base de datos.</p>";
        echo "<p><a href='test_reportes.php'>Ver datos existentes</a></p>";
        exit;
    }
    
    echo "<p>No se encontraron historias clínicas. Creando datos de prueba...</p>";
    
    // Crear óptica de prueba
    $sql = "INSERT INTO opticas (nombre, direccion, telefono, email, activo) VALUES (?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['Óptica de Prueba', 'Calle 123 #45-67', '3001234567', 'prueba@optica.com', 1]);
    $opticaId = $pdo->lastInsertId();
    echo "<p>Óptica creada con ID: $opticaId</p>";
    
    // Crear usuario de prueba
    $sql = "INSERT INTO usuarios (nombre, email, password, rol, optica_id, activo) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $password = password_hash('123456', PASSWORD_DEFAULT);
    $stmt->execute(['Dr. Juan Pérez', 'doctor@optica.com', $password, 'optica', $opticaId, 1]);
    $usuarioId = $pdo->lastInsertId();
    echo "<p>Usuario creado con ID: $usuarioId</p>";
    
    // Crear pacientes de prueba
    $pacientes = [
        ['Juan', 'García', '12345678', 'CC', '1985-05-15', '3001234567', 'juan@email.com', 'M', 'Bogotá'],
        ['María', 'López', '87654321', 'CC', '1990-08-22', '3002345678', 'maria@email.com', 'F', 'Medellín'],
        ['Carlos', 'Martín', '11223344', 'CC', '1978-12-10', '3003456789', 'carlos@email.com', 'M', 'Cali'],
        ['Ana', 'Rodríguez', '44332211', 'CC', '1995-03-18', '3004567890', 'ana@email.com', 'F', 'Bogotá'],
        ['Luis', 'Fernández', '55667788', 'CC', '1982-07-05', '3005678901', 'luis@email.com', 'M', 'Barranquilla']
    ];
    
    $pacienteIds = [];
    foreach ($pacientes as $paciente) {
        $sql = "INSERT INTO pacientes (nombre, apellidos, documento, tipo_documento, fecha_nacimiento, telefono, email, genero, municipio, optica_id, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([...$paciente, $opticaId, 1]);
        $pacienteIds[] = $pdo->lastInsertId();
    }
    echo "<p>Pacientes creados: " . count($pacienteIds) . "</p>";
    
    // Crear historias clínicas de prueba
    $fechas = [
        date('Y-m-d H:i:s', strtotime('-5 days')),
        date('Y-m-d H:i:s', strtotime('-3 days')),
        date('Y-m-d H:i:s', strtotime('-1 day')),
        date('Y-m-d H:i:s'),
    ];
    
    $tiposConsulta = ['Consulta general', 'Control', 'Primera vez', 'Urgencia'];
    $diagnosticos = [
        'Miopía',
        'Hipermetropía',
        'Astigmatismo',
        'Presbicia'
    ];
    
    foreach ($pacienteIds as $index => $pacienteId) {
        $fecha = $fechas[$index % count($fechas)];
        $tipoConsulta = $tiposConsulta[$index % count($tiposConsulta)];
        $diagnostico = $diagnosticos[$index % count($diagnosticos)];
        
        $sql = "INSERT INTO historias_clinicas (paciente_id, usuario_id, fecha_consulta, tipo_consulta, diagnostico_principal, diagnostico_complementario_1, nombre_profesional, motivo_consulta, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $pacienteId,
            $usuarioId,
            $fecha,
            $tipoConsulta,
            $diagnostico,
            'Sin diagnóstico complementario',
            'Dr. Juan Pérez',
            'Consulta de rutina',
            'Paciente en buen estado general'
        ]);
    }
    
    echo "<p>Historias clínicas creadas: " . count($pacienteIds) . "</p>";
    
    echo "<p style='color: green;'><strong>¡Datos de prueba creados exitosamente!</strong></p>";
    echo "<p><a href='test_reportes.php'>Verificar datos creados</a></p>";
    
} catch (Exception $e) {
    echo "<p style='color: red;'>Error: " . $e->getMessage() . "</p>";
}
?>
