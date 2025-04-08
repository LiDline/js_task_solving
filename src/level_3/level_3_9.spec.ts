import simpleTest from '../additional/simpleTest';
import {
  createSequentialArray,
  findNumbersWithDigitSum13,
  isDigitsOnly,
  isEvenDigitsOnly,
  removeNumbersWithMultipleZeros,
} from './level_3_9';

describe('Уровень 3.9', () => {
  describe('3.9.1 Дана строка. Проверьте, что эта строка состоит только из цифр.', () => {
    const testCases = [
      {
        input: '123456',
        expected: true,
      },
      {
        input: '0000',
        expected: true,
      },
      {
        input: '123abc',
        expected: false,
      },
      {
        input: 'abc123',
        expected: false,
      },
      {
        input: '',
        expected: false, // Пустая строка не состоит из цифр
      },
      {
        input: '9876543210',
        expected: true,
      },
    ];

    simpleTest(testCases, isDigitsOnly);
  });

  describe('3.9.2 Дана строка. Проверьте, что эта строка состоит только из четных цифр.', () => {
    const testCases = [
      {
        input: '2468asdsd',
        expected: true,
      },
      {
        input: '0000',
        expected: true,
      },
      {
        input: '24680',
        expected: true,
      },
      {
        input: '1357',
        expected: false,
      },
      {
        input: '24681',
        expected: false,
      },
      {
        input: '',
        expected: false, // Пустая строка не состоит из цифр
      },
    ];

    simpleTest(testCases, isEvenDigitsOnly);
  });

  describe('3.9.3 Дан массив со числами. Удалите из него числа, имеющие два и более нуля.', () => {
    const testCases = [
      {
        input: [100, 200, 300, 400, 500, 5050],
        expected: [],
      },
      {
        input: [101, 202, 303, 404, 505],
        expected: [101, 202, 303, 404, 505],
      },
      {
        input: [1000, 2001, 3002, 4003, 5004],
        expected: [],
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4, 5],
      },
      {
        input: [100, 101, 1000, 1001, 10000],
        expected: [101],
      },
      {
        input: [],
        expected: [],
      },
    ];

    simpleTest(testCases, removeNumbersWithMultipleZeros);
  });

  describe('3.9.4 Найдите все числа от 1 до 1000, сумма цифр которых равна 13.', () => {
    const testCases = [
      {
        input: undefined,
        expected: [
          49, 58, 67, 76, 85, 94, 139, 148, 157, 166, 175, 184, 193, 229, 238, 247, 256, 265, 274,
          283, 292, 319, 328, 337, 346, 355, 364, 373, 382, 391, 409, 418, 427, 436, 445, 454, 463,
          472, 481, 490, 508, 517, 526, 535, 544, 553, 562, 571, 580, 607, 616, 625, 634, 643, 652,
          661, 670, 706, 715, 724, 733, 742, 751, 760, 805, 814, 823, 832, 841, 850, 904, 913, 922,
          931, 940,
        ],
      },
    ];

    simpleTest(testCases, findNumbersWithDigitSum13);
  });

  describe('3.9.5 Сформируйте с помощью циклов следующий массив.', () => {
    const testCases = [
      {
        input: undefined,
        expected: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      },
    ];

    simpleTest(testCases, createSequentialArray);
  });
});
