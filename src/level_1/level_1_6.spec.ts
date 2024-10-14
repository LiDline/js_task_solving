import simpleTest from '../additional/simpleTest';
import {
    getSumOfElementsBetweenZeroAndTen,
  getSumOfPositive,
  getSumOfSquareRoots,
  getSumOfSquares,
} from './level_1_6';

describe('Уровень 1.6', () => {
  describe('1.6.1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.', () => {
    const testCases = [
      { input: [-1], expected: 1 },
      { input: [-1, 8, 34, 26], expected: 1897 },
      { input: [0], expected: 0 },
      { input: [1, 2, 3], expected: 14 }, // 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14
      { input: [-2, -3, -4], expected: 29 }, // (-2)^2 + (-3)^2 + (-4)^2 = 4 + 9 + 16 = 29
      { input: [5, 10, 15], expected: 350 }, // 5^2 + 10^2 + 15^2 = 25 + 100 + 225 = 350
      { input: [], expected: 0 }, // пустой массив, сумма квадратов = 0
      { input: [100, 200], expected: 50000 },
    ];

    simpleTest(testCases, getSumOfSquares);
  });

  describe('1.6.2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.', () => {
    const testCases = [
      { input: [1], expected: 1 },
      { input: [4, 9, 16], expected: 9 }, // √4 + √9 + √16 = 2 + 3 + 4 = 9
      { input: [0, 25, 100], expected: 15 }, // √0 + √25 + √100 = 0 + 5 + 10 = 15
      { input: [64, 36, 49], expected: 21 }, // √64 + √36 + √49 = 8 + 6 + 7 = 21
      { input: [-4, 9, 25], expected: 8 },
      { input: [], expected: 0 }, // Пустой массив, сумма = 0
    ];

    simpleTest(testCases, getSumOfSquareRoots);
  });

  describe('1.6.3 Дан массив с числами. Найдите сумму положительных элементов этого массива.', () => {
    const testCases = [
      { input: [1], expected: 1 },
      { input: [1, -2, 3, -4, 5], expected: 9 }, // 1 + 3 + 5 = 9
      { input: [-1, -2, -3], expected: 0 }, // Все числа отрицательные, сумма = 0
      { input: [10, 20, 30], expected: 60 }, // 10 + 20 + 30 = 60
      { input: [0, -5, 15], expected: 15 }, // Только 15 положительное, сумма = 15
      { input: [100, -50, 0, 200], expected: 300 }, // 100 + 200 = 300
      { input: [], expected: 0 }, // Пустой массив, сумма = 0
    ];

    simpleTest(testCases, getSumOfPositive);
  });

  describe('1.6.4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.', () => {
    const testCases = [
      { input: [-1], expected: 0 },
      { input: [1, 2, 3, 10, 15], expected: 6 }, // 1 + 2 + 3 = 6
      { input: [5, -3, 12, 8, 0], expected: 13 }, // 5 + 8 = 13
      { input: [9, 9, 9, 11], expected: 27 }, // 9 + 9 + 9 = 27
      { input: [0, -5, 0, 7], expected: 7 }, // Только 7 подходит под условия
      { input: [10, 15, 20], expected: 0 }, // Все числа больше или равны 10
      { input: [1.5, 3.5, 9.5, -4], expected: 14.5 }, // 1.5 + 3.5 + 9.5 = 14.5
      { input: [], expected: 0 }, // Пустой массив, сумма = 0
    ];

    simpleTest(testCases, getSumOfElementsBetweenZeroAndTen);
  });
});
