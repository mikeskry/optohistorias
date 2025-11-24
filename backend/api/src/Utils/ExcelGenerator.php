<?php

class ExcelGenerator {
    
    public function generarReporteHistoriasClinicas($headers, $datos, $fechaInicial, $fechaFinal) {
        // Intentar usar PhpSpreadsheet si está disponible
        if (class_exists('PhpOffice\PhpSpreadsheet\Spreadsheet')) {
            return $this->generarReporteConPhpSpreadsheet($headers, $datos, $fechaInicial, $fechaFinal);
        } else {
            // Fallback a CSV si PhpSpreadsheet no está disponible
            return $this->generarReporteCSV($headers, $datos, $fechaInicial, $fechaFinal);
        }
    }

    private function generarReporteCSV($headers, $datos, $fechaInicial, $fechaFinal) {
        // Crear archivo CSV temporal
        $archivoCsv = tempnam(sys_get_temp_dir(), 'reporte_historias_clinicas_') . '.csv';
        
        $handle = fopen($archivoCsv, 'w');
        
        if (!$handle) {
            throw new Exception("No se pudo crear el archivo CSV");
        }

        // Escribir BOM para UTF-8 (para que Excel reconozca correctamente los caracteres especiales)
        fwrite($handle, "\xEF\xBB\xBF");

        // Escribir información del reporte
        fputcsv($handle, ['REPORTE DE HISTORIAS CLÍNICAS']);
        fputcsv($handle, ['Período:', $fechaInicial . ' a ' . $fechaFinal]);
        fputcsv($handle, ['Fecha de generación:', date('Y-m-d H:i:s')]);
        fputcsv($handle, []); // Línea en blanco

        // Escribir headers
        fputcsv($handle, $headers);

        // Escribir datos
        foreach ($datos as $fila) {
            fputcsv($handle, $fila);
        }

        fclose($handle);
        
        return $archivoCsv;
    }

    /**
     * Método usando PhpSpreadsheet para generar archivos Excel reales
     */
    public function generarReporteConPhpSpreadsheet($headers, $datos, $fechaInicial, $fechaFinal) {
        // Verificar si PhpSpreadsheet está disponible
        if (!class_exists('PhpOffice\PhpSpreadsheet\Spreadsheet')) {
            throw new Exception("PhpSpreadsheet no está disponible. Instale con: composer install");
        }

        $spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // Configurar información del reporte
        $sheet->setTitle('Reporte Historias Clínicas');
        
                // Título del reporte
                $sheet->setCellValue('A1', 'REPORTE DE HISTORIAS CLÍNICAS');
                $sheet->mergeCells('A1:U1');
                $sheet->getStyle('A1')->getFont()->setBold(true)->setSize(16);
                $sheet->getStyle('A1')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        
        // Información del período
        $sheet->setCellValue('A2', 'Período:');
        $sheet->setCellValue('B2', $fechaInicial . ' a ' . $fechaFinal);
        $sheet->setCellValue('A3', 'Fecha de generación:');
        $sheet->setCellValue('B3', date('Y-m-d H:i:s'));

        // Headers de la tabla (fila 5)
        $columna = 'A';
        foreach ($headers as $header) {
            $sheet->setCellValue($columna . '5', $header);
            $sheet->getStyle($columna . '5')->getFont()->setBold(true);
            $sheet->getStyle($columna . '5')->getFill()
                  ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                  ->getStartColor()->setARGB('FF4472C4');
            $sheet->getStyle($columna . '5')->getFont()->getColor()->setARGB('FFFFFFFF');
            $columna++;
        }

        // Datos (desde fila 6)
        $fila = 6;
        foreach ($datos as $filaDatos) {
            $columna = 'A';
            foreach ($filaDatos as $valor) {
                $sheet->setCellValue($columna . $fila, $valor);
                $columna++;
            }
            $fila++;
        }

                // Ajustar ancho de columnas
                foreach (range('A', 'U') as $columna) {
                    $sheet->getColumnDimension($columna)->setAutoSize(true);
                }

                // Aplicar bordes a toda la tabla
                $ultimaFila = count($datos) + 5;
                $sheet->getStyle('A5:U' . $ultimaFila)->getBorders()->getAllBorders()->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);

        // Crear archivo temporal
        $archivo = tempnam(sys_get_temp_dir(), 'reporte_historias_clinicas_') . '.xlsx';
        
        $writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreadsheet);
        $writer->save($archivo);

        return $archivo;
    }
}
?>
