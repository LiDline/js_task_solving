import simpleTest from '../additional/simpleTest';
import { reverseNumbers, sumOfDigitPairs } from './level_2_9';

describe('Уровень 2.9', () => {
  describe('2.9.1 Дано некоторое число. Найдите сумму пар цифр этого числа.', () => {
    const testCases = [
      {
        input: 123456,
        expected: 102,
      },
      {
        input: -1.23456,
        expected: 102,
      },
      {
        input: 789012,
        expected: 180, // 78 + 90 + 12
      },
      {
        input: 111111,
        expected: 33, // 11 + 11 + 11
      },
      {
        input: 0,
        expected: 0, // Нет пар
      },
      {
        input: 56,
        expected: 56, // Одна пара
      },
      {
        input: 123,
        expected: 12 + 3, // 12 + 3
      },
      {
        input: 999999,
        expected: 297, // 99 + 99 + 99
      },
      {
        input: 102030,
        expected: 10 + 20 + 30, // 10 + 20 + 30
      },
    ];

    simpleTest(testCases, sumOfDigitPairs);
  });

  describe('2.9.2 Дан массив с числами. Выведите в консоль элементы этого массива в обратном порядке.', () => {
    const testCases = [
      {
        input: [1, 2, 3, 4, 5],
        expected: [5, 4, 3, 2, 1],
      },
    ];

    simpleTest(testCases, reverseNumbers);
  });
});
