import { calculateAllStatistics } from '../statistics.js';

export function createStatisticsService() {
  return {
    execute(matrices) {
      return calculateAllStatistics(matrices);
    },
  };
}
