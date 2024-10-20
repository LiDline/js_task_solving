import simpleTest from '../additional/simpleTest';
import {
  countNegativeNumbers,
  divideSumOfHalves,
  getPositiveNumbers,
  removePenultimateElement,
} from './level_2_2';

describe('Уровень 2.2', () => {
  describe('2.2.1 Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.', () => {
    const testCases = [
      { input: [1], expected: 0 },
      { input: [-1, 2, -3, 4], expected: 2 },
      { input: [0, 0, 0], expected: 0 },
      { input: [-10, -20, -30], expected: 3 },
      { input: [5, -5, 10, -15, 20, -25], expected: 3 },
      { input: [], expected: 0 },
    ];

    simpleTest(testCases, countNegativeNumbers);
  });

  describe('2.2.2 Дан массив с числами. Оставьте в нем только положительные числа.', () => {
    const testCases = [
      { input: [1], expected: [1] },
      { input: [-1, 2, -3, 4], expected: [2, 4] },
      { input: [0, -1, -2, -3], expected: [] },
      { input: [10, 20, 30], expected: [10, 20, 30] },
      { input: [5, -5, 0, -15, 20, -25], expected: [5, 20] },
      { input: [-10, -20, -30], expected: [] },
      { input: [], expected: [] },
    ];

    simpleTest(testCases, getPositiveNumbers);
  });

  describe('2.2.3 Дана строка. Удалите предпоследний символ из этой строки.', () => {
    const testCases = [
      { input: 'hello', expected: 'helo' },
      { input: 'abcdef', expected: 'abcdf' },
      { input: 'a', expected: 'a' }, // крайний случай: одна буква
      { input: 'ab', expected: 'b' }, // крайний случай: два символа
      { input: '', expected: '' }, // пустая строка
      { input: '123456789', expected: '12345679' }, // строка из чисел
    ];

    simpleTest(testCases, removePenultimateElement);
  });

  describe('2.2.4 Дан некоторый массив. Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.', () => {
    const testCases = [
      { input: [1, 2], expected: 0.5 },
      { input: [10, 20, 40, 60], expected: 0.3 }, // 10 + 20 = 30, 40 + 60 = 100, 30 / 100 = 0.3
      { input: [3, 6, 9, 18, 3], expected: 0.3 },
      { input: [1], expected: 1 },
      { input: [], expected: 0 },
      { input: [1, 1, -2, -2], expected: -0.5 },
    ];

    simpleTest(testCases, divideSumOfHalves);
  });
});
