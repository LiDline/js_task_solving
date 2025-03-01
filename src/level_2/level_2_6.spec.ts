import simpleTest from '../additional/simpleTest';
import {
  capitalizeEverySecondWord,
  findDigitPositions,
  formatNumberWithSpaces,
  mergePairs,
  reverseDigitsOfNumbersInArray,
  toggleCase,
} from './level_2_6';

describe('Уровень 2.6', () => {
  describe('2.6.1 Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.', () => {
    const testCases = [
      {
        input: 'abc123def456',
        expected: [3, 4, 5, 9, 10, 11],
      },
      {
        input: 'noDigitsHere',
        expected: [],
      },
      {
        input: '1a2b3c4d5e',
        expected: [0, 2, 4, 6, 8],
      },
      {
        input: 'abcdefg',
        expected: [],
      },
      {
        input: '1234567890',
        expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      {
        input: 'a1b2c3d4',
        expected: [1, 3, 5, 7],
      },
      {
        input: '',
        expected: [],
      },
      {
        input: '000zero000',
        expected: [0, 1, 2, 7, 8, 9],
      },
      {
        input: 'digits123andLetters',
        expected: [6, 7, 8],
      },
    ];

    simpleTest(testCases, findDigitPositions);
  });

  describe('2.6.2 Дан массив с некоторыми числами. Напишите код, который перевернет числа в этом массиве.', () => {
    const testCases = [
      {
        input: [-100.02],
        expected: [-20.001],
      },
      {
        input: [123, 456, 789],
        expected: [321, 654, 987],
      },
      {
        input: [12345, -67890, 12.34, -56.78],
        expected: [54321, -9876, 43.21, -87.65],
      },
      {
        input: [0, -0, 0.0, -0.0],
        expected: [0, 0, 0, 0],
      },
      {
        input: [1000, -1000, 1000.0, -1000.0],
        expected: [1, -1, 1, -1],
      },
    ];

    simpleTest(testCases, reverseDigitsOfNumbersInArray);
  });

  describe('2.6.3 Дана некоторая строка с числом. Отделите тройки цифр пробелами, начиная с конца числа.', () => {
    const testCases = [
      {
        input: '1234567',
        expected: '1 234 567',
      },
      {
        input: '1234567890',
        expected: '1 234 567 890',
      },
      {
        input: '123',
        expected: '123',
      },
      {
        input: '1',
        expected: '1',
      },
      {
        input: '000000',
        expected: '000 000',
      },
      {
        input: '9876543210',
        expected: '9 876 543 210',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: '1234',
        expected: '1 234',
      },
      {
        input: '1000000',
        expected: '1 000 000',
      },
    ];

    simpleTest(testCases, formatNumberWithSpaces);
  });

  describe('2.6.4 Дана строка. Смените регистр букв этой строки на противоположный.', () => {
    const testCases = [
      {
        input: 'AbCdE',
        expected: 'aBcDe',
      },
      {
        input: 'HelloWorld',
        expected: 'hELLOwORLD',
      },
      {
        input: 'JavaScript',
        expected: 'jAVAsCRIPT',
      },
      {
        input: '12345',
        expected: '12345',
      },
      {
        input: 'A1B2C3',
        expected: 'a1b2c3',
      },
      {
        input: 'abcDEF',
        expected: 'ABCdef',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: 'A',
        expected: 'a',
      },
      {
        input: 'a',
        expected: 'A',
      },
    ];

    simpleTest(testCases, toggleCase);
  });

  describe('2.6.5 Дан некоторый массив с числами. Слейте пары элементов вместе.', () => {
    const testCases = [
      {
        input: [1, 2, 3, 4, 5, 6],
        expected: [12, 34, 56],
      },
      {
        input: [10, 20, 30, 40],
        expected: [1020, 3040],
      },
      {
        input: [9, 8, 7],
        expected: [98, 7],
      },
      {
        input: [5],
        expected: [5],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: [12, 34, 5],
      },
      {
        input: [0, 0, 0, 0],
        expected: [0, 0],
      },
      {
        input: [12, 34, 56, 78, 90],
        expected: [1234, 5678, 90],
      },
    ];

    simpleTest(testCases, mergePairs);
  });

  describe('2.6.6 Дана некоторая строка со словами. Сделайте заглавным первый символ каждого второго слова в этой строке.', () => {
    const testCases = [
      {
        input: 'aaa bbb ccc eee fff',
        expected: 'aaa Bbb ccc Eee fff',
      },
      {
        input: 'one two three four five fi',
        expected: 'one Two three Four five Fi',
      },
      {
        input: 'apple orange banana grape',
        expected: 'apple Orange banana Grape',
      },
      {
        input: 'a b c d e f',
        expected: 'a B c D e F',
      },
      {
        input: 'word',
        expected: 'word',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: '123 456 789 000',
        expected: '123 456 789 000',
      },
    ];

    simpleTest(testCases, capitalizeEverySecondWord);
  });
});
