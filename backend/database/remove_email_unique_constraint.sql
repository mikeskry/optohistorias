-- Script para eliminar la restricción UNIQUE del campo email en la tabla pacientes
-- Este script permite que múltiples pacientes tengan el mismo email

USE opticast;

-- Eliminar la restricción UNIQUE del campo email
ALTER TABLE pacientes DROP INDEX uk_email_optica;
