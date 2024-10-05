import { isNegative } from './isNegative';

describe('1.1 Проверяет отрицательное ли число', () => {
  const inputs = [
    { number: -1, expected: true },
    { number: 0, expected: false },
    { number: -5, expected: true },
    { number: 8, expected: false },
    { number: 1243451234, expected: false },
  ];

  inputs.forEach((obj, id) => {
    test(`${id + 1} Верный возврат для числа ${obj.number}`, () => {
      const res = isNegative(obj.number);

      expect(res).toBe(obj.expected);
    });
  });
});
