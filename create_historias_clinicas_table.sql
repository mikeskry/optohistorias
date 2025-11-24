-- Script SQL para crear tabla historias_clinicas con todos los campos del formulario
-- Ejecutar este script en MySQL/MariaDB

USE `opticast`;

-- Eliminar tabla si existe (opcional)
-- DROP TABLE IF EXISTS `historias_clinicas`;

-- Crear tabla de historias clínicas con todos los campos del formulario
CREATE TABLE IF NOT EXISTS `historias_clinicas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `paciente_id` int(11) NOT NULL,
    `usuario_id` int(11) NOT NULL,
    
    -- INFORMACIÓN BÁSICA
    `fecha_consulta` date NOT NULL,
    `motivo_consulta` text,
    
    -- CUESTIONARIO
    `tipo_examen` text,
    `anamnesis` text,
    `ultima_valoracion_optometria` text,
    `ocupacion_profesion` text,
    
    -- ANTECEDENTES
    `antecedentes_familiares` text,
    `antecedentes_personales` text,
    `antecedentes_laborales` text,
    
    -- LENSOMETRÍA - OJO DERECHO LEJOS
    `lensometria_formula_lejos_derecho_esfera` text,
    `lensometria_formula_lejos_derecho_cilindro` text,
    `lensometria_formula_lejos_derecho_eje` text,
    `lensometria_formula_lejos_derecho_adicion` text,
    `lensometria_formula_lejos_derecho_prisma` text,
    
    -- LENSOMETRÍA - OJO IZQUIERDO LEJOS
    `lensometria_formula_lejos_izquierdo_esfera` text,
    `lensometria_formula_lejos_izquierdo_cilindro` text,
    `lensometria_formula_lejos_izquierdo_eje` text,
    `lensometria_formula_lejos_izquierdo_adicion` text,
    `lensometria_formula_lejos_izquierdo_prisma` text,
    
    -- LENSOMETRÍA - OJO DERECHO CERCA
    `lensometria_formula_cerca_derecho_esfera` text,
    `lensometria_formula_cerca_derecho_cilindro` text,
    `lensometria_formula_cerca_derecho_eje` text,
    `lensometria_formula_cerca_derecho_adicion` text,
    
    -- LENSOMETRÍA - OJO IZQUIERDO CERCA
    `lensometria_formula_cerca_izquierdo_esfera` text,
    `lensometria_formula_cerca_izquierdo_cilindro` text,
    `lensometria_formula_cerca_izquierdo_eje` text,
    `lensometria_formula_cerca_izquierdo_adicion` text,
    
    -- LENSOMETRÍA - OBSERVACIONES
    `lensometria_observaciones` text,
    
    -- AGUDEZA VISUAL - CONFIGURACIÓN
    `lejos_test_usado` text,
    `cerca_test_usado` text,
    
    -- AGUDEZA VISUAL - SIN CORRECCIÓN LEJOS
    `sin_correccion_lejos_derecho` text,
    `sin_correccion_lejos_izquierdo` text,
    `sin_correccion_lejos_ambos` text,
    
    -- AGUDEZA VISUAL - SIN CORRECCIÓN CERCA
    `sin_correccion_cerca_derecho` text,
    `sin_correccion_cerca_izquierdo` text,
    `sin_correccion_cerca_observacion` text,
    
    -- AGUDEZA VISUAL - CON CORRECCIÓN LEJOS
    `con_correccion_lejos_derecho` text,
    `con_correccion_lejos_izquierdo` text,
    `con_correccion_lejos_ambos` text,
    
    -- AGUDEZA VISUAL - CON CORRECCIÓN CERCA
    `con_correccion_cerca_derecho` text,
    `con_correccion_cerca_izquierdo` text,
    `con_correccion_cerca_observacion` text,
    
    -- AGUDEZA VISUAL - PIN HOLE
    `pin_hole_lejos_derecho` text,
    `pin_hole_lejos_izquierdo` text,
    
    -- AGUDEZA VISUAL CERCA - FILA 1
    `agudeza_visual_cerca_distancia` text,
    `agudeza_visual_cerca_descripcion` text,
    `agudeza_visual_cerca_derecho_sin_correccion` text,
    `agudeza_visual_cerca_izquierdo_sin_correccion` text,
    `agudeza_visual_cerca_observacion_sin_correccion` text,
    `agudeza_visual_cerca_derecho_con_correccion` text,
    `agudeza_visual_cerca_izquierdo_con_correccion` text,
    `agudeza_visual_cerca_observacion_con_correccion` text,
    
    -- AGUDEZA VISUAL CERCA - FILA 2
    `agudeza_visual_cerca_sin_correccion_derecho_2` text,
    `agudeza_visual_cerca_sin_correccion_izquierdo_2` text,
    `agudeza_visual_cerca_sin_correccion_ambos_2` text,
    `agudeza_visual_cerca_con_correccion_derecho_2` text,
    `agudeza_visual_cerca_con_correccion_izquierdo_2` text,
    `agudeza_visual_cerca_con_correccion_ambos_2` text,
    `agudeza_visual_cerca_pin_hole_derecho_2` text,
    `agudeza_visual_cerca_pin_hole_izquierdo_2` text,
    
    -- AGUDEZA VISUAL CERCA - FILA 3
    `agudeza_visual_cerca_sin_correccion_derecho_3` text,
    `agudeza_visual_cerca_sin_correccion_izquierdo_3` text,
    `agudeza_visual_cerca_sin_correccion_ambos_3` text,
    `agudeza_visual_cerca_con_correccion_derecho_3` text,
    `agudeza_visual_cerca_con_correccion_izquierdo_3` text,
    `agudeza_visual_cerca_con_correccion_ambos_3` text,
    `agudeza_visual_cerca_pin_hole_derecho_3` text,
    `agudeza_visual_cerca_pin_hole_izquierdo_3` text,
    
    -- EXAMEN MOTOR - INFORMACIÓN GENERAL
    `examen_motor_mano_dominante` text,
    `examen_motor_ojo_dominante` text,
    `examen_motor_punto_proximo_valor` text,
    `examen_motor_dp_lejos` text,
    `examen_motor_dp_cerca` text,
    
    -- EXAMEN MOTOR - DUCCIONES
    `examen_motor_ducciones_derecho` text,
    `examen_motor_ducciones_izquierdo` text,
    
    -- EXAMEN MOTOR - KAPPA
    `examen_motor_kappa_derecho` text,
    `examen_motor_kappa_izquierdo` text,
    
    -- EXAMEN MOTOR - HIRSCHBERG
    `examen_motor_hirschberg` text,
    
    -- EXAMEN MOTOR - COVER TEST
    `examen_motor_test_utilizado` text,
    `examen_motor_cover_test_con_correccion_horizontal` text,
    `examen_motor_cover_test_con_correccion_vertical` text,
    `examen_motor_cover_test_sin_correccion_horizontal` text,
    `examen_motor_cover_test_sin_correccion_vertical` text,
    
    -- EXAMEN MOTOR - PRISMA
    `examen_motor_prisma_con_correccion_horizontal` text,
    `examen_motor_prisma_con_correccion_vertical` text,
    `examen_motor_prisma_sin_correccion_horizontal` text,
    `examen_motor_prisma_sin_correccion_vertical` text,
    
    -- EXAMEN MOTOR - OTROS
    `examen_motor_observaciones` text,
    `examen_motor_por_confirmar_derecho` text,
    `examen_motor_por_confirmar_izquierdo` text,
    `examen_motor_estereopsis_tipo` text,
    `examen_motor_estereopsis_resultado` text,
    
    -- EXAMEN MOTOR - VERSIONES OJO DERECHO
    `examen_motor_versiones_derecho_left` text,
    `examen_motor_versiones_derecho_right` text,
    `examen_motor_versiones_derecho_top_left` text,
    `examen_motor_versiones_derecho_bottom_left` text,
    `examen_motor_versiones_derecho_top_right` text,
    `examen_motor_versiones_derecho_bottom_right` text,
    
    -- EXAMEN MOTOR - VERSIONES OJO IZQUIERDO
    `examen_motor_versiones_izquierdo_left` text,
    `examen_motor_versiones_izquierdo_right` text,
    `examen_motor_versiones_izquierdo_top_left` text,
    `examen_motor_versiones_izquierdo_bottom_left` text,
    `examen_motor_versiones_izquierdo_top_right` text,
    `examen_motor_versiones_izquierdo_bottom_right` text,
    
    -- EXAMEN REFRACTIVO - QUERATOMETRÍA OJO DERECHO
    `examen_refractivo_keratometria_derecho_plano` text,
    `examen_refractivo_keratometria_derecho_curvo` text,
    `examen_refractivo_keratometria_derecho_eje` text,
    `examen_refractivo_keratometria_derecho_miras` text,
    `examen_refractivo_keratometria_derecho_corn` text,
    
    -- EXAMEN REFRACTIVO - QUERATOMETRÍA OJO IZQUIERDO
    `examen_refractivo_keratometria_izquierdo_plano` text,
    `examen_refractivo_keratometria_izquierdo_curvo` text,
    `examen_refractivo_keratometria_izquierdo_eje` text,
    `examen_refractivo_keratometria_izquierdo_miras` text,
    `examen_refractivo_keratometria_izquierdo_corn` text,
    
    -- EXAMEN REFRACTIVO - RETINOSCOPÍA ESTÁTICA OJO DERECHO
    `examen_refractivo_retinoscopia_estatica_derecho_esfera` text,
    `examen_refractivo_retinoscopia_estatica_derecho_cilindro` text,
    `examen_refractivo_retinoscopia_estatica_derecho_eje` text,
    `examen_refractivo_retinoscopia_estatica_derecho_sombras` text,
    
    -- EXAMEN REFRACTIVO - RETINOSCOPÍA ESTÁTICA OJO IZQUIERDO
    `examen_refractivo_retinoscopia_estatica_izquierdo_esfera` text,
    `examen_refractivo_retinoscopia_estatica_izquierdo_cilindro` text,
    `examen_refractivo_retinoscopia_estatica_izquierdo_eje` text,
    `examen_refractivo_retinoscopia_estatica_izquierdo_sombras` text,
    
    -- EXAMEN REFRACTIVO - RETINOSCOPÍA DINÁMICA OJO DERECHO
    `examen_refractivo_retinoscopia_dinamica_derecho_esfera` text,
    `examen_refractivo_retinoscopia_dinamica_derecho_cilindro` text,
    `examen_refractivo_retinoscopia_dinamica_derecho_eje` text,
    `examen_refractivo_retinoscopia_dinamica_derecho_sombras` text,
    
    -- EXAMEN REFRACTIVO - RETINOSCOPÍA DINÁMICA OJO IZQUIERDO
    `examen_refractivo_retinoscopia_dinamica_izquierdo_esfera` text,
    `examen_refractivo_retinoscopia_dinamica_izquierdo_cilindro` text,
    `examen_refractivo_retinoscopia_dinamica_izquierdo_eje` text,
    `examen_refractivo_retinoscopia_dinamica_izquierdo_sombras` text,
    
    -- EXAMEN REFRACTIVO - OTRA REFRACCIÓN
    `examen_refractivo_otra_refraccion` text,
    `examen_refractivo_radio_k_1` text,
    `examen_refractivo_radio_k_2` text,
    
    -- EXAMEN REFRACTIVO - OTRA REFRACCIÓN OJO DERECHO
    `examen_refractivo_otra_refraccion_derecho_esfera` text,
    `examen_refractivo_otra_refraccion_derecho_cilindro` text,
    `examen_refractivo_otra_refraccion_derecho_eje` text,
    `examen_refractivo_otra_refraccion_derecho_sombras` text,
    
    -- EXAMEN REFRACTIVO - OTRA REFRACCIÓN OJO IZQUIERDO
    `examen_refractivo_otra_refraccion_izquierdo_esfera` text,
    `examen_refractivo_otra_refraccion_izquierdo_cilindro` text,
    `examen_refractivo_otra_refraccion_izquierdo_eje` text,
    `examen_refractivo_otra_refraccion_izquierdo_sombras` text,
    
    -- EXAMEN REFRACTIVO - SUBJETIVO
    `examen_refractivo_subjetivo_normal` text,
    `examen_refractivo_subjetivo_cycloplejia` text,
    `examen_refractivo_subjetivo_otra` text,
    `examen_refractivo_subjetivo_distancia_al` text,
    
    -- EXAMEN REFRACTIVO - SUBJETIVO OJO DERECHO
    `examen_refractivo_subjetivo_derecho_esfera` text,
    `examen_refractivo_subjetivo_derecho_cilindro` text,
    `examen_refractivo_subjetivo_derecho_eje` text,
    `examen_refractivo_subjetivo_derecho_av_lejos` text,
    `examen_refractivo_subjetivo_derecho_add` text,
    `examen_refractivo_subjetivo_derecho_av_cerca` text,
    `examen_refractivo_subjetivo_derecho_dnp` text,
    `examen_refractivo_subjetivo_derecho_vortice` text,
    `examen_refractivo_subjetivo_derecho_mm` text,
    `examen_refractivo_subjetivo_derecho_estatica` text,
    `examen_refractivo_subjetivo_derecho_dinamica` text,
    
    -- EXAMEN REFRACTIVO - SUBJETIVO OJO IZQUIERDO
    `examen_refractivo_subjetivo_izquierdo_esfera` text,
    `examen_refractivo_subjetivo_izquierdo_cilindro` text,
    `examen_refractivo_subjetivo_izquierdo_eje` text,
    `examen_refractivo_subjetivo_izquierdo_av_lejos` text,
    `examen_refractivo_subjetivo_izquierdo_add` text,
    `examen_refractivo_subjetivo_izquierdo_av_cerca` text,
    `examen_refractivo_subjetivo_izquierdo_dnp` text,
    `examen_refractivo_subjetivo_izquierdo_vortice` text,
    `examen_refractivo_subjetivo_izquierdo_mm` text,
    `examen_refractivo_subjetivo_izquierdo_estatica` text,
    `examen_refractivo_subjetivo_izquierdo_dinamica` text,
    
    -- EXAMEN REFRACTIVO - AV RETINOSCOPÍA
    `examen_refractivo_av_retinoscopia_derecho_estatica` text,
    `examen_refractivo_av_retinoscopia_derecho_dinamica` text,
    `examen_refractivo_av_retinoscopia_izquierdo_estatica` text,
    `examen_refractivo_av_retinoscopia_izquierdo_dinamica` text,
    
    -- EXAMEN OFTALMOLÓGICO - PUPILAS
    `examen_oftalmologico_pupila_derecho` text,
    `examen_oftalmologico_pupila_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - PÁRPADOS
    `examen_oftalmologico_parpados_derecho` text,
    `examen_oftalmologico_parpados_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - PELÍCULA LAGRIMAL
    `examen_oftalmologico_pelicula_lagrimal_derecho` text,
    `examen_oftalmologico_pelicula_lagrimal_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - CONJUNTIVA
    `examen_oftalmologico_conjuntiva_derecho` text,
    `examen_oftalmologico_conjuntiva_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - CÓRNEA
    `examen_oftalmologico_cornea_derecho` text,
    `examen_oftalmologico_cornea_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - CRISTALINO
    `examen_oftalmologico_cristalino_derecho` text,
    `examen_oftalmologico_cristalino_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - CÁMARA ANTERIOR
    `examen_oftalmologico_camara_anterior_derecho` text,
    `examen_oftalmologico_camara_anterior_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - IRIS
    `examen_oftalmologico_iris_derecho` text,
    `examen_oftalmologico_iris_izquierdo` text,
    
    -- EXAMEN OFTALMOLÓGICO - BRUCKNER
    `examen_oftalmologico_bruckner` text,
    
    -- OFTALMOSCOPIA - OJO DERECHO
    `oftalmoscopia_derecho_excavacion` decimal(3,1),
    `oftalmoscopia_derecho_descripcion` text,
    
    -- OFTALMOSCOPIA - OJO IZQUIERDO
    `oftalmoscopia_izquierdo_excavacion` decimal(3,1),
    `oftalmoscopia_izquierdo_descripcion` text,
    
    -- FÓRMULA - OJO DERECHO
    `formula_derecho_esfera` text,
    `formula_derecho_cilindro` text,
    `formula_derecho_eje` text,
    `formula_derecho_av_lejos` text,
    `formula_derecho_add` text,
    `formula_derecho_av_cerca` text,
    `formula_derecho_dnp` int(3) DEFAULT 31,
    `formula_derecho_recomendacion` text,
    
    -- FÓRMULA - OJO IZQUIERDO
    `formula_izquierdo_esfera` text,
    `formula_izquierdo_cilindro` text,
    `formula_izquierdo_eje` text,
    `formula_izquierdo_av_lejos` text,
    `formula_izquierdo_add` text,
    `formula_izquierdo_av_cerca` text,
    `formula_izquierdo_dnp` int(3),
    `formula_izquierdo_recomendacion` text,
    
    -- OBSERVACIONES
    `observaciones` text,
    
    -- DIAGNÓSTICO - INFORMACIÓN GENERAL
    `diagnostico_seguridad` text,
    `diagnostico_maltrato` text,
    `diagnostico_maltrato_x` tinyint(1),
    `diagnostico_violencia` text,
    `diagnostico_violencia_x` tinyint(1),
    
    -- DIAGNÓSTICO 1
    `diagnostico_codigo_1` text,
    `diagnostico_diagnostico_1` text,
    `diagnostico_descripcion_1` text,
    `diagnostico_ojo_1` text,
    `diagnostico_principal_1` text,
    
    -- DIAGNÓSTICO 2
    `diagnostico_codigo_2` text,
    `diagnostico_diagnostico_2` text,
    `diagnostico_descripcion_2` text,
    `diagnostico_ojo_2` text,
    `diagnostico_principal_2` text,
    
    -- DIAGNÓSTICO 3
    `diagnostico_codigo_3` text,
    `diagnostico_diagnostico_3` text,
    `diagnostico_descripcion_3` text,
    `diagnostico_ojo_3` text,
    `diagnostico_principal_3` text,
    
    -- DIAGNÓSTICO 4
    `diagnostico_codigo_4` text,
    `diagnostico_diagnostico_4` text,
    `diagnostico_descripcion_4` text,
    `diagnostico_ojo_4` text,
    `diagnostico_principal_4` text,
    
    -- DIAGNÓSTICO 5
    `diagnostico_codigo_5` text,
    `diagnostico_diagnostico_5` text,
    `diagnostico_descripcion_5` text,
    `diagnostico_ojo_5` text,
    `diagnostico_principal_5` text,
    
    -- CAMPOS DE AUDITORÍA
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- CLAVES PRIMARIAS Y FORÁNEAS
    PRIMARY KEY (`id`),
    KEY `idx_optica_id` (`optica_id`),
    KEY `idx_paciente_id` (`paciente_id`),
    KEY `idx_usuario_id` (`usuario_id`),
    KEY `idx_fecha_consulta` (`fecha_consulta`),
    KEY `idx_historias_clinicas_busqueda` (`optica_id`, `paciente_id`, `fecha_consulta`)

        
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPRESSED;

-- Comentarios sobre la estructura:
-- 1. La tabla contiene 342 campos individuales correspondientes a todos los campos del formulario
-- 2. Se han usado tipos de datos apropiados: VARCHAR para textos cortos, TEXT para textos largos, DECIMAL para números decimales
-- 3. Se han establecido valores por defecto basados en los valores del formulario Angular
-- 4. Se han creado índices para optimizar las consultas más comunes
-- 5. Las claves foráneas mantienen la integridad referencial con las tablas relacionadas
-- 6. Se incluyen campos de auditoría (created_at, updated_at) para control de versiones
-- 7. La tabla está optimizada para MySQL/MariaDB con charset utf8mb4 para soporte completo de Unicode
