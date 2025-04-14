import simpleTest from '../additional/simpleTest';
import { findMinMax, removeAdjacentDuplicates, removeDuplicates, removeExcessDuplicates } from './level_4_3';

describe('Уровень 4.3', () => {
  describe('4.3.1. Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.', () => {
    const testCases = [
      {
        input: [1, 2, 2, 3, 4, 4, 5],
        expected: [1, 2, 3, 4, 5],
      },
      {
        input: ['apple', 'banana', 'apple', 'orange', 'banana'],
        expected: ['apple', 'banana', 'orange'],
      },
      {
        input: [7, 8, 9, 8, 7, 10],
        expected: [7, 8, 9, 10],
      },
      {
        input: [true, false, true, false, true],
        expected: [true, false],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [1, 1, 1, 1],
        expected: [1],
      },
    ];

    simpleTest(testCases, removeDuplicates);
  });

  describe('4.3.2. Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.', () => {
    const testCases = [
      {
        input: [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5, 1],
        expected: [1, 2, 2, 3, 4, 4, 4, 1],
      },
      {
        input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'apple'],
        expected: ['banana', 'orange', 'banana'],
      },
      {
        input: [7, 8, 9, 8, 7, 10, 8, 8, 8],
        expected: [7, 9, 7, 10],
      },
      {
        input: [true, false, true, false, true, true, true, true],
        expected: [false, false],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [1, 1, 1, 1, 2, 2, 2, 3],
        expected: [2, 2, 2, 3],
      },
    ];

    simpleTest(testCases, removeExcessDuplicates);
  });

  describe('4.3.3. Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.', () => {
    const testCases = [
      {
        input: [1, 2, 2, 3, 4, 4, 5],
        expected: [1, 3, 5],
      },
      {
        input: ['apple', 'banana', 'banana', 'orange', 'apple', 'apple'],
        expected: ['apple', 'orange'],
      },
      {
        input: [7, 7, 8, 9, 8, 8, 10],
        expected: [8, 9, 10],
      },
      {
        input: [true, true, false, true, true],
        expected: [false],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [1, 1, 1, 2, 2, 3, 3, 3],
        expected: [],
      },
    ];

    simpleTest(testCases, removeAdjacentDuplicates);
  });

  describe('4.3.4. Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение.', () => {
    const testCases = [
      {
        input: [3, 5, 1, 8, 2, 9, 4],
        expected: { max: 9, min: 1 },
      },
      {
        input: [10, -2, 5, 7, -5, 0],
        expected: { max: 10, min: -5 },
      },
      {
        input: [7, 7, 7, 7, 7],
        expected: { max: 7, min: 7 },
      },
      {
        input: [-1, -2, -3, -4, -5],
        expected: { max: -1, min: -5 },
      },
      {
        input: [42],
        expected: { max: 42, min: 42 },
      },
      {
        input: [],
        expected: { max: undefined, min: undefined }, // Обработка пустого массива
      },
    ];

    simpleTest(testCases, findMinMax);
  });
});
