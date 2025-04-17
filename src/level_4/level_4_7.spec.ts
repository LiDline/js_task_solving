import simpleTest from '../additional/simpleTest';
import { findCommonElements, getNextElement } from './level_4_7';

describe('Уровень 4.7', () => {
  describe('4.7.2. Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.', () => {
    const testCases = [
      {
        input: { array1: [1, 2, 3, 4], array2: [3, 4, 5, 6] },
        expected: [3, 4], // Общие элементы: 3 и 4
      },
      {
        input: { array1: [7, 8, 9], array2: [10, 11, 12] },
        expected: [], // Нет общих элементов
      },
      {
        input: { array1: [1, 2, 2, 3], array2: [2, 2, 4] },
        expected: [2], // Общий элемент: 2 (уникальные значения)
      },
      {
        input: { array1: ['a', 'b', 'c'], array2: ['b', 'c', 'd'] },
        expected: ['b', 'c'], // Общие элементы: "b" и "c"
      },
      {
        input: { array1: [], array2: [1, 2, 3] },
        expected: [], // Первый массив пустой, нет общих элементов
      },
      {
        input: { array1: [1, 2, 3], array2: [] },
        expected: [], // Второй массив пустой, нет общих элементов
      },
    ];

    simpleTest(testCases, findCommonElements);
  });

  describe('4.7.4. Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент', () => {
    const testCases = [
      {
        input: { arr: [1, 2, 3, 4, 5], element: 1 },
        expected: 2, // Следующий элемент после 1 — это 2
      },
      {
        input: { arr: [1, 2, 3, 4, 5], element: 4 },
        expected: 5, // Следующий элемент после 4 — это 5
      },
      {
        input: { arr: [1, 2, 3, 4, 5], element: 5 },
        expected: 1, // Следующий элемент после 5 — это 1 (циклично)
      },
      {
        input: { arr: ['a', 'b', 'c'], element: 'b' },
        expected: 'c', // Следующий элемент после "b" — это "c"
      },
      {
        input: { arr: ['a', 'b', 'c'], element: 'c' },
        expected: 'a', // Следующий элемент после "c" — это "a" (циклично)
      },
      {
        input: { arr: [7, 8, 9], element: 8 },
        expected: 9, // Следующий элемент после 8 — это 9
      },
      {
        input: { arr: [7, 8, 9], element: 9 },
        expected: 7, // Следующий элемент после 9 — это 7 (циклично)
      },
    ];

    simpleTest(testCases, getNextElement);
  });
});
