import simpleTest from '../additional/simpleTest';
import {
  getFirstZeroPosition,
  getNumbersWithDigitSumEqualToFive,
  getSumOfFirstHalf,
  removeElementsByValue,
} from './level_2_1';

describe('Уровень 2.1', () => {
  describe('2.1.1 Даны массивы. Слейте эти массивы в новый массив.', () => {
    const testCases = [
      { input: 'a0/', expected: 1 },
      { input: '1001', expected: 1 },
      { input: 'hello world', expected: -1 }, // Нет нуля
      { input: 'abc000def', expected: 3 }, // Первый ноль на позиции 3
      { input: '0000', expected: 0 }, // Ноль в начале
      { input: '', expected: -1 }, // Пустая строка
      { input: '123456789', expected: -1 }, // Нет нуля
      { input: '00123', expected: 0 }, // Первый ноль на позиции 0
    ];

    simpleTest(testCases, getFirstZeroPosition);
  });

  test('2.1.2 Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.', () => {
    const expected = [
      14, 23, 32, 41, 50, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 230, 231, 232, 233, 234,
      235, 236, 237, 238, 239, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 410, 411, 412, 413,
      414, 415, 416, 417, 418, 419, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509,
    ];

    const res = getNumbersWithDigitSumEqualToFive();

    expect(res).toEqual(expected);
  });

  test('2.1.3 Дан массив. Удалите из него элементы с заданным значением.', () => {
    const expected = [2, 3];

    const res = removeElementsByValue([1, 2, 3, 1], 1);

    expect(res).toEqual(expected);
  });

  describe('2.1.4 Дан некоторый массив. Найдите сумму первой половины элементов этого массива.', () => {
    const testCases = [
      { input: [1, 2, 3, 4, 5, 6], expected: 6 },
      { input: [10, 20, 30, 40], expected: 30 }, // 10 + 20
      { input: [5], expected: 5 },
      { input: [2, 4, 6, 8, 10, 12, 14], expected: 20 }, // 2 + 4 + 6 + 8
      { input: [0, 0, 0, 0], expected: 0 }, // Все нули
      { input: [1, -1, 1, -1], expected: 0 }, // 1 - 1
      { input: [], expected: 0 }, // Пустой массив
      { input: [2, 4, 6, 8, 10, 12, 14, 1, 1], expected: 30 }, 

    ];

    simpleTest(testCases, getSumOfFirstHalf);
  });
});
