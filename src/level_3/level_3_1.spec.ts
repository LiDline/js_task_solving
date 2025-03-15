import simpleTest from '../additional/simpleTest';
import {
  equalizeArrayLengths,
  isDigitsAscending,
  removeEmptyStrings,
  sortSubArrays,
} from './level_3_1';

describe('Уровень 3.1', () => {
  describe('3.1.1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.', () => {
    const testCases = [
      {
        input: 123,
        expected: true,
      },
      {
        input: -1.231,
        expected: false,
      },
      {
        input: 1223,
        expected: false, // Цифры не по возрастанию
      },
      {
        input: 11111,
        expected: false, // Все цифры одинаковые
      },
      {
        input: 54321,
        expected: false, // Цифры по убыванию
      },
      {
        input: 1,
        expected: true, // Один символ
      },
      {
        input: 0,
        expected: true, // Один символ
      },
      {
        input: 24680,
        expected: false, // Цифры не по возрастанию
      },
      {
        input: 1234567890,
        expected: false, // Цифры по возрастанию
      },
    ];

    simpleTest(testCases, isDigitsAscending);
  });

  describe('3.1.2 Дан массив. Удалите из массива все пустые строки.', () => {
    const testCases = [
      {
        input: [1, '', 2, 3, '', 5],
        expected: [1, 2, 3, 5],
      },
      {
        input: ['a', '', 'b', 'c', '', 'd'],
        expected: ['a', 'b', 'c', 'd'],
      },
      {
        input: ['', '', ''],
        expected: [],
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4, 5],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: ['hello', '', 'world'],
        expected: ['hello', 'world'],
      },
      {
        input: ['', 'single', ''],
        expected: ['single'],
      },
    ];

    simpleTest(testCases, removeEmptyStrings);
  });

  describe('3.1.3 Дан массив. Отсортируйте элементы в каждом подмассиве.', () => {
    const testCases = [
      {
        input: [
          [2, 1, 4, 3, 5],
          [3, 5, 2, 4, 1],
          [4, 3, 1, 5, 2],
        ],
        expected: [
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
        ],
      },
      {
        input: [
          [9, 7, 5, 3, 1],
          [8, 6, 4, 2, 0],
          [10, 20, 30, 40, 50],
        ],
        expected: [
          [1, 3, 5, 7, 9],
          [0, 2, 4, 6, 8],
          [10, 20, 30, 40, 50],
        ],
      },
      {
        input: [[1], [2, 2, 2], [3, 1, 2]],
        expected: [[1], [2, 2, 2], [1, 2, 3]],
      },
      {
        input: [[], [5, 4, 3, 2, 1], []],
        expected: [[], [1, 2, 3, 4, 5], []],
      },
      {
        input: [
          [10, 20, 30],
          [30, 20, 10],
          [20, 10, 30],
        ],
        expected: [
          [10, 20, 30],
          [10, 20, 30],
          [10, 20, 30],
        ],
      },
    ];

    simpleTest(testCases, sortSubArrays);
  });

  describe('3.1.4 Даны два массива. Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.', () => {
    const testCases = [
      {
        input: [1, 2, 3],
        secondInput: [3, 2, 3, 4, 5],
        expected: [3, 2, 3],
      },
    ];

    simpleTest(testCases, equalizeArrayLengths);
  });
});
