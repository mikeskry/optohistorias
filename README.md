# ÓpticaCast - Sistema de Gestión de Historias Clínicas para Ópticas

## Descripción

ÓpticaCast es una aplicación web completa para la gestión de historias clínicas de pacientes en ópticas. El sistema permite a los profesionales de la salud visual crear, gestionar y consultar historias clínicas de manera eficiente y segura.

## Características Principales

### 🔐 Autenticación y Seguridad
- Sistema de login seguro con JWT
- Cambio obligatorio de contraseña en primer acceso
- Roles de usuario (admin, usuario)
- Acceso restringido por óptica

### 👥 Gestión de Pacientes
- CRUD completo de pacientes
- Búsqueda avanzada por documento, nombre y apellidos
- Validaciones de datos según estándares médicos
- Información personal y médica del paciente

### 📋 Historias Clínicas
- Creación de historias con secciones organizadas:
  - **Cuestionario**: Motivo de consulta, síntomas, antecedentes, medicamentos, alergias
  - **Agudeza Visual**: Mediciones para ojo derecho e izquierdo (lejos y cerca)
  - **Examen Refractivo**: Esfera, cilindro, eje y adición para ambos ojos
  - **Observaciones**: Diagnóstico, tratamiento, observaciones generales
- Generación de PDFs con firma de la óptica
- Búsqueda y filtrado por paciente y fechas
- **No editable** una vez creada (cumple estándares médicos)

### 📅 Gestión de Citas
- Calendario semanal visual
- Intervalos de 30 minutos configurables
- Validación de solapamientos
- CRUD completo de citas
- Búsqueda por fechas

### ✍️ Firma de la Óptica
- Upload de imagen de firma (PNG/JPG)
- Integración automática en PDFs
- Gestión de firmas por óptica

### 🏥 Administración
- Gestión de ópticas (CRUD)
- Gestión de usuarios del sistema
- Reset de contraseñas
- Panel de administración exclusivo

## Arquitectura Técnica

### Frontend (Angular 17+)
- **Framework**: Angular 17+ con componentes standalone
- **UI**: Bootstrap 5 + Font Awesome
- **Estado**: RxJS BehaviorSubject para gestión de estado
- **Formularios**: Reactive Forms con validaciones
- **Routing**: Lazy loading para optimización
- **Guards**: Protección de rutas por autenticación y roles
- **Interceptors**: JWT en headers HTTP
- **Notificaciones**: Sistema de toasts personalizado

### Backend (PHP 8.x)
- **Lenguaje**: PHP 8.x puro (sin frameworks)
- **Arquitectura**: Capas (Controllers, Services, Repositories, DTOs)
- **Base de Datos**: MySQL con PDO y prepared statements
- **Autenticación**: JWT con secret configurable
- **API**: RESTful con routing automático
- **Validaciones**: Reglas de negocio en capa de servicio
- **PDF**: Generación con FPDF/TCPDF (placeholder implementado)
- **Archivos**: Upload seguro con validaciones

### Base de Datos
- **Motor**: MySQL
- **Tablas principales**:
  - `opticas`: Información de las ópticas
  - `usuarios`: Usuarios del sistema
  - `pacientes`: Datos de pacientes
  - `historias`: Historias clínicas
  - `citas`: Citas programadas
  - `firmas_optica`: Firmas digitales

## Instalación y Configuración

### Requisitos del Sistema
- PHP 8.0 o superior
- MySQL 5.7 o superior
- Servidor web (Apache/Nginx)
- Node.js 18+ (para desarrollo frontend)

### Instalación del Backend

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd opticast
   ```

2. **Configurar la base de datos**
   ```bash
   mysql -u root -p < database.sql
   ```

3. **Configurar el backend**
   - Editar `backend/api/config.php`
   - Ajustar credenciales de base de datos
   - Configurar JWT secret

4. **Configurar el servidor web**
   - Apuntar document root a `backend/api/`
   - Habilitar mod_rewrite para routing

### Instalación del Frontend

1. **Instalar dependencias**
   ```bash
   cd frontend
   npm install
   ```

2. **Configurar variables de entorno**
   - Editar `src/environments/environment.ts`
   - Configurar `apiUrl` del backend

3. **Compilar para producción**
   ```bash
   npm run build
   ```

4. **Desplegar archivos estáticos**
   - Copiar contenido de `dist/opticast/` al servidor web

## Uso del Sistema

### Primer Acceso
1. Login con credenciales iniciales
2. Cambio obligatorio de contraseña
3. Acceso al dashboard principal

### Flujo de Trabajo Típico
1. **Crear Paciente**: Registrar datos personales y médicos
2. **Programar Cita**: Asignar fecha y hora de consulta
3. **Crear Historia Clínica**: Llenar formulario con secciones organizadas
4. **Generar PDF**: Descargar historia clínica firmada
5. **Gestionar Seguimiento**: Programar próximas citas

### Roles y Permisos
- **Admin**: Acceso completo al sistema, gestión de ópticas
- **Usuario**: Acceso limitado a su óptica, gestión de pacientes e historias

## Validaciones y Reglas de Negocio

### Pacientes
- Documento único por óptica
- Email único por óptica
- Campos obligatorios validados
- Formato de fecha de nacimiento

### Historias Clínicas
- Paciente debe existir y ser de la óptica
- Fecha de consulta no puede ser futura
- Campos de agudeza visual: 0.00 - 2.00
- Campos de refracción: ±20.00 dioptrías
- Eje: 0-180 grados

### Citas
- No citas en el pasado
- Validación de solapamientos por óptica
- Intervalos de 30 minutos
- Paciente debe existir

## Seguridad

### Autenticación
- JWT con expiración configurable
- Contraseñas hasheadas con `password_hash()`
- Sesiones seguras por usuario

### Autorización
- Acceso restringido por óptica
- Validación de permisos en cada endpoint
- Protección CSRF implícita

### Datos
- Prepared statements para prevenir SQL injection
- Validación de entrada en frontend y backend
- Sanitización de datos de salida

## Despliegue

### Hosting Compartido
- Frontend como archivos estáticos
- Backend en carpeta `/api/`
- Base de datos MySQL
- Configuración de CORS

### Configuración del Servidor
```apache
# .htaccess para routing del backend
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

## Mantenimiento

### Logs
- Errores de PHP en logs del servidor
- Logs de base de datos para auditoría
- Logs de autenticación

### Backup
- Base de datos: Backup diario automático
- Archivos: Backup semanal de uploads
- Código: Control de versiones con Git

### Actualizaciones
- Frontend: Recompilar y desplegar
- Backend: Actualizar archivos PHP
- Base de datos: Scripts de migración

## Desarrollo

### Estructura del Proyecto
```
opticast/
├── backend/
│   └── api/
│       ├── src/
│       │   ├── Controllers/
│       │   ├── Services/
│       │   ├── Repositories/
│       │   ├── DTOs/
│       │   └── Utils/
│       ├── uploads/
│       └── index.php
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── guards/
│   │   │   └── interceptors/
│   │   └── environments/
│   └── package.json
└── database.sql
```

### Comandos de Desarrollo
```bash
# Backend
cd backend/api
php -S localhost:8000

# Frontend
cd frontend
npm start
npm run build
npm test
```

## Contribución

### Estándares de Código
- PHP: PSR-12
- Angular: Angular Style Guide
- Base de datos: Convenciones MySQL
- Git: Conventional Commits

### Testing
- Backend: Tests unitarios con PHPUnit
- Frontend: Tests con Jasmine/Karma
- E2E: Tests con Protractor

## Licencia

Este proyecto está bajo licencia [MIT](LICENSE).

## Soporte

Para soporte técnico o consultas:
- Crear issue en el repositorio
- Contactar al equipo de desarrollo
- Documentación técnica disponible

## Roadmap

### Versión 1.1
- [ ] Validaciones desde Excel implementadas
- [ ] Mejoras en generación de PDFs
- [ ] Sistema de notificaciones por email

### Versión 1.2
- [ ] API móvil para consultas rápidas
- [ ] Dashboard con estadísticas
- [ ] Exportación de datos

### Versión 2.0
- [ ] Módulo de facturación
- [ ] Integración con sistemas externos
- [ ] Reportes avanzados



