import { isFirstLetterMatch } from '.';

describe('1.1.5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.', () => {
  const testCases = [
    { str1: 'AVB', str2: 'afdgef', expected: true },
    { str1: 'hello', str2: 'world', expected: false },
    { str1: 'Test', str2: 'task', expected: true },
    { str1: 'JavaScript', str2: 'Java', expected: true },
    { str1: 'Python', str2: 'PHP', expected: true },
    { str1: 'apple', str2: 'Apology', expected: true },
    { str1: 'banana', str2: 'berry', expected: true },
    { str1: 'code', str2: 'compile', expected: true },
    { str1: 'Developer', str2: 'Design', expected: true },
    { str1: 'Function', str2: 'form', expected: true },
    { str1: '', str2: 'form', expected: false },
  ];

  testCases.forEach((obj, id) => {
    test(`${id + 1} Верный возврат для ${obj.str1} и ${obj.str2}`, () => {
      const res = isFirstLetterMatch(obj.str1, obj.str2);

      expect(res).toBe(obj.expected);
    });
  });
});
