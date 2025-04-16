import { randomInt } from 'node:crypto';
import { findMinMax } from './level_4_3';
import { getSumFromArray } from '../additional/utils';

/**
 * 4.5.1 Проверяет, что строка является числом
 * @param str string
 * @return boolean
 */
export function isNumericString(str: string) {
  return !!str.length && !isNaN(+str);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.5.2 Проверяет, что строка представляет собой дробь
 * @param str string
 * @return boolean
 */
export function isFractionString(str: string) {
  return isNumericString(str) && /[.]{1}/g.test(str);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.5.3 Возвращает второе по величине число
 * @param array number[]
 * @return number
 */
export function findSecondLargest(array: number[]) {
  const { max } = findMinMax(array);

  if (!max) return;

  const indexMax = array.indexOf(max);
  const filteredArray = array.filter((_, i) => i != indexMax);

  const { max: predMax } = findMinMax(filteredArray);

  return predMax;
}

// -----------------------------------------------------------------------------------------------------

interface GenerateRange {
  start: number;
  end: number;
}

/**
 * 4.5.4 Возвращает массив, заполненный целыми числами от минимального параметра до максимального
 * @param param GenerateRange
 * @return number[]
 */
export function generateRange(param: GenerateRange) {
  const { start, end } = param;

  return Array.from({ length: end - start + 1 }, (_, k) => start + k);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.5.5 Возвращает массив случайных латинских букв
 * @param length number
 * @return string[]
 */
export function fillRandomLettersArray(length: number) {
  const border = {
    upper: {
      min: 'A'.charCodeAt(0),
      max: 'Z'.charCodeAt(0),
    },
    lower: {
      min: 'A'.charCodeAt(0),
      max: 'Z'.charCodeAt(0),
    },
  };

  const randomArray = Array.from(
    { length },
    (_, __) =>
      [
        randomInt(border.upper.min, border.upper.max),
        randomInt(border.lower.min, border.lower.max),
      ][randomInt(0, 2)],
  );

  return randomArray.map((value) => String.fromCharCode(value));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.5.6 Возвращает сумму N первых чисел Фибоначчи
 * @param length number
 * @return number
 */
export function sumOfFirstNFibonacci(length: number) {
  const φ = 1.618034;

  const array = Array.from({ length }, (_, n) =>
    Math.floor((Math.pow(φ, n) - Math.pow(1 - φ, n)) / Math.sqrt(5)),
  );

  return getSumFromArray(array);
}
