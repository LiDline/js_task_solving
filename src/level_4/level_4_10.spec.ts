import { ok } from 'node:assert';
import simpleTest from '../additional/simpleTest';
import {
  checkAlphabet,
  getPrimeDivisors,
  groupWordsByFirstLetter,
  shuffleArray,
  splitIntoSyllables,
} from './level_4_10';

describe('Уровень 4.10', () => {
  describe('4.10.1. Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.', () => {
    const testCases = [
      {
        input: 'А',
        expected: 'Cyrillic', // Кириллическая буква
      },
      {
        input: 'а',
        expected: 'Cyrillic', // Кириллическая буква
      },
      {
        input: 'Z',
        expected: 'Latin', // Латинская буква
      },
      {
        input: 'z',
        expected: 'Latin', // Латинская буква
      },
      {
        input: 'Я',
        expected: 'Cyrillic', // Кириллическая буква
      },
      {
        input: 'я',
        expected: 'Cyrillic', // Кириллическая буква
      },
      {
        input: 'A',
        expected: 'Latin', // Латинская буква
      },
      {
        input: 'a',
        expected: 'Latin', // Латинская буква
      },
      {
        input: 'Ж',
        expected: 'Cyrillic', // Кириллическая буква
      },
      {
        input: 'ж',
        expected: 'Cyrillic', // Кириллическая буква
      },
      {
        input: '',
        expected: undefined,
      },
    ];

    simpleTest(testCases, checkAlphabet);
  });

  describe('4.10.2. Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.', () => {
    test(`0 Верный возврат для [1, 2, 3, 'a']`, () => {
      const input: (string | number)[] = [1, 2, 3, 'a'];

      const result = shuffleArray(input);

      ok(input.length === result.length);
    });
  });

  describe('4.10.3. Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.', () => {
    const testCases = [
      {
        input: 'Cyrillic',
        expected: { c: ['Cyrillic'] },
      },
      {
        input: 'Hello world       1234sdfds',
        expected: { h: ['Hello'], w: ['world'] },
      },
      {
        input: 'This is a test',
        expected: { t: ['This', 'test'], i: ['is'], a: ['a'] },
      },
      {
        input: '  Multiple   spaces   between  words  ',
        expected: { m: ['Multiple'], s: ['spaces'], b: ['between'], w: ['words'] },
      },
      {
        input: 'Case Insensitive',
        expected: { c: ['Case'], i: ['Insensitive'] },
      },
      {
        input: '',
        expected: {},
      },
      {
        input: 'Single',
        expected: { s: ['Single'] },
      },
    ];

    simpleTest(testCases, groupWordsByFirstLetter);
  });

  describe('4.10.4. Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.', () => {
    const testCases = [
      {
        input: 1,
        expected: [],
      },
      {
        input: 2,
        expected: [2],
      },
      {
        input: 10,
        expected: [2, 5],
      },
      {
        input: 17,
        expected: [17],
      },
      {
        input: 30,
        expected: [2, 3, 5],
      },
      {
        input: 8,
        expected: [2],
      },
      {
        input: 100,
        expected: [2, 5],
      },
      {
        input: 101,
        expected: [101],
      },
    ];

    simpleTest(testCases, getPrimeDivisors);
  });

  describe('4.10.5. Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.', () => {
    const testCases = [
      {
        input: 'asfgsdg',
        expected: [],
      },
      {
        input: 'пример',
        expected: ['при', 'мер'],
      },
      // {
      //   input: 'мама',
      //   expected: ['ма', 'ма'],
      // },
      // {
      //     input: 'корова',
      //     expected: ['ко', 'ро', 'ва'],
      // },
      // {
      //     input: 'привет',
      //     expected: ['при', 'вет'],
      // },
      // {
      //     input: 'собака',
      //     expected: ['со', 'ба', 'ка'],
      // },
      // {
      //     input: 'интересный',
      //     expected: ['ин', 'те', 'рес', 'ный'],
      // },
      // {
      //     input: 'компьютер',
      //     expected: ['ком', 'пью', 'тер'],
      // },
      // {
      //     input: 'апельсин',
      //     expected: ['а', 'пель', 'син'],
      // },
    ];

    simpleTest(testCases, splitIntoSyllables);
  });
});
