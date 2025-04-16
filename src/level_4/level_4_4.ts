import { randomInt } from 'crypto';
import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 4.4.1 Возвращает кол-во делителей числа
 * @param num number
 * @return number
 */
export function countDivisors(num: number) {
  const newArray: number[] = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) newArray.push(i);
  }

  return newArray.length;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.4.2 Сделано в level_4_1.ts - getZodiacSign
 */

// -----------------------------------------------------------------------------------------------------

/**
 * 4.4.3 Сделано в level_3_7.ts - getDivisors
 */

// -----------------------------------------------------------------------------------------------------

/**
 * 4.4.4 Возвращает кол-во делителей числа
 * @param num number
 * @return boolean
 */
export function isPrime(num: number) {
  return countDivisors(num) == 2;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.4.5 Возвращает число без чётных цифр
 * @param num number
 * @return number
 */
export function removeEvenDigits(num: number) {
  const array = String(num).split('');

  const result = array.filter((value) => isNaN(+value) || !isEvenNumber(+value));

  return +result.join('');
}

// -----------------------------------------------------------------------------------------------------

interface FillRandomArray {
  n: number;
  min: number;
  max: number;
}

/**
 * 4.4.6 Возвращает массив N случайных чисел из заданного промежутка
 * @param param FillRandomArray
 * @return number[]
 */
export function fillRandomArray(param: FillRandomArray) {
  const { n, min, max } = param;

  return Array.from({ length: n }, (_, __) => randomInt(min, max));
}
