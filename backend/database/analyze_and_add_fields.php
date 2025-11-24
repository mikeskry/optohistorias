<?php
// Configuración de base de datos
$host = 'localhost';
$dbname = 'opticast';
$username = 'root';
$password = '80901964';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Analizando y agregando todos los campos faltantes...\n\n";
    
    // Campos específicos que se están enviando desde el frontend
    $specificFields = [
        // Campos de lensometría específicos
        'lensometria_formula_lejos_derecho_esfera' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_derecho_cilindro' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_derecho_adicion' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_derecho_prisma' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_izquierdo_esfera' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_izquierdo_cilindro' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_izquierdo_adicion' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_lejos_izquierdo_prisma' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_derecho_esfera' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_derecho_cilindro' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_derecho_adicion' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_izquierdo_esfera' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_izquierdo_cilindro' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'lensometria_formula_cerca_izquierdo_adicion' => 'varchar(50) DEFAULT NULL',
        
        // Campos de agudeza visual específicos
        'lejos_test_usado' => 'varchar(50) DEFAULT NULL',
        'cerca_test_usado' => 'varchar(50) DEFAULT NULL',
        'sin_correccion_lejos_derecho' => 'varchar(50) DEFAULT NULL',
        'sin_correccion_lejos_izquierdo' => 'varchar(50) DEFAULT NULL',
        'sin_correccion_lejos_ambos' => 'varchar(50) DEFAULT NULL',
        'sin_correccion_cerca_derecho' => 'varchar(50) DEFAULT NULL',
        'sin_correccion_cerca_izquierdo' => 'varchar(50) DEFAULT NULL',
        'sin_correccion_cerca_observacion' => 'text DEFAULT NULL',
        'con_correccion_lejos_derecho' => 'varchar(50) DEFAULT NULL',
        'con_correccion_lejos_izquierdo' => 'varchar(50) DEFAULT NULL',
        'con_correccion_lejos_ambos' => 'varchar(50) DEFAULT NULL',
        'con_correccion_cerca_derecho' => 'varchar(50) DEFAULT NULL',
        'con_correccion_cerca_izquierdo' => 'varchar(50) DEFAULT NULL',
        'con_correccion_cerca_observacion' => 'text DEFAULT NULL',
        'pin_hole_lejos_derecho' => 'varchar(50) DEFAULT NULL',
        'pin_hole_lejos_izquierdo' => 'varchar(50) DEFAULT NULL',
        
        // Campos adicionales de agudeza visual
        'agudeza_visual_cerca_distancia' => 'varchar(50) DEFAULT NULL',
        'agudeza_visual_cerca_descripcion' => 'varchar(50) DEFAULT NULL',
        'agudeza_visual_cerca_derecho_sin_correccion' => 'varchar(50) DEFAULT NULL',
        'agudeza_visual_cerca_izquierdo_sin_correccion' => 'varchar(50) DEFAULT NULL',
        'agudeza_visual_cerca_observacion_sin_correccion' => 'text DEFAULT NULL',
        'agudeza_visual_cerca_derecho_con_correccion' => 'varchar(50) DEFAULT NULL',
        'agudeza_visual_cerca_izquierdo_con_correccion' => 'varchar(50) DEFAULT NULL',
        'agudeza_visual_cerca_observacion_con_correccion' => 'text DEFAULT NULL',
        
        // Campos de examen motor específicos
        'examen_motor_mano_dominante' => 'varchar(50) DEFAULT NULL',
        'examen_motor_ojo_dominante' => 'varchar(50) DEFAULT NULL',
        'examen_motor_punto_proximo_valor' => 'varchar(50) DEFAULT NULL',
        'examen_motor_dp_lejos' => 'varchar(50) DEFAULT NULL',
        'examen_motor_dp_cerca' => 'varchar(50) DEFAULT NULL',
        'examen_motor_ducciones_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_motor_ducciones_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_motor_kappa_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_motor_kappa_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_motor_hirschberg' => 'varchar(100) DEFAULT NULL',
        'examen_motor_test_utilizado' => 'varchar(50) DEFAULT NULL',
        'examen_motor_cover_test_con_correccion_horizontal' => 'varchar(50) DEFAULT NULL',
        'examen_motor_cover_test_con_correccion_vertical' => 'varchar(50) DEFAULT NULL',
        'examen_motor_cover_test_sin_correccion_horizontal' => 'varchar(50) DEFAULT NULL',
        'examen_motor_cover_test_sin_correccion_vertical' => 'varchar(50) DEFAULT NULL',
        'examen_motor_prisma_con_correccion_horizontal' => 'varchar(50) DEFAULT NULL',
        'examen_motor_prisma_con_correccion_vertical' => 'varchar(50) DEFAULT NULL',
        'examen_motor_prisma_sin_correccion_horizontal' => 'varchar(50) DEFAULT NULL',
        'examen_motor_prisma_sin_correccion_vertical' => 'varchar(50) DEFAULT NULL',
        'examen_motor_observaciones' => 'text DEFAULT NULL',
        'examen_motor_por_confirmar_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_motor_por_confirmar_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_motor_estereopsis_tipo' => 'varchar(50) DEFAULT NULL',
        'examen_motor_estereopsis_resultado' => 'varchar(50) DEFAULT NULL',
        
        // Campos de versiones
        'examen_motor_versiones_derecho_left' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_derecho_right' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_derecho_top_left' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_derecho_bottom_left' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_derecho_top_right' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_derecho_bottom_right' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_izquierdo_left' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_izquierdo_right' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_izquierdo_top_left' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_izquierdo_bottom_left' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_izquierdo_top_right' => 'varchar(10) DEFAULT NULL',
        'examen_motor_versiones_izquierdo_bottom_right' => 'varchar(10) DEFAULT NULL',
        
        // Campos de examen refractivo específicos
        'examen_refractivo_keratometria_derecho_plano' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_derecho_curvo' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_derecho_miras' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_derecho_corn' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_izquierdo_plano' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_izquierdo_curvo' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_izquierdo_miras' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_keratometria_izquierdo_corn' => 'varchar(50) DEFAULT NULL',
        
        // Campos de retinoscopía
        'examen_refractivo_retinoscopia_estatica_derecho_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_estatica_derecho_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_estatica_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_estatica_derecho_sombras' => 'varchar(100) DEFAULT NULL',
        'examen_refractivo_retinoscopia_estatica_izquierdo_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_estatica_izquierdo_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_estatica_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_estatica_izquierdo_sombras' => 'varchar(100) DEFAULT NULL',
        
        // Campos de retinoscopía dinámica
        'examen_refractivo_retinoscopia_dinamica_derecho_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_dinamica_derecho_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_dinamica_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_dinamica_derecho_sombras' => 'varchar(100) DEFAULT NULL',
        'examen_refractivo_retinoscopia_dinamica_izquierdo_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_dinamica_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_retinoscopia_dinamica_izquierdo_sombras' => 'varchar(100) DEFAULT NULL',
        
        // Campos adicionales de examen refractivo
        'examen_refractivo_otra_refraccion' => 'varchar(100) DEFAULT NULL',
        'examen_refractivo_radio_k_1' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_radio_k_2' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_derecho_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_derecho_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_derecho_sombras' => 'varchar(100) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_izquierdo_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_izquierdo_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_otra_refraccion_izquierdo_sombras' => 'varchar(100) DEFAULT NULL',
        
        // Campos de examen subjetivo
        'examen_refractivo_subjetivo_normal' => 'varchar(10) DEFAULT NULL',
        'examen_refractivo_subjetivo_cycloplejia' => 'varchar(10) DEFAULT NULL',
        'examen_refractivo_subjetivo_otra' => 'varchar(100) DEFAULT NULL',
        'examen_refractivo_subjetivo_distancia_al' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_av_lejos' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_add' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_av_cerca' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_dnp' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_vortice' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_mm' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_estatica' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_derecho_dinamica' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_esfera' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_cilindro' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_av_lejos' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_add' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_av_cerca' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_dnp' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_vortice' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_mm' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_estatica' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_subjetivo_izquierdo_dinamica' => 'varchar(50) DEFAULT NULL',
        
        // Campos de AV retinoscopía
        'examen_refractivo_av_retinoscopia_derecho_estatica' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_av_retinoscopia_derecho_dinamica' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_av_retinoscopia_izquierdo_estatica' => 'varchar(50) DEFAULT NULL',
        'examen_refractivo_av_retinoscopia_izquierdo_dinamica' => 'varchar(50) DEFAULT NULL',
        
        // Campos de examen oftalmológico
        'examen_oftalmologico_pupila_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_pupila_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_parpados_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_parpados_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_pelicula_lagrimal_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_pelicula_lagrimal_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_conjuntiva_derecho' => 'varchar(100) DEFAULT NULL',
        'examen_oftalmologico_conjuntiva_izquierdo' => 'varchar(100) DEFAULT NULL',
        'examen_oftalmologico_cornea_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_cornea_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_cristalino_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_cristalino_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_camara_anterior_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_camara_anterior_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_iris_derecho' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_iris_izquierdo' => 'varchar(50) DEFAULT NULL',
        'examen_oftalmologico_bruckner' => 'varchar(50) DEFAULT NULL',
        
        // Campos de oftalmoscopia
        'oftalmoscopia_derecho_excavacion' => 'decimal(3,1) DEFAULT NULL',
        'oftalmoscopia_derecho_descripcion' => 'text DEFAULT NULL',
        'oftalmoscopia_izquierdo_excavacion' => 'decimal(3,1) DEFAULT NULL',
        'oftalmoscopia_izquierdo_descripcion' => 'text DEFAULT NULL',
        
        // Campos de fórmula
        'formula_derecho_esfera' => 'varchar(50) DEFAULT NULL',
        'formula_derecho_cilindro' => 'varchar(50) DEFAULT NULL',
        'formula_derecho_eje' => 'varchar(50) DEFAULT NULL',
        'formula_derecho_av_lejos' => 'varchar(50) DEFAULT NULL',
        'formula_derecho_add' => 'varchar(50) DEFAULT NULL',
        'formula_derecho_av_cerca' => 'varchar(50) DEFAULT NULL',
        'formula_derecho_dnp' => 'int DEFAULT NULL',
        'formula_derecho_recomendacion' => 'text DEFAULT NULL',
        'formula_izquierdo_esfera' => 'varchar(50) DEFAULT NULL',
        'formula_izquierdo_cilindro' => 'varchar(50) DEFAULT NULL',
        'formula_izquierdo_eje' => 'varchar(50) DEFAULT NULL',
        'formula_izquierdo_av_lejos' => 'varchar(50) DEFAULT NULL',
        'formula_izquierdo_add' => 'varchar(50) DEFAULT NULL',
        'formula_izquierdo_av_cerca' => 'varchar(50) DEFAULT NULL',
        'formula_izquierdo_dnp' => 'int DEFAULT NULL',
        'formula_izquierdo_recomendacion' => 'text DEFAULT NULL',
        
        // Campos de diagnóstico específicos
        'diagnostico_seguridad' => 'varchar(10) DEFAULT NULL',
        'diagnostico_maltrato' => 'varchar(10) DEFAULT NULL',
        'diagnostico_maltrato_x' => 'tinyint(1) DEFAULT NULL',
        'diagnostico_violencia' => 'varchar(10) DEFAULT NULL',
        'diagnostico_violencia_x' => 'tinyint(1) DEFAULT NULL',
        'diagnostico_codigo_1' => 'varchar(50) DEFAULT NULL',
        'diagnostico_diagnostico_1' => 'varchar(255) DEFAULT NULL',
        'diagnostico_descripcion_1' => 'text DEFAULT NULL',
        'diagnostico_ojo_1' => 'varchar(50) DEFAULT NULL',
        'diagnostico_principal_1' => 'varchar(10) DEFAULT NULL',
        'diagnostico_codigo_2' => 'varchar(50) DEFAULT NULL',
        'diagnostico_diagnostico_2' => 'varchar(255) DEFAULT NULL',
        'diagnostico_descripcion_2' => 'text DEFAULT NULL',
        'diagnostico_ojo_2' => 'varchar(50) DEFAULT NULL',
        'diagnostico_principal_2' => 'varchar(10) DEFAULT NULL',
        'diagnostico_codigo_3' => 'varchar(50) DEFAULT NULL',
        'diagnostico_diagnostico_3' => 'varchar(255) DEFAULT NULL',
        'diagnostico_descripcion_3' => 'text DEFAULT NULL',
        'diagnostico_ojo_3' => 'varchar(50) DEFAULT NULL',
        'diagnostico_principal_3' => 'varchar(10) DEFAULT NULL',
        'diagnostico_codigo_4' => 'varchar(50) DEFAULT NULL',
        'diagnostico_diagnostico_4' => 'varchar(255) DEFAULT NULL',
        'diagnostico_descripcion_4' => 'text DEFAULT NULL',
        'diagnostico_ojo_4' => 'varchar(50) DEFAULT NULL',
        'diagnostico_principal_4' => 'varchar(10) DEFAULT NULL',
        'diagnostico_codigo_5' => 'varchar(50) DEFAULT NULL',
        'diagnostico_diagnostico_5' => 'varchar(255) DEFAULT NULL',
        'diagnostico_descripcion_5' => 'text DEFAULT NULL',
        'diagnostico_ojo_5' => 'varchar(50) DEFAULT NULL',
        'diagnostico_principal_5' => 'varchar(10) DEFAULT NULL'
    ];
    
    // Verificar qué campos ya existen
    $stmt = $pdo->query("DESCRIBE historias_clinicas");
    $existingColumns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo "Campos existentes: " . count($existingColumns) . "\n";
    echo "Campos a agregar: " . count($specificFields) . "\n\n";
    
    $addedCount = 0;
    $skippedCount = 0;
    
    foreach ($specificFields as $fieldName => $fieldDefinition) {
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
            $skippedCount++;
        }
    }
    
    echo "\nResumen:\n";
    echo "- Campos agregados: $addedCount\n";
    echo "- Campos que ya existían: $skippedCount\n";
    echo "- Total de campos en la tabla: " . (count($existingColumns) + $addedCount) . "\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
























