import { lastSymbolOfString } from '.';

describe('1.1.3 Дана строка. Выведите в консоль последний символ строки.', () => {
  const inputs = [
    { str: '', expected: '' },
    { str: 'asfsdgsdgergf', expected: 'f' },
    { str: 'Hello World!', expected: '!' },
    { str: 'ABC', expected: 'C' },
  ];

  inputs.forEach((obj, id) => {
    test(`${id + 1} Верный возврат для числа ${obj.str}`, () => {
      const res = lastSymbolOfString(obj.str);

      expect(res).toBe(obj.expected);
    });
  });
});
