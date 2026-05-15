# Arquitectura - Checador

## Objetivo

Sistema de asistencia para empleados orientado a pequeñas y medianas empresas.

## Componentes

### Frontend

Flutter:

- Android
- Web
- iOS futuro

### Backend

Node.js + Express

Responsable de:

- Autenticación
- Registro de entradas/salidas
- Reglas de negocio
- Reportes
- Exportación

### Base de datos

SQL Server

## Flujo

```text
Empleado -> Login PIN/QR -> API -> SQL Server
```

## Módulos

### Empleados

- Alta
- Baja
- Edición
- PIN
- QR

### Asistencia

- Check-in
- Check-out
- Break
- Lunch

### Administración

- Dashboard
- Retardos
- Horas extra
- Reportes

### Seguridad futura

- JWT
- Roles
- Auditoría
- GPS
- Geofence
- Selfie validation

## Roadmap

### Fase 1

- Backend API
- SQL schema
- Flutter login
- Check-in/out

### Fase 2

- Dashboard admin
- Exportación Excel
- Reportes

### Fase 3

- QR
- GPS
- Notificaciones
- Nómina
