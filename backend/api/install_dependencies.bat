@echo off
echo Instalando dependencias de PHP para el sistema de reportes...
echo.

REM Verificar si composer está instalado
composer --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Composer no está instalado.
    echo Por favor instale Composer desde: https://getcomposer.org/
    pause
    exit /b 1
)

echo Composer encontrado. Instalando dependencias...
echo.

REM Instalar dependencias
composer install --no-dev --optimize-autoloader

if %errorlevel% equ 0 (
    echo.
    echo ¡Dependencias instaladas exitosamente!
    echo.
    echo Ahora el sistema puede generar archivos Excel reales usando PhpSpreadsheet.
    echo Si PhpSpreadsheet no está disponible, el sistema usará archivos CSV como respaldo.
) else (
    echo.
    echo ERROR: No se pudieron instalar las dependencias.
    echo Verifique que tenga acceso a internet y que Composer esté configurado correctamente.
)

echo.
pause
