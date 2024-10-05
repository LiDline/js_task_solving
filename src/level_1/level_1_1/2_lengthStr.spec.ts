import { lengthStr } from '.';

describe('1.1.2 Дана строка. Выведите в консоль длину этой строки.', () => {
  const inputs = [
    { str: '-1', expected: 2 },
    { str: 'asfsdgsdgergf', expected: 13 },
    { str: 'Hello World!', expected: 12 },
    { str: 'ABC', expected: 3 },
  ];

  inputs.forEach((obj, id) => {
    test(`${id + 1} Верный возврат для числа ${obj.str}`, () => {
      const res = lengthStr(obj.str);

      expect(res).toBe(obj.expected);
    });
  });
});
