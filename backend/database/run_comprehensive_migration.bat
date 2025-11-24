@echo off
echo Ejecutando migracion completa de historias clinicas...
echo.

cd /d "C:\wamp64\bin\mysql\mysql8.0.31\bin"

mysql -u root -p opticast < "C:\wamp64\www\opticast\backend\database\migration_comprehensive_clinical_history.sql"

if %errorlevel% equ 0 (
    echo.
    echo Migracion completada exitosamente!
    echo La tabla historias_clinicas ha sido creada con todos los campos necesarios.
) else (
    echo.
    echo Error al ejecutar la migracion. Verifique los logs.
)

pause
