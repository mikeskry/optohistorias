<?php
require_once 'config.php';

try {
    $pdo = getDBConnection();
    
    // Probar la consulta SQL que estamos usando en el login
    $stmt = $pdo->prepare("
        SELECT u.*, o.nombre as optica_nombre, o.logo as optica_logo,
               admin.nombre as user_nombre, admin.apellidos as user_apellidos
        FROM usuarios u 
        LEFT JOIN opticas o ON u.optica_id = o.id 
        LEFT JOIN usuarios admin ON o.id = admin.optica_id AND admin.principal = 1
        WHERE u.username = ?
    ");
    
    // Probar con el usuario que sabemos que tiene óptica
    $stmt->execute(['1']); // Usar el username que vimos en los logs
    $user = $stmt->fetch();
    
    echo "=== PRUEBA DE DATOS DEL ADMINISTRADOR ===\n";
    echo "Usuario encontrado: " . ($user ? 'SÍ' : 'NO') . "\n";
    
    if ($user) {
        echo "ID: " . $user['id'] . "\n";
        echo "Username: " . $user['username'] . "\n";
        echo "Nombre: " . $user['nombre'] . "\n";
        echo "Apellidos: " . $user['apellidos'] . "\n";
        echo "Óptica ID: " . $user['optica_id'] . "\n";
        echo "Óptica Nombre: " . $user['optica_nombre'] . "\n";
        echo "Óptica Logo: " . ($user['optica_logo'] ?? 'NULL') . "\n";
        echo "Admin Nombre: " . ($user['user_nombre'] ?? 'NULL') . "\n";
        echo "Admin Apellidos: " . ($user['user_apellidos'] ?? 'NULL') . "\n";
        
        // Verificar si hay usuarios con principal=1 para esta óptica
        $stmt2 = $pdo->prepare("SELECT * FROM usuarios WHERE optica_id = ? AND principal = 1");
        $stmt2->execute([$user['optica_id']]);
        $admin = $stmt2->fetch();
        
        echo "\n=== VERIFICACIÓN DE ADMINISTRADOR PRINCIPAL ===\n";
        echo "Admin encontrado: " . ($admin ? 'SÍ' : 'NO') . "\n";
        if ($admin) {
            echo "Admin ID: " . $admin['id'] . "\n";
            echo "Admin Nombre: " . $admin['nombre'] . "\n";
            echo "Admin Apellidos: " . $admin['apellidos'] . "\n";
            echo "Admin Principal: " . $admin['principal'] . "\n";
        }
    }
    
    echo "==============================\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
