import simpleTest from '../additional/simpleTest';
import {
  capitalizeFirstLetterOfEachWord,
  capitalizeOddLetters,
  countOfEvenDigits,
  extractKeysAndValues,
  getFirstDigitInString,
} from './level_2_4';

describe('Уровень 2.4', () => {
  describe('2.4.1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.', () => {
    const testCases = [
      { input: 'abc123', expected: 3 },
      { input: 'noDigitsHere', expected: -1 },
      { input: '1stDigitAtStart', expected: 0 },
      { input: 'abcdef', expected: -1 },
      { input: 'a1b2c3', expected: 1 },
      { input: 'digitAtEnd1', expected: 10 },
      { input: '123456', expected: 0 },
      { input: 'abcdefg123', expected: 7 },
      { input: '1a2b3c', expected: 0 },
      { input: 'noDigits123', expected: 8 },
      { input: '123abc', expected: 0 },
      { input: 'abc123def', expected: 3 },
      { input: '123abc456', expected: 0 },
      { input: 'abc123def456', expected: 3 },
      { input: '1a2b3c4d', expected: 0 },
      { input: 'abcdefghijklmnopqrstuvwxyz123', expected: 26 },
      { input: '1234567890abcdefghijklmnopqrstuvwxyz', expected: 0 },
      { input: 'abcdefghijklmnopqrstuvwxyz', expected: -1 },
      { input: '1', expected: 0 },
      { input: '', expected: -1 },
    ];

    simpleTest(testCases, getFirstDigitInString);
  });

  describe('2.4.2 Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.', () => {
    const testCases = [
      {
        input: { a: 1, b: 2, c: 3 },
        expected: [
          ['a', 'b', 'c'],
          [1, 2, 3],
        ],
      },
      {
        input: { name: 'Alice', age: 30, city: 'Wonderland' },
        expected: [
          ['name', 'age', 'city'],
          ['Alice', 30, 'Wonderland'],
        ],
      },
      {
        input: { x: true, y: false, z: true },
        expected: [
          ['x', 'y', 'z'],
          [true, false, true],
        ],
      },
      {
        input: { key1: 'value1', key2: 'value2' },
        expected: [
          ['key1', 'key2'],
          ['value1', 'value2'],
        ],
      },
      {
        input: {},
        expected: [[], []],
      },
      {
        input: { singleKey: 'singleValue' },
        expected: [['singleKey'], ['singleValue']],
      },
    ];

    simpleTest(testCases, extractKeysAndValues);
  });

  describe('2.4.3 Дано число. Выведите в консоль количество четных цифр в этом числе.', () => {
    const testCases = [
      {
        input: 123456,
        expected: 3,
      },
      {
        input: 24680.0,
        expected: 5,
      },
      {
        input: 13579,
        expected: 0,
      },
      {
        input: 0,
        expected: 1,
      },
      {
        input: -22446688,
        expected: 8,
      },
      {
        input: 111111,
        expected: 0,
      },
      {
        input: 246802468,
        expected: 9,
      },
      {
        input: 1234567890,
        expected: 5,
      },
    ];

    simpleTest(testCases, countOfEvenDigits);
  });

  describe('2.4.4 Дана строка. Переведите в верхний регистр все нечетные буквы этой строки.', () => {
    const testCases = [
      {
        input: 'abcde',
        expected: 'AbCdE',
      },
      {
        input: 'hello',
        expected: 'HeLlO',
      },
      {
        input: 'world',
        expected: 'WoRlD',
      },
      {
        input: 'testcase',
        expected: 'TeStCaSe',
      },
      {
        input: 'a',
        expected: 'A',
      },
      {
        input: 'ab',
        expected: 'Ab',
      },
      {
        input: 'xyz',
        expected: 'XyZ',
      },
      {
        input: '12345',
        expected: '12345',
      },
      {
        input: '',
        expected: '',
      },
    ];

    simpleTest(testCases, capitalizeOddLetters);
  });

  describe('2.4.5 Дана строка. Сделайте заглавным первый символ каждого слова в этой строке.', () => {
    const testCases = [
      {
        input: 'aaa bbb ccc',
        expected: 'Aaa Bbb Ccc',
      },
      {
        input: 'hello world',
        expected: 'Hello World',
      },
      {
        input: 'javascript is fun',
        expected: 'Javascript Is Fun',
      },
      {
        input: 'one two three',
        expected: 'One Two Three',
      },
      {
        input: 'a',
        expected: 'A',
      },
      {
        input: 'a b cc',
        expected: 'A B Cc',
      },
      {
        input: '   leading spaces',
        expected: '   Leading Spaces',
      },
      {
        input: 'mixedCASEexample',
        expected: 'MixedCASEexample',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: 'already Capitalized',
        expected: 'Already Capitalized',
      },
    ];

    simpleTest(testCases, capitalizeFirstLetterOfEachWord);
  });
});
