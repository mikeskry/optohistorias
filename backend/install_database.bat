@echo off
echo ========================================
echo Instalando Base de Datos ÓpticaCast
echo ========================================
echo.

REM Verificar si MySQL está disponible
mysql --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: MySQL no está disponible en el PATH
    echo Asegúrate de que MySQL esté instalado y configurado
    pause
    exit /b 1
)

echo Conectando a MySQL...
echo.

REM Ejecutar el script SQL
mysql -u root -p < database\opticast.sql

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo Base de datos instalada exitosamente!
    echo ========================================
    echo.
    echo Credenciales por defecto:
    echo Usuario: admin
    echo Contraseña: password
    echo.
    echo IMPORTANTE: Cambia la contraseña del admin en producción
    echo.
) else (
    echo.
    echo ERROR: No se pudo instalar la base de datos
    echo Verifica las credenciales de MySQL
    echo.
)

pause



