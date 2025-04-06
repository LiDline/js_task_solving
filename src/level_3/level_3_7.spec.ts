import simpleTest from '../additional/simpleTest';
import { sumOfObjectOrArray } from './level_3_6';
import {
  capitalizeLastLetter,
  duplicateSingleDigitNumbers,
  getDivisors,
  getDivisorsOfTwoNumbers,
  getMaxNumberFromString,
  hasOnlyOneNonTrivialDivisor,
  removeVowels,
  sortWordsAlphabetically,
} from './level_3_7';

describe('Уровень 3.7', () => {
  describe('3.7.1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.', () => {
    const testCases = [
      {
        input: 'An apple a day keeps the doctor away',
        expected: 'a An apple away day doctor keeps the',
      },
      {
        input: 'The quick brown fox jumps over the lazy dog',
        expected: 'brown dog fox jumps lazy over quick The the',
      },
      {
        input: 'Sorting words in a sentence',
        expected: 'a in sentence Sorting words',
      },
      {
        input: 'Alphabetical order is fun',
        expected: 'Alphabetical fun is order',
      },
      {
        input: '123 ABC abc',
        expected: '123 ABC abc',
      },
      {
        input: '',
        expected: '',
      },
    ];

    simpleTest(testCases, sortWordsAlphabetically);
  });

  describe('3.7.2 Дано число. Получите массив делителей этого числа.', () => {
    const testCases = [
      {
        input: 12,
        expected: [1, 2, 3, 4, 6, 12],
      },
      {
        input: 15,
        expected: [1, 3, 5, 15],
      },
      {
        input: 1,
        expected: [1],
      },
      {
        input: 0,
        expected: [],
      },
      {
        input: -12,
        expected: [1, 2, 3, 4, 6, 12],
      },
      {
        input: 25,
        expected: [1, 5, 25],
      },
    ];

    simpleTest(testCases, getDivisors);
  });

  describe('3.7.3 Даны два числа. Получите массив общих делителей этих чисел.', () => {
    const testCases = [
      {
        input: [12, 18],
        expected: [1, 2, 3, 6],
      },
      {
        input: [24, 36],
        expected: [1, 2, 3, 4, 6, 12],
      },
      {
        input: [15, 25],
        expected: [1, 5],
      },
      {
        input: [7, 11],
        expected: [1],
      },
      {
        input: [0, 5],
        expected: [],
      },
      {
        input: [1, 1],
        expected: [1],
      },
      {
        input: [20, -20],
        expected: [1, 2, 4, 5, 10, 20],
      },
    ];

    simpleTest(testCases, getDivisorsOfTwoNumbers);
  });

  describe('3.7.4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.', () => {
    const testCases = [
      {
        input: 4,
        expected: true, // Делители: 1, 2, 4 (только один делитель 2, кроме 1 и 4)
      },
      {
        input: 9,
        expected: true, // Делители: 1, 3, 9 (только один делитель 3, кроме 1 и 9)
      },
      {
        input: 6,
        expected: false, // Делители: 1, 2, 3, 6 (два делителя 2 и 3, кроме 1 и 6)
      },
      {
        input: 1,
        expected: false, // Число 1 не имеет других делителей, кроме себя
      },
      {
        input: 2,
        expected: false, // Число 2 имеет только делители 1 и 2
      },
      {
        input: 25,
        expected: true, // Делители: 1, 5, 25 (только один делитель 5, кроме 1 и 25)
      },
    ];

    simpleTest(testCases, hasOnlyOneNonTrivialDivisor);
  });

  describe('3.7.5 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.', () => {
    const testCases = [
      {
        input: '1, 2, 3, 4, 5, as, -1',
        expected: 5,
      },
      {
        input: '10, 20, 30, 40, 50',
        expected: 50,
      },
      {
        input: '-1, -2, -3, -4, -5',
        expected: -1,
      },
      {
        input: '5, 3, 8, 1, 9',
        expected: 9,
      },
      {
        input: '0, 0, 0, 0, 0',
        expected: 0,
      },
      {
        input: '100, 200, 50, 300, 250',
        expected: 300,
      },
    ];

    simpleTest(testCases, getMaxNumberFromString);
  });

  describe('3.7.6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.', () => {
    const testCases = [
      {
        input: [1, 2, 3, 10, 20, 5, 1.0],
        expected: [1, 1, 2, 2, 3, 3, 10, 20, 5, 5, 1, 1],
      },
      {
        input: [7, 8, 9, 11, 12, 13],
        expected: [7, 7, 8, 8, 9, 9, 11, 12, 13],
      },
      {
        input: [0, -1, -2, 3, 4, 5],
        expected: [0, 0, -1, -1, -2, -2, 3, 3, 4, 4, 5, 5],
      },
      {
        input: [15, 25, 35, 45, 55],
        expected: [15, 25, 35, 45, 55],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1.01],
        expected: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, -1.01],
      },
    ];

    simpleTest(testCases, duplicateSingleDigitNumbers);
  });

  describe('3.7.7 Дана строка. Удалите из нее все гласные буквы.', () => {
    const testCases = [
      {
        input: 'Hello, World!',
        expected: 'Hll, Wrld!',
      },
      {
        input: 'Programming is fun!',
        expected: 'Prgrmmng s fn!',
      },
      {
        input: 'AEIOUaeiou',
        expected: '',
      },
      {
        input: 'xyz',
        expected: 'xyz',
      },
      {
        input: '12345',
        expected: '12345',
      },
      {
        input: 'аоуэыияеёюaeiou',
        expected: '',
      },
    ];

    simpleTest(testCases, removeVowels);
  });

  describe('3.7.8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.', () => {
    const testCases = [
      {
        input: 'hello world',
        expected: 'hellO worlD',
      },
      {
        input: 'goodbye moon',
        expected: 'goodbyE mooN',
      },
      {
        input: 'a b *%!@#c!@%^&*% !@#$(#@*&$@',
        expected: 'A B *%!@#C!@%^&*% !@#$(#@*&$@',
      },
      {
        input: '123 456 789',
        expected: '123 456 789',
      },
      {
        input: 'single',
        expected: 'singlE',
      },
      {
        input: '',
        expected: '',
      },
    ];

    simpleTest(testCases, capitalizeLastLetter);
  });

  describe('3.7.9 Дана следующая структура. Найдите сумму элементов этой структуры.', () => {
    const testCases = [
      {
        input: [
          {
            1: [1, 2, 3],
            2: [1, 2, 3],
            3: [1, 2, 3],
          },
          {
            1: [1, 2, 3],
            2: [1, 2, 3],
            3: [1, 2, 3],
          },
          {
            1: [1, 2, 3],
            2: [1, 2, 3],
            3: [1, 2, 3],
          },
        ],
        expected: (1 + 2 + 3) * 9,
      },
    ];

    simpleTest(testCases, sumOfObjectOrArray);
  });
});
