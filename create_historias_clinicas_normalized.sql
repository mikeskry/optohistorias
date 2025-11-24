-- Script SQL normalizado para crear tablas de historias clínicas
-- Ejecutar este script en MySQL/MariaDB

USE `opticast`;

-- =============================================
-- TABLA PRINCIPAL: HISTORIAS CLÍNICAS
-- =============================================
CREATE TABLE IF NOT EXISTS `historias_clinicas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `paciente_id` int(11) NOT NULL,
    `usuario_id` int(11) NOT NULL,
    `fecha_consulta` date NOT NULL,
    `motivo_consulta` text DEFAULT NULL,
    `observaciones` text DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    KEY `idx_optica_id` (`optica_id`),
    KEY `idx_paciente_id` (`paciente_id`),
    KEY `idx_usuario_id` (`usuario_id`),
    KEY `idx_fecha_consulta` (`fecha_consulta`),
    
    CONSTRAINT `fk_historias_clinicas_optica` 
        FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_historias_clinicas_paciente` 
        FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_historias_clinicas_usuario` 
        FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) 
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: CUESTIONARIO
-- =============================================
CREATE TABLE IF NOT EXISTS `cuestionario` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `tipo_examen` varchar(100) DEFAULT 'EXAMEN DE OPTROMETRIA',
    `anamnesis` text DEFAULT NULL,
    `ultima_valoracion_optometria` text DEFAULT NULL,
    `ocupacion_profesion` text DEFAULT NULL,
    `antecedentes_familiares` text DEFAULT 'NO REFIERE',
    `antecedentes_personales` text DEFAULT 'NO REFIERE',
    `antecedentes_laborales` text DEFAULT 'NO REFIERE',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_historia_clinica` (`historia_clinica_id`),
    CONSTRAINT `fk_cuestionario_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: LENSOMETRÍA
-- =============================================
CREATE TABLE IF NOT EXISTS `lensometria` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `tipo` enum('lejos','cerca') NOT NULL,
    `ojo` enum('derecho','izquierdo') NOT NULL,
    `esfera` varchar(20) DEFAULT NULL,
    `cilindro` varchar(20) DEFAULT NULL,
    `eje` varchar(20) DEFAULT NULL,
    `adicion` varchar(20) DEFAULT NULL,
    `prisma` varchar(20) DEFAULT NULL,
    `observaciones` text DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_historia_tipo_ojo` (`historia_clinica_id`, `tipo`, `ojo`),
    CONSTRAINT `fk_lensometria_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: AGUDEZA VISUAL
-- =============================================
CREATE TABLE IF NOT EXISTS `agudeza_visual` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `tipo` enum('lejos','cerca') NOT NULL,
    `test_usado` varchar(50) DEFAULT 'LETRAS',
    `distancia` varchar(50) DEFAULT NULL,
    `descripcion` varchar(50) DEFAULT NULL,
    `ojo` enum('derecho','izquierdo','ambos') NOT NULL,
    `condicion` enum('sin_correccion','con_correccion','pin_hole') NOT NULL,
    `valor` varchar(20) DEFAULT NULL,
    `observacion` text DEFAULT NULL,
    `fila` int(2) DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    KEY `idx_historia_tipo_ojo` (`historia_clinica_id`, `tipo`, `ojo`),
    CONSTRAINT `fk_agudeza_visual_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: EXAMEN MOTOR
-- =============================================
CREATE TABLE IF NOT EXISTS `examen_motor` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `mano_dominante` varchar(20) DEFAULT 'DERECHA',
    `ojo_dominante` varchar(20) DEFAULT 'DERECHO',
    `punto_proximo_valor` varchar(20) DEFAULT '1 cm',
    `dp_lejos` varchar(20) DEFAULT '30/30',
    `dp_cerca` varchar(20) DEFAULT '30/30',
    `ducciones_derecho` varchar(50) DEFAULT 'Normal',
    `ducciones_izquierdo` varchar(50) DEFAULT 'Normal',
    `kappa_derecho` varchar(20) DEFAULT '0°',
    `kappa_izquierdo` varchar(20) DEFAULT '0°',
    `hirschberg` varchar(100) DEFAULT 'CENTRADO AMBOS OJOS',
    `test_utilizado` varchar(50) DEFAULT 'COVER TEST PRISMA',
    `cover_test_con_correccion_horizontal` varchar(20) DEFAULT 'ORTHO',
    `cover_test_con_correccion_vertical` varchar(20) DEFAULT 'ORTHO',
    `cover_test_sin_correccion_horizontal` varchar(20) DEFAULT 'ORTHO',
    `cover_test_sin_correccion_vertical` varchar(20) DEFAULT 'ORTHO',
    `prisma_con_correccion_horizontal` varchar(20) DEFAULT 'ORTHO',
    `prisma_con_correccion_vertical` varchar(20) DEFAULT 'ORTHO',
    `prisma_sin_correccion_horizontal` varchar(20) DEFAULT 'ORTHO',
    `prisma_sin_correccion_vertical` varchar(20) DEFAULT 'ORTHO',
    `observaciones` text DEFAULT 'TOMADO CON OBJETO REAL',
    `por_confirmar_derecho` varchar(50) DEFAULT 'POR CONFIRMAR',
    `por_confirmar_izquierdo` varchar(50) DEFAULT 'POR CONFIRMAR',
    `estereopsis_tipo` varchar(50) DEFAULT 'TIMUS',
    `estereopsis_resultado` varchar(20) DEFAULT '-',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_historia_clinica` (`historia_clinica_id`),
    CONSTRAINT `fk_examen_motor_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: VERSIONES (EXAMEN MOTOR)
-- =============================================
CREATE TABLE IF NOT EXISTS `versiones` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `examen_motor_id` int(11) NOT NULL,
    `ojo` enum('derecho','izquierdo') NOT NULL,
    `direccion` enum('left','right','top_left','bottom_left','top_right','bottom_right') NOT NULL,
    `valor` varchar(10) DEFAULT '✓',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_examen_ojo_direccion` (`examen_motor_id`, `ojo`, `direccion`),
    CONSTRAINT `fk_versiones_examen_motor` 
        FOREIGN KEY (`examen_motor_id`) REFERENCES `examen_motor` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: EXAMEN REFRACTIVO
-- =============================================
CREATE TABLE IF NOT EXISTS `examen_refractivo` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `tipo` enum('keratometria','retinoscopia_estatica','retinoscopia_dinamica','otra_refraccion','subjetivo','av_retinoscopia') NOT NULL,
    `ojo` enum('derecho','izquierdo') DEFAULT NULL,
    `plano` varchar(20) DEFAULT NULL,
    `curvo` varchar(20) DEFAULT NULL,
    `eje` varchar(20) DEFAULT NULL,
    `miras` varchar(50) DEFAULT NULL,
    `corn` varchar(20) DEFAULT NULL,
    `esfera` varchar(20) DEFAULT NULL,
    `cilindro` varchar(20) DEFAULT NULL,
    `sombras` varchar(50) DEFAULT NULL,
    `av_lejos` varchar(20) DEFAULT NULL,
    `add` varchar(20) DEFAULT NULL,
    `av_cerca` varchar(20) DEFAULT NULL,
    `dnp` varchar(20) DEFAULT NULL,
    `vortice` varchar(20) DEFAULT NULL,
    `mm` varchar(20) DEFAULT NULL,
    `estatica` varchar(20) DEFAULT NULL,
    `dinamica` varchar(20) DEFAULT NULL,
    `normal` varchar(10) DEFAULT NULL,
    `cycloplejia` varchar(10) DEFAULT NULL,
    `otra` varchar(20) DEFAULT NULL,
    `distancia_al` varchar(20) DEFAULT NULL,
    `radio_k_1` varchar(20) DEFAULT NULL,
    `radio_k_2` varchar(20) DEFAULT NULL,
    `otra_refraccion` varchar(100) DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    KEY `idx_historia_tipo_ojo` (`historia_clinica_id`, `tipo`, `ojo`),
    CONSTRAINT `fk_examen_refractivo_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: EXAMEN OFTALMOLÓGICO
-- =============================================
CREATE TABLE IF NOT EXISTS `examen_oftalmologico` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `estructura` enum('pupila','parpados','pelicula_lagrimal','conjuntiva','cornea','cristalino','camara_anterior','iris','bruckner') NOT NULL,
    `ojo` enum('derecho','izquierdo') DEFAULT NULL,
    `valor` varchar(100) DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_historia_estructura_ojo` (`historia_clinica_id`, `estructura`, `ojo`),
    CONSTRAINT `fk_examen_oftalmologico_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: OFTALMOSCOPIA
-- =============================================
CREATE TABLE IF NOT EXISTS `oftalmoscopia` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `ojo` enum('derecho','izquierdo') NOT NULL,
    `excavacion` decimal(3,1) DEFAULT 0.3,
    `descripcion` text DEFAULT 'FONDO DE OJO NARANJA ROJIZO, RELACIÓN ARTERIA VENA 2/3, FIJACIÓN CENTRAL Y ESTABLE CON BRILLO FOVEOLAR PRESENTE',
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_historia_ojo` (`historia_clinica_id`, `ojo`),
    CONSTRAINT `fk_oftalmoscopia_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: FÓRMULA FINAL
-- =============================================
CREATE TABLE IF NOT EXISTS `formula_final` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `ojo` enum('derecho','izquierdo') NOT NULL,
    `esfera` varchar(20) DEFAULT 'N',
    `cilindro` varchar(20) DEFAULT '-',
    `eje` varchar(20) DEFAULT '-0',
    `av_lejos` varchar(20) DEFAULT '20/20',
    `add` varchar(20) DEFAULT '+',
    `av_cerca` varchar(20) DEFAULT '0,50 M',
    `dnp` int(3) DEFAULT 31,
    `recomendacion` text DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_historia_ojo` (`historia_clinica_id`, `ojo`),
    CONSTRAINT `fk_formula_final_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: DIAGNÓSTICOS
-- =============================================
CREATE TABLE IF NOT EXISTS `diagnosticos` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `codigo` varchar(20) DEFAULT NULL,
    `diagnostico` varchar(100) DEFAULT NULL,
    `descripcion` text DEFAULT NULL,
    `ojo` varchar(20) DEFAULT NULL,
    `principal` varchar(20) DEFAULT NULL,
    `orden` int(2) DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    KEY `idx_historia_orden` (`historia_clinica_id`, `orden`),
    CONSTRAINT `fk_diagnosticos_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- TABLA: INFORMACIÓN DE SEGURIDAD (DIAGNÓSTICO)
-- =============================================
CREATE TABLE IF NOT EXISTS `diagnostico_seguridad` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `historia_clinica_id` int(11) NOT NULL,
    `seguridad` varchar(10) DEFAULT 'NO',
    `maltrato` varchar(10) DEFAULT 'no',
    `maltrato_x` tinyint(1) DEFAULT 1,
    `violencia` varchar(10) DEFAULT 'no',
    `violencia_x` tinyint(1) DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_historia_clinica` (`historia_clinica_id`),
    CONSTRAINT `fk_diagnostico_seguridad_historia` 
        FOREIGN KEY (`historia_clinica_id`) REFERENCES `historias_clinicas` (`id`) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- ÍNDICES ADICIONALES PARA OPTIMIZACIÓN
-- =============================================
CREATE INDEX `idx_historias_clinicas_busqueda` ON `historias_clinicas` (`optica_id`, `paciente_id`, `fecha_consulta`);
CREATE INDEX `idx_agudeza_visual_busqueda` ON `agudeza_visual` (`historia_clinica_id`, `tipo`, `condicion`);
CREATE INDEX `idx_examen_refractivo_busqueda` ON `examen_refractivo` (`historia_clinica_id`, `tipo`);

-- =============================================
-- COMENTARIOS SOBRE LA NORMALIZACIÓN
-- =============================================
/*
VENTAJAS DE ESTA ESTRUCTURA NORMALIZADA:

1. **TABLA PRINCIPAL SIMPLE**: 
   - Solo campos esenciales en `historias_clinicas`
   - Fácil de mantener y consultar

2. **TABLAS ESPECIALIZADAS**:
   - `cuestionario`: Información del paciente y antecedentes
   - `lensometria`: Fórmulas de lentes (lejos/cerca, ambos ojos)
   - `agudeza_visual`: Mediciones de agudeza (flexible para múltiples filas)
   - `examen_motor`: Datos del examen motor
   - `versiones`: Gráficos de versiones (relacionado con examen_motor)
   - `examen_refractivo`: Datos refractivos (flexible para diferentes tipos)
   - `examen_oftalmologico`: Examen oftalmológico estructurado
   - `oftalmoscopia`: Datos de fondo de ojo
   - `formula_final`: Fórmula prescriptiva final
   - `diagnosticos`: Múltiples diagnósticos por historia
   - `diagnostico_seguridad`: Información de seguridad

3. **FLEXIBILIDAD**:
   - Fácil agregar nuevos campos sin modificar estructura principal
   - Soporte para múltiples valores (ej: múltiples diagnósticos)
   - Consultas más eficientes

4. **MANTENIMIENTO**:
   - Cada tabla tiene un propósito específico
   - Fácil de entender y modificar
   - Mejor rendimiento en consultas específicas

5. **ESCALABILIDAD**:
   - Estructura preparada para crecimiento
   - Índices optimizados para consultas frecuentes
   - Relaciones bien definidas

USO RECOMENDADO:
- Para consultas completas: JOIN de todas las tablas relacionadas
- Para consultas específicas: Solo las tablas necesarias
- Para reportes: Vistas materializadas o consultas optimizadas
*/
