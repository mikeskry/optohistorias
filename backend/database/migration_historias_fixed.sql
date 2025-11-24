USE `opticast`;

CREATE TABLE IF NOT EXISTS `historias_clinicas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `paciente_id` int(11) NOT NULL,
    `profesional_id` int(11) NOT NULL,
    `fecha_consulta` date NOT NULL,
    
    `motivo_consulta` text DEFAULT NULL,
    `tipo_examen` varchar(100) DEFAULT 'EXAMEN DE OPTOMETRIA',
    `anamnesis` text DEFAULT NULL,
    `ultima_valoracion_optometria` text DEFAULT NULL,
    `antecedentes_familiares` text DEFAULT 'NO REFIERE',
    `antecedentes_personales` text DEFAULT 'NO REFIERE',
    `antecedentes_laborales` text DEFAULT 'NO REFIERE',
    `ocupacion_profesion` text DEFAULT NULL,
    
    `lensometria_formula_lejos` json DEFAULT NULL,
    `lensometria_formula_cerca` json DEFAULT NULL,
    `lensometria_observaciones` text DEFAULT NULL,
    
    `agudeza_visual_lejos` json DEFAULT NULL,
    `agudeza_visual_cerca` json DEFAULT NULL,
    
    `examen_motor` json DEFAULT NULL,
    
    `examen_refractivo` json DEFAULT NULL,
    
    `examen_oftalmologico` json DEFAULT NULL,
    
    `oftalmoscopia` json DEFAULT NULL,
    
    `formula_final` json DEFAULT NULL,
    
    `diagnostico` json DEFAULT NULL,
    
    `observaciones` text DEFAULT NULL,
    
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    KEY `idx_historias_clinicas_optica` (`optica_id`),
    KEY `idx_historias_clinicas_paciente` (`paciente_id`),
    KEY `idx_historias_clinicas_profesional` (`profesional_id`),
    KEY `idx_historias_clinicas_fecha` (`fecha_consulta`),
    
    CONSTRAINT `fk_historias_clinicas_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_historias_clinicas_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_historias_clinicas_profesional` FOREIGN KEY (`profesional_id`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_historias_clinicas_busqueda` ON `historias_clinicas` (`optica_id`, `paciente_id`, `fecha_consulta`);

