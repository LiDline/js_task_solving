import simpleTest from '../additional/simpleTest';
import {
  customLastSymbolOfString,
  isEvenNumber,
  isFirstLetterMatch,
  isNegative,
  lastSymbolOfString,
  lengthStr,
} from './level_1_1';

describe('Уровень 1.1', () => {
  describe('1.1.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.', () => {
    const testCases = [
      { input: -1, expected: true },
      { input: 0, expected: false },
      { input: -5, expected: true },
      { input: 8, expected: false },
      { input: 1243451234, expected: false },
    ];

    simpleTest(testCases, isNegative);
  });

  describe('1.1.2 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.', () => {
    const testCases = [
      { input: '-1', expected: 2 },
      { input: 'asfsdgsdgergf', expected: 13 },
      { input: 'Hello World!', expected: 12 },
      { input: 'ABC', expected: 3 },
    ];

    simpleTest(testCases, lengthStr);
  });

  describe('1.1.3 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.', () => {
    const testCases = [
      { input: '', expected: '' },
      { input: 'asfsdgsdgergf', expected: 'f' },
      { input: 'Hello World!', expected: '!' },
      { input: 'ABC', expected: 'C' },
    ];

    simpleTest(testCases, lastSymbolOfString);
  });

  describe('1.1.4 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.', () => {
    const testCases = [
      { input: -1, expected: false },
      { input: 0, expected: true },
      { input: -5, expected: false },
      { input: 8, expected: true },
      { input: 1243451234, expected: true },
    ];

    simpleTest(testCases, isEvenNumber);
  });

  describe('1.1.5 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.', () => {
    const testCases = [
      { input: 'AVB', secondInput: 'afdgef', expected: true },
      { input: 'hello', secondInput: 'world', expected: false },
      { input: 'Test', secondInput: 'task', expected: true },
      { input: 'JavaScript', secondInput: 'Java', expected: true },
      { input: 'Python', secondInput: 'PHP', expected: true },
      { input: 'apple', secondInput: 'Apology', expected: true },
      { input: 'banana', secondInput: 'berry', expected: true },
      { input: 'code', secondInput: 'compile', expected: true },
      { input: 'Developer', secondInput: 'Design', expected: true },
      { input: 'Function', secondInput: 'form', expected: true },
      { input: '', secondInput: 'form', expected: false },
    ];

    simpleTest(testCases, isFirstLetterMatch);
  });

  describe('1.1.6 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.', () => {
    const testCases = [
      { input: 'привет', expected: 'т' },
      { input: 'мама', expected: 'а' },
      { input: 'любовЬ', expected: 'в' },
      { input: 'мышь', expected: 'ш' },
      { input: 'книга', expected: 'а' },
      { input: 'окно', expected: 'о' },
      { input: 'стол', expected: 'л' },
      { input: 'край', expected: 'й' },
      { input: 'путь', expected: 'т' },
      { input: 'солнце', expected: 'е' },
      { input: '', expected: '' },
      { input: 'ь', expected: '' },
    ];

    simpleTest(testCases, customLastSymbolOfString);
  });
});
