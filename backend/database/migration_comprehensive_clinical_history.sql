-- Migración completa para historias clínicas con todos los campos de las imágenes
-- Ejecutar este script en MySQL/MariaDB

USE `opticast`;

-- Crear tabla de historias clínicas si no existe
CREATE TABLE IF NOT EXISTS `historias_clinicas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `paciente_id` int(11) NOT NULL,
    `profesional_id` int(11) NOT NULL,
    `fecha_consulta` date NOT NULL,
    
    -- CUESTIONARIO
    `motivo_consulta` text DEFAULT NULL,
    `tipo_examen` varchar(100) DEFAULT 'EXAMEN DE OPTOMETRIA',
    `anamnesis` text DEFAULT NULL,
    `ultima_valoracion_optometria` text DEFAULT NULL,
    `antecedentes_familiares` text DEFAULT 'NO REFIERE',
    `antecedentes_personales` text DEFAULT 'NO REFIERE',
    `antecedentes_laborales` text DEFAULT 'NO REFIERE',
    `ocupacion_profesion` text DEFAULT NULL,
    
    -- LENSOMETRÍA
    `lensometria_formula_lejos` json DEFAULT NULL, -- {derecho: {esfera, cilindro, eje, adicion, prisma}, izquierdo: {...}}
    `lensometria_formula_cerca` json DEFAULT NULL, -- {derecho: {esfera, cilindro, eje, adicion}, izquierdo: {...}}
    `lensometria_observaciones` text DEFAULT NULL,
    
    -- AGUDEZA VISUAL
    `agudeza_visual_lejos` json DEFAULT NULL, -- {test_usado: {distancia, descripcion}, lateralidad: {sin_correccion: {derecho, izquierdo, ambos}, con_correccion: {derecho, izquierdo, ambos}}}
    `agudeza_visual_cerca` json DEFAULT NULL, -- {test_usado: {distancia, descripcion}, lateralidad: {sin_correccion: {derecho, izquierdo, ambos}, con_correccion: {derecho, izquierdo, ambos}, pin_hole: {derecho, izquierdo}}}
    
    -- EXAMEN MOTOR
    `examen_motor` json DEFAULT NULL, -- {dominancia: {mano, ojo}, punto_proximo_convergencia: {valor, dp_lejos, dp_cerca}, ducciones: {ojo_derecho, ojo_izquierdo}, versiones: {ojo_derecho, ojo_izquierdo}, kappa: {ojo_derecho, ojo_izquierdo}, hirschberg, medicion_desviacion: {...}, test_color: {ojo_derecho, ojo_izquierdo}, estereopsis: {tipo_test, resultado}}
    
    -- EXAMEN REFRACTIVO
    `examen_refractivo` json DEFAULT NULL, -- {keratometria: {derecho: {plano, curvo, eje, miras, corn}, izquierdo: {...}}, retinoscopia_estatica: {derecho: {esfera, cilindro, eje, sombras}, izquierdo: {...}}, retinoscopia_dinamica: {...}, otra_refraccion: {...}, subjetivo: {...}, distancia_vertice: {derecho, izquierdo}, av_retinoscopia: {estatica: {derecho, izquierdo}, dinamica: {derecho, izquierdo}}}
    
    -- EXAMEN OFTALMOLÓGICO
    `examen_oftalmologico` json DEFAULT NULL, -- {pupila: {derecho, izquierdo}, parpados: {derecho, izquierdo}, pelicula_lagrimal: {derecho, izquierdo}, conjuntiva: {derecho, izquierdo}, cornea: {derecho, izquierdo}, cristalino: {derecho, izquierdo}, camara_anterior: {derecho, izquierdo}, iris: {derecho, izquierdo}, bruckner}
    
    -- OFTALMOSCOPIA
    `oftalmoscopia` json DEFAULT NULL, -- {fondo_ojo_derecho: {excavacion, descripcion}, fondo_ojo_izquierdo: {excavacion, descripcion}}
    
    -- FORMULA FINAL
    `formula_final` json DEFAULT NULL, -- {derecho: {esfera, cilindro, eje, av_lejos, add, av_cerca, dnp, recomendacion}, izquierdo: {...}}
    
    -- DIAGNÓSTICO
    `diagnostico` json DEFAULT NULL, -- Array de diagnósticos con {codigo, diagnostico, descripcion, ojo, principal}
    
    -- OBSERVACIONES
    `observaciones` text DEFAULT NULL,
    
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    KEY `idx_optica_id` (`optica_id`),
    KEY `idx_paciente_id` (`paciente_id`),
    KEY `idx_profesional_id` (`profesional_id`),
    KEY `idx_fecha_consulta` (`fecha_consulta`),
    CONSTRAINT `fk_historias_clinicas_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_historias_clinicas_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_historias_clinicas_profesional` FOREIGN KEY (`profesional_id`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear índices adicionales para optimización
CREATE INDEX `idx_historias_clinicas_busqueda` ON `historias_clinicas` (`optica_id`, `paciente_id`, `fecha_consulta`);
