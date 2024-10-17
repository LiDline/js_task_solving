import simpleTest from '../additional/simpleTest';
import { getIntegersFrom1To10, getRoundedToOneDecimal } from './level_1_8';

describe('Уровень 1.8', () => {
  test('1.8.1 Заполните массив целыми числами от 1 до 10.', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const res = getIntegersFrom1To10();

    expect(res).toEqual(expected);
  });

  describe('1.8.3 Дан массив с дробями. Округлите эти дроби до одного знака в дробной части.', () => {
    const testCases = [
      { input: [-1], expected: [-1.0] },
      { input: [1.234], expected: [1.2] },
      { input: [3.456, 7.891, 2.123], expected: [3.5, 7.9, 2.1] },
      { input: [0.5555, -2.999, 8.1234], expected: [0.6, -3.0, 8.1] },
      { input: [5.5, -0.44, 12.9999], expected: [5.5, -0.4, 13.0] },
    ];

    simpleTest(testCases, getRoundedToOneDecimal);
  });
});
