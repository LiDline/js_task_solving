import simpleTest from '../additional/simpleTest';
import { getArrayDigitsFromNumber, getArrayOfStr, getRevertNumber, getSumOfNumberDigits } from './level_1_7';

describe('Уровень 1.7', () => {
  describe('1.7.1 Дана строка. Получите массив букв этой строки.', () => {
    const testCases = [
      { input: '[', expected: ['['] },
      { input: 'abc', expected: ['a', 'b', 'c'] },
      {
        input: 'Hello, World!',
        expected: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!'],
      },
      { input: '12345', expected: ['1', '2', '3', '4', '5'] },
      { input: '', expected: [] },
      { input: 'A', expected: ['A'] },
      {
        input: 'This is a test.',
        expected: ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 't', 'e', 's', 't', '.'],
      },
    ];

    simpleTest(testCases, getArrayOfStr);
  });

  describe('1.7.2 Дано число. Получите массив цифр этого числа.', () => {
    const testCases = [
      { input: -1, expected: [1] },
      { input: 0, expected: [0] }, // Ноль
      { input: 12345, expected: [1, 2, 3, 4, 5] }, // Положительное число с несколькими цифрами
      { input: -9876, expected: [9, 8, 7, 6] }, // Отрицательное число с несколькими цифрами
      { input: 100200, expected: [1, 0, 0, 2, 0, 0] }, // Число с нулями внутри
      { input: 505, expected: [5, 0, 5] }, // Число с повторяющимися цифрами
      { input: 9000009, expected: [9, 0, 0, 0, 0, 0, 9] }, // Число с нулями в середине
      { input: -2023, expected: [2, 0, 2, 3] }, // Отрицательное число с нулями
      { input: -2023.333, expected: [2, 0, 2, 3, 3, 3, 3] }, // Отрицательное число с нулями
    ];

    simpleTest(testCases, getArrayDigitsFromNumber);
  });

  describe('1.7.3 Дано число. Возвращает перевёрнутое число.', () => {
    const testCases = [
      { input: -1, expected: -1 },
      { input: -2023.333, expected: -333.3202 },
      { input: 12345, expected: 54321 }, // Положительное число
      { input: 0, expected: 0 }, // Ноль
      { input: 100, expected: 1 }, // Число с нулями на конце
      { input: -500, expected: -5 }, // Отрицательное число с нулями на конце
      { input: 987654321, expected: 123456789 }, // Длинное число
      { input: 120.0045, expected: 5400.021 }, // Положительное число с десятичными знаками и нулями
      { input: -1001, expected: -1001 }, // Число, которое останется таким же после переворота
      { input: 432.123, expected: 321.234 }, // Число с десятичной частью
    ];

    simpleTest(testCases, getRevertNumber);
  });

  describe('1.7.4 Дано число. Возвращает сумму его цифр.', () => {
    const testCases = [
      { input: -1, expected: 1 }, // Отрицательное однозначное число
      { input: 12345, expected: 15 }, // Положительное число
      { input: -98765, expected: 35 }, // Отрицательное число
      { input: 0, expected: 0 }, // Ноль
      { input: 1001, expected: 2 }, // Число с нулями
      { input: 4321, expected: 10 }, // Положительное число с последовательными цифрами
      { input: 99999, expected: 45 }, // Число с одинаковыми цифрами
      { input: -120, expected: 3 }, // Отрицательное число с нулями
      { input: 1000000, expected: 1 }, // Число с множеством нулей
      { input: -56789, expected: 35 }, // Отрицательное число с последовательными цифрами
    ];
    simpleTest(testCases, getSumOfNumberDigits);
  });
});
