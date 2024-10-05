import { isEvenNumber } from ".";


describe('1.1.4 Дано число. Проверьте, четное оно или нет.', () => {
  const inputs = [
    { number: -1, expected: false },
    { number: 0, expected: true },
    { number: -5, expected: false },
    { number: 8, expected: true },
    { number: 1243451234, expected: true },
  ];

  inputs.forEach((obj, id) => {
    test(`${id + 1} Верный возврат для числа ${obj.number}`, () => {
      const res = isEvenNumber(obj.number);

      expect(res).toBe(obj.expected);
    });
  });
});
