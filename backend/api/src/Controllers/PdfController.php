<?php
require_once __DIR__ . '/../../config.php';

class PdfController {
    
    public function generateHistoriaClinicaPDF($historiaId) {
        try {
            // Limpiar cualquier output previo
            if (ob_get_level()) {
                ob_end_clean();
            }
            
            // Obtener datos de la historia clínica
            $historiaData = $this->getHistoriaData($historiaId);
            if (!$historiaData) {
                errorResponse('Historia clínica no encontrada', 404);
                return;
            }
            
            // Generar HTML del PDF
            $html = $this->generateHTML($historiaData);
            
            // Generar PDF usando TCPDF
            $pdf = $this->generatePDF($html);
            
            // Enviar PDF como respuesta
            $pdf->Output('historia-clinica-' . $historiaData['paciente']['documento'] . '.pdf', 'D');
            
        } catch (Exception $e) {
            errorResponse('Error al generar el PDF: ' . $e->getMessage(), 500);
        }
    }
    
    private function getHistoriaData($historiaId) {
        // Obtener datos de la historia clínica desde la base de datos
        $pdo = getDBConnection();
        
        $sql = "
            SELECT hc.id as historia_id, hc.optica_id, hc.paciente_id, hc.usuario_id, hc.fecha_consulta, hc.motivo_consulta, hc.observaciones, hc.created_at, hc.updated_at,
                   p.id as paciente_id_real, p.documento, p.tipo_documento, p.nombre, p.apellidos, p.email, p.telefono, p.fecha_nacimiento, p.genero, p.rh, p.nombre_acudiente, p.telefono_acudiente, p.direccion, p.eps, p.tipo_afiliacion, p.activo,
                   o.nombre as optica_nombre, o.logo, o.firma,
                   c.fecha_control
            FROM historias_clinicas hc
            JOIN pacientes p ON hc.paciente_id = p.id
            JOIN usuarios u ON hc.usuario_id = u.id
            JOIN opticas o ON u.optica_id = o.id
            LEFT JOIN historias_clinicas_cuestionario c ON hc.id = c.historia_clinica_id
            WHERE hc.id = ?
        ";
        $stmt = $pdo->prepare($sql);

        $stmt->execute([$historiaId]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$data) {
            return null;
        }
        
        // Organizar datos por secciones
        return [
            'historia' => [
                'id' => $data['historia_id'],
                'optica_id' => $data['optica_id'],
                'paciente_id' => $data['paciente_id'],
                'usuario_id' => $data['usuario_id'],
                'fecha_consulta' => $data['fecha_consulta'],
                'motivo_consulta' => $data['motivo_consulta'],
                'observaciones' => $data['observaciones'],
                'fecha_control' => $data['fecha_control'],
                'created_at' => $data['created_at'],
                'updated_at' => $data['updated_at']
            ],
            'paciente' => [
                'nombre' => $data['nombre'],
                'apellidos' => $data['apellidos'],
                'documento' => $data['documento'],
                'tipo_documento' => $data['tipo_documento'],
                'fecha_nacimiento' => $data['fecha_nacimiento'],
                'genero' => $data['genero'],
                'telefono' => $data['telefono'],
                'email' => $data['email'],
                'rh' => $data['rh'],
                'nombre_acudiente' => $data['nombre_acudiente']
            ],
            'optica' => [
                'nombre' => $data['optica_nombre'],
                'firma' => $data['firma'],
                'logo' => $data['logo']
            ]
        ];
    }
    
    private function generateHTML($data) {
        $paciente = $data['paciente'];
        $optica = $data['optica'];
        $historia = $data['historia'];
        $fechaEmision = date('d/m/Y');
        
        // Obtener datos de la fórmula desde la historia
        $formulaData = $this->getFormulaData($historia);
        
        // Obtener observaciones
        $observacionesTabla = $this->getObservacionesData($historia);
        $observaciones = $observacionesTabla ?? $historia['observaciones'] ?? 'EXAMEN MOTOR NORMAL, EXAMEN ESTERNO NORMAL Y EXAMEN FOTALMOLOGICO NORMAL.';
        
        // Obtener diagnósticos
        $diagnosticos = $this->getDiagnosticosData($historia);
        
        return '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    font-size: 8px; 
                    margin: 0; 
                    padding: 4px;
                    line-height: 1.1;
                    color: #000;
                    background-color: white;
                }

                table td.color-blue-clear, .formula-table th, .diagnostico-table th {
                    background-color: #E5F2FF;
                    color: #1e3a8a;
                    font-weight: bold;
                }

                .section-header { 
                    background-color: #1e3a8a;
                    color: white;
                    padding: 4px 6px;
                    font-weight: bold;
                    font-size: 9px;
                    text-transform: uppercase;
                    text-align: center;
                }
                    
                .formula-table { 
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 4px;
                    font-size: 8px;
                }
                .formula-table th {
                    color: white;
                    padding: 2px;
                    text-align: center;
                    font-size: 8px;
                }
                .formula-table td { 
                    border: 0.5pt solid #ccc;
                    padding: 2px;
                    text-align: center;
                    background-color: white;
                    font-size: 8px;
                    border-collapse: collapse;
                }
                .diagnostico-table { 
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 4px;
                    font-size: 8px;
                }
                .diagnostico-table th { 
                    color: white;
                    padding: 2px;
                    text-align: center;                    
                    border: 0.5pt solid #000;
                    font-size: 8px;
                }
                .diagnostico-table td { 
                    border: 0.5pt solid #ccc;
                    padding: 2px;
                    text-align: center;
                    background-color: white;
                    min-height: 15px;
                    font-size: 8px;
                }
                .observaciones-content { 
                    padding: 3px 6px;
                    background-color: white;
                    border: 0.5pt 1px solid #ccc;
                    font-size: 8px;
                    min-height: 20px;
                }
                .signatures { 
                    display: flex; 
                    justify-content: space-between; 
                    margin-top: 2px;
                }
                .signature-box { 
                    width: 45%; 
                    text-align: center; 
                    font-size: 7px;
                    font-weight: bold;
                }
                .signature-line { 
                    border-bottom: 1px solid #000; 
                    height: 1px; 
                    margin-top: 0px; 
                }
                .footer { 
                    font-size: 5px; 
                    text-align: left;
                    margin-top: 0px;
                    padding-top: 0px;
                }
                .signature-text { 
                    font-size: 6px; 
                    margin-top: 0px;
                    margin-bottom: 0px;
                }
                .firma-profesional {
                    margin-bottom: 0px !important;
                    padding-bottom: 0px !important;
                    display: block;
                }
                .optica-info { 
                    text-align: center; 
                }
                .optica-logo { 
                    max-height: 10px; 
                    max-width: 100px; 
                }
                .optica-name { 
                    font-size: 11px; 
                    font-weight: bold; 
                    color: #1e3a8a;
                }
            </style>
        </head>
        <body>
            <!-- LOGO/NOMBRE DE ÓPTICA -->
            <div class="optica-info">
                ' . $this->getOpticaLogoOrName($optica) . '
            </div>

            <!-- DATOS DEL PACIENTE -->
            <div class="section-header">DATOS DEL PACIENTE</div>
            <table class="formula-table">
                <tbody>
                    <tr>
                        <td class="color-blue-clear">Nombres</td>
                        <td colspan="2">' . $this->formatUpper($paciente['nombre'] ?? '') . '</td>
                        <td class="color-blue-clear">Apellidos</td>
                        <td colspan="2">' . $this->formatUpper($paciente['apellidos'] ?? '') . '</td>
                    </tr>
                    <tr>                
                        <td class="color-blue-clear">Tipo Doc</td>
                        <td>' . $this->formatUpper($paciente['tipo_documento'] ?? '') . '</td>
                        <td class="color-blue-clear">Documento</td>                            
                        <td>' . $this->formatUpper($paciente['documento'] ?? '') . '</td>     
                        <td class="color-blue-clear">Genero</td>
                        <td>' . $this->formatUpper($paciente['genero'] ?? '') . '</td>                                                  
                    </tr>
                    <tr>
                        <td class="color-blue-clear">Nacimiento</td>
                        <td>' . $this->formatUpper($paciente['fecha_nacimiento'] ? date('d/m/Y', strtotime($paciente['fecha_nacimiento'])) : '') . '</td>
                        <td class="color-blue-clear">Edad</td>
                        <td>' . $this->calculateAge($paciente['fecha_nacimiento']) . '</td>         
                        <td class="color-blue-clear">RH</td>
                        <td>' . $this->formatUpper($paciente['rh'] ?? '') . '</td>              
                    </tr>
                    <tr>  
                        <td class="color-blue-clear">Teléfono</td>
                        <td>' . $this->formatUpper($paciente['telefono'] ?? '') . '</td>
                        <td class="color-blue-clear">Correo</td>
                        <td colspan="3">' . $this->formatUpper($paciente['email'] ?? '') . '</td>
                    </tr>
                    <tr>                        
                        <td class="color-blue-clear">Acudiente</td>
                        <td colspan="2">' . $this->formatUpper($paciente['nombre_acudiente'] ?? '') . '</td>
                        <td class="color-blue-clear">Fecha próximo control</td>
                        <td colspan="2">' . $this->formatUpper($historia['fecha_control'] ? date('d/m/Y', strtotime($historia['fecha_control'])) : '') . '</td>                        
                    </tr>
                </tbody>
            </table>
            <br>
        
            <!-- FÓRMULA -->
            <div class="section-header">FÓRMULA</div>
            <table class="formula-table">
                <thead>
                    <tr>
                        <th>Ojo</th>
                        <th>Esfera</th>
                        <th>Cilindro</th>
                        <th>Eje</th>
                        <th>AV Lejos</th>
                        <th>ADD</th>
                        <th>AV Cerca</th>
                        <th>DNP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Derecho</td>
                        <td>' . $this->formatUpper($formulaData['derecho']['esfera'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['derecho']['cilindro'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['derecho']['eje'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['derecho']['av_lejos'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['derecho']['add'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['derecho']['av_cerca'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['derecho']['dnp'] ?? '') . '</td>
                    </tr>
                    <tr>
                        <td>Izquierdo</td>
                        <td>' . $this->formatUpper($formulaData['izquierdo']['esfera'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['izquierdo']['cilindro'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['izquierdo']['eje'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['izquierdo']['av_lejos'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['izquierdo']['add'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['izquierdo']['av_cerca'] ?? '') . '</td>
                        <td>' . $this->formatUpper($formulaData['izquierdo']['dnp'] ?? '') . '</td>
                    </tr>
                    <tr class="color-blue-clear">
                        <td colspan="8" class="color-blue-clear">Recomendación</td>
                    </tr>
                    <tr>
                        <td colspan="8">' . $this->formatUpper($formulaData['derecho']['recomendacion'] ?? '') . '</td>
                    </tr>
                </tbody>
            </table>
            <br>
            <!-- OBSERVACIONES -->
            <div class="section-header">OBSERVACIONES</div>
            <table class="diagnostico-table">
                <tbody>
                    <tr>
                        <td>' . $this->formatUpper($observaciones ?? '') . '</td>
                    </tr>
                </tbody>
            </table>
            
            <br>
            
            <!-- DIAGNÓSTICO -->
            <div class="section-header">DIAGNÓSTICO</div>
            <table class="diagnostico-table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Diagnóstico</th>
                        <th>Descripción</th>
                        <th>Ojo</th>
                        <th>Principal</th>
                    </tr>
                </thead>
                <tbody>
                    ' . $diagnosticos . '
                </tbody>
            </table>

            <br>
            <br>

            <table class="table-firmas" cellspacing="1" cellpadding="1">
                <tr>
                    <td></td>
                    <td style="vertical-align: bottom; padding-bottom: 0px;">
                        ' . $this->getFirmaProfesional($optica) . '
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="signature-line"></div>
                        <div class="signature-text">FIRMA DEL PACIENTE O ACUDIENTE</div>                        
                    </td>
                    <td>                        
                        <div class="signature-line"></div>
                        <div class="signature-text">FIRMA PROFESIONAL</div>                        
                    </td>
                </tr>
            </table>

            <br>

            <!-- FOOTER -->
            <div class="footer">
                *AV: AGUDEZA VISUAL, ADD: ADICIÓN, DNP: DISTANCIA NASO-PUPILAR, CODIGO: SEGÚN LA CIE-10. LA VIGENCIA DE LA FORMULA VA A 3 MESES SIN USO LO CUAL VA DESDE LA FECHA DE HOY, RECUERDE HACER EL CONTROL SEGÚN LA RECOMENDACIÓN, GARANTIZAMOS LA ADAPTACIÓN A LA FORMULA SOLO DE NUESTROS PRODUCTOS. NO OLVIDE RECOMENDARNOS.
            </div>
            
        </body>
        </html>';
    }
    
    private function generatePDF($html) {
        require_once __DIR__ . '/../../vendor/autoload.php';
        
        // Media carta horizontal: 215.9 x 139.7 mm
        $pdf = new TCPDF('L', 'mm', array(215.9, 139.7), true, 'UTF-8', false);
        
        // Configurar PDF
        $pdf->SetCreator('Óptica Cast');
        $pdf->SetAuthor('Óptica Cast');
        $pdf->SetTitle('Historia Clínica');
        $pdf->SetSubject('Historia Clínica');
        
        // Configurar márgenes más pequeños para media carta
        $pdf->SetMargins(5, 0, 5, 0);
        $pdf->SetHeaderMargin(0);
        $pdf->SetFooterMargin(0);
        $pdf->SetAutoPageBreak(false, 0);
        
        // Agregar página
        $pdf->AddPage();
        
        // Escribir HTML
        $pdf->writeHTML($html, true, false, true, false, '');
        
        return $pdf;
    }
    
    private function getFormulaData($historia) {
        // Obtener datos de la fórmula desde la base de datos
        $pdo = getDBConnection();
        
        $stmt = $pdo->prepare("
            SELECT * FROM historias_clinicas_formula_final 
            WHERE historia_clinica_id = ?
        ");
        
        $stmt->execute([$historia['id']]);
        $formula = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$formula) {
            // Valores por defecto si no hay fórmula
            return [
                'derecho' => [
                    'esfera' => 'N',
                    'cilindro' => '-',
                    'eje' => '-°',
                    'av_lejos' => '20/20',
                    'add' => '+',
                    'av_cerca' => '0.50 M',
                    'dnp' => '31',
                    'recomendacion' => ''
                ],
                'izquierdo' => [
                    'esfera' => 'N',
                    'cilindro' => '-',
                    'eje' => '-°',
                    'av_lejos' => '20/20',
                    'add' => '+',
                    'av_cerca' => '0.50 M',
                    'dnp' => '31'
                ]
            ];
        }
        
        return [
            'derecho' => [
                'esfera' => $this->valueOrDefault($formula['derecho_esfera'], 'N'),
                'cilindro' => $this->valueOrDefault($formula['derecho_cilindro'], '-'),
                'eje' => $this->formatAxisValue($formula['derecho_eje']),
                'av_lejos' => $this->valueOrDefault($formula['derecho_av_lejos'], '20/20'),
                'add' => $this->valueOrDefault($formula['derecho_add'], '+'),
                'av_cerca' => $this->valueOrDefault($formula['derecho_av_cerca'], '0.50 M'),
                'dnp' => $this->valueOrDefault($formula['derecho_dnp'], '31'),
                'recomendacion' => $this->valueOrDefault($formula['derecho_recomendacion'], '')
            ],
            'izquierdo' => [
                'esfera' => $this->valueOrDefault($formula['izquierdo_esfera'], 'N'),
                'cilindro' => $this->valueOrDefault($formula['izquierdo_cilindro'], '-'),
                'eje' => $this->formatAxisValue($formula['izquierdo_eje']),
                'av_lejos' => $this->valueOrDefault($formula['izquierdo_av_lejos'], '20/20'),
                'add' => $this->valueOrDefault($formula['izquierdo_add'], '+'),
                'av_cerca' => $this->valueOrDefault($formula['izquierdo_av_cerca'], '0.50 M'),
                'dnp' => $this->valueOrDefault($formula['izquierdo_dnp'], '31')
            ]
        ];
    }
    
    private function getDiagnosticosData($historia) {
        $pdo = getDBConnection();
        $diagnosticos = [];
        $stmt = $pdo->prepare("
                SELECT codigo, diagnostico, descripcion, ojo, principal 
                FROM historias_clinicas_diagnosticos 
                WHERE historia_clinica_id = ? 
                ORDER BY orden ASC
            ");
            $stmt->execute([$historia['id']]);
            $diagnosticos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Si no hay diagnósticos, devolver filas vacías
        if (empty($diagnosticos)) {
            return '
                <tr><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td></tr>
            ';
        }
        
        // Generar filas con los datos de los diagnósticos
        $html = '';
        $maxRows = 4; // Máximo 3 filas
        $count = 0;
        
        foreach ($diagnosticos as $diagnostico) {
            if ($count >= $maxRows) break;
            
            $codigo = $this->formatUpper($diagnostico['codigo'] ?? '');
            $diagnosticoText = $this->formatUpper($diagnostico['diagnostico'] ?? '');
            $descripcion = $this->formatUpper($diagnostico['descripcion'] ?? '');
            $ojo = $this->formatUpper($diagnostico['ojo'] ?? '');
            $principal = $this->formatUpper(($diagnostico['principal'] ?? false) ? 'Sí' : 'No');
            
            $html .= '<tr>';
            $html .= '<td>' . $codigo . '</td>';
            $html .= '<td>' . $diagnosticoText . '</td>';
            $html .= '<td>' . $descripcion . '</td>';
            $html .= '<td>' . $ojo . '</td>';
            $html .= '<td>' . $principal . '</td>';
            $html .= '</tr>';
            
            $count++;
        }
        
        // Completar con filas vacías si es necesario
        while ($count < $maxRows) {
            $html .= '<tr><td></td><td></td><td></td><td></td><td></td></tr>';
            $count++;
        }
        
        return $html;
    }

    private function getObservacionesData($historia) {
        $pdo = getDBConnection();
        $stmt = $pdo->prepare("
            SELECT observaciones 
            FROM historias_clinicas_observaciones 
            WHERE historia_clinica_id = ?
            ORDER BY id DESC
            LIMIT 1
        ");
        $stmt->execute([$historia['id']]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row && isset($row['observaciones']) && $row['observaciones'] !== '') {
            return $row['observaciones'];
        }

        return null;
    }
    
    private function getOpticaLogoOrName($optica) {
        $nombre = $optica['nombre'] ?: 'Óptica Cast';
        
        // Intentar con el campo 'logo' (campo correcto para el logo)
        if (!empty($optica['logo']) && strpos($optica['logo'], '.') !== false) {
            $logoPath = __DIR__ . '/../../uploads/' . $optica['logo'];
            
            // Verificar si el archivo existe
            if (file_exists($logoPath)) {
                    // Redimensionar imagen para PDF (máximo 100x50 píxeles)
                    $image = $this->resizeImageForPDF($logoPath, 100, 50);
                if ($image) {
                    return '<img src="data:image/png;base64,' . $image . '" class="optica-logo" alt="Logo">';
                }
            }
        }
                
        // Si no tiene logo, mostrar solo el nombre
        return '<div class="optica-name">' . $this->formatUpper($nombre) . '</div>';
    }
    
    private function calculateAge($birthDate) {
        if (!$birthDate) return '-';
        
        $birth = new DateTime($birthDate);
        $today = new DateTime();
        $age = $today->diff($birth)->y;
        
        return $this->toUpper($age . ' años');
    }

    private function toUpper($value) {
        if ($value === null) {
            return '';
        }

        if (is_bool($value)) {
            $value = $value ? '1' : '0';
        }

        if (is_array($value) || is_object($value)) {
            return '';
        }

        $string = (string) $value;
        if ($string === '') {
            return '';
        }

        return mb_strtoupper($string, 'UTF-8');
    }

    private function formatUpper($value) {
        return htmlspecialchars($this->toUpper($value));
    }
    
    private function valueOrDefault($value, $default) {
        return ($value === null || $value === '') ? $default : $value;
    }

    private function formatAxisValue($value) {
        if ($value === null) {
            return '-°';
        }

        $axis = trim((string) $value);

        if ($axis === '' || $axis === '-' || $axis === '-°') {
            return '-°';
        }

        if (strpos($axis, '°') !== false) {
            return $axis;
        }

        if (preg_match('/^-?\d+$/', $axis)) {
            $numericValue = (int) $axis;
            return $numericValue . '°';
        }

        return $axis;
    }

    private function resizeImageForPDF($imagePath, $maxWidth, $maxHeight) {
        try {
            $imageInfo = getimagesize($imagePath);
            if (!$imageInfo) return false;
            
            $originalWidth = $imageInfo[0];
            $originalHeight = $imageInfo[1];
            $mimeType = $imageInfo['mime'];
            
            // Crear imagen desde archivo
            switch ($mimeType) {
                case 'image/jpeg':
                    $sourceImage = imagecreatefromjpeg($imagePath);
                    break;
                case 'image/png':
                    $sourceImage = imagecreatefrompng($imagePath);
                    break;
                case 'image/gif':
                    $sourceImage = imagecreatefromgif($imagePath);
                    break;
                default:
                    return false;
            }
            
            if (!$sourceImage) return false;
            
            // Calcular nuevas dimensiones manteniendo proporción
            $ratio = min($maxWidth / $originalWidth, $maxHeight / $originalHeight);
            $newWidth = intval($originalWidth * $ratio);
            $newHeight = intval($originalHeight * $ratio);
            
            // Crear nueva imagen redimensionada
            $resizedImage = imagecreatetruecolor($newWidth, $newHeight);
            
            // Preservar transparencia para PNG
            if ($mimeType == 'image/png') {
                imagealphablending($resizedImage, false);
                imagesavealpha($resizedImage, true);
                $transparent = imagecolorallocatealpha($resizedImage, 255, 255, 255, 127);
                imagefilledrectangle($resizedImage, 0, 0, $newWidth, $newHeight, $transparent);
            }
            
            // Redimensionar
            imagecopyresampled($resizedImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);
            
            // Convertir a base64
            ob_start();
            imagepng($resizedImage, null, 8); // Compresión media
            $imageData = ob_get_contents();
            ob_end_clean();
            
            // Liberar memoria
            imagedestroy($sourceImage);
            imagedestroy($resizedImage);
            
            return base64_encode($imageData);
            
        } catch (Exception $e) {
            return false;
        }
    }
    
    private function getFirmaProfesional($optica) {
        // Verificar si la óptica tiene firma (campo firma que no sea logo)
        if (!empty($optica['firma']) && strpos($optica['firma'], '.') !== false) {
            // Verificar si es una firma (no un logo)
            // Si el archivo está en carpeta 'firmas' o tiene 'firma' en el nombre, es una firma
            if (strpos($optica['firma'], 'firma') !== false || strpos($optica['firma'], '/firmas/') !== false) {
                $firmaPath = __DIR__ . '/../../uploads/' . $optica['firma'];
                
                // Verificar si el archivo existe
                if (file_exists($firmaPath)) {
                    // Redimensionar firma para PDF (máximo 100x40 píxeles)
                    $image = $this->resizeImageForPDF($firmaPath, 90, 36);
                    if ($image) {
                        return '<img src="data:image/png;base64,' . $image . '" class="firma-profesional" alt="Firma" style="max-width: 90px; max-height: 36px; margin-bottom: 0px; padding-bottom: 0px; display: block;">';
                    }
                }
            }
        }
        
        // Si no tiene firma, mostrar solo la línea
        return '<div class="signature-line"></div>';
    }
}
