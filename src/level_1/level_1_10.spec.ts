import simpleTest from '../additional/simpleTest';
import { getRandomNumbersArray, mergeArrays, toMatrix2xN } from './level_1_10';

describe('Уровень 1.10', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('1.10.1 Заполните массив случайными числами из промежутка от 1 до 100.', () => {
    const expected = Array.from({ length: 100 }, (_, _n) => 12);

    const res = getRandomNumbersArray();

    expect(res).toEqual(expected);
  });

  describe('1.10.3 Дан некоторый массив. По очереди выведите в консоль подмассивы из двух элементов нашего массива/', () => {
    const testCases = [
      { input: [1, 2], expected: [[1, 2]] },
      {
        input: [1, 2, 3],
        expected: [
          [1, 2],
          [3, 0],
        ],
      },
      {
        input: [4, 5, 6, 7],
        expected: [
          [4, 5],
          [6, 7],
        ],
      },
      {
        input: [8],
        expected: [
          [8, 0], // Дополнение нулём
        ],
      },
      {
        input: [9, 10, 11, 12, 13],
        expected: [
          [9, 10],
          [11, 12],
          [13, 0], // Последняя строка с дополнением нуля
        ],
      },
      {
        input: [],
        expected: [], // Пустой массив
      },
    ];

    simpleTest(testCases, toMatrix2xN);
  });

  describe('1.10.4 Даны массивы. Слейте эти массивы в новый массив.', () => {
    const testCases = [
      { input: [[1], [2]], expected: [1, 2] },
      {
        input: [
          [1, 2],
          [3, 4],
        ],
        expected: [1, 2, 3, 4],
      },
      { input: [[], [5, 6]], expected: [5, 6] },
      { input: [[7, 8], [], [9]], expected: [7, 8, 9] },
      { input: [[1, 2, 3], [4, 5], [6]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[], [], []], expected: [] },
      { input: [[-1, 0], [1, 2], [3]], expected: [-1, 0, 1, 2, 3] },
    ];

    simpleTest(testCases, mergeArrays);
  });
});
