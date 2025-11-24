# Configuración de Horarios de Citas

## Variables de Configuración

Las horas de inicio y fin para las citas se configuran únicamente en el frontend. Esta configuración es solo para mostrar los tramos de hora disponibles en el selector, no hay validaciones en el backend.

### Frontend (Angular)
**Archivo:** `frontend/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost/opticast/backend/api',
  citas: {
    horaInicio: 6, // 6:00 AM
    horaFin: 20    // 8:00 PM (20:00)
  }
};
```

## Cómo Cambiar las Horas

1. Editar `frontend/src/environments/environment.ts`
2. Cambiar los valores de `horaInicio` y `horaFin`
3. Recompilar la aplicación Angular

## Ejemplos de Configuración

### Horario Comercial Estándar (8 AM - 6 PM)
```typescript
// Frontend
citas: {
  horaInicio: 8, // 8:00 AM
  horaFin: 18    // 6:00 PM (18:00)
}
```

### Horario Extendido (6 AM - 10 PM)
```typescript
// Frontend
citas: {
  horaInicio: 6, // 6:00 AM
  horaFin: 22    // 10:00 PM (22:00)
}
```

## Notas Importantes

- Las horas se configuran en formato de 24 horas
- Los intervalos son siempre de 30 minutos
- Esta configuración es solo para mostrar los tramos disponibles en el selector
- No hay validaciones de horario en el backend
- El sistema valida que no haya solapamiento de citas en el mismo tramo de 30 minutos
