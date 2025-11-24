Sistema de Gestión de Historias Clínicas para Ópticas

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

### Requisitos del Sistema
- PHP 8.0 o superior
- MySQL 5.7 o superior
- Servidor web (Apache/Nginx)
- Node.js 18+ (para desarrollo frontend)

## Seguridad

### Autenticación
- JWT con expiración configurable
- Contraseñas hasheadas con `password_hash()`
- Sesiones seguras por usuario

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




