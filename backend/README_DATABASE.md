# Instalación de la Base de Datos ÓpticaCast

## Requisitos Previos

- MySQL 5.7+ o MariaDB 10.2+
- Usuario con permisos de administrador (root)
- Acceso a la línea de comandos

## Opción 1: Instalación Automática (Recomendada)

### Windows
1. Abre el Command Prompt como administrador
2. Navega al directorio del proyecto: `cd C:\wamp64\www\opticast\backend`
3. Ejecuta: `install_database.bat`
4. Introduce la contraseña de MySQL cuando se solicite

### Linux/Mac
1. Abre la terminal
2. Navega al directorio del proyecto: `cd /ruta/al/proyecto/backend`
3. Dale permisos de ejecución: `chmod +x install_database.sh`
4. Ejecuta: `./install_database.sh`
5. Introduce la contraseña de MySQL cuando se solicite

## Opción 2: Instalación Manual

1. Abre MySQL Workbench o phpMyAdmin
2. Ejecuta el script SQL: `database/opticast.sql`
3. Verifica que se hayan creado todas las tablas

## Estructura de la Base de Datos

### Tablas Creadas

1. **`opticas`** - Información de las ópticas
2. **`usuarios`** - Usuarios del sistema
3. **`pacientes`** - Pacientes de cada óptica
4. **`historias`** - Historias clínicas
5. **`citas`** - Citas programadas
6. **`firmas_optica`** - Firmas digitales de las ópticas

### Usuario Administrador por Defecto

- **Username:** `admin`
- **Password:** `password`
- **Rol:** `admin`
- **Óptica:** Sistema Central

⚠️ **IMPORTANTE:** Cambia la contraseña del administrador en producción.

## Verificación de la Instalación

Después de la instalación, puedes verificar que todo esté funcionando:

```sql
USE opticast;
SHOW TABLES;
SELECT COUNT(*) FROM opticas;
SELECT COUNT(*) FROM usuarios;
```

## Solución de Problemas

### Error: "Access denied for user 'root'@'localhost'"
- Verifica que MySQL esté ejecutándose
- Confirma las credenciales de root
- En WAMP, la contraseña por defecto suele estar vacía

### Error: "Can't connect to MySQL server"
- Verifica que el servicio MySQL esté activo
- En WAMP, asegúrate de que MySQL esté iniciado
- Verifica que el puerto 3306 esté disponible

### Error: "Unknown database 'opticast'"
- El script se ejecutó correctamente pero no se creó la base de datos
- Verifica que tengas permisos de CREATE DATABASE
- Ejecuta manualmente: `CREATE DATABASE opticast;`

## Configuración del Backend

La base de datos ya está configurada en `config.php`:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'opticast');
define('DB_USER', 'root');
define('DB_PASS', 'root'); // Cambia según tu configuración
```

## Próximos Pasos

1. ✅ Base de datos instalada
2. 🔄 Configurar credenciales de MySQL en `config.php`
3. 🔄 Probar la conexión desde el backend
4. 🔄 Iniciar el frontend Angular

## Soporte

Si encuentras problemas durante la instalación:
1. Verifica los logs de MySQL
2. Confirma que tienes permisos de administrador
3. Revisa que la versión de MySQL sea compatible



