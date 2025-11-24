-- Script para agregar campos de mediciones oculares (chulitos verdes) a la tabla historias_clinicas_examen_motor
-- Ejecutar este script en la base de datos para agregar los nuevos campos

ALTER TABLE historias_clinicas_examen_motor 
ADD COLUMN versiones_derecho_left VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_derecho_right VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_derecho_top_left VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_derecho_bottom_left VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_derecho_top_right VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_derecho_bottom_right VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_derecho_linea_vertical VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_izquierdo_left VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_izquierdo_right VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_izquierdo_top_left VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_izquierdo_bottom_left VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_izquierdo_top_right VARCHAR(10) DEFAULT '',
ADD COLUMN versiones_izquierdo_bottom_right VARCHAR(10) DEFAULT '';

-- Actualizar campos existentes para que tengan valores por defecto vacíos
UPDATE historias_clinicas_examen_motor 
SET 
  versiones_derecho_left = '',
  versiones_derecho_right = '',
  versiones_derecho_top_left = '',
  versiones_derecho_bottom_left = '',
  versiones_derecho_top_right = '',
  versiones_derecho_bottom_right = '',
  versiones_derecho_linea_vertical = '',
  versiones_izquierdo_left = '',
  versiones_izquierdo_right = '',
  versiones_izquierdo_top_left = '',
  versiones_izquierdo_bottom_left = '',
  versiones_izquierdo_top_right = '',
  versiones_izquierdo_bottom_right = ''
WHERE versiones_derecho_left IS NULL;
