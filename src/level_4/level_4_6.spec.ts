import simpleTest from '../additional/simpleTest';
import { convertSeconds, getInitials, isValidDate, replaceWithDivisors } from './level_4_6';

describe('Уровень 4.6', () => {
  describe('4.6.1. Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.', () => {
    const testCases = [
      {
        input: '2023-10-15',
        expected: true, // Корректная дата
      },
      {
        input: '2023-10-32',
        expected: false,
      },
      {
        input: '2023-10-00',
        expected: false, // Некорректный день
      },
      {
        input: 'abcd-10-15',
        expected: false, // Некорректный формат года
      },
      {
        input: '2023-10',
        expected: false, // Неполный формат даты
      },
    ];

    simpleTest(testCases, isValidDate);
  });

  describe('4.6.3. Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.', () => {
    const testCases = [
      {
        input: 'hello world',
        expected: 'HW', // Первые буквы слов "hello" и "world"
      },
      {
        input: 'JavaScript is fun',
        expected: 'JIF', // Первые буквы слов "JavaScript", "is", "fun"
      },
      {
        input: 'TypeScript',
        expected: 'T', // Первая буква слова "TypeScript"
      },
      {
        input: 'one   two @#$#@%@#2345three',
        expected: 'OTT', // Первые буквы слов "one" и "two", игнорируются лишние пробелы
      },
      {
        input: '',
        expected: '', // Пустая строка, нет слов
      },
      {
        input: 'a b c',
        expected: 'ABC', // Первые буквы слов "a", "b", "c"
      },
    ];

    simpleTest(testCases, getInitials);
  });

  describe('4.6.4. Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.', () => {
    const testCases = [
      {
        input: [6, 4, 7],
        expected: [
          [1, 2, 3, 6],
          [1, 2, 4],
          [1, 7],
        ], // Делители: 6 -> [1, 2, 3, 6], 4 -> [1, 2, 4], 7 -> [1, 7]
      },
      {
        input: [12, 15, 18],
        expected: [
          [1, 2, 3, 4, 6, 12],
          [1, 3, 5, 15],
          [1, 2, 3, 6, 9, 18],
        ], // Делители: 12 -> [1, 2, 3, 4, 6, 12], 15 -> [1, 3, 5, 15], 18 -> [1, 2, 3, 6, 9, 18]
      },
      {
        input: [1, 2, 3],
        expected: [[1], [1, 2], [1, 3]], // Делители: 1 -> [1], 2 -> [1, 2], 3 -> [1, 3]
      },
      {
        input: [25, 30],
        expected: [
          [1, 5, 25],
          [1, 2, 3, 5, 6, 10, 15, 30],
        ], // Делители: 25 -> [1, 5, 25], 30 -> [1, 2, 3, 5, 6, 10, 15, 30]
      },
      {
        input: [],
        expected: [], // Пустой массив, нет чисел для замены
      },
    ];

    simpleTest(testCases, replaceWithDivisors);
  });

  describe('4.6.5. Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта', () => {
    const testCases = [
      {
        input: 86400, // 1 день
        expected: { d: 1, h: 0, m: 0, s: 0 },
      },
      {
          input: 90061, // 1 день, 1 час, 1 минута, 1 секунда
          expected: { d: 1, h: 1, m: 1, s: 1 },
      },
      {
          input: 3661, // 1 час, 1 минута, 1 секунда
          expected: { d: 0, h: 1, m: 1, s: 1 },
      },
      {
          input: 86461, // 1 день, 0 часов, 1 минута, 1 секунда
          expected: { d: 1, h: 0, m: 1, s: 1 },
      },
      {
          input: 0, // 0 секунд
          expected: { d: 0, h: 0, m: 0, s: 0 },
      },
      {
          input: 172800, // 2 дня
          expected: { d: 2, h: 0, m: 0, s: 0 },
      },
    ];

    simpleTest(testCases, convertSeconds);
  });
});
