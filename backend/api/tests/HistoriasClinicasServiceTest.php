<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../src/Services/HistoriasClinicasService.php';

class FakeHistoriasClinicasRepository
{
    public $findByIdResponses = [];
    public $findByIdCallCount = 0;
    public $historiaCompletaResponse = [];
    public $updateCallCount = 0;
    public $updateArguments = [];
    public $transactions = [];
    public $replacements = [];

    public function __construct(array $findByIdResponses = [], array $historiaCompletaResponse = [])
    {
        $this->findByIdResponses = $findByIdResponses;
        $this->historiaCompletaResponse = $historiaCompletaResponse;
    }

    public function findById($id, $opticaId)
    {
        $response = $this->findByIdResponses[$this->findByIdCallCount] ?? null;
        $this->findByIdCallCount++;
        return $response;
    }

    public function update($id, $data)
    {
        $this->updateCallCount++;
        $this->updateArguments = [$id, $data];
        return 1;
    }

    public function getHistoriaCompleta($id)
    {
        return $this->historiaCompletaResponse;
    }

    public function beginTransaction()
    {
        $this->transactions[] = 'begin';
    }

    public function commit()
    {
        $this->transactions[] = 'commit';
    }

    public function rollback()
    {
        $this->transactions[] = 'rollback';
    }

    private function recordReplacement($section, $data)
    {
        $this->replacements[$section] = $data;
    }

    public function replaceCuestionario($id, $data) { $this->recordReplacement('cuestionario', $data); }
    public function replaceLensometria($id, $data) { $this->recordReplacement('lensometria', $data); }
    public function replaceAgudezaVisual($id, $data) { $this->recordReplacement('agudeza_visual', $data); }
    public function replaceExamenMotor($id, $data) { $this->recordReplacement('examen_motor', $data); }
    public function replaceExamenRefractivo($id, $data) { $this->recordReplacement('examen_refractivo', $data); }
    public function replaceExamenOftalmologico($id, $data) { $this->recordReplacement('examen_oftalmologico', $data); }
    public function replaceOftalmoscopia($id, $data) { $this->recordReplacement('oftalmoscopia', $data); }
    public function replaceFormulaFinal($id, $data) { $this->recordReplacement('formula_final', $data); }
    public function replaceObservaciones($id, $data) { $this->recordReplacement('observaciones', $data); }
    public function replaceDiagnosticos($id, $data) { $this->recordReplacement('diagnostico', $data); }
}

class HistoriasClinicasServiceTest extends TestCase
{
    public function testUpdateHistoriaClinicaWithin24HoursSucceeds()
    {
        $createdAt = (new DateTimeImmutable('-1 hour'))->format('Y-m-d H:i:s');

        $initialHistoria = [
            'id' => 10,
            'optica_id' => 5,
            'paciente_id' => 3,
            'usuario_id' => 8,
            'fecha_consulta' => '2025-01-01',
            'motivo_consulta' => 'Consulta inicial',
            'created_at' => $createdAt
        ];

        $fakeRepository = new FakeHistoriasClinicasRepository(
            [$initialHistoria, $initialHistoria],
            ['detalle' => 'valor']
        );

        $service = new HistoriasClinicasService(null, $fakeRepository);

        $updateData = [
            'optica_id' => 5,
            'paciente_id' => 3,
            'usuario_id' => 9,
            'fecha_consulta' => '2025-01-02',
            'motivo_consulta' => 'Actualización permitida'
        ];

        $result = $service->updateHistoriaClinica(10, $updateData);

        $this->assertSame(1, $fakeRepository->updateCallCount, 'Se debe invocar la actualización exactamente una vez');
        $this->assertSame(
            [10, [
                'optica_id' => 5,
                'paciente_id' => 3,
                'usuario_id' => 9,
                'fecha_consulta' => '2025-01-02',
                'motivo_consulta' => 'Actualización permitida'
            ]],
            $fakeRepository->updateArguments,
            'La actualización debe recibir los datos organizados correctamente'
        );
        $this->assertSame(
            array_merge($initialHistoria, ['detalle' => 'valor']),
            $result,
            'El servicio debe devolver la historia clínica combinando los datos adicionales'
        );
    }

    public function testUpdateHistoriaClinicaAfter24HoursThrowsException()
    {
        $createdAt = (new DateTimeImmutable('-2 days'))->format('Y-m-d H:i:s');
        $initialHistoria = [
            'id' => 11,
            'optica_id' => 6,
            'paciente_id' => 4,
            'usuario_id' => 2,
            'fecha_consulta' => '2025-01-01',
            'motivo_consulta' => 'Consulta inicial',
            'created_at' => $createdAt
        ];

        $fakeRepository = new FakeHistoriasClinicasRepository([$initialHistoria]);
        $service = new HistoriasClinicasService(null, $fakeRepository);

        $updateData = [
            'optica_id' => 6,
            'paciente_id' => 4,
            'usuario_id' => 2,
            'fecha_consulta' => '2025-01-03',
            'motivo_consulta' => 'Intento fuera de plazo'
        ];

        $this->expectException(Exception::class);
        $this->expectExceptionMessage('La historia clínica solo puede editarse dentro de las primeras 24 horas desde su creación');

        try {
            $service->updateHistoriaClinica(11, $updateData);
        } finally {
            $this->assertSame(
                0,
                $fakeRepository->updateCallCount,
                'No se debe ejecutar la actualización cuando han pasado más de 24 horas'
            );
        }
    }
}

