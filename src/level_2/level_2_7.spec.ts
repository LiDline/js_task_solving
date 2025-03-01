import simpleTest from '../additional/simpleTest';
import { checkCharacterCase, removeOddDigits, uppercaseShortWords } from './level_2_7';

describe('Уровень 2.7', () => {
  describe('2.7.1 Дана некоторая строка. Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем.', () => {
    const testCases = [
      {
        input: 'a bc def ghij',
        expected: 'A BC DEF ghij',
      },
      {
        input: 'hello world this is a test',
        expected: 'hello world this IS A test',
      },
      {
        input: 'one two three four',
        expected: 'ONE TWO three four',
      },
      {
        input: 'abc defg hijk lmnop',
        expected: 'ABC defg hijk lmnop',
      },
      {
        input: 'a b c d e f',
        expected: 'A B C D E F',
      },
      {
        input: 'longword short',
        expected: 'longword short',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: '123 45 6',
        expected: '123 45 6',
      },
    ];

    simpleTest(testCases, uppercaseShortWords);
  });

  describe('2.7.2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.', () => {
    const testCases = [
      {
        input: 'a bc def ghij',
        expected: 'neither',
      },
      {
        input: '!',
        expected: 'neither',
      },
      {
        input: 'q',
        expected: 'lowercase',
      },
      {
        input: 'A',
        expected: 'uppercase',
      },
    ];

    simpleTest(testCases, checkCharacterCase);
  });

  describe('2.7.3 Дано некоторое число. Удалите из этого числа все нечетные цифры.', () => {
    const testCases = [
      {
        input: 123789,
        expected: 28,
      },
      {
        input: 22222,
        expected: 22222,
      },
      {
        input: 11111,
        expected: 0,
      },

      {
        input: 20.12,
        expected: 20.2,
      },
      {
        input: 10.12,
        expected: 0.2,
      },
      {
        input: -11.12,
        expected: -0.2,
      },
    ];

    simpleTest(testCases, removeOddDigits);
  });
});
