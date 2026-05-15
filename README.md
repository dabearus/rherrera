# Checador WebApp

Sistema para control de asistencia de empleados: entrada, salida, comidas, descansos, retardos, horas extra y reportes para nómina.

## Stack sugerido

- Backend: Node.js + Express
- Base de datos: SQL Server / Azure SQL
- Frontend: Flutter Web / Android
- Autenticación inicial: PIN de empleado
- Siguiente fase: QR, geolocalización y foto de evidencia

## Estructura

```text
api/              Backend Express
sql/              Scripts SQL Server
docs/             Requerimientos y arquitectura
```

## Instalación local

### Requisitos

```bash
node -v
npm -v
git --version
flutter doctor
```

Instala:

- Git
- Node.js LTS
- VS Code
- Flutter SDK
- Android Studio, si vas a compilar Android
- SQL Server, Azure SQL o SQL Server Express
- DBeaver o SSMS

## Backend

```bash
cd api
npm install
cp .env.example .env
npm run dev
```

## Variables de entorno

Edita `api/.env`:

```env
PORT=3000
DB_SERVER=localhost
DB_DATABASE=checador
DB_USER=sa
DB_PASSWORD=your_password
DB_ENCRYPT=false
```

## Endpoints iniciales

```text
GET  /health
POST /api/punches/check-in
POST /api/punches/check-out
GET  /api/punches/today
GET  /api/employees
POST /api/employees
```

## Próximos módulos

- Login administrador
- Gestión de turnos
- Reporte semanal/mensual
- Exportación a Excel
- Reglas de retardo
- Horas extra
- Permisos/vacaciones
- QR por empleado
- Geofencing/GPS
