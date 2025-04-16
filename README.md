<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Microservicio de auditoría y control de flota 

El microservicio de auditoría es responsable de registrar y almacenar de forma estructurada los datos relacionados con:

Geolocalización de dispositivos
Rutas calculadas
Alertas generadas

Este servicio forma parte de una arquitectura de microservicios para un sistema de monitoreo y control de flotas, y actúa como bitácora central para trazabilidad, reportes y análisis posteriores.

Está construido con NestJS siguiendo una arquitectura hexagonal.

## Características

Registro de geolocalizaciones (lat, lng, timestamp, deviceId).
Registro de rutas (origen, destino, trazado, estado).
Registro de alertas (tipo, severidad, mensaje, timestamp, ubicación).
Validación de datos mediante DTOs y class-validator.
Swagger API Documentation.
Persistencia en PostgreSQL usando Prisma ORM.
Arquitectura limpia y hexagonal

## Requisitos

- Node.js (v16 o superior)
- npm
- Docker y Docker Compose (para la versión containerizada)

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
DATABASE_URL=postgresql://postgres:postgres@db:5432/audit_db
PORT=3003
```

## Download the repository

```bash
$
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deployment

## Endpoints

### Audit Geolocation

```
POST /geolocation
```

**Parámetros de consulta:**

```bash
{
  "deviceId": "ASD-112",
  "lat": 4.710989,
  "lng": -74.072090
}
```

**Respuesta:**

```bash
 {
    "deviceId": "ASD-112",
    "lat": 4.710989,
    "lng": -74.07209,
    "timestamp": "2025-04-16T16:37:31.125Z"
}
```

### Audit Routing

```
POST /routing
```

**Parámetros de consulta:**

```bash
{
    "deviceId": "ABD-123",
    "origin": {
        "lat": 4.123,
        "lng": -74.123
    },
    "destination": {
        "lat": 4.567,
        "lng": -74.567
    },
    "route": [
        {
            "lat": 4.222,
            "lng": -74.222
        }
    ],
    "status": "success",
    "cacheTTL": 300
}
```

**Respuesta:**

```bash
{
    "message": "Routing data saved successfully"
}
```

### Audit Alerts

```
POST /alerts
```

**Parámetros de consulta:**

```bash
{
    "type": "routing-error",
    "message": "Timeout al calcular ruta",
    "source": "routing-service",
    "deviceId": "vehiculo-2"
}
```

**Respuesta:**

```bash
{
    "message": "Alerta registrada"
}
```

## Documentación API

La documentación de la API está disponible en Swagger UI:

```
http://localhost:3003/api/docs
```

Incluye:

Tags por módulo (Geolocation, Routing, Alert)
Ejemplos de payloads
Seguridad con Bearer Token (si se activa)

## Arquitectura

El proyecto sigue una arquitectura hexagonal (puertos y adaptadores)

http://localhost:3003/documentation/

## Pruebas

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas con cobertura
npm run test:cov
```
