# Interbank Statistics API

API REST de estadísticas con Node.js y Express. Calcula mínimo, máximo, promedio, suma total y diagonalidad de matrices recibidas.

La estructura sigue arquitectura hexagonal: `src/statistics.js` contiene el dominio, `src/application` el caso de uso y `src/server.js` el adaptador HTTP de entrada.

## Ejecutar localmente

```bash
npm install
npm start
```

Pruebas:

```bash
npm test
```

Endpoint interno: `POST /internal/v1/statistics` con `{ "matrices": { "q": [[1, 0], [0, 1]] } }`.

## API-first

El contrato OpenAPI está en `openapi/openapi.yaml`. Puedes importarlo en [Swagger Editor](https://editor.swagger.io/) o visualizarlo con cualquier herramienta compatible con OpenAPI 3.

## Variables de entorno

- `PORT`: puerto HTTP, por defecto `8081`.
- `JWT_SECRET`: secreto JWT, requerido cuando se habilita autenticación.
