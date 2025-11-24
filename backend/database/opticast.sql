-- Script de creación de la base de datos ÓpticaCast
-- Ejecutar este script en MySQL/MariaDB

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS `opticast` 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `opticast`;

-- Tabla de ópticas
CREATE TABLE IF NOT EXISTS `opticas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL UNIQUE,
    `telefono` varchar(20) DEFAULT NULL,
    `direccion` text DEFAULT NULL,
    `activo` tinyint(1) NOT NULL DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_email` (`email`),
    KEY `idx_activo` (`activo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL UNIQUE,
    `password` varchar(255) NOT NULL,
    `nombre` varchar(100) NOT NULL,
    `apellidos` varchar(100) NOT NULL,
    `email` varchar(255) NOT NULL UNIQUE,
    `rol` enum('admin','usuario') NOT NULL DEFAULT 'usuario',
    `optica_id` int(11) DEFAULT NULL,
    `primer_acceso` tinyint(1) NOT NULL DEFAULT 1,
    `activo` tinyint(1) NOT NULL DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_username` (`username`),
    KEY `idx_email` (`email`),
    KEY `idx_optica_id` (`optica_id`),
    KEY `idx_rol` (`rol`),
    KEY `idx_activo` (`activo`),
    CONSTRAINT `fk_usuarios_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de pacientes
CREATE TABLE IF NOT EXISTS `pacientes` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `documento` varchar(20) NOT NULL,
    `tipo_documento` enum('DNI','Pasaporte','Carnet de Extranjería') NOT NULL DEFAULT 'DNI',
    `nombre` varchar(100) NOT NULL,
    `apellidos` varchar(100) NOT NULL,
    `email` varchar(255) DEFAULT NULL,
    `telefono` varchar(20) DEFAULT NULL,
    `fecha_nacimiento` date NOT NULL,
    `genero` enum('M','F','O') DEFAULT NULL,
    `direccion` text DEFAULT NULL,
    `activo` tinyint(1) NOT NULL DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_documento_optica` (`documento`, `optica_id`),
    KEY `idx_optica_id` (`optica_id`),
    KEY `idx_nombre_apellidos` (`nombre`, `apellidos`),
    KEY `idx_activo` (`activo`),
    CONSTRAINT `fk_pacientes_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de historias clínicas
CREATE TABLE IF NOT EXISTS `historias` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `paciente_id` int(11) NOT NULL,
    `fecha_consulta` date NOT NULL,
    `motivo_consulta` text DEFAULT NULL,
    `sintomas` text DEFAULT NULL,
    `antecedentes` text DEFAULT NULL,
    `medicamentos` text DEFAULT NULL,
    `alergias` text DEFAULT NULL,
    `av_od_lejos` decimal(3,2) DEFAULT NULL,
    `av_od_cerca` decimal(3,2) DEFAULT NULL,
    `av_oi_lejos` decimal(3,2) DEFAULT NULL,
    `av_oi_cerca` decimal(3,2) DEFAULT NULL,
    `esfera_od` decimal(4,2) DEFAULT NULL,
    `cilindro_od` decimal(4,2) DEFAULT NULL,
    `eje_od` int(3) DEFAULT NULL,
    `esfera_oi` decimal(4,2) DEFAULT NULL,
    `cilindro_oi` decimal(4,2) DEFAULT NULL,
    `eje_oi` int(3) DEFAULT NULL,
    `adicion` decimal(3,2) DEFAULT NULL,
    `observaciones` text DEFAULT NULL,
    `diagnostico` text DEFAULT NULL,
    `tratamiento` text DEFAULT NULL,
    `proxima_cita` date DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_optica_id` (`optica_id`),
    KEY `idx_paciente_id` (`paciente_id`),
    KEY `idx_fecha_consulta` (`fecha_consulta`),
    KEY `idx_proxima_cita` (`proxima_cita`),
    CONSTRAINT `fk_historias_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_historias_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de citas
CREATE TABLE IF NOT EXISTS `citas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `paciente_id` int(11) NOT NULL,
    `fecha` date NOT NULL,
    `hora` time NOT NULL,
    `duracion` int(3) DEFAULT 30 COMMENT 'duración en minutos',
    `notas` text DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_optica_id` (`optica_id`),
    KEY `idx_paciente_id` (`paciente_id`),
    KEY `idx_fecha_hora` (`fecha`, `hora`),
    KEY `idx_fecha` (`fecha`),
    CONSTRAINT `fk_citas_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_citas_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de firmas de ópticas
CREATE TABLE IF NOT EXISTS `firmas_optica` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `optica_id` int(11) NOT NULL,
    `ruta_archivo` varchar(255) NOT NULL,
    `nombre_archivo` varchar(255) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_optica_id` (`optica_id`),
    KEY `idx_optica_id` (`optica_id`),
    CONSTRAINT `fk_firmas_optica` FOREIGN KEY (`optica_id`) REFERENCES `opticas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar usuario administrador del sistema
INSERT INTO `opticas` (`nombre`, `email`, `telefono`, `direccion`, `activo`) VALUES
('ÓpticaCast System', 'admin@opticast.com', '+34 900 000 000', 'Sistema Central', 1);

INSERT INTO `usuarios` (`username`, `password`, `nombre`, `apellidos`, `email`, `rol`, `optica_id`, `primer_acceso`, `activo`) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrador', 'Sistema', 'admin@opticast.com', 'admin', 1, 0, 1);

-- Nota: La contraseña del admin es 'password' (hash bcrypt)
-- Cambiar en producción por una contraseña segura

-- Crear índices adicionales para optimización
CREATE INDEX `idx_pacientes_busqueda` ON `pacientes` (`optica_id`, `nombre`, `apellidos`, `documento`);
CREATE INDEX `idx_historias_busqueda` ON `historias` (`optica_id`, `paciente_id`, `fecha_consulta`);
CREATE INDEX `idx_citas_busqueda` ON `citas` (`optica_id`, `fecha`, `hora`);

-- Comentarios sobre la estructura:
-- 1. Todas las tablas usan InnoDB para soporte de transacciones y claves foráneas
-- 2. Se han definido índices apropiados para las consultas más comunes
-- 3. Las claves foráneas están configuradas con CASCADE para mantener integridad
-- 4. Se incluye un usuario administrador por defecto para el primer acceso
-- 5. Todas las fechas usan el tipo DATE para mejor rendimiento
-- 6. Los campos de texto usan TEXT para permitir contenido largo
-- 7. Se han definido restricciones UNIQUE apropiadas para evitar duplicados



