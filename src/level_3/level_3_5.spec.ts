import simpleTest from '../additional/simpleTest';
import { sumOfObject } from './level_3_4';
import {
  extractWordsStartingWithA,
  filterDivisibleByFive,
  filterNumbersContainingNumber,
  generateDashSeparatedString,
  sortDigits,
} from './level_3_5';

describe('Уровень 3.5', () => {
  describe('3.5.1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву a.', () => {
    const testCases = [
      {
        input: 'An apple a day keeps the doctor away',
        expected: ['apple', 'a', 'away'],
      },
      {
        input: 'Alice and Bob are adventurers',
        expected: ['and', 'are', 'adventurers'],
      },
      {
        input: 'The quick brown fox jumps over the lazy dog',
        expected: [],
      },
      {
        input: 'Aardvark and anteater are amazing animals',
        expected: ['and', 'anteater', 'are', 'amazing', 'animals'],
      },
      {
        input: "No words starting with 'a' here",
        expected: [],
      },
      {
        input: '',
        expected: [],
      },
    ];

    simpleTest(testCases, extractWordsStartingWithA);
  });

  describe('3.5.2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.', () => {
    const testCases = [
      {
        input: [1, 2, 5, 10, 15, 21, 25],
        expected: [5, 10, 15, 25],
      },
      {
        input: [3, 7, 14, 20, 30],
        expected: [20, 30],
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: [5],
      },
      {
        input: [5, 10, 15, 20, 25],
        expected: [5, 10, 15, 20, 25],
      },
      {
        input: [1, 2, 3, 4],
        expected: [],
      },
      {
        input: [],
        expected: [],
      },
    ];

    simpleTest(testCases, filterDivisibleByFive);
  });

  describe('3.5.3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.', () => {
    const testCases = [
      {
        input: [1, 20, 30, 4, 50, 6],
        secondInput: 0,
        expected: [20, 30, 50],
      },
      {
        input: [100, 200, 300, 400, 500],
        secondInput: 0,
        expected: [100, 200, 300, 400, 500],
      },
      {
        input: [1, 2, 3, 4, 5],
        secondInput: 0,
        expected: [],
      },
      {
        input: [10, 20, 30, 40, 50],
        secondInput: 0,
        expected: [10, 20, 30, 40, 50],
      },
      {
        input: [0, 10, 20, 30],
        secondInput: 0,
        expected: [0, 10, 20, 30],
      },
      {
        input: [],
        secondInput: 0,
        expected: [],
      },
    ];

    simpleTest(testCases, filterNumbersContainingNumber);
  });

  describe('3.5.4 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру 3.', () => {
    const testCases = [
      {
        input: [1, 20, 30, 4, 50, 6],
        secondInput: 3,
        expected: [30],
      },
      {
        input: [100, 200, 300, 400, 500],
        secondInput: 3,
        expected: [300],
      },
      {
        input: [1, 2, 3, 4, 5],
        secondInput: 3,
        expected: [3],
      },
      {
        input: [],
        secondInput: 3,
        expected: [],
      },
    ];

    simpleTest(testCases, filterNumbersContainingNumber);
  });

  describe('3.5.5 Дано некоторое число. Отсортируйте цифры этого числа.', () => {
    const testCases = [
      {
        input: 35142,
        expected: 12345,
      },
      {
        input: -3.5142,
        expected: -1.2345,
      },
      {
        input: 0,
        expected: 0,
      },
      {
        input: -0.35142,
        expected: -0.12345,
      },
    ];

    simpleTest(testCases, sortDigits);
  });

  describe('3.5.6 Напишите программу, которая сформирует следующую строку.', () => {
    const testCases = [
      {
        input: undefined,
        expected: '-1-2-3-4-5-',
      },
    ];

    simpleTest(testCases, generateDashSeparatedString);
  });

  describe('3.5.7 Дан следующий объект. Найдите сумму элементов этого объекта.', () => {
    const testCases = [
      {
        input: {
          1: {
            1: {
              1: 111,
              2: 112,
              3: 113,
            },
            2: {
              1: 121,
              2: 122,
              3: 123,
            },
          },
          2: {
            1: {
              1: 211,
              2: 212,
              3: 213,
            },
            2: {
              1: 221,
              2: 222,
              3: 223,
            },
          },
          3: {
            1: {
              1: 311,
              2: 312,
              3: 313,
            },
            2: {
              1: 321,
              2: 322,
              3: 323,
            },
          },
        },
        expected: 3906,
      },
    ];

    simpleTest(testCases, sumOfObject);
  });
});
