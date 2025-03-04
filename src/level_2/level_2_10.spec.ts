import simpleTest from '../additional/simpleTest';
import {
  findFirstEvenDigitFromEnd,
  hasAtMostThreeLetters,
  hasConsecutiveDuplicates,
  replaceFirstCharWithExclamation,
} from './level_2_10';

describe('Уровень 2.10', () => {
  describe('2.10.1 Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.', () => {
    const testCases = [
      {
        input: 'a1b2c3',
        expected: true, // Только три буквы
      },
      {
        input: '12345',
        expected: true, // Нет букв
      },
      {
        input: 'abcd !@$##$123',
        expected: false, // Четыре буквы
      },
      {
        input: 'abc',
        expected: true, // Только три буквы
      },
      {
        input: 'a1b2c3d4',
        expected: false, // Четыре буквы
      },
      {
        input: '1a2b3c',
        expected: true, // Только три буквы
      },
      {
        input: '',
        expected: true, // Пустая строка
      },
      {
        input: 'Abcdef',
        expected: false, // Шесть букв
      },
      {
        input: '',
        expected: true,
      },
    ];

    simpleTest(testCases, hasAtMostThreeLetters);
  });

  describe('2.10.2 Дано число. Получите первую четную цифру с конца этого числа.', () => {
    const testCases = [
      {
        input: 123456,
        expected: 6, // Первая четная цифра с конца
      },
      {
        input: 789012,
        expected: 2, // Первая четная цифра с конца
      },
      {
        input: 13579,
        expected: undefined, // Нет четных цифр
      },
      {
        input: 0,
        expected: 0, // Единственная цифра, и она четная
      },
      {
        input: 567890,
        expected: 0, // Первая четная цифра с конца
      },
      {
        input: 111111,
        expected: undefined, // Нет четных цифр
      },
      {
        input: 24680,
        expected: 0, // Первая четная цифра с конца
      },
      {
        input: 1234567890,
        expected: 0, // Первая четная цифра с конца
      },
      {
        input: 1,
        expected: undefined,
      },
    ];

    simpleTest(testCases, findFirstEvenDigitFromEnd);
  });

  describe('2.10.3 Дана некоторая строка. Замените в ней первый символ каждого слова на "!".', () => {
    const testCases = [
      {
        input: 'abcde abcde abcde',
        expected: '!bcde !bcde !bcde',
      },
      {
        input: 'hello world',
        expected: '!ello !orld',
      },
      {
        input: 'one two three',
        expected: '!ne !wo !hree',
      },
      {
        input: 'a b c',
        expected: '! ! !',
      },
      {
        input: 'singleword',
        expected: '!ingleword',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: '   leading spaces',
        expected: '!eading !paces',
      },
      {
        input: 'MIXED CaSe',
        expected: '!IXED !aSe',
      },
    ];

    simpleTest(testCases, replaceFirstCharWithExclamation);
  });

  describe('2.10.4 Дан массив с числами. Проверьте, что в этом массиве есть два одинаковых элемента подряд.', () => {
    const testCases = [
      {
        input: [1, 2, 3, 3, 4, 5],
        expected: true,
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: false, // Нет одинаковых элементов подряд
      },
      {
        input: [1, 1, 2, 3, 4, 5],
        expected: true, // Две единицы подряд
      },
      {
        input: [1, 2, 2, 3, 4, 5],
        expected: true, // Две двойки подряд
      },
      {
        input: [1, 2, 3, 4, 5, 5],
        expected: true, // Две пятерки подряд
      },
      {
        input: [],
        expected: false, // Пустой массив
      },
      {
        input: [1],
        expected: false, // Один элемент
      },
      {
        input: [1, 1, 1, 1],
        expected: true, // Несколько одинаковых элементов подряд
      },
    ];

    simpleTest(testCases, hasConsecutiveDuplicates);
  });
});
