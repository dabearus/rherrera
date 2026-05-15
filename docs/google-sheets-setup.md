# Google Sheets Setup

## 1. Crear Google Sheet

Crea un spreadsheet llamado:

```text
ChecadorDB
```

## 2. Crear pestañas

### Employees

```text
employee_id | employee_code | first_name | last_name | pin | department | active
```

### Punches

```text
punch_id | employee_id | punch_type | punch_time | latitude | longitude | device_name
```

### Shifts

```text
shift_id | shift_name | start_time | end_time | tolerance_minutes
```

## 3. Crear proyecto en Google Cloud

- Abrir Google Cloud Console
- Crear proyecto
- Habilitar Google Sheets API
- Crear Service Account
- Descargar credenciales JSON

## 4. Compartir Spreadsheet

Comparte el Google Sheet con el correo de la service account.

## 5. Variables de entorno

Crear archivo `.env`:

```env
PORT=3000
GOOGLE_SHEET_ID=YOUR_SHEET_ID
GOOGLE_SERVICE_ACCOUNT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=YOUR_PRIVATE_KEY
```
