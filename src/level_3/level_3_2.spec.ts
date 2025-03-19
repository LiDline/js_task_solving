import simpleTest from '../additional/simpleTest';
import {
  createZeroString,
  numbersWithEvenPenultimateDigit,
  removeEveryFifthElement,
  removeEverySecondWord,
  sumOfElements,
} from './level_3_2';

describe('Уровень 3.2', () => {
  describe('3.2.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.', () => {
    const number = Array.from({ length: 991 }, (_, i) => {
      const element = i + 10;
      const penultimateDigit = Math.floor((element % 100) / 10);

      // Возвращаем элемент, если предпоследняя цифра четная, иначе undefined
      return penultimateDigit % 2 === 0 ? element : undefined;
    }).filter((element) => element !== undefined);

    const testCases = [
      {
        input: undefined,
        expected: number,
      },
    ];

    simpleTest(testCases, numbersWithEvenPenultimateDigit);
  });

  describe('3.2.2 Дан массив. Удалите из него каждый пятый элемент.', () => {
    const testCases = [
      {
        input: [1, 2, 3, 4, 5, 6, 7],
        expected: [1, 2, 3, 4, 6, 7],
      },
      {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: [1, 2, 3, 4, 6, 7, 8, 9],
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4],
      },
      {
        input: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        expected: [10, 20, 30, 40, 60, 70, 80, 90, 110],
      },
      {
        input: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        expected: [5, 10, 15, 20, 30, 35, 40, 45],
      },
      {
        input: [1, 2, 3, 4],
        expected: [1, 2, 3, 4],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [1],
        expected: [1],
      },
    ];

    simpleTest(testCases, removeEveryFifthElement);
  });

  describe('3.2.3 Дана некоторая переменная с числом. Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка.', () => {
    const testCases = [
      {
        input: 3,
        expected: '000',
      },
      {
        input: 0,
        expected: '',
      },
    ];

    simpleTest(testCases, createZeroString);
  });

  describe('3.2.4 Дана некоторая строка со словами. Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее.', () => {
    const testCases = [
      {
        input: 'aaa bbb ccc eee fff',
        expected: 'aaa ccc fff',
      },
      {
        input: 'one two three four five six',
        expected: 'one three five',
      },
      {
        input: 'apple orange banana grape melon',
        expected: 'apple banana melon',
      },
      {
        input: 'a b c d e f g',
        expected: 'a c e g',
      },
      {
        input: 'hello world',
        expected: 'hello',
      },
      {
        input: 'single',
        expected: 'single',
      },
      {
        input: '',
        expected: '',
      },
    ];

    simpleTest(testCases, removeEverySecondWord);
  });

  describe('3.2.5 Дан массив. Найдите сумму элементов этого массива.', () => {
    const testCases = [
      {
        input: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        expected: 45,
      },
      {
        input: [
          [10, 20, 30],
          [40, 50, 60],
        ],
        expected: 210,
      },
      {
        input: [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        expected: 9,
      },
      {
        input: [
          [0, 0, 0],
          [0, 0, 0],
        ],
        expected: 0,
      },
      {
        input: [
          [2, 4, 6],
          [8, 10, 12],
          [14, 16, 18],
        ],
        expected: 90,
      },
      {
        input: [[5], [10], [15]],
        expected: 30,
      },
      {
        input: [],
        expected: 0,
      },
    ];

    simpleTest(testCases, sumOfElements);
  });
});
