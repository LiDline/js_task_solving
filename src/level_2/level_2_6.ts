import { isNumber } from '../additional/utils';
import { isEvenNumber, isNegative } from '../level_1/level_1_1';
import { getCharsFromEnd } from '../level_1/level_1_5';

/**
 * 2.6.1 Возвращает массив позиций всех цифр строки
 * @param str string
 * @return number[]
 */
export function findDigitPositions(str: string): number[] {
  const digitPositions: number[] = [];

  for (let i = 0; i < str.length; i++) {
    if (isNumber(str[i])) {
      digitPositions.push(i);
    }
  }

  return digitPositions;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.6.2 Возвращает массив с перевернутыми цифрами в каждом числе
 * @param nums number[]
 * @return number[]
 */
export function reverseDigitsOfNumbersInArray(arr: number[]): number[] {
  const newArr: number[] = [];

  for (const num of arr) {
    const negative = isNegative(num);

    const numToStrWithoutMinus = String(Math.abs(num));
    const indexComa = numToStrWithoutMinus.indexOf('.');

    let countDigitsAfterComa;

    if (indexComa != -1) {
      countDigitsAfterComa = numToStrWithoutMinus.length - indexComa - 1;
    }

    const numToStrWithoutMinusAndComa = numToStrWithoutMinus.replace('.', '');

    const reverseNum = getCharsFromEnd(numToStrWithoutMinusAndComa);

    const reverseNumWithComa = countDigitsAfterComa
      ? reverseNum.slice(0, countDigitsAfterComa) +
        '.' +
        reverseNum.slice(countDigitsAfterComa, reverseNum.length)
      : reverseNum;

    newArr.push(Number(reverseNumWithComa) * (negative ? -1 : 1));
  }

  return newArr;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.6.3 Принимает строку с число. Возвращает число, в котором тройки цифр отделены пробелами, начиная с конца числа
 * @param str string
 * @return string
 */
export function formatNumberWithSpaces(str: string) {
  const reverseStr = getCharsFromEnd(str).split('');

  let newStr = [];

  for (let i = 0; i < reverseStr.length; i += 3) {
    newStr.push(' ', ...reverseStr.slice(i, i + 3));
  }

  return newStr.reverse().join('').trim();
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.6.4 Принимает строку. Возвращает строку с противоположным регистром букв
 * @param str string
 * @return string
 */
export function toggleCase(str: string) {
  let newStr = '';

  for (const element of str) {
    newStr += element.toLowerCase() == element ? element.toUpperCase() : element.toLowerCase();
  }

  return newStr;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.6.5 Принимает массив с числами. Возвращает массив со слитыми парами чисел
 * @param nums number[]
 * @return number[]
 */
export function mergePairs(nums: number[]) {
  const newNums: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    newNums.push(Number(nums.slice(i, i + 2).join('')));
  }

  return newNums;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.6.6 Возвращает строку, у которой каждый первый символ второго слова начинается с заглавной буквы
 * @param str string
 * @return string
 */
export function capitalizeEverySecondWord(str: string) {
  const strs = str.split(' ');
  const newStr: string[] = [];

  for (let i = 0; i < strs.length; i++) {
    const isEven = isEvenNumber(i + 1);

    const result = isEven ? strs[i][0].toUpperCase() + strs[i].slice(1) : strs[i];

    newStr.push(result);
  }

  return newStr.join(' ');
}
