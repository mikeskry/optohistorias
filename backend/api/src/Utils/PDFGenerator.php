<?php
require_once __DIR__ . '/../../config.php';

class PDFGenerator {
    
    public function generateHistoriaPDF($historia, $paciente) {
        // Crear PDF básico (en producción usar FPDF o TCPDF)
        $html = $this->generateHTML($historia, $paciente);
        
        // Por ahora retornamos HTML, en producción se convertiría a PDF
        return $html;
    }
    
    private function generateHTML($historia, $paciente) {
        $fecha = date('d/m/Y', strtotime($historia['fecha_consulta']));
        
        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Historia Clínica - ' . $paciente['nombre'] . ' ' . $paciente['apellidos'] . '</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .section { margin-bottom: 25px; }
                .section-title { background: #f0f0f0; padding: 10px; font-weight: bold; margin-bottom: 15px; }
                .field { margin-bottom: 10px; }
                .field-label { font-weight: bold; display: inline-block; width: 150px; }
                .field-value { display: inline-block; }
                .firma { margin-top: 50px; text-align: center; }
                .firma img { max-width: 200px; max-height: 100px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>HISTORIA CLÍNICA</h1>
                <h2>Sistema Óptico</h2>
                <p>Fecha de consulta: ' . $fecha . '</p>
            </div>
            
            <div class="section">
                <div class="section-title">DATOS DEL PACIENTE</div>
                <div class="field">
                    <span class="field-label">Nombre:</span>
                    <span class="field-value">' . $paciente['nombre'] . ' ' . $paciente['apellidos'] . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Documento:</span>
                    <span class="field-value">' . $paciente['documento'] . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Fecha de nacimiento:</span>
                    <span class="field-value">' . ($paciente['fecha_nacimiento'] ? date('d/m/Y', strtotime($paciente['fecha_nacimiento'])) : 'No especificada') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Teléfono:</span>
                    <span class="field-value">' . ($paciente['telefono'] ?: 'No especificado') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Email:</span>
                    <span class="field-value">' . ($paciente['email'] ?: 'No especificado') . '</span>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">CUESTIONARIO</div>
                <div class="field">
                    <span class="field-label">Motivo de consulta:</span>
                    <span class="field-value">' . ($historia['motivo_consulta'] ?: 'No especificado') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Síntomas:</span>
                    <span class="field-value">' . ($historia['sintomas'] ?: 'No especificados') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Antecedentes:</span>
                    <span class="field-value">' . ($historia['antecedentes'] ?: 'No especificados') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Medicamentos:</span>
                    <span class="field-value">' . ($historia['medicamentos'] ?: 'No especificados') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Alergias:</span>
                    <span class="field-value">' . ($historia['alergias'] ?: 'No especificadas') . '</span>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">AGUDEZA VISUAL</div>
                <table>
                    <tr>
                        <th>Ojo</th>
                        <th>Lejos</th>
                        <th>Cerca</th>
                    </tr>
                    <tr>
                        <td>Ojo Derecho (OD)</td>
                        <td>' . ($historia['av_od_lejos'] ?: 'No especificado') . '</td>
                        <td>' . ($historia['av_od_cerca'] ?: 'No especificado') . '</td>
                    </tr>
                    <tr>
                        <td>Ojo Izquierdo (OI)</td>
                        <td>' . ($historia['av_oi_lejos'] ?: 'No especificado') . '</td>
                        <td>' . ($historia['av_oi_cerca'] ?: 'No especificado') . '</td>
                    </tr>
                </table>
            </div>
            
            <div class="section">
                <div class="section-title">EXAMEN REFRACTIVO</div>
                <table>
                    <tr>
                        <th>Ojo</th>
                        <th>Esfera</th>
                        <th>Cilindro</th>
                        <th>Eje</th>
                    </tr>
                    <tr>
                        <td>Ojo Derecho (OD)</td>
                        <td>' . ($historia['esfera_od'] ?: 'No especificado') . '</td>
                        <td>' . ($historia['cilindro_od'] ?: 'No especificado') . '</td>
                        <td>' . ($historia['eje_od'] ?: 'No especificado') . '</td>
                    </tr>
                    <tr>
                        <td>Ojo Izquierdo (OI)</td>
                        <td>' . ($historia['esfera_oi'] ?: 'No especificado') . '</td>
                        <td>' . ($historia['cilindro_oi'] ?: 'No especificado') . '</td>
                        <td>' . ($historia['eje_oi'] ?: 'No especificado') . '</td>
                    </tr>
                </table>
                <div class="field">
                    <span class="field-label">Adición:</span>
                    <span class="field-value">' . ($historia['adicion'] ?: 'No especificada') . '</span>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">OBSERVACIONES</div>
                <div class="field">
                    <span class="field-label">Observaciones:</span>
                    <span class="field-value">' . ($historia['observaciones'] ?: 'No especificadas') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Diagnóstico:</span>
                    <span class="field-value">' . ($historia['diagnostico'] ?: 'No especificado') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Tratamiento:</span>
                    <span class="field-value">' . ($historia['tratamiento'] ?: 'No especificado') . '</span>
                </div>
                <div class="field">
                    <span class="field-label">Próxima cita:</span>
                    <span class="field-value">' . ($historia['proxima_cita'] ? date('d/m/Y', strtotime($historia['proxima_cita'])) : 'No especificada') . '</span>
                </div>
            </div>
            
            <div class="firma">
                <p>Firma del profesional</p>
                <p>_________________________</p>
                <p>Fecha: ' . $fecha . '</p>
            </div>
        </body>
        </html>';
        
        return $html;
    }
}
?>



