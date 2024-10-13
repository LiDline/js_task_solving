import simpleTest from '../additional/simpleTest';
import {
  getCharsFromEnd,
  getRemainder,
  getSum1To100,
  getSumForEven1To100,
} from './level_1_5';

describe('Уровень 1.5', () => {
  test('1.5.1 Найдите сумму всех целых чисел от 1 до 100.', () => {
    const n = 100;
    const expected = (n * (n + 1)) / 2;

    const res = getSum1To100();

    expect(res).toEqual(expected);
  });

  test('1.5.2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.', () => {
    const expected = (50 / 2) * (2 + 100);

    const res = getSumForEven1To100();

    expect(res).toEqual(expected);
  });

  test('1.5.3 Найдите сумму всех целых нечётных чисел в промежутке от 1 до 100.', () => {
    const expected = (50 / 2) * (2 + 100);

    const res = getSumForEven1To100();

    expect(res).toEqual(expected);
  });

  describe('1.5.4 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.', () => {
    const testCases = [
      { input: -9_001, secondInput: 98, expected: -83 },
      { input: -325345, secondInput: 93254358, expected: -325345 },
      { input: -0.001, secondInput: 98, expected: -0.001 },
      { input: -0.001, secondInput: 10, expected: -0.001 },
      { input: 10, secondInput: 2, expected: 0 },
    ];

    simpleTest(testCases, getRemainder);
  });

  describe('1.5.5 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.', () => {
    const testCases = [
      { input: 'мышь', expected: 'ьшым' },
      { input: 'книга', expected: 'агинк' },
      { input: 'окно', expected: 'онко' },
      { input: '', expected: '' },
      { input: 'ь', expected: 'ь' },
    ];

    simpleTest(testCases, getCharsFromEnd);
  });
});
