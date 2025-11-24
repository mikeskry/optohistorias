#!/bin/bash

echo "========================================"
echo "Instalando Base de Datos ÓpticaCast"
echo "========================================"
echo

# Verificar si MySQL está disponible
if ! command -v mysql &> /dev/null; then
    echo "ERROR: MySQL no está disponible en el PATH"
    echo "Asegúrate de que MySQL esté instalado y configurado"
    exit 1
fi

echo "Conectando a MySQL..."
echo

# Ejecutar el script SQL
mysql -u root -p < database/opticast.sql

if [ $? -eq 0 ]; then
    echo
    echo "========================================"
    echo "Base de datos instalada exitosamente!"
    echo "========================================"
    echo
    echo "Credenciales por defecto:"
    echo "Usuario: admin"
    echo "Contraseña: password"
    echo
    echo "IMPORTANTE: Cambia la contraseña del admin en producción"
    echo
else
    echo
    echo "ERROR: No se pudo instalar la base de datos"
    echo "Verifica las credenciales de MySQL"
    echo
fi



