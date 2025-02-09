import simpleTest from '../additional/simpleTest';
import { findZeroPositions, ratioOfEvenOddIndexSum, removeEveryThirdCharacter } from './level_2_5';

describe('Уровень 2.5', () => {
  describe('2.5.1 Дана некоторая строка с буквами и цифрами. Получите массив позиций всех нулей в этой в строке.', () => {
    const testCases = [
      {
        input: '023m0df0dfg0',
        expected: [0, 4, 7, 11],
      },
      {
        input: 'abcdefg',
        expected: [],
      },
      {
        input: '00000',
        expected: [0, 1, 2, 3, 4],
      },
      {
        input: '1234567890',
        expected: [9],
      },
      {
        input: '0',
        expected: [0],
      },
      {
        input: 'noZerosHere',
        expected: [],
      },
      {
        input: '0z0z0z0',
        expected: [0, 2, 4, 6],
      },
      {
        input: '',
        expected: [],
      },
      {
        input: '000zero000',
        expected: [0, 1, 2, 7, 8, 9],
      },
    ];

    simpleTest(testCases, findZeroPositions);
  });

  describe('2.5.2 Дана некоторая строка. Удалите из этой строки каждый третий символ.', () => {
    const testCases = [
      {
        input: 'abcdefg',
        expected: 'abdeg',
      },
      {
        input: '123456789',
        expected: '124578',
      },
      {
        input: 'hello',
        expected: 'helo',
      },
      {
        input: 'abc',
        expected: 'ab',
      },
      {
        input: 'ab',
        expected: 'ab',
      },
      {
        input: 'a',
        expected: 'a',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: 'abcdefghijklmnopqrstuvwxyz',
        expected: 'abdeghjkmnpqstvwyz',
      },
      {
        input: 'removeeverythird',
        expected: 'reovevryhid',
      },
    ];

    simpleTest(testCases, removeEveryThirdCharacter);
  });

  describe('2.5.3 Дан массив чисел. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.', () => {
    const testCases = [
      {
        input: [1, 2, 3, 4, 5, 6],
        expected: 0.75,
      },
      {
        input: [10, 20, 30, 40, 50, 60],
        expected: 0.75,
      },
      {
        input: [1, 1, 1, 1, 1, 1],
        expected: 1,
      },
      {
        input: [2, 4, 6, 8, 10, 12],
        expected: 0.75,
      },
      {
        input: [1, 0, 0, 0, 0, 0],
        expected: Infinity,
      },
      {
        input: [1, 3, 5, 7, 9],
        expected: 1.5,
      },
      {
        input: [2, 2, 2, 2],
        expected: 1,
      },
      {
        input: [1, 2, 3],
        expected: 2,
      },
      {
        input: [6, 5, 4, 3, 2, 1],
        expected: 1.3333333333333333,
      },
      {
        input: [1, 0, 1, 0, 1, 0],
        expected: Infinity,
      },
      {
        input: [0, 0],
        expected: NaN,
      },
    ];

    simpleTest(testCases, ratioOfEvenOddIndexSum);
  });
});
