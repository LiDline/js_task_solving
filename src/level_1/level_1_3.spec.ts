import simpleTest from '../additional/simpleTest';
import { getPenultSymbol, isDenominator } from './level_1_3';

describe('Уровень 1.3', () => {
  describe('1.3.1 Дано число. Выведите в консоль первую цифру этого числа.', () => {
    const testCases = [
      { input: 'мышь', expected: 'ш' },
      { input: 'книга', expected: 'г' },
      { input: 'окно', expected: 'н' },
      { input: 'стол', expected: 'о' },
      { input: 'край', expected: 'а' },
      { input: 'путь', expected: 'т' },
      { input: 'солнце', expected: 'ц' },
      { input: '', expected: '' },
      { input: 'ь', expected: 'ь' },
    ];

    simpleTest(testCases, getPenultSymbol);
  });

  describe('1.3.2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.', () => {
    const testCases = [
      { input: -9_001.001, secondInput: 98, expected: false },
      { input: -325345, secondInput: 93254358, expected: false },
      { input: -0.001, secondInput: 98, expected: false },
      { input: -0.001, secondInput: 10, expected: false },
      { input: 10, secondInput: 2, expected: true },
    ];

    simpleTest(testCases, isDenominator);
  });
});
