export function validateMatrix(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0]) || matrix[0].length === 0) {
    throw new Error('matrix must not be empty');
  }
  const columns = matrix[0].length;
  if (matrix.some((row) => !Array.isArray(row) || row.length !== columns)) {
    throw new Error('matrix must be rectangular');
  }
}

export function calculateStatistics(matrix) {
  validateMatrix(matrix);
  const values = matrix.flat();
  const sum = values.reduce((total, value) => total + value, 0);
  return {
    min: Math.min(...values),
    max: Math.max(...values),
    average: sum / values.length,
    sum,
    isDiagonal: isDiagonal(matrix),
  };
}

export function isDiagonal(matrix) {
  validateMatrix(matrix);
  if (matrix.length !== matrix[0].length) return false;
  return matrix.every((row, rowIndex) => row.every((value, columnIndex) => rowIndex === columnIndex || value === 0));
}

export function calculateAllStatistics(matrices) {
  if (!matrices || typeof matrices !== 'object') throw new Error('matrices are required');
  return Object.fromEntries(Object.entries(matrices).map(([name, matrix]) => [name, calculateStatistics(matrix)]));
}
