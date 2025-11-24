@echo off
echo Ejecutando migracion de campos de pacientes...
mysql -u root -p opticast < migration_add_patient_fields.sql
echo Migracion completada.
pause
