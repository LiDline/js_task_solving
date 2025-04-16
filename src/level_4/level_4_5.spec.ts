import { ok } from 'node:assert';
import simpleTest from '../additional/simpleTest';
import {
  fillRandomLettersArray,
  findSecondLargest,
  generateRange,
  isFractionString,
  isNumericString,
  sumOfFirstNFibonacci,
} from './level_4_5';

describe('Уровень 4.5', () => {
  describe('4.5.1. Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.', () => {
    const testCases = [
      {
        input: '12345',
        expected: true, // Строка состоит только из цифр
      },
      {
        input: '123a45',
        expected: false, // Строка содержит букву
      },
      {
        input: '007',
        expected: true, // Строка состоит только из цифр
      },
      {
        input: '-123',
        expected: true, // Строка содержит знак минус
      },
      {
        input: '12.34',
        expected: true, // Строка содержит точку
      },
      {
        input: '',
        expected: false, // Пустая строка
      },
      {
        input: '12 34',
        expected: false, // Строка содержит пробел
      },
    ];

    simpleTest(testCases, isNumericString);
  });

  describe('4.5.2. Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.', () => {
    const testCases = [
      {
        input: '123.45',
        expected: true, // Строка является дробью
      },
      {
        input: '123',
        expected: false, // Строка не содержит точку
      },
      {
        input: '.45',
        expected: true, // Строка является дробью, начинается с точки
      },
      {
        input: '123.',
        expected: true, // Строка является дробью, заканчивается точкой
      },
      {
        input: '12.34.56',
        expected: false, // Строка содержит более одной точки
      },
      {
        input: '12a.34',
        expected: false, // Строка содержит букву
      },
      {
        input: '-123.45',
        expected: true, // Строка содержит знак минус
      },
      {
        input: '12 34',
        expected: false, // Строка содержит пробел
      },
      {
        input: '',
        expected: false, // Пустая строка
      },
    ];

    simpleTest(testCases, isFractionString);
  });

  describe('4.5.3. Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.', () => {
    const testCases = [
      {
        input: [3, 1, 4, 1, 5, 9, 2, 6, 5],
        expected: 6, // Второе по величине число после 9
      },
      {
        input: [2, 7, 1, 8, 2, 8],
        expected: 8, // Второе по величине число после 8
      },
      {
        input: [10, 10, 10],
        expected: 10,
      },
      {
        input: [5, 3, 9, 3, 5, 7],
        expected: 7, // Второе по величине число после 9
      },
      {
        input: [1, 2],
        expected: 1, // Второе по величине число после 2
      },
      {
        input: [2],
        expected: undefined, // Только один элемент, нет второго по величине
      },
      {
        input: [],
        expected: undefined, // Пустой массив, нет второго по величине
      },
    ];

    simpleTest(testCases, findSecondLargest);
  });

  describe('4.5.4. Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.', () => {
    const testCases = [
      {
        input: { start: 2, end: 5 },
        expected: [2, 3, 4, 5],
      },
      {
        input: { start: -3, end: 3 },
        expected: [-3, -2, -1, 0, 1, 2, 3], // Массив от -3 до 3
      },
      {
        input: { start: 10, end: 10 },
        expected: [10], // Массив с одним элементом, так как начало равно концу
      },
      {
        input: { start: 0, end: 0 },
        expected: [0], // Массив с одним элементом, так как начало равно концу
      },
      {
        input: { start: 3, end: 7 },
        expected: [3, 4, 5, 6, 7], // Массив от 3 до 7
      },
    ];

    simpleTest(testCases, generateRange);
  });

  describe('4.5.5. Сделайте функцию, которая заполнит массив случайными латинскими буквами.', () => {
    test(`1 Верный возврат для 3`, () => {
      const result = fillRandomLettersArray(3);
console.log(result);

      ok(result.join('').match(/[a-zA-Z]{3}/));
    });
  });

  describe('4.5.6. Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.', () => {
    const testCases = [
      {
        input: 5,
        expected: 0 + 1 + 1 + 2 + 3, // 0, 1, 1, 2, 3 => 0+1+1+2+3 = 7
      },
      {
        input: 10,
        expected: 88, // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 => 0+1+1+2+3+5+8+13+21+34 = 88
      },
      {
        input: 1,
        expected: 0, // Только первое число Фибоначчи: 0
      },
      {
        input: 2,
        expected: 1, // 0, 1 => 0+1 = 1
      },
      {
        input: 0,
        expected: 0, // N = 0, сумма равна 0
      },
      {
        input: 7,
        expected: 20, // 0, 1, 1, 2, 3, 5, 8 => 0+1+1+2+3+5+8 = 20
      },
    ];

    simpleTest(testCases, sumOfFirstNFibonacci);
  });
});
