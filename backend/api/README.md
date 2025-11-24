# Backend API - ÓpticaCast

## Configuración

### 1. Base de Datos
- Ejecutar el script SQL: `../database/opticast.sql`
- Verificar conexión: `db-test.php`

### 2. Usuario de Prueba
- Ejecutar: `create-test-user.php`
- Credenciales: `admin` / `admin123`

### 3. Pruebas

#### Test de Conexión a BD
```
GET http://localhost/opticast/backend/api/db-test.php
```

#### Test de Login (sin enrutamiento)
```
POST http://localhost/opticast/backend/api/login-test.php
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

#### Login con Enrutamiento
```
POST http://localhost/opticast/backend/api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

## Solución de Problemas

### Error 404
- Verificar que `mod_rewrite` esté habilitado en WAMP
- Verificar archivo `.htaccess`
- Usar archivos de prueba directos si el enrutamiento falla

### Error CORS
- Verificar configuración en `config.php`
- Verificar headers en respuesta

### Error de Base de Datos
- Verificar credenciales en `config.php`
- Verificar que MySQL esté ejecutándose
- Verificar que la base de datos exista

## Estructura de Archivos

- `index.php` - Enrutador principal
- `config.php` - Configuración y funciones auxiliares
- `.htaccess` - Reglas de reescritura para Apache
- `web.config` - Reglas de reescritura para IIS
- `src/Controllers/` - Controladores de la aplicación

