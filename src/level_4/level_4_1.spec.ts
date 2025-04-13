import simpleTest from '../additional/simpleTest';
import {
  getDayOfWeek,
  getZodiacSign,
  secondsToDays,
  sumOfDivisors,
  truncateString,
} from './level_4_1';

describe('Уровень 4.1', () => {
  describe('4.1.1, 4.1.2 Сделайте функцию, которая вернет день недели словом.', () => {
    const testCases = [
      {
        input: new Date('2025-04-12'),
        expected: 'Sat',
      },
      {
        input: new Date('2025-04-13'),
        expected: 'Sun',
      },
      {
        input: new Date('2025-04-14'),
        expected: 'Mon',
      },
      {
        input: new Date('2025-04-15'),
        expected: 'Tue',
      },
      {
        input: new Date('2025-04-16'),
        expected: 'Wed',
      },
      {
        input: new Date('2025-04-17'),
        expected: 'Thu',
      },
      {
        input: new Date('2025-04-18'),
        expected: 'Fri',
      },
    ];

    simpleTest(testCases, getDayOfWeek);
  });

  describe('4.1.3 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.', () => {
    const testCases = [
      {
        input: 86400, // Количество секунд в одном дне
        expected: 1,
      },
      {
        input: 172800, // Количество секунд в двух днях
        expected: 2,
      },
      {
        input: 604800, // Количество секунд в одной неделе
        expected: 7,
      },
      {
        input: 43200, // Половина дня
        expected: 0.5,
      },
      {
        input: 0, // Ноль секунд
        expected: 0,
      },
      {
        input: 90000, // Чуть больше одного дня
        expected: 1,
      },
    ];

    simpleTest(testCases, secondsToDays);
  });

  describe('4.1.4 Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.', () => {
    const testCases = [
      {
        input: 5,
        secondInput: 'Hello, world!',
        expected: 'Hello',
      },
      {
        input: 10,
        secondInput: 'TypeScript is great!',
        expected: 'TypeScript',
      },
      {
        input: 3,
        secondInput: 'abcdef',
        expected: 'abc',
      },
      {
        input: 0,
        secondInput: 'Test string',
        expected: '',
      },
      {
        input: 7,
        secondInput: '1234567890',
        expected: '1234567',
      },
      {
        input: 10,
        secondInput: 'Short',
        expected: 'Short',
      },
    ];

    simpleTest(testCases, truncateString);
  });

  describe('4.1.5 Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.', () => {
    const testCases = [
      {
        input: new Date('2023-03-21'), // Весеннее равноденствие, начало Овна
        expected: 'Овен',
      },
      {
        input: new Date('2023-04-20'), // Конец Овна, начало Тельца
        expected: 'Телец',
      },
      {
        input: new Date('2023-05-21'), // Конец Тельца, начало Близнецов
        expected: 'Близнецы',
      },
      {
        input: new Date('2023-06-21'), // Летнее солнцестояние, начало Рака
        expected: 'Рак',
      },
      {
        input: new Date('2023-07-23'), // Конец Рака, начало Льва
        expected: 'Лев',
      },
      {
        input: new Date('2023-08-23'), // Конец Льва, начало Девы
        expected: 'Дева',
      },
      {
        input: new Date('2023-09-23'), // Осенье равноденствие, начало Весов
        expected: 'Весы',
      },
      {
        input: new Date('2023-10-23'), // Конец Весов, начало Скорпиона
        expected: 'Скорпион',
      },
      {
        input: new Date('2023-11-22'), // Конец Скорпиона, начало Стрельца
        expected: 'Стрелец',
      },
      {
        input: new Date('2023-12-22'), // Зимнее солнцестояние, начало Козерога
        expected: 'Козерог',
      },
      {
        input: new Date('2024-01-20'), // Конец Козерога, начало Водолея
        expected: 'Водолей',
      },
      {
        input: new Date('2024-02-19'), // Конец Водолея, начало Рыб
        expected: 'Рыбы',
      },
      {
        input: new Date('2024-01-18'), 
        expected: 'Козерог',
      },
      {
        input: new Date('2024-08-15'), 
        expected: 'Лев',
      },
    ];

    simpleTest(testCases, getZodiacSign);
  });

  describe('4.1.6 Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.', () => {
    const testCases = [
      {
        input: 6,
        expected: 1 + 2 + 3 + 6, // 12
      },
      {
        input: 28,
        expected: 1 + 2 + 4 + 7 + 14 + 28, // 56
      },
      {
        input: 12,
        expected: 1 + 2 + 3 + 4 + 6 + 12, // 28
      },
      {
        input: 1,
        expected: 1, // Только 1 делится на 1
      },
      {
        input: 0,
        expected: 0, // По определению, 0 не имеет делителей
      },
      {
        input: 17,
        expected: 1 + 17, // 18, так как 17 — простое число
      },
    ];

    simpleTest(testCases, sumOfDivisors);
  });
});
