import express from 'express';
import { createStatisticsService } from './application/statistics-service.js';

export function createApp() {
  const app = express();
  const service = createStatisticsService();
  app.use(express.json({ limit: '1mb' }));
  app.get('/health', (_request, response) => response.json({ status: 'ok' }));
  app.post('/internal/v1/statistics', (request, response) => {
    try {
      const statistics = service.execute(request.body?.matrices);
      return response.json({ statistics });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  });
  return app;
}

const port = Number(process.env.PORT ?? 8081);
if (process.env.NODE_ENV !== 'test') {
  createApp().listen(port, () => console.log(`Statistics API listening on port ${port}`));
}
