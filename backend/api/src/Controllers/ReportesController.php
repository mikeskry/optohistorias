<?php

require_once __DIR__ . '/../../vendor/autoload.php';
require_once __DIR__ . '/../Services/ReportesService.php';

class ReportesController {
    private $reportesService;
    

    public function __construct() {
        $this->reportesService = new ReportesService();
       
    }


    public function generarReporteExcel($request) {
        try {
            if (!isset($request['fecha_inicial']) || !isset($request['fecha_final'])) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Fechas inicial y final son requeridas'
                ]);
                return;
            }
    
            $fechaInicial = $request['fecha_inicial'];
            $fechaFinal   = $request['fecha_final'];
            $opticaId     = isset($request['optica_id']) ? (int)$request['optica_id'] : null;
    
            if (!$this->validarFecha($fechaInicial) || !$this->validarFecha($fechaFinal)) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Formato de fecha inválido. Use YYYY-MM-DD'
                ]);
                return;
            }
    
            if (strtotime($fechaInicial) > strtotime($fechaFinal)) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'La fecha inicial no puede ser mayor que la fecha final'
                ]);
                return;
            }
    
            $datos = $this->reportesService->obtenerDatosReporte($fechaInicial, $fechaFinal, $opticaId);
    
            if (empty($datos)) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'No se encontraron historias clínicas en el rango de fechas especificado'
                ]);
                return;
            }
    
            // 🔹 Generar Excel con PhpSpreadsheet
            $this->generarExcelConPhpSpreadsheet($datos, $fechaInicial, $fechaFinal);
    
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Error interno del servidor: ' . $e->getMessage()
            ]);
        }
    }

    public function obtenerEstadisticas($request) {
        try {
            // Validar parámetros requeridos
            if (!isset($request['fecha_inicial']) || !isset($request['fecha_final'])) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Fechas inicial y final son requeridas'
                ]);
                return;
            }

            $fechaInicial = $request['fecha_inicial'];
            $fechaFinal = $request['fecha_final'];
            $opticaId = isset($request['optica_id']) ? (int)$request['optica_id'] : null;

            // Obtener estadísticas
            $estadisticas = $this->reportesService->obtenerEstadisticasReporte($fechaInicial, $fechaFinal, $opticaId);

            echo json_encode([
                'success' => true,
                'data' => $estadisticas
            ]);

        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Error interno del servidor: ' . $e->getMessage()
            ]);
        }
    }

    private function validarFecha($fecha) {
        $formato = 'Y-m-d';
        $objetoFecha = DateTime::createFromFormat($formato, $fecha);
        return $objetoFecha && $objetoFecha->format($formato) === $fecha;
    }

    private function generarExcelConPhpSpreadsheet($datos, $fechaInicial, $fechaFinal) {
        // Verificar si PhpSpreadsheet está disponible
        if (!class_exists('PhpOffice\PhpSpreadsheet\Spreadsheet')) {
            // Fallback: generar CSV si PhpSpreadsheet no está disponible
            $this->generarCSV($datos, $fechaInicial, $fechaFinal);
            return;
        }

        try {
            $spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            
            // Título del reporte
            $sheet->setCellValue('A1', 'REPORTE DE HISTORIAS CLÍNICAS');
            $sheet->mergeCells('A1:N1');
            $sheet->getStyle('A1')->getFont()->setBold(true)->setSize(16);
            $sheet->getStyle('A1')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
            
            // Información del período
            $sheet->setCellValue('A2', 'Período: ' . $fechaInicial . ' a ' . $fechaFinal);
            $sheet->mergeCells('A2:N2');
            $sheet->getStyle('A2')->getFont()->setSize(12);
            
            $sheet->setCellValue('A3', 'Fecha de generación: ' . date('Y-m-d H:i:s'));
            $sheet->mergeCells('A3:N3');
            $sheet->getStyle('A3')->getFont()->setSize(10);
            
            // Headers de la tabla (fila 5)
            $headers = [
                'A5' => 'Nombres y Apellidos',
                'B5' => 'Documento',
                'C5' => 'Tipo de Documento',
                'D5' => 'Edad',
                'E5' => 'Fecha de Nacimiento',
                'F5' => 'Sexo',
                'G5' => 'EPS',
                'H5' => 'Tipo de Afiliación',
                'I5' => 'Motivo de Consulta',
                'J5' => 'Tipo de Consulta',
                'K5' => 'Diagnóstico Principal',
                'L5' => 'Diagnóstico Complementario 1',
                'M5' => 'Diagnóstico Complementario 2',
                'N5' => 'Diagnóstico Complementario 3'
            ];
            
            foreach ($headers as $cell => $header) {
                $sheet->setCellValue($cell, $header);
            }
            
            // Estilo para headers
            $headerRange = 'A5:N5';
            $sheet->getStyle($headerRange)->getFont()->setBold(true);
            $sheet->getStyle($headerRange)->getFill()
                ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                ->getStartColor()->setRGB('E2EFDA');
            
            // Datos de las historias clínicas
            $row = 6;
            foreach ($datos as $fila) {
                $sheet->setCellValue('A' . $row, ($fila['nombre'] ?? '') . ' ' . ($fila['apellidos'] ?? ''));
                $sheet->setCellValue('B' . $row, $fila['documento'] ?? '');
                $sheet->setCellValue('C' . $row, $fila['tipo_documento'] ?? '');
                $sheet->setCellValue('D' . $row, $fila['edad'] ?? '');
                $sheet->setCellValue('E' . $row, $fila['fecha_nacimiento'] ?? '');
                $sheet->setCellValue('F' . $row, $fila['sexo'] ?? '');
                $sheet->setCellValue('G' . $row, $fila['eps'] ?? '');
                $sheet->setCellValue('H' . $row, $fila['tipo_afiliacion'] ?? '');
                $sheet->setCellValue('I' . $row, $fila['motivo_consulta'] ?? '');
                $sheet->setCellValue('J' . $row, $fila['tipo_examen'] ?? '');
                $sheet->setCellValue('K' . $row, $fila['diagnostico_principal'] ?? '');
                $sheet->setCellValue('L' . $row, $fila['diagnostico_complementario_1'] ?? '');
                $sheet->setCellValue('M' . $row, $fila['diagnostico_complementario_2'] ?? '');
                $sheet->setCellValue('N' . $row, $fila['diagnostico_complementario_3'] ?? '');
                $row++;
            }
            
            // Autoajustar columnas
            foreach (range('A', 'N') as $col) {
                $sheet->getColumnDimension($col)->setAutoSize(true);
            }
            
            // Bordes para toda la tabla
            $lastRow = $row - 1;
            $tableRange = 'A5:N' . $lastRow;
            $sheet->getStyle($tableRange)->getBorders()->getAllBorders()
                ->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
            
            // Generar archivo
            $filename = 'Reporte_Historias_Clinicas_' . $fechaInicial . '_a_' . $fechaFinal . '.xlsx';
            
            if (ob_get_length()) {
                ob_end_clean();
            }
            
            header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            header('Content-Disposition: attachment; filename="' . $filename . '"');
            header('Cache-Control: max-age=0');
            
            $writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreadsheet);
            $writer->save('php://output');
            exit;
            
        } catch (Exception $e) {
            // Si hay error con PhpSpreadsheet, usar CSV como fallback
            $this->generarCSV($datos, $fechaInicial, $fechaFinal);
        }
    }

    private function generarCSV($datos, $fechaInicial, $fechaFinal) {
        $filename = 'Reporte_Historias_Clinicas_' . $fechaInicial . '_a_' . $fechaFinal . '.csv';
        
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Cache-Control: max-age=0');
        
        $output = fopen('php://output', 'w');
        
        // BOM para UTF-8
        fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));
        
        // Headers
        $headers = [
            'Nombres y Apellidos',
            'Documento',
            'Tipo de Documento',
            'Edad',
            'Fecha de Nacimiento',
            'Sexo',
            'EPS',
            'Tipo de Afiliación',
            'Motivo de Consulta',
            'Tipo de Consulta',
            'Diagnóstico Principal',
            'Diagnóstico Complementario 1',
            'Diagnóstico Complementario 2',
            'Diagnóstico Complementario 3'
        ];
        fputcsv($output, $headers, ';');
        
        // Datos
        foreach ($datos as $fila) {
            $row = [
                ($fila['nombre'] ?? '') . ' ' . ($fila['apellidos'] ?? ''),
                $fila['documento'] ?? '',
                $fila['tipo_documento'] ?? '',
                $fila['edad'] ?? '',
                $fila['fecha_nacimiento'] ?? '',
                $fila['sexo'] ?? '',
                $fila['eps'] ?? '',
                $fila['tipo_afiliacion'] ?? '',
                $fila['motivo_consulta'] ?? '',
                $fila['tipo_examen'] ?? '',
                $fila['diagnostico_principal'] ?? '',
                $fila['diagnostico_complementario_1'] ?? '',
                $fila['diagnostico_complementario_2'] ?? '',
                $fila['diagnostico_complementario_3'] ?? ''
            ];
            fputcsv($output, $row, ';');
        }
        
        fclose($output);
        exit;
    }
}
?>
