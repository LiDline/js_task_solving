import simpleTest from '../additional/simpleTest';
import {
  areAllDigitsGreaterThanZero,
  flattenAndSplitArray,
  removeNumbersWithMoreThanThreeDigits,
  sumOfObjectOrArray,
} from './level_3_6';

describe('Уровень 3.6', () => {
  describe('3.6.1 Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.', () => {
    const testCases = [
      {
        input: [1, 20, 300, 4000, 50000],
        expected: [1, 20, 300],
      },
      {
        input: [1000, 2000, 300, 40, 5],
        expected: [300, 40, 5],
      },
      {
        input: [123, 4567, 89012, 34, 567],
        expected: [123, 34, 567],
      },
      {
        input: [999, 1000, 1001, 99, 100],
        expected: [999, 99, 100],
      },
      {
        input: [0, -1, -10, -100, -1000],
        expected: [0, -1, -10, -100],
      },
      {
        input: [],
        expected: [],
      },
    ];

    simpleTest(testCases, removeNumbersWithMoreThanThreeDigits);
  });

  describe('3.6.2 Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.', () => {
    const testCases = [
      {
        input: 12345,
        expected: true,
      },
      {
        input: 10203,
        expected: false,
      },
      {
        input: 0,
        expected: false,
      },
      {
        input: 98765,
        expected: true,
      },
      {
        input: -12345,
        expected: true,
      },
      {
        input: 100000,
        expected: false,
      },
      {
        input: 54321,
        expected: true,
      },
    ];

    simpleTest(testCases, areAllDigitsGreaterThanZero);
  });

  describe('3.6.3 Дан некоторый массив. Слейте все элементы этого массива в один массив, разбив их посимвольно.', () => {
    const testCases = [
      {
        input: [123, 456, 789],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      {
        input: [10, 20, 30],
        expected: [1, 0, 2, 0, 3, 0],
      },
      {
        input: [987, 654, 321],
        expected: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      },
      {
        input: [1, 2, 3],
        expected: [1, 2, 3],
      },
      {
        input: [100, 200, 300],
        expected: [1, 0, 0, 2, 0, 0, 3, 0, 0],
      },
      {
        input: [],
        expected: [],
      },
    ];

    simpleTest(testCases, flattenAndSplitArray);
  });

  describe('3.6.4 Дан следующая структура. Найдите сумму элементов этой структуры.', () => {
    const testCases = [
      {
        input: [
          {
            1: 11,
            2: 12,
            3: 13,
          },
          {
            1: 21,
            2: 22,
            3: 23,
          },
          {
            1: 24,
            2: 25,
            3: 26,
          },
        ],
        expected: 11 + 12 + 13 + 21 + 22 + 23 + 24 + 25 + 26,
      },
      {
        input: [{ 1: 100, 2: 200, 3: 300 }],
        expected: 600,
      },
      {
        input: [],
        expected: 0,
      },
      {
        input: [
          { 1: 0, 2: 0, 3: 0 },
          { 1: 0, 2: 0, 3: 0 },
        ],
        expected: 0,
      },
    ];

    simpleTest(testCases, sumOfObjectOrArray);
  });
});
