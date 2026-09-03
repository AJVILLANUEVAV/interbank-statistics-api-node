# Render deployment

Configure these environment variables in Render:

```text
PORT=8081
NODE_ENV=production
JWT_SECRET=<same-long-secret-used-by-the-other-APIs>
```

Statistics API is called internally by Matrix API at `https://interbank-statistics-api-node.onrender.com/internal/v1/statistics` and requires a service JWT.
