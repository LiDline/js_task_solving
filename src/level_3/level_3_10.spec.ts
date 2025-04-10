import simpleTest from '../additional/simpleTest';
import {
  commonDigits,
  duplicateElements,
  filterDivisors,
  filterUniqueDigitNumbers,
  flattenArray,
  positionsOfThreesExceptFirstAndLast,
} from './level_3_10';

describe('Уровень 3.10', () => {
  describe('3.10.1 Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.', () => {
    const testCases = [
      {
        input: [1, 2, 3],
        expected: [1, 1, 2, 2, 3, 3],
      },
      {
        input: ['a', 'b', 'c'],
        expected: ['a', 'a', 'b', 'b', 'c', 'c'],
      },
      {
        input: [true, false],
        expected: [true, true, false, false],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [7],
        expected: [7, 7],
      },
      {
        input: [1, 'a', true],
        expected: [1, 1, 'a', 'a', true, true],
      },
    ];

    simpleTest(testCases, duplicateElements);
  });

  describe('3.10.2 Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.', () => {
    const testCases = [
      {
        input: [1, 2, 3, 4, 5],
        secondInput: 12,
        expected: [1, 2, 3, 4],
      },
      {
        input: [10, 20, 30, 40, 50],
        secondInput: 100,
        expected: [10, 20, 50],
      },
      {
        input: [7, 11, 13, 17],
        secondInput: 100,
        expected: [],
      },
      {
        input: [1, 3, 5, 7, 9],
        secondInput: 9,
        expected: [1, 3, 9],
      },
      {
        input: [],
        secondInput: 5,
        expected: [],
      },
      {
        input: [2, 4, 6, 8, 10],
        secondInput: 8,
        expected: [2, 4, 8],
      },
    ];

    simpleTest(testCases, filterDivisors);
  });

  describe('3.10.3 Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.', () => {
    const testCases = [
      {
        input: 123,
        secondInput: 345,
        expected: [3],
      },
      {
        input: 678,
        secondInput: 890,
        expected: [8],
      },
      {
        input: 1122,
        secondInput: 2233,
        expected: [2],
      },
      {
        input: 456,
        secondInput: 789,
        expected: [],
      },
      {
        input: 123456,
        secondInput: 654321,
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        input: 0,
        secondInput: 0,
        expected: [0],
      },
    ];

    simpleTest(testCases, commonDigits);
  });

  describe('3.10.4 Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.', () => {
    const testCases = [
      {
        input: 133331,
        expected: [2, 3],
      },
      {
        input: 333333,
        expected: [1, 2, 3, 4],
      },
      {
        input: 123453,
        expected: [],
      },
      {
        input: 3123435,
        expected: [3],
      },
      {
        input: 333,
        expected: [1],
      },
      {
        input: 123456,
        expected: [],
      },
    ];

    simpleTest(testCases, positionsOfThreesExceptFirstAndLast);
  });

  describe('3.10.5 Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.', () => {
    const testCases = [
      {
        input: [123, 455, 678, 990, 101],
        expected: [123, 678],
      },
      {
        input: [111, 222, 333, 444],
        expected: [],
      },
      {
        input: [12, 34, 56, 78, 90],
        expected: [12, 34, 56, 78, 90],
      },
      {
        input: [100, 200, 300, 400],
        expected: [],
      },
      {
        input: [123456, 654321, 121212],
        expected: [123456, 654321],
      },
      {
        input: [],
        expected: [],
      },
    ];

    simpleTest(testCases, filterUniqueDigitNumbers);
  });

  describe('3.10.6 Слейте элементы массива в один одномерный массив.', () => {
    const testCases = [
      {
        input: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      {
        input: [
          [10, 20],
          [30, 40],
          [50, 60],
        ],
        expected: [10, 20, 30, 40, 50, 60],
      },
      {
        input: [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
        ],
        expected: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      {
        input: [[1], [2], [3]],
        expected: [1, 2, 3],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [[], [], []],
        expected: [],
      },
    ];

    simpleTest(testCases, flattenArray);
  });
});
