import { getStringFromNum } from '../additional/utils';

/**
 * 1.7.1 Возвращает массив букв строки
 * @param str string
 * @return string[]
 */
export function getArrayOfStr(str: string) {
  const array = str.split('');

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.7.2 Возвращает массив цифр числа
 * @param num number
 * @return number[]
 */
export function getArrayDigitsFromNumber(num: number) {
  const array = getStringFromNum(num)
    .split('')
    .filter((str) => str != '.')
    .map((str) => +str);

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.7.3 Возвращает перевёрнутое число
 * @param num number
 * @return number
 */
export function getRevertNumber(num: number) {
  const array = getStringFromNum(num).split('').reverse();

  const newNum = +array.join('') * (num < 0 ? -1 : 1);

  return newNum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.7.4 Возвращает сумму цифр числа
 * @param num number
 * @return number
 */
export function getSumOfNumberDigits(num: number) {
  const array = getArrayDigitsFromNumber(num);

  const sum = array.reduce((sum, current) => sum + current);

  return sum;
}

// -----------------------------------------------------------------------------------------------------
