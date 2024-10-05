import { isNegative } from ".";


describe('1.1.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.', () => {
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
