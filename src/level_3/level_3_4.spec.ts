import simpleTest from '../additional/simpleTest';
import { printNumbersWithEvenFirstDigit, sumOfObject, swapAdjacentPairs } from './level_3_4';

describe('Уровень 3.4', () => {
  describe('3.4.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.', () => {
    const expected: number[] = [];

    for (let i = 10; i <= 1000; i++) {
      const firstDigit = parseInt(i.toString()[0]);
      if (firstDigit % 2 === 0) {
        expected.push(i);
      }
    }

    const testCases = [
      {
        input: undefined,
        expected: expected,
      },
    ];

    simpleTest(testCases, printNumbersWithEvenFirstDigit);
  });

  describe('3.4.2 Дан некоторый массив. Поменяйте местами пары элементов этого массива', () => {
    const testCases = [
      {
        input: [1, 2, 3, 4, 5, 6],
        expected: [2, 1, 4, 3, 6, 5],
      },
      {
        input: [10, 20, 30, 40, 50],
        expected: [20, 10, 40, 30, 50],
      },
      {
        input: [5, 4, 3, 2, 1],
        expected: [4, 5, 2, 3, 1],
      },
      {
        input: [1, 2],
        expected: [2, 1],
      },
      {
        input: [1],
        expected: [1],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [1, 3, 5, 7, 9, 11],
        expected: [3, 1, 7, 5, 11, 9],
      },
    ];

    simpleTest(testCases, swapAdjacentPairs);
  });

  describe('3.4.2 Дан объект. Найдите сумму элементов этого объекта.', () => {
    const testCases = [
      {
        input: {
          1: {
            1: 11,
            2: 12,
            3: 13,
          },
          2: {
            1: 21,
            2: 22,
            3: 23,
          },
          3: {
            1: 24,
            2: 25,
            3: 26,
          },
        },
        expected: 177,
      },
      {
        input: {
          1: 1,
          2: 2,
          3: 3,
        },
        expected: 6,
      },
      {
        input: {
          a: {
            b: 10,
            c: 20,
          },
          d: 30,
        },
        expected: 60,
      },
      {
        input: {
          a: {
            b: {
              c: 5,
            },
            d: 10,
          },
          e: 15,
        },
        expected: 30,
      },
      {
        input: {},
        expected: 0,
      },
      {
        input: {
          a: 0,
          b: 5,
        },
        expected: 5,
      },
    ];

    simpleTest(testCases, sumOfObject);
  });
});
