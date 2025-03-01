import simpleTest from '../additional/simpleTest';
import { hasAtMostTwoUppercase, customMergeArrays, removeLongSubstrings } from './level_2_8';

describe('Уровень 2.8', () => {
  describe('2.8.1 Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.', () => {
    const testCases = [
      {
        input: 'a Bc def ghij',
        expected: true,
      },
      {
        input: 'BBB',
        expected: false,
      },
      {
        input: 'asdDrTddTTFBcvbv',
        expected: false,
      },
    ];

    simpleTest(testCases, hasAtMostTwoUppercase);
  });

  describe('2.8.2 Дана некоторая строка. Удалите из этой строки все подстроки, в которых количество символов больше трех.', () => {
    const testCases = [
      {
        input: '1 22 333 4444 22 5555 1',
        expected: '1 22 333 22 1',
      },
      {
        input: 'a bb ccc dddd eeeee',
        expected: 'a bb ccc',
      },
      {
        input: 'hello world this is a test',
        expected: 'is a',
      },
      {
        input: '123 456 789 101112',
        expected: '123 456 789',
      },
      {
        input: 'abc def ghij klmno',
        expected: 'abc def',
      },
      {
        input: 'short longstring another',
        expected: '',
      },
      {
        input: '',
        expected: '',
      },
      {
        input: '12345 678 90',
        expected: '678 90',
      },
    ];

    simpleTest(testCases, removeLongSubstrings);
  });

  describe('2.8.3 Даны два массива. Слейте эти массивы в новый массив особым образом.', () => {
    const testCases = [
      { input: [1, 2, 3], secondInput: ['a', 'b', 'c'], expected: [1, 2, 'a', 'b', 'c', 3] },
      {
        input: [4, 5, 6, 7],
        secondInput: ['d', 'e'],
        expected: [4, 5, 'd', 'e', 6, 7],
      },
      {
        input: ['x', 'y', 'z'],
        secondInput: [10, 20, 30, 40],
        expected: ['x', 'y', 10, 20, 30, 40, 'z'],
      },
      {
        input: [1],
        secondInput: ['a', 'b'],
        expected: [1, 'a', 'b'],
      },
      {
        input: [],
        secondInput: ['a', 'b', 'c'],
        expected: ['a', 'b', 'c'],
      },
      {
        input: [1, 2, 3, 4],
        secondInput: [],
        expected: [1, 2, 3, 4],
      },
      {
        input: [1, 2],
        secondInput: [],
        expected: [1, 2],
      },
    ];

    simpleTest(testCases, customMergeArrays);
  });
});
