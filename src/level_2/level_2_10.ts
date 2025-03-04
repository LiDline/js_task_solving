import { getStrFromNumWithoutMinusAndComa } from '../additional/utils';
import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 2.10.1 Принимает строку. Возвращает, что в этой строке не более 3-х букв
 * @param str string
 * @return boolean
 */
export function hasAtMostThreeLetters(str: string) {
  const reg = /[a-zA-Z]/g;

  const matches = str.match(reg);

  return matches ? matches.length <= 3 : true;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.10.2 Возвращает 1-ую чётную цифру с конца числа
 * @param num number
 * @return number
 */
export function findFirstEvenDigitFromEnd(num: number) {
  const numWithoutMinusAndComa = getStrFromNumWithoutMinusAndComa(num);

  for (let i = numWithoutMinusAndComa.length - 1; i >= 0; i--) {
    const digit = Number(numWithoutMinusAndComa[i]);

    if (!isNaN(digit) && isEvenNumber(digit)) {
      return digit;
    }
  }
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.10.3 Заменяет 1-ый символ на "!"
 * @param str string
 * @return string
 */
export function replaceFirstCharWithExclamation(str: string) {
  if (!str.length) {
    return '';
  }

  const strInArray = str.trim().split(' ');
  const newArray: string[] = [];

  for (const element of strInArray) {
    newArray.push('!' + element.slice(1));
  }

  return newArray.join(' ');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.10.4 Проверяет, есть ли в массиве два одинаковых числа подряд
 * @param nums number
 * @return boolean
 */
export function hasConsecutiveDuplicates(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }

  return false;
}
