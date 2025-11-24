-- Script SQL normalizado para crear tablas de historias clínicas (SIN VALORES POR DEFECTO)
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
    `motivo_consulta` text,
    `observaciones` text,
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
    `tipo_examen` varchar(100),
    `anamnesis` text,
    `ultima_valoracion_optometria` text,
    `ocupacion_profesion` text,
    `antecedentes_familiares` text,
    `antecedentes_personales` text,
    `antecedentes_laborales` text,
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
    `esfera` varchar(20),
    `cilindro` varchar(20),
    `eje` varchar(20),
    `adicion` varchar(20),
    `prisma` varchar(20),
    `observaciones` text,
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
    `test_usado` varchar(50),
    `distancia` varchar(50),
    `descripcion` varchar(50),
    `ojo` enum('derecho','izquierdo','ambos') NOT NULL,
    `condicion` enum('sin_correccion','con_correccion','pin_hole') NOT NULL,
    `valor` varchar(20),
    `observacion` text,
    `fila` int(2),
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
    `mano_dominante` varchar(20),
    `ojo_dominante` varchar(20),
    `punto_proximo_valor` varchar(20),
    `dp_lejos` varchar(20),
    `dp_cerca` varchar(20),
    `ducciones_derecho` varchar(50),
    `ducciones_izquierdo` varchar(50),
    `kappa_derecho` varchar(20),
    `kappa_izquierdo` varchar(20),
    `hirschberg` varchar(100),
    `test_utilizado` varchar(50),
    `cover_test_con_correccion_horizontal` varchar(20),
    `cover_test_con_correccion_vertical` varchar(20),
    `cover_test_sin_correccion_horizontal` varchar(20),
    `cover_test_sin_correccion_vertical` varchar(20),
    `prisma_con_correccion_horizontal` varchar(20),
    `prisma_con_correccion_vertical` varchar(20),
    `prisma_sin_correccion_horizontal` varchar(20),
    `prisma_sin_correccion_vertical` varchar(20),
    `observaciones` text,
    `por_confirmar_derecho` varchar(50),
    `por_confirmar_izquierdo` varchar(50),
    `estereopsis_tipo` varchar(50),
    `estereopsis_resultado` varchar(20),
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
    `valor` varchar(10),
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
    `ojo` enum('derecho','izquierdo'),
    `plano` varchar(20),
    `curvo` varchar(20),
    `eje` varchar(20),
    `miras` varchar(50),
    `corn` varchar(20),
    `esfera` varchar(20),
    `cilindro` varchar(20),
    `sombras` varchar(50),
    `av_lejos` varchar(20),
    `add` varchar(20),
    `av_cerca` varchar(20),
    `dnp` varchar(20),
    `vortice` varchar(20),
    `mm` varchar(20),
    `estatica` varchar(20),
    `dinamica` varchar(20),
    `normal` varchar(10),
    `cycloplejia` varchar(10),
    `otra` varchar(20),
    `distancia_al` varchar(20),
    `radio_k_1` varchar(20),
    `radio_k_2` varchar(20),
    `otra_refraccion` varchar(100),
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
    `ojo` enum('derecho','izquierdo'),
    `valor` varchar(100),
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
    `excavacion` decimal(3,1),
    `descripcion` text,
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
    `esfera` varchar(20),
    `cilindro` varchar(20),
    `eje` varchar(20),
    `av_lejos` varchar(20),
    `add` varchar(20),
    `av_cerca` varchar(20),
    `dnp` int(3),
    `recomendacion` text,
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
    `codigo` varchar(20),
    `diagnostico` varchar(100),
    `descripcion` text,
    `ojo` varchar(20),
    `principal` varchar(20),
    `orden` int(2),
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
    `seguridad` varchar(10),
    `maltrato` varchar(10),
    `maltrato_x` tinyint(1),
    `violencia` varchar(10),
    `violencia_x` tinyint(1),
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

6. **SIN VALORES POR DEFECTO**:
   - Los valores se manejan desde la aplicación
   - Mayor control sobre los datos
   - Flexibilidad para diferentes casos de uso

USO RECOMENDADO:
- Para consultas completas: JOIN de todas las tablas relacionadas
- Para consultas específicas: Solo las tablas necesarias
- Para reportes: Vistas materializadas o consultas optimizadas
*/
