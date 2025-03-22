import simpleTest from '../additional/simpleTest';
import { areAllDigitsOdd, isPalindrome, removeLongWords, sumOfElements } from './level_3_3';

describe('Уровень 3.3', () => {
  describe('3.3.1 Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.', () => {
    const testCases = [
      {
        input: ['apple', 'cat', 'banana', 'dog', 'elephant'],
        expected: ['cat', 'dog'],
      },
      {
        input: ['hello', 'world', 'yes', 'no', 'JavaScript'],
        expected: ['yes', 'no'],
      },
      {
        input: ['a', 'ab', 'abc', 'abcd', 'abcde'],
        expected: ['a', 'ab', 'abc'],
      },
      {
        input: ['one', 'two', 'three', 'four', 'five'],
        expected: ['one', 'two'],
      },
      {
        input: ['short', 'longword', 'tiny', 'hugeword'],
        expected: [],
      },
      {
        input: ['word', 'words', 'wordy', 'worded'],
        expected: [],
      },
      {
        input: [],
        expected: [],
      },
    ];

    simpleTest(testCases, removeLongWords);
  });

  describe('3.3.2 Дано некоторое число. Проверьте, что все цифры этого числа являются нечетными.', () => {
    const testCases = [
      {
        input: 1357,
        expected: true,
      },
      {
        input: 12345,
        expected: false,
      },
      {
        input: 97531,
        expected: true,
      },
      {
        input: 24680,
        expected: false,
      },
      {
        input: 111,
        expected: true,
      },
      {
        input: 135790,
        expected: false,
      },
      {
        input: 7,
        expected: true,
      },
      {
        input: 0,
        expected: false,
      },
    ];

    simpleTest(testCases, areAllDigitsOdd);
  });

  describe('3.3.3 Дано некоторое число. Проверьте, что все цифры этого числа являются нечетными.', () => {
    const testCases = [
      {
        input: 'abcba',
        expected: true,
      },
      {
        input: 'racecar',
        expected: true,
      },
      {
        input: 'hello',
        expected: false,
      },
      {
        input: 'madam',
        expected: true,
      },
      {
        input: 'world',
        expected: false,
      },
      {
        input: 'a',
        expected: true,
      },
      {
        input: 'ab',
        expected: false,
      },
      {
        input: '',
        expected: true,
      },
    ];

    simpleTest(testCases, isPalindrome);
  });

  describe('3.3.4 Дано некоторое число. Проверьте, что все цифры этого числа являются нечетными.', () => {
    const testCases = [
      {
        input: [[[1, 0, 0]], [[1, 0, 0]], [[1, 0, 0]]],
        expected: 3,
      },
      {
        input: [
          [
            [11, 12, 13],
            [14, 15, 16],
            [17, 17, 19],
          ],
          [
            [21, 22, 23],
            [24, 25, 26],
            [27, 27, 29],
          ],
          [
            [31, 32, 33],
            [34, 35, 36],
            [37, 37, 39],
          ],
        ],
        expected: 134 + 224 + 314,
      },
      {
        input: [],
        expected: 0,
      }
    ];

    simpleTest(testCases, sumOfElements);
  });
});
