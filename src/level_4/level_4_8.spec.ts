import { ok } from 'assert';
import {
  fillArrayWithUniqueConsecutiveNumbers,
  fillArrayWithUniqueRandomNumbers,
  getPrimesInRange,
  getRandomElement,
  getRandomElements,
  getRandomElementWithoutConsecutiveDuplicates,
  sumNumbers,
} from './level_4_8';
import simpleTest from '../additional/simpleTest';

describe('Уровень 4.8', () => {
  describe('4.8.1. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.', () => {
    test(`0 Верный возврат для [1, 2, 3, 'a']`, () => {
      const input: (string | number)[] = [1, 2, 3, 'a'];

      const result = getRandomElement(input);

      ok(input.includes(result as string | number));
    });

    const testCases = [
      {
        input: [1],
        expected: 1,
      },
      {
        input: [],
        expected: undefined,
      },
    ];

    simpleTest(testCases, getRandomElement);
  });

  describe('4.8.2. Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.', () => {
    test(`0 Верный возврат для [1, 2, 3, 'a']`, () => {
      const input: (string | number)[] = [1, 2, 3, 'a'];

      const result = getRandomElements(input, 1);

      ok(input.includes(result[0]));
    });

    const testCases = [
      {
        input: [1],
        secondInput: 1,
        expected: [1],
      },
      {
        input: [],
        secondInput: 1,
        expected: [],
      },
      {
        input: [1, 2, 3, 'a'],
        secondInput: 0,
        expected: [],
      },
    ];

    simpleTest(testCases, getRandomElements);
  });

  describe('4.8.3. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.', () => {
    test(`0 Верный возврат для [1, 2, 3, 'a']`, () => {
      const input: (string | number)[] = [1, 2, 3, 'a'];

      const result = getRandomElementWithoutConsecutiveDuplicates(input);

      ok(input.includes(result as string | number));
    });

    const testCases = [
      {
        input: [],
        expected: undefined,
      },
    ];

    simpleTest(testCases, getRandomElementWithoutConsecutiveDuplicates);
  });

  describe('4.8.4. Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.', () => {
    const testCases = [
      {
        input: [1, 10],
        expected: [2, 3, 5, 7],
      },
      {
        input: [10, 20],
        expected: [11, 13, 17, 19],
      },
      {
        input: [20, 30],
        expected: [23, 29],
      },
      {
        input: [50, 60],
        expected: [53, 59],
      },
      {
        input: [1, 2],
        expected: [2],
      },
      {
        input: [2, 2],
        expected: [2],
      },
      {
        input: [1, 1],
        expected: [],
      },
    ];

    simpleTest(testCases, getPrimesInRange);
  });

  describe('4.8.5. Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.', () => {
    test(`1 Верный возврат для 1, 2`, () => {
      const result = sumNumbers(1, 2);

      ok(result === 3);
    });
  });

  describe('4.8.6. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.', () => {
    test(`1 Верный возврат для [1, 2]`, () => {
      const result = fillArrayWithUniqueConsecutiveNumbers([1, 2], 2);

      ok(result.length === [...new Set(result)].length);
    });

    test(`2 Верный возврат для [1, 8]`, () => {
      const result = fillArrayWithUniqueConsecutiveNumbers([1, 8], 3);

      ok(result.length === [...new Set(result)].length);
    });
  });

  describe('4.8.7. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.', () => {
    test(`1 Верный возврат для [1, 2], 2`, () => {
      const result = fillArrayWithUniqueRandomNumbers([1, 2], 2);

      ok(result.length === [...new Set(result)].length);
    });

    test(`2 Верный возврат для [1, 100], 30`, () => {
      const result = fillArrayWithUniqueRandomNumbers([1, 100], 30);

      ok(result.length === [...new Set(result)].length);
    });

    test(`3 Верный возврат для [1, 3], 8`, () => {
      const result = fillArrayWithUniqueRandomNumbers([1, 3], 8);

      ok(result.length === [...new Set(result)].length);
    });
  });
});
