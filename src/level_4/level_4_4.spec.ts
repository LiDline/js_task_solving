import { ok } from 'assert';
import simpleTest from '../additional/simpleTest';
import { getDivisors } from '../level_3/level_3_7';
import { countDivisors, fillRandomArray, isPrime, removeEvenDigits } from './level_4_4';

describe('Уровень 4.4', () => {
  describe('4.4.1. Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.', () => {
    const testCases = [
      {
        input: 6,
        expected: 4, // Делители: 1, 2, 3, 6
      },
      {
        input: 28,
        expected: 6, // Делители: 1, 2, 4, 7, 14, 28
      },
      {
        input: 1,
        expected: 1, // Делитель: 1
      },
      {
        input: 0,
        expected: 0, // По определению, 0 не имеет делителей
      },
      {
        input: 17,
        expected: 2, // Делители: 1, 17 (простое число)
      },
      {
        input: 100,
        expected: 9, // Делители: 1, 2, 4, 5, 10, 20, 25, 50, 100
      },
    ];

    simpleTest(testCases, countDivisors);
  });

  describe('4.4.3. Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.', () => {
    const testCases = [
      {
        input: 6,
        expected: [1, 2, 3, 6], // Делители: 1, 2, 3, 6
      },
      {
        input: 28,
        expected: [1, 2, 4, 7, 14, 28], // Делители: 1, 2, 4, 7, 14, 28
      },
      {
        input: 1,
        expected: [1], // Делитель: 1
      },
      {
        input: 0,
        expected: [], // По определению, 0 не имеет делителей
      },
      {
        input: 17,
        expected: [1, 17], // Делители: 1, 17 (простое число)
      },
      {
        input: 100,
        expected: [1, 2, 4, 5, 10, 20, 25, 50, 100], // Делители: 1, 2, 4, 5, 10, 20, 25, 50, 100
      },
    ];

    simpleTest(testCases, getDivisors);
  });

  describe('4.4.4. Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.', () => {
    const testCases = [
      {
        input: 2,
        expected: true, // 2 — простое число
      },
      {
        input: 4,
        expected: false, // 4 не является простым числом
      },
      {
        input: 17,
        expected: true, // 17 — простое число
      },
      {
        input: 18,
        expected: false, // 18 не является простым числом
      },
      {
        input: 19,
        expected: true, // 19 — простое число
      },
      {
        input: 20,
        expected: false, // 20 не является простым числом
      },
      {
        input: 1,
        expected: false, // 1 не является простым числом
      },
      {
        input: 0,
        expected: false, // 0 не является простым числом
      },
    ];

    simpleTest(testCases, isPrime);
  });

  describe('4.4.5. Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.', () => {
    const testCases = [
      {
        input: 123456,
        expected: 135, // Удаляются чётные цифры 2, 4, 6
      },
      {
        input: 24680,
        expected: 0, // Все цифры чётные, остаётся 0
      },
      {
        input: 13579,
        expected: 13579, // Нет чётных цифр
      },
      {
        input: 0,
        expected: 0, // 0 — чётная цифра
      },
      {
        input: 121314,
        expected: 1131, // Удаляются чётные цифры 2 и 4
      },
      {
        input: -987654.1,
        expected: -975.1, // Удаляются чётные цифры 8, 6, 4
      },
    ];

    simpleTest(testCases, removeEvenDigits);
  });

  describe('4.4.6. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.', () => {
    test(`1 Верный возврат для { n: 3, min: 1, max: 10 }`, () => {
      const result = fillRandomArray({ n: 3, min: 1, max: 10 });

      ok(result.length == 3);
    });
  });
});
