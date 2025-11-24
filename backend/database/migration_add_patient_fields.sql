-- Migración para agregar nuevos campos a la tabla pacientes
-- Ejecutar este script en MySQL/MariaDB

USE `opticast`;

-- Agregar nuevos campos a la tabla pacientes
ALTER TABLE `pacientes` 
ADD COLUMN `rh` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') DEFAULT NULL AFTER `genero`,
ADD COLUMN `nombre_acudiente` varchar(255) DEFAULT NULL AFTER `rh`,
ADD COLUMN `telefono_acudiente` varchar(20) DEFAULT NULL AFTER `nombre_acudiente`;

-- Eliminar el campo direccion
ALTER TABLE `pacientes` DROP COLUMN `direccion`;
