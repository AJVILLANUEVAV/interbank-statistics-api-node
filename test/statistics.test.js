import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAllStatistics, calculateStatistics, isDiagonal } from '../src/statistics.js';

test('calculates aggregate statistics', () => {
  assert.deepEqual(calculateStatistics([[1, 2], [3, 4]]), {
    min: 1,
    max: 4,
    average: 2.5,
    sum: 10,
    isDiagonal: false,
  });
});

test('detects a diagonal matrix', () => {
  assert.equal(isDiagonal([[2, 0], [0, -1]]), true);
  assert.equal(isDiagonal([[2, 1], [0, -1]]), false);
});

test('calculates statistics for all named matrices', () => {
  const result = calculateAllStatistics({ q: [[1, 0], [0, 1]], r: [[2, 3], [0, 4]] });
  assert.equal(result.q.isDiagonal, true);
  assert.equal(result.r.sum, 9);
});

test('rejects non-rectangular matrices', () => {
  assert.throws(() => calculateStatistics([[1], [2, 3]]), /rectangular/);
});
