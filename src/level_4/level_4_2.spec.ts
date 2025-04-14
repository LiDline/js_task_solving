import simpleTest from '../additional/simpleTest';
import {
  daysUntilEndOfMonth,
  daysUntilOrSince,
  getLeapYears,
  getWeekdayNames,
  isLeapYear,
  removeZeros,
  sumOfDigits,
} from './level_4_2';

describe('Уровень 4.2', () => {
  describe('4.2.1. Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.', () => {
    const testCases = [
      {
        input: 123,
        expected: 1 + 2 + 3, // 6
      },
      {
        input: 4567,
        expected: 4 + 5 + 6 + 7, // 22
      },
      {
        input: 0,
        expected: 0, // Сумма цифр 0 равна 0
      },
      {
        input: 987654321,
        expected: 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1, // 45
      },
      {
        input: 101,
        expected: 1 + 0 + 1, // 2
      },
      {
        input: -567.1,
        expected: 5 + 6 + 7 + 1, // 18, игнорируем знак
      },
    ];

    simpleTest(testCases, sumOfDigits);
  });

  describe('4.2.2. Сделайте функцию, которая параметром будет принимать число и удалять из него нули.', () => {
    const testCases = [
      {
        input: 10203,
        expected: 123,
      },
      {
        input: 4005060,
        expected: 456,
      },
      {
        input: 100000,
        expected: 1,
      },
      {
        input: 987654321,
        expected: 987654321, // Нет нулей для удаления
      },
      {
        input: 0,
        expected: 0, // Один ноль остается
      },
      {
        input: 101010,
        expected: 111,
      },
      {
        input: -506070,
        expected: -567, // Знак остается
      },
    ];

    simpleTest(testCases, removeZeros);
  });

  describe('4.2.3. Сделайте функцию, которая параметром будет принимать число и удалять из него нули.', () => {
    const testCases = [
      {
        input: new Date('2023-12-25'), // Рождество
        secondInput: new Date('2023-10-13'), // Текущая дата
        expected: 73, // Дней до Рождества
      },
      {
        input: new Date('2023-01-01'), // Новый год
        secondInput: new Date('2023-10-13'), // Текущая дата
        expected: 285, // Дней с Нового года
      },
      {
        input: new Date('2023-10-13'), // Сегодня
        secondInput: new Date('2023-10-13'), // Текущая дата
        expected: 0, // Ни прошло, ни осталось
      },
      {
        input: new Date('2023-03-08'), // Международный женский день
        secondInput: new Date('2023-10-13'), // Текущая дата
        expected: 219, // Дней с 8 марта
      },
      {
        input: new Date('2023-12-31'), // Последний день года
        secondInput: new Date('2023-10-13'), // Текущая дата
        expected: 79, // Дней до конца года
      },
    ];

    simpleTest(testCases, daysUntilOrSince);
  });

  describe('4.2.4. Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.', () => {
    const testCases = [
      {
        input: 2020,
        expected: true, // 2020 — високосный год
      },
      {
        input: 2021,
        expected: false, // 2021 — не високосный год
      },
      {
        input: 2000,
        expected: true, // 2000 — високосный год, делится на 400
      },
      {
        input: 1900,
        expected: false, // 1900 — не високосный год, не делится на 400
      },
      {
        input: 2024,
        expected: true, // 2024 — високосный год
      },
      {
        input: 2100,
        expected: false, // 2100 — не високосный год, не делится на 400
      },
    ];

    simpleTest(testCases, isLeapYear);
  });

  describe('4.2.5. Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.', () => {
    const testCases = [
      {
        input: 2023, // Текущий год
        expected: [
          2020, 2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988, 1984, 1980, 1976, 1972, 1968, 1964,
          1960, 1956, 1952, 1948, 1944, 1940, 1936, 1932, 1928, 1924,
        ],
      },
      {
        input: 2101, // Год в будущем
        expected: [
          2096, 2092, 2088, 2084, 2080, 2076, 2072, 2068, 2064, 2060, 2056, 2052, 2048, 2044, 2040,
          2036, 2032, 2028, 2024, 2020, 2016, 2012, 2008, 2004,
        ],
      },
    ];

    simpleTest(testCases, getLeapYears);
  });

  describe('4.2.6. Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.', () => {
    const testCases = [
      {
        input: new Date('2023-10-14'), // Текущая дата
        expected: 17, // Дней осталось до конца октября
      },
      {
        input: new Date('2023-02-20'), // Текущая дата
        expected: 8, // Дней осталось до конца февраля (2023 не високосный)
      },
      {
        input: new Date('2023-01-31'), // Текущая дата
        expected: 0, // Последний день января
      },
      {
        input: new Date('2023-12-01'), // Текущая дата
        expected: 30, // Дней осталось до конца декабря
      },
      {
        input: new Date('2024-02-15'), // Текущая дата в високосном году
        expected: 14, // Дней осталось до конца февраля (2024 високосный)
      },
    ];

    simpleTest(testCases, daysUntilEndOfMonth);
  });

  describe('4.2.7. Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта.', () => {
    const testCases = [
      {
        input: new Date('2023-10-14'), // Текущая дата
        expected: {
          next: 'Вс',
          curr: 'Сб',
          prev: 'Пт',
        },
      },
      {
        input: new Date('2023-10-16'), // Понедельник
        expected: {
          next: 'Вт',
          curr: 'Пн',
          prev: 'Вс',
        },
      },
      {
        input: new Date('2023-10-17'), // Вторник
        expected: {
          next: 'Ср',
          curr: 'Вт',
          prev: 'Пн',
        },
      },
      {
        input: new Date('2023-10-21'), // Суббота
        expected: {
          next: 'Вс',
          curr: 'Сб',
          prev: 'Пт',
        },
      },
    ];

    simpleTest(testCases, getWeekdayNames);
  });
});
