import simpleTest from '../additional/simpleTest';
import {
  convertDateToObject,
  getSumFromStr,
  getThirdZeroPosition,
  isFirstLastLetterMatch,
} from './level_2_3';

describe('Уровень 2.3', () => {
  describe('2.3.1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.', () => {
    const testCases = [
      { input: '[1]', secondInput: ']', expected: true },
      { input: 'cat', secondInput: 'tiger', expected: true },
      { input: 'mouse', secondInput: 'elephant', expected: true },
      { input: 'hello', secondInput: 'orange', expected: true },
      { input: 'bee', secondInput: 'elephant', expected: true },
      { input: 'a', secondInput: 'apple', expected: true },
      { input: 'fox', secondInput: 'x-ray', expected: true },
      { input: '', secondInput: '', expected: true },
    ];

    simpleTest(testCases, isFirstLastLetterMatch);
  });

  describe('2.3.2 Дана некоторая строка. Найдите позицию третьего нуля в строке.', () => {
    const testCases = [
      { input: '[1]s0s0s0', expected: 8 },
      { input: '[1]sdgfdgf', expected: null },
      { input: '000', expected: 2 },
      { input: '123456789', expected: null },
      { input: '0a0b0c', expected: 4 },
      { input: '0000', expected: 2 },
      { input: 'a0b0c0d0', expected: 5 },
    ];

    simpleTest(testCases, getThirdZeroPosition);
  });

  describe('2.3.3 Даны числа, разделенные запятыми. Найдите сумму этих чисел.', () => {
    const testCases = [
      { input: '12,34,56', expected: 102 },
      { input: '1,2,3', expected: 6 },
      { input: '100', expected: 100 },
      { input: '10,20,-30', expected: 0 },
      { input: '-10,-20,-30', expected: -60 },
      { input: '0,0,0', expected: 0 },
      { input: '999,1', expected: 1000 },
      { input: 'ывыфац,1', expected: 1 },
    ];

    simpleTest(testCases, getSumFromStr);
  });

  describe('2.3.4 Дана дата в следующем формате. Преобразуйте эту дату в следующий объект.', () => {
    const testCases = [
      {
        input: '2025-12-31',
        expected: {
          year: '2025',
          month: '12',
          day: '31',
        },
      },

      {
        input: '2111',
        expected: null,
      },
      {
        input: '1999-01-01',
        expected: {
          year: '1999',
          month: '01',
          day: '01',
        },
      },
    ];

    simpleTest(testCases, convertDateToObject);
  });
});
