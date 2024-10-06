import {
  getFirstDigit,
  getLastDigit,
  calcSumFirstAndLastDigit,
} from './level_1_2';
import simpleTest from '../additional/simpleTest';

describe('Уровень 1.2', () => {
  describe('1.2.1 Дано число. Выведите в консоль первую цифру этого числа.', () => {
    const testCases = [
      { input: -1, expected: 1 },
      { input: -9767887, expected: 9 },
      { input: 234523, expected: 2 },
      { input: 56456, expected: 5 },
      { input: 43654, expected: 4 },
      { input: 458658, expected: 4 },
      { input: 0, expected: 0 },
    ];

    simpleTest(testCases, getFirstDigit);
  });

  describe('1.2.2 Дано число. Выведите в консоль последнюю цифру этого числа.', () => {
    const testCases = [
      { input: -1, expected: 1 },
      { input: -9767887, expected: 7 },
      { input: 234523, expected: 3 },
      { input: 56456, expected: 6 },
      { input: 43654, expected: 4 },
      { input: 458658, expected: 8 },
      { input: 0, expected: 0 },
    ];

    simpleTest(testCases, getLastDigit);
  });

  describe('1.2.3 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.', () => {
    const testCases = [
      { input: -1, expected: 1 },
      { input: -9767887, expected: 16 },
      { input: 234523, expected: 5 },
      { input: 56456, expected: 11 },
      { input: 43654, expected: 8 },
      { input: 458658, expected: 12 },
      { input: 0, expected: 0 },
    ];

    simpleTest(testCases, calcSumFirstAndLastDigit);
  });
});
