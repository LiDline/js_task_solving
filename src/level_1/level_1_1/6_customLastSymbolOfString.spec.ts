import { customLastSymbolOfString } from '.';

describe('1.1.6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.', () => {
  const testCases = [
    { str: 'привет', expected: 'т' },
    { str: 'мама', expected: 'а' },
    { str: 'любовЬ', expected: 'в' },
    { str: 'мышь', expected: 'ш' },
    { str: 'книга', expected: 'а' },
    { str: 'окно', expected: 'о' },
    { str: 'стол', expected: 'л' },
    { str: 'край', expected: 'й' },
    { str: 'путь', expected: 'т' },
    { str: 'солнце', expected: 'е' },
    { str: '', expected: '' },
    { str: 'ь', expected: '' },

  ];

  testCases.forEach((obj, id) => {
    test(`${id + 1} Верный возврат для ${obj.str}`, () => {
      const res = customLastSymbolOfString(obj.str);

      expect(res).toBe(obj.expected);
    });
  });
});
