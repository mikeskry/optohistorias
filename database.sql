-- Base de datos para sistema de historias clínicas de ópticas
CREATE DATABASE IF NOT EXISTS opticast;
USE opticast;

-- Tabla de ópticas
CREATE TABLE opticas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion TEXT,
    telefono VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL,
    activa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    optica_id INT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'optica') DEFAULT 'optica',
    primer_acceso BOOLEAN DEFAULT TRUE,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (optica_id) REFERENCES opticas(id) ON DELETE CASCADE
);

-- Tabla de pacientes
CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    optica_id INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    documento VARCHAR(20) UNIQUE NOT NULL,
    fecha_nacimiento DATE,
    telefono VARCHAR(20),
    email VARCHAR(255),
    direccion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (optica_id) REFERENCES opticas(id) ON DELETE CASCADE
);

-- Tabla de historias clínicas
CREATE TABLE historias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT NOT NULL,
    optica_id INT NOT NULL,
    fecha_consulta DATE NOT NULL,
    
    -- Cuestionario
    motivo_consulta TEXT,
    sintomas TEXT,
    antecedentes TEXT,
    medicamentos TEXT,
    alergias TEXT,
    
    -- Agudeza Visual
    av_od_lejos DECIMAL(3,2),
    av_od_cerca DECIMAL(3,2),
    av_oi_lejos DECIMAL(3,2),
    av_oi_cerca DECIMAL(3,2),
    
    -- Examen Refractivo
    esfera_od DECIMAL(4,2),
    cilindro_od DECIMAL(4,2),
    eje_od INT,
    esfera_oi DECIMAL(4,2),
    cilindro_oi DECIMAL(4,2),
    eje_oi INT,
    adicion DECIMAL(4,2),
    
    -- Observaciones
    observaciones TEXT,
    diagnostico TEXT,
    tratamiento TEXT,
    proxima_cita DATE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    FOREIGN KEY (optica_id) REFERENCES opticas(id) ON DELETE CASCADE
);

-- Tabla de citas
CREATE TABLE citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT NOT NULL,
    optica_id INT NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    duracion INT DEFAULT 30, -- minutos
    motivo TEXT,
    estado ENUM('programada', 'confirmada', 'cancelada', 'completada') DEFAULT 'programada',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    FOREIGN KEY (optica_id) REFERENCES opticas(id) ON DELETE CASCADE,
    UNIQUE KEY unique_cita (optica_id, fecha, hora)
);

-- Tabla de firmas de ópticas
CREATE TABLE firmas_optica (
    id INT AUTO_INCREMENT PRIMARY KEY,
    optica_id INT NOT NULL,
    ruta_archivo VARCHAR(255) NOT NULL,
    nombre_archivo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (optica_id) REFERENCES opticas(id) ON DELETE CASCADE,
    UNIQUE KEY unique_firma_optica (optica_id)
);

-- Insertar usuario admin por defecto
INSERT INTO opticas (nombre, direccion, telefono, email) VALUES 
('Administración', 'Sistema', '0000000000', 'admin@opticast.com');

INSERT INTO usuarios (optica_id, username, password, rol, primer_acceso) VALUES 
(1, 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', FALSE);

-- Insertar óptica de ejemplo
INSERT INTO opticas (nombre, direccion, telefono, email) VALUES 
('Óptica Ejemplo', 'Calle Principal 123', '555-0123', 'ejemplo@optica.com');

INSERT INTO usuarios (optica_id, username, password, rol, primer_acceso) VALUES 
(2, 'optica1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'optica', TRUE);

