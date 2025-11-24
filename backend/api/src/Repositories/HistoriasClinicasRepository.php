<?php
require_once __DIR__ . '/../../config.php';
class HistoriasClinicasRepository {
    private $pdo;

    public function __construct($pdo = null) {
        $this->pdo = $pdo ?? getDBConnection();
    }

    public function getByPaciente($pacienteId, $opticaId) {
        
        $sql = "
            SELECT hc.*, p.nombre as nombre_paciente, p.apellidos as apellidos_paciente, 
                   p.documento as documento_paciente, p.telefono as telefono_paciente, 
                   p.email as email_paciente, p.fecha_nacimiento as fecha_nacimiento_paciente,
                   u.nombre as nombre_profesional, c.hora
            FROM historias_clinicas hc
            JOIN pacientes p ON hc.paciente_id = p.id
            LEFT JOIN usuarios u ON hc.usuario_id = u.id
            LEFT JOIN historias_clinicas_cuestionario c ON hc.id = c.historia_clinica_id
            WHERE hc.paciente_id = ? AND p.optica_id = ?
            ORDER BY hc.id DESC
        ";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$pacienteId, $opticaId]);     
        
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Para cada historia, cargar los datos completos de las tablas relacionadas
        $historiasCompletas = [];
        foreach ($data as $historia) {
            $historiaId = $historia['id'];
            try {
                $datosCompletos = $this->getHistoriaCompleta($historiaId);
                $historiasCompletas[] = array_merge($historia, $datosCompletos);
            } catch (Exception $e) {
                // Si hay error, devolver solo los datos básicos
                $historiasCompletas[] = $historia;
            }
        }
        return $historiasCompletas;
    }

    public function findById($id, $opticaId) {
        $sql = "
            SELECT hc.*, p.nombre as nombre_paciente, p.apellidos as apellidos_paciente, 
                   p.documento as documento_paciente, p.telefono as telefono_paciente, 
                   p.email as email_paciente, p.fecha_nacimiento as fecha_nacimiento_paciente,
                   u.nombre as nombre_profesional, c.hora
            FROM historias_clinicas hc
            JOIN pacientes p ON hc.paciente_id = p.id
            LEFT JOIN usuarios u ON hc.usuario_id = u.id
            LEFT JOIN historias_clinicas_cuestionario c ON hc.id = c.historia_clinica_id
            WHERE hc.id = ? AND p.optica_id = ?
        ";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$id, $opticaId]);
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($data) {
        // Construir la consulta SQL dinámicamente con todos los campos
        $fields = array_keys($data);
        $placeholders = str_repeat('?,', count($fields) - 1) . '?';
        
        $sql = "INSERT INTO historias_clinicas (" . implode(', ', $fields) . ") VALUES ($placeholders)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(array_values($data));
        
        return $this->pdo->lastInsertId();
    }

    // Métodos para transacciones
    public function beginTransaction() {
        $this->pdo->beginTransaction();
    }

    public function commit() {
        $this->pdo->commit();
    }

    public function rollback() {
        $this->pdo->rollback();
    }

    // Método para crear historia clínica principal
    public function createHistoria($data) {
        $sql = "INSERT INTO historias_clinicas (optica_id, paciente_id, usuario_id, fecha_consulta, motivo_consulta, observaciones) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $data['optica_id'],
            $data['paciente_id'],
            $data['usuario_id'],
            $data['fecha_consulta'],
            $data['motivo_consulta'],
            $data['observaciones']
        ]);
        return $this->pdo->lastInsertId();
    }

    // Método para crear cuestionario
    public function createCuestionario($historiaId, $data) {
        // Validar y formatear fecha_control
        $fechaControl = null;
        if (!empty($data['fecha_control'])) {
            $fechaControl = $this->validateAndFormatDate($data['fecha_control']);
        }
        
        // Validar y formatear hora
        $hora = null;
        if (!empty($data['hora'])) {
            $hora = $this->validateAndFormatTime($data['hora']);
        }
        
        $sql = "INSERT INTO historias_clinicas_cuestionario (historia_clinica_id, tipo_examen, anamnesis, ultima_valoracion_optometria, ocupacion_profesion, antecedentes_familiares, antecedentes_personales, antecedentes_laborales, fecha_control, hora) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $historiaId,
            $data['tipo_examen'] ?? null,
            $data['anamnesis'] ?? null,
            $data['ultima_valoracion_optometria'] ?? null,
            $data['ocupacion_profesion'] ?? null,
            $data['antecedentes_familiares'] ?? null,
            $data['antecedentes_personales'] ?? null,
            $data['antecedentes_laborales'] ?? null,
            $fechaControl,
            $hora
        ]);
    }

    // Método para crear lensometría
    public function createLensometria($historiaId, $data) {
        $sql = "INSERT INTO historias_clinicas_lensometria (
            historia_clinica_id, 
            formula_lejos_derecho_esfera, formula_lejos_derecho_cilindro, formula_lejos_derecho_eje, formula_lejos_derecho_adicion, formula_lejos_derecho_prisma,
            formula_lejos_izquierdo_esfera, formula_lejos_izquierdo_cilindro, formula_lejos_izquierdo_eje, formula_lejos_izquierdo_adicion, formula_lejos_izquierdo_prisma,
            formula_cerca_derecho_esfera, formula_cerca_derecho_cilindro, formula_cerca_derecho_eje, formula_cerca_derecho_adicion,
            formula_cerca_izquierdo_esfera, formula_cerca_izquierdo_cilindro, formula_cerca_izquierdo_eje, formula_cerca_izquierdo_adicion,
            observaciones
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $historiaId,
            $data['formula_lejos_derecho_esfera'] ?? null,
            $data['formula_lejos_derecho_cilindro'] ?? null,
            $data['formula_lejos_derecho_eje'] ?? null,
            $data['formula_lejos_derecho_adicion'] ?? null,
            $data['formula_lejos_derecho_prisma'] ?? null,
            $data['formula_lejos_izquierdo_esfera'] ?? null,
            $data['formula_lejos_izquierdo_cilindro'] ?? null,
            $data['formula_lejos_izquierdo_eje'] ?? null,
            $data['formula_lejos_izquierdo_adicion'] ?? null,
            $data['formula_lejos_izquierdo_prisma'] ?? null,
            $data['formula_cerca_derecho_esfera'] ?? null,
            $data['formula_cerca_derecho_cilindro'] ?? null,
            $data['formula_cerca_derecho_eje'] ?? null,
            $data['formula_cerca_derecho_adicion'] ?? null,
            $data['formula_cerca_izquierdo_esfera'] ?? null,
            $data['formula_cerca_izquierdo_cilindro'] ?? null,
            $data['formula_cerca_izquierdo_eje'] ?? null,
            $data['formula_cerca_izquierdo_adicion'] ?? null,
            $data['observaciones'] ?? null
        ]);
    }

    // Método para crear agudeza visual
    public function createAgudezaVisual($historiaId, $data) {
        $sql = "INSERT INTO historias_clinicas_agudeza_visual (
            historia_clinica_id,
            lejos_test_usado, cerca_test_usado,
            sin_correccion_lejos_derecho, sin_correccion_lejos_izquierdo, sin_correccion_lejos_ambos,
            con_correccion_lejos_derecho, con_correccion_lejos_izquierdo, con_correccion_lejos_ambos,
            pin_hole_lejos_derecho, pin_hole_lejos_izquierdo,
            sin_correccion_cerca_derecho, sin_correccion_cerca_izquierdo, sin_correccion_cerca_ambos, sin_correccion_cerca_observacion,
            con_correccion_cerca_derecho, con_correccion_cerca_izquierdo, con_correccion_cerca_ambos, con_correccion_cerca_observacion,
            pin_hole_cerca_derecho, pin_hole_cerca_izquierdo,
            cerca_distancia, cerca_descripcion,
            cerca_derecho_sin_correccion, cerca_izquierdo_sin_correccion, cerca_observacion_sin_correccion,
            cerca_derecho_con_correccion, cerca_izquierdo_con_correccion, cerca_observacion_con_correccion
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $historiaId,
            $data['lejos_test_usado'] ?? null,
            $data['cerca_test_usado'] ?? null,
            $data['sin_correccion_lejos_derecho'] ?? null,
            $data['sin_correccion_lejos_izquierdo'] ?? null,
            $data['sin_correccion_lejos_ambos'] ?? null,
            $data['con_correccion_lejos_derecho'] ?? null,
            $data['con_correccion_lejos_izquierdo'] ?? null,
            $data['con_correccion_lejos_ambos'] ?? null,
            $data['pin_hole_lejos_derecho'] ?? null,
            $data['pin_hole_lejos_izquierdo'] ?? null,
            $data['sin_correccion_cerca_derecho'] ?? null,
            $data['sin_correccion_cerca_izquierdo'] ?? null,
            $data['sin_correccion_cerca_ambos'] ?? null,
            $data['sin_correccion_cerca_observacion'] ?? null,
            $data['con_correccion_cerca_derecho'] ?? null,
            $data['con_correccion_cerca_izquierdo'] ?? null,
            $data['con_correccion_cerca_ambos'] ?? null,
            $data['con_correccion_cerca_observacion'] ?? null,
            $data['pin_hole_cerca_derecho'] ?? null,
            $data['pin_hole_cerca_izquierdo'] ?? null,
            $data['cerca_distancia'] ?? null,
            $data['cerca_descripcion'] ?? null,
            $data['cerca_derecho_sin_correccion'] ?? null,
            $data['cerca_izquierdo_sin_correccion'] ?? null,
            $data['cerca_observacion_sin_correccion'] ?? null,
            $data['cerca_derecho_con_correccion'] ?? null,
            $data['cerca_izquierdo_con_correccion'] ?? null,
            $data['cerca_observacion_con_correccion'] ?? null
        ]);
    }

    // Método para crear examen motor
    public function createExamenMotor($historiaId, $data) {
        error_log('🔵 Repository createExamenMotor - Iniciando');
        error_log('🔵 Repository createExamenMotor - Historia ID: ' . $historiaId);
        error_log('🔵 Repository createExamenMotor - Data recibida: ' . json_encode($data));
        
        $sql = "INSERT INTO historias_clinicas_examen_motor (
            historia_clinica_id, mano_dominante, ojo_dominante, punto_proximo_valor, dp_lejos, dp_cerca, 
            ducciones_derecho, ducciones_izquierdo, kappa_derecho, kappa_izquierdo, hirschberg, test_utilizado, 
            cover_test_con_correccion_horizontal, cover_test_con_correccion_vertical, cover_test_sin_correccion_horizontal, 
            cover_test_sin_correccion_vertical, prisma_con_correccion_horizontal, prisma_con_correccion_vertical, 
            prisma_sin_correccion_horizontal, prisma_sin_correccion_vertical, observaciones, por_confirmar_derecho, 
            por_confirmar_izquierdo, estereopsis_tipo, estereopsis_resultado,
            versiones_derecho_left, versiones_derecho_right, versiones_derecho_top_left, versiones_derecho_bottom_left, 
            versiones_derecho_top_right, versiones_derecho_bottom_right,
            versiones_izquierdo_left, versiones_izquierdo_right, versiones_izquierdo_top_left, versiones_izquierdo_bottom_left, 
            versiones_izquierdo_top_right, versiones_izquierdo_bottom_right
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        error_log('🔵 Repository createExamenMotor - SQL preparado: ' . $sql);
        
        $stmt = $this->pdo->prepare($sql);
        
        $params = [
            $historiaId,
            $data['mano_dominante'] ?? null,
            $data['ojo_dominante'] ?? null,
            $data['punto_proximo_valor'] ?? null,
            $data['dp_lejos'] ?? null,
            $data['dp_cerca'] ?? null,
            $data['ducciones_derecho'] ?? null,
            $data['ducciones_izquierdo'] ?? null,
            $data['kappa_derecho'] ?? null,
            $data['kappa_izquierdo'] ?? null,
            $data['hirschberg'] ?? null,
            $data['test_utilizado'] ?? null,
            $data['cover_test_con_correccion_horizontal'] ?? null,
            $data['cover_test_con_correccion_vertical'] ?? null,
            $data['cover_test_sin_correccion_horizontal'] ?? null,
            $data['cover_test_sin_correccion_vertical'] ?? null,
            $data['prisma_con_correccion_horizontal'] ?? null,
            $data['prisma_con_correccion_vertical'] ?? null,
            $data['prisma_sin_correccion_horizontal'] ?? null,
            $data['prisma_sin_correccion_vertical'] ?? null,
            $data['observaciones'] ?? null,
            $data['por_confirmar_derecho'] ?? null,
            $data['por_confirmar_izquierdo'] ?? null,
            $data['estereopsis_tipo'] ?? null,
            $data['estereopsis_resultado'] ?? null,
            $data['versiones_derecho_left'] ?? null,
            $data['versiones_derecho_right'] ?? null,
            $data['versiones_derecho_top_left'] ?? null,
            $data['versiones_derecho_bottom_left'] ?? null,
            $data['versiones_derecho_top_right'] ?? null,
            $data['versiones_derecho_bottom_right'] ?? null,
            $data['versiones_izquierdo_left'] ?? null,
            $data['versiones_izquierdo_right'] ?? null,
            $data['versiones_izquierdo_top_left'] ?? null,
            $data['versiones_izquierdo_bottom_left'] ?? null,
            $data['versiones_izquierdo_top_right'] ?? null,
            $data['versiones_izquierdo_bottom_right'] ?? null
        ];
        
        error_log('🔵 Repository createExamenMotor - Número de parámetros: ' . count($params));
        error_log('🔵 Repository createExamenMotor - Parámetros: ' . json_encode($params));
        
        $stmt->execute($params);
        
        error_log('🔵 Repository createExamenMotor - Execute completado exitosamente');
        error_log('🔵 Repository createExamenMotor - Rows affected: ' . $stmt->rowCount());
    }



    // Método para crear examen refractivo
    public function createExamenRefractivo($historiaId, $data) {

        $sql = "INSERT INTO historias_clinicas_examen_refractivo (
            historia_clinica_id,
            keratometria_derecho_plano, keratometria_derecho_curvo, keratometria_derecho_eje, keratometria_derecho_miras, keratometria_derecho_corn,
            keratometria_izquierdo_plano, keratometria_izquierdo_curvo, keratometria_izquierdo_eje, keratometria_izquierdo_miras, keratometria_izquierdo_corn,
            retinoscopia_estatica_derecho_eje, retinoscopia_estatica_derecho_esfera, retinoscopia_estatica_derecho_cilindro, retinoscopia_estatica_derecho_sombras,
            retinoscopia_estatica_izquierdo_eje, retinoscopia_estatica_izquierdo_esfera, retinoscopia_estatica_izquierdo_cilindro, retinoscopia_estatica_izquierdo_sombras,
            retinoscopia_dinamica_derecho_eje, retinoscopia_dinamica_derecho_esfera, retinoscopia_dinamica_derecho_cilindro, retinoscopia_dinamica_derecho_sombras,
            retinoscopia_dinamica_izquierdo_eje, retinoscopia_dinamica_izquierdo_esfera, retinoscopia_dinamica_izquierdo_cilindro, retinoscopia_dinamica_izquierdo_sombras,
            subjetivo_derecho_eje, subjetivo_derecho_esfera, subjetivo_derecho_cilindro, subjetivo_derecho_av_lejos, subjetivo_derecho_add, subjetivo_derecho_av_cerca, subjetivo_derecho_dnp, subjetivo_derecho_vortice, subjetivo_derecho_mm, subjetivo_derecho_estatica, subjetivo_derecho_dinamica,
            subjetivo_izquierdo_eje, subjetivo_izquierdo_esfera, subjetivo_izquierdo_cilindro, subjetivo_izquierdo_av_lejos, subjetivo_izquierdo_add, subjetivo_izquierdo_av_cerca, subjetivo_izquierdo_dnp, subjetivo_izquierdo_vortice, subjetivo_izquierdo_mm, subjetivo_izquierdo_estatica, subjetivo_izquierdo_dinamica,
            otra_refraccion, radio_k_1, radio_k_2,
            otra_refraccion_derecho_esfera, otra_refraccion_derecho_cilindro, otra_refraccion_derecho_eje, otra_refraccion_derecho_sombras,
            otra_refraccion_izquierdo_esfera, otra_refraccion_izquierdo_cilindro, otra_refraccion_izquierdo_eje, otra_refraccion_izquierdo_sombras, subjetivo_normal, subjetivo_cycloplejia, subjetivo_otra, subjetivo_distancia_al) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $historiaId,
            $data['keratometria_derecho_plano'] ?? null,
            $data['keratometria_derecho_curvo'] ?? null,
            $data['keratometria_derecho_eje'] ?? null,
            $data['keratometria_derecho_miras'] ?? null,
            $data['keratometria_derecho_corn'] ?? null,
            $data['keratometria_izquierdo_plano'] ?? null,
            $data['keratometria_izquierdo_curvo'] ?? null,
            $data['keratometria_izquierdo_eje'] ?? null,
            $data['keratometria_izquierdo_miras'] ?? null,
            $data['keratometria_izquierdo_corn'] ?? null,
            $data['retinoscopia_estatica_derecho_eje'] ?? null,
            $data['retinoscopia_estatica_derecho_esfera'] ?? null,
            $data['retinoscopia_estatica_derecho_cilindro'] ?? null,
            $data['retinoscopia_estatica_derecho_sombras'] ?? null,
            $data['retinoscopia_estatica_izquierdo_eje'] ?? null,
            $data['retinoscopia_estatica_izquierdo_esfera'] ?? null,
            $data['retinoscopia_estatica_izquierdo_cilindro'] ?? null,
            $data['retinoscopia_estatica_izquierdo_sombras'] ?? null,
            $data['retinoscopia_dinamica_derecho_eje'] ?? null,
            $data['retinoscopia_dinamica_derecho_esfera'] ?? null,
            $data['retinoscopia_dinamica_derecho_cilindro'] ?? null,
            $data['retinoscopia_dinamica_derecho_sombras'] ?? null,
            $data['retinoscopia_dinamica_izquierdo_eje'] ?? null,
            $data['retinoscopia_dinamica_izquierdo_esfera'] ?? null,
            $data['retinoscopia_dinamica_izquierdo_cilindro'] ?? null,
            $data['retinoscopia_dinamica_izquierdo_sombras'] ?? null,
            $data['subjetivo_derecho_eje'] ?? null,
            $data['subjetivo_derecho_esfera'] ?? null,
            $data['subjetivo_derecho_cilindro'] ?? null,
            $data['subjetivo_derecho_av_lejos'] ?? null,
            $data['subjetivo_derecho_add'] ?? null,
            $data['subjetivo_derecho_av_cerca'] ?? null,
            $data['subjetivo_derecho_dnp'] ?? null,
            $data['subjetivo_derecho_vortice'] ?? null,
            $data['subjetivo_derecho_mm'] ?? null,
            $data['subjetivo_derecho_estatica'] ?? null,
            $data['subjetivo_derecho_dinamica'] ?? null,
            $data['subjetivo_izquierdo_eje'] ?? null,
            $data['subjetivo_izquierdo_esfera'] ?? null,
            $data['subjetivo_izquierdo_cilindro'] ?? null,
            $data['subjetivo_izquierdo_av_lejos'] ?? null,
            $data['subjetivo_izquierdo_add'] ?? null,
            $data['subjetivo_izquierdo_av_cerca'] ?? null,
            $data['subjetivo_izquierdo_dnp'] ?? null,
            $data['subjetivo_izquierdo_vortice'] ?? null,
            $data['subjetivo_izquierdo_mm'] ?? null,
            $data['subjetivo_izquierdo_estatica'] ?? null,
            $data['subjetivo_izquierdo_dinamica'] ?? null,
            $data['otra_refraccion'] ?? null,
            $data['radio_k_1'] ?? null,
            $data['radio_k_2'] ?? null,
            $data['otra_refraccion_derecho_esfera'] ?? null,
            $data['otra_refraccion_derecho_cilindro'] ?? null,
            $data['otra_refraccion_derecho_eje'] ?? null,
            $data['otra_refraccion_derecho_sombras'] ?? null,
            $data['otra_refraccion_izquierdo_esfera'] ?? null,
            $data['otra_refraccion_izquierdo_cilindro'] ?? null,
            $data['otra_refraccion_izquierdo_eje'] ?? null,
            $data['otra_refraccion_izquierdo_sombras'] ?? null,
            $data['subjetivo_normal'] ?? null,
            $data['subjetivo_cycloplejia'] ?? null,
            $data['subjetivo_otra'] ?? null,
            $data['subjetivo_distancia_al'] ?? null
        ]);
    }

    // Método para crear examen oftalmológico
    public function createExamenOftalmologico($historiaId, $data) {
        $sql = "INSERT INTO historias_clinicas_examen_oftalmologico (
            historia_clinica_id, pupila_derecho, pupila_izquierdo, parpados_derecho, parpados_izquierdo, 
            pelicula_lagrimal_derecho, pelicula_lagrimal_izquierdo, conjuntiva_derecho, conjuntiva_izquierdo, 
            cornea_derecho, cornea_izquierdo, cristalino_derecho, cristalino_izquierdo, 
            camara_anterior_derecho, camara_anterior_izquierdo, iris_derecho, iris_izquierdo, bruckner
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $historiaId,
            $data['pupila_derecho'] ?? null,
            $data['pupila_izquierdo'] ?? null,
            $data['parpados_derecho'] ?? null,
            $data['parpados_izquierdo'] ?? null,
            $data['pelicula_lagrimal_derecho'] ?? null,
            $data['pelicula_lagrimal_izquierdo'] ?? null,
            $data['conjuntiva_derecho'] ?? null,
            $data['conjuntiva_izquierdo'] ?? null,
            $data['cornea_derecho'] ?? null,
            $data['cornea_izquierdo'] ?? null,
            $data['cristalino_derecho'] ?? null,
            $data['cristalino_izquierdo'] ?? null,
            $data['camara_anterior_derecho'] ?? null,
            $data['camara_anterior_izquierdo'] ?? null,
            $data['iris_derecho'] ?? null,
            $data['iris_izquierdo'] ?? null,
            $data['bruckner'] ?? null
        ]);
    }

    // Método para crear oftalmoscopia
    public function createOftalmoscopia($historiaId, $data) {
        $sql = "INSERT INTO historias_clinicas_oftalmoscopia (
            historia_clinica_id, derecho_excavacion, derecho_descripcion, 
            izquierdo_excavacion, izquierdo_descripcion
        ) VALUES (?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $historiaId,
            $data['derecho_excavacion'] ?? null,
            $data['derecho_descripcion'] ?? null,
            $data['izquierdo_excavacion'] ?? null,
            $data['izquierdo_descripcion'] ?? null
        ]);
    }

    // Método para crear fórmula final
    public function createFormulaFinal($historiaId, $data) {
        $sql = "INSERT INTO historias_clinicas_formula_final (
            historia_clinica_id, 
            derecho_esfera, derecho_cilindro, derecho_eje, derecho_av_lejos, derecho_add, derecho_av_cerca, derecho_dnp, derecho_recomendacion,
            izquierdo_esfera, izquierdo_cilindro, izquierdo_eje, izquierdo_av_lejos, izquierdo_add, izquierdo_av_cerca, izquierdo_dnp, izquierdo_recomendacion
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $historiaId,
            $data['derecho_esfera'] ?? null,
            $data['derecho_cilindro'] ?? null,
            $data['derecho_eje'] ?? null,
            $data['derecho_av_lejos'] ?? null,
            $data['derecho_add'] ?? null,
            $data['derecho_av_cerca'] ?? null,
            $data['derecho_dnp'] ?? null,
            $data['derecho_recomendacion'] ?? null,
            $data['izquierdo_esfera'] ?? null,
            $data['izquierdo_cilindro'] ?? null,
            $data['izquierdo_eje'] ?? null,
            $data['izquierdo_av_lejos'] ?? null,
            $data['izquierdo_add'] ?? null,
            $data['izquierdo_av_cerca'] ?? null,
            $data['izquierdo_dnp'] ?? null,
            $data['izquierdo_recomendacion'] ?? null
        ]);
    }

    // Método para crear diagnósticos
    public function createDiagnosticos($historiaId, $data) {
        if (isset($data['diagnosticos']) && is_array($data['diagnosticos'])) {
            foreach ($data['diagnosticos'] as $index => $diagnostico) {
                if (!empty($diagnostico)) {
                    $sql = "INSERT INTO historias_clinicas_diagnosticos (historia_clinica_id, codigo, diagnostico, descripcion, ojo, principal, orden) 
                            VALUES 
                            (?, ?, ?, ?, ?, ?, ?)";
                    $stmt = $this->pdo->prepare($sql);
                    $stmt->execute([$historiaId, $diagnostico['codigo'], $diagnostico['diagnostico'], $diagnostico['descripcion'], $diagnostico['ojo'], $diagnostico['principal'], $index + 1]);
                }
            }
        }
    }

    public function createObservaciones($historiaId, $data) {
        $sql = "INSERT INTO historias_clinicas_observaciones (historia_clinica_id, observaciones) VALUES (?, ?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId, $data['observaciones']]);
    }

    private function deleteSeccion($tabla, $historiaId) {
        $tablasPermitidas = [
            'historias_clinicas_cuestionario',
            'historias_clinicas_lensometria',
            'historias_clinicas_agudeza_visual',
            'historias_clinicas_examen_motor',
            'historias_clinicas_examen_refractivo',
            'historias_clinicas_examen_oftalmologico',
            'historias_clinicas_oftalmoscopia',
            'historias_clinicas_formula_final',
            'historias_clinicas_observaciones',
            'historias_clinicas_diagnosticos'
        ];

        if (!in_array($tabla, $tablasPermitidas, true)) {
            throw new Exception("Tabla no permitida para eliminación: {$tabla}");
        }

        $stmt = $this->pdo->prepare("DELETE FROM {$tabla} WHERE historia_clinica_id = ?");
        $stmt->execute([$historiaId]);
    }

    public function replaceCuestionario($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_cuestionario', $historiaId);
        if (is_array($data)) {
            $this->createCuestionario($historiaId, $data);
        }
    }

    public function replaceLensometria($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_lensometria', $historiaId);
        if (is_array($data)) {
            $this->createLensometria($historiaId, $data);
        }
    }

    public function replaceAgudezaVisual($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_agudeza_visual', $historiaId);
        if (is_array($data)) {
            $this->createAgudezaVisual($historiaId, $data);
        }
    }

    public function replaceExamenMotor($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_examen_motor', $historiaId);
        if (is_array($data)) {
            $this->createExamenMotor($historiaId, $data);
        }
    }

    public function replaceExamenRefractivo($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_examen_refractivo', $historiaId);
        if (is_array($data)) {
            $this->createExamenRefractivo($historiaId, $data);
        }
    }

    public function replaceExamenOftalmologico($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_examen_oftalmologico', $historiaId);
        if (is_array($data)) {
            $this->createExamenOftalmologico($historiaId, $data);
        }
    }

    public function replaceOftalmoscopia($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_oftalmoscopia', $historiaId);
        if (is_array($data)) {
            $this->createOftalmoscopia($historiaId, $data);
        }
    }

    public function replaceFormulaFinal($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_formula_final', $historiaId);
        if (is_array($data)) {
            $this->createFormulaFinal($historiaId, $data);
        }
    }

    public function replaceObservaciones($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_observaciones', $historiaId);
        if (is_array($data) && array_key_exists('observaciones', $data)) {
            $this->createObservaciones($historiaId, $data);
        } elseif (is_string($data) && $data !== '') {
            $this->createObservaciones($historiaId, ['observaciones' => $data]);
        }
    }

    public function replaceDiagnosticos($historiaId, $data) {
        $this->deleteSeccion('historias_clinicas_diagnosticos', $historiaId);
        if (is_array($data)) {
            $this->createDiagnosticos($historiaId, $data);
        }
    }

    public function update($id, $data) {
        // Construir la consulta SQL dinámicamente con todos los campos
        $fields = array_keys($data);
        $setClause = implode(' = ?, ', $fields) . ' = ?';
        
        $sql = "UPDATE historias_clinicas SET $setClause, updated_at = NOW() WHERE id = ?";
        error_log("🟡 Repository::update - SQL: {$sql}");
        
        $values = array_values($data);
        $values[] = $id;
        error_log("🟡 Repository::update - Valores: " . json_encode($values));
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($values);
        $rowCount = $stmt->rowCount();
        error_log("🟢 Repository::update - Filas afectadas: {$rowCount}");
        
        return $stmt->rowCount();
    }

    public function delete($id, $opticaId) {
        $sql = "
            DELETE hc FROM historias_clinicas hc
            JOIN pacientes p ON hc.paciente_id = p.id
            WHERE hc.id = ? AND p.optica_id = ?
        ";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$id, $opticaId]);
        
        return $stmt->rowCount();
    }

    // Métodos para obtener datos de las tablas relacionadas
    public function getCuestionario($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_cuestionario WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getLensometria($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_lensometria WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getAgudezaVisual($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_agudeza_visual WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getExamenMotor($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_examen_motor WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getExamenRefractivo($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_examen_refractivo WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getExamenOftalmologico($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_examen_oftalmologico WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getOftalmoscopia($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_oftalmoscopia WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getFormulaFinal($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_formula_final WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            unset($result['id'], $result['historia_clinica_id'], $result['created_at'], $result['updated_at']);
        }
        
        return $result ?: [];
    }

    public function getDiagnosticos($historiaId) {
        $sql = "SELECT * FROM historias_clinicas_diagnosticos WHERE historia_clinica_id = ? ORDER BY orden";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $diagnosticos = [];
        foreach ($result as $row) {
            $diagnosticos[] = [
                'codigo' => $row['codigo'] ?? '',
                'diagnostico' => $row['diagnostico'] ?? '',
                'descripcion' => $row['descripcion'] ?? '',
                'ojo' => $row['ojo'] ?? '',
                'principal' => $row['principal'] ?? ''
            ];
        }
        
        return $diagnosticos;
    }

    public function getObservaciones($historiaId) {
        $sql = "SELECT observaciones FROM historias_clinicas_observaciones WHERE historia_clinica_id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$historiaId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return ['observaciones' => $result['observaciones'] ?? ''];
    }


    // Método principal que devuelve todos los datos organizados por secciones
    public function getHistoriaCompleta($historiaId) {
        try {
            // Organizar datos por secciones como se envían desde el frontend
            $datos = [
                'cuestionario' => $this->getCuestionario($historiaId),
                'lensometria' => $this->getLensometria($historiaId),
                'agudeza_visual' => $this->getAgudezaVisual($historiaId),
                'examen_motor' => $this->getExamenMotor($historiaId),
                'examen_refractivo' => $this->getExamenRefractivo($historiaId),
                'examen_oftalmologico' => $this->getExamenOftalmologico($historiaId),
                'oftalmoscopia' => $this->getOftalmoscopia($historiaId),
                'formula_final' => $this->getFormulaFinal($historiaId),
                'diagnosticos' => $this->getDiagnosticos($historiaId),
                'observaciones' => $this->getObservaciones($historiaId)
            ];
            
            return $datos;
            
        } catch (Exception $e) {
            throw $e;
        }
    }

    // Método genérico para ejecutar consultas SQL
    public function ejecutarConsulta($sql, $params = []) {
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            throw new Exception("Error en consulta SQL: " . $e->getMessage());
        }
    }

    // Método para validar y formatear fechas
    private function validateAndFormatDate($date) {
        if (empty($date)) {
            return null;
        }
        
        try {
            // Intentar crear un objeto DateTime
            $dateTime = new DateTime($date);
            
            // Verificar que la fecha es válida
            if ($dateTime === false) {
                error_log("Fecha inválida recibida: " . $date);
                return null;
            }
            
            // Retornar en formato Y-m-d para MySQL
            return $dateTime->format('Y-m-d');
            
        } catch (Exception $e) {
            error_log("Error al procesar fecha: " . $date . " - Error: " . $e->getMessage());
            return null;
        }
    }

    // Método para validar y formatear horas
    private function validateAndFormatTime($time) {
        if (empty($time)) {
            return null;
        }
        
        try {
            // Validar formato HH:MM o HH:MM:SS
            if (!preg_match('/^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/', $time)) {
                error_log("Formato de hora inválido recibido: " . $time);
                return null;
            }
            
            // Si viene en formato HH:MM, agregar segundos
            if (strlen($time) === 5) {
                $time = $time . ':00';
            }
            
            return $time;
            
        } catch (Exception $e) {
            error_log("Error al procesar hora: " . $time . " - Error: " . $e->getMessage());
            return null;
        }
    }
}
